import AudioPlayer from "components/audioPlayer/index.ts";
import AudioVisalizer from "components/audioVisualizer/index.ts";
import "styles/styles.scss";

const audioPlayer = new AudioPlayer();
const audioVisalizer = new AudioVisalizer();

let requestId: number;

const initAudioPlayerMainLoop = () => {
  audioPlayer.updateTime();
  audioVisalizer.drawChain(audioPlayer.returnCurrentData());
  requestId = window.requestAnimationFrame(initAudioPlayerMainLoop);
};

document.body.appendChild(
  audioPlayer.render(initAudioPlayerMainLoop, () =>
    window.cancelAnimationFrame(requestId)
  )
);
document.body.appendChild(audioVisalizer.render());
