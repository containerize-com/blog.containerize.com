class ScalableCanvas {
  constructor(canvas, zoomInBtn, zoomOutBtn, zoomResetBtn) {
    this.isMouseDown = false;
    this.transform = { x: 0, y: 0, scale: 1, startDragOffset: { x: 0, y: 0 } };
    this.scaleMultiplier = 0.8;
    this.images = null;
    this.canvases = [];
    this.spin == false;
    this.canvas = canvas;
    this.percent = 0;
    this.canvas.onmouseup = () => this.mouseUp();
    this.canvas.onmouseover = () => this.mouseOver();
    this.canvas.onmouseout = () => this.mouseOut();
    this.canvas.onmousemove = (event) => this.mouseMove(event);
    this.canvas.onmousedown = (event) => this.mouseDown(event);

    this.ctx = this.canvas.getContext("2d");
    if (zoomInBtn) zoomInBtn.onclick = () => this.zoomIn();
    if (zoomOutBtn) zoomOutBtn.onclick = () => this.zoomOut();
    if (zoomResetBtn) zoomResetBtn.onclick = () => this.zoomReset();
  }

  setImages(newArr) {
    this.images = newArr;
    this.drawImages();
  }

  setSpin(val) {
    if (this.spin === val) return;
    if (this.spin && this.spinId) clearInterval(this.spinId);
    this.spin = val;
    let context = this.ctx;
    if (!context) return;
    context.font = "10px serif";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillStyle = "#ffffff";
    const cW = context.canvas.width;
    const cH = context.canvas.height;
    if (this.spin) {
      let start = new Date().getTime();
      const lines = 12;
      this.spinId = setInterval(() => {
        let rotation =
          (((new Date().getTime() - start) / 1000) * lines) / lines;
        if (!context) return;
        context.save();
        context.imageSmoothingEnabled = true;
        context.clearRect(0, 0, cW, cH);
        context.translate(cW / 2, cH / 2);
        context.rotate(Math.PI * 2 * rotation);
        for (var i = 0; i < lines; i++) {
          context.beginPath();
          context.rotate((Math.PI * 2) / lines);
          context.moveTo(cW / 20, 0);
          context.lineTo(cW / 8, 0);
          context.lineWidth = cW / 60;
          context.strokeStyle = "rgba(255,255,255," + i / lines + ")";
          context.stroke();
        }
        context.restore();
        if (this.percent) {
          context.save();
          context.translate(cW / 2, cH / 2);
          context.fillText(this.percent + "%", 0, 0);
          context.restore();
        }
      }, 1000 / 10);
    } 
  }

  mouseDown(evt) {
    this.isMouseDown = true;
    this.transform.startDragOffset.x = evt.clientX - this.transform.x;
    this.transform.startDragOffset.y = evt.clientY - this.transform.y;
  }

  mouseUp() {
    this.isMouseDown = false;
  }

  mouseOver() {
    this.isMouseDown = false;
  }

  mouseOut() {
    this.isMouseDown = false;
  }

  zoomIn() {
    this.transform.scale /= this.scaleMultiplier;
    this.drawImages();
  }

  zoomOut() {
    this.transform.scale *= this.scaleMultiplier;
    this.drawImages();
  }

  zoomReset() {
    this.transform.scale = 1;
    this.transform.x = 0;
    this.transform.y = 0;
    this.drawImages();
  }

  mouseMove(evt) {
    if (this.isMouseDown) {
      this.transform.x = evt.clientX - this.transform.startDragOffset.x;
      this.transform.y = evt.clientY - this.transform.startDragOffset.y;
      this.drawImages();
    }
  }
  drawImage(img, width, height) {
    if (!this.ctx) return;
    let hRatio = width / img.width;
    let vRatio = height / img.height;
    let ratio = Math.min(hRatio, vRatio);
    let centerShift_x = (width - img.width * ratio) / 2;
    let centerShift_y = (height - img.height * ratio) / 2;
    this.ctx.save();
    this.ctx.translate(this.transform.x, this.transform.y);
    this.ctx.scale(this.transform.scale, this.transform.scale);
    this.ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
    this.ctx.restore();
  }

  clear() {
    if (this.ctx) {
      let width = this.canvas.width;
      let height = this.canvas.height;
      this.ctx.clearRect(0, 0, width, height);
    }
  }

  drawImages() {
    if (!this.images) return;
    if (this.ctx) {
      let width = this.canvas.width;
      let height = this.canvas.height;
      this.ctx.clearRect(0, 0, width, height);
      for (let img of this.images) this.drawImage(img, width, height);
      for (let cnv of this.canvases) this.drawImage(cnv, width, height);
    }
  }
}

class ScalableSvgContainer {
  constructor(container, svg, zoomInBtn, zoomOutBtn, zoomResetBtn) {
    this.isMouseDown = false;
    this.transform = { x: 0, y: 0, scale: 1, startDragOffset: { x: 0, y: 0 } };
    this.scaleMultiplier = 0.8;

    this.container = container;
    this.svg = svg;
    this.container.onmouseup = () => this.mouseUp();
    this.container.onmouseover = () => this.mouseOver();
    this.container.onmouseout = () => this.mouseOut();
    this.container.onmousemove = (event) => this.mouseMove(event);
    this.container.onmousedown = (event) => this.mouseDown(event);

    zoomInBtn.onclick = () => this.zoomIn();
    zoomOutBtn.onclick = () => this.zoomOut();
    zoomResetBtn.onclick = () => this.zoomReset();
    this.refreshIntervalId = 0;
  }

  transformSvg() {
    this.svg.setAttributeNS(
      null,
      "transform",
      `scale(${this.transform.scale}) translate(${this.transform.x} ${this.transform.y})`
    );
  }

  mouseDown(evt) {
    this.isMouseDown = true;
    this.transform.startDragOffset.x = evt.clientX - this.transform.x;
    this.transform.startDragOffset.y = evt.clientY - this.transform.y;
    this.g = document.getElementById("svgResult");
    this.refreshIntervalId = setInterval(() => {
      if (this.refresh) {
        this.transformSvg();
        this.refresh = false;
      }
    }, 100);
  }

  mouseUp() {
    this.isMouseDown = false;
    if (this.refreshIntervalId) {
      clearInterval(this.refreshIntervalId);
      this.refreshIntervalId = 0;
    }
  }

  mouseOver() {}

  mouseOut() {}

  zoomIn() {
    this.transform.scale /= this.scaleMultiplier;
    this.transformSvg();
  }

  zoomOut() {
    this.transform.scale *= this.scaleMultiplier;
    this.transformSvg();
  }

  zoomReset() {
    this.transform.scale = 1;
    this.transform.x = 0;
    this.transform.y = 0;
    this.container.style.left = 0;
    this.container.style.top = 0;
    this.transformSvg();
  }

  mouseMove(evt) {
    if (this.isMouseDown) {
      this.transform.x = evt.clientX - this.transform.startDragOffset.x;
      this.transform.y = evt.clientY - this.transform.startDragOffset.y;
      this.refresh = true;
    }
  }
}
