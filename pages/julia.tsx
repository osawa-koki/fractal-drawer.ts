import React, { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Layout from '../components/Layout';
import Settings from '../components/Settings';

const pageName = 'Julia';

const canvasMinSize = 100;
const canvasMaxSize = 500;
const maxIterationMinCount = 3;
const maxIterationMaxCount = 100;
const thresholdMin = 3;
const thresholdMax = 100;
const axis_delta = 0.1;

const Julia = () => {

  let canvasRef = useRef<HTMLCanvasElement>(null);

  let [canvasSize, setCanvasSize] = useState(300);
  let [color, setColor] = useState(0);
  let [maxIterations, setMaxIterations] = useState(20);
  let [threshold, setThreshold] = useState(10);
  let [c, setC] = useState({x: -0.4, y: 0.6});
  let [xMin, setXMin] = useState(-1.5);
  let [xMax, setXMax] = useState(1.5);
  let [yMin, setYMin] = useState(-1.5);
  let [yMax, setYMax] = useState(1.5);

  function Draw() {
    let canvas = canvasRef.current;
    if (canvas) {
      let ctx = canvas.getContext('2d');
      if (ctx) {
        let xDelta = (xMax - xMin) / canvasSize;
        let yDelta = (yMax - yMin) / canvasSize;
        for (let x = 0; x < canvasSize; x++) {
          for (let y = 0; y < canvasSize; y++) {
            let z = {x: xMin + x * xDelta, y: yMin + y * yDelta};
            let i = 0;
            while (i < maxIterations) {
              let z2 = {x: z.x * z.x - z.y * z.y, y: 2 * z.x * z.y};
              z.x = z2.x + c.x;
              z.y = z2.y + c.y;
              if (z.x * z.x + z.y * z.y > threshold) {
                break;
              }
              i++;
            }
            if (i == maxIterations) {
              ctx.fillStyle = '#000000';
            } else {
              ctx.fillStyle = `hsl(${color + i * 360 / maxIterations}, 100%, 50%)`;
            }
            ctx.fillRect(x, y, 1, 1);
          }
        }
      }
    }
  }

  return (
    <Layout title={`${pageName} (${Settings.ProjectName})`}>
      <div id='CanvasArea'>
        <h1>{pageName}</h1>
        <canvas ref={canvasRef} width={canvasSize} height={canvasSize} />
      </div>
      <div id='button-div'>
        <Button variant="outline-primary" onClick={Draw}>Draw!!!</Button>
      </div>
      <table id='Settings'>
        <tbody>
          <tr>
            <th>Canvas Size</th>
            <td><Form.Range min={canvasMinSize} max={canvasMaxSize} onInput={(e) => {setCanvasSize(parseInt((e.target as HTMLInputElement).value))}} /></td>
            <td>{canvasSize}</td>
          </tr>
          <tr>
            <th>Color (start)</th>
            <td><Form.Range min={0} max={360} value={color} onInput={(e) => {setColor(parseInt((e.target as HTMLInputElement).value))}} /></td>
            <td style={{backgroundColor: `hsl(${color}, 100%, 50%)`}}></td>
          </tr>
          <tr>
            <th>Max Iterations</th>
            <td><Form.Range min={maxIterationMinCount} max={maxIterationMaxCount} value={maxIterations} onInput={(e) => {setMaxIterations(parseInt((e.target as HTMLInputElement).value))}} /></td>
            <td>{maxIterations}</td>
          </tr>
          <tr>
            <th>Threshold</th>
            <td><Form.Range min={thresholdMin} max={thresholdMax} value={threshold} onInput={(e) => {setThreshold(parseInt((e.target as HTMLInputElement).value))}} /></td>
            <td>{threshold}</td>
          </tr>
          <tr>
            <th>C(x)</th>
            <td><Form.Control type='number' step={axis_delta} value={c.x} onInput={(e) => {setC({x: parseFloat((e.target as HTMLInputElement).value), y: c.y})}} /></td>
            <td>{c.x}</td>
          </tr>
          <tr>
            <th>C(y)</th>
            <td><Form.Control type='number' step={axis_delta} value={c.y} onInput={(e) => {setC({x: c.x, y: parseFloat((e.target as HTMLInputElement).value)})}} /></td>
            <td>{c.y}</td>
          </tr>
          <tr>
            <th>X Min</th>
            <td><Form.Control type='number' step={axis_delta} value={xMin} onInput={(e) => {setXMin(parseFloat((e.target as HTMLInputElement).value))}} /></td>
            <td>{xMin}</td>
          </tr>
          <tr>
            <th>X Max</th>
            <td><Form.Control type='number' step={axis_delta} value={xMax} onInput={(e) => {setXMax(parseFloat((e.target as HTMLInputElement).value))}} /></td>
            <td>{xMax}</td>
          </tr>
          <tr>
            <th>Y Min</th>
            <td><Form.Control type='number' step={axis_delta} value={yMin} onInput={(e) => {setYMin(parseFloat((e.target as HTMLInputElement).value))}} /></td>
            <td>{yMin}</td>
          </tr>
          <tr>
            <th>Y Max</th>
            <td><Form.Control type='number' step={axis_delta} value={yMax} onInput={(e) => {setYMax(parseFloat((e.target as HTMLInputElement).value))}} /></td>
            <td>{yMax}</td>
          </tr>
        </tbody>
      </table>
    </Layout>
  );
};

export default Julia;
