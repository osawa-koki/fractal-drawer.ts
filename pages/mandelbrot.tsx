import React, { useRef, useState } from 'react';

const Mandelbrot = () => {

  let canvasRef = useRef<HTMLCanvasElement>(null);

  let [canvasSize, setCanvasSize] = useState(300);
  let [color, setColor] = useState(0);
  let [maxIterations, setMaxIterations] = useState(20);
  let [threshold, setThreshold] = useState(10);
  let [xMin, setXMin] = useState(-2.5);
  let [xMax, setXMax] = useState(1);
  let [yMin, setYMin] = useState(-1);
  let [yMax, setYMax] = useState(1);

  function Draw() {
    let canvas = canvasRef.current;
    if (canvas) {
      let context = canvas.getContext('2d');
      if (context) {
        let imageData = context.createImageData(canvasSize, canvasSize);
        let data = imageData.data;
        let xScale = (xMax - xMin) / canvasSize;
        let yScale = (yMax - yMin) / canvasSize;
        for (let x = 0; x < canvasSize; x++) {
          for (let y = 0; y < canvasSize; y++) {
            let a = xMin + x * xScale;
            let b = yMin + y * yScale;
            let ca = a;
            let cb = b;
            let n = 0;
            while (n < maxIterations) {
              let aa = a * a - b * b;
              let bb = 2 * a * b;
              a = aa + ca;
              b = bb + cb;
              if (Math.abs(a + b) > threshold) {
                break;
              }
              n++;
            }
            let bright = n / maxIterations * 255;
            let pixel = (x + y * canvasSize) * 4;
            data[pixel + 0] = bright;
            data[pixel + 1] = bright;
            data[pixel + 2] = bright;
            data[pixel + 3] = 255;
          }
        }
        context.putImageData(imageData, 0, 0);
      }
    }
  }

  return (
    <div>
      <div id='CanvasArea'>
        <h1 onClick={() => {console.log(canvasRef.current)}}>Mandelbrot</h1>
        <canvas ref={canvasRef} width={canvasSize} height={canvasSize} />
      </div>
      <table>
        <tbody>
          <tr>
            <th></th>
            <td></td>
          </tr>
        </tbody>
      </table>
      <button onClick={Draw}></button>
    </div>
  );
};

export default Mandelbrot;
