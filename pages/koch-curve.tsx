import React, { useRef, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';

import Layout from '../components/Layout';
import Settings from '../components/Settings';
import coord from '../src/coord';

const pageName = 'Koch Curve';

const lock_affect_time = 100;

const canvasMinSize = 100;
const canvasMaxSize = 500;
const rangeMin = 0;
const rangeMax = 100;
const maxIterationMinCount = 3;
const maxIterationMaxCount = 10;
const timespanMin = 100;
const timespanMax = 1000;

const divition = 3;

const KochCurve = () => {

  let canvasRef = useRef<HTMLCanvasElement>(null);

  let [canvasSize, setCanvasSize] = useState(300);
  let [color, setColor] = useState(0);
  let [ax, setAx] = useState(10);
  let [ay, setAy] = useState(50);
  let [bx, setBx] = useState(90);
  let [by, setBy] = useState(50);
  let [maxIterations, setMaxIterations] = useState(5);
  let [timespan, setTimespan] = useState(300);
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
    function DrawOnCanvas(points: coord[]) {
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
      }
      ctx.closePath();
      ctx.stroke();
    }
    function GetMiddles(a: coord, b: coord): coord[] {
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
      return [s, t, u];
    }
    async function RecDraw(a: coord, b: coord, n: number) {
      if (n <= 0) {
        DrawOnCanvas([a, b]);
        setLocked(false);
        return;
      }
      const m = GetMiddles(a, b);
      RecDraw(a, m[0], n - 1);
      RecDraw(m[0], m[2], n - 1);
      RecDraw(m[2], m[1], n - 1);
      RecDraw(m[1], b, n - 1);
    }
    ctx.clearRect(0, 0, canvasSize, canvasSize);
    ctx.strokeStyle = `hsl(${color}, 100%, 50%)`;
    const a: coord = {
      x: canvasSize * ax / rangeMax,
      y: canvasSize - (canvasSize * ay / rangeMax),
    };
    const b: coord = {
      x: canvasSize * bx / rangeMax,
      y: canvasSize - (canvasSize * by / rangeMax),
    };
    RecDraw(a, b, execute ? maxIterations : 1);
  }

  return (
    <Layout title={`${pageName} (${Settings.ProjectName})`} favicon='feature-image/koch-curve.png'>
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
            <th>Max Iterations</th>
            <td><Form.Range min={maxIterationMinCount} max={maxIterationMaxCount} onInput={(e) => {setMaxIterations(parseInt((e.target as HTMLInputElement).value))}} /></td>
            <td>{maxIterations}</td>
          </tr>
          <tr>
            <th>Timespan</th>
            <td><Form.Range min={timespanMin} max={timespanMax} onInput={(e) => {setTimespan(parseInt((e.target as HTMLInputElement).value))}} /></td>
            <td>{timespan}ms</td>
          </tr>
        </tbody>
      </table>
    </Layout>
  );
};

export default KochCurve;
