(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[226],{3394:function(e,t,n){"use strict";n.d(t,{iP:function(){return d}});var r=n(2265),i=e=>{let t=r.useRef(e);return r.useEffect(()=>{t.current=e}),t};let o=(e,t=100,n=!1)=>{let o=i(e),u=r.useRef(),a=[t,n,o];function c(){u.current&&clearTimeout(u.current),u.current=void 0}function l(){u.current=void 0}return r.useEffect(()=>c,a),r.useCallback(function(){let e=arguments,{current:r}=u;if(void 0===r&&n)return u.current=setTimeout(l,t),o.current.apply(null,e);r&&clearTimeout(r),u.current=setTimeout(()=>{u.current=void 0,o.current.apply(null,e)},t)},a)},u=(e,t,n)=>{let i=r.useState(e);return[i[0],o(i[1],t,n)]};var a=function(e,t,n,i){let o=r.useRef(n),u=r.useRef(i);r.useEffect(()=>{o.current=n,u.current=i}),r.useEffect(()=>{let n=e&&"current"in e?e.current:e;if(!n)return;let r=0;function i(...e){r||o.current.apply(this,e)}n.addEventListener(t,i);let a=u.current;return()=>{r=1,n.removeEventListener(t,i),a&&a()}},[e,t])};let c={},l="undefined"==typeof window?null:window,s=l&&void 0!==l.visualViewport?l.visualViewport:null,f=()=>[document.documentElement.clientWidth,document.documentElement.clientHeight],d=function(e){void 0===e&&(e=c);let{wait:t,leading:n,initialWidth:r=0,initialHeight:i=0}=e,[o,d]=u("undefined"==typeof document?[r,i]:f,t,n),p=()=>d(f);return a(l,"resize",p),a(s,"resize",p),a(l,"orientationchange",p),o}},3145:function(e,t,n){"use strict";n.d(t,{default:function(){return i.a}});var r=n(8461),i=n.n(r)},8461:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return c},getImageProps:function(){return a}});let r=n(7043),i=n(5346),o=n(5878),u=r._(n(5084));function a(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:u.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let c=o.Image},4012:function(e,t,n){e.exports=n(1264)},9727:function(e){"use strict";var t=!!("undefined"!=typeof window&&window.document&&window.document.createElement),n={canUseDOM:t,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:t&&!!(window.addEventListener||window.attachEvent),canUseViewport:t&&!!window.screen,isInWorker:!t};e.exports=n},4699:function(e){var t,n,r,i,o,u,a,c,l,s,f,d,p,h,g,m=!1;function y(){if(!m){m=!0;var e=navigator.userAgent,y=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(e),v=/(Mac OS X)|(Windows)|(Linux)/.exec(e);if(d=/\b(iPhone|iP[ao]d)/.exec(e),p=/\b(iP[ao]d)/.exec(e),s=/Android/i.exec(e),h=/FBAN\/\w+;/i.exec(e),g=/Mobile/i.exec(e),f=!!/Win64/.exec(e),y){(t=y[1]?parseFloat(y[1]):y[5]?parseFloat(y[5]):NaN)&&document&&document.documentMode&&(t=document.documentMode);var b=/(?:Trident\/(\d+.\d+))/.exec(e);u=b?parseFloat(b[1])+4:t,n=y[2]?parseFloat(y[2]):NaN,r=y[3]?parseFloat(y[3]):NaN,o=(i=y[4]?parseFloat(y[4]):NaN)&&(y=/(?:Chrome\/(\d+\.\d+))/.exec(e))&&y[1]?parseFloat(y[1]):NaN}else t=n=r=o=i=NaN;if(v){if(v[1]){var w=/(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e);a=!w||parseFloat(w[1].replace("_","."))}else a=!1;c=!!v[2],l=!!v[3]}else a=c=l=!1}}var v={ie:function(){return y()||t},ieCompatibilityMode:function(){return y()||u>t},ie64:function(){return v.ie()&&f},firefox:function(){return y()||n},opera:function(){return y()||r},webkit:function(){return y()||i},safari:function(){return v.webkit()},chrome:function(){return y()||o},windows:function(){return y()||c},osx:function(){return y()||a},linux:function(){return y()||l},iphone:function(){return y()||d},mobile:function(){return y()||d||p||s||g},nativeApp:function(){return y()||h},android:function(){return y()||s},ipad:function(){return y()||p}};e.exports=v},1198:function(e,t,n){"use strict";var r,i=n(9727);i.canUseDOM&&(r=document.implementation&&document.implementation.hasFeature&&!0!==document.implementation.hasFeature("","")),e.exports=function(e,t){if(!i.canUseDOM||t&&!("addEventListener"in document))return!1;var n="on"+e,o=n in document;if(!o){var u=document.createElement("div");u.setAttribute(n,"return;"),o="function"==typeof u[n]}return!o&&r&&"wheel"===e&&(o=document.implementation.hasFeature("Events.wheel","3.0")),o}},1264:function(e,t,n){"use strict";var r=n(4699),i=n(1198);function o(e){var t=0,n=0,r=0,i=0;return"detail"in e&&(n=e.detail),"wheelDelta"in e&&(n=-e.wheelDelta/120),"wheelDeltaY"in e&&(n=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=n,n=0),r=10*t,i=10*n,"deltaY"in e&&(i=e.deltaY),"deltaX"in e&&(r=e.deltaX),(r||i)&&e.deltaMode&&(1==e.deltaMode?(r*=40,i*=40):(r*=800,i*=800)),r&&!t&&(t=r<1?-1:1),i&&!n&&(n=i<1?-1:1),{spinX:t,spinY:n,pixelX:r,pixelY:i}}o.getEventType=function(){return r.firefox()?"DOMMouseScroll":i("wheel")?"wheel":"mousewheel"},e.exports=o},7638:function(e,t,n){"use strict";n.d(t,{N:function(){return V}});var r=n(2265);let i="undefined"!=typeof performance?()=>performance.now():()=>Date.now(),o="undefined"!=typeof window?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(i()),16.666666666666668),u=!0,a=!1,c=!1,l={delta:0,timestamp:0},s=["read","update","preRender","render","postRender"],f=s.reduce((e,t)=>(e[t]=function(e){let t=[],n=[],r=0,i=!1,o=!1,u=new WeakSet,a={schedule:(e,o=!1,a=!1)=>{let c=a&&i,l=c?t:n;return o&&u.add(e),-1===l.indexOf(e)&&(l.push(e),c&&i&&(r=t.length)),e},cancel:e=>{let t=n.indexOf(e);-1!==t&&n.splice(t,1),u.delete(e)},process:c=>{if(i)o=!0;else{if(i=!0,[t,n]=[n,t],n.length=0,r=t.length)for(let n=0;n<r;n++){let r=t[n];r(c),u.has(r)&&(a.schedule(r),e())}i=!1,o&&(o=!1,a.process(c))}}};return a}(()=>a=!0),e),{}),d=s.reduce((e,t)=>{let n=f[t];return e[t]=(e,t=!1,r=!1)=>(a||m(),n.schedule(e,t,r)),e},{}),p=s.reduce((e,t)=>(e[t]=f[t].cancel,e),{});s.reduce((e,t)=>(e[t]=()=>f[t].process(l),e),{});let h=e=>f[e].process(l),g=e=>{a=!1,l.delta=u?16.666666666666668:Math.max(Math.min(e-l.timestamp,40),1),l.timestamp=e,c=!0,s.forEach(h),c=!1,a&&(u=!1,o(g))},m=()=>{a=!0,u=!0,c||o(g)};var y="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{},v=/^\s+|\s+$/g,b=/^[-+]0x[0-9a-f]+$/i,w=/^0b[01]+$/i,x=/^0o[0-7]+$/i,O=parseInt,S="object"==typeof y&&y&&y.Object===Object&&y,E="object"==typeof self&&self&&self.Object===Object&&self,R=S||E||Function("return this")(),M=Object.prototype.toString,P=Math.max,_=Math.min,W=function(){return R.Date.now()};function I(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function j(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==M.call(t))return NaN;if(I(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=I(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(v,"");var r=w.test(e);return r||x.test(e)?O(e.slice(2),r?2:8):b.test(e)?NaN:+e}var k=function(e,t,n){var r,i,o,u,a,c,l=0,s=!1,f=!1,d=!0;if("function"!=typeof e)throw TypeError("Expected a function");function p(t){var n=r,o=i;return r=i=void 0,l=t,u=e.apply(o,n)}function h(e){var n=e-c;return void 0===c||n>=t||n<0||f&&e-l>=o}function g(){var e,n=W();if(h(n))return m(n);a=setTimeout(g,(e=t-(n-c),f?_(e,o-(n-l)):e))}function m(e){return a=void 0,d&&r?p(e):(r=i=void 0,u)}function y(){var e,n=W(),o=h(n);if(r=arguments,i=this,c=n,o){if(void 0===a)return l=e=c,a=setTimeout(g,t),s?p(e):u;if(f)return a=setTimeout(g,t),p(c)}return void 0===a&&(a=setTimeout(g,t)),u}return t=j(t)||0,I(n)&&(s=!!n.leading,o=(f="maxWait"in n)?P(j(n.maxWait)||0,t):o,d="trailing"in n?!!n.trailing:d),y.cancel=function(){void 0!==a&&clearTimeout(a),l=0,r=c=i=a=void 0},y.flush=function(){return void 0===a?u:m(W())},y},L={exports:{}},C="undefined"!=typeof document?document.createElement("p").style:{},H=["O","ms","Moz","Webkit"],N=/([A-Z])/g,D={};function z(e){if(void 0!==C[e=e.replace(/-([a-z])/g,function(e,t){return t.toUpperCase()})])return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=H.length;n--;){var r=H[n]+t;if(void 0!==C[r])return r}return e}L.exports=function(e){return e in D?D[e]:D[e]=z(e)},L.exports.dash=function(e){return e=z(e),N.test(e)&&(e="-"+e.replace(N,"-$1"),N.lastIndex=0),e.toLowerCase()};let B={isReady:!1,scrollbarWidth:0,windowHeight:0,windowWidth:0},T=()=>{let[e,t]=(0,r.useState)(B),n=(0,r.useRef)(B),i=(0,r.useCallback)(()=>{let e={isReady:!0,scrollbarWidth:window.innerWidth-document.documentElement.clientWidth,windowHeight:window.innerHeight,windowWidth:window.innerWidth};t(e),n.current=e},[]);return(0,r.useEffect)(()=>{let e=k(i,100);return window.addEventListener("resize",e),i(),()=>{window.removeEventListener("resize",e)}},[i]),{windowSize:e,windowSizeRef:n}},A=(e,t,n)=>e+(t-e)*n,F=()=>"undefined"!=typeof window&&("ontouchstart"in window||"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0),U={xMaxOffset:1,xOffset:1,yMaxOffset:1,yOffset:1},V=(0,r.forwardRef)((e,t)=>{(0,r.useImperativeHandle)(t,()=>({updateValues:H}));let{children:n,strength:i=.14,scrollContainerRef:o=null,enableOnTouchDevice:u=!0,lerpEase:a=.06,isHorizontal:c=!1,isAbsolutelyPositioned:l=!1,zIndex:s=null,shouldPause:f=!0}=e,h=(0,r.useRef)(null),g=(0,r.useRef)(null),m=(0,r.useRef)(1),y=(0,r.useRef)(1),v=(0,r.useRef)(1),b=(0,r.useRef)(1),w=(0,r.useRef)(null),x=(0,r.useRef)(null),O=(0,r.useRef)(!0),S=(0,r.useRef)(U),E=(0,r.useRef)(1),R=(0,r.useRef)(1),{windowSizeRef:M}=T(),P=(0,r.useRef)(L.exports("transform")),_=()=>{h.current&&(h.current.style.willChange="transform",w.current=d.render(I,!0),x.current=d.update(j,!0))},W=()=>{h.current&&(h.current.style.willChange="auto",w.current&&p.render(w.current),x.current&&p.update(x.current))},I=()=>{if(!O.current||!h.current)return;let e=c?1:0;h.current.style[P.current]=`translate3d(${m.current*i*e}px, ${y.current*i*(1-e)}px, 0px)`},j=({delta:e})=>{if(!O.current)return;let t=Math.abs(v.current-m.current),n=Math.abs(b.current-y.current);if(t<.001&&n<.001)return;let r=e/16.666666666666668,i=Math.round(r);i>=1&&(r=i);let o=A(m.current,v.current,a*r);m.current=o;let u=A(y.current,b.current,a*r);y.current=u},C=()=>{document.hidden?W():_()},H=()=>{(()=>{if(!g||!g.current)return;D();let e=g.current.getBoundingClientRect();E.current=S.current.xOffset+e.x+.5*e.width,R.current=S.current.yOffset+e.y+.5*e.height})(),z()},N=k(H,150),D=()=>{var e;o&&o.current?S.current={xOffset:(e=o.current).scrollLeft,yOffset:e.scrollTop,xMaxOffset:e.scrollWidth-e.offsetWidth,yMaxOffset:e.scrollHeight-e.offsetHeight}:S.current={xOffset:window.pageXOffset,yOffset:window.pageYOffset,xMaxOffset:document.body.clientWidth-window.innerWidth,yMaxOffset:document.body.clientHeight-window.innerHeight}},z=()=>{D();let e=S.current.xOffset-E.current,t=S.current.yOffset-R.current;if(e+=.5*M.current.windowWidth,t+=.5*M.current.windowHeight,v.current=e,b.current=t,Math.abs(b.current)>1.5*M.current.windowHeight||Math.abs(v.current)>1.5*M.current.windowWidth){if(!f)return;O.current=!1}else O.current=!0};return(0,r.useEffect)(()=>{if(!u&&F())return;_();let e=window;return o&&o.current&&(e=o.current),e.addEventListener("scroll",z,{passive:!0}),window.addEventListener("visibilitychange",C),window.addEventListener("resize",N),H(),()=>{W(),e.removeEventListener("scroll",z),window.removeEventListener("visibilitychange",C),window.removeEventListener("resize",N)}},[]),r.createElement(r.Fragment,null,r.createElement("span",{ref:g,style:{width:"100%",height:"100%",display:"inline-block",userSelect:"none",pointerEvents:"none",position:l?"absolute":"relative",top:0,left:0,zIndex:s||"initial"}},r.createElement("span",{ref:h,style:{backfaceVisibility:"hidden",position:"relative",width:"100%",height:"100%",display:"inline-block",userSelect:"initial",pointerEvents:"initial"}},n)))})},1792:function(e,t,n){var r;"undefined"!=typeof self&&self,r=function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t||4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,(function(t){return e[t]}).bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(t,n){t.exports=e},function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}function o(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,i=c(e);return n=t?Reflect.construct(i,arguments,c(this).constructor):i.apply(this,arguments),n&&("object"===r(n)||"function"==typeof n)?n:function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(this)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Background=t.Parallax=void 0;var s=l(n(0)),f=function(e){o(n,e);var t=a(n);function n(){return i(this,n),t.apply(this,arguments)}return n}(s.default.Component);t.Parallax=f;var d=function(e){o(n,e);var t=a(n);function n(){return i(this,n),t.apply(this,arguments)}return n}(s.default.Component);t.Background=d},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.canUseDOM=t.getNodeHeight=t.isScrolledIntoView=t.getWindowHeight=void 0,t.getWindowHeight=function(e){if(!e)return 0;var t=window,n=document,r=n.documentElement,i=n.getElementsByTagName("body")[0];return t.innerHeight||r.clientHeight||i.clientHeight},t.isScrolledIntoView=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2?arguments[2]:void 0;if(!r)return!1;var i=e.getBoundingClientRect().top-n,o=e.getBoundingClientRect().bottom+n;return i<=t.getWindowHeight(r)&&o>=0},t.getNodeHeight=function(e,n){return e?n&&"clientHeight"in n?n.clientHeight:t.getWindowHeight(e):0},t.canUseDOM=function(){return!("undefined"==typeof window||!window.document||!window.document.createElement)}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Background=t.Parallax=void 0;var i=r(n(4));t.Parallax=i.default;var o=r(n(7));t.Background=o.default},function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var c=a(n(0)),l=n(1),s=n(5),f=n(2),d=a(n(6)),p={position:"absolute",left:"50%",WebkitTransform:"translate3d(-50%, 0, 0)",transform:"translate3d(-50%, 0, 0)",WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden",MozBackfaceVisibility:"hidden",MsBackfaceVisibility:"hidden"},h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}(h,e);var t,n,a,l=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}(),function(){var e,n=u(h);return e=t?Reflect.construct(n,arguments,u(this).constructor):n.apply(this,arguments),e&&("object"===r(e)||"function"==typeof e)?e:function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(this)});function h(e){var t;return function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,h),(t=l.call(this,e)).onWindowResize=function(){t.parentHeight=f.getNodeHeight(t.canUseDOM,t.parent),t.updatePosition()},t.onWindowLoad=function(){t.updatePosition()},t.onScroll=function(){if(t.canUseDOM){var e=Date.now();e-t.timestamp>=10&&f.isScrolledIntoView(t.node,100,t.canUseDOM)&&(window.requestAnimationFrame(t.updatePosition),t.timestamp=e)}},t.onContentMount=function(e){t.content=e},t.updatePosition=function(){if(t.content){var e=!1;t.contentHeight=t.content.getBoundingClientRect().height,t.contentWidth=t.node.getBoundingClientRect().width,t.img&&t.img.naturalWidth/t.img.naturalHeight<t.contentWidth/t.getImageHeight()&&(e=!0);var n=s.getRelativePosition(t.node,t.canUseDOM),r=!!t.img,i=t.bg&&t.state.splitChildren.bgChildren.length>0;r&&t.setImagePosition(n,e),i&&t.setBackgroundPosition(n),r||i||t.setState({percentage:n})}},t.state={bgImage:e.bgImage,bgImageSrcSet:e.bgImageSrcSet,bgImageSizes:e.bgImageSizes,imgStyle:p,bgStyle:Object.assign(Object.assign({},p),e.bgStyle),percentage:0,splitChildren:s.getSplitChildren(e)},t.canUseDOM=f.canUseDOM(),t.node=null,t.content=null,t.bgImageLoaded=!1,t.bgImageRef=void 0,t.parent=e.parent,t.parentHeight=f.getNodeHeight(t.canUseDOM,t.parent),t.timestamp=Date.now(),t.isDynamicBlur=s.getHasDynamicBlur(e.blur),t}return n=[{key:"componentDidMount",value:function(){var e=this.props.parent,t=this.state,n=t.bgImage,r=t.bgImageSrcSet,i=t.bgImageSizes;this.parent=e||document,this.addListeners(),n?this.loadImage(n,r,i):this.updatePosition()}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.parent,r=t.bgImage,i=t.bgImageSrcSet,o=t.bgImageSizes,u=this.state.bgImage;e.parent!==n&&(this.removeListeners(this.parent),this.parent=n,n&&this.addListeners()),this.parentHeight=f.getNodeHeight(this.canUseDOM,this.parent),u!==r&&this.loadImage(r,i,o)}},{key:"componentWillUnmount",value:function(){this.removeListeners(this.parent),this.releaseImage()}},{key:"setBackgroundPosition",value:function(e){var t=this.props,n=t.disabled,r=t.strength,i=Object.assign({},this.state.bgStyle);if(!n){var o="translate3d(-50%, ".concat((r<0?r:0)-r*e,"px, 0)");i.WebkitTransform=o,i.transform=o}this.setState({bgStyle:i,percentage:e})}},{key:"setImagePosition",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.props,r=n.disabled,i=n.strength,o=n.blur,u=t?"auto":"".concat(this.getImageHeight(),"px"),a=t?"".concat(this.contentWidth,"px"):"auto",c=Object.assign(Object.assign({},this.state.imgStyle),{height:u,width:a});if(!r){var l=(i<0?i:0)-i*e,f="translate3d(-50%, ".concat(l,"px, 0)"),d="none";o&&(d="blur(".concat(s.getBlurValue(this.isDynamicBlur,o,e),"px)")),c.WebkitTransform=f,c.transform=f,c.WebkitFilter=d,c.filter=d}this.setState({imgStyle:c,percentage:e})}},{key:"getImageHeight",value:function(){var e=this.props.strength;return Math.floor(this.contentHeight+(e<0?2.5:1)*Math.abs(e))}},{key:"loadImage",value:function(e,t,n){var r=this;this.releaseImage(),this.bgImageRef=new Image,this.bgImageRef.onload=function(i){r.setState({bgImage:e,bgImageSrcSet:t,bgImageSizes:n},function(){return r.updatePosition()}),r.props.onLoad&&r.props.onLoad(i)},this.bgImageRef.onerror=this.bgImageRef.onload,this.bgImageRef.src=e,this.bgImageRef.srcset=t||"",this.bgImageRef.sizes=n||""}},{key:"releaseImage",value:function(){this.bgImageRef&&(this.bgImageRef.onload=null,this.bgImageRef.onerror=null,delete this.bgImageRef)}},{key:"addListeners",value:function(){this.canUseDOM&&this.parent&&(this.parent.addEventListener("scroll",this.onScroll,!1),window.addEventListener("resize",this.onWindowResize,!1),window.addEventListener("load",this.onWindowLoad,!1))}},{key:"removeListeners",value:function(e){this.canUseDOM&&(e&&e.removeEventListener("scroll",this.onScroll,!1),window.removeEventListener("resize",this.onWindowResize,!1),window.removeEventListener("load",this.onWindowLoad,!1))}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,r=t.style,i=t.bgClassName,o=t.contentClassName,u=t.bgImageAlt,a=t.renderLayer,l=t.bgImageStyle,s=t.lazy,f=this.state,p=f.bgImage,h=f.bgImageSrcSet,g=f.bgImageSizes,m=f.percentage,y=f.imgStyle,v=f.bgStyle,b=f.splitChildren;return c.default.createElement("div",{className:"react-parallax ".concat(n),style:Object.assign({position:"relative",overflow:"hidden"},r),ref:function(t){e.node=t}},p?c.default.createElement("img",{className:i,src:p,srcSet:h,sizes:g,ref:function(t){e.img=t},alt:u,style:Object.assign(Object.assign({},y),l),loading:s?"lazy":"eager"}):null,a?a(-(m-1)):null,b.bgChildren.length>0?c.default.createElement("div",{className:"react-parallax-background-children",ref:function(t){e.bg=t},style:v},b.bgChildren):null,c.default.createElement(d.default,{onMount:this.onContentMount,className:o},b.children))}}],a=[{key:"getDerivedStateFromProps",value:function(e){return{splitChildren:s.getSplitChildren(e)}}}],n&&i(h.prototype,n),a&&i(h,a),h}(l.Parallax);h.defaultProps={bgClassName:"react-parallax-bgimage",bgImageAlt:"",className:"",contentClassName:"",disabled:!1,strength:100},t.default=h},function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.setBlur=t.getBlurValue=t.getHasDynamicBlur=t.getSplitChildren=t.getRelativePosition=t.getPercentage=void 0;var i=n(0),o=n(2);t.getPercentage=function(e,t,n){return(n-e)/(t-e)||0},t.getRelativePosition=function(e,n){if(!n)return 0;var r=e.getBoundingClientRect(),i=r.top,u=r.height,a=o.getNodeHeight(n),c=u>a?u:a,l=Math.round(i>c?c:i);return t.getPercentage(0,c,l)},t.getSplitChildren=function(e){var t=[],n=i.Children.toArray(e.children);return n.forEach(function(e,r){e.type&&e.type.isParallaxBackground&&(t=t.concat(n.splice(r,1)))}),{bgChildren:t,children:n}},t.getHasDynamicBlur=function(e){return"object"===r(e)&&void 0!==e.min&&void 0!==e.max},t.getBlurValue=function(e,t,n){return e?t.min+(1-n)*t.max:t},t.setBlur=function(e,t){e.style.webkitFilter="blur(".concat(t,"px)"),e.style.filter="blur(".concat(t,"px)")}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n(0));t.default=function(e){var t=e.children,n=e.onMount,r=e.className;return i.default.createElement("div",{ref:function(e){return n(e)},className:r||"react-parallax-content",style:{position:"relative"}},t)}},function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=u(n(0)),c=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(c,e);var t,n,u=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}(),function(){var e,n=o(c);return e=t?Reflect.construct(n,arguments,o(this).constructor):n.apply(this,arguments),e&&("object"===r(e)||"function"==typeof e)?e:function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(this)});function c(){return function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,c),u.apply(this,arguments)}return n=[{key:"render",value:function(){var e=this.props,t=e.className,n=e.children;return a.default.createElement("div",{className:"react-parallax-background ".concat(t)},n)}}],function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(c.prototype,n),c}(n(1).Background);c.defaultProps={className:""},c.isParallaxBackground=!0,t.default=c}])},e.exports=r(n(2265))},8977:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(2265);function i(e,t){void 0===t&&(t=!0);var n=(0,r.useRef)(null),i=(0,r.useRef)(!1),o=(0,r.useRef)(e);o.current=e;var u=(0,r.useCallback)(function(e){i.current&&(o.current(e),n.current=requestAnimationFrame(u))},[]),a=(0,r.useMemo)(function(){return[function(){i.current&&(i.current=!1,n.current&&cancelAnimationFrame(n.current))},function(){i.current||(i.current=!0,n.current=requestAnimationFrame(u))},function(){return i.current}]},[]);return(0,r.useEffect)(function(){return t&&a[1](),a[0]},[]),a}},8614:function(e,t,n){"use strict";n.d(t,{M:function(){return y}});var r=n(7437),i=n(2265),o=n(4252),u=n(3576),a=n(5750);class c extends i.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function l(e){let{children:t,isPresent:n}=e,o=(0,i.useId)(),u=(0,i.useRef)(null),l=(0,i.useRef)({width:0,height:0,top:0,left:0}),{nonce:s}=(0,i.useContext)(a._);return(0,i.useInsertionEffect)(()=>{let{width:e,height:t,top:r,left:i}=l.current;if(n||!u.current||!e||!t)return;u.current.dataset.motionPopId=o;let a=document.createElement("style");return s&&(a.nonce=s),document.head.appendChild(a),a.sheet&&a.sheet.insertRule('\n          [data-motion-pop-id="'.concat(o,'"] {\n            position: absolute !important;\n            width: ').concat(e,"px !important;\n            height: ").concat(t,"px !important;\n            top: ").concat(r,"px !important;\n            left: ").concat(i,"px !important;\n          }\n        ")),()=>{document.head.removeChild(a)}},[n]),(0,r.jsx)(c,{isPresent:n,childRef:u,sizeRef:l,children:i.cloneElement(t,{ref:u})})}let s=e=>{let{children:t,initial:n,isPresent:a,onExitComplete:c,custom:s,presenceAffectsLayout:d,mode:p}=e,h=(0,u.h)(f),g=(0,i.useId)(),m=(0,i.useCallback)(e=>{for(let t of(h.set(e,!0),h.values()))if(!t)return;c&&c()},[h,c]),y=(0,i.useMemo)(()=>({id:g,initial:n,isPresent:a,custom:s,onExitComplete:m,register:e=>(h.set(e,!1),()=>h.delete(e))}),d?[Math.random(),m]:[a,m]);return(0,i.useMemo)(()=>{h.forEach((e,t)=>h.set(t,!1))},[a]),i.useEffect(()=>{a||h.size||!c||c()},[a]),"popLayout"===p&&(t=(0,r.jsx)(l,{isPresent:a,children:t})),(0,r.jsx)(o.O.Provider,{value:y,children:t})};function f(){return new Map}var d=n(8881),p=n(3223);let h=e=>e.key||"";function g(e){let t=[];return i.Children.forEach(e,e=>{(0,i.isValidElement)(e)&&t.push(e)}),t}var m=n(1534);let y=e=>{let{children:t,exitBeforeEnter:n,custom:o,initial:a=!0,onExitComplete:c,presenceAffectsLayout:l=!0,mode:f="sync"}=e;(0,p.k)(!n,"Replace exitBeforeEnter with mode='wait'");let y=(0,i.useMemo)(()=>g(t),[t]),v=y.map(h),b=(0,i.useRef)(!0),w=(0,i.useRef)(y),x=(0,u.h)(()=>new Map),[O,S]=(0,i.useState)(y),[E,R]=(0,i.useState)(y);(0,m.L)(()=>{b.current=!1,w.current=y;for(let e=0;e<E.length;e++){let t=h(E[e]);v.includes(t)?x.delete(t):!0!==x.get(t)&&x.set(t,!1)}},[E,v.length,v.join("-")]);let M=[];if(y!==O){let e=[...y];for(let t=0;t<E.length;t++){let n=E[t],r=h(n);v.includes(r)||(e.splice(t,0,n),M.push(n))}"wait"===f&&M.length&&(e=M),R(g(e)),S(y);return}let{forceRender:P}=(0,i.useContext)(d.p);return(0,r.jsx)(r.Fragment,{children:E.map(e=>{let t=h(e),n=y===E||v.includes(t);return(0,r.jsx)(s,{isPresent:n,initial:(!b.current||!!a)&&void 0,custom:n?void 0:o,presenceAffectsLayout:l,mode:f,onExitComplete:n?void 0:()=>{if(!x.has(t))return;x.set(t,!0);let e=!0;x.forEach(t=>{t||(e=!1)}),e&&(null==P||P(),R(w.current),c&&c())},children:e},t)})})}},5447:function(e,t,n){"use strict";let r,i;n.d(t,{v:function(){return A}});var o=n(3078),u=n(3576),a=n(2265),c=n(3223),l=n(7235);let s=new WeakMap;function f({target:e,contentRect:t,borderBoxSize:n}){var r;null===(r=s.get(e))||void 0===r||r.forEach(r=>{r({target:e,contentSize:t,get size(){return function(e,t){if(t){let{inlineSize:e,blockSize:n}=t[0];return{width:e,height:n}}return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}(e,n)}})})}function d(e){e.forEach(f)}let p=new Set;var h=n(6376),g=n(4438);let m=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),y=()=>({time:0,x:m(),y:m()}),v={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function b(e,t,n,r){let i=n[t],{length:o,position:u}=v[t],a=i.current,c=n.time;i.current=e[`scroll${u}`],i.scrollLength=e[`scroll${o}`]-e[`client${o}`],i.offset.length=0,i.offset[0]=0,i.offset[1]=i.scrollLength,i.progress=(0,h.Y)(0,i.scrollLength,i.current);let l=r-c;i.velocity=l>50?0:(0,g.R)(i.current-a,l)}let w=[[0,0],[1,1]],x={start:0,center:.5,end:1};function O(e,t,n=0){let r=0;if(e in x&&(e=x[e]),"string"==typeof e){let t=parseFloat(e);e.endsWith("px")?r=t:e.endsWith("%")?e=t/100:e.endsWith("vw")?r=t/100*document.documentElement.clientWidth:e.endsWith("vh")?r=t/100*document.documentElement.clientHeight:e=t}return"number"==typeof e&&(r=t*e),n+r}let S=[0,0];var E=n(8843),R=n(6261);let M={x:0,y:0};var P=n(5414);let _=new WeakMap,W=new WeakMap,I=new WeakMap,j=e=>e===document.documentElement?window:e;function k(e,{container:t=document.documentElement,...n}={}){let o=I.get(t);o||(o=new Set,I.set(t,o));let u=function(e,t,n,r={}){return{measure:()=>(function(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!==e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight})(e,r.target,n),update:t=>{b(e,"x",n,t),b(e,"y",n,t),n.time=t,(r.offset||r.target)&&function(e,t,n){let{offset:r=w}=n,{target:i=e,axis:o="y"}=n,u="y"===o?"height":"width",a=i!==e?function(e,t){let n={x:0,y:0},r=e;for(;r&&r!==t;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if("svg"===r.tagName){let e=r.getBoundingClientRect(),t=(r=r.parentElement).getBoundingClientRect();n.x+=e.left-t.left,n.y+=e.top-t.top}else if(r instanceof SVGGraphicsElement){let{x:e,y:t}=r.getBBox();n.x+=e,n.y+=t;let i=null,o=r.parentNode;for(;!i;)"svg"===o.tagName&&(i=o),o=r.parentNode;r=i}else break;return n}(i,e):M,c=i===e?{width:e.scrollWidth,height:e.scrollHeight}:"getBBox"in i&&"svg"!==i.tagName?i.getBBox():{width:i.clientWidth,height:i.clientHeight},l={width:e.clientWidth,height:e.clientHeight};t[o].offset.length=0;let s=!t[o].interpolate,f=r.length;for(let e=0;e<f;e++){let n=function(e,t,n,r){let i=Array.isArray(e)?e:S,o=0;return"number"==typeof e?i=[e,e]:"string"==typeof e&&(i=(e=e.trim()).includes(" ")?e.split(" "):[e,x[e]?e:"0"]),O(i[0],n,r)-O(i[1],t)}(r[e],l[u],c[u],a[o]);s||n===t[o].interpolatorOffsets[e]||(s=!0),t[o].offset[e]=n}s&&(t[o].interpolate=(0,E.s)(t[o].offset,(0,R.Y)(r)),t[o].interpolatorOffsets=[...t[o].offset]),t[o].progress=t[o].interpolate(t[o].current)}(e,n,r)},notify:()=>t(n)}}(t,e,y(),n);if(o.add(u),!_.has(t)){let e=()=>{for(let e of o)e.measure()},n=()=>{for(let e of o)e.update(P.frameData.timestamp)},u=()=>{for(let e of o)e.notify()},a=()=>{P.Wi.read(e,!1,!0),P.Wi.read(n,!1,!0),P.Wi.update(u,!1,!0)};_.set(t,a);let c=j(t);window.addEventListener("resize",a,{passive:!0}),t!==document.documentElement&&W.set(t,"function"==typeof t?(p.add(t),i||(i=()=>{let e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};p.forEach(e=>e(t))},window.addEventListener("resize",i)),()=>{p.delete(t),!p.size&&i&&(i=void 0)}):function(e,t){r||"undefined"==typeof ResizeObserver||(r=new ResizeObserver(d));let n=(0,l.I)(e);return n.forEach(e=>{let n=s.get(e);n||(n=new Set,s.set(e,n)),n.add(t),null==r||r.observe(e)}),()=>{n.forEach(e=>{let n=s.get(e);null==n||n.delete(t),(null==n?void 0:n.size)||null==r||r.unobserve(e)})}}(t,a)),c.addEventListener("scroll",a,{passive:!0})}let a=_.get(t);return P.Wi.read(a,!1,!0),()=>{var e;(0,P.Pn)(a);let n=I.get(t);if(!n||(n.delete(u),n.size))return;let r=_.get(t);_.delete(t),r&&(j(t).removeEventListener("scroll",r),null===(e=W.get(t))||void 0===e||e(),window.removeEventListener("resize",r))}}function L(e,t){let n;let r=()=>{let{currentTime:r}=t,i=(null===r?0:r.value)/100;n!==i&&e(i),n=i};return P.Wi.update(r,!0),()=>(0,P.Pn)(r)}var C=n(9163);let H=new Map;function N({source:e,container:t=document.documentElement,axis:n="y"}={}){e&&(t=e),H.has(t)||H.set(t,{});let r=H.get(t);return r[n]||(r[n]=(0,C.t)()?new ScrollTimeline({source:t,axis:n}):function({source:e,container:t,axis:n="y"}){e&&(t=e);let r={value:0},i=k(e=>{r.value=100*e[n].progress},{container:t,axis:n});return{currentTime:r,cancel:i}}({source:t,axis:n})),r[n]}function D(e){return e&&(e.target||e.offset)}var z=n(1534);function B(e,t){(0,c.K)(!!(!t||t.current),`You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`)}let T=()=>({scrollX:(0,o.BX)(0),scrollY:(0,o.BX)(0),scrollXProgress:(0,o.BX)(0),scrollYProgress:(0,o.BX)(0)});function A({container:e,target:t,layoutEffect:n=!0,...r}={}){let i=(0,u.h)(T);return(n?z.L:a.useEffect)(()=>(B("target",t),B("container",e),function(e,{axis:t="y",...n}={}){let r={axis:t,...n};return"function"==typeof e?2===e.length||D(r)?k(t=>{e(t[r.axis].progress,t)},r):L(e,N(r)):function(e,t){if(D(t))return e.pause(),k(n=>{e.time=e.duration*n[t.axis].progress},t);{let n=N(t);return e.attachTimeline(n,e=>(e.pause(),L(t=>{e.time=e.duration*t},n)))}}(e,r)}((e,{x:t,y:n})=>{i.scrollX.set(t.current),i.scrollXProgress.set(t.progress),i.scrollY.set(n.current),i.scrollYProgress.set(n.progress)},{...r,container:(null==e?void 0:e.current)||void 0,target:(null==t?void 0:t.current)||void 0})),[e,t,JSON.stringify(r.offset)]),i}},5318:function(e,t,n){"use strict";n.d(t,{q:function(){return f}});var r=n(2265),i=n(3999),o=n(1906),u=n(5750),a=n(1534),c=n(2840),l=n(5414);function s(e){return"number"==typeof e?e:parseFloat(e)}function f(e,t={}){let{isStatic:n}=(0,r.useContext)(u._),f=(0,r.useRef)(null),d=(0,o.c)((0,i.i)(e)?s(e.get()):e),p=(0,r.useRef)(d.get()),h=(0,r.useRef)(()=>{}),g=()=>{let e=f.current;e&&0===e.time&&e.sample(l.frameData.delta),m(),f.current=(0,c.y)({keyframes:[d.get(),p.current],velocity:d.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...t,onUpdate:h.current})},m=()=>{f.current&&f.current.stop()};return(0,r.useInsertionEffect)(()=>d.attach((e,t)=>n?t(e):(p.current=e,h.current=t,l.Wi.update(g),d.get()),m),[JSON.stringify(t)]),(0,a.L)(()=>{if((0,i.i)(e))return e.on("change",e=>d.set(s(e)))},[d]),d}},8430:function(e,t,n){"use strict";n.d(t,{H:function(){return l}});var r=n(8843);let i=e=>e&&"object"==typeof e&&e.mix,o=e=>i(e)?e.mix:void 0;var u=n(5753),a=n(3576),c=n(3078);function l(e,t,n,i){if("function"==typeof e)return function(e){c.S1.current=[],e();let t=(0,u.N)(c.S1.current,e);return c.S1.current=void 0,t}(e);let a="function"==typeof t?t:function(...e){let t=!Array.isArray(e[0]),n=t?0:-1,i=e[0+n],u=e[1+n],a=e[2+n],c=e[3+n],l=(0,r.s)(u,a,{mixer:o(a[0]),...c});return t?l(i):l}(t,n,i);return Array.isArray(e)?s(e,a):s([e],([e])=>a(e))}function s(e,t){let n=(0,a.h)(()=>[]);return(0,u.N)(e,()=>{n.length=0;let r=e.length;for(let t=0;t<r;t++)n[t]=e[t].get();return t(n)})}},738:function(e,t,n){},7610:function(e,t,n){"use strict";n.d(t,{zz:function(){return a}});let r=1/3,i=1/6,o=e=>0|Math.floor(e),u=new Float64Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]);function a(e=Math.random){let t=function(e){let t=new Uint8Array(512);for(let e=0;e<256;e++)t[e]=e;for(let n=0;n<255;n++){let r=n+~~(e()*(256-n)),i=t[n];t[n]=t[r],t[r]=i}for(let e=256;e<512;e++)t[e]=t[e-256];return t}(e),n=new Float64Array(t).map(e=>u[e%12*3]),a=new Float64Array(t).map(e=>u[e%12*3+1]),c=new Float64Array(t).map(e=>u[e%12*3+2]);return function(e,u,l){let s,f,d,p,h,g,m,y,v,b;let w=(e+u+l)*r,x=o(e+w),O=o(u+w),S=o(l+w),E=(x+O+S)*i,R=e-(x-E),M=u-(O-E),P=l-(S-E);R>=M?M>=P?(h=1,g=0,m=0,y=1,v=1,b=0):(R>=P?(h=1,g=0,m=0):(h=0,g=0,m=1),y=1,v=0,b=1):M<P?(h=0,g=0,m=1,y=0,v=1,b=1):R<P?(h=0,g=1,m=0,y=0,v=1,b=1):(h=0,g=1,m=0,y=1,v=1,b=0);let _=R-h+i,W=M-g+i,I=P-m+i,j=R-y+2*i,k=M-v+2*i,L=P-b+2*i,C=R-1+3*i,H=M-1+3*i,N=P-1+3*i,D=255&x,z=255&O,B=255&S,T=.6-R*R-M*M-P*P;if(T<0)s=0;else{let e=D+t[z+t[B]];T*=T,s=T*T*(n[e]*R+a[e]*M+c[e]*P)}let A=.6-_*_-W*W-I*I;if(A<0)f=0;else{let e=D+h+t[z+g+t[B+m]];A*=A,f=A*A*(n[e]*_+a[e]*W+c[e]*I)}let F=.6-j*j-k*k-L*L;if(F<0)d=0;else{let e=D+y+t[z+v+t[B+b]];F*=F,d=F*F*(n[e]*j+a[e]*k+c[e]*L)}let U=.6-C*C-H*H-N*N;if(U<0)p=0;else{let e=D+1+t[z+1+t[B+1]];U*=U,p=U*U*(n[e]*C+a[e]*H+c[e]*N)}return 32*(s+f+d+p)}}}}]);