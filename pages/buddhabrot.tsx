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

  function hslToRgb(h: number, s: number, l: number) {
    let r, g, b;
    if (s == 0) {
      r = g = b = l; // achromatic
    } else {
      let hue2rgb = function hue2rgb(p: number, q: number, t: number) {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      }
      let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      let p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }
    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
  }

  function rgbToHsl(r: number, g: number, b: number) {
    r /= 255, g /= 255, b /= 255;
    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;
    if (max == min) {
      h = s = 0; // achromatic
    } else {
      let d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }
    return [h, s, l];
  }

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
