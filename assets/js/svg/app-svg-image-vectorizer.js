class ImageVectorizer {
  #root;
  #workerName;

  constructor(placeholder, options) {
    this.root = placeholder;
    this.srcImages = [];
    this.svgImages = [];
    this.srcCanvas = [];
    this.quant = undefined;
    this.worker = undefined;
    this.method = 1;
    this.bindValProperty("method");
    this.scale = options.scale;
    this.bindValProperty("scale");
    this.grayscale = this.root.querySelector("#grayscale");
    if (options.grayscale == "true") this.grayscale.checked = true;
    this.colors = options.colors;
    this.bindValProperty("colors");
    this.minHueCols = 5000;
    this.bindValProperty("minHueCols");
    this.quantizeBtn = this.root.querySelector("#quantize");
    this.quantizeBtn.disabled = true;
    this.quantizeBtn.onclick = () => this.quantize();
    this.downloadQuantBtn = this.root.querySelector("#download_quant");
    this.downloadQuantBtn.disabled = true;
    this.downloadQuantBtn.onclick = () => this.downloadQuant();
    this.threshold = options.threshold;
    this.bindValProperty("threshold");
    this.extent = options.extent;
    this.bindValProperty("extent");
    this.lineWidth = options.lineWidth;
    this.bindValProperty("lineWidth");
    this.stroot = this.root.querySelector("#stroot");
    this.stencil = this.root.querySelector("#stencil");
    this.stencil.value = options.stencil;
    this.stencil.onchange = () => this.setColorStyle();
    this.stencilColor = this.root.querySelector("#stencilColor");
    this.stencilColor.value = options.stencilColor;
    this.stencilColor.onchange = () => this.setColorStyle();
    this.trace = this.root.querySelector("#trace");
    if (options.trace == "true") this.trace.checked = true;
    this.trace.onclick = () => {
      let g = document.getElementById("groot");
      if (g) {
        g.setAttributeNS(
          null,
          "marker-mid",
          this.trace.checked ? "url(#dot)" : ""
        );
      }
    };
    this.sizeWarning = this.root.querySelector("#sizeWarning");

    this.vectorizeBtn = this.root.querySelector("#vectorize");
    this.vectorizeBtn.disabled = true;
    this.vectorizeBtn.onclick = () => this.vectorize();
    this.downloadBtn = this.root.querySelector("#download_result");
    this.downloadBtn.onclick = () => this.download();
    this.cleanBtn = this.root.querySelector("#clean");
    this.cleanBtn.onclick = () => this.clean();
    this.size = this.root.querySelector("#size");
    this.size.innerText = "0 kB";
    this.svg = "";
    this.imageCanvas = new ScalableCanvas(
      this.root.querySelector("#imgCnv"),
      this.root.querySelector("#imgzin"),
      this.root.querySelector("#imgzout"),
      this.root.querySelector("#imgzreset")
    );
    this.qtCanvas = new ScalableCanvas(
      this.root.querySelector("#qtCnv"),
      this.root.querySelector("#qtzin"),
      this.root.querySelector("#qtzout"),
      this.root.querySelector("#qtzreset")
    );
    this.svgResultCtr = this.root.querySelector("#svgResultCtr");
    this.svgResult = this.root.querySelector("#svgResult");

    this.svgContainer = new ScalableSvgContainer(
      this.svgResultCtr,
      this.svgResult,
      this.root.querySelector("#vctzin"),
      this.root.querySelector("#vctzout"),
      this.root.querySelector("#vctzreset")
    );

    this.vctCanvas = new ScalableCanvas(this.root.querySelector("#vctCnv"));

    this.fileInput = this.root.querySelector("#fileInput");
    this.fileInput.onchange = () => {
      let selectedFile = this.fileInput.files[0];
      if (selectedFile && selectedFile.name != "") {
        this.onSrcChange(selectedFile);
      }
    };
  }

  useWorker(workerName) {
    this.workerName = workerName;
  }

  async downloadUrl(url) {
    let res = await fetch(url);
    let img = await res.blob();
    this.onSrcChange(img);
  }

  async clean() {
    this.imageCanvas.setImages([]);
    this.qtCanvas.setImages([]);
    this.vctCanvas.clear();
    this.sizeWarning.style.display = "none";
    let oldG = document.getElementById("groot");
    if (oldG) this.svgResult.removeChild(oldG);
    this.vectorizeBtn.disabled = true;
    this.cleanBtn.disabled = true;
    this.downloadBtn.disabled = true;
    this.quantizeBtn.disabled = true;
    this.downloadQuantBtn.disabled = true;
  }

  bindValProperty(name) {
    let prop = this.root.querySelector("#" + name);
    prop.value = this[name];
    prop.onchange = () => {
      this[name] = prop.value;
      if (name === "lineWidth") {
        let g = document.getElementById("groot");
        if (g) g.setAttributeNS(null, "stroke-width", this.lineWidth * 10);
      }
    };
  }

  async onSrcChange(srcFile) {
    try {
      let file = await this.readFile(srcFile);
      let image = await this.loadImage(file);
      this.srcImages = [image];
      this.imageCanvas.setImages(this.srcImages);
      await this.quantize();
      await this.vectorize();
      this.cleanBtn.disabled = false;
    } catch (e) {
      console.log(e);
    }
  }

  async readFile(blob) {
    return new Promise((resolve, reject) => {
      var fr = new FileReader();
      fr.onload = () => resolve(fr.result);
      fr.onabort = reject;
      fr.onerror = reject;
      fr.readAsDataURL(blob);
    });
  }

  async loadImage(imagePath) {
    return new Promise((resolve, reject) => {
      let img = new Image();
      img.crossOrigin = "Anonymous";
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = imagePath;
    });
  }

  drawPalette(idxi8, width) {
    var idxi32 = new Uint32Array(idxi8.buffer);

    let can = document.createElement("canvas");
    let ctx = can.getContext("2d");
    if (!ctx) return;

    can.width = width;
    can.height = Math.ceil(idxi32.length / width);

    var imgd = ctx.createImageData(can.width, can.height);

    let buf32 = new Uint32Array(imgd.data.buffer);
    buf32.set(idxi32);

    ctx.putImageData(imgd, 0, 0);
    this.srcCanvas = [can];
    this.qtCanvas.setImages(this.srcCanvas);
  }

  getImageData(img) {
    let can = document.createElement("canvas");
    can.width = img.naturalWidth * this.scale;
    can.height = img.naturalHeight * this.scale;
    let ctx = can.getContext("2d");
    if (ctx) {
      ctx.fillStyle = "white";
      ctx.imageSmoothingEnabled = false;
      ctx.fillRect(0, 0, can.width, can.height);
      ctx.drawImage(
        img,
        0,
        0,
        img.naturalWidth,
        img.naturalHeight,
        0,
        0,
        can.width,
        can.height
      );
      var imageData = ctx.getImageData(0, 0, can.width, can.height);
      if (!this.grayscale.checked) return imageData;
      for (var j = 0; j < imageData.width; j++) {
        for (var i = 0; i < imageData.height; i++) {
          var index = i * 4 * imageData.width + j * 4;
          var red = imageData.data[index];
          var green = imageData.data[index + 1];
          var blue = imageData.data[index + 2];
          var alpha = imageData.data[index + 3];
          var average = (red + green + blue) / 3;
          imageData.data[index] = average;
          imageData.data[index + 1] = average;
          imageData.data[index + 2] = average;
          imageData.data[index + 3] = alpha;
        }
      }
      return imageData;
    }
    return undefined;
  }

  async vectorizeImage(img) {
    return new Promise((resolve, _) => {
      let options = {
        threshold: this.threshold,
        extent: this.extent,
        lineWidth: this.lineWidth,
      };
      if (typeof Worker !== "undefined") {
        const worker = new Worker(this.workerName);
        worker.onmessage = ({ data }) => {
          if (data.status === "progress") this.vctCanvas.percent = data.value;
          else if (data.status === "error") {
            this.sizeWarning.style.display = "block";
          } else {
            this.vctCanvas.percent = 0;
            resolve(data.svg);
          }
        };
        worker.postMessage({ op: 2, img: img, opts: options });
      } else {
        resolve(vectorize(img, options));
      }
    });
  }

  async quantizeImage(img) {
    return new Promise((resolve, reject) => {
      let opts = {
        colors: this.colors,
        method: this.method == 1 ? 2 : 1,
        initColors: 4096,
        minHueCols: this.minHueCols,
        dithKern: null,
        dithSerp: false,
      };
      let imgData = this.getImageData(img);
      if (!imgData) {
        reject("can't read src file");
        return;
      }
      let data = new Uint8Array(imgData.data);
      if (typeof Worker !== "undefined") {
        const worker = new Worker(this.workerName);
        worker.onmessage = ({ data }) => {
          resolve({
            pal8: data.quant.pal8,
            img8: data.quant.img8,
            width: imgData.width,
            height: imgData.height,
          });
        };
        worker.postMessage({
          op: 1,
          opts: opts,
          imgData: data,
        });
      } else {
        let qi = quantize(opts, data);
        resolve({
          pal8: qi.pal8,
          img8: qi.img8,
          width: imgData.width,
          height: imgData.height,
        });
      }
    });
  }

  async quantize() {
    this.quantizeBtn.disabled = true;
    this.downloadQuantBtn.disabled = true;
    let img = this.srcImages[0];
    this.qtCanvas.setSpin(true);
    try {
      this.quant = await this.quantizeImage(img);
    } catch (err) {
      console.log(err);
    } finally {
      this.qtCanvas.setSpin(false);
      this.quantizeBtn.disabled = false;
      this.downloadQuantBtn.disabled = false;
    }
    this.drawPalette(this.quant.img8, this.quant.width);
  }

  formatFileSize(bytes, si = true, dp = 1) {
    const thresh = si ? 1000 : 1024;
    if (Math.abs(bytes) < thresh) {
      return bytes + " B";
    }
    const units = si
      ? ["kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
      : ["KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];
    let u = -1;
    const r = 10 ** dp;

    do {
      bytes /= thresh;
      ++u;
    } while (
      Math.round(Math.abs(bytes) * r) / r >= thresh &&
      u < units.length - 1
    );

    return bytes.toFixed(dp) + " " + units[u];
  }

  downloadFileBlob(blob, fileName) {
    if (window.navigator.msSaveOrOpenBlob) {
      // IE11
      window.navigator.msSaveOrOpenBlob(blob, fileName);
    } else {
      const url = window.URL.createObjectURL(blob);
      if (fileName) {
        const anchorTag = document.createElement("a");
        try {
          document.body.appendChild(anchorTag);
          anchorTag.setAttribute("style", "display: none");
          anchorTag.href = url;
          anchorTag.download = fileName;
          anchorTag.click();
          window.URL.revokeObjectURL(url);
          anchorTag.remove();
        } catch (error) {
          anchorTag.remove();
          document.body.removeChild(anchorTag);
          alert(`Cannot download file ${fileName}`);
        }
      } else {
        window.open(url);
      }
    }
  }

  downloadQuant() {
    if (this.srcCanvas && this.srcCanvas.length > 0)
      this.srcCanvas[0].toBlob((blob) =>
        this.downloadFileBlob(blob, "quantized.png")
      );
  }

  download() {
    if (this.svg) {
      var svg = [];
      let stencil = this.stencil.value;
      svg.push(
        `<svg xmlns="http://www.w3.org/2000/svg" width = "100%" height="100%" viewBox ="0 0 ${this.svg.width} ${this.svg.height}">`
      );
      svg.push("<style>");
      for (let i = 0; i < this.svg.colors.length; i++) {
        let color = this.svg.colors[i];
        let st = `.c${i}{ fill: ${
          stencil == "none" ? color : "none"
        }; stroke: ${
          stencil == "monocolor" ? this.stencilColor.value : color
        };}`;
        svg.push(st);
      }
      svg.push("</style>");
      svg.push(
        `<g transform="scale(0.1 0.1)" stroke-width="${this.lineWidth * 10}">`
      );

      for (let i = 0; i < this.svg.ds.length; i++) {
        let d = this.svg.ds[i];
        svg.push(`<path d="${d.d}" class="c${d.color}"/>`);
      }
      svg.push("</g>");
      svg.push("</svg>");
      var blob = new Blob([svg.join("\n")], { type: "image/svg+xml" });
      this.downloadFileBlob(blob, "result.svg");
    }
  }

  setColorStyle() {
    let stencil = this.stencil.value;
    let styles = [];
    for (let i = 0; i < this.svg.colors.length; i++) {
      let color = this.svg.colors[i];
      let st = `.c${i}{ fill: ${stencil == "none" ? color : "none"}; stroke: ${
        stencil == "monocolor" ? this.stencilColor.value : color
      };}`;
      styles.push(st);
    }
    this.stroot.textContent = styles.join("\n");
    return this.stroot.textContent.length + 16;
  }

  async vectorize() {
    try {
      this.downloadBtn.disabled = true;
      this.vectorizeBtn.disabled = true;
      this.sizeWarning.style.display = "none";
      this.stroot.textContent = "";
      let oldG = document.getElementById("groot");
      if (oldG) this.svgResult.removeChild(oldG);

      this.vctCanvas.setSpin(true);
      this.svg = await this.vectorizeImage(this.quant);
      this.vctCanvas.setSpin(false);
      this.vctCanvas.clear();

      if (this.svg == 0) return;
      this.vctCanvas.clear();
      let sum = 107;
      this.svgResult.setAttributeNS(
        null,
        "viewBox",
        `0 0 ${this.svg.width} ${this.svg.height}`
      );
      sum += this.setColorStyle();
      let g = document.createElementNS("http://www.w3.org/2000/svg", "g");
      g.setAttributeNS(null, "id", "groot");
      g.setAttributeNS(null, "transform", "scale(0.1)");
      g.setAttributeNS(null, "stroke-width", this.lineWidth * 10);
      g.setAttributeNS(
        null,
        "marker-mid",
        this.trace.checked ? "url(#dot)" : ""
      );
      for (let i = 0; i < this.svg.ds.length; i++) {
        let path = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "path"
        );
        let d = this.svg.ds[i];
        path.setAttributeNS(null, "d", d.d);
        sum += d.d.length + 22;
        path.setAttributeNS(null, "class", `c${d.color}`);
        g.appendChild(path);
      }
      this.svgResult.appendChild(g);
      this.svgContainer.transformSvg();
      this.size.innerText = this.formatFileSize(sum);
      this.downloadBtn.disabled = false;
    } catch (err) {
      this.vctCanvas.setSpin(false);
      console.log(err);
    } finally {
      this.vectorizeBtn.disabled = false;
    }
  }
}
function initAppSvgImageVectorizer(id, file, colors) {
  return new ImageVectorizer(id, file, colors);
}
