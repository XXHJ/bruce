import{dirname as g}from"path";import{fileURLToPath as h}from"url";import{AbsPath as w}from"../../constants/util/index.js";export default function me(e={}){const s=g(h(import.meta.url)),o=w("../../node_modules",s),t=w("../../../../node_modules",s);return{resolve:{alias:Object.assign({"@":w("src"),vue:"vue/dist/vue.esm-bundler.js"},e),extensions:[".js",".ts",".jsx",".tsx",".json",".vue"],mainFields:["jsnext:main","module","browser","main"],modules:[w("node_modules"),o,t]},resolveLoader:{modules:[o,t]}}}