!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,b=Math.min,g=function(){return s.Date.now()};function p(e,t,n){var o,i,f,a,u,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function p(t){var n=o,r=i;return o=i=void 0,l=t,a=e.apply(r,n)}function O(e){return l=e,u=setTimeout(h,t),d?p(e):a}function S(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=f}function h(){var e=g();if(S(e))return w(e);u=setTimeout(h,function(e){var n=t-(e-c);return s?b(n,f-(e-l)):n}(e))}function w(e){return u=void 0,v&&o?p(e):(o=i=void 0,a)}function T(){var e=g(),n=S(e);if(o=arguments,i=this,c=e,n){if(void 0===u)return O(c);if(s)return u=setTimeout(h,t),p(c)}return void 0===u&&(u=setTimeout(h,t)),a}return t=j(t)||0,y(n)&&(d=!!n.leading,f=(s="maxWait"in n)?m(j(n.maxWait)||0,t):f,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==u&&clearTimeout(u),l=0,o=c=i=u=void 0},T.flush=function(){return void 0===u?a:w(g())},T}function y(e){var n=void 0===e?"undefined":t(o)(e);return!!e&&("object"==n||"function"==n)}function j(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(o)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(y(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=y(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var r=a.test(e);return r||u.test(e)?c(e.slice(2),r?2:8):f.test(e)?NaN:+e}n=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:o,maxWait:t,trailing:i})};var O={},S=document.querySelector(".feedback-form");S.addEventListener("input",n((function(e){O[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(O))}),500)),S.addEventListener("submit",(function(e){e.preventDefault(),S.reset(),console.log(O),localStorage.removeItem("feedback-form-state")})),function(){if(localStorage.getItem("feedback-form-state"))for(var e in O=JSON.parse(localStorage.getItem("feedback-form-state")))S.elements[e].value=O[e]}()}();
//# sourceMappingURL=03-feedback.416d7050.js.map
