import React, { useRef, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';

import Layout from '../components/Layout';
import Settings from '../components/Settings';

const pageName = 'Sierpinski Triangle';

const canvasMinSize = 100;
const canvasMaxSize = 500;
const sizeMin = 50;
const sizeMax = 100;
const maxIterationMinCount = 3;
const maxIterationMaxCount = 15;
const timespanMin = 100;
const timespanMax = 1000;

const SierpinskiTriangle = () => {

  let canvasRef = useRef<HTMLCanvasElement>(null);

  let [canvasSize, setCanvasSize] = useState(300);
  let [color, setColor] = useState(0);
  let [triagleSize, setTriangleSize] = useState(70);
  let [maxIterations, setMaxIterations] = useState(5);
  let [timespan, setTimespan] = useState(300);
  let [locked, setLocked] = useState(false);

  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D;

  useEffect (() => {
    canvas = canvasRef.current!;
    ctx = canvas.getContext('2d')!;
    Draw(false);
  }, [canvasSize, color, triagleSize, maxIterations, timespan]);

  useEffect (() => {
    canvas = canvasRef.current!;
    ctx = canvas.getContext('2d')!;
  }, [locked]);

  function Draw(execute: boolean = true) {
    if (locked) return;
    if (execute) setLocked(true);
    const DrawTriangle = (x: number, y: number, size: number) => {
      const p1_x = x + size / 2; // 中央下
      const p1_y = y - Math.sin(-60 * Math.PI / 180) * size;
      const p2_x = x + size; // 右
      const p2_y = y;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(p1_x, p1_y);
      ctx.lineTo(p2_x, p2_y);
      ctx.fill();
    }
    function recFx(x: number, y: number, size: number, n: number) {
      if (maxIterations < n) {
        setLocked(false); // setTimeout関数は非同期で処理されるため、ここで実行完了を検知する。
        return;
      }
      if (n / 2 === 0) {
        ctx.fillStyle = `hsl(${color}, 100%, 50%)`;
      } else {
        ctx.fillStyle = "white";
      }
      const p1_x = Math.cos(240 * Math.PI / 180) * 1 / 4 * size + x; // 上
      const p1_y = y - Math.sin(240 * Math.PI / 180) * 1 / 4 * size;
      const p2_x = Math.cos(240 * Math.PI / 180) * 3 / 4 * size + x; // 左下
      const p2_y = y - Math.sin(240 * Math.PI / 180) * 3 / 4 * size;
      const p3_x = p2_x + size / 2; //右下
      const p3_y = p2_y;
      DrawTriangle(p1_x, p1_y, size / 4);
      DrawTriangle(p2_x, p2_y, size / 4);
      DrawTriangle(p3_x, p3_y, size / 4);
      setTimeout(() => {
        recFx(x, y, size / 2, n + 1);
        recFx(
          Math.cos(240 * Math.PI / 180) * 1 / 2 * size + x,
          y - Math.sin(240 * Math.PI / 180) * 1 / 2 * size,
          size / 2,
          n + 1
        );
        recFx(
          Math.cos(-60 * Math.PI / 180) * 1 / 2 * size + x,
          y - Math.sin(-60 * Math.PI / 180) * 1 / 2 * size,
          size / 2,
          n + 1
        );
      }, timespan);
    }
    ctx.clearRect(0, 0, canvasSize, canvasSize);
    ctx.clearRect(0, 0, canvasSize, canvasSize);
    const [size, start] = [canvasSize * triagleSize / 100, (canvasSize - (Math.sqrt(3) * canvasSize * triagleSize / 100 / 2)) / 2];
    (function() {
      ctx.fillStyle = `hsl(${color}, 100%, 50%)`;
      ctx.beginPath();
      ctx.moveTo(canvasSize / 2, start);
      const p2_x = Math.cos(240 * Math.PI / 180) * size + canvasSize / 2; // 180 + 60 = 240
      const p2_y = start - Math.sin(240 * Math.PI / 180) * size; // 180 + 60 = 240
      ctx.lineTo(p2_x, p2_y);
      ctx.lineTo(p2_x + size, p2_y);
      ctx.fill();
    })();
    if (execute === false) return;
    ctx.fillStyle = "white";
    const p1_x = Math.cos(240 * Math.PI / 180) * size / 2 + canvasSize / 2;
    const p1_y = start - Math.sin(240 * Math.PI / 180) * size / 2;
    const p2_x = Math.cos(-60 * Math.PI / 180) * size / 2 + p1_x; // 「x + size / 2」の方が簡単
    const p2_y = p1_y - Math.sin(-60 * Math.PI / 180) * size / 2;
    ctx.beginPath();
    ctx.moveTo(p1_x, p1_y);
    ctx.lineTo(p2_x, p2_y);
    ctx.lineTo(p1_x + size / 2, p1_y);
    ctx.fill();
    recFx(canvasSize / 2, start, size, 1);
  }

  return (
    <Layout title={`${pageName} (${Settings.ProjectName})`} favicon='feature-image/sierpinski-triangle.png'>
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
            <th>Size</th>
            <td><Form.Range min={sizeMin} max={sizeMax} onInput={(e) => {setTriangleSize(parseInt((e.target as HTMLInputElement).value))}} /></td>
            <td>{triagleSize}%</td>
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

export default SierpinskiTriangle;
