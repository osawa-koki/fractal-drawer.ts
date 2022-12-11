import React, { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';

const Mandelbrot = () => {

  let canvasRef = useRef<HTMLCanvasElement>(null);

  let [canvasSize, setCanvasSize] = useState(300);
  let [color, setColor] = useState(0);
  let [maxIterations, setMaxIterations] = useState(20);
  let [threshold, setThreshold] = useState(10);
  let [xMin, setXMin] = useState(-2.5);
  let [xMax, setXMax] = useState(1);
  let [yMin, setYMin] = useState(-1.5);
  let [yMax, setYMax] = useState(1.5);

  function Draw() {
    let canvas = canvasRef.current;
    if (canvas) {
      let ctx = canvas.getContext('2d');
      if (ctx) {
        let xRange = xMax - xMin;
        let yRange = yMax - yMin;
        let xStep = xRange / canvasSize;
        let yStep = yRange / canvasSize;
        for (let x = 0; x < canvasSize; x++) {
          for (let y = 0; y < canvasSize; y++) {
            let x0 = xMin + x * xStep;
            let y0 = yMin + y * yStep;
            let x1 = 0;
            let y1 = 0;
            let i = 0;
            while (x1 * x1 + y1 * y1 < threshold && i < maxIterations) {
              let x2 = x1 * x1 - y1 * y1 + x0;
              let y2 = 2 * x1 * y1 + y0;
              x1 = x2;
              y1 = y2;
              i++;
            }
            if (i === maxIterations) {
              ctx.fillStyle = 'black';
            } else {
              ctx.fillStyle = `hsla(${i * 360 / maxIterations}, 100%, 50%, 1)`;
            }
            ctx.fillRect(x, y, 1, 1);
          }
        }
      }
    }
  }

  return (
    <div>
      <div id='CanvasArea'>
        <h1 onClick={() => {console.log(canvasRef.current)}}>Mandelbrot</h1>
        <canvas ref={canvasRef} width={canvasSize} height={canvasSize} />
      </div>
      <div id='button-div'>
        <Button variant="outline-primary" onClick={Draw}>Draw!!!</Button>
      </div>
      <table>
        <tbody>
          <tr>
            <th></th>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Mandelbrot;
