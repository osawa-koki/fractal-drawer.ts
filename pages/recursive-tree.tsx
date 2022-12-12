import React, { useRef, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Layout from '../components/Layout';
import Settings from '../components/Settings';

const pageName = 'Recursive Tree';

const canvasMinSize = 100;
const canvasMaxSize = 500;
const lengthMin = 10;
const lengthMax = 30;
const angleMin = 10;
const angleMax = 60;
const shrinkMin = 50;
const shrinkMax = 100;
const maxIterationMinCount = 3;
const maxIterationMaxCount = 15;
const timespanMin = 100;
const timespanMax = 1000;

type moved_coordinate = {
  x: number;
  y: number;
  deg: number;
};

const RecursiveTree = () => {

  let canvasRef = useRef<HTMLCanvasElement>(null);

  let [canvasSize, setCanvasSize] = useState(300);
  let [shrink, setShrink] = useState(68);
  let [length, setLength] = useState(30);
  let [angle, setAngle] = useState(30);
  let [maxIterations, setMaxIterations] = useState(7);
  let [timespan, setTimespan] = useState(300);

  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D;

  useEffect (() => {
    canvas = canvasRef.current!;
    ctx = canvas.getContext('2d')!;
    Draw(false);
  }, [canvasSize, shrink, length, angle, maxIterations, timespan]);

  function Draw(execute: boolean = true) {
    ctx.clearRect(0, 0, canvasSize, canvasSize);
    function RecDraw(x: number, y: number, deg: number, n: number) {
      if (maxIterations < n) return;
      const len = (shrink / 100) ** n * canvasSize * length / 100;
      const moved: moved_coordinate[] = [];
      { // 右側
        const ang = (360 + deg - angle) % 360;
        const moved_x = x + Math.cos(ang * Math.PI / 180) * len;
        const moved_y = (ang === 90)
          ? y - len // tag90はダメ!!
          : (ang === 270)
          ? y + len // tan270はダメ!!
          : y + Math.tan(ang * Math.PI / 180) * (x - moved_x);
        moved.push({x: moved_x, y: moved_y, deg: ang});
      }
      { // 左側
        const ang = (deg + angle) % 360;
        const moved_x = x + Math.cos(ang * Math.PI / 180) * len;
        const moved_y = (ang === 90)
          ? y - len // tag90はダメ!!
          : (ang === 270)
          ? y + len // tan270はダメ!!
          : y + Math.tan(ang * Math.PI / 180) * (x - moved_x);
        moved.push({x: moved_x, y: moved_y, deg: ang});
      }
      moved.forEach((m) => {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(m.x, m.y);
        ctx.closePath();
        ctx.stroke();
        setTimeout(() => {
          RecDraw(m.x, m.y, m.deg, n + 1);
        }, timespan);
      });
    }
    ctx.clearRect(0, 0, canvasSize, canvasSize);
    ctx.strokeStyle = "green";
    ctx.beginPath();
    ctx.moveTo(canvasSize / 2, canvasSize);
    ctx.lineTo(canvasSize / 2, canvasSize - canvasSize * length / 100);
    ctx.closePath();
    ctx.stroke();
    if (execute === false) return;
    RecDraw(
      canvasSize / 2,
      canvasSize - canvasSize * length / 100,
      90,
      1,
    );
  }

  return (
    <Layout title={`${pageName} (${Settings.ProjectName})`} favicon='feature-image/recursive-tree.png'>
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
            <th>Length</th>
            <td><Form.Range min={lengthMin} max={lengthMax} onInput={(e) => {setLength(parseInt((e.target as HTMLInputElement).value))}} /></td>
            <td>{length}%</td>
          </tr>
          <tr>
            <th>Shrink</th>
            <td><Form.Range min={shrinkMin} max={shrinkMax} onInput={(e) => {setShrink(parseInt((e.target as HTMLInputElement).value))}} /></td>
            <td>{shrink}%</td>
          </tr>
          <tr>
            <th>Angle</th>
            <td><Form.Range min={angleMin} max={angleMax} onInput={(e) => {setAngle(parseInt((e.target as HTMLInputElement).value))}} /></td>
            <td>{angle}°</td>
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

export default RecursiveTree;
