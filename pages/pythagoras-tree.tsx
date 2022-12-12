import React, { useRef, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Layout from '../components/Layout';
import Settings from '../components/Settings';

const pageName = 'Pythagoras Tree';

const canvasMinSize = 100;
const canvasMaxSize = 500;

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
  }, [canvasSize, color, size, degree, maxIterations]);

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
            <td><Form.Range min={5} max={20} onInput={(e) => {setSize(parseInt((e.target as HTMLInputElement).value)); Draw()}} /></td>
            <td>{size}%</td>
          </tr>
        </tbody>
      </table>
    </Layout>
  );
};

export default PythagorasTree;
