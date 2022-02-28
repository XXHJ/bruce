#!/usr/bin/env node
import{dirname as g}from"path";import{argv as Vo,exit as Co,version as Ho}from"process";import{fileURLToPath as h}from"url";import{ReadJson as l,WaitFor as wr}from"@yangzw/bruce-us/dist/node.js";import{Command as No}from"commander/esm.mjs";import br from"latest-version";import Oo from"ora";import $o from"semver";import{ACTION_TEXT as D,CMD_TEXT as ho}from"./constants/i18n/index.js";import{ShowMsg as rt}from"./constants/util/index.js";const{eq:Ao,lt:Do}=$o;async function Eo(o=""){const i=Oo(ho.doing).start();await wr(500);const n=(await import(`./scripts/bin/${o}.js`)).default;i.stop(),n()}(async()=>{const o=g(h(import.meta.url)),i=new No,{version:n}=l("./package.json",o),e=await br("@yangzw/bruce-app");Do(Ho,"v16.0.0")?(rt("red",ho.judgeNodeVer),Co(1)):Ao(n,e)?(rt("red",ho.judgeBruceVer),Co(1)):(i.usage("<command> [option]").description(ho.desc).version(ho.version(n),"-v, --version",D.version).helpOption("-h, --help",D.help).addHelpCommand(!1),i.command("build").alias("b").description(D.build).action((()=>Eo("build"))),i.command("init").alias("i").description(D.init).action((()=>Eo("init"))),i.command("locale").alias("l").description(D.locale).action((()=>Eo("locale"))),i.command("new").alias("n").description(D.new).action((()=>Eo("new"))),i.command("remove").alias("r").description(D.remove).action((()=>Eo("remove"))),i.parse(Vo))})();