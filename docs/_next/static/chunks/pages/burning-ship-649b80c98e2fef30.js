(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[67],{5954:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/burning-ship",function(){return n(7632)}])},1943:function(e,t,n){"use strict";var r=n(5893);n(7294);var i=n(1664),s=n.n(i),a=n(9008),c=n.n(a),d=n(8195),l=n(2100);t.Z=function(e){let{children:t,title:n="Fractal Drawer",favicon:i="favicon.ico"}=e;return(0,r.jsxs)("div",{id:"Root",children:[(0,r.jsxs)(c(),{children:[(0,r.jsx)("title",{children:n}),(0,r.jsx)("meta",{charSet:"utf-8"}),(0,r.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),(0,r.jsx)("link",{rel:"shortcut icon",href:"".concat(d.Z.RootPath,"/").concat(i),type:"image/x-icon"})]}),(0,r.jsx)("header",{children:(0,r.jsxs)("nav",{children:[(0,r.jsx)(s(),{className:"feature-link",href:"/",children:"Home"}),l.Z.map((e,t)=>(0,r.jsx)(s(),{className:"feature-link",href:e?"/".concat(e.id):"/",children:e.name},e.name))]})}),t,(0,r.jsx)("footer",{})]})}},8195:function(e,t,n){"use strict";let r=n(2702),i={ProjectName:"fractal-drawer.ts",RootPath:r.assetPrefix};t.Z=i},2702:function(e){"use strict";let t="/fractal-drawer.ts";e.exports={basePath:t,assetPrefix:t,publicRuntimeConfig:{basePath:t}}},7632:function(e,t,n){"use strict";n.r(t);var r=n(5893),i=n(7294),s=n(3680),a=n(5447),c=n(6968),d=n(1943),l=n(8195);let o="Burning Ship",u=()=>{let e=(0,i.useRef)(null),[t,n]=(0,i.useState)(300),[u,h]=(0,i.useState)(80),[p,x]=(0,i.useState)(20),[j,m]=(0,i.useState)(10),[f,v]=(0,i.useState)(-1.8),[g,b]=(0,i.useState)(-1.7),[w,Z]=(0,i.useState)(-.1),[S,k]=(0,i.useState)(.02),[C,y]=(0,i.useState)(!1);function I(){let n=!(arguments.length>0)||void 0===arguments[0]||arguments[0];if(!1===n||C)return;y(!0);let r=e.current;if(r){let i=r.getContext("2d");if(i){let s=(g-f)/t,a=(S-w)/t;for(let c=0;c<t;c++)for(let d=0;d<t;d++){let l=f+c*s,o=w+d*a,h=0,x=0,m=0;for(;h*h+x*x<j&&m<p;){let v=Math.abs(h*h-x*x+l),b=Math.abs(2*h*x+o);h=v,x=b,m++}m===p?i.fillStyle="black":i.fillStyle="hsla(".concat((360*m/p+u)%360,", 100%, 50%, 1)"),i.fillRect(c,d,1,1)}}}y(!1)}return(0,i.useEffect)(()=>{(0,e.current).getContext("2d"),I(!1)},[t,u,p,j,f,g,w,S]),(0,i.useEffect)(()=>{(0,e.current).getContext("2d")},[C]),(0,r.jsxs)(d.Z,{title:"".concat(o," (").concat(l.Z.ProjectName,")"),favicon:"feature-image/burning-ship.png",children:[(0,r.jsxs)("div",{id:"CanvasArea",children:[(0,r.jsx)("h1",{children:o}),(0,r.jsx)("canvas",{ref:e,width:t,height:t})]}),(0,r.jsx)("div",{id:"button-div",children:(0,r.jsx)(s.Z,{variant:"outline-primary",onClick(){I(!0)},children:C?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.Z,{animation:"grow",variant:"info",size:"sm"}),"\xa0Drawing..."]}):(0,r.jsx)(r.Fragment,{children:"Draw!!!"})})}),(0,r.jsx)("table",{id:"Settings",children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Canvas Size"}),(0,r.jsx)("td",{children:(0,r.jsx)(a.Z.Range,{min:100,max:500,onInput(e){n(parseInt(e.target.value))}})}),(0,r.jsx)("td",{children:t})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Color (start)"}),(0,r.jsx)("td",{children:(0,r.jsx)(a.Z.Range,{min:0,max:360,value:u,onInput(e){h(parseInt(e.target.value))}})}),(0,r.jsx)("td",{style:{backgroundColor:"hsl(".concat(u,", 100%, 50%)")}})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Max Iterations"}),(0,r.jsx)("td",{children:(0,r.jsx)(a.Z.Range,{min:3,max:100,value:p,onInput(e){x(parseInt(e.target.value))}})}),(0,r.jsx)("td",{children:p})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Threshold"}),(0,r.jsx)("td",{children:(0,r.jsx)(a.Z.Range,{min:3,max:100,value:j,onInput(e){m(parseInt(e.target.value))}})}),(0,r.jsx)("td",{children:j})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"X Min"}),(0,r.jsx)("td",{children:(0,r.jsx)(a.Z.Control,{type:"number",step:.1,value:f,onInput(e){v(parseFloat(e.target.value))}})}),(0,r.jsx)("td",{children:f})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"X Max"}),(0,r.jsx)("td",{children:(0,r.jsx)(a.Z.Control,{type:"number",step:.1,value:g,onInput(e){b(parseFloat(e.target.value))}})}),(0,r.jsx)("td",{children:g})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Y Min"}),(0,r.jsx)("td",{children:(0,r.jsx)(a.Z.Control,{type:"number",step:.1,value:w,onInput(e){Z(parseFloat(e.target.value))}})}),(0,r.jsx)("td",{children:w})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Y Max"}),(0,r.jsx)("td",{children:(0,r.jsx)(a.Z.Control,{type:"number",step:.1,value:S,onInput(e){k(parseFloat(e.target.value))}})}),(0,r.jsx)("td",{children:S})]})]})})]})};t.default=u},2100:function(e,t){"use strict";t.Z=[{name:"マンデルブロ集合",description:"マンデルブロ集合を描画します。",id:"mandelbrot"},{name:"ジュリア集合",description:"ジュリア集合を描画します。",id:"julia"},{name:"ブッダブロ集合",description:"ブッダブロ集合を描画します。",id:"buddhabrot"},{name:"トライコーン集合",description:"トライコーン集合を描画します。",id:"tricorn"},{name:"バーニングシップ集合",description:"バーニングシップ集合を描画します。",id:"burning-ship"},{name:"バーンズリーのフェルン",description:"バーンズリーのフェルンを描画します。",id:"barnsley-fern"},{name:"ピタゴラスの木",description:"ピタゴラスの木を描画します。",id:"pythagoras-tree"},{name:"再帰ツリー",description:"再帰ツリーを描画します。",id:"recursive-tree"},{name:"シェルピンスキーの三角形",description:"シェルピンスキーの三角形を描画します。",id:"sierpinski-triangle"},{name:"シェルピンスキーのカーペット",description:"シェルピンスキーのカーペットを描画します。",id:"sierpinski-carpet"},{name:"バラ曲線",description:"バラ曲線を描画します。",id:"rose-curve"},{name:"コッホ曲線",description:"コッホ曲線を描画します。",id:"koch-curve"},{name:"コッホ雪片",description:"コッホ雪片を描画します。",id:"koch-snowflake"},{name:"ドラゴン曲線",description:"ドラゴン曲線を描画します。",id:"dragon-curve"},{name:"ヒルベルト曲線",description:"ヒルベルト曲線を描画します。",id:"hilbert-curve"},{name:"ペアノ曲線",description:"ペアノ曲線を描画します。",id:"peano-curve"},{name:"ペアノゴスパー曲線",description:"ペアノゴスパー曲線を描画します。",id:"peano-gosper-curve"},{name:"ペアノゴスパー島曲線",description:"ペアノゴスパー島曲線を描画します。",id:"peano-gosper-island-curve"},{name:"ペアノゴスパー空間埋め曲線",description:"ペアノゴスパー空間埋め曲線を描画します。",id:"peano-gosper-space-filling-curve"},{name:"ペアノゴスパー矢印先曲線",description:"ペアノゴスパー矢印先曲線を描画します。",id:"peano-gosper-arrowhead-curve"},{name:"ペアノゴスパードラゴン曲線",description:"ペアノゴスパードラゴン曲線を描画します。",id:"peano-gosper-dragon-curve"}]},6968:function(e,t,n){"use strict";var r=n(4184),i=n.n(r),s=n(7294),a=n(6792),c=n(5893);let d=s.forwardRef(({bsPrefix:e,variant:t,animation:n="border",size:r,as:s="div",className:d,...l},o)=>{e=(0,a.vE)(e,"spinner");let u=`${e}-${n}`;return(0,c.jsx)(s,{ref:o,...l,className:i()(d,u,r&&`${u}-${r}`,t&&`text-${t}`)})});d.displayName="Spinner",t.Z=d}},function(e){e.O(0,[996,451,774,888,179],function(){return e(e.s=5954)}),_N_E=e.O()}]);