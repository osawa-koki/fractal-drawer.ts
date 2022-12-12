import React, { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Layout from '../components/Layout';
import Settings from '../components/Settings';

const canvasMinSize = 100;
const canvasMaxSize = 500;
const maxIterationMinCount = 3;
const maxIterationMaxCount = 100;
const thresholdMin = 3;
const thresholdMax = 100;
const axis_delta = 0.1;

const Buddhabrot = () => {

  let canvasRef = useRef<HTMLCanvasElement>(null);

  let [canvasSize, setCanvasSize] = useState(300);
  let [color, setColor] = useState(0);
  let [maxIterations, setMaxIterations] = useState(20);
  let [threshold, setThreshold] = useState(10);
  let [xMin, setXMin] = useState(-1.5);
  let [xMax, setXMax] = useState(1.5);
  let [yMin, setYMin] = useState(-1.5);
  let [yMax, setYMax] = useState(1.5);
  let [numberOfTrials, setNumberOfTrials] = useState(100000);
  let [lighter, setLighter] = useState(0.1);

  // Buddhabrot
  function Draw() {
    if (canvasRef.current) {
      let canvas = canvasRef.current;
      let ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, canvasSize, canvasSize);
        ctx.fillStyle = `black`;
        ctx.fillRect(0, 0, canvasSize, canvasSize);
        ctx.fillStyle = `rgba(255, 255, 255, ${lighter})`;
        for (let i = 0; i < numberOfTrials; i++) {
          const x = Math.random() * (xMax - xMin) + xMin;
          const y = Math.random() * (yMax - yMin) + yMin;
          let [real, imag] = new Array(2).fill(0);
          const xys = [];
          let check = false;
          for (let j = 0; j < maxIterations; j++) {
            const [real2, imag2] = [real * real - imag * imag + x, 2 * real * imag + y];
            real = real2;
            imag = imag2;
            if (real * real + imag * imag > threshold) {
              check = true;
              break;
            }
            xys.push([real, imag]);
          }
          if (check) {
            for (let j = 0; j < xys.length; j++) {
              const [real, imag] = xys[j];
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
    <Layout title={`${Settings.ProjectName}`}>
      <div id='CanvasArea'>
        <h1 onClick={() => {console.log(canvasRef.current)}}>Buddhabrot</h1>
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
