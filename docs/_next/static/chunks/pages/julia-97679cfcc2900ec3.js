(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[713],{4551:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/julia",function(){return n(8298)}])},1943:function(e,t,n){"use strict";var r=n(5893);n(7294);var i=n(1664),s=n.n(i),a=n(9008),l=n.n(a),d=n(2100);t.Z=function(e){let{children:t,title:n="Fractal Drawer"}=e;return(0,r.jsxs)("div",{id:"Root",children:[(0,r.jsxs)(l(),{children:[(0,r.jsx)("title",{children:n}),(0,r.jsx)("meta",{charSet:"utf-8"}),(0,r.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,r.jsx)("header",{children:(0,r.jsxs)("nav",{children:[(0,r.jsx)(s(),{className:"feature-link",href:"/",children:"Home"}),d.Z.map((e,t)=>(0,r.jsx)(s(),{className:"feature-link",href:e?"/".concat(e.id):"/",children:e.name},e.name))]})}),t,(0,r.jsx)("footer",{})]})}},8195:function(e,t,n){"use strict";let r=n(2702),i={ProjectName:"fractal-drawer.ts",RootPath:r.assetPrefix};t.Z=i},2702:function(e){"use strict";let t="/fractal-drawer.ts";e.exports={basePath:t,assetPrefix:t,publicRuntimeConfig:{basePath:t}}},8298:function(e,t,n){"use strict";n.r(t);var r=n(5893),i=n(7294),s=n(3680),a=n(5447),l=n(1943),d=n(8195);let c=()=>{let e=(0,i.useRef)(null),[t,n]=(0,i.useState)(300),[c,o]=(0,i.useState)(0),[x,u]=(0,i.useState)(20),[h,p]=(0,i.useState)(10),[j,m]=(0,i.useState)({x:-.4,y:.6}),[v,f]=(0,i.useState)(-1.5),[g,y]=(0,i.useState)(1.5),[b,C]=(0,i.useState)(-1.5),[Z,w]=(0,i.useState)(1.5);return(0,r.jsxs)(l.Z,{title:"".concat(d.Z.ProjectName),children:[(0,r.jsxs)("div",{id:"CanvasArea",children:[(0,r.jsx)("h1",{onClick(){console.log(e.current)},children:"Julia"}),(0,r.jsx)("canvas",{ref:e,width:t,height:t})]}),(0,r.jsx)("div",{id:"button-div",children:(0,r.jsx)(s.Z,{variant:"outline-primary",onClick:function(){let n=e.current;if(n){let r=n.getContext("2d");if(r){let i=(g-v)/t,s=(Z-b)/t;for(let a=0;a<t;a++)for(let l=0;l<t;l++){let d={x:v+a*i,y:b+l*s},o=0;for(;o<x;){let u={x:d.x*d.x-d.y*d.y,y:2*d.x*d.y};if(d.x=u.x+j.x,d.y=u.y+j.y,d.x*d.x+d.y*d.y>h)break;o++}o==x?r.fillStyle="#000000":r.fillStyle="hsl(".concat(c+360*o/x,", 100%, 50%)"),r.fillRect(a,l,1,1)}}}},children:"Draw!!!"})}),(0,r.jsx)("table",{id:"Settings",children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Canvas Size"}),(0,r.jsx)("td",{children:(0,r.jsx)(a.Z.Range,{min:100,max:500,onInput(e){n(parseInt(e.target.value))}})}),(0,r.jsx)("td",{children:t})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Color (start)"}),(0,r.jsx)("td",{children:(0,r.jsx)(a.Z.Range,{min:0,max:360,value:c,onInput(e){o(parseInt(e.target.value))}})}),(0,r.jsx)("td",{style:{backgroundColor:"hsl(".concat(c,", 100%, 50%)")}})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Max Iterations"}),(0,r.jsx)("td",{children:(0,r.jsx)(a.Z.Range,{min:3,max:100,value:x,onInput(e){u(parseInt(e.target.value))}})}),(0,r.jsx)("td",{children:x})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Threshold"}),(0,r.jsx)("td",{children:(0,r.jsx)(a.Z.Range,{min:3,max:100,value:h,onInput(e){p(parseInt(e.target.value))}})}),(0,r.jsx)("td",{children:h})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"C(x)"}),(0,r.jsx)("td",{children:(0,r.jsx)(a.Z.Control,{type:"number",step:.1,value:j.x,onInput(e){m({x:parseFloat(e.target.value),y:j.y})}})}),(0,r.jsx)("td",{children:j.x})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"C(y)"}),(0,r.jsx)("td",{children:(0,r.jsx)(a.Z.Control,{type:"number",step:.1,value:j.y,onInput(e){m({x:j.x,y:parseFloat(e.target.value)})}})}),(0,r.jsx)("td",{children:j.y})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"X Min"}),(0,r.jsx)("td",{children:(0,r.jsx)(a.Z.Control,{type:"number",step:.1,value:v,onInput(e){f(parseFloat(e.target.value))}})}),(0,r.jsx)("td",{children:v})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"X Max"}),(0,r.jsx)("td",{children:(0,r.jsx)(a.Z.Control,{type:"number",step:.1,value:g,onInput(e){y(parseFloat(e.target.value))}})}),(0,r.jsx)("td",{children:g})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Y Min"}),(0,r.jsx)("td",{children:(0,r.jsx)(a.Z.Control,{type:"number",step:.1,value:b,onInput(e){C(parseFloat(e.target.value))}})}),(0,r.jsx)("td",{children:b})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Y Max"}),(0,r.jsx)("td",{children:(0,r.jsx)(a.Z.Control,{type:"number",step:.1,value:Z,onInput(e){w(parseFloat(e.target.value))}})}),(0,r.jsx)("td",{children:Z})]})]})})]})};t.default=c},2100:function(e,t){"use strict";t.Z=[{name:"マンデルブロ集合",description:"マンデルブロ集合を描画します。",id:"mandelbrot"},{name:"ジュリア集合",description:"ジュリア集合を描画します。",id:"julia"},{name:"ブッダブロ集合",description:"ブッダブロ集合を描画します。",id:"buddhabrot"},{name:"トリコルン集合",description:"トリコルン集合を描画します。",id:"tricorn"},{name:"バーニングシップ集合",description:"バーニングシップ集合を描画します。",id:"burning-ship"},{name:"バーンズリーのフェルン",description:"バーンズリーのフェルンを描画します。",id:"barnsley-fern"},{name:"ピタゴラスの木",description:"ピタゴラスの木を描画します。",id:"pythagoras-tree"},{name:"シェルピンスキーの三角形",description:"シェルピンスキーの三角形を描画します。",id:"sierpinski-triangle"},{name:"シェルピンスキーのカーペット",description:"シェルピンスキーのカーペットを描画します。",id:"sierpinski-carpet"},{name:"コッホ曲線",description:"コッホ曲線を描画します。",id:"koch-curve"},{name:"コッホ雪片",description:"コッホ雪片を描画します。",id:"koch-snowflake"},{name:"ドラゴン曲線",description:"ドラゴン曲線を描画します。",id:"dragon-curve"},{name:"ヒルベルト曲線",description:"ヒルベルト曲線を描画します。",id:"hilbert-curve"},{name:"ペアノ曲線",description:"ペアノ曲線を描画します。",id:"peano-curve"},{name:"ペアノゴスパー曲線",description:"ペアノゴスパー曲線を描画します。",id:"peano-gosper-curve"},{name:"ペアノゴスパー島曲線",description:"ペアノゴスパー島曲線を描画します。",id:"peano-gosper-island-curve"},{name:"ペアノゴスパー空間埋め曲線",description:"ペアノゴスパー空間埋め曲線を描画します。",id:"peano-gosper-space-filling-curve"},{name:"ペアノゴスパー矢印先曲線",description:"ペアノゴスパー矢印先曲線を描画します。",id:"peano-gosper-arrowhead-curve"},{name:"ペアノゴスパードラゴン曲線",description:"ペアノゴスパードラゴン曲線を描画します。",id:"peano-gosper-dragon-curve"}]}},function(e){e.O(0,[996,451,774,888,179],function(){return e(e.s=4551)}),_N_E=e.O()}]);