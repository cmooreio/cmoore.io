import{v as f,c as _,o as k,a1 as S}from"./chunks/framework.DLN2USm2.js";const b="/raspberry-pi-5.jpg",R="/nvidia-jetson-agx-thor.jpg",w="/ansible-argocd.jpg",T="/kubernetes.jpg",x="/prometheus-grafana.jpg",A="/home-assistant-philips-hue.jpg",q=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"cmoore.io","tagline":"k3s Raspberry Pi 5 cluster with GitOps, AI inference, and home automation"}},"headers":[],"relativePath":"index.md","filePath":"index.md"}'),C={name:"index.md"},I=Object.assign(C,{setup(P){return f(()=>{const s="kubectl get nodes",a=`NAME        STATUS   ROLES                  VERSION
psyk3s1     Ready    control-plane,master   v1.31.2+k3s1
psyk3s2     Ready    control-plane,master   v1.31.2+k3s1
psyk3s3     Ready    control-plane,master   v1.31.2+k3s1
psyk3s4     Ready    <none>                 v1.31.2+k3s1
psyk3s5     Ready    <none>                 v1.31.2+k3s1
psyk3s6     Ready    <none>                 v1.31.2+k3s1
psyk3s7     Ready    <none>                 v1.31.2+k3s1
psyk3s8     Ready    <none>                 v1.31.2+k3s1
psyaimax    Ready    rocm-inference         v1.31.2+k3s1
psythor     Ready    cuda-inference         v1.31.2+k3s1`,o=document.querySelector(".hero-with-terminal"),i=document.querySelector(".VPHero .container");if(o&&i&&window.innerWidth>=960){const t=o.querySelector(".terminal");if(t){const e=t.cloneNode(!0);e.classList.add("hero-terminal-inline"),i.appendChild(e),p(e.querySelector(".typed-text"),e.querySelector(".cursor"),e.querySelector(".terminal-output"),s,a);return}}const c=document.querySelector(".typed-text"),l=document.querySelector(".cursor"),d=document.querySelector(".terminal-output");c&&l&&d&&p(c,l,d,s,a);function p(t,e,v,m,g){let r=0;const u=()=>{r<m.length?(t.textContent+=m[r],r++,setTimeout(u,80+Math.random()*40)):(e.style.display="none",setTimeout(()=>{let n=0;const h=g.split(`
`),y=()=>{n<h.length&&(v.textContent+=h[n]+`
`,n++,setTimeout(y,50))};y()},300))};setTimeout(u,800)}}),(s,a)=>(k(),_("div",null,[...a[0]||(a[0]=[S("",3)])]))}});export{q as __pageData,I as default};
