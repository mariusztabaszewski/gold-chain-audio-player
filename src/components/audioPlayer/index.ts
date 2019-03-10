import createTimeString from "utils/createTimeString.ts";
import "./index.scss";

class AudioPlayer {
  analyser: any;
  audio: any;
  bufferLength: number;
  cancelAudioPlayerMainLoop: Function;
  currentTime: HTMLElement;
  dataArray: Array<number>;
  fileInput: HTMLElement;
  fileLabel: HTMLElement;
  isPlaying: boolean;
  isStarted: boolean;
  rangeInput: HTMLElement;
  togglePlayButton: HTMLElement;
  trackLength: HTMLElement;

  togglePlay() {
    if (this.isPlaying) {
      this.audio.pause();
      this.togglePlayButton.setAttribute("class", "player__toggle-play-button");
    } else {
      this.audio.play();
      this.togglePlayButton.setAttribute(
        "class",
        "player__toggle-play-button player__toggle-play-button--pause"
      );
    }
    this.isPlaying = !this.isPlaying;
  }

  updateTime() {
    if (this.audio && this.audio.currentTime) {
      this.currentTime.innerHTML = createTimeString(this.audio.currentTime);
    }
  }

  createFileInput() {
    this.fileLabel = document.createElement("label");
    this.fileLabel.setAttribute("for", "file-input");

    this.fileInput = document.createElement("input");
    this.fileInput.setAttribute("id", "file-input");
    this.fileInput.setAttribute("type", "file");
    this.fileInput.setAttribute("class", "player__file-input");

    const addFileButton: HTMLElement = document.createElement("div");
    addFileButton.setAttribute("class", "player__add-file-button");

    this.fileLabel.appendChild(this.fileInput);
    this.fileLabel.appendChild(addFileButton);

    return this.fileLabel;
  }

  createTogglePlayButton() {
    this.togglePlayButton = document.createElement("button");
    this.togglePlayButton.setAttribute("type", "button");
    this.togglePlayButton.setAttribute("class", "player__toggle-play-button");

    this.togglePlayButton.addEventListener("click", () => {
      this.togglePlay();
    });

    return this.togglePlayButton;
  }

  createStopButton() {
    const stopButton: HTMLElement = document.createElement("button");
    stopButton.setAttribute("type", "button");
    stopButton.setAttribute("class", "player__stop-button");

    stopButton.addEventListener("click", () => {
      this.audio.src = "";
      this.fileInput.value = "";
      this.trackLength.innerHTML = "00:00";
      this.currentTime.innerHTML = "00:00";
      this.rangeInput.max = 0;
      this.rangeInput.value = 0;
      this.togglePlayButton.setAttribute("class", "player__toggle-play-button");
      this.isStarted = false;
      this.isPlaying = false;
      this.cancelAudioPlayerMainLoop();
    });

    return stopButton;
  }

  createRangeInput() {
    this.rangeInput = document.createElement("input");
    this.rangeInput.setAttribute("type", "range");
    this.rangeInput.setAttribute("min", "0");
    this.rangeInput.setAttribute("max", "0");
    this.rangeInput.setAttribute("step", "1");
    this.rangeInput.setAttribute("value", "0");
    this.rangeInput.setAttribute("class", "player__range-input");

    this.rangeInput.addEventListener("input", e => {
      this.currentTime.innerHTML = createTimeString(e.target.value / 1000);
    });

    this.rangeInput.addEventListener("change", e => {
      this.audio.currentTime = e.target.value / 1000;
      this.rangeInput.value = this.audio.currentTime * 1000;
    });

    return this.rangeInput;
  }

  createCurrentTimeElement() {
    this.currentTime = document.createElement("div");
    this.currentTime.setAttribute("class", "player__time-element");
    this.currentTime.innerHTML = "00:00";

    return this.currentTime;
  }

  createTrackLengthElement() {
    this.trackLength = document.createElement("div");
    this.trackLength.setAttribute("class", "player__time-element");
    this.trackLength.innerHTML = "00:00";

    return this.trackLength;
  }

  returnCurrentData() {
    return {
      analyser: this.analyser,
      dataArray: this.dataArray
    };
  }

  initAudioPlayer(src: any) {
    const AudioContext: any = window.AudioContext || window.webkitAudioContext;
    const audioContext: any = new AudioContext();
    this.analyser = audioContext.createAnalyser();
    this.audio = new Audio();
    this.audio.src = src;
    const source: any = audioContext.createMediaElementSource(this.audio);
    source.connect(this.analyser);
    this.analyser.connect(audioContext.destination);
    this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);
    this.bufferLength = this.analyser.frequencyBinCount;

    this.audio.addEventListener("canplay", () => {
      this.trackLength.innerHTML = createTimeString(this.audio.duration);
      this.rangeInput.max = this.audio.duration * 1000;
      if (!this.isStarted) {
        this.togglePlay();
        this.isStarted = true;
      }
    });
  }

  initPlayer(initAudioPlayerMainLoop: Function) {
    this.fileInput.addEventListener("change", e => {
      this.initAudioPlayer(URL.createObjectURL(e.target.files[0]));
      initAudioPlayerMainLoop();
    });
  }

  render(
    initAudioPlayerMainLoop: Function,
    cancelAudioPlayerMainLoop: Function
  ) {
    const player: HTMLElement = document.createElement("div");
    player.setAttribute("class", "player");

    const timeContainer: HTMLElement = document.createElement("div");
    timeContainer.setAttribute("class", "player__time-container");
    timeContainer.appendChild(this.createCurrentTimeElement());
    timeContainer.appendChild(this.createTrackLengthElement());

    player.appendChild(this.createFileInput());
    player.appendChild(this.createTogglePlayButton());
    player.appendChild(this.createStopButton());
    player.appendChild(this.createRangeInput());
    player.appendChild(timeContainer);

    this.cancelAudioPlayerMainLoop = cancelAudioPlayerMainLoop;
    this.initPlayer(initAudioPlayerMainLoop);

    return player;
  }
}

export default AudioPlayer;
