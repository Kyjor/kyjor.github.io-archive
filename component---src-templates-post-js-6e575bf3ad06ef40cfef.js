(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"7bG2":function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return p})),n.d(e,"query",(function(){return d}));var r=n("q1tI"),o=n.n(r),i=(n("9eSz"),n("qhky")),a=n("EYWl"),u=n("osSN"),s=n.n(u),c=n("7evw"),l=n("L6ji"),f=n("7oih");function p(t){var e=t.data.post,n={identifier:e.id,title:e.title};return o.a.createElement(o.a.Fragment,null,o.a.createElement(a.a,{title:e.title}),o.a.createElement(f.a,null,o.a.createElement("div",null,o.a.createElement(i.a,null,o.a.createElement("title",null,e.title)),o.a.createElement(l.a,{title:e.title}),o.a.createElement("div",null,o.a.createElement("p",null,e.description),o.a.createElement(s.a,{blocks:e._rawContent})),o.a.createElement("div",null,o.a.createElement(c.DiscussionEmbed,{shortname:"kyjor",config:n})))))}var d="1199954365"},"7evw":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"CommentCount",{enumerable:!0,get:function(){return r.CommentCount}}),Object.defineProperty(e,"CommentEmbed",{enumerable:!0,get:function(){return o.CommentEmbed}}),Object.defineProperty(e,"DiscussionEmbed",{enumerable:!0,get:function(){return i.DiscussionEmbed}}),e.default=void 0;var r=n("UZsz"),o=n("Bp/N"),i=n("HhXV"),a={CommentCount:r.CommentCount,CommentEmbed:o.CommentEmbed,DiscussionEmbed:i.DiscussionEmbed};e.default=a},"7oih":function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var r=n("q1tI"),o=n.n(r),i=n("vOnD"),a=(n("9d8Q"),n("aQU0")),u=n("JwsL"),s=n("85Sb"),c=i.b.div.withConfig({displayName:"Layout__SiteBorderStyles",componentId:"sc-11w67gp-0"})(["max-width:1000px;margin:12rem auto 4rem auto;margin-top:clamp(1rem,2vw,12rem);padding:5px;padding:clamp(5px,1vw,25px);min-width:410px;"]),l=i.b.div.withConfig({displayName:"Layout__ContentStyles",componentId:"sc-11w67gp-1"})(["padding:2rem;"]);function f(t){var e=t.children;return o.a.createElement(o.a.Fragment,null,o.a.createElement(a.a,null),o.a.createElement(c,null,o.a.createElement(l,null,o.a.createElement(s.a,null),e,o.a.createElement(u.a,null))))}},"Bp/N":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.CommentEmbed=void 0;var r=i(n("q1tI")),o=i(n("17x9"));function i(t){return t&&t.__esModule?t:{default:t}}function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=p(t);if(e){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}function f(t,e){return!e||"object"!==a(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var d=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(a,t);var e,n,o,i=l(a);function a(){return u(this,a),i.apply(this,arguments)}return e=a,(n=[{key:"getSrc",value:function(){var t=Number(this.props.commentId).toString(36),e=this.props.showParentComment?"1":"0",n=this.props.showMedia?"1":"0";return"https://embed.disqus.com/p/".concat(t,"?p=").concat(e,"&m=").concat(n)}},{key:"render",value:function(){return r.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0"})}}])&&s(e.prototype,n),o&&s(e,o),a}(r.default.Component);e.CommentEmbed=d,d.defaultProps={showMedia:!0,showParentComment:!0,width:420,height:320},d.propTypes={commentId:o.default.string.isRequired,showMedia:o.default.bool,showParentComment:o.default.bool,width:o.default.number,height:o.default.number}},CoN9:function(t,e,n){"use strict";var r=n("YVoz"),o=n("RT5d");t.exports=function(t,e){var n=e||{useDashedStyles:!1};function i(e,n){return t(e,null,n.children)}return{defaultSerializers:{types:{block:function(e){var n=e.node.style||"normal";return/^h\d/.test(n)?t(n,null,e.children):t("blockquote"===n?"blockquote":"p",null,e.children)},image:function(e){if(!e.node.asset)return null;var n=t("img",{src:o(e)});return e.isInline?n:t("figure",null,n)}},marks:{strong:i.bind(null,"strong"),em:i.bind(null,"em"),code:i.bind(null,"code"),underline:function(e){var r=n.useDashedStyles?{"text-decoration":"underline"}:{textDecoration:"underline"};return t("span",{style:r},e.children)},"strike-through":function(e){return t("del",null,e.children)},link:function(e){return t("a",{href:e.mark.href},e.children)}},list:function(e){var n="bullet"===e.type?"ul":"ol";return t(n,null,e.children)},listItem:function(e){var n=e.node.style&&"normal"!==e.node.style?t(e.serializers.types.block,e,e.children):e.children;return t("li",null,n)},block:function(e){var n=e.node,r=e.serializers,o=e.options,i=e.isInline,a=e.children,u=n._type,s=r.types[u];if(!s)throw new Error('Unknown block type "'.concat(u,'", please specify a serializer for it in the `serializers.types` prop'));return t(s,{node:n,options:o,isInline:i},a)},span:function(e){var n=e.node,r=n.mark,o=n.children,i="string"==typeof r?r:r._type,a=e.serializers.marks[i];return a?t(a,e.node,o):(console.warn('Unknown mark type "'.concat(i,'", please specify a serializer for it in the `serializers.marks` prop')),t(e.serializers.markFallback,null,o))},hardBreak:function(){return t("br")},container:"div",markFallback:"span",text:void 0,empty:""},serializeSpan:function(e,n,o,i){if("\n"===e&&n.hardBreak)return t(n.hardBreak,{key:"hb-".concat(o)});if("string"==typeof e)return n.text?t(n.text,{key:"text-".concat(o)},e):e;var a;e.children&&(a={children:e.children.map((function(t,n){return i.serializeNode(t,n,e.children,!0)}))});var u=r({},e,a);return t(n.span,{key:e._key||"span-".concat(o),node:u,serializers:n})}}}},DCZw:function(t,e,n){"use strict";var r=n("q1tI"),o=(0,n("DEm0").getSerializers)(r.createElement),i=o.defaultSerializers,a=o.serializeSpan;t.exports={serializeSpan:a,serializers:i,renderProps:{nestMarks:!0}}},DEm0:function(t,e,n){t.exports=n("ctZY")},HhXV:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.DiscussionEmbed=void 0;var r=a(n("q1tI")),o=a(n("17x9")),i=n("ZMnY");function a(t){return t&&t.__esModule?t:{default:t}}function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function p(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=h(t);if(e){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}function d(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var m=["preData","preInit","onInit","onReady","afterRender","preReset","onIdentify","beforeComment","onNewComment","onPaginate"],y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(u,t);var e,n,o,a=p(u);function u(){return c(this,u),a.apply(this,arguments)}return e=u,(n=[{key:"componentDidMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"shouldComponentUpdate",value:function(t){return this.props!==t&&(0,i.shallowComparison)(this.props,t)}},{key:"componentDidUpdate",value:function(t){this.props.shortname!==t.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"loadInstance",value:function(){var t=window.document;window&&window.DISQUS&&t.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,i.insertScript)("https://".concat(this.props.shortname,".disqus.com/embed.js"),"dsq-embed-scr",t.body))}},{key:"cleanInstance",value:function(){var t=window.document;(0,i.removeScript)("dsq-embed-scr",t.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var e=t.getElementById("disqus_thread");if(e)for(;e.hasChildNodes();)e.removeChild(e.firstChild)}},{key:"getDisqusConfig",value:function(t){return function(){var e=this;this.page.identifier=t.identifier,this.page.url=t.url,this.page.title=t.title,this.page.category_id=t.categoryID,this.page.remote_auth_s3=t.remoteAuthS3,this.page.api_key=t.apiKey,t.language&&(this.language=t.language),m.forEach((function(n){e.callbacks[n]=[t[n]]}))}}},{key:"render",value:function(){return r.default.createElement("div",s({},this.props,{id:"disqus_thread"}))}}])&&l(e.prototype,n),o&&l(e,o),u}(r.default.Component);e.DiscussionEmbed=y,y.propTypes={shortname:o.default.string.isRequired,config:o.default.shape({identifier:o.default.string,url:o.default.string,title:o.default.string,language:o.default.string,categoryID:o.default.string,remoteAuthS3:o.default.string,apiKey:o.default.string,preData:o.default.func,preInit:o.default.func,onInit:o.default.func,onReady:o.default.func,afterRender:o.default.func,preReset:o.default.func,onIdentify:o.default.func,beforeComment:o.default.func,onNewComment:o.default.func,onPaginate:o.default.func}).isRequired}},L6ji:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("q1tI"),o=n.n(r),i=n("vOnD").b.div.withConfig({displayName:"PageTopper__PageTopperStyles",componentId:"sc-1hisre-0"})(["text-align:center;margin-top:4em;margin-bottom:2em;h1{margin-top:0;margin-bottom:0.67em;}"]);function a(t){var e=t.title;return o.a.createElement(o.a.Fragment,null,o.a.createElement(i,null,o.a.createElement("h1",null,e),o.a.createElement("hr",null)))}},RT5d:function(t,e,n){"use strict";var r=n("pmlw"),o=n("bYjO"),i=n("YVoz"),a=encodeURIComponent,u="You must either:\n  - Pass `projectId` and `dataset` to the block renderer\n  - Materialize images to include the `url` field.\n\nFor more information, see ".concat(r("block-content-image-materializing"));t.exports=function(t){var e=t.node,n=t.options,r=n.projectId,s=n.dataset,c=e.asset;if(!c)throw new Error("Image does not have required `asset` property");if(c.url)return c.url+function(t){var e=t.imageOptions,n=Object.keys(e);if(!n.length)return"";var r=n.map((function(t){return"".concat(a(t),"=").concat(a(e[t]))}));return"?".concat(r.join("&"))}(n);if(!r||!s)throw new Error(u);if(!c._ref)throw new Error("Invalid image reference in block, no `_ref` found on `asset`");return o(i({projectId:r,dataset:s},n.imageOptions||{})).image(e).toString()}},UZsz:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.CommentCount=void 0;var r=a(n("q1tI")),o=a(n("17x9")),i=n("ZMnY");function a(t){return t&&t.__esModule?t:{default:t}}function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=d(t);if(e){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function p(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var h=(0,i.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),m=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(u,t);var e,n,o,a=f(u);function u(){return s(this,u),a.apply(this,arguments)}return e=u,(n=[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(t){return this.props!==t&&(0,i.shallowComparison)(this.props,t)}},{key:"componentDidUpdate",value:function(t){this.props.shortname!==t.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"loadInstance",value:function(){var t=window.document;t.getElementById("dsq-count-scr")?h():(0,i.insertScript)("https://".concat(this.props.shortname,".disqus.com/count.js"),"dsq-count-scr",t.body)}},{key:"cleanInstance",value:function(){var t=window.document.body;(0,i.removeScript)("dsq-count-scr",t),window.DISQUSWIDGETS=void 0}},{key:"render",value:function(){return r.default.createElement("span",{className:"disqus-comment-count","data-disqus-identifier":this.props.config.identifier,"data-disqus-url":this.props.config.url},this.props.children)}}])&&c(e.prototype,n),o&&c(e,o),u}(r.default.Component);e.CommentCount=m,m.propTypes={shortname:o.default.string.isRequired,config:o.default.shape({identifier:o.default.string,url:o.default.string,title:o.default.string}).isRequired}},V1Fd:function(t,e,n){"use strict";var r=n("YVoz"),o=n("ftCV"),i=n("ueIO"),a=n("xM0z"),u=n("cIWD"),s=["projectId","dataset","imageOptions"],c={imageOptions:{}};function l(t){return"block"===t._type&&t.listItem}t.exports=function(t,e,n,f){var p=r({},c,e),d=Array.isArray(p.blocks)?p.blocks:[p.blocks],h=a(d),m=i(h,p.listNestMode),y=u(n,p.serializers||{}),g=s.reduce((function(t,e){var n=p[e];return void 0!==n&&(t[e]=n),t}),{});function v(e,n,r,i){return"list"===(d=e)._type&&d.listItem?(u=(a=e).listItem,s=a.level,c=a._key,p=a.children.map(v),t(y.list,{key:c,level:s,type:u,options:g},p)):l(e)?function(e,n){var r=e._key,i=o(e).map(v);return t(y.listItem,{node:e,serializers:y,index:n,key:r,options:g},i)}(e,function(t,e){for(var n=0,r=0;r<e.length;r++){if(e[r]===t)return n;l(e[r])&&n++}return n}(e,r)):function(t){return"string"==typeof t||t.marks||"span"===t._type}(e)?f(e,y,n,{serializeNode:v}):function(e,n,r){var i=o(e).map((function(t,e,n){return v(t,e,n,!0)})),a={key:e._key||"block-".concat(n),node:e,isInline:r,serializers:y,options:g};return t(y.block,a,i)}(e,n,i);var a,u,s,c,p,d}var b=Boolean(p.renderContainerOnSingleChild),w=m.map(v);if(b||w.length>1){var k=p.className?{className:p.className}:{};return t(y.container,k,w)}return w[0]?w[0]:"function"==typeof y.empty?t(y.empty):y.empty}},ZMnY:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.insertScript=function(t,e,n){var r=window.document.createElement("script");return r.async=!0,r.src=t,r.id=e,n.appendChild(r),r},e.removeScript=function(t,e){var n=window.document.getElementById(t);n&&e.removeChild(n)},e.debounce=function(t,e,n){var r;return function(){var o=this,i=arguments,a=function(){r=null,n||t.apply(o,i)},u=n&&!r;window.clearTimeout(r),r=setTimeout(a,e),u&&t.apply(o,i)}},e.isReactElement=u,e.shallowComparison=function t(e,n){var r,o=function(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(t,e)}(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,i=!0,u=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return i=t.done,t},e:function(t){u=!0,o=t},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw o}}}}(new Set(Object.keys(e),Object.keys(n)));try{for(o.s();!(r=o.n()).done;){var s=r.value;if("object"===i(e[s])){if(t(e[s],n[s]))return!0}else if(e[s]!==n[s]&&!u(e[s]))return!0}}catch(c){o.e(c)}finally{o.f()}return!1};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r};function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function u(t){return!!o.default.isValidElement(t)||!!Array.isArray(t)&&t.some((function(t){return o.default.isValidElement(t)}))}},bYjO:function(t,e,n){t.exports=function(){function t(){return(t=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function n(t){var n=0;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}(t)))return function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=t[Symbol.iterator]()).next.bind(n)}var r="image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";function o(e){if(!e)return null;var n,r;if("string"==typeof e&&/^https?:\/\//.test(""+e))n={asset:{_ref:i(e)}};else if("string"==typeof e)n={asset:{_ref:e}};else if((r=e)&&"string"==typeof r._ref)n={asset:e};else if(function(t){return!!t&&"string"==typeof t._id}(e))n={asset:{_ref:e._id||""}};else if(function(t){var e=t;return!(!e||!e.asset)&&"string"==typeof e.asset.url}(e))n={asset:{_ref:i(e.asset.url)}};else{if("object"!=typeof e.asset)return null;n=e}var o=e;return o.crop&&(n.crop=o.crop),o.hotspot&&(n.hotspot=o.hotspot),function(e){if(e.crop&&e.hotspot)return e;var n=t({},e);return n.crop||(n.crop={left:0,top:0,bottom:0,right:0}),n.hotspot||(n.hotspot={x:.5,y:.5,height:1,width:1}),n}(n)}function i(t){return("image-"+t.split("/").slice(-1)[0]).replace(/\.([a-z]+)$/,"-$1")}var a=[["width","w"],["height","h"],["format","fm"],["download","dl"],["blur","blur"],["sharpen","sharp"],["invert","invert"],["orientation","or"],["minHeight","min-h"],["maxHeight","max-h"],["minWidth","min-w"],["maxWidth","max-w"],["quality","q"],["fit","fit"],["crop","crop"],["saturation","sat"],["auto","auto"],["dpr","dpr"]];function u(e){var n=t({},e||{}),i=n.source;delete n.source;var u=o(i);if(!u)return null;var s=function(t){var e=t.split("-"),n=e[1],o=e[2],i=e[3];if(!n||!o||!i)throw new Error("Malformed asset _ref '"+t+"'. Expected an id like \""+r+'".');var a=o.split("x"),u=+a[0],s=+a[1];if(!isFinite(u)||!isFinite(s))throw new Error("Malformed asset _ref '"+t+"'. Expected an id like \""+r+'".');return{id:n,width:u,height:s,format:i}}(u.asset._ref||u.asset._id||""),c=Math.round(u.crop.left*s.width),l=Math.round(u.crop.top*s.height),f={left:c,top:l,width:Math.round(s.width-u.crop.right*s.width-c),height:Math.round(s.height-u.crop.bottom*s.height-l)},p=u.hotspot.height*s.height/2,d=u.hotspot.width*s.width/2,h=u.hotspot.x*s.width,m=u.hotspot.y*s.height,y={left:h-d,top:m-p,right:h+d,bottom:m+p};return n.rect||n.focalPoint||n.ignoreImageParams||n.crop||(n=t(t({},n),function(t,e){var n,r=e.width,o=e.height;if(!r||!o)return{width:r,height:o,rect:t.crop};var i=t.crop,a=t.hotspot,u=r/o;if(i.width/i.height>u){var s=i.height,c=s*u,l=i.top,f=(a.right-a.left)/2+a.left-c/2;f<i.left?f=i.left:f+c>i.left+i.width&&(f=i.left+i.width-c),n={left:Math.round(f),top:Math.round(l),width:Math.round(c),height:Math.round(s)}}else{var p=i.width,d=p/u,h=i.left,m=(a.bottom-a.top)/2+a.top-d/2;m<i.top?m=i.top:m+d>i.top+i.height&&(m=i.top+i.height-d),n={left:Math.max(0,Math.floor(h)),top:Math.max(0,Math.floor(m)),width:Math.round(p),height:Math.round(d)}}return{width:r,height:o,rect:n}}({crop:f,hotspot:y},n))),function(t){var e=t.baseUrl||"https://cdn.sanity.io",n=t.asset.id+"-"+t.asset.width+"x"+t.asset.height+"."+t.asset.format,r=e+"/images/"+t.projectId+"/"+t.dataset+"/"+n,o=[];if(t.rect){var i=t.rect,u=i.left,s=i.top,c=i.width,l=i.height;(0!==u||0!==s||l!==t.asset.height||c!==t.asset.width)&&o.push("rect="+u+","+s+","+c+","+l)}t.bg&&o.push("bg="+t.bg),t.focalPoint&&(o.push("fp-x="+t.focalPoint.x),o.push("fp-y="+t.focalPoint.y));var f=[t.flipHorizontal&&"h",t.flipVertical&&"v"].filter(Boolean).join("");return f&&o.push("flip="+f),a.forEach((function(e){var n=e[0],r=e[1];void 0!==t[n]?o.push(r+"="+encodeURIComponent(t[n])):void 0!==t[r]&&o.push(r+"="+encodeURIComponent(t[r]))})),0===o.length?r:r+"?"+o.join("&")}(t(t({},n),{},{asset:s}))}var s=["clip","crop","fill","fillmax","max","scale","min"],c=["top","bottom","left","right","center","focalpoint","entropy"],l=["format"];function f(t){for(var e,r=n(a);!(e=r()).done;){var o=e.value,i=o[0],u=o[1];if(t===i||t===u)return i}return t}var p=function(){function e(e,n){this.options=t(e?t({},e.options||{}):{},n||{})}var n=e.prototype;return n.withOptions=function(n){var r=n.baseUrl||this.options.baseUrl,o={baseUrl:r};for(var i in n)n.hasOwnProperty(i)&&(o[f(i)]=n[i]);return new e(this,t({baseUrl:r},o))},n.image=function(t){return this.withOptions({source:t})},n.dataset=function(t){return this.withOptions({dataset:t})},n.projectId=function(t){return this.withOptions({projectId:t})},n.bg=function(t){return this.withOptions({bg:t})},n.dpr=function(t){return this.withOptions({dpr:t})},n.width=function(t){return this.withOptions({width:t})},n.height=function(t){return this.withOptions({height:t})},n.focalPoint=function(t,e){return this.withOptions({focalPoint:{x:t,y:e}})},n.maxWidth=function(t){return this.withOptions({maxWidth:t})},n.minWidth=function(t){return this.withOptions({minWidth:t})},n.maxHeight=function(t){return this.withOptions({maxHeight:t})},n.minHeight=function(t){return this.withOptions({minHeight:t})},n.size=function(t,e){return this.withOptions({width:t,height:e})},n.blur=function(t){return this.withOptions({blur:t})},n.sharpen=function(t){return this.withOptions({sharpen:t})},n.rect=function(t,e,n,r){return this.withOptions({rect:{left:t,top:e,width:n,height:r}})},n.format=function(t){return this.withOptions({format:t})},n.invert=function(t){return this.withOptions({invert:t})},n.orientation=function(t){return this.withOptions({orientation:t})},n.quality=function(t){return this.withOptions({quality:t})},n.forceDownload=function(t){return this.withOptions({download:t})},n.flipHorizontal=function(){return this.withOptions({flipHorizontal:!0})},n.flipVertical=function(){return this.withOptions({flipVertical:!0})},n.ignoreImageParams=function(){return this.withOptions({ignoreImageParams:!0})},n.fit=function(t){if(-1===s.indexOf(t))throw new Error('Invalid fit mode "'+t+'"');return this.withOptions({fit:t})},n.crop=function(t){if(-1===c.indexOf(t))throw new Error('Invalid crop mode "'+t+'"');return this.withOptions({crop:t})},n.saturation=function(t){return this.withOptions({saturation:t})},n.auto=function(t){if(-1===l.indexOf(t))throw new Error('Invalid auto mode "'+t+'"');return this.withOptions({auto:t})},n.url=function(){return u(this.options)},n.toString=function(){return this.url()},e}();return function(t){var e=t;if(function(t){return!!t&&"object"==typeof t.clientConfig}(e)){var n=e.clientConfig,r=n.apiHost,o=n.projectId,i=n.dataset;return new p(null,{baseUrl:(r||"https://api.sanity.io").replace(/^https:\/\/api\./,"https://cdn."),projectId:o,dataset:i})}return new p(null,t)}}()},cIWD:function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=n("YVoz");t.exports=function(t,e){return Object.keys(t).reduce((function(n,i){var a=r(t[i]);return n[i]="function"===a?void 0!==e[i]?e[i]:t[i]:"object"===a?o({},t[i],e[i]):void 0===e[i]?t[i]:e[i],n}),{})}},ctZY:function(t,e,n){"use strict";var r=n("CoN9"),o=n("V1Fd"),i=n("RT5d"),a=n("cIWD");t.exports={blocksToNodes:function(t,e,n,i){if(n)return o(t,e,n,i);var a=r(t);return o(t,e,a.defaultSerializers,a.serializeSpan)},getSerializers:r,getImageUrl:i,mergeSerializers:a}},ftCV:function(t,e,n){"use strict";var r=["strong","em","code","underline","strike-through"];function o(t,e,n){if(!t.marks||0===t.marks.length)return t.marks||[];var r=t.marks.reduce((function(t,r){t[r]=t[r]?t[r]+1:1;for(var o=e+1;o<n.length;o++){var i=n[o];if(!i.marks||!Array.isArray(i.marks)||-1===i.marks.indexOf(r))break;t[r]++}return t}),{}),o=i.bind(null,r);return t.marks.slice().sort(o)}function i(t,e,n){var o=t[e]||0,i=t[n]||0;if(o!==i)return i-o;var a=r.indexOf(e),u=r.indexOf(n);return a!==u?a-u:e<n?-1:e>n?1:0}t.exports=function(t){var e=t.children,n=t.markDefs;if(!e||!e.length)return[];var r=e.map(o),i={_type:"span",children:[]},a=[i];return e.forEach((function(t,e){var o=r[e];if(o){var i=1;if(a.length>1)for(;i<a.length;i++){var u=a[i].markKey,s=o.indexOf(u);if(-1===s)break;o.splice(s,1)}var c,l=function(t){for(var e=t.length-1;e>=0;e--){var n=t[e];if("span"===n._type&&n.children)return n}return}(a=a.slice(0,i));if(o.forEach((function(e){var r={_type:"span",_key:t._key,children:[],mark:n.find((function(t){return t._key===e}))||e,markKey:e};l.children.push(r),a.push(r),l=r})),"span"!==(c=t)._type||"string"!=typeof c.text||!Array.isArray(c.marks)&&void 0!==c.marks)l.children=l.children.concat(t);else{for(var f=t.text.split("\n"),p=f.length;p-- >1;)f.splice(p,0,"\n");l.children=l.children.concat(f)}}else{a[a.length-1].children.push(t)}})),i.children}},osSN:function(t,e,n){"use strict";var r=n("q1tI"),o=n("17x9"),i=n("DEm0"),a=n("DCZw"),u=a.serializers,s=a.serializeSpan,c=a.renderProps,l=i.getImageUrl,f=i.blocksToNodes,p=i.mergeSerializers,d=r.createElement,h=function t(e){var n=p(t.defaultSerializers,e.serializers),r=Object.assign({},c,e,{serializers:n,blocks:e.blocks||[]});return f(d,r,u,s)};h.defaultSerializers=u,h.getImageUrl=l,h.propTypes={className:o.string,renderContainerOnSingleChild:o.bool,projectId:o.string,dataset:o.string,imageOptions:o.object,serializers:o.shape({types:o.object,marks:o.object,list:o.func,listItem:o.func,block:o.func,span:o.func}),blocks:o.oneOfType([o.arrayOf(o.shape({_type:o.string.isRequired})),o.shape({_type:o.string.isRequired})]).isRequired},h.defaultProps={renderContainerOnSingleChild:!1,serializers:{},imageOptions:{}},t.exports=h},pmlw:function(t,e){t.exports=function(t){return"https://docs.sanity.io/help/"+t}},ueIO:function(t,e,n){"use strict";var r=n("YVoz");function o(t){return Boolean(t.listItem)}function i(t,e){return t.level===e.level&&t.listItem===e.listItem}function a(t){return{_type:"list",_key:"".concat(t._key,"-parent"),level:t.level,listItem:t.listItem,children:[t]}}function u(t){return t.children&&t.children[t.children.length-1]}function s(t,e){var n="string"==typeof e.listItem;if("list"===t._type&&t.level===e.level&&n&&t.listItem===e.listItem)return t;var r=u(t);return!!r&&s(r,e)}t.exports=function(t){for(var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"html",c=[],l=0;l<t.length;l++){var f=t[l];if(o(f))if(e)if(i(f,e))e.children.push(f);else if(f.level>e.level){var p=a(f);if("html"===n){var d=u(e),h=r({},d,{children:d.children.concat(p)});e.children[e.children.length-1]=h}else e.children.push(p);e=p}else if(f.level<e.level){var m=s(c[c.length-1],f);if(m){(e=m).children.push(f);continue}e=a(f),c.push(e)}else if(f.listItem===e.listItem)console.warn("Unknown state encountered for block",f),c.push(f);else{var y=s(c[c.length-1],{level:f.level});if(y&&y.listItem===f.listItem){(e=y).children.push(f);continue}e=a(f),c.push(e)}else e=a(f),c.push(e);else c.push(f),e=null}return c}},xM0z:function(t,e,n){"use strict";var r=n("YVoz");function o(t){var e=0,n=t.length;if(0===n)return e;for(var r=0;r<n;r++)e=(e<<5)-e+t.charCodeAt(r),e&=e;return e}t.exports=function(t){return t.map((function(t){return t._key?t:r({_key:(e=t,o(JSON.stringify(e)).toString(36).replace(/[^A-Za-z0-9]/g,""))},t);var e}))}}}]);
//# sourceMappingURL=component---src-templates-post-js-6e575bf3ad06ef40cfef.js.map