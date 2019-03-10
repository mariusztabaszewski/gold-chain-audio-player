// https://gist.github.com/callumlocke/cc258a193839691f60dd

const scaleCanvas = (
  canvas: HTMLCanvasElement,
  context: CanvasRenderingContext2D,
  width: number,
  height: number
) => {
  const devicePixelRatio: number = window.devicePixelRatio || 1;
  const backingStoreRatio: number =
    context.webkitBackingStorePixelRatio ||
    context.mozBackingStorePixelRatio ||
    context.msBackingStorePixelRatio ||
    context.oBackingStorePixelRatio ||
    context.backingStorePixelRatio ||
    1;
  const ratio: number = devicePixelRatio / backingStoreRatio;
  if (devicePixelRatio !== backingStoreRatio) {
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
  } else {
    canvas.width = width;
    canvas.height = height;
    canvas.style.width = "";
    canvas.style.height = "";
  }
  context.scale(ratio, ratio);
};

export default scaleCanvas;
