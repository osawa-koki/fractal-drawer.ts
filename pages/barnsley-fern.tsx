import React, { useRef, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Layout from '../components/Layout';
import Settings from '../components/Settings';

const pageName = 'Barnsley Fern';

const canvasMinSize = 100;
const canvasMaxSize = 500;
const maxIterationMinCount = 10000;
const maxIterationMaxCount = 500000;
const startYMin = 0;
const startYMax = 30;
const zoomMin = 30;
const zoomMax = 130;
const heightMin = 50;
const heightMax = 100;

const BarnsleyFern = () => {

  let canvasRef = useRef<HTMLCanvasElement>(null);

  let [canvasSize, setCanvasSize] = useState(300);
  let [maxIterations, setMaxIterations] = useState(70000);
  let [start_x, setStartX] = useState(50);
  let [start_y, setStartY] = useState(0);
  let [zoom, setZoom] = useState(50);
  let [height, setHeight] = useState(100);
  let [locked, setLocked] = useState(false);

  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D;

  useEffect (() => {
    canvas = canvasRef.current!;
    ctx = canvas.getContext('2d')!;
    Draw(false);
  }, [canvasSize, maxIterations, start_x, start_y, zoom, height]);

  useEffect (() => {
    canvas = canvasRef.current!;
    ctx = canvas.getContext('2d')!;
  }, [locked]);

  function Draw(execute: boolean) {
    if (execute === false) return;
    if (locked) return;
    setLocked(true);
    ctx.clearRect(0, 0, canvasSize, canvasSize);
    ctx.fillStyle = "green";
    let [x, y] = [0, 0];
    for (let i = 0; i < maxIterations; i++) {
      ctx.fillRect(zoom * x + start_x * canvasSize / 100, canvasSize - ((height * canvasSize / 1000) * y + (start_y * canvasSize / 100)), 1, 1);
      let r = Math.random() * 100;
      let xn = x;
      let yn = y;
      if (r < 1) {
        x = 0;
        y = 0.16 * yn;
      }
      else if (r < 86) {
        x = 0.85 * xn + 0.04 * yn;
        y = -0.04 * xn + 0.85 * yn + 1.6;
      }
      else if (r < 93) {
        x = 0.20 * xn - 0.26 * yn;
        y = 0.23 * xn + 0.22 * yn + 1.6;
      }
      else {
        x = -0.15 * xn + 0.28 * yn;
        y = 0.26 * xn + 0.24 * yn + 0.44;
      }
    }
    setLocked(false);
  }

  return (
    <Layout title={`${pageName} (${Settings.ProjectName})`} favicon='feature-image/barnsley-fern.png'>
      <div id='CanvasArea'>
        <h1>{pageName}</h1>
        <canvas ref={canvasRef} width={canvasSize} height={canvasSize} />
      </div>
      <div id='button-div'>
        <Button variant="outline-primary" onClick={() => {Draw(true)}}>Draw!!!</Button>
      </div>
      <table id='Settings'>
        <tbody>
          <tr>
            <th>Canvas Size</th>
            <td><Form.Range min={canvasMinSize} max={canvasMaxSize} onInput={(e) => {setCanvasSize(parseInt((e.target as HTMLInputElement).value))}} /></td>
            <td>{canvasSize}</td>
          </tr>
          <tr>
            <th>Max Iterations</th>
            <td><Form.Range min={maxIterationMinCount} max={maxIterationMaxCount} value={maxIterations} onInput={(e) => {setMaxIterations(parseInt((e.target as HTMLInputElement).value))}} /></td>
            <td>{maxIterations}</td>
          </tr>
          <tr>
            <th>Start X</th>
            <td><Form.Range min={0} max={100} value={start_x} onInput={(e) => {setStartX(parseInt((e.target as HTMLInputElement).value))}} /></td>
            <td>{start_x}</td>
          </tr>
          <tr>
            <th>Start Y</th>
            <td><Form.Range min={startYMin} max={startYMax} value={start_y} onInput={(e) => {setStartY(parseInt((e.target as HTMLInputElement).value))}} /></td>
            <td>{start_y}</td>
          </tr>
          <tr>
            <th>Zoom</th>
            <td><Form.Range min={zoomMin} max={zoomMax} value={zoom} onInput={(e) => {setZoom(parseInt((e.target as HTMLInputElement).value))}} /></td>
            <td>{zoom}</td>
          </tr>
          <tr>
            <th>Height</th>
            <td><Form.Range min={heightMin} max={heightMax} value={height} onInput={(e) => {setHeight(parseInt((e.target as HTMLInputElement).value))}} /></td>
            <td>{height}</td>
          </tr>
        </tbody>
      </table>
    </Layout>
  );
};

export default BarnsleyFern;
