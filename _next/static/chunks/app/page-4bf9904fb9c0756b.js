(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6093:function(e,t,i){Promise.resolve().then(i.bind(i,8049))},355:function(e,t,i){"use strict";i.d(t,{CG:function(){return a},IC:function(){return l},TL:function(){return s}});var n=i(2265),r=i(386);let s=()=>(0,r.I0)(),a=r.v9,l=(e,t,i,r,s)=>{let[a,l]=(0,n.useState)(e),c=e=>{a&&t.current&&!t.current.contains(e.target)&&(l(!1),i(),r(s(!1)))};return(0,n.useEffect)(()=>(document.addEventListener("click",c,!0),()=>{document.removeEventListener("click",c,!0)})),{ref:t,isComponentVisible:a,setIsComponentVisible:l}}},8049:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return _}});var n=i(7437),r=i(3145),s=i(2265),a=i(9590),l=i(7638),c=i(1792);function d(e){let{items:t,speed:i=25}=e,l=[...t,...t],[c,d]=(0,s.useState)(0),o=(0,s.useRef)(null),[u,m]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{let e=()=>{o.current&&d(o.current.scrollWidth/2)},t=setTimeout(()=>{e(),m(!0)},500);return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e),clearTimeout(t)}},[t]),(0,n.jsx)("div",{className:"relative w-full overflow-hidden py-8",children:(0,n.jsx)("div",{className:"w-full max-w-7xl mx-auto overflow-hidden",children:(0,n.jsx)(a.E.div,{ref:o,className:"flex items-center",animate:u?{x:-c}:{x:0},transition:u?{repeat:1/0,ease:"linear",duration:i,repeatType:"loop"}:{duration:0},children:l.map((e,t)=>(0,n.jsx)("div",{className:"flex flex-col items-center px-5 flex-shrink-0",children:(0,n.jsxs)("div",{className:"bg-zinc-800/20 rounded-lg p-3 flex items-center h-14",children:[(0,n.jsx)("div",{className:"relative w-7 h-7 mr-3 flex items-center justify-center",children:(0,n.jsx)(r.default,{src:e.image,alt:e.name,width:28,height:28,className:"object-contain",unoptimized:!0,onError:t=>{t.currentTarget.src="https://placehold.co/28x28/374151/ffffff?text=".concat(e.name[0])}})}),(0,n.jsx)("span",{className:"text-sm font-medium whitespace-nowrap",children:e.name})]})},"".concat(e.id,"-").concat(t)))})})})}var o=i(355),u=i(1479);function m(){return(0,n.jsx)("div",{id:"wrapper",children:(0,n.jsx)("div",{id:"wrapper-inner",children:(0,n.jsxs)("div",{id:"scroll-down",children:[(0,n.jsx)("span",{className:"arrow-down"}),(0,n.jsx)("span",{id:"scroll-title",children:"Scroll"})]})})})}i(8825);var x=i(3448),f=i(8614),h=i(7648);let p=e=>{let{items:t,className:i}=e,[r,l]=(0,s.useState)(null);return(0,n.jsx)("div",{className:(0,x.cn)("grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 p-10",i),children:t.map((e,t)=>(0,n.jsxs)(h.default,{href:null==e?void 0:e.experience,className:"relative group block p-2 h-full w-full mask-b-from-80% mask-b-to-100%",onMouseEnter:()=>l(t),onMouseLeave:()=>l(null),children:[(0,n.jsx)(f.M,{children:r===t&&(0,n.jsx)(a.E.span,{className:"absolute inset-0 h-full w-full bg-orange-200 dark:bg-slate-800/[0.8] block  rounded-3xl",layoutId:"hoverBackground",initial:{opacity:0},animate:{opacity:1,transition:{duration:.15}},exit:{opacity:0,transition:{duration:.15,delay:.2}}})}),(0,n.jsxs)(g,{children:[(0,n.jsx)(j,{children:e.title}),(0,n.jsx)(w,{children:e.description}),(0,n.jsx)(w,{children:e.experience})]})]},null==e?void 0:e.experience))})},g=e=>{let{className:t,children:i}=e;return(0,n.jsx)("div",{className:(0,x.cn)("rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",t),children:(0,n.jsx)("div",{className:"relative z-50",children:(0,n.jsx)("div",{className:"p-4",children:i})})})},j=e=>{let{className:t,children:i}=e;return(0,n.jsx)("h4",{className:(0,x.cn)("text-zinc-100 font-bold tracking-wide mt-4",t),children:i})},w=e=>{let{className:t,children:i}=e;return(0,n.jsx)("p",{className:(0,x.cn)("mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",t),children:i})};function v(e){let{cards:t}=e;return(0,n.jsx)("div",{className:"",children:(0,n.jsx)(p,{items:t})})}function b(e){let{cards:t}=e,[i,r]=(0,s.useState)(()=>Array(t.length).fill(0)),[a,l]=(0,s.useState)(!1),c=(0,s.useRef)(null),d=e=>{if(!e)return!1;let t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)};(0,s.useEffect)(()=>{let e=()=>{!a&&d(c.current)&&(o(),l(!0))};return window.addEventListener("scroll",e),window.addEventListener("resize",e),()=>{window.removeEventListener("scroll",e),window.removeEventListener("resize",e)}},[a]);let o=()=>{t.forEach((e,t)=>{let i=e.number,n=Math.round(2e3/(1e3/60)),s=0,a=()=>{let e=Math.min(++s/n,1),l=Math.floor(e*i);r(e=>{let i=[...e];return i[t]=l,i}),e<1&&requestAnimationFrame(a)};requestAnimationFrame(a)})};return(0,n.jsx)("div",{ref:c,className:"mx-auto container md:-mt-28 -mt-20 flex justify-center items-center",children:(0,n.jsx)("div",{className:"grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-x-2 gap-y-2 lg:gap-x-6 md:gap-x-6 md:gap-y-6",children:t.map((e,t)=>(0,n.jsxs)("div",{className:"flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl",children:[(0,n.jsx)("h2",{className:"lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800",children:i[t]}),(0,n.jsx)("p",{className:"mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600",children:e.text})]},t))})})}let y=()=>{let[e,t]=(0,s.useState)(!1),i=()=>{window.pageYOffset>300?t(!0):t(!1)};return(0,s.useEffect)(()=>(window.addEventListener("scroll",i),()=>{window.removeEventListener("scroll",i)}),[]),(0,n.jsx)("div",{className:"fixed bottom-2 right-2 z-40",children:(0,n.jsx)("button",{type:"button",onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},className:"".concat(e?"opacity-100":"opacity-0"," bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500 inline-flex items-center rounded-full p-3 text-white shadow-sm transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2"),style:{display:e?"flex":"none"},children:(0,n.jsx)(r.default,{src:"/arrowup.png",alt:"arrow-up",width:100,height:100,className:"h-6 w-6","aria-hidden":"true"})})})},N=()=>{let[e,t]=(0,s.useState)(0),i=(0,s.useRef)(null),[r,l]=(0,s.useState)(0);return(0,s.useEffect)(()=>{i.current&&l(i.current.offsetWidth)},[]),(0,n.jsxs)("div",{className:"relative mx-auto w-full md:p-20",children:[(0,n.jsx)(a.E.h2,{initial:{opacity:0,y:100},whileInView:{opacity:1,y:0},transition:{delay:.4,duration:.8,ease:"easeInOut"},className:"bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text pb-10  text-center text-4xl font-medium tracking-tight text-transparent  lg:text-6xl",children:"Project Experience (IBM)"}),(0,n.jsxs)("div",{className:"relative flex items-center justify-center",children:[(0,n.jsx)("button",{onClick:()=>{e>0&&t(e-1)},disabled:0===e,className:"absolute left-0 z-10 flex h-10 w-10 items-center justify-center  rounded-full bg-white text-black disabled:opacity-50",children:"◀"}),(0,n.jsx)("div",{className:"mx-10 overflow-hidden",children:(0,n.jsx)(a.E.div,{className:"flex",animate:{x:-e*(r+16)},transition:{type:"spring",stiffness:400,damping:30},style:{gap:16},children:E.map((e,t)=>(0,n.jsx)(k,{card:e,ref:0===t?i:null},e.id))})}),(0,n.jsx)("button",{onClick:()=>{e<E.length-1&&t(e+1)},disabled:e===E.length-1,className:"absolute right-0 z-10 flex h-10 w-10 items-center justify-center  rounded-full bg-white text-black disabled:opacity-50",children:"▶"})]})]})},k=(0,s.forwardRef)((e,t)=>{let{card:i}=e;return(0,n.jsxs)("div",{ref:t,className:"relative h-[50vh] min-w-[450px] sm:min-w-auto overflow-hidden bg-neutral-200 mb-10 p-10",style:{minWidth:"450px"},children:[(0,n.jsx)("div",{style:{backgroundImage:"url(".concat(i.url,")"),backgroundSize:"cover",backgroundPosition:"center"},className:"absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"}),(0,n.jsx)("div",{className:"absolute inset-0 z-10 grid place-content-center",children:(0,n.jsx)("p",{className:"bg-gradient-to-br from-white/20 to-white/0 p-8 text-2xl font-black uppercase text-white backdrop-blur-lg",children:i.title})}),(0,n.jsx)("div",{className:"absolute inset-0 z-10 grid place-content-end",children:(0,n.jsx)("p",{className:"bg-gradient-to-br from-white/20 to-white/0 p-8 text-xl font-black uppercase text-white backdrop-blur-lg mb-16",children:i.year})})]},i.id)});k.displayName="Card";let E=[{id:1,url:"/flying.jpg",title:"Cloud architecture & microservices dev for German telco",year:"2020 - Now"},{id:2,url:"/laptop.jpg",title:"Azure consulting & DevSecOps for Swiss company",year:"2023 - Now"},{id:3,url:"/boat.jpg",title:"Container-ready architecture",year:"2023 - 2024"},{id:4,url:"/phone.jpg",title:"DevOps engineer for German finance",year:"2020 - 2021"},{id:5,url:"/desk.jpg",title:"App Modernisation to Cloud",year:"2017 - 2023"},{id:6,url:"/learning.jpg",title:"Frontend dev and consulting",year:"2020 - 2020"}],C=(e,t)=>{setTimeout(()=>{var t,i;null===(t=e.current)||void 0===t||t.classList.remove("opacity-0"),null===(i=e.current)||void 0===i||i.classList.add("opacity-100")},t)};function _(){let e="duration-300",t="transform transition-all opacity-0 ".concat(e),i="hover:-translate-y-1  motion-safe:hover:scale-110 ".concat(e),x=(0,s.useRef)(null),f=(0,s.useRef)(null),h=(0,s.useRef)(null),p=(0,s.useRef)(null),g=(0,s.useRef)(null),j=(0,o.CG)(u.Hm);(0,s.useEffect)(()=>{!0===j?w():k()},[j]),C(f,500),C(h,1e3),C(p,1500);let w=()=>{var e;null===(e=x.current)||void 0===e||e.classList.add("filter","blur-sm")},k=()=>{var e;null===(e=x.current)||void 0===e||e.classList.remove("filter","blur-sm")};return(0,n.jsxs)("div",{className:"relative pt-20 md:pt-20",id:"hero",children:[(0,n.jsx)("div",{className:"flex h-screen justify-center items-center",children:(0,n.jsxs)(a.E.div,{initial:{opacity:0,y:100},animate:{opacity:1,y:0},transition:{delay:.4,duration:.8,ease:"easeInOut"},children:[(0,n.jsx)(l.N,{strength:.05,children:(0,n.jsx)("span",{className:"block text-center",children:(0,n.jsx)("p",{className:"lg:text-6xl bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent",children:"Ing. Mari\xe1n Ferenc"})})}),(0,n.jsxs)("div",{className:"flex flex-col md:flex-row items-center justify-center gap-8 mt-8",children:[(0,n.jsxs)("div",{className:"flex flex-col items-center md:max-w-md px-4",children:[(0,n.jsx)("h2",{ref:h,className:"drop-shadow-2xl md:text-4xl text-xl font-mono m-4 ".concat(t," text-center"),children:"Full Stack Developer, DevSecOps & Cloud Architecture Engineer from Košice, Slovakia."}),(0,n.jsxs)("div",{ref:p,className:"flex justify-center space-x-4 mt-4 ".concat(t),children:[(0,n.jsx)("a",{href:"https://www.linkedin.com/in/ing-marian-ferenc-slovakia/",target:"_blank",className:"h-16 w-16",children:(0,n.jsx)(r.default,{src:"/linkedin-icon.png",width:100,height:100,className:"h-16 w-16 ".concat(i),alt:"LinkedIn link"})}),(0,n.jsx)("a",{href:"https://github.com/majoferenc",target:"_blank",className:"h-16 w-16",children:(0,n.jsx)(r.default,{src:"/github-icon.png",width:100,height:100,className:"h-16 w-16 ".concat(i," bg-black rounded-full"),alt:"GitHub link"})})]})]}),(0,n.jsx)("div",{className:"flex justify-center items-center",children:(0,n.jsx)(r.default,{src:"/IMG_2255.png",width:145,height:145,className:"w-40 md:ml-0 md:min-w-[20rem] md:min-w-[20rem] rounded-tr-lg mask-r-from-70%",alt:"Me"})})]}),(0,n.jsxs)(a.E.section,{id:"tech-stack",className:"py-2",initial:{opacity:0},whileInView:{opacity:1},transition:{duration:.6},viewport:{once:!0},children:[(0,n.jsx)("div",{title:"Tech Stack"}),(0,n.jsx)(d,{items:[{id:"react",name:"React",image:"/React.png"},{id:"spring",name:"Spring Boot",image:"/Spring.png"},{id:"terraform",name:"Terraform",image:"/Terraform.png"},{id:"aws",name:"AWS",image:"/AWS.png"},{id:"azure",name:"Azure",image:"/Azure.png"},{id:"vue.js",name:"Vue.js",image:"/Vue.png"},{id:"docker",name:"Docker",image:"/Docker.png"},{id:"kubernetes",name:"Kubernetes",image:"/Kubernetes.png"},{id:"argocd",name:"ArgoCD",image:"/ArgoCD.png"},{id:"jenkins",name:"Jenkins",image:"/Jenkins.png"},{id:"gitlabci",name:"Gitlab CI",image:"/GitLab.png"}],speed:30})]}),(0,n.jsx)("div",{className:"text-center pb-20 mt-8",children:(0,n.jsx)(m,{})})]})}),(0,n.jsxs)("div",{ref:x,className:" h-1/4 overflow-visible",children:[(0,n.jsx)("div",{children:(0,n.jsx)("div",{children:(0,n.jsx)("div",{className:"pb-40",children:(0,n.jsxs)("div",{ref:g,children:[(0,n.jsx)("div",{className:"mx-auto h-60",children:(0,n.jsx)("div",{className:"mx-auto container w-full flex flex-col justify-center items-center",children:(0,n.jsx)("div",{className:"flex justify-center items-center flex-col",children:(0,n.jsx)("div",{className:"mt-10 hover:outline-2 hover:outline-white transition-all duration-300",id:"by-the-numbers",children:(0,n.jsx)(a.E.h2,{initial:{opacity:0,y:100},whileInView:{opacity:1,y:0},transition:{delay:.3,duration:.8,ease:"easeInOut"},className:"lg:text-6xl bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent",children:"By the numbers"})})})})}),(0,n.jsx)(b,{cards:[{number:4,text:"Spoken Languages"},{number:7,text:"Customer facing Projects"},{number:7,text:"Years of Experience"},{number:39,text:"Certifications/Badges"}]})]})})})}),(0,n.jsx)(N,{}),(0,n.jsx)("div",{children:(0,n.jsx)("div",{className:"bg-white pb-20 py-8",children:(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"mx-auto bg-gradient-to-l from-white to-white",children:(0,n.jsx)("div",{className:"mx-auto container w-full flex flex-col justify-center items-center",children:(0,n.jsx)("div",{className:"flex justify-center items-center flex-col",children:(0,n.jsx)("div",{className:"mt-10",id:"experience",children:(0,n.jsx)(a.E.h2,{initial:{opacity:0,y:100},whileInView:{opacity:1,y:0},transition:{delay:.3,duration:.8,ease:"easeInOut"},className:"lg:text-6xl bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent",children:"Expertise"})})})})}),(0,n.jsx)(v,{cards:[{description:"Vue.js, Next.js, Angular",title:"Frontend Development",experience:"3 years of experience"},{description:"Spring Boot, Java EE, Node.js / LangChain, ChromaDB",title:"Backend development & GenAI solutions",experience:"7 years of experience"},{description:"Kubernetes / Cloudification / Pipelining - GitLab CI & GitOps - ArgoCD",title:"DevSecOps Engineer",experience:"5 years of experience"},{description:"Cloud Architecture - IBM Cloud, Azure, AWS",title:"Application Architect",experience:"2 years of experience"}]})]})})}),(0,n.jsx)("div",{children:(0,n.jsx)("div",{children:(0,n.jsxs)("div",{className:"container mx-auto pt-16",children:[(0,n.jsx)("div",{className:"mx-auto",children:(0,n.jsx)("div",{className:"mx-auto container w-full flex flex-col justify-center items-center",children:(0,n.jsx)("div",{className:"flex justify-center items-center flex-col",children:(0,n.jsx)("div",{className:"mt-10",id:"certifications",children:(0,n.jsx)(a.E.h2,{initial:{opacity:0,y:100},whileInView:{opacity:1,y:0},transition:{delay:.3,duration:.8,ease:"easeInOut"},className:"lg:text-6xl bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent",children:"Certifications"})})})})}),(0,n.jsxs)("div",{className:"xl:py-8 lg:py-16 md:py-16 sm:py-16 px-15 flex flex-wrap items-center justify-center",children:[(0,n.jsx)("div",{className:"w-6/12 xl:w-[10rem] lg:w-1/4 md:w-1/4 flex justify-center xl:pb-10 pb-16 items-center  ".concat(i),children:(0,n.jsx)(r.default,{src:"/aws_certified_sol_arch_pro.png",alt:"AWS Certified Solutions Architect Professional",width:150,height:100})}),(0,n.jsx)("div",{className:"w-6/12 xl:w-[10rem] lg:w-1/4 md:w-1/4 flex justify-center xl:pb-10 pb-16 items-center  ".concat(i),children:(0,n.jsx)(r.default,{src:"/terraform_cert.png",alt:"Terraform certificate",width:150,height:100})}),(0,n.jsx)("div",{className:"w-6/12 xl:w-[10rem] lg:w-1/4 md:w-1/4 flex justify-center xl:pb-10 pb-16 items-center  ".concat(i),children:(0,n.jsx)(r.default,{src:"/redhat_openshift_administration.png",width:150,height:100,alt:"RedHat OpenShift Administrator"})}),(0,n.jsx)("div",{className:"w-6/12 xl:w-[10rem] lg:w-1/4 md:w-1/4 flex justify-center xl:pb-10 pb-16 items-center  ".concat(i),children:(0,n.jsx)(r.default,{src:"/ckad_cert.png",alt:"Certified Kubernetes Application Developer",width:150,height:100})}),(0,n.jsx)("div",{className:"w-6/12 xl:w-[10rem] lg:w-1/4 md:w-1/4 flex justify-center xl:pb-10 pb-16 items-center  ".concat(i),children:(0,n.jsx)(r.default,{src:"/oracle_java_8_prof_cert.png",alt:"Certified Java Professional",width:150,height:100})})]}),(0,n.jsx)(c.Parallax,{blur:{min:-15,max:15},bgImageAlt:"University Degree",strength:400,children:(0,n.jsx)("div",{className:"mb-48 min-h-[300px] flex flex-col justify-center items-center",id:"education",children:(0,n.jsxs)("div",{className:"p-8 rounded-lg",children:[(0,n.jsx)(a.E.h2,{initial:{opacity:0,y:100},whileInView:{opacity:1,y:0},transition:{delay:.4,duration:.8,ease:"easeInOut"},className:"lg:text-6xl bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent",children:"Education"}),(0,n.jsx)(a.E.p,{initial:{opacity:0,y:100},whileInView:{opacity:1,y:0},transition:{delay:.5,duration:.8,ease:"easeInOut"},className:"mt-20 text-center text-4xl font-medium tracking-tight",children:"Engineer's degree in Informatics from Technical University of Kosice"})]})})}),(0,n.jsx)("div",{className:"flex items-center justify-center",children:(0,n.jsxs)("button",{className:"relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 m-2",children:[(0,n.jsx)("span",{className:"absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"}),(0,n.jsx)("span",{className:"inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl",children:(0,n.jsx)("a",{href:"https://www.credly.com/users/marian-ferenc/badges",target:"_blank",type:"submit",className:"mx-auto text-white rounded font-bold py-2 px-4 m-4 text-sm",children:"Credly"})})]})})]})})})]}),(0,n.jsx)(y,{})]})}},1479:function(e,t,i){"use strict";i.d(t,{Hm:function(){return a},Kt:function(){return s}});let n=(0,i(1455).oM)({name:"sidebar",initialState:{sidebarOpened:!1},reducers:{clear:e=>{e.sidebarOpened=!1},setSidebarOpenedValue:(e,t)=>{e.sidebarOpened=t.payload}}}),{clear:r,setSidebarOpenedValue:s}=n.actions,a=e=>e.sidebar.sidebarOpened;t.ZP=n.reducer},3448:function(e,t,i){"use strict";i.d(t,{O2:function(){return d},cn:function(){return l},p6:function(){return c}});var n=i(1994),r=i(3335),s=i(2258),a=i(7262);function l(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return(0,r.m6)((0,n.W)(t))}function c(e){let t=(0,s.D)(e);return(0,a.WU)(t,"MMMM d, yyyy")}function d(e){return e.sort((e,t)=>new Date(e.date)>new Date(t.date)?-1:1)}},8825:function(){}},function(e){e.O(0,[20,128,590,648,519,145,504,971,117,744],function(){return e(e.s=6093)}),_N_E=e.O()}]);