
type Feature = {
  name: string;
  description: string;
  id: string;
};

const features: Feature[] = [
  {
    name: "マンデルブロ集合",
    description: "マンデルブロ集合を描画します。",
    id: "mandelbrot",
  } as Feature,
  {
    name: "ジュリア集合",
    description: "ジュリア集合を描画します。",
    id: "julia",
  } as Feature,
  {
    name: "ブッダブロ集合",
    description: "ブッダブロ集合を描画します。",
    id: "buddhabrot",
  },
  {
    name: "トリコルン集合",
    description: "トリコルン集合を描画します。",
    id: "tricorn",
  },
  {
    name: "バーニングシップ集合",
    description: "バーニングシップ集合を描画します。",
    id: "burning-ship",
  },
  {
    name: "バーンズリーのフェルン",
    description: "バーンズリーのフェルンを描画します。",
    id: "barnsley-fern",
  },
  {
    name: "ピタゴラスの木",
    description: "ピタゴラスの木を描画します。",
    id: "pythagoras-tree",
  } as Feature,
  {
    name: "シェルピンスキーの三角形",
    description: "シェルピンスキーの三角形を描画します。",
    id: "sierpinski-triangle",
  } as Feature,
  {
    name: "シェルピンスキーのカーペット",
    description: "シェルピンスキーのカーペットを描画します。",
    id: "sierpinski-carpet",
  } as Feature,
  {
    name: "コッホ曲線",
    description: "コッホ曲線を描画します。",
    id: "koch-curve",
  } as Feature,
  {
    name: "コッホ雪片",
    description: "コッホ雪片を描画します。",
    id: "koch-snowflake",
  } as Feature,
  {
    name: "ドラゴン曲線",
    description: "ドラゴン曲線を描画します。",
    id: "dragon-curve",
  } as Feature,
  {
    name: "ヒルベルト曲線",
    description: "ヒルベルト曲線を描画します。",
    id: "hilbert-curve",
  } as Feature,
  {
    name: "ペアノ曲線",
    description: "ペアノ曲線を描画します。",
    id: "peano-curve",
  } as Feature,
  {
    name: "ペアノゴスパー曲線",
    description: "ペアノゴスパー曲線を描画します。",
    id: "peano-gosper-curve",
  } as Feature,
  {
    name: "ペアノゴスパー島曲線",
    description: "ペアノゴスパー島曲線を描画します。",
    id: "peano-gosper-island-curve",
  } as Feature,
  {
    name: "ペアノゴスパー空間埋め曲線",
    description: "ペアノゴスパー空間埋め曲線を描画します。",
    id: "peano-gosper-space-filling-curve",
  } as Feature,
  {
    name: "ペアノゴスパー矢印先曲線",
    description: "ペアノゴスパー矢印先曲線を描画します。",
    id: "peano-gosper-arrowhead-curve",
  } as Feature,
  {
    name: "ペアノゴスパードラゴン曲線",
    description: "ペアノゴスパードラゴン曲線を描画します。",
    id: "peano-gosper-dragon-curve",
  } as Feature,
];

export default features;
