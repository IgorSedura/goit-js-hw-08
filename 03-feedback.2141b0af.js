function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,s=u||c||Function("return this")(),l=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return s.Date.now()};function g(e,t,n){var r,o,i,a,f,u,c=0,s=!1,l=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function h(e){return c=e,f=setTimeout(T,t),s?b(e):a}function j(e){var n=e-u;return void 0===u||n>=t||n<0||l&&e-c>=i}function T(){var e=v();if(j(e))return w(e);f=setTimeout(T,function(e){var n=t-(e-u);return l?m(n,i-(e-c)):n}(e))}function w(e){return f=void 0,g&&r?b(e):(r=o=void 0,a)}function O(){var e=v(),n=j(e);if(r=arguments,o=this,u=e,n){if(void 0===f)return h(u);if(l)return f=setTimeout(T,t),b(u)}return void 0===f&&(f=setTimeout(T,t)),a}return t=y(t)||0,p(n)&&(s=!!n.leading,i=(l="maxWait"in n)?d(y(n.maxWait)||0,t):i,g="trailing"in n?!!n.trailing:g),O.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=u=o=f=void 0},O.flush=function(){return void 0===f?a:w(v())},O}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:r,maxWait:t,trailing:o})};const b=(e,t)=>{try{const n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}},h=e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},j=e=>{try{localStorage.removeItem(e)}catch(e){console.error("Get state error: ",e.message)}},T=document.querySelector(".feedback-form"),w=e(t)((function(e){const{name:t,value:n}=e.target;O[t]=n,b("feedback-form-state",O)}),500);T.addEventListener("input",w),T.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset();const t=h("feedback-form-state");console.log(t),j("feedback-form-state")})),function(e){const t=h("feedback-form-state");t&&(T.message.value=t.message,T.email.value=t.email)}();const O={};
//# sourceMappingURL=03-feedback.2141b0af.js.map
