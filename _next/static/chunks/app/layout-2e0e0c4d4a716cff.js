(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{3815:function(e,t,n){Promise.resolve().then(n.bind(n,1258))},355:function(e,t,n){"use strict";n.d(t,{CG:function(){return i},IC:function(){return a},TL:function(){return s}});var r=n(2265),l=n(386);let s=()=>(0,l.I0)(),i=l.v9,a=(e,t,n,l,s)=>{let[i,a]=(0,r.useState)(e),c=e=>{i&&t.current&&!t.current.contains(e.target)&&(a(!1),n(),l(s(!1)))};return(0,r.useEffect)(()=>(document.addEventListener("click",c,!0),()=>{document.removeEventListener("click",c,!0)})),{ref:t,isComponentVisible:i,setIsComponentVisible:a}}},1258:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return B}});var r=n(7437),l=n(5227),s=n.n(l),i=n(7160),a=n.n(i);n(7742);var c=n(386),o=n(1455);let d=(0,o.oM)({name:"about",initialState:{emailInput:"",qoute:""},reducers:{clear:e=>{e.emailInput=""},setEmailInputValue:(e,t)=>{e.emailInput=t.payload},setQuote:(e,t)=>{e.qoute=t.payload}}}),{clear:u,setEmailInputValue:x,setQuote:f}=d.actions;var m=d.reducer,h=n(1479);let p=(0,o.xC)({reducer:{about:m,sidebar:h.ZP}});var b=n(5008),v=n(2265),g=n(1906),j=n(2083),w=n(4863),y=n(9590);function k(){let e=(0,b._)(["radial-gradient(125% 125% at 50% 0%, #020617 50% ",")"]);return k=function(){return e},e}let N=["#FFEDCC","#FFDAB9","#FFCC99","#FFB380"];function C(){let e=(0,g.c)(N[0]);(0,v.useEffect)(()=>{(0,j.j)(e,N,{ease:"easeInOut",duration:10,repeat:1/0,repeatType:"mirror"})},[e]);let t=(0,w.Y)(k(),e);return(0,r.jsx)("div",{children:(0,r.jsx)("footer",{className:"bg-black",children:(0,r.jsx)(y.E.section,{style:{backgroundImage:t},className:"relative grid place-content-center overflow-hidden bg-black px-4 py-5 text-gray-200",children:(0,r.jsx)("div",{className:"relative z-10 flex flex-col items-center",children:(0,r.jsx)("div",{className:"grid grid-cols-1 gap-8",children:(0,r.jsxs)("p",{className:"max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed",children:["Ing. Marian Ferenc - ",new Date().getFullYear()]})})})})})})}var E=n(7648),L=n(9376),M=n(355);let F=[{id:"0",title:"By the numbers",url:"#by-the-numbers"},{id:"1",title:"Education",url:"#education"},{id:"2",title:"Experience",url:"#experience"},{id:"3",title:"Certifications",url:"#certifications",onlyMobile:!1},{id:"4",title:"Blog",url:"/blog",onlyMobile:!0}];function I(){let e=(0,M.TL)(),t=(0,L.usePathname)(),n=()=>{e((0,h.Kt)(!0))};return(0,r.jsx)("div",{children:(0,r.jsxs)("header",{className:"flex w-auto bg-black bg-opacity-50 fixed inset-x-0 z-30 shadow",children:[(0,r.jsxs)("div",{className:"flex",children:[(0,r.jsx)("button",{type:"submit",className:"mobile-menu-button p-4 focus:outline-none focus:bg-blue-800",onClick:()=>n(),children:(0,r.jsx)("svg",{className:"h-5 w-5 z-30",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"white",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})})}),(0,r.jsx)("div",{className:"flex flex-wrap place-content-center h-16",children:(0,r.jsx)(E.default,{href:"/",children:(0,r.jsx)("div",{className:"shadow text-white font-medium text-lg",children:"Ing. Marian Ferenc"})})})]}),"/"===t&&(0,r.jsx)("div",{className:"flex-auto text-gray-200 place-content-center items-center text-center h-16 hidden md:block pr-40",children:F.map(e=>(0,r.jsx)("a",{href:e.url,className:"relative font-code text-xs uppercase text-n-1 transition-colors hover:text-color-1 items-center text-center ".concat(e.onlyMobile?"lg:hidden":""," px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ").concat(e.url===t?"z-2 lg:text-n-1":"lg:text-n-1/50"," lg:leading-5 lg:hover:text-n-2 xl:px-12"),children:e.title},e.id))})]})})}function z(){let[e,t]=(0,v.useState)(!0),n=(0,v.useRef)(null),l=(0,v.useRef)(null),s=(0,M.CG)(h.Hm),i=(0,M.TL)(),a=()=>{setTimeout(()=>{var e,t;null===(e=n.current)||void 0===e||e.classList.remove("z-40"),null===(t=n.current)||void 0===t||t.classList.add("-z-40")},200),o(!1)},{isComponentVisible:c,setIsComponentVisible:o}=(0,M.IC)(!1,n,a,i,h.Kt);(0,v.useEffect)(()=>{e&&t(!1),e||(!0!==s||c?!0===s&&d():d())},[s,c]);let d=()=>{var e,t;null===(e=n.current)||void 0===e||e.classList.add("z-40"),null===(t=n.current)||void 0===t||t.classList.remove("-z-40"),o(!0)};return(0,r.jsx)("div",{ref:n,className:"absolute min-h-screen flex -z-40",children:(0,r.jsxs)("div",{ref:l,className:"sidebar bg-black text-white w-64 space-y-6 py-7 fixed px-2 inset-y-0 -translate-x-full left-0 transform transition duration-200 ease-in-out ".concat(s?"translate-x-0":"-translate-x-full"),children:[(0,r.jsxs)("div",{className:"text-white flex items-center space-x-2 px-4 justify-between",children:[(0,r.jsx)("span",{className:"text-sm text-white font-bold w-fit",children:"Ing. Mari\xe1n Ferenc"}),(0,r.jsx)("button",{type:"button",onClick:()=>{i((0,h.Kt)(!s))},children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",onClick:()=>{a()},children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),(0,r.jsxs)("nav",{children:[(0,r.jsx)(E.default,{href:"/",className:"block py-2.5 px-4 rounded transition duration-200 hover:bg-yellow-500 text-white font-bold",onClick:()=>{i((0,h.Kt)(!s)),a()},children:"Home"}),(0,r.jsx)(E.default,{href:"/blog",className:"block py-2.5 px-4 rounded transition duration-200 hover:bg-yellow-500 text-white font-bold",onClick:()=>{i((0,h.Kt)(!s)),a()},children:"Blog"}),(0,r.jsx)(E.default,{href:"/contact",className:"block py-2.5 px-4 rounded transition duration-200 hover:bg-yellow-500 text-white font-bold",onClick:()=>{i((0,h.Kt)(!s)),a()},children:"Contact"})]})]})})}function O(){let[e,t]=(0,v.useState)({x:0,y:0}),n=(0,v.useRef)(null);return(0,v.useEffect)(()=>{let e=e=>{t({x:e.clientX,y:e.clientY})};return window.addEventListener("mousemove",e),()=>{window.removeEventListener("mousemove",e)}},[]),(0,v.useEffect)(()=>{n.current&&(n.current.style.setProperty("--mouse-x","".concat(e.x,"px")),n.current.style.setProperty("--mouse-y","".concat(e.y,"px")))},[e]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{ref:n,className:"fixed inset-0 pointer-events-none z-[9999] mix-blend-difference",style:{maskImage:"radial-gradient(circle 5rem at var(--mouse-x) var(--mouse-y), white 100%, transparent 100%)",WebkitMaskImage:"radial-gradient(circle 2rem at var(--mouse-x) var(--mouse-y), white 100%, transparent 100%)"},children:(0,r.jsx)("div",{className:"w-full h-full bg-white"})}),(0,r.jsx)("div",{className:"fixed w-4 h-4 border-2 border-black rounded-full pointer-events-none z-[10000] mix-blend-hue",style:{left:"".concat(e.x,"px"),top:"".concat(e.y,"px"),transform:"translate(-50%, -50%)"}})]})}function B(e){let{children:t}=e;return(0,r.jsx)("html",{lang:"en",children:(0,r.jsx)(c.zt,{store:p,children:(0,r.jsxs)("body",{className:"".concat(s().variable," ").concat(a().variable," antialiased min-h-screen flex flex-col"),children:[(0,r.jsxs)("span",{children:[(0,r.jsx)(z,{}),(0,r.jsx)(I,{}),(0,r.jsx)(O,{})]}),(0,r.jsx)("div",{className:"flex-grow",children:t}),(0,r.jsx)(C,{})]})})})}},1479:function(e,t,n){"use strict";n.d(t,{Hm:function(){return i},Kt:function(){return s}});let r=(0,n(1455).oM)({name:"sidebar",initialState:{sidebarOpened:!1},reducers:{clear:e=>{e.sidebarOpened=!1},setSidebarOpenedValue:(e,t)=>{e.sidebarOpened=t.payload}}}),{clear:l,setSidebarOpenedValue:s}=r.actions,i=e=>e.sidebar.sidebarOpened;t.ZP=r.reducer},7742:function(){}},function(e){e.O(0,[579,972,590,949,925,971,117,744],function(){return e(e.s=3815)}),_N_E=e.O()}]);