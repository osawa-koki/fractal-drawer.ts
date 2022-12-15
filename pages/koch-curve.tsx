import React, { useRef, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Layout from '../components/Layout';
import Settings from '../components/Settings';

const pageName = 'Koch Curve';

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

const divition = 3;

const KochCurve = () => {

  let canvasRef = useRef<HTMLCanvasElement>(null);

  let [canvasSize, setCanvasSize] = useState(300);
  let [color, setColor] = useState(0);
  let [triagleSize, setTriangleSize] = useState(70);
  let [maxIterations, setMaxIterations] = useState(5);
  let [timespan, setTimespan] = useState(300);

  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D;

  useEffect (() => {
    canvas = canvasRef.current!;
    ctx = canvas.getContext('2d')!;
    Draw(false);
  }, [canvasSize, color, triagleSize, maxIterations, timespan]);

  function Draw(execute: boolean = true) {
    // th = math.pi * 60 / 180   # 正三角形の角度をラジアン化
    // a = (0.0, 0.0)
    // b = (100.0, 0.0)
    // n = 5  # 繰り返し数
    // points = [a]  # 各点の座標を入れておくリスト(最終的にこれをプロット)
    
    const th = Math.PI * 60 / 180;
    const a: coord = {x: 0, y: 20};
    const b: coord = {x: canvasSize, y: 0};
    const points = [];
      
    function koch(a: coord, b: coord, n: number) {
      if (n === 0) return;
      const s: coord = {x: (a.x + b.x - a.x) / divition, y: (b.y - a.y) / divition};
      const t: coord = {x: (a.x + b.x - a.x) * 2 / divition, y: a.y + b.y - a.y * 2 / divition};
      const u: coord = {
        x: s.x + (t.x - s.x) * Math.cos(th) - (t.y, s.y) * Math.sin(th),
        y: s.y + (t.x - s.x) * Math.sin(th) + (t.y - s.y) * Math.cos(th),
      };
      koch(a, s, n - 1);
      points.push(s);
      koch(s, u, n - 1);
      points.push(u);
      koch(u, t, n - 1);
      points.push(t);
      koch(t, b, n - 1);
    } 

    koch(a, b, maxIterations);
    points.push(b);
    
    // koch(a, b, n)
    // points.append(b)
    // x = [points[i][0] for i in range(len(points))]
    // y = [points[i][1] for i in range(len(points))]
    // plt.plot(x, y, linewidth=0.5)
    // plt.axis('equal')
    // plt.savefig('Koch1.png')
    // python -> javascript
    // https://qiita.com/okamoai/items/1b0c1b0c1b0c1b0c1b0c
    // https://qiita.com/okamoai/items/1b0c1b0c1b0c1b0c1b0c

    let a = [0, 0];
    let b = [canvasSize, 0];
    let points = [a];

    function koch(a: number[], b: number[], n: number) {
      if (n == 0) {
        return;
      }
      let s = [a[0] + (b[0] - a[0]) / 3, a[1] + (b[1] - a[1]) / 3];
      let t = [a[0] + (b[0] - a[0]) * 2 / 3, a[1] + (b[1] - a[1]) * 2 / 3];
      let u = [s[0] + (t[0] - s[0]) * Math.cos(Math.PI * 60 / 180) - (t[1] - s[1]) * Math.sin(Math.PI * 60 / 180), s[1] + (t[0] - s[0]) * Math.sin(Math.PI * 60 / 180) + (t[1] - s[1]) * Math.cos(Math.PI * 60 / 180)];
      koch(a, s, n - 1);
      points.push(s);
      koch(s, u, n - 1);
      points.push(u);
      koch(u, t, n - 1);
      points.push(t);
      koch(t, b, n - 1);
    }

    koch(a, b, maxIterations);
    points.push(b);

    let x = points.map((p) => {return p[0]});
    let y = points.map((p) => {return p[1]});
    let xMin = Math.min(...x);
    let xMax = Math.max(...x);
    let yMin = Math.min(...y);
    let yMax = Math.max(...y);
    let xRange = xMax - xMin;
    let yRange = yMax - yMin;
    let xScale = canvasSize / xRange;
    let yScale = canvasSize / yRange;
    let scale = Math.min(xScale, yScale);
    let xCenter = (xMin + xMax) / 2;
    let yCenter = (yMin + yMax) / 2;
    let xShift = (canvasSize - xRange * scale) / 2;
    let yShift = (canvasSize - yRange * scale) / 2;

    if (execute) {
      ctx.clearRect(0, 0, canvasSize, canvasSize);
      ctx.beginPath();
      ctx.moveTo((x[0] - xCenter) * scale + xShift, (y[0] - yCenter) * scale + yShift);
      for (let i = 1; i < x.length; i++) {
        ctx.lineTo((x[i] - xCenter) * scale + xShift, (y[i] - yCenter) * scale + yShift);
      }
      ctx.closePath();
      ctx.stroke();
    }

    
  }

  return (
    <Layout title={`${pageName} (${Settings.ProjectName})`} favicon='feature-image/sierpinski-triangle.png'>
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

export default KochCurve;
