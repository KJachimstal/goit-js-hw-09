!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t);var r=t("6JpON"),i=document.querySelector('[name="delay"]'),u=document.querySelector('[name="step"]'),a=document.querySelector('[name="amount"]');function l(e,n){return new Promise((function(o,t){var r=Math.random()>.3;setTimeout((function(){r?o({position:e,delay:n}):t({position:e,delay:n})}),n)}))}document.querySelector('[type="submit"]').addEventListener("click",(function(e){if(e.preventDefault(),i.value<0||u.value<0||a.value<0)return void r.Notify.failure("Wprowadź wartości większe lub równe zero!");for(var n=0;n<a.value;n++){var o=n+1,t=Number(i.value)+Number(u.value)*n;l(o,t).then((function(e){var n=e.position,o=e.delay;r.Notify.success("Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;r.Notify.failure("Fulfilled promise ".concat(n," in ").concat(o,"ms"))}))}}))}();
//# sourceMappingURL=03-promises.85e01791.js.map
