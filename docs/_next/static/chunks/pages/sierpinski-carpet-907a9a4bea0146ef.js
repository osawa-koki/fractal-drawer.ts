(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[297],{6654:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sierpinski-carpet",function(){return n(3839)}])},1943:function(e,t,n){"use strict";var i=n(5893);n(7294);var r=n(1664),s=n.n(r),a=n(9008),c=n.n(a),d=n(8195),o=n(2100);t.Z=function(e){let{children:t,title:n="Fractal Drawer",favicon:r="favicon.ico"}=e;return(0,i.jsxs)("div",{id:"Root",children:[(0,i.jsxs)(c(),{children:[(0,i.jsx)("title",{children:n}),(0,i.jsx)("meta",{charSet:"utf-8"}),(0,i.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),(0,i.jsx)("link",{rel:"shortcut icon",href:"".concat(d.Z.RootPath,"/").concat(r),type:"image/x-icon"})]}),(0,i.jsx)("header",{children:(0,i.jsxs)("nav",{children:[(0,i.jsx)(s(),{className:"feature-link",href:"/",children:"Home"}),o.Z.map((e,t)=>(0,i.jsx)(s(),{className:"feature-link",href:e?"/".concat(e.id):"/",children:e.name},e.name))]})}),t,(0,i.jsx)("footer",{})]})}},8195:function(e,t,n){"use strict";let i=n(2702),r={ProjectName:"fractal-drawer.ts",RootPath:i.assetPrefix};t.Z=r},2702:function(e){"use strict";let t="/fractal-drawer.ts";e.exports={basePath:t,assetPrefix:t,publicRuntimeConfig:{basePath:t}}},3839:function(e,t,n){"use strict";n.r(t);var i=n(5893),r=n(7294),s=n(3680),a=n(5447),c=n(6968),d=n(1943),o=n(8195);let l="Sierpinski Carpet",u=()=>{let e,t=(0,r.useRef)(null),[n,u]=(0,r.useState)(300),[h,p]=(0,r.useState)(0),[x,f]=(0,r.useState)(70),[m,j]=(0,r.useState)(5),[v,g]=(0,r.useState)(300),[w,k]=(0,r.useState)(!1);function b(){let t=!(arguments.length>0)||void 0===arguments[0]||arguments[0];if(w)return;t&&k(!0);let i=e=>{let t=[];return e.forEach(n=>{e.forEach(e=>{t.push({x:n,y:e})})}),t};e.clearRect(0,0,n,n);let r=n*x/100,s=(n-r)/2;e.fillStyle="hsl(".concat(h,", 100%, 50%)"),e.fillRect(s,s,r,r),e.fillStyle="white";let a=r/3,c=s+a;e.fillRect(c,c,a,a),!1!==t&&function t(n,r,s,a){if(m<a){k(!1);return}a/2==0?e.fillStyle="hsl(".concat(h,", 100%, 50%)"):e.fillStyle="white",i([1/9*s,4/9*s,7/9*s]).forEach(i=>{e.fillRect(i.x+n,i.y+r,s/9,s/9),setTimeout(()=>{t(i.x+n-s/9,i.y+r-s/9,s/3,a+1)},v)})}(s,s,r,1)}return(0,r.useEffect)(()=>{e=(0,t.current).getContext("2d"),b(!1)},[n,h,x,m,v]),(0,r.useEffect)(()=>{e=(0,t.current).getContext("2d")},[w]),(0,i.jsxs)(d.Z,{title:"".concat(l," (").concat(o.Z.ProjectName,")"),favicon:"feature-image/sierpinski-carpet.png",children:[(0,i.jsxs)("div",{id:"CanvasArea",children:[(0,i.jsx)("h1",{children:l}),(0,i.jsx)("canvas",{ref:t,width:n,height:n})]}),(0,i.jsx)("div",{id:"button-div",children:(0,i.jsx)(s.Z,{variant:"outline-primary",onClick(){b(!0)},children:w?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.Z,{animation:"grow",variant:"info",size:"sm"}),"\xa0Drawing..."]}):(0,i.jsx)(i.Fragment,{children:"Draw!!!"})})}),(0,i.jsx)("table",{id:"Settings",children:(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Canvas Size"}),(0,i.jsx)("td",{children:(0,i.jsx)(a.Z.Range,{min:100,max:500,onInput(e){u(parseInt(e.target.value))}})}),(0,i.jsx)("td",{children:n})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Color"}),(0,i.jsx)("td",{children:(0,i.jsx)(a.Z.Range,{min:0,max:360,onInput(e){p(parseInt(e.target.value))}})}),(0,i.jsx)("td",{style:{backgroundColor:"hsl(".concat(h,", 100%, 50%)")}})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Size"}),(0,i.jsx)("td",{children:(0,i.jsx)(a.Z.Range,{min:50,max:100,onInput(e){f(parseInt(e.target.value))}})}),(0,i.jsxs)("td",{children:[x,"%"]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Max Iterations"}),(0,i.jsx)("td",{children:(0,i.jsx)(a.Z.Range,{min:3,max:15,onInput(e){j(parseInt(e.target.value))}})}),(0,i.jsx)("td",{children:m})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Timespan"}),(0,i.jsx)("td",{children:(0,i.jsx)(a.Z.Range,{min:100,max:1e3,onInput(e){g(parseInt(e.target.value))}})}),(0,i.jsxs)("td",{children:[v,"ms"]})]})]})})]})};t.default=u},2100:function(e,t){"use strict";t.Z=[{name:"マンデルブロ集合",description:"マンデルブロ集合を描画します。",id:"mandelbrot"},{name:"ジュリア集合",description:"ジュリア集合を描画します。",id:"julia"},{name:"ブッダブロ集合",description:"ブッダブロ集合を描画します。",id:"buddhabrot"},{name:"トライコーン集合",description:"トライコーン集合を描画します。",id:"tricorn"},{name:"バーニングシップ集合",description:"バーニングシップ集合を描画します。",id:"burning-ship"},{name:"バーンズリーのフェルン",description:"バーンズリーのフェルンを描画します。",id:"barnsley-fern"},{name:"ピタゴラスの木",description:"ピタゴラスの木を描画します。",id:"pythagoras-tree"},{name:"再帰ツリー",description:"再帰ツリーを描画します。",id:"recursive-tree"},{name:"シェルピンスキーの三角形",description:"シェルピンスキーの三角形を描画します。",id:"sierpinski-triangle"},{name:"シェルピンスキーのカーペット",description:"シェルピンスキーのカーペットを描画します。",id:"sierpinski-carpet"},{name:"バラ曲線",description:"バラ曲線を描画します。",id:"rose-curve"},{name:"コッホ曲線",description:"コッホ曲線を描画します。",id:"koch-curve"},{name:"コッホ雪片",description:"コッホ雪片を描画します。",id:"koch-snowflake"},{name:"ドラゴン曲線",description:"ドラゴン曲線を描画します。",id:"dragon-curve"},{name:"ヒルベルト曲線",description:"ヒルベルト曲線を描画します。",id:"hilbert-curve"},{name:"ペアノ曲線",description:"ペアノ曲線を描画します。",id:"peano-curve"},{name:"ペアノゴスパー曲線",description:"ペアノゴスパー曲線を描画します。",id:"peano-gosper-curve"},{name:"ペアノゴスパー島曲線",description:"ペアノゴスパー島曲線を描画します。",id:"peano-gosper-island-curve"},{name:"ペアノゴスパー空間埋め曲線",description:"ペアノゴスパー空間埋め曲線を描画します。",id:"peano-gosper-space-filling-curve"},{name:"ペアノゴスパー矢印先曲線",description:"ペアノゴスパー矢印先曲線を描画します。",id:"peano-gosper-arrowhead-curve"},{name:"ペアノゴスパードラゴン曲線",description:"ペアノゴスパードラゴン曲線を描画します。",id:"peano-gosper-dragon-curve"}]},6968:function(e,t,n){"use strict";var i=n(4184),r=n.n(i),s=n(7294),a=n(6792),c=n(5893);let d=s.forwardRef(({bsPrefix:e,variant:t,animation:n="border",size:i,as:s="div",className:d,...o},l)=>{e=(0,a.vE)(e,"spinner");let u=`${e}-${n}`;return(0,c.jsx)(s,{ref:l,...o,className:r()(d,u,i&&`${u}-${i}`,t&&`text-${t}`)})});d.displayName="Spinner",t.Z=d}},function(e){e.O(0,[996,451,774,888,179],function(){return e(e.s=6654)}),_N_E=e.O()}]);