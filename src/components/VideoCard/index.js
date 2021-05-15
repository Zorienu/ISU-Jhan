import { useEffect } from 'react'
import { Paper, makeStyles } from "@material-ui/core";
// import * as tf from '@tensorflow/tfjs'
import * as blazeface from '@tensorflow-models/blazeface'

const useStyles = makeStyles((theme) => ({
   root: {
      height: "380px",
      justifyContent: "center",
   },
   video: {
      margin: "auto",
      display: "inline-block",
      height: "100%"
   },
   canvas: {
      height: "380px",
      left: "67px",
      margin: "auto",
      position: "relative",
      top: "-384px"
   }
}))


export default function VideoCard() {
   const classes = useStyles()

   useEffect(() => {
      //Coded by oh yicong, visit my youtube channel for more programming tutorials :)
      var model, mask_model, ctx, videoWidth, videoHeight, canvas;
      const video = document.getElementById('video');

      const state = {
         backend: 'webgl'
      };

      async function setupCamera() {
         const stream = await navigator.mediaDevices.getUserMedia({
            'audio': false,
            'video': { facingMode: 'user' },
         });

         video.srcObject = stream;

         return new Promise((resolve) => {
            video.onloadedmetadata = () => {
               resolve(video);
            };
         });
      }

      const renderPrediction = async () => {
         try {
            window.tf.engine().startScope()
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            //estimatefaces model takes in 4 parameter (1) video, returnTensors, flipHorizontal, and annotateBoxes
            const predictions = await model.estimateFaces(video, true, false, false);
            const offset = window.tf.scalar(127.5);
            //check if prediction length is more than 0
            if (predictions.length > 0) {
               //clear context

               for (let i in predictions) {
                  var text = ""
                  var start = predictions[i].topLeft.arraySync();
                  var end = predictions[i].bottomRight.arraySync();
                  var size = [end[0] - start[0], end[1] - start[1]];
                  if (videoWidth < end[0] || videoHeight < end[1] || start[0] < 0 || start[1] < 0) {
                     console.log("image out of frame")
                     continue
                  }
                  var inputImage = window.tf.browser.fromPixels(video).toFloat()
                  inputImage = inputImage.sub(offset).div(offset);
                  inputImage = inputImage.slice([parseInt(start[1]), parseInt(start[0]), 0], [parseInt(size[1]), parseInt(size[0]), 3])
                  inputImage = inputImage.resizeBilinear([224, 224]).reshape([1, 224, 224, 3])
                  let result = mask_model.predict(inputImage).dataSync()
                  result = Array.from(result)
                  ctx.beginPath()
                  if (result[1] > result[0]) {
                     //no mask on
                     // await fetch('http://192.168.1.11:4000/0')
                     ctx.strokeStyle = "red"
                     ctx.fillStyle = "red";
                     text = "No Mask: " + (result[1] * 100).toPrecision(3).toString() + "%";
                  } else {
                     //mask on
                     // await fetch('http://192.168.1.11:4000/1')
                     ctx.strokeStyle = "green"
                     ctx.fillStyle = "green";
                     text = "Mask: " + (result[0] * 100).toPrecision(3).toString() + "%";
                  }
                  ctx.lineWidth = "4"
                  ctx.rect(start[0], start[1], size[0], size[1])
                  ctx.stroke()
                  ctx.font = "bold 15pt sans-serif";
                  ctx.fillText(text, start[0] + 5, start[1] + 20)
               }
            }
            //update frame
            requestAnimationFrame(renderPrediction);
            window.tf.engine().endScope()
         } catch (error) {
            console.log(error)
         }
      };

      const setupPage = async () => {
         await window.tf.setBackend(state.backend);
         await setupCamera();
         video.play();

         videoWidth = video.videoWidth;
         videoHeight = video.videoHeight;
         video.width = videoWidth;
         video.height = videoHeight;

         canvas = document.getElementById('output');
         canvas.width = videoWidth;
         canvas.height = videoHeight;
         ctx = canvas.getContext('2d');
         ctx.fillStyle = "rgba(255, 0, 0, 0.5)";

         model = await blazeface.load();

         mask_model = await window.tf.loadLayersModel('http://localhost:3000/model/model.json');

         renderPrediction();
      };

      setupPage();
   }, [])


   return (
      <div className={classes.root}>
         <video id="video" playsInline className={classes.video} ></video>
         <canvas id="output" className={classes.canvas}></canvas>
      </div>
   )
}