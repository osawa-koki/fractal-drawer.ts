import React, { useRef, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Layout from '../components/Layout';
import Settings from '../components/Settings';

const pageName = 'Rose Curve';

const canvasMinSize = 100;
const canvasMaxSize = 500;
const sizeMin = 50;
const sizeMax = 100;
const nMin = 1;
const nMax = 15;
const kMin = 1;
const kMax = 15;
const stepMin = 0.1;
const stepMax = 1;
const timespanMin = 1;
const timespanMax = 30;

const RoseCurve = () => {

  let canvasRef = useRef<HTMLCanvasElement>(null);

  let [canvasSize, setCanvasSize] = useState(300);
  let [n, setN] = useState(5);
  let [k, setK] = useState(2);
  let [size, setSize] = useState(90);
  let [step, setStep] = useState(0.1);
  let [timespan, setTimespan] = useState(3);
  let [timeEffect, setTimeEffect] = useState(true);
  let [immidiateEffect, setImmidiateEffect] = useState(false);

  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D;

  useEffect (() => {
    canvas = canvasRef.current!;
    ctx = canvas.getContext('2d')!;
    if (immidiateEffect) Draw();
  }, [canvasSize, n, k, size, step, timespan, timeEffect, immidiateEffect]);

  async function Draw() {
    ctx.clearRect(0, 0, canvasSize, canvasSize);
    let color = 0;
    for (let i = 0; i < 360 * n; i = i + step) {
      const deg = i * Math.PI / 180;
      const x = Math.sin((n * i / k) * Math.PI / 180) * Math.cos(deg);
      const y = Math.sin((n * i / k) * Math.PI / 180) * Math.sin(deg);
      const zoom = canvasSize / 2 * size / 100;
      ctx.fillStyle = `hsl(${color}, 100%, 50%)`;
      color = (color + 1) % 360;
      ctx.fillRect(x * zoom + canvasSize / 2, y * zoom + canvasSize / 2, 1, 1);
      if (timeEffect) await new Promise(resolve => setTimeout(resolve, timespan));
    }
  }

  return (
    <Layout title={`${pageName} (${Settings.ProjectName})`} favicon='feature-image/rose-curve.png'>
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
            <th>Size</th>
            <td><Form.Range min={sizeMin} max={sizeMax} onInput={(e) => {setSize(parseInt((e.target as HTMLInputElement).value))}} /></td>
            <td>{size}%</td>
          </tr>
          <tr>
            <th>n</th>
            <td><Form.Range min={nMin} max={nMax} onInput={(e) => {setN(parseInt((e.target as HTMLInputElement).value))}} /></td>
            <td>{n}</td>
          </tr>
          <tr>
            <th>k</th>
            <td><Form.Range min={kMin} max={kMax} onInput={(e) => {setK(parseInt((e.target as HTMLInputElement).value))}} /></td>
            <td>{k}</td>
          </tr>
          <tr>
            <th>Step</th>
            <td><Form.Range min={stepMin} max={stepMax} step={0.1} onInput={(e) => {setStep(parseFloat((e.target as HTMLInputElement).value))}} /></td>
            <td>{step}</td>
          </tr>
          <tr>
            <th>Timespan</th>
            <td><Form.Range min={timespanMin} max={timespanMax} step={10} onInput={(e) => {setTimespan(parseInt((e.target as HTMLInputElement).value))}} /></td>
            <td>{timespan}ms</td>
          </tr>
          <tr>
            <th>Time Effect</th>
            <td><Form.Check type='checkbox' checked={timeEffect} onChange={(e) => {setTimeEffect((e.target as HTMLInputElement).checked)}} /></td>
            <td>{timeEffect ? 'On' : 'Off'}</td>
          </tr>
          <tr>
            <th>Immidiate Effect</th>
            <td><Form.Check type='checkbox' checked={immidiateEffect} onChange={(e) => {setImmidiateEffect((e.target as HTMLInputElement).checked); if (immidiateEffect === false) setTimeEffect(false); Draw();}} /></td>
            <td>{immidiateEffect ? 'On' : 'Off'}</td>
          </tr>
        </tbody>
      </table>
    </Layout>
  );
};

export default RoseCurve;
