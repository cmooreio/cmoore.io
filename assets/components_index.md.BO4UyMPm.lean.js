import{v as c,o as p,c as g,ag as m}from"./chunks/framework.Bv8Pgr5E.js";const b=JSON.parse('{"title":"Software Overview","description":"","frontmatter":{"prev":{"text":"Architecture","link":"/architecture/"},"next":{"text":"Infrastructure","link":"/components/infrastructure"}},"headers":[],"relativePath":"components/index.md","filePath":"components/index.md"}'),u={name:"components/index.md"},v=Object.assign(u,{setup(h){return c(()=>{const e="kubectl get nodes",t=`NAME    STATUS   ROLES                  VERSION
rpi1    Ready    control-plane,master   v1.35.3+k3s1
rpi2    Ready    control-plane,master   v1.35.3+k3s1
rpi3    Ready    control-plane,master   v1.35.3+k3s1
rpi4    Ready    <none>                 v1.35.3+k3s1
rpi5    Ready    <none>                 v1.35.3+k3s1
rpi6    Ready    <none>                 v1.35.3+k3s1
rpi7    Ready    <none>                 v1.35.3+k3s1
rpi8    Ready    <none>                 v1.35.3+k3s1
aimax   Ready    rocm-inference         v1.35.3+k3s1
thor    Ready    cuda-inference         v1.35.3+k3s1`,a=document.querySelector(".typed-text"),o=document.querySelector(".cursor"),s=document.querySelector(".terminal-output");if(a&&o&&s){let r=0;const i=()=>{r<e.length?(a.textContent+=e[r],r++,setTimeout(i,80+Math.random()*40)):(o.style.display="none",setTimeout(()=>{let n=0;const d=t.split(`
`),l=()=>{n<d.length&&(s.textContent+=d[n]+`
`,n++,setTimeout(l,50))};l()},300))};setTimeout(i,800)}}),(e,t)=>(p(),g("div",null,[...t[0]||(t[0]=[m("",15)])]))}});export{b as __pageData,v as default};
