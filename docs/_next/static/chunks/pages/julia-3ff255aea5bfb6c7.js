(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[713],{4551:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/julia",function(){return n(8298)}])},1943:function(e,t,n){"use strict";var r=n(5893);n(7294);var i=n(1664),s=n.n(i),a=n(9008),c=n.n(a),d=n(8195),l=n(2100);t.Z=function(e){let{children:t,title:n="Fractal Drawer",favicon:i="favicon.ico"}=e;return(0,r.jsxs)("div",{id:"Root",children:[(0,r.jsxs)(c(),{children:[(0,r.jsx)("title",{children:n}),(0,r.jsx)("meta",{charSet:"utf-8"}),(0,r.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),(0,r.jsx)("link",{rel:"shortcut icon",href:"".concat(d.Z.RootPath,"/").concat(i),type:"image/x-icon"})]}),(0,r.jsx)("header",{children:(0,r.jsxs)("nav",{children:[(0,r.jsx)(s(),{className:"feature-link",href:"/",children:"Home"}),l.Z.map((e,t)=>(0,r.jsx)(s(),{className:"feature-link",href:e?"/".concat(e.id):"/",children:e.name},e.name))]})}),t,(0,r.jsx)("footer",{})]})}},8195:function(e,t,n){"use strict";let r=n(2702),i={ProjectName:"fractal-drawer.ts",RootPath:r.assetPrefix};t.Z=i},2702:function(e){"use strict";let t="/fractal-drawer.ts";e.exports={basePath:t,assetPrefix:t,publicRuntimeConfig:{basePath:t}}},8298:function(e,t,n){"use strict";n.r(t);var r=n(5893),i=n(7294),s=n(3680),a=n(5447),c=n(1943),d=n(8195);let l="Julia",o=()=>{let e=(0,i.useRef)(null),[t,n]=(0,i.useState)(300),[o,u]=(0,i.useState)(0),[x,h]=(0,i.useState)(75),[p,j]=(0,i.useState)(10),[m,v]=(0,i.useState)({x:-.4,y:.6}),[f,g]=(0,i.useState)(-1.5),[y,b]=(0,i.useState)(1.5),[Z,C]=(0,i.useState)(-1.5),[k,w]=(0,i.useState)(1.5),[I,S]=(0,i.useState)(!1);return(0,r.jsxs)(c.Z,{title:"".concat(l," (").concat(d.Z.ProjectName,")"),favicon:"feature-image/julia.png",children:[(0,r.jsxs)("div",{id:"CanvasArea",children:[(0,r.jsx)("h1",{children:l}),(0,r.jsx)("canvas",{ref:e,width:t,height:t})]}),(0,r.jsx)("div",{id:"button-div",children:(0,r.jsx)(s.Z,{variant:"outline-primary",onClick:function(){if(I)return;S(!0);let n=e.current;if(n){let r=n.getContext("2d");if(r){let i=(y-f)/t,s=(k-Z)/t;for(let a=0;a<t;a++)for(let c=0;c<t;c++){let d={x:f+a*i,y:Z+c*s},l=0;for(;l<x;){let u={x:d.x*d.x-d.y*d.y,y:2*d.x*d.y};if(d.x=u.x+m.x,d.y=u.y+m.y,d.x*d.x+d.y*d.y>p)break;l++}l==x?r.fillStyle="black":r.fillStyle="hsl(".concat(o+360*l/x,", 100%, 50%)"),r.fillRect(a,c,1,1)}}}S(!1)},children:"Draw!!!"})}),(0,r.jsx)("table",{id:"Settings",children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Canvas Size"}),(0,r.jsx)("td",{children:(0,r.jsx)(a.Z.Range,{min:100,max:500,onInput(e){n(parseInt(e.target.value))}})}),(0,r.jsx)("td",{children:t})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Color (start)"}),(0,r.jsx)("td",{children:(0,r.jsx)(a.Z.Range,{min:0,max:360,value:o,onInput(e){u(parseInt(e.target.value))}})}),(0,r.jsx)("td",{style:{backgroundColor:"hsl(".concat(o,", 100%, 50%)")}})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Max Iterations"}),(0,r.jsx)("td",{children:(0,r.jsx)(a.Z.Range,{min:3,max:100,value:x,onInput(e){h(parseInt(e.target.value))}})}),(0,r.jsx)("td",{children:x})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Threshold"}),(0,r.jsx)("td",{children:(0,r.jsx)(a.Z.Range,{min:3,max:100,value:p,onInput(e){j(parseInt(e.target.value))}})}),(0,r.jsx)("td",{children:p})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"C(x)"}),(0,r.jsx)("td",{children:(0,r.jsx)(a.Z.Control,{type:"number",step:.1,value:m.x,onInput(e){v({x:parseFloat(e.target.value),y:m.y})}})}),(0,r.jsx)("td",{children:m.x})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"C(y)"}),(0,r.jsx)("td",{children:(0,r.jsx)(a.Z.Control,{type:"number",step:.1,value:m.y,onInput(e){v({x:m.x,y:parseFloat(e.target.value)})}})}),(0,r.jsx)("td",{children:m.y})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"X Min"}),(0,r.jsx)("td",{children:(0,r.jsx)(a.Z.Control,{type:"number",step:.1,value:f,onInput(e){g(parseFloat(e.target.value))}})}),(0,r.jsx)("td",{children:f})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"X Max"}),(0,r.jsx)("td",{children:(0,r.jsx)(a.Z.Control,{type:"number",step:.1,value:y,onInput(e){b(parseFloat(e.target.value))}})}),(0,r.jsx)("td",{children:y})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Y Min"}),(0,r.jsx)("td",{children:(0,r.jsx)(a.Z.Control,{type:"number",step:.1,value:Z,onInput(e){C(parseFloat(e.target.value))}})}),(0,r.jsx)("td",{children:Z})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Y Max"}),(0,r.jsx)("td",{children:(0,r.jsx)(a.Z.Control,{type:"number",step:.1,value:k,onInput(e){w(parseFloat(e.target.value))}})}),(0,r.jsx)("td",{children:k})]})]})})]})};t.default=o},2100:function(e,t){"use strict";t.Z=[{name:"マンデルブロ集合",description:"マンデルブロ集合を描画します。",id:"mandelbrot"},{name:"ジュリア集合",description:"ジュリア集合を描画します。",id:"julia"},{name:"ブッダブロ集合",description:"ブッダブロ集合を描画します。",id:"buddhabrot"},{name:"トライコーン集合",description:"トライコーン集合を描画します。",id:"tricorn"},{name:"バーニングシップ集合",description:"バーニングシップ集合を描画します。",id:"burning-ship"},{name:"バーンズリーのフェルン",description:"バーンズリーのフェルンを描画します。",id:"barnsley-fern"},{name:"ピタゴラスの木",description:"ピタゴラスの木を描画します。",id:"pythagoras-tree"},{name:"再帰ツリー",description:"再帰ツリーを描画します。",id:"recursive-tree"},{name:"シェルピンスキーの三角形",description:"シェルピンスキーの三角形を描画します。",id:"sierpinski-triangle"},{name:"シェルピンスキーのカーペット",description:"シェルピンスキーのカーペットを描画します。",id:"sierpinski-carpet"},{name:"バラ曲線",description:"バラ曲線を描画します。",id:"rose-curve"},{name:"コッホ曲線",description:"コッホ曲線を描画します。",id:"koch-curve"},{name:"コッホ雪片",description:"コッホ雪片を描画します。",id:"koch-snowflake"},{name:"ドラゴン曲線",description:"ドラゴン曲線を描画します。",id:"dragon-curve"},{name:"ヒルベルト曲線",description:"ヒルベルト曲線を描画します。",id:"hilbert-curve"},{name:"ペアノ曲線",description:"ペアノ曲線を描画します。",id:"peano-curve"},{name:"ペアノゴスパー曲線",description:"ペアノゴスパー曲線を描画します。",id:"peano-gosper-curve"},{name:"ペアノゴスパー島曲線",description:"ペアノゴスパー島曲線を描画します。",id:"peano-gosper-island-curve"},{name:"ペアノゴスパー空間埋め曲線",description:"ペアノゴスパー空間埋め曲線を描画します。",id:"peano-gosper-space-filling-curve"},{name:"ペアノゴスパー矢印先曲線",description:"ペアノゴスパー矢印先曲線を描画します。",id:"peano-gosper-arrowhead-curve"},{name:"ペアノゴスパードラゴン曲線",description:"ペアノゴスパードラゴン曲線を描画します。",id:"peano-gosper-dragon-curve"}]}},function(e){e.O(0,[996,451,774,888,179],function(){return e(e.s=4551)}),_N_E=e.O()}]);