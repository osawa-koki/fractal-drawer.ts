import React, { useRef, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Layout from '../components/Layout';
import Settings from '../components/Settings';
import coord from '../src/coord';

const pageName = 'Koch Curve';

const canvasMinSize = 100;
const canvasMaxSize = 500;
const sizeMin = 50;
const sizeMax = 100;
const maxIterationMinCount = 3;
const maxIterationMaxCount = 15;
const timespanMin = 100;
const timespanMax = 1000;

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
    function KochCurveRecursive(startPoint: coord, endPoint: coord, middlePoint: coord, iterations: number) {
      if (iterations > 0) {
        let newStartPoint: coord = {x: startPoint.x + (middlePoint.x - startPoint.x) / divition, y: startPoint.y + (middlePoint.y - startPoint.y) / divition};
        let newEndPoint: coord = {x: endPoint.x + (middlePoint.x - endPoint.x) / divition, y: endPoint.y + (middlePoint.y - endPoint.y) / divition};
        let newMiddlePoint: coord = {x: startPoint.x + (endPoint.x - startPoint.x) / divition, y: startPoint.y + (endPoint.y - startPoint.y) / divition};
        KochCurveRecursive(startPoint, newStartPoint, newMiddlePoint, iterations - 1);
        KochCurveRecursive(newStartPoint, newEndPoint, newMiddlePoint, iterations - 1);
        KochCurveRecursive(newEndPoint, endPoint, newMiddlePoint, iterations - 1);
      } else {
        ctx.beginPath();
        ctx.moveTo(startPoint.x, startPoint.y);
        ctx.lineTo(endPoint.x, endPoint.y);
        ctx.stroke();
      }
    }
    if (execute) {
      ctx.clearRect(0, 0, canvasSize, canvasSize);
      ctx.fillStyle = `hsl(${color}, 100%, 50%)`;
      ctx.strokeStyle = `hsl(${color}, 100%, 50%)`;
      ctx.beginPath();
      let startPoint: coord = {x: canvasSize / 2, y: canvasSize / 2 - canvasSize * triagleSize / 200};
      let endPoint: coord = {x: canvasSize / 2 - canvasSize * triagleSize / 200, y: canvasSize / 2 + canvasSize * triagleSize / 200};
      let middlePoint: coord = {x: canvasSize / 2 + canvasSize * triagleSize / 200, y: canvasSize / 2 + canvasSize * triagleSize / 200};
      ctx.moveTo(startPoint.x, startPoint.y);
      ctx.lineTo(endPoint.x, endPoint.y);
      ctx.lineTo(middlePoint.x, middlePoint.y);
      ctx.lineTo(startPoint.x, startPoint.y);
      ctx.stroke();
      KochCurveRecursive(startPoint, endPoint, middlePoint, maxIterations);
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
