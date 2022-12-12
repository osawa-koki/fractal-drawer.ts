import React, { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Layout from '../components/Layout';
import Settings from '../components/Settings';

const pageName = 'Buddhabrot';

const canvasMinSize = 100;
const canvasMaxSize = 500;
const maxIterationMinCount = 50;
const maxIterationMaxCount = 150;
const thresholdMin = 50;
const thresholdMax = 150;
const axis_delta = 0.1;

const Buddhabrot = () => {

  let canvasRef = useRef<HTMLCanvasElement>(null);

  let [canvasSize, setCanvasSize] = useState(300);
  let [color, setColor] = useState(0);
  let [maxIterations, setMaxIterations] = useState(100);
  let [threshold, setThreshold] = useState(100);
  let [xMin, setXMin] = useState(-2);
  let [xMax, setXMax] = useState(1);
  let [yMin, setYMin] = useState(-1.5);
  let [yMax, setYMax] = useState(1.5);
  let [numberOfTrials, setNumberOfTrials] = useState(1000000);
  let [lighter, setLighter] = useState(0.01);

  // Buddhabrot
  function Draw() {
    if (canvasRef.current) {
      let canvas = canvasRef.current;
      let ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, canvasSize, canvasSize);
        ctx.fillStyle = `black`;
        ctx.fillRect(0, 0, canvasSize, canvasSize);
        ctx.fillStyle = `hsla(${color}, 100%, 50%, ${lighter})`;
        for (let i = 0; i < numberOfTrials; i++) {
          const x = Math.random() * (xMax - xMin) + xMin;
          const y = Math.random() * (yMax - yMin) + yMin;
          let [real, imag] = new Array(2).fill(0);
          const xy: number[][] = [];
          let check = false;
          for (let j = 0; j < maxIterations; j++) {
            const [real2, imag2] = [real * real - imag * imag + x, 2 * real * imag + y];
            real = real2;
            imag = imag2;
            if (real * real + imag * imag > threshold) {
              check = true;
              break;
            }
            xy.push([real, imag] as number[]);
          }
          if (check) {
            for (let j = 0; j < xy.length; j++) {
              const [real, imag] = xy[j];
              const x = Math.floor((real - xMin) / (xMax - xMin) * canvasSize);
              const y = Math.floor((imag - yMin) / (yMax - yMin) * canvasSize);
              ctx.fillRect(y, x, 1, 1);
            }
          }
        }
      }
    }
  }

  return (
    <Layout title={`${pageName} (${Settings.ProjectName})`}  favicon='feature-image/buddhabrot.png'>
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
            <th>Number of Trials</th>
            <td><Form.Control type='number' value={numberOfTrials} onInput={(e) => {setNumberOfTrials(parseInt((e.target as HTMLInputElement).value))}} /></td>
            <td>{numberOfTrials}</td>
          </tr>
          <tr>
            <th>Lighter</th>
            <td><Form.Control type='number' step={0.01} value={lighter} onInput={(e) => {setLighter(parseFloat((e.target as HTMLInputElement).value))}} /></td>
            <td>{lighter}</td>
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

export default Buddhabrot;
