import React, { useRef, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';

import Layout from '../components/Layout';
import Settings from '../components/Settings';
import coord from '../src/coord';

const pageName = 'Hilbert Curve';

const lock_affect_time = 100;

const canvasMinSize = 100;
const canvasMaxSize = 500;
const maxIterationMinCount = 3;
const maxIterationMaxCount = 10;
const startYMin = 0;
const startYMax = 100;
const stepMin = 1;
const stepMax = 30;
const timespanMin = 0;
const timespanMax = 1000;

const HilbertCurve = () => {

  let canvasRef = useRef<HTMLCanvasElement>(null);

  let [canvasSize, setCanvasSize] = useState(300);
  let [maxIterations, setMaxIterations] = useState(5);
  let [start_x, setStartX] = useState(100);
  let [start_y, setStartY] = useState(100);
  let [step, setStep] = useState(5);
  let [timespan, setTimespan] = useState(100);
  let [locked, setLocked] = useState(false);

  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D;

  useEffect (() => {
    canvas = canvasRef.current!;
    ctx = canvas.getContext('2d')!;
    Draw(false);
  }, [canvasSize, maxIterations, start_x, start_y, step, timespan]);

  useEffect (() => {
    canvas = canvasRef.current!;
    ctx = canvas.getContext('2d')!;
  }, [locked]);

  async function Draw(execute: boolean) {
    if (execute === false) return;
    if (locked) return;
    setLocked(true);
    await new Promise(r => setTimeout(r, lock_affect_time));
    ctx.clearRect(0, 0, canvasSize, canvasSize);
    ctx.fillStyle = "green";
    let curr_position: coord = {
      x: start_x / 100 * canvasSize,
      y: canvasSize - (start_y / 100 * canvasSize),
    };
    let curr_direction: number = 90;
    let _angle = 90;
    let _step = step / 100 * canvasSize;
    let _depth = maxIterations;
    ctx.beginPath();
    ctx.moveTo(curr_position.x, curr_position.y);
    async function Hilbert(depth: number, angle: number) {
      if (depth <= 0) return;
      curr_direction += angle;
      //await new Promise(r => setTimeout(r, timespan));
      Hilbert(depth - 1, -angle);
      curr_position.x += _step * Math.cos(curr_direction * Math.PI / 180);
      curr_position.y += _step * Math.sin(curr_direction * Math.PI / 180);
      ctx.lineTo(curr_position.x, curr_position.y);
      ctx.stroke();
      curr_direction -= angle;
      //await new Promise(r => setTimeout(r, timespan));
      Hilbert(depth - 1, angle);
      curr_position.x += _step * Math.cos(curr_direction * Math.PI / 180);
      curr_position.y += _step * Math.sin(curr_direction * Math.PI / 180);
      ctx.lineTo(curr_position.x, curr_position.y);
      ctx.stroke();
      //await new Promise(r => setTimeout(r, timespan));
      Hilbert(depth - 1, angle);
      curr_direction -= angle;
      curr_position.x += _step * Math.cos(curr_direction * Math.PI / 180);
      curr_position.y += _step * Math.sin(curr_direction * Math.PI / 180);
      ctx.lineTo(curr_position.x, curr_position.y);
      ctx.stroke();
      //await new Promise(r => setTimeout(r, timespan));
      Hilbert(depth - 1, -angle);
      curr_direction += angle;
    }
    await Hilbert(_depth, _angle);

    setLocked(false);
  }

  return (
    <Layout title={`${pageName} (${Settings.ProjectName})`} favicon='feature-image/hilbert-curve.png'>
      <div id='CanvasArea'>
        <h1>{pageName}</h1>
        <canvas ref={canvasRef} width={canvasSize} height={canvasSize} />
      </div>
      <div id='button-div'>
        <Button variant="outline-primary" onClick={() => {Draw(true)}}>
          {
            locked
            ? <><Spinner animation="grow" variant="info" size="sm" />&nbsp;Drawing...</>
            : <>Draw!!!</>
          }
        </Button>
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
            <th>Step</th>
            <td><Form.Range min={stepMin} max={stepMax} value={step} onInput={(e) => {setStep(parseInt((e.target as HTMLInputElement).value))}} /></td>
            <td>{step}</td>
          </tr>
          <tr>
            <th>Timespan</th>
            <td><Form.Range min={timespanMin} max={timespanMax} value={timespan} onInput={(e) => {setTimespan(parseInt((e.target as HTMLInputElement).value))}} /></td>
            <td>{timespan}</td>
          </tr>
        </tbody>
      </table>
    </Layout>
  );
};

export default HilbertCurve;
