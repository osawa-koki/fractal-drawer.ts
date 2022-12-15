import React, { useRef, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';

import Layout from '../components/Layout';
import Settings from '../components/Settings';

const pageName = 'Pythagoras Tree';

const canvasMinSize = 100;
const canvasMaxSize = 500;
const sizeMin = 5;
const sizeMax = 20;
const degreeMin = 0;
const degreeMax = 90;
const leftMin = 20;
const leftMax = 80;
const bottomMin = 0;
const bottomMax = 30;
const maxIterationMinCount = 5;
const maxIterationMaxCount = 15;
const timespanMin = 100;
const timespanMax = 1000;

type coord = {
  x: number;
  y: number;
};

const PythagorasTree = () => {

  let canvasRef = useRef<HTMLCanvasElement>(null);

  let [canvasSize, setCanvasSize] = useState(300);
  let [color, setColor] = useState(0);
  let [size, setSize] = useState(15);
  let [degree, setDegree] = useState(60);
  let [maxIterations, setMaxIterations] = useState(10);
  let [left, setLeft] = useState(35);
  let [bottom, setBottom] = useState(15);
  let [timespan, setTimespan] = useState(300);
  let [locked, setLocked] = useState(false);

  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D;

  const boxSize = () => canvasSize * size / 100;
  const leftSize = () => canvasSize * left / 100;
  const bottomSize = () => canvasSize * bottom / 100;

  useEffect (() => {
    canvas = canvasRef.current!;
    ctx = canvas.getContext('2d')!;
    Draw(false);
  }, [canvasSize, color, size, degree, maxIterations, left, bottom, timespan]);

  useEffect (() => {
    canvas = canvasRef.current!;
    ctx = canvas.getContext('2d')!;
  }, [locked]);

  function Draw(execute: boolean) {
    if (locked) return;
    setLocked(true);
    ctx.clearRect(0, 0, canvasSize, canvasSize);
    ctx.fillStyle = `hsl(${color}, 100%, 50%)`;
    ctx.fillRect(
      leftSize() - boxSize() / 2,
      canvasSize - bottomSize() - boxSize(),
      boxSize(),
      boxSize(),
    );
    function getLeftPoints(x: number, y: number, size: number, angle: number) {
      return [
        {x: x, y: y},
        {
          x: x + Math.cos((angle + degree) * Math.PI / 180) * size,
          y: y - Math.sin((angle + degree) * Math.PI / 180) * size,
        },
        {
          x: x + Math.cos((angle + degree + 45) * Math.PI / 180) * size * Math.sqrt(2),
          y: y - Math.sin((angle + degree + 45) * Math.PI / 180) * size * Math.sqrt(2),
        },
        {
          x: x + Math.cos((angle + degree + 90) * Math.PI / 180) * size,
          y: y - Math.sin((angle + degree + 90) * Math.PI / 180) * size,
        },
      ] as coord[];
    }
    function getRightPoints(x: number, y: number, size: number, angle: number) {
      return [
        {x: x, y: y},
        {
          x: x + Math.cos((angle + degree) * Math.PI / 180) * size,
          y: y - Math.sin((angle + degree) * Math.PI / 180) * size,
        },
        {
          x: x + Math.cos((angle + degree + 45) * Math.PI / 180) * size * Math.sqrt(2),
          y: y - Math.sin((angle + degree + 45) * Math.PI / 180) * size * Math.sqrt(2),
        },
        {
          x: x + Math.cos((angle + degree + 90) * Math.PI / 180) * size,
          y: y - Math.sin((angle + degree + 90) * Math.PI / 180) * size,
        },
      ] as coord[];
    }
    function recDraw(p1: coord, p2: coord, size: number, angle: number, n: number, i: number) {
      if (n === 0) {
        setLocked(false);
        return;
      }
      ctx.fillStyle = `hsl(${(320 / (maxIterations + 1) * i + color) % 360}, 100%, 50%)`;
			(() => { // 左側
				const smalledSize = Math.cos(degree * Math.PI / 180) * size;
				const pointsLeft = getLeftPoints(p1.x, p1.y, smalledSize, angle);
				ctx.beginPath();
				ctx.moveTo(pointsLeft[0].x, pointsLeft[0].y);
        ctx.lineTo(pointsLeft[1].x, pointsLeft[1].y);
        ctx.lineTo(pointsLeft[2].x, pointsLeft[2].y);
        ctx.lineTo(pointsLeft[3].x, pointsLeft[3].y);
				ctx.fill();
				setTimeout(() => {
					recDraw(
						{ x: pointsLeft[3].x, y: pointsLeft[3].y },
						{ x: pointsLeft[2].x, y: pointsLeft[2].y},
						smalledSize,
						angle + degree,
						n - 1,
						i + 1,
					);
				}, timespan);
			})();
			(() => { // 右側
				const smalledSize = Math.sin(degree * Math.PI / 180) * size;
				const pointsRight = getRightPoints(p2.x, p2.y, smalledSize, angle);
				ctx.beginPath();
				ctx.moveTo(pointsRight[0].x, pointsRight[0].y);
        ctx.lineTo(pointsRight[1].x, pointsRight[1].y);
        ctx.lineTo(pointsRight[2].x, pointsRight[2].y);
        ctx.lineTo(pointsRight[3].x, pointsRight[3].y);
				ctx.fill();
				setTimeout(() => {
					recDraw(
						{ x: pointsRight[2].x, y: pointsRight[2].y},
						{ x: pointsRight[1].x, y: pointsRight[1].y},
						smalledSize,
						angle - (90 - degree),
						n - 1,
						i + 1,
					);
				}, timespan);
			})();
    }
    recDraw(
      {
        x: leftSize() - boxSize() / 2,
        y: canvasSize - bottomSize() - boxSize(),
      },
      {
        x: leftSize() - boxSize() / 2 + boxSize(),
        y: canvasSize - bottomSize() - boxSize(),
      },
      boxSize(),
      0,
      execute ? maxIterations - 1 : 1,
      1,
    );
  }

  return (
    <Layout title={`${pageName} (${Settings.ProjectName})`} favicon='feature-image/pythagoras-tree.png'>
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
            <td><Form.Range min={sizeMin} max={sizeMax} onInput={(e) => {setSize(parseInt((e.target as HTMLInputElement).value))}} /></td>
            <td>{size}%</td>
          </tr>
          <tr>
            <th>Angle</th>
            <td><Form.Range min={degreeMin} max={degreeMax} onInput={(e) => {setDegree(parseInt((e.target as HTMLInputElement).value))}} /></td>
            <td>{degree}°</td>
          </tr>
          <tr>
            <th>Left</th>
            <td><Form.Range min={leftMin} max={leftMax} onInput={(e) => {setLeft(parseInt((e.target as HTMLInputElement).value))}} /></td>
            <td>{left}%</td>
          </tr>
          <tr>
            <th>Bottom</th>
            <td><Form.Range min={bottomMin} max={bottomMax} onInput={(e) => {setBottom(parseInt((e.target as HTMLInputElement).value))}} /></td>
            <td>{bottom}%</td>
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

export default PythagorasTree;
