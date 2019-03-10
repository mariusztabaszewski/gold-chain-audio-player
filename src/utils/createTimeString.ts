const createTimeString = (duration: number) => {
  let min: number = Math.floor(duration / 60);
  let secs: number = Math.floor(duration % 60);
  if (min < 10) {
    min = `0${min}`;
  }
  if (secs < 10) {
    secs = `0${secs}`;
  }
  return `${min}:${secs}`;
};

export default createTimeString;
