import{readFileSync as ur,writeFileSync as De}from"fs";import{dirname as g}from"path";import{exit as Ho}from"process";import{fileURLToPath as h}from"url";import{WaitFor as wr}from"@yangzw/bruce-us/dist/node.js";import Ue from"ora";import{LOCALE_TEXT as po}from"../../constants/i18n/index.js";import{AbsPath as w,ShowMsg as it,ShowTitle as mt}from"../../constants/util/index.js";import{LocaleAnswer as xr}from"../../helpers/answer/index.js";export default async function $o(){mt("locale");const{lang:o}=await xr(),t=Ue(po.doing).start(),r=g(h(import.meta.url)),n=w("../../constants/i18n/index.js",r),s=ur(n,"utf8").replace(/"(.+?)"/g,`"./${o}.js"`);De(n,s,"utf8"),await wr(2e3),t.stop(),it("green",po.done),Ho(1)}