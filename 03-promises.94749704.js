import"./02-timer.26361d63.js";function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},i=t.parcelRequire7bc7;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){r[e]=t},t.parcelRequire7bc7=i),i.register;var n=i("5a6Bh");let l=document.querySelector(".form");l.addEventListener("submit",t=>{t.preventDefault();let o=Number(l.delay.value),r=Number(l.step.value),i=Number(l.amount.value);for(let t=0;t<i;t++){let i=o+t*r;(function(e,t){return new Promise((o,r)=>{setTimeout(()=>{Math.random()>.3?o({position:e,delay:t}):r({position:e,delay:t})},t)})})(t+1,i).then(({position:t,delay:o})=>{e(n).Notify.success(`\u{2705} Fulfilled promise ${t} in ${o}ms`)}).catch(({position:t,delay:o})=>{e(n).Notify.failure(`\u{274C} Rejected promise ${t} in ${o}ms`)})}});
//# sourceMappingURL=03-promises.94749704.js.map
