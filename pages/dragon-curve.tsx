import React, { useRef, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';

import Layout from '../components/Layout';
import Settings from '../components/Settings';
import coord from '../src/coord';

const pageName = 'Dragon Curve';

const lock_affect_time = 100;

const canvasMinSize = 100;
const canvasMaxSize = 500;
const rangeMin = 0;
const rangeMax = 100;
const maxIterationMinCount = 3;
const maxIterationMaxCount = 10;
const timespanMin = 10;
const timespanMax = 500;

const divition = 3;

const DragonCurve = () => {

  let canvasRef = useRef<HTMLCanvasElement>(null);

  let [canvasSize, setCanvasSize] = useState(300);
  let [color, setColor] = useState(0);
  let [ax, setAx] = useState(10);
  let [ay, setAy] = useState(10);
  let [bx, setBx] = useState(90);
  let [by, setBy] = useState(90);
  let [maxIterations, setMaxIterations] = useState(5);
  let [timespan, setTimespan] = useState(250);
  let [locked, setLocked] = useState(false);

  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D;

  useEffect (() => {
    canvas = canvasRef.current!;
    ctx = canvas.getContext('2d')!;
    Draw(false);
  }, [canvasSize, color, ax, ay, bx, by, maxIterations, timespan]);

  useEffect (() => {
    canvas = canvasRef.current!;
    ctx = canvas.getContext('2d')!;
  }, [locked]);

  async function Draw(execute: boolean = true) {
    if (locked) return;
    if (execute) setLocked(true);
    await new Promise(resolve => setTimeout(resolve, lock_affect_time));
    function CalcPoints(a: coord, b: coord, points: coord[], n: number) {
      if (n === 0) return;
      const s: coord = {
        x: a.x + (b.x - a.x) / divition,
        y: a.y + (b.y - a.y) / divition,
      };
      const t: coord = {
        x: a.x + (b.x - a.x) * 2 / divition,
        y: a.y + (b.y - a.y) * 2 / divition,
      };
      const u: coord = {
        x: s.x + (t.x - s.x) * Math.cos(Math.PI / 3) - (t.y - s.y) * Math.sin(Math.PI / 3),
        y: s.y + (t.x - s.x) * Math.sin(Math.PI / 3) + (t.y - s.y) * Math.cos(Math.PI / 3),
      };
      CalcPoints(a, s, points, n - 1);
      points.push(s);
      CalcPoints(s, u, points, n - 1);
      points.push(u);
      CalcPoints(u, t, points, n - 1);
      points.push(t);
      CalcPoints(t, b, points, n - 1);
    }
    ctx.clearRect(0, 0, canvasSize, canvasSize);
    ctx.strokeStyle = `hsl(${color}, 100%, 50%)`;
    ctx.lineWidth = 1;
    const _ax = ax * canvasSize / 100;
    const _ay = canvasSize - (ay * canvasSize / 100);
    const _bx = bx * canvasSize / 100;
    const _by = canvasSize - (by * canvasSize / 100);
    if (execute === false) {
      ctx.beginPath();
      ctx.moveTo(_ax, _ay);
      ctx.lineTo(_bx, _by);
      ctx.stroke();
      return;
    }
    for (let i = 1; i <= maxIterations; i++) {
      ctx.clearRect(0, 0, canvasSize, canvasSize);
      const points: coord[] = [];
      CalcPoints({x: _ax, y: _ay}, {x: _bx, y: _by}, points, i);
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for (let j = 1; j < points.length; j++) {
        ctx.lineTo(points[j].x, points[j].y);
      }
      ctx.stroke();
      await new Promise(resolve => setTimeout(resolve, timespan));
    }
    setLocked(false);
  }

  return (
    <Layout title={`${pageName} (${Settings.ProjectName})`} favicon='feature-image/dragon-curve.png'>
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
            <th>Color</th>
            <td><Form.Range min={0} max={360} onInput={(e) => {setColor(parseInt((e.target as HTMLInputElement).value))}} /></td>
            <td style={{backgroundColor: `hsl(${color}, 100%, 50%)`}}></td>
          </tr>
          <tr>
            <th>a.x</th>
            <td><Form.Range min={rangeMin} max={rangeMax} onInput={(e) => {setAx(parseInt((e.target as HTMLInputElement).value))}} /></td>
            <td>{ax}</td>
          </tr>
          <tr>
            <th>a.y</th>
            <td><Form.Range min={rangeMin} max={rangeMax} onInput={(e) => {setAy(parseInt((e.target as HTMLInputElement).value))}} /></td>
            <td>{ay}</td>
          </tr>
          <tr>
            <th>b.x</th>
            <td><Form.Range min={rangeMin} max={rangeMax} onInput={(e) => {setBx(parseInt((e.target as HTMLInputElement).value))}} /></td>
            <td>{bx}</td>
          </tr>
          <tr>
            <th>b.y</th>
            <td><Form.Range min={rangeMin} max={rangeMax} onInput={(e) => {setBy(parseInt((e.target as HTMLInputElement).value))}} /></td>
            <td>{by}</td>
          </tr>
          <tr>
            <th>Timespan</th>
            <td><Form.Range min={timespanMin} max={timespanMax} step={10} onInput={(e) => {setTimespan(parseInt((e.target as HTMLInputElement).value))}} /></td>
            <td>{timespan}ms</td>
          </tr>
          <tr>
            <th>Max Iterations</th>
            <td><Form.Range min={maxIterationMinCount} max={maxIterationMaxCount} onInput={(e) => {setMaxIterations(parseInt((e.target as HTMLInputElement).value))}} /></td>
            <td>{maxIterations}</td>
          </tr>
        </tbody>
      </table>
    </Layout>
  );
};

export default DragonCurve;
