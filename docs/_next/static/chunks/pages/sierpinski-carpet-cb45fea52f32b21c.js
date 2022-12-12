(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[297],{6654:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sierpinski-carpet",function(){return t(3839)}])},1943:function(e,i,t){"use strict";var n=t(5893);t(7294);var r=t(1664),s=t.n(r),a=t(9008),c=t.n(a),d=t(8195),o=t(2100);i.Z=function(e){let{children:i,title:t="Fractal Drawer",favicon:r="favicon.ico"}=e;return(0,n.jsxs)("div",{id:"Root",children:[(0,n.jsxs)(c(),{children:[(0,n.jsx)("title",{children:t}),(0,n.jsx)("meta",{charSet:"utf-8"}),(0,n.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),(0,n.jsx)("link",{rel:"shortcut icon",href:"".concat(d.Z.RootPath,"/").concat(r),type:"image/x-icon"})]}),(0,n.jsx)("header",{children:(0,n.jsxs)("nav",{children:[(0,n.jsx)(s(),{className:"feature-link",href:"/",children:"Home"}),o.Z.map((e,i)=>(0,n.jsx)(s(),{className:"feature-link",href:e?"/".concat(e.id):"/",children:e.name},e.name))]})}),i,(0,n.jsx)("footer",{})]})}},8195:function(e,i,t){"use strict";let n=t(2702),r={ProjectName:"fractal-drawer.ts",RootPath:n.assetPrefix};i.Z=r},2702:function(e){"use strict";let i="/fractal-drawer.ts";e.exports={basePath:i,assetPrefix:i,publicRuntimeConfig:{basePath:i}}},3839:function(e,i,t){"use strict";t.r(i);var n=t(5893),r=t(7294),s=t(3680),a=t(5447),c=t(1943),d=t(8195);let o="Sierpinski Carpet",l=()=>{let e,i=(0,r.useRef)(null),[t,l]=(0,r.useState)(300),[h,u]=(0,r.useState)(0),[p,x]=(0,r.useState)(70),[m,f]=(0,r.useState)(5),[j,v]=(0,r.useState)(300);function g(){let i=!(arguments.length>0)||void 0===arguments[0]||arguments[0],n=e=>{let i=[];return e.forEach(t=>{e.forEach(e=>{i.push({x:t,y:e})})}),i};e.clearRect(0,0,t,t);let r=t*p/100,s=(t-r)/2;e.fillStyle="hsl(".concat(h,", 100%, 50%)"),e.fillRect(s,s,r,r),e.fillStyle="white";let a=r/3,c=s+a;e.fillRect(c,c,a,a),!1!==i&&function i(t,r,s,a){m<a||(a/2==0?e.fillStyle="hsl(".concat(h,", 100%, 50%)"):e.fillStyle="white",n([1/9*s,4/9*s,7/9*s]).forEach(n=>{e.fillRect(n.x+t,n.y+r,s/9,s/9),setTimeout(()=>{i(n.x+t-s/9,n.y+r-s/9,s/3,a+1)},j)}))}(s,s,r,1)}return(0,r.useEffect)(()=>{e=i.current.getContext("2d"),g(!1)},[t,h,p,m,j]),(0,n.jsxs)(c.Z,{title:"".concat(o," (").concat(d.Z.ProjectName,")"),favicon:"feature-image/sierpinski-carpet.png",children:[(0,n.jsxs)("div",{id:"CanvasArea",children:[(0,n.jsx)("h1",{children:o}),(0,n.jsx)("canvas",{ref:i,width:t,height:t})]}),(0,n.jsx)("div",{id:"button-div",children:(0,n.jsx)(s.Z,{variant:"outline-primary",onClick(){g(!0)},children:"Draw!!!"})}),(0,n.jsx)("table",{id:"Settings",children:(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Canvas Size"}),(0,n.jsx)("td",{children:(0,n.jsx)(a.Z.Range,{min:100,max:500,onInput(e){l(parseInt(e.target.value))}})}),(0,n.jsx)("td",{children:t})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Color"}),(0,n.jsx)("td",{children:(0,n.jsx)(a.Z.Range,{min:0,max:360,onInput(e){u(parseInt(e.target.value))}})}),(0,n.jsx)("td",{style:{backgroundColor:"hsl(".concat(h,", 100%, 50%)")}})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Size"}),(0,n.jsx)("td",{children:(0,n.jsx)(a.Z.Range,{min:50,max:100,onInput(e){x(parseInt(e.target.value))}})}),(0,n.jsxs)("td",{children:[p,"%"]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Max Iterations"}),(0,n.jsx)("td",{children:(0,n.jsx)(a.Z.Range,{min:3,max:15,onInput(e){f(parseInt(e.target.value))}})}),(0,n.jsx)("td",{children:m})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Timespan"}),(0,n.jsx)("td",{children:(0,n.jsx)(a.Z.Range,{min:100,max:1e3,onInput(e){v(parseInt(e.target.value))}})}),(0,n.jsxs)("td",{children:[j,"ms"]})]})]})})]})};i.default=l},2100:function(e,i){"use strict";i.Z=[{name:"マンデルブロ集合",description:"マンデルブロ集合を描画します。",id:"mandelbrot"},{name:"ジュリア集合",description:"ジュリア集合を描画します。",id:"julia"},{name:"ブッダブロ集合",description:"ブッダブロ集合を描画します。",id:"buddhabrot"},{name:"トライコーン集合",description:"トライコーン集合を描画します。",id:"tricorn"},{name:"バーニングシップ集合",description:"バーニングシップ集合を描画します。",id:"burning-ship"},{name:"バーンズリーのフェルン",description:"バーンズリーのフェルンを描画します。",id:"barnsley-fern"},{name:"ピタゴラスの木",description:"ピタゴラスの木を描画します。",id:"pythagoras-tree"},{name:"再帰ツリー",description:"再帰ツリーを描画します。",id:"recursive-tree"},{name:"シェルピンスキーの三角形",description:"シェルピンスキーの三角形を描画します。",id:"sierpinski-triangle"},{name:"シェルピンスキーのカーペット",description:"シェルピンスキーのカーペットを描画します。",id:"sierpinski-carpet"},{name:"コッホ曲線",description:"コッホ曲線を描画します。",id:"koch-curve"},{name:"コッホ雪片",description:"コッホ雪片を描画します。",id:"koch-snowflake"},{name:"ドラゴン曲線",description:"ドラゴン曲線を描画します。",id:"dragon-curve"},{name:"ヒルベルト曲線",description:"ヒルベルト曲線を描画します。",id:"hilbert-curve"},{name:"ペアノ曲線",description:"ペアノ曲線を描画します。",id:"peano-curve"},{name:"ペアノゴスパー曲線",description:"ペアノゴスパー曲線を描画します。",id:"peano-gosper-curve"},{name:"ペアノゴスパー島曲線",description:"ペアノゴスパー島曲線を描画します。",id:"peano-gosper-island-curve"},{name:"ペアノゴスパー空間埋め曲線",description:"ペアノゴスパー空間埋め曲線を描画します。",id:"peano-gosper-space-filling-curve"},{name:"ペアノゴスパー矢印先曲線",description:"ペアノゴスパー矢印先曲線を描画します。",id:"peano-gosper-arrowhead-curve"},{name:"ペアノゴスパードラゴン曲線",description:"ペアノゴスパードラゴン曲線を描画します。",id:"peano-gosper-dragon-curve"}]}},function(e){e.O(0,[996,451,774,888,179],function(){return e(e.s=6654)}),_N_E=e.O()}]);