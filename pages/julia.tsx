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

  // drawing the Julia set
  function Draw() {
    
  }

  return (
    <Layout title={`${Settings.ProjectName}`}>
      <div id='CanvasArea'>
        <h1 onClick={() => {console.log(canvasRef.current)}}>Julia</h1>
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
