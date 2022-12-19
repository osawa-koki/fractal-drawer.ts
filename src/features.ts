
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
  },
  {
    name: "ジュリア集合",
    description: "ジュリア集合を描画します。",
    id: "julia",
  },
  {
    name: "ブッダブロ集合",
    description: "ブッダブロ集合を描画します。",
    id: "buddhabrot",
  },
  {
    name: "トライコーン集合",
    description: "トライコーン集合を描画します。",
    id: "tricorn",
  },
  {
    name: "バーニングシップ集合",
    description: "バーニングシップ集合を描画します。",
    id: "burning-ship",
  },
  {
    name: "バーンズリーのシダ",
    description: "バーンズリーのシダを描画します。",
    id: "barnsley-fern",
  },
  {
    name: "ピタゴラスの木",
    description: "ピタゴラスの木を描画します。",
    id: "pythagoras-tree",
  },
  {
    name: "再帰ツリー",
    description: "再帰ツリーを描画します。",
    id: "recursive-tree",
  },
  {
    name: "シェルピンスキーの三角形",
    description: "シェルピンスキーの三角形を描画します。",
    id: "sierpinski-triangle",
  },
  {
    name: "シェルピンスキーのカーペット",
    description: "シェルピンスキーのカーペットを描画します。",
    id: "sierpinski-carpet",
  },
  {
    name: "バラ曲線",
    description: "バラ曲線を描画します。",
    id: "rose-curve",
  },
  {
    name: "コッホ曲線",
    description: "コッホ曲線を描画します。",
    id: "koch-curve",
  },
  {
    name: "コッホ雪片",
    description: "コッホ雪片を描画します。",
    id: "koch-snowflake",
  },
  {
    name: "ドラゴン曲線",
    description: "ドラゴン曲線を描画します。",
    id: "dragon-curve",
  },
  {
    name: "ヒルベルト曲線",
    description: "ヒルベルト曲線を描画します。",
    id: "hilbert-curve",
  },
  {
    name: "ゴスパー曲線",
    description: "ゴスパー曲線を描画します。",
    id: "gosper-curve",
  },
];

export default features;
