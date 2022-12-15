(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[99],{3003:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/koch-curve",function(){return t(6565)}])},1943:function(e,n,t){"use strict";var i=t(5893);t(7294);var r=t(1664),a=t.n(r),s=t(9008),c=t.n(s),d=t(8195),o=t(2100);n.Z=function(e){let{children:n,title:t="Fractal Drawer",favicon:r="favicon.ico"}=e;return(0,i.jsxs)("div",{id:"Root",children:[(0,i.jsxs)(c(),{children:[(0,i.jsx)("title",{children:t}),(0,i.jsx)("meta",{charSet:"utf-8"}),(0,i.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),(0,i.jsx)("link",{rel:"shortcut icon",href:"".concat(d.Z.RootPath,"/").concat(r),type:"image/x-icon"})]}),(0,i.jsx)("header",{children:(0,i.jsxs)("nav",{children:[(0,i.jsx)(a(),{className:"feature-link",href:"/",children:"Home"}),o.Z.map((e,n)=>(0,i.jsx)(a(),{className:"feature-link",href:e?"/".concat(e.id):"/",children:e.name},e.name))]})}),n,(0,i.jsx)("footer",{})]})}},8195:function(e,n,t){"use strict";let i=t(2702),r={ProjectName:"fractal-drawer.ts",RootPath:i.assetPrefix};n.Z=r},2702:function(e){"use strict";let n="/fractal-drawer.ts";e.exports={basePath:n,assetPrefix:n,publicRuntimeConfig:{basePath:n}}},6565:function(e,n,t){"use strict";t.r(n);var i=t(5893),r=t(7294),a=t(3680),s=t(5447),c=t(6968),d=t(1943),o=t(8195);let l="Koch Curve",h=()=>{let e,n=(0,r.useRef)(null),[t,h]=(0,r.useState)(300),[x,u]=(0,r.useState)(0),[p,j]=(0,r.useState)(10),[m,f]=(0,r.useState)(50),[v,g]=(0,r.useState)(90),[y,w]=(0,r.useState)(50),[b,I]=(0,r.useState)(5),[k,P]=(0,r.useState)(!1);async function Z(){let n=!(arguments.length>0)||void 0===arguments[0]||arguments[0];async function i(n,t,r){if(r<=0){!function(n){e.beginPath(),e.moveTo(n[0].x,n[0].y);for(let t=1;t<n.length;t++)e.lineTo(n[t].x,n[t].y);e.closePath(),e.stroke()}([n,t]),P(!1);return}let a=function(e,n){let t={x:e.x+(n.x-e.x)/3,y:e.y+(n.y-e.y)/3},i={x:e.x+(n.x-e.x)*2/3,y:e.y+(n.y-e.y)*2/3},r={x:t.x+(i.x-t.x)*Math.cos(Math.PI/3)-(i.y-t.y)*Math.sin(Math.PI/3),y:t.y+(i.x-t.x)*Math.sin(Math.PI/3)+(i.y-t.y)*Math.cos(Math.PI/3)};return[t,i,r]}(n,t);i(n,a[0],r-1),i(a[0],a[2],r-1),i(a[2],a[1],r-1),i(a[1],t,r-1)}k||(n&&P(!0),await new Promise(e=>setTimeout(e,100)),e.clearRect(0,0,t,t),e.strokeStyle="hsl(".concat(x,", 100%, 50%)"),i({x:t*p/100,y:t-t*m/100},{x:t*v/100,y:t-t*y/100},n?b:1))}return(0,r.useEffect)(()=>{e=(0,n.current).getContext("2d"),Z(!1)},[t,x,p,m,v,y,b]),(0,r.useEffect)(()=>{e=(0,n.current).getContext("2d")},[k]),(0,i.jsxs)(d.Z,{title:"".concat(l," (").concat(o.Z.ProjectName,")"),favicon:"feature-image/koch-curve.png",children:[(0,i.jsxs)("div",{id:"CanvasArea",children:[(0,i.jsx)("h1",{children:l}),(0,i.jsx)("canvas",{ref:n,width:t,height:t})]}),(0,i.jsx)("div",{id:"button-div",children:(0,i.jsx)(a.Z,{variant:"outline-primary",onClick(){Z(!0)},children:k?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.Z,{animation:"grow",variant:"info",size:"sm"}),"\xa0Drawing..."]}):(0,i.jsx)(i.Fragment,{children:"Draw!!!"})})}),(0,i.jsx)("table",{id:"Settings",children:(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Canvas Size"}),(0,i.jsx)("td",{children:(0,i.jsx)(s.Z.Range,{min:100,max:500,onInput(e){h(parseInt(e.target.value))}})}),(0,i.jsx)("td",{children:t})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Color"}),(0,i.jsx)("td",{children:(0,i.jsx)(s.Z.Range,{min:0,max:360,onInput(e){u(parseInt(e.target.value))}})}),(0,i.jsx)("td",{style:{backgroundColor:"hsl(".concat(x,", 100%, 50%)")}})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"a.x"}),(0,i.jsx)("td",{children:(0,i.jsx)(s.Z.Range,{min:0,max:100,onInput(e){j(parseInt(e.target.value))}})}),(0,i.jsx)("td",{children:p})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"a.y"}),(0,i.jsx)("td",{children:(0,i.jsx)(s.Z.Range,{min:0,max:100,onInput(e){f(parseInt(e.target.value))}})}),(0,i.jsx)("td",{children:m})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"b.x"}),(0,i.jsx)("td",{children:(0,i.jsx)(s.Z.Range,{min:0,max:100,onInput(e){g(parseInt(e.target.value))}})}),(0,i.jsx)("td",{children:v})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"b.y"}),(0,i.jsx)("td",{children:(0,i.jsx)(s.Z.Range,{min:0,max:100,onInput(e){w(parseInt(e.target.value))}})}),(0,i.jsx)("td",{children:y})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Max Iterations"}),(0,i.jsx)("td",{children:(0,i.jsx)(s.Z.Range,{min:3,max:10,onInput(e){I(parseInt(e.target.value))}})}),(0,i.jsx)("td",{children:b})]})]})})]})};n.default=h},2100:function(e,n){"use strict";n.Z=[{name:"マンデルブロ集合",description:"マンデルブロ集合を描画します。",id:"mandelbrot"},{name:"ジュリア集合",description:"ジュリア集合を描画します。",id:"julia"},{name:"ブッダブロ集合",description:"ブッダブロ集合を描画します。",id:"buddhabrot"},{name:"トライコーン集合",description:"トライコーン集合を描画します。",id:"tricorn"},{name:"バーニングシップ集合",description:"バーニングシップ集合を描画します。",id:"burning-ship"},{name:"バーンズリーのフェルン",description:"バーンズリーのフェルンを描画します。",id:"barnsley-fern"},{name:"ピタゴラスの木",description:"ピタゴラスの木を描画します。",id:"pythagoras-tree"},{name:"再帰ツリー",description:"再帰ツリーを描画します。",id:"recursive-tree"},{name:"シェルピンスキーの三角形",description:"シェルピンスキーの三角形を描画します。",id:"sierpinski-triangle"},{name:"シェルピンスキーのカーペット",description:"シェルピンスキーのカーペットを描画します。",id:"sierpinski-carpet"},{name:"バラ曲線",description:"バラ曲線を描画します。",id:"rose-curve"},{name:"コッホ曲線",description:"コッホ曲線を描画します。",id:"koch-curve"},{name:"コッホ雪片",description:"コッホ雪片を描画します。",id:"koch-snowflake"},{name:"ドラゴン曲線",description:"ドラゴン曲線を描画します。",id:"dragon-curve"},{name:"ヒルベルト曲線",description:"ヒルベルト曲線を描画します。",id:"hilbert-curve"},{name:"ペアノ曲線",description:"ペアノ曲線を描画します。",id:"peano-curve"},{name:"ペアノゴスパー曲線",description:"ペアノゴスパー曲線を描画します。",id:"peano-gosper-curve"},{name:"ペアノゴスパー島曲線",description:"ペアノゴスパー島曲線を描画します。",id:"peano-gosper-island-curve"},{name:"ペアノゴスパー空間埋め曲線",description:"ペアノゴスパー空間埋め曲線を描画します。",id:"peano-gosper-space-filling-curve"},{name:"ペアノゴスパー矢印先曲線",description:"ペアノゴスパー矢印先曲線を描画します。",id:"peano-gosper-arrowhead-curve"},{name:"ペアノゴスパードラゴン曲線",description:"ペアノゴスパードラゴン曲線を描画します。",id:"peano-gosper-dragon-curve"}]},6968:function(e,n,t){"use strict";var i=t(4184),r=t.n(i),a=t(7294),s=t(6792),c=t(5893);let d=a.forwardRef(({bsPrefix:e,variant:n,animation:t="border",size:i,as:a="div",className:d,...o},l)=>{e=(0,s.vE)(e,"spinner");let h=`${e}-${t}`;return(0,c.jsx)(a,{ref:l,...o,className:r()(d,h,i&&`${h}-${i}`,n&&`text-${n}`)})});d.displayName="Spinner",n.Z=d}},function(e){e.O(0,[996,451,774,888,179],function(){return e(e.s=3003)}),_N_E=e.O()}]);