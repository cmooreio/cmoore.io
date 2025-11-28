import{v as f,c as _,o as S,a1 as b}from"./chunks/framework.DhwUXOCl.js";const k="/raspberry-pi-5.jpg",R="/nvidia-jetson-agx-thor.jpg",w="/ansible-argocd.jpg",T="/kubernetes.jpg",x="/prometheus-grafana.jpg",A="/home-assistant-philips-hue.jpg",q=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"cmoore.io","tagline":"k3s Raspberry Pi 5 cluster with GitOps, AI inference, and home automation"}},"headers":[],"relativePath":"index.md","filePath":"index.md"}'),C={name:"index.md"},I=Object.assign(C,{setup(P){return f(()=>{const r="kubectl get nodes",a=`NAME    STATUS   ROLES                  VERSION
rpi1    Ready    control-plane,master   v1.31.2+k3s1
rpi2    Ready    control-plane,master   v1.31.2+k3s1
rpi3    Ready    control-plane,master   v1.31.2+k3s1
rpi4    Ready    <none>                 v1.31.2+k3s1
rpi5    Ready    <none>                 v1.31.2+k3s1
rpi6    Ready    <none>                 v1.31.2+k3s1
rpi7    Ready    <none>                 v1.31.2+k3s1
rpi8    Ready    <none>                 v1.31.2+k3s1
aimax   Ready    rocm-inference         v1.31.2+k3s1
thor    Ready    cuda-inference         v1.31.2+k3s1`,o=document.querySelector(".hero-with-terminal"),i=document.querySelector(".VPHero .container");if(o&&i&&window.innerWidth>=960){const t=o.querySelector(".terminal");if(t){const e=t.cloneNode(!0);e.classList.add("hero-terminal-inline"),i.appendChild(e),p(e.querySelector(".typed-text"),e.querySelector(".cursor"),e.querySelector(".terminal-output"),r,a);return}}const c=document.querySelector(".typed-text"),l=document.querySelector(".cursor"),d=document.querySelector(".terminal-output");c&&l&&d&&p(c,l,d,r,a);function p(t,e,y,m,g){let s=0;const u=()=>{s<m.length?(t.textContent+=m[s],s++,setTimeout(u,80+Math.random()*40)):(e.style.display="none",setTimeout(()=>{let n=0;const h=g.split(`
`),v=()=>{n<h.length&&(y.textContent+=h[n]+`
`,n++,setTimeout(v,50))};v()},300))};setTimeout(u,800)}}),(r,a)=>(S(),_("div",null,[...a[0]||(a[0]=[b("",3)])]))}});export{q as __pageData,I as default};
