"use client"
import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';
import * as tmImage from '@teachablemachine/image';

const URL = "https://teachablemachine.withgoogle.com/models/2l5fpoYUy/";

interface Prediction {
  className: string;
  probability: number;
}

const IndexPage: React.FC = () => {
  const [isWebcamLoaded, setIsWebcamLoaded] = useState(false);

  const webcamContainerRef = useRef<HTMLDivElement | null>(null);
  let model: any;
  let webcam: any;
  let labelContainer: HTMLElement | null;
  let maxPredictions: number;
  let sentence = "";
  let sentenceCounter = 0;

  useEffect(() => {
    let isMounted = true;

    async function loadModel() {
      const modelURL = URL + "model.json";
      const metadataURL = URL + "metadata.json";

      model = await tmImage.load(modelURL, metadataURL);
      maxPredictions = model.getTotalClasses();

      const flip = true;
      webcam = new tmImage.Webcam(200, 200, flip);
      await webcam.setup();
      await webcam.play();

      window.requestAnimationFrame(loop);

      if (webcamContainerRef.current) {
        webcamContainerRef.current.appendChild(webcam.canvas);
        labelContainer = document.getElementById("label-container");
        if (labelContainer) {
          for (let i = 0; i < maxPredictions; i++) {
            labelContainer.appendChild(document.createElement("div"));
          }
        }
      }

      setIsWebcamLoaded(true);
    }

    loadModel();

    return () => {
      isMounted = false;

      if (webcam) {
        webcam.stop();
        webcam = null;
      }
    };
  }, []);

  const loop = () => {
    if (webcam) {
      webcam.update();
      predict();
      window.requestAnimationFrame(loop);
    }
  };

  const predict = async () => {
    if (!model || !webcam || !labelContainer || !webcam.canvas) return;
  
    const prediction: Prediction[] = await model.predict(webcam.canvas);
    const maxProbabilityIndex = findMaxProbabilityIndex(prediction);
  
    const firstChild = labelContainer.childNodes[0] as HTMLElement;
  
    if (firstChild) {
      const classPrediction =
        prediction[maxProbabilityIndex].className +
        ": " +
        prediction[maxProbabilityIndex].probability.toFixed(2);
      firstChild.innerHTML = classPrediction;
    }
  
    if (sentenceCounter < 10) {
      sentence += prediction[maxProbabilityIndex].className + " ";
      sentenceCounter++;
    } else {
      console.log("Sentence:", sentence);
      sentence = "";
      sentenceCounter = 0;
    }
  };

  const findMaxProbabilityIndex = (prediction: Prediction[]) => {
    let maxIndex = 0;
    let maxProbability = prediction[0].probability;
    for (let i = 1; i < maxPredictions; i++) {
      if (prediction[i].probability > maxProbability) {
        maxProbability = prediction[i].probability;
        maxIndex = i;
      }
    }
    return maxIndex;
  };

  return (
    <div>
      <h1>Sign Language Practice Ground</h1>
      <button type="button" onClick={() => {}}>Start</button>
      <div id="webcam-container" ref={webcamContainerRef}></div>
      <div id="label-container"></div>
      {isWebcamLoaded && (
        <Script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@latest/dist/tf.min.js" />
      )}
      {isWebcamLoaded && (
        <Script src="https://cdn.jsdelivr.net/npm/@teachablemachine/image@latest/dist/teachablemachine-image.min.js" />
      )}
    </div>
  );
};

export default IndexPage;