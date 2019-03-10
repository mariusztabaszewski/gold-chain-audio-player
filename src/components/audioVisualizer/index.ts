import scaleCanvas from "utils/scaleCanvas.ts";
import "./index.scss";

class AudioVisalizer {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  colorYellow: string = "#FFD700";

  drawChainElement(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    width: number,
    frequency: number
  ) {
    this.ctx.beginPath();
    this.ctx.arc(
      x1,
      y1,
      frequency * 0.2 > 30 ? frequency * 0.2 : 30,
      0,
      2 * Math.PI
    );
    this.ctx.strokeStyle = this.colorYellow;
    this.ctx.lineWidth = 6;
    this.ctx.stroke();
  }

  drawChain({
    analyser,
    dataArray
  }: { analyser: any; dataArray: Array<number> } = {}) {
    const bars: number = 17;
    const barWidth: number = 2;
    const radius: number = 220;
    const centerX: number = 300;
    const centerY: number = 0;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    if (analyser && dataArray) {
      analyser.getByteFrequencyData(dataArray);
    }
    for (let i = 0; i < bars; i += 1) {
      const rads: number = Math.PI / 16;
      const barHeight: number = dataArray && dataArray[i] * 0.7;
      const x: number = centerX + Math.cos(rads * i) * radius;
      const y: number = centerY + Math.sin(rads * i) * radius;
      const xEnd: number = centerX + Math.cos(rads * i) * (radius + barHeight);
      const yEnd: number = centerY + Math.sin(rads * i) * (radius + barHeight);
      this.drawChainElement(
        x,
        y,
        xEnd,
        yEnd,
        barWidth,
        dataArray && dataArray[i]
      );
    }
  }

  render() {
    this.canvas = document.createElement("canvas");
    this.canvas.setAttribute("class", "canvas");
    this.canvas.width = 600;
    this.canvas.height = 350;
    this.ctx = this.canvas.getContext("2d");
    scaleCanvas(this.canvas, this.ctx, this.canvas.width, this.canvas.height);
    this.drawChain();

    return this.canvas;
  }
}

export default AudioVisalizer;
