class SvgBase64Encoder {
  #root;

  constructor(placeholder) {
    this.root = placeholder;

    this.base64Text = this.root.querySelector('#base64');
    this.base64ImageText = this.root.querySelector('#base64_img');
    this.base64CssText = this.root.querySelector('#base64_Css');

    this.downloadBase64Btn = this.root.querySelector('#download_base64');
    this.downloadBase64Btn.onclick = () =>
      this.download(this.base64Text.innerHTML);

    this.downloadBase64ImgBtn = this.root.querySelector('#download_base64_image');
    this.downloadBase64ImgBtn.onclick = () =>
      this.download(
        this.base64ImageText.innerHTML.replace("&lt;", "<").replace("&gt;", ">"),
        "file.html"
      );

    this.downloadBase64CssBtn = this.root.querySelector('#download_base64_Css');
    this.downloadBase64CssBtn.onclick = () =>
      this.download("div {\r\t" + this.base64CssText.innerHTML + "\r}", "file.css");

    this.copyBase64Btn = this.root.querySelector('#copy_base64');
    this.copyBase64Btn.onclick = () =>
      this.copyToClipboard(this.base64Text.innerHTML);

    this.copyBase64ImgBtn = this.root.querySelector('#copy_base64_image');
    this.copyBase64ImgBtn.onclick = () =>
      this.copyToClipboard(
        this.base64ImageText.innerHTML.replace("&lt;", "<").replace("&gt;", ">")
      );

    this.copyBase64CssBtn = this.root.querySelector('#copy_base64_Css');
    this.copyBase64CssBtn.onclick = () =>
      this.copyToClipboard(this.base64CssText.innerHTML);

    this.imageCanvas = new ScalableCanvas(
      this.root.querySelector('#imgCnv'),
      this.root.querySelector('#imgzin'),
      this.root.querySelector('#imgzout'),
      this.root.querySelector('#imgzreset')
    );
    this.cleanBtn = this.root.querySelector('#clean');
    this.cleanBtn.onclick = () => this.clean();

    this.fileInput = this.root.querySelector('#fileInput');
    this.fileInput.onchange = () => {
      let selectedFile = this.fileInput.files[0];
      if (selectedFile && selectedFile.name != "") {
        this.onSrcChange(selectedFile);
      }
    };
  }

  async downloadUrl(url) {
    let res = await fetch(url);
    let img = await res.blob();
    this.onSrcChange(img);
  }

  async clean() {
    this.imageCanvas.setImages([]);
    this.base64Text.innerHTML = "";
    this.base64ImageText.innerHTML = "";
    this.base64CssText.innerHTML = "";
    this.cleanBtn.disabled = true;
    this.downloadBase64Btn.disabled = true;
    this.downloadBase64ImgBtn.disabled = true;
    this.downloadBase64CssBtn.disabled = true;

    this.copyBase64Btn.disabled = true;
    this.copyBase64ImgBtn.disabled = true;
    this.copyBase64CssBtn.disabled = true;
  }

  async copyToClipboard(text) {
    await navigator.clipboard.writeText(text);
  }

  download(src, target) {
    target = target || "file.txt";
    if (src) {
      var blob = new Blob([src], { type: "text/plain" });
      this.downloadFileBlob(blob, target);
    }
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

  async onSrcChange(srcFile) {
    let file = await this.readFile(srcFile);
    let image = await this.loadImage(file);
    this.imageCanvas.setImages([image]);
    this.base64Text.innerHTML = file;
    this.base64ImageText.innerHTML = "<img src='" + file + "'/>";
    this.base64CssText.innerHTML = "background-image: url(" + file + ")";
    this.cleanBtn.disabled = false;
    this.downloadBase64Btn.disabled = false;
    this.downloadBase64ImgBtn.disabled = false;
    this.downloadBase64CssBtn.disabled = false;

    this.copyBase64Btn.disabled = false;
    this.copyBase64ImgBtn.disabled = false;
    this.copyBase64CssBtn.disabled = false;
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
}
function initAppSvgBase64Encoder(id, url) {
  return new SvgBase64Encoder(id, url);
}
