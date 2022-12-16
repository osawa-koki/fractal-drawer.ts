import React, { useRef, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';

import Layout from '../components/Layout';
import Settings from '../components/Settings';

const pageName = 'Burning Ship';

const canvasMinSize = 100;
const canvasMaxSize = 500;
const rangeMin = 0;
const rangeMax = 100;
const deltaMin = 10;
const deltaMax = 100;
const maxIterationMinCount = 3;
const maxIterationMaxCount = 15;

const BurningShip = () => {

  let canvasRef = useRef<HTMLCanvasElement>(null);

  let [canvasSize, setCanvasSize] = useState(300);
  let [color, setColor] = useState(0);
  let [x, setX] = useState(38);
  let [y, setY] = useState(70);
  let [delta, setDelta] = useState(120);
  let [maxIterations, setMaxIterations] = useState(10);
  let [locked, setLocked] = useState(false);

  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D;

  useEffect (() => {
    canvas = canvasRef.current!;
    ctx = canvas.getContext('2d')!;
    Draw(false);
  }, [canvasSize, color, x, y, delta, maxIterations]);

  useEffect (() => {
    canvas = canvasRef.current!;
    ctx = canvas.getContext('2d')!;
  }, [locked]);

  const Draw = (execute: boolean) => {
    if (locked) return;
    setLocked(true);
    ctx.clearRect(0, 0, canvasSize, canvasSize);
    setLocked(false);
  }

  return (
    <Layout title={`${pageName} (${Settings.ProjectName})`} favicon='feature-image/burning-ship.png'>
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
            <th>x</th>
            <td><Form.Range min={rangeMin} max={rangeMax} onInput={(e) => {setX(parseInt((e.target as HTMLInputElement).value))}} /></td>
            <td>{x}</td>
          </tr>
          <tr>
            <th>y</th>
            <td><Form.Range min={rangeMin} max={rangeMax} onInput={(e) => {setY(parseInt((e.target as HTMLInputElement).value))}} /></td>
            <td>{y}</td>
          </tr>
          <tr>
            <th>Delta</th>
            <td><Form.Range min={deltaMin} max={deltaMax} onInput={(e) => {setDelta(parseInt((e.target as HTMLInputElement).value))}} /></td>
            <td>{delta}</td>
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

export default BurningShip;
