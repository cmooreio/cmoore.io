import{_ as h}from"./chunks/NetworkTopology.rzfS4_a3.js";import{_ as m,c as v,o as x,ag as p,v as g,j as c,G as y}from"./chunks/framework.CI6Ra_OS.js";const u={},k={class:"feature-cards"};function w(f,e){return x(),v("div",k,[...e[0]||(e[0]=[p("",6)])])}const b=m(u,[["render",w],["__scopeId","data-v-dc64954e"]]),_={class:"hero-showcase"},A={class:"showcase-topology"},C=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"cmoore.io","tagline":"k3s Raspberry Pi 5 cluster with GitOps, AI inference, and home automation"}},"headers":[],"relativePath":"index.md","filePath":"index.md"}'),R={name:"index.md"},P=Object.assign(R,{setup(f){return g(()=>{const e="kubectl get nodes",a=`NAME    STATUS   ROLES                  VERSION
rpi1    Ready    control-plane,master   v1.31.2+k3s1
rpi2    Ready    control-plane,master   v1.31.2+k3s1
rpi3    Ready    control-plane,master   v1.31.2+k3s1
rpi4    Ready    <none>                 v1.31.2+k3s1
rpi5    Ready    <none>                 v1.31.2+k3s1
rpi6    Ready    <none>                 v1.31.2+k3s1
rpi7    Ready    <none>                 v1.31.2+k3s1
rpi8    Ready    <none>                 v1.31.2+k3s1
aimax   Ready    rocm-inference         v1.31.2+k3s1
thor    Ready    cuda-inference         v1.31.2+k3s1`,i=document.querySelector(".typed-text"),l=document.querySelector(".cursor"),s=document.querySelector(".terminal-output");if(i&&l&&s){let t=0;const n=()=>{t<e.length?(i.textContent+=e[t],t++,setTimeout(n,80+Math.random()*40)):(l.style.display="none",setTimeout(()=>{let d=0;const r=a.split(`
`),o=()=>{d<r.length&&(s.textContent+=r[d]+`
`,d++,setTimeout(o,50))};o()},300))};setTimeout(n,800)}}),(e,a)=>(x(),v("div",null,[a[1]||(a[1]=c("div",{class:"mobile-nav"},[c("a",{href:"/architecture/"},"Architecture"),c("a",{href:"/components/"},"Software"),c("a",{href:"/hardware/"},"Hardware")],-1)),c("div",_,[a[0]||(a[0]=p("",1)),c("div",A,[y(h)])]),y(b)]))}});export{C as __pageData,P as default};
