(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[797],{6236:function(e,t,n){Promise.resolve().then(n.t.bind(n,5878,23)),Promise.resolve().then(n.bind(n,4906)),Promise.resolve().then(n.t.bind(n,2261,23))},4906:function(e,t,n){"use strict";n.d(t,{ZoomableImage:function(){return et}});var r=n(7437),a=n(3145),o=n(2265),s=n(6741),l=n(8575),i=n(3966),d=n(9255),c=n(886),u=n(5278),f=n(9103),p=n(3832),m=n(1599),g=n(6840),h=n(6097),v=n(9157),x=n(5478),y=n(7053),j="Dialog",[w,N]=(0,i.b)(j),[b,D]=w(j),R=e=>{let{__scopeDialog:t,children:n,open:a,defaultOpen:s,onOpenChange:l,modal:i=!0}=e,u=o.useRef(null),f=o.useRef(null),[p=!1,m]=(0,c.T)({prop:a,defaultProp:s,onChange:l});return(0,r.jsx)(b,{scope:t,triggerRef:u,contentRef:f,contentId:(0,d.M)(),titleId:(0,d.M)(),descriptionId:(0,d.M)(),open:p,onOpenChange:m,onOpenToggle:o.useCallback(()=>m(e=>!e),[m]),modal:i,children:n})};R.displayName=j;var C="DialogTrigger";o.forwardRef((e,t)=>{let{__scopeDialog:n,...a}=e,o=D(C,n),i=(0,l.e)(t,o.triggerRef);return(0,r.jsx)(g.WV.button,{type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":X(o.open),...a,ref:i,onClick:(0,s.M)(e.onClick,o.onOpenToggle)})}).displayName=C;var I="DialogPortal",[O,_]=w(I,{forceMount:void 0}),k=e=>{let{__scopeDialog:t,forceMount:n,children:a,container:s}=e,l=D(I,t);return(0,r.jsx)(O,{scope:t,forceMount:n,children:o.Children.map(a,e=>(0,r.jsx)(m.z,{present:n||l.open,children:(0,r.jsx)(p.h,{asChild:!0,container:s,children:e})}))})};k.displayName=I;var E="DialogOverlay",F=o.forwardRef((e,t)=>{let n=_(E,e.__scopeDialog),{forceMount:a=n.forceMount,...o}=e,s=D(E,e.__scopeDialog);return s.modal?(0,r.jsx)(m.z,{present:a||s.open,children:(0,r.jsx)(M,{...o,ref:t})}):null});F.displayName=E;var M=o.forwardRef((e,t)=>{let{__scopeDialog:n,...a}=e,o=D(E,n);return(0,r.jsx)(v.Z,{as:y.g7,allowPinchZoom:!0,shards:[o.contentRef],children:(0,r.jsx)(g.WV.div,{"data-state":X(o.open),...a,ref:t,style:{pointerEvents:"auto",...a.style}})})}),P="DialogContent",W=o.forwardRef((e,t)=>{let n=_(P,e.__scopeDialog),{forceMount:a=n.forceMount,...o}=e,s=D(P,e.__scopeDialog);return(0,r.jsx)(m.z,{present:a||s.open,children:s.modal?(0,r.jsx)(z,{...o,ref:t}):(0,r.jsx)(A,{...o,ref:t})})});W.displayName=P;var z=o.forwardRef((e,t)=>{let n=D(P,e.__scopeDialog),a=o.useRef(null),i=(0,l.e)(t,n.contentRef,a);return o.useEffect(()=>{let e=a.current;if(e)return(0,x.Ry)(e)},[]),(0,r.jsx)(T,{...e,ref:i,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,s.M)(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),null===(t=n.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:(0,s.M)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey;(2===t.button||n)&&e.preventDefault()}),onFocusOutside:(0,s.M)(e.onFocusOutside,e=>e.preventDefault())})}),A=o.forwardRef((e,t)=>{let n=D(P,e.__scopeDialog),a=o.useRef(!1),s=o.useRef(!1);return(0,r.jsx)(T,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var r,o;null===(r=e.onCloseAutoFocus)||void 0===r||r.call(e,t),t.defaultPrevented||(a.current||null===(o=n.triggerRef.current)||void 0===o||o.focus(),t.preventDefault()),a.current=!1,s.current=!1},onInteractOutside:t=>{var r,o;null===(r=e.onInteractOutside)||void 0===r||r.call(e,t),t.defaultPrevented||(a.current=!0,"pointerdown"!==t.detail.originalEvent.type||(s.current=!0));let l=t.target;(null===(o=n.triggerRef.current)||void 0===o?void 0:o.contains(l))&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&s.current&&t.preventDefault()}})}),T=o.forwardRef((e,t)=>{let{__scopeDialog:n,trapFocus:a,onOpenAutoFocus:s,onCloseAutoFocus:i,...d}=e,c=D(P,n),p=o.useRef(null),m=(0,l.e)(t,p);return(0,h.EW)(),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f.M,{asChild:!0,loop:!0,trapped:a,onMountAutoFocus:s,onUnmountAutoFocus:i,children:(0,r.jsx)(u.XB,{role:"dialog",id:c.contentId,"aria-describedby":c.descriptionId,"aria-labelledby":c.titleId,"data-state":X(c.open),...d,ref:m,onDismiss:()=>c.onOpenChange(!1)})}),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(G,{titleId:c.titleId}),(0,r.jsx)(J,{contentRef:p,descriptionId:c.descriptionId})]})]})}),V="DialogTitle",S=o.forwardRef((e,t)=>{let{__scopeDialog:n,...a}=e,o=D(V,n);return(0,r.jsx)(g.WV.h2,{id:o.titleId,...a,ref:t})});S.displayName=V;var Z="DialogDescription",B=o.forwardRef((e,t)=>{let{__scopeDialog:n,...a}=e,o=D(Z,n);return(0,r.jsx)(g.WV.p,{id:o.descriptionId,...a,ref:t})});B.displayName=Z;var H="DialogClose",U=o.forwardRef((e,t)=>{let{__scopeDialog:n,...a}=e,o=D(H,n);return(0,r.jsx)(g.WV.button,{type:"button",...a,ref:t,onClick:(0,s.M)(e.onClick,()=>o.onOpenChange(!1))})});function X(e){return e?"open":"closed"}U.displayName=H;var q="DialogTitleWarning",[K,L]=(0,i.k)(q,{contentName:P,titleName:V,docsSlug:"dialog"}),G=e=>{let{titleId:t}=e,n=L(q),r="`".concat(n.contentName,"` requires a `").concat(n.titleName,"` for the component to be accessible for screen reader users.\n\nIf you want to hide the `").concat(n.titleName,"`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/").concat(n.docsSlug);return o.useEffect(()=>{t&&!document.getElementById(t)&&console.error(r)},[r,t]),null},J=e=>{let{contentRef:t,descriptionId:n}=e,r=L("DialogDescriptionWarning"),a="Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(r.contentName,"}.");return o.useEffect(()=>{var e;let r=null===(e=t.current)||void 0===e?void 0:e.getAttribute("aria-describedby");n&&r&&!document.getElementById(n)&&console.warn(a)},[a,t,n]),null};let Q=(0,n(9205).Z)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);var Y=n(3448);let $=o.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(F,{ref:t,className:(0,Y.cn)("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",n),...a})});$.displayName=F.displayName;let ee=o.forwardRef((e,t)=>{let{className:n,children:a,...o}=e;return(0,r.jsxs)(k,{children:[(0,r.jsx)($,{}),(0,r.jsxs)(W,{ref:t,className:(0,Y.cn)("fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 sm:rounded-lg","data-[state=open]:animate-in data-[state=closed]:animate-out","data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0","data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95","data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]","data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",n),...o,children:[a,(0,r.jsxs)(U,{className:"absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",children:[(0,r.jsx)(Q,{className:"h-4 w-4"}),(0,r.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});function et(e){let{src:t,alt:n,width:s,height:l,className:i}=e,[d,c]=(0,o.useState)(!1);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.default,{src:t||"/placeholder.svg",alt:n,width:s||800,height:l||600,className:(0,Y.cn)("cursor-zoom-in rounded-lg transition-transform hover:scale-[1.02]",i),onClick:()=>c(!0)}),(0,r.jsx)(R,{open:d,onOpenChange:c,children:(0,r.jsx)(ee,{className:"w-[80vw] max-w-[90vh] max-h-[90vh] flex justify-center items-center",children:(0,r.jsx)("div",{className:"relative w-[80vw] h-[80vh]",children:(0,r.jsx)(a.default,{src:t||"/placeholder.svg",alt:n,fill:!0,className:"object-contain rounded-lg",sizes:"(max-width: 768px) 100vw, 80vw",priority:!0})})})})]})}ee.displayName=W.displayName,o.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)("div",{ref:t,className:(0,Y.cn)("flex flex-col space-y-1.5 text-center sm:text-left",n),...a})}).displayName="DialogHeader",o.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)("div",{ref:t,className:(0,Y.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",n),...a})}).displayName="DialogFooter",o.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(S,{ref:t,className:(0,Y.cn)("text-lg font-semibold leading-none tracking-tight",n),...a})}).displayName=S.displayName,o.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(B,{ref:t,className:(0,Y.cn)("text-sm text-muted-foreground",n),...a})}).displayName=B.displayName},3448:function(e,t,n){"use strict";n.d(t,{O2:function(){return l},cn:function(){return o},p6:function(){return s}});var r=n(1994),a=n(3335);function o(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,a.m6)((0,r.W)(t))}function s(e){return new Date(e).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})}function l(e){return e.sort((e,t)=>e.date>t.date?-1:e.date<t.date?1:0)}n(738)},2261:function(){}},function(e){e.O(0,[803,948,507,145,971,117,744],function(){return e(e.s=6236)}),_N_E=e.O()}]);