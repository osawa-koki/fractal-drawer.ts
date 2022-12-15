(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[131],{4918:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/rose-curve",function(){return n(1383)}])},1943:function(e,t,n){"use strict";var i=n(5893);n(7294);var r=n(1664),s=n.n(r),a=n(9008),c=n.n(a),d=n(8195),o=n(2100);t.Z=function(e){let{children:t,title:n="Fractal Drawer",favicon:r="favicon.ico"}=e;return(0,i.jsxs)("div",{id:"Root",children:[(0,i.jsxs)(c(),{children:[(0,i.jsx)("title",{children:n}),(0,i.jsx)("meta",{charSet:"utf-8"}),(0,i.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),(0,i.jsx)("link",{rel:"shortcut icon",href:"".concat(d.Z.RootPath,"/").concat(r),type:"image/x-icon"})]}),(0,i.jsx)("header",{children:(0,i.jsxs)("nav",{children:[(0,i.jsx)(s(),{className:"feature-link",href:"/",children:"Home"}),o.Z.map((e,t)=>(0,i.jsx)(s(),{className:"feature-link",href:e?"/".concat(e.id):"/",children:e.name},e.name))]})}),t,(0,i.jsx)("footer",{})]})}},8195:function(e,t,n){"use strict";let i=n(2702),r={ProjectName:"fractal-drawer.ts",RootPath:i.assetPrefix};t.Z=r},2702:function(e){"use strict";let t="/fractal-drawer.ts";e.exports={basePath:t,assetPrefix:t,publicRuntimeConfig:{basePath:t}}},1383:function(e,t,n){"use strict";n.r(t);var i=n(5893),r=n(7294),s=n(3680),a=n(5447),c=n(1943),d=n(8195);let o="Rose Curve",h=()=>{let e,t=(0,r.useRef)(null),[n,h]=(0,r.useState)(300),[l,u]=(0,r.useState)(5),[x,p]=(0,r.useState)(2),[j,m]=(0,r.useState)(90),[f,v]=(0,r.useState)(.1),[g,k]=(0,r.useState)(3),[w,b]=(0,r.useState)(!1),[Z,I]=(0,r.useState)(!0),[S,P]=(0,r.useState)(!1);async function R(){if(S)return;P(!0),e.clearRect(0,0,n,n);let t=0;for(let i=0;i<360*l;i+=f){let r=i*Math.PI/180,s=Math.sin(l*i/x*Math.PI/180)*Math.cos(r),a=Math.sin(l*i/x*Math.PI/180)*Math.sin(r),c=n/2*j/100;e.fillStyle="hsl(".concat(t,", 100%, 50%)"),t=(t+1)%360,e.fillRect(s*c+n/2,a*c+n/2,1,1),w&&await new Promise(e=>setTimeout(e,g))}P(!1)}return(0,r.useEffect)(()=>{e=t.current.getContext("2d"),Z&&R()},[n,l,x,j,f,g,w,Z,S]),(0,i.jsxs)(c.Z,{title:"".concat(o," (").concat(d.Z.ProjectName,")"),favicon:"feature-image/rose-curve.png",children:[(0,i.jsxs)("div",{id:"CanvasArea",children:[(0,i.jsx)("h1",{children:o}),(0,i.jsx)("canvas",{ref:t,width:n,height:n})]}),(0,i.jsx)("div",{id:"button-div",children:(0,i.jsx)(s.Z,{variant:"outline-primary",onClick:R,children:"Draw!!!"})}),(0,i.jsx)("table",{id:"Settings",children:(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Canvas Size"}),(0,i.jsx)("td",{children:(0,i.jsx)(a.Z.Range,{min:100,max:500,onInput(e){h(parseInt(e.target.value))}})}),(0,i.jsx)("td",{children:n})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Size"}),(0,i.jsx)("td",{children:(0,i.jsx)(a.Z.Range,{min:50,max:100,onInput(e){m(parseInt(e.target.value))}})}),(0,i.jsxs)("td",{children:[j,"%"]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"n"}),(0,i.jsx)("td",{children:(0,i.jsx)(a.Z.Range,{min:1,max:15,onInput(e){u(parseInt(e.target.value))}})}),(0,i.jsx)("td",{children:l})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"k"}),(0,i.jsx)("td",{children:(0,i.jsx)(a.Z.Range,{min:1,max:15,onInput(e){p(parseInt(e.target.value))}})}),(0,i.jsx)("td",{children:x})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Step"}),(0,i.jsx)("td",{children:(0,i.jsx)(a.Z.Range,{min:.1,max:1,step:.1,onInput(e){v(parseFloat(e.target.value))}})}),(0,i.jsx)("td",{children:f})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Timespan"}),(0,i.jsx)("td",{children:(0,i.jsx)(a.Z.Range,{min:1,max:30,step:10,onInput(e){k(parseInt(e.target.value))}})}),(0,i.jsxs)("td",{children:[g,"ms"]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Time Effect"}),(0,i.jsx)("td",{children:(0,i.jsx)(a.Z.Check,{type:"checkbox",checked:w,onChange(e){b(e.target.checked)}})}),(0,i.jsx)("td",{children:w?"On":"Off"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Immidiate Effect"}),(0,i.jsx)("td",{children:(0,i.jsx)(a.Z.Check,{type:"checkbox",checked:Z,onChange(e){I(e.target.checked),e.target.checked&&b(!1),R()}})}),(0,i.jsx)("td",{children:Z?"On":"Off"})]})]})})]})};t.default=h},2100:function(e,t){"use strict";t.Z=[{name:"マンデルブロ集合",description:"マンデルブロ集合を描画します。",id:"mandelbrot"},{name:"ジュリア集合",description:"ジュリア集合を描画します。",id:"julia"},{name:"ブッダブロ集合",description:"ブッダブロ集合を描画します。",id:"buddhabrot"},{name:"トライコーン集合",description:"トライコーン集合を描画します。",id:"tricorn"},{name:"バーニングシップ集合",description:"バーニングシップ集合を描画します。",id:"burning-ship"},{name:"バーンズリーのフェルン",description:"バーンズリーのフェルンを描画します。",id:"barnsley-fern"},{name:"ピタゴラスの木",description:"ピタゴラスの木を描画します。",id:"pythagoras-tree"},{name:"再帰ツリー",description:"再帰ツリーを描画します。",id:"recursive-tree"},{name:"シェルピンスキーの三角形",description:"シェルピンスキーの三角形を描画します。",id:"sierpinski-triangle"},{name:"シェルピンスキーのカーペット",description:"シェルピンスキーのカーペットを描画します。",id:"sierpinski-carpet"},{name:"バラ曲線",description:"バラ曲線を描画します。",id:"rose-curve"},{name:"コッホ曲線",description:"コッホ曲線を描画します。",id:"koch-curve"},{name:"コッホ雪片",description:"コッホ雪片を描画します。",id:"koch-snowflake"},{name:"ドラゴン曲線",description:"ドラゴン曲線を描画します。",id:"dragon-curve"},{name:"ヒルベルト曲線",description:"ヒルベルト曲線を描画します。",id:"hilbert-curve"},{name:"ペアノ曲線",description:"ペアノ曲線を描画します。",id:"peano-curve"},{name:"ペアノゴスパー曲線",description:"ペアノゴスパー曲線を描画します。",id:"peano-gosper-curve"},{name:"ペアノゴスパー島曲線",description:"ペアノゴスパー島曲線を描画します。",id:"peano-gosper-island-curve"},{name:"ペアノゴスパー空間埋め曲線",description:"ペアノゴスパー空間埋め曲線を描画します。",id:"peano-gosper-space-filling-curve"},{name:"ペアノゴスパー矢印先曲線",description:"ペアノゴスパー矢印先曲線を描画します。",id:"peano-gosper-arrowhead-curve"},{name:"ペアノゴスパードラゴン曲線",description:"ペアノゴスパードラゴン曲線を描画します。",id:"peano-gosper-dragon-curve"}]}},function(e){e.O(0,[996,451,774,888,179],function(){return e(e.s=4918)}),_N_E=e.O()}]);