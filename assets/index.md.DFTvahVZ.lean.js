import{_ as m}from"./chunks/NetworkTopology.6IAbZ366.js";import{v as u,c as h,o as v,j as a,ae as p,G as _}from"./chunks/framework.ulrP7gqJ.js";const g="/raspberry-pi-5.jpg",y="/nvidia-jetson-agx-thor.jpg",f="/ansible-argocd.jpg",T="/kubernetes.jpg",b="/prometheus-grafana.jpg",k="/home-assistant-philips-hue.jpg",R={class:"hero-showcase"},A={class:"showcase-topology"},j=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"cmoore.io","tagline":"k3s Raspberry Pi 5 cluster with GitOps, AI inference, and home automation"}},"headers":[],"relativePath":"index.md","filePath":"index.md"}'),S={name:"index.md"},C=Object.assign(S,{setup(w){return u(()=>{const s="kubectl get nodes",e=`NAME    STATUS   ROLES                  VERSION
rpi1    Ready    control-plane,master   v1.31.2+k3s1
rpi2    Ready    control-plane,master   v1.31.2+k3s1
rpi3    Ready    control-plane,master   v1.31.2+k3s1
rpi4    Ready    <none>                 v1.31.2+k3s1
rpi5    Ready    <none>                 v1.31.2+k3s1
rpi6    Ready    <none>                 v1.31.2+k3s1
rpi7    Ready    <none>                 v1.31.2+k3s1
rpi8    Ready    <none>                 v1.31.2+k3s1
aimax   Ready    rocm-inference         v1.31.2+k3s1
thor    Ready    cuda-inference         v1.31.2+k3s1`,o=document.querySelector(".typed-text"),n=document.querySelector(".cursor"),i=document.querySelector(".terminal-output");if(o&&n&&i){let t=0;const c=()=>{t<s.length?(o.textContent+=s[t],t++,setTimeout(c,80+Math.random()*40)):(n.style.display="none",setTimeout(()=>{let r=0;const d=e.split(`
`),l=()=>{r<d.length&&(i.textContent+=d[r]+`
`,r++,setTimeout(l,50))};l()},300))};setTimeout(c,800)}}),(s,e)=>(v(),h("div",null,[e[1]||(e[1]=a("div",{class:"mobile-nav"},[a("a",{href:"/architecture/"},"Architecture"),a("a",{href:"/components/"},"Software"),a("a",{href:"/hardware/"},"Hardware")],-1)),a("div",R,[e[0]||(e[0]=p("",1)),a("div",A,[_(m)])]),e[2]||(e[2]=p("",1))]))}});export{j as __pageData,C as default};
