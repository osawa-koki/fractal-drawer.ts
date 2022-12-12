import React, { useRef, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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

const PythagorasTree = () => {

  let canvasRef = useRef<HTMLCanvasElement>(null);

  let [canvasSize, setCanvasSize] = useState(300);
  let [color, setColor] = useState(0);
  let [size, setSize] = useState(10);
  let [degree, setDegree] = useState(60);
  let [maxIterations, setMaxIterations] = useState(10);
  let [left, setLeft] = useState(50);
  let [bottom, setBottom] = useState(10);

  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D;

  const boxSize = () => canvasSize * size / 100;
  const leftSize = () => canvasSize * left / 100;
  const bottomSize = () => canvasSize * bottom / 100;

  // Pythagoras Tree
  useEffect (() => {
    canvas = canvasRef.current;
    ctx = canvas.getContext('2d');
    Draw();
  }, [canvasSize, color, size, degree, maxIterations, left, bottom]);

  function Draw() {
    ctx.clearRect(0, 0, canvasSize, canvasSize);
    ctx.fillStyle = `hsl(${color}, 100%, 50%)`;
    ctx.fillRect(
      leftSize() - boxSize() / 2,
      canvasSize - bottomSize() - boxSize(),
      boxSize(),
      boxSize(),
    );
  }

  return (
    <Layout title={`${pageName} (${Settings.ProjectName})`}>
      <div id='CanvasArea'>
        <h1>{pageName}</h1>
        <canvas ref={canvasRef} width={canvasSize} height={canvasSize} />
      </div>
      <div id='button-div'>
        <Button variant="outline-primary" onClick={Draw}>Draw!!!</Button>
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
            <td><Form.Range min={maxIterationMinCount} max={maxIterationMaxCount} onInput={(e) => {setMaxIterations(parseInt((e.target as HTMLInputElement).value)); Draw()}} /></td>
            <td>{maxIterations}</td>
          </tr>
        </tbody>
      </table>
    </Layout>
  );
};

export default PythagorasTree;
