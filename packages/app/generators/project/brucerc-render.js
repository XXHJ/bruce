import{readFileSync as ur,writeFileSync as De}from"fs";import{dirname as g}from"path";import{fileURLToPath as h}from"url";import{AbsPath as w}from"../../constants/util/index.js";export default function Se({ext:e="js",frame:s="js",name:r="demo",style:t="scss",useTs:a=!1}={}){const l=g(h(import.meta.url)),m=w(`../../templates/config/brucerc.${e}`,l),f=w(`${r}/brucerc.${e}`),p=ur(m,"utf8");let c="";"js"===e?c=p.replace(/frame: ""/g,`frame: "${s}"`).replace(/style: ""/g,`style: "${t}"`).replace(/useTs: false/g,`useTs: ${a}`):"json"===e?c=p.replace(/"frame": ""/g,`"frame": "${s}"`).replace(/"style": ""/g,`"style": "${t}"`).replace(/"useTs": false/g,`"useTs": ${a}`):"yml"===e&&(c=p.replace(/frame: ""/g,`frame: ${s}`).replace(/style: ""/g,`style: ${t}`).replace(/useTs: FALSE/g,`useTs: ${a.toString().toUpperCase()}`)),De(f,c,"utf8")}