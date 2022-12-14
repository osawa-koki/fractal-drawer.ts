import React, { useRef, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Layout from '../components/Layout';
import Settings from '../components/Settings';

const pageName = 'Sierpinski Carpet';

const canvasMinSize = 100;
const canvasMaxSize = 500;
const sizeMin = 50;
const sizeMax = 100;
const maxIterationMinCount = 3;
const maxIterationMaxCount = 15;
const timespanMin = 100;
const timespanMax = 1000;

type coord = {
  x: number;
  y: number;
};

const SierpinskiCarpet = () => {

  let canvasRef = useRef<HTMLCanvasElement>(null);

  let [canvasSize, setCanvasSize] = useState(300);
  let [color, setColor] = useState(0);
  let [carpetSize, setCarpetSize] = useState(70);
  let [maxIterations, setMaxIterations] = useState(5);
  let [timespan, setTimespan] = useState(300);
  let [locked, setLocked] = useState(false);

  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D;

  useEffect (() => {
    canvas = canvasRef.current!;
    ctx = canvas.getContext('2d')!;
    Draw(false);
  }, [canvasSize, color, carpetSize, maxIterations, timespan]);

  function Draw(execute: boolean = true) {
    if (locked) return;
    setLocked(true);
    const cross_join = (arg: number[]): coord[] => {
      const answer: coord[] = [];
      arg.forEach(x => {
        arg.forEach(y => {
          answer.push({x: x, y: y} as coord);
        });
      });
      return answer;
    }
    function recFx(x: number, y: number, size: number, n: number) {
      if (maxIterations < n) {
        setLocked(false);
        return;
      }
      if (n / 2 === 0) {
        ctx.fillStyle = `hsl(${color}, 100%, 50%)`;
      } else {
        ctx.fillStyle = "white";
      }
      // 「3 * 3」の座標を取得
      const xys = [
        1 / 9 * size,
        4 / 9 * size,
        7 / 9 * size,
      ];
      cross_join(xys).forEach(xy => {
        ctx.fillRect(
          xy.x + x,
          xy.y + y,
          size / 9,
          size / 9
        );
        setTimeout(() => {
          recFx(
            xy.x + x - size / 9,
            xy.y + y - size / 9,
            size / 3,
            n + 1
          );
        }, timespan);
      });
    }
    ctx.clearRect(0, 0, canvasSize, canvasSize);
    const size = canvasSize * carpetSize / 100;
    const start = (canvasSize - size) / 2;
    ctx.fillStyle = `hsl(${color}, 100%, 50%)`;
    ctx.fillRect(start, start, size, size);
    ctx.fillStyle = "white";
    const sizeInside = size / 3;
    const startInside = start + sizeInside;
    ctx.fillRect(startInside, startInside, sizeInside, sizeInside);
    if (execute === false) return;
    recFx(start, start, size, 1);
  }

  return (
    <Layout title={`${pageName} (${Settings.ProjectName})`} favicon='feature-image/sierpinski-carpet.png'>
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
            <th>Color</th>
            <td><Form.Range min={0} max={360} onInput={(e) => {setColor(parseInt((e.target as HTMLInputElement).value))}} /></td>
            <td style={{backgroundColor: `hsl(${color}, 100%, 50%)`}}></td>
          </tr>
          <tr>
            <th>Size</th>
            <td><Form.Range min={sizeMin} max={sizeMax} onInput={(e) => {setCarpetSize(parseInt((e.target as HTMLInputElement).value))}} /></td>
            <td>{carpetSize}%</td>
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

export default SierpinskiCarpet;
