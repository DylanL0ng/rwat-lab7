var Se=Object.defineProperty;var Ie=(e,r,t)=>r in e?Se(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;var te=(e,r,t)=>Ie(e,typeof r!="symbol"?r+"":r,t);(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();var N=function(e,r){return N=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])},N(e,r)};function P(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");N(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}function Ae(e,r,t,n){function o(i){return i instanceof t?i:new t(function(s){s(i)})}return new(t||(t=Promise))(function(i,s){function u(f){try{c(n.next(f))}catch(b){s(b)}}function a(f){try{c(n.throw(f))}catch(b){s(b)}}function c(f){f.done?i(f.value):o(f.value).then(u,a)}c((n=n.apply(e,r||[])).next())})}function le(e,r){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,o,i,s=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return s.next=u(0),s.throw=u(1),s.return=u(2),typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function u(c){return function(f){return a([c,f])}}function a(c){if(n)throw new TypeError("Generator is already executing.");for(;s&&(s=0,c[0]&&(t=0)),t;)try{if(n=1,o&&(i=c[0]&2?o.return:c[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,c[1])).done)return i;switch(o=0,i&&(c=[c[0]&2,i.value]),c[0]){case 0:case 1:i=c;break;case 4:return t.label++,{value:c[1],done:!1};case 5:t.label++,o=c[1],c=[0];continue;case 7:c=t.ops.pop(),t.trys.pop();continue;default:if(i=t.trys,!(i=i.length>0&&i[i.length-1])&&(c[0]===6||c[0]===2)){t=0;continue}if(c[0]===3&&(!i||c[1]>i[0]&&c[1]<i[3])){t.label=c[1];break}if(c[0]===6&&t.label<i[1]){t.label=i[1],i=c;break}if(i&&t.label<i[2]){t.label=i[2],t.ops.push(c);break}i[2]&&t.ops.pop(),t.trys.pop();continue}c=r.call(e,t)}catch(f){c=[6,f],o=0}finally{n=i=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function k(e){var r=typeof Symbol=="function"&&Symbol.iterator,t=r&&e[r],n=0;if(t)return t.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")}function L(e,r){var t=typeof Symbol=="function"&&e[Symbol.iterator];if(!t)return e;var n=t.call(e),o,i=[],s;try{for(;(r===void 0||r-- >0)&&!(o=n.next()).done;)i.push(o.value)}catch(u){s={error:u}}finally{try{o&&!o.done&&(t=n.return)&&t.call(n)}finally{if(s)throw s.error}}return i}function D(e,r,t){if(t||arguments.length===2)for(var n=0,o=r.length,i;n<o;n++)(i||!(n in r))&&(i||(i=Array.prototype.slice.call(r,0,n)),i[n]=r[n]);return e.concat(i||Array.prototype.slice.call(r))}function O(e){return this instanceof O?(this.v=e,this):new O(e)}function Oe(e,r,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=t.apply(e,r||[]),o,i=[];return o=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),u("next"),u("throw"),u("return",s),o[Symbol.asyncIterator]=function(){return this},o;function s(d){return function(y){return Promise.resolve(y).then(d,b)}}function u(d,y){n[d]&&(o[d]=function(p){return new Promise(function(q,T){i.push([d,p,q,T])>1||a(d,p)})},y&&(o[d]=y(o[d])))}function a(d,y){try{c(n[d](y))}catch(p){g(i[0][3],p)}}function c(d){d.value instanceof O?Promise.resolve(d.value.v).then(f,b):g(i[0][2],d)}function f(d){a("next",d)}function b(d){a("throw",d)}function g(d,y){d(y),i.shift(),i.length&&a(i[0][0],i[0][1])}}function Le(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=e[Symbol.asyncIterator],t;return r?r.call(e):(e=typeof k=="function"?k(e):e[Symbol.iterator](),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(i){t[i]=e[i]&&function(s){return new Promise(function(u,a){s=e[i](s),o(u,a,s.done,s.value)})}}function o(i,s,u,a){Promise.resolve(a).then(function(c){i({value:c,done:u})},s)}}function h(e){return typeof e=="function"}function Pe(e){var r=function(n){Error.call(n),n.stack=new Error().stack},t=e(r);return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var $=Pe(function(e){return function(t){e(this),this.message=t?t.length+` errors occurred during unsubscription:
`+t.map(function(n,o){return o+1+") "+n.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=t}});function K(e,r){if(e){var t=e.indexOf(r);0<=t&&e.splice(t,1)}}var B=function(){function e(r){this.initialTeardown=r,this.closed=!1,this._parentage=null,this._finalizers=null}return e.prototype.unsubscribe=function(){var r,t,n,o,i;if(!this.closed){this.closed=!0;var s=this._parentage;if(s)if(this._parentage=null,Array.isArray(s))try{for(var u=k(s),a=u.next();!a.done;a=u.next()){var c=a.value;c.remove(this)}}catch(p){r={error:p}}finally{try{a&&!a.done&&(t=u.return)&&t.call(u)}finally{if(r)throw r.error}}else s.remove(this);var f=this.initialTeardown;if(h(f))try{f()}catch(p){i=p instanceof $?p.errors:[p]}var b=this._finalizers;if(b){this._finalizers=null;try{for(var g=k(b),d=g.next();!d.done;d=g.next()){var y=d.value;try{re(y)}catch(p){i=i??[],p instanceof $?i=D(D([],L(i)),L(p.errors)):i.push(p)}}}catch(p){n={error:p}}finally{try{d&&!d.done&&(o=g.return)&&o.call(g)}finally{if(n)throw n.error}}}if(i)throw new $(i)}},e.prototype.add=function(r){var t;if(r&&r!==this)if(this.closed)re(r);else{if(r instanceof e){if(r.closed||r._hasParent(this))return;r._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(r)}},e.prototype._hasParent=function(r){var t=this._parentage;return t===r||Array.isArray(t)&&t.includes(r)},e.prototype._addParent=function(r){var t=this._parentage;this._parentage=Array.isArray(t)?(t.push(r),t):t?[t,r]:r},e.prototype._removeParent=function(r){var t=this._parentage;t===r?this._parentage=null:Array.isArray(t)&&K(t,r)},e.prototype.remove=function(r){var t=this._finalizers;t&&K(t,r),r instanceof e&&r._removeParent(this)},e.EMPTY=function(){var r=new e;return r.closed=!0,r}(),e}();B.EMPTY;function fe(e){return e instanceof B||e&&"closed"in e&&h(e.remove)&&h(e.add)&&h(e.unsubscribe)}function re(e){h(e)?e():e.unsubscribe()}var de={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},me={setTimeout:function(e,r){for(var t=[],n=2;n<arguments.length;n++)t[n-2]=arguments[n];return setTimeout.apply(void 0,D([e,r],L(t)))},clearTimeout:function(e){var r=me.delegate;return((r==null?void 0:r.clearTimeout)||clearTimeout)(e)},delegate:void 0};function he(e){me.setTimeout(function(){throw e})}function X(){}function Te(e){e()}var z=function(e){P(r,e);function r(t){var n=e.call(this)||this;return n.isStopped=!1,t?(n.destination=t,fe(t)&&t.add(n)):n.destination=Me,n}return r.create=function(t,n,o){return new Q(t,n,o)},r.prototype.next=function(t){this.isStopped||this._next(t)},r.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},r.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},r.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this),this.destination=null)},r.prototype._next=function(t){this.destination.next(t)},r.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},r.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},r}(B),ke=Function.prototype.bind;function H(e,r){return ke.call(e,r)}var De=function(){function e(r){this.partialObserver=r}return e.prototype.next=function(r){var t=this.partialObserver;if(t.next)try{t.next(r)}catch(n){R(n)}},e.prototype.error=function(r){var t=this.partialObserver;if(t.error)try{t.error(r)}catch(n){R(n)}else R(r)},e.prototype.complete=function(){var r=this.partialObserver;if(r.complete)try{r.complete()}catch(t){R(t)}},e}(),Q=function(e){P(r,e);function r(t,n,o){var i=e.call(this)||this,s;if(h(t)||!t)s={next:t??void 0,error:n??void 0,complete:o??void 0};else{var u;i&&de.useDeprecatedNextContext?(u=Object.create(t),u.unsubscribe=function(){return i.unsubscribe()},s={next:t.next&&H(t.next,u),error:t.error&&H(t.error,u),complete:t.complete&&H(t.complete,u)}):s=t}return i.destination=new De(s),i}return r}(z);function R(e){he(e)}function Ce(e){throw e}var Me={closed:!0,next:X,error:Ce,complete:X},Z=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function qe(e){return e}function Re(e){return e.length===0?qe:e.length===1?e[0]:function(t){return e.reduce(function(n,o){return o(n)},t)}}var I=function(){function e(r){r&&(this._subscribe=r)}return e.prototype.lift=function(r){var t=new e;return t.source=this,t.operator=r,t},e.prototype.subscribe=function(r,t,n){var o=this,i=_e(r)?r:new Q(r,t,n);return Te(function(){var s=o,u=s.operator,a=s.source;i.add(u?u.call(i,a):a?o._subscribe(i):o._trySubscribe(i))}),i},e.prototype._trySubscribe=function(r){try{return this._subscribe(r)}catch(t){r.error(t)}},e.prototype.forEach=function(r,t){var n=this;return t=ne(t),new t(function(o,i){var s=new Q({next:function(u){try{r(u)}catch(a){i(a),s.unsubscribe()}},error:i,complete:o});n.subscribe(s)})},e.prototype._subscribe=function(r){var t;return(t=this.source)===null||t===void 0?void 0:t.subscribe(r)},e.prototype[Z]=function(){return this},e.prototype.pipe=function(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];return Re(r)(this)},e.prototype.toPromise=function(r){var t=this;return r=ne(r),new r(function(n,o){var i;t.subscribe(function(s){return i=s},function(s){return o(s)},function(){return n(i)})})},e.create=function(r){return new e(r)},e}();function ne(e){var r;return(r=e??de.Promise)!==null&&r!==void 0?r:Promise}function Ge(e){return e&&h(e.next)&&h(e.error)&&h(e.complete)}function _e(e){return e&&e instanceof z||Ge(e)&&fe(e)}function Ue(e){return h(e==null?void 0:e.lift)}function M(e){return function(r){if(Ue(r))return r.lift(function(t){try{return e(t,this)}catch(n){this.error(n)}});throw new TypeError("Unable to lift unknown Observable type")}}function S(e,r,t,n,o){return new Fe(e,r,t,n,o)}var Fe=function(e){P(r,e);function r(t,n,o,i,s,u){var a=e.call(this,t)||this;return a.onFinalize=s,a.shouldUnsubscribe=u,a._next=n?function(c){try{n(c)}catch(f){t.error(f)}}:e.prototype._next,a._error=i?function(c){try{i(c)}catch(f){t.error(f)}finally{this.unsubscribe()}}:e.prototype._error,a._complete=o?function(){try{o()}catch(c){t.error(c)}finally{this.unsubscribe()}}:e.prototype._complete,a}return r.prototype.unsubscribe=function(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var n=this.closed;e.prototype.unsubscribe.call(this),!n&&((t=this.onFinalize)===null||t===void 0||t.call(this))}},r}(z),je={now:function(){return Date.now()},delegate:void 0},Be=function(e){P(r,e);function r(t,n){return e.call(this)||this}return r.prototype.schedule=function(t,n){return this},r}(B),oe={setInterval:function(e,r){for(var t=[],n=2;n<arguments.length;n++)t[n-2]=arguments[n];return setInterval.apply(void 0,D([e,r],L(t)))},clearInterval:function(e){return clearInterval(e)},delegate:void 0},Ye=function(e){P(r,e);function r(t,n){var o=e.call(this,t,n)||this;return o.scheduler=t,o.work=n,o.pending=!1,o}return r.prototype.schedule=function(t,n){var o;if(n===void 0&&(n=0),this.closed)return this;this.state=t;var i=this.id,s=this.scheduler;return i!=null&&(this.id=this.recycleAsyncId(s,i,n)),this.pending=!0,this.delay=n,this.id=(o=this.id)!==null&&o!==void 0?o:this.requestAsyncId(s,this.id,n),this},r.prototype.requestAsyncId=function(t,n,o){return o===void 0&&(o=0),oe.setInterval(t.flush.bind(t,this),o)},r.prototype.recycleAsyncId=function(t,n,o){if(o===void 0&&(o=0),o!=null&&this.delay===o&&this.pending===!1)return n;n!=null&&oe.clearInterval(n)},r.prototype.execute=function(t,n){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var o=this._execute(t,n);if(o)return o;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},r.prototype._execute=function(t,n){var o=!1,i;try{this.work(t)}catch(s){o=!0,i=s||new Error("Scheduled action threw falsy error")}if(o)return this.unsubscribe(),i},r.prototype.unsubscribe=function(){if(!this.closed){var t=this,n=t.id,o=t.scheduler,i=o.actions;this.work=this.state=this.scheduler=null,this.pending=!1,K(i,this),n!=null&&(this.id=this.recycleAsyncId(o,n,null)),this.delay=null,e.prototype.unsubscribe.call(this)}},r}(Be),ie=function(){function e(r,t){t===void 0&&(t=e.now),this.schedulerActionCtor=r,this.now=t}return e.prototype.schedule=function(r,t,n){return t===void 0&&(t=0),new this.schedulerActionCtor(this,r).schedule(n,t)},e.now=je.now,e}(),Je=function(e){P(r,e);function r(t,n){n===void 0&&(n=ie.now);var o=e.call(this,t,n)||this;return o.actions=[],o._active=!1,o}return r.prototype.flush=function(t){var n=this.actions;if(this._active){n.push(t);return}var o;this._active=!0;do if(o=t.execute(t.state,t.delay))break;while(t=n.shift());if(this._active=!1,o){for(;t=n.shift();)t.unsubscribe();throw o}},r}(ie),$e=new Je(Ye),pe=function(e){return e&&typeof e.length=="number"&&typeof e!="function"};function He(e){return h(e==null?void 0:e.then)}function Ve(e){return h(e[Z])}function Ne(e){return Symbol.asyncIterator&&h(e==null?void 0:e[Symbol.asyncIterator])}function Ke(e){return new TypeError("You provided "+(e!==null&&typeof e=="object"?"an invalid object":"'"+e+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function Xe(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Qe=Xe();function We(e){return h(e==null?void 0:e[Qe])}function ze(e){return Oe(this,arguments,function(){var t,n,o,i;return le(this,function(s){switch(s.label){case 0:t=e.getReader(),s.label=1;case 1:s.trys.push([1,,9,10]),s.label=2;case 2:return[4,O(t.read())];case 3:return n=s.sent(),o=n.value,i=n.done,i?[4,O(void 0)]:[3,5];case 4:return[2,s.sent()];case 5:return[4,O(o)];case 6:return[4,s.sent()];case 7:return s.sent(),[3,2];case 8:return[3,10];case 9:return t.releaseLock(),[7];case 10:return[2]}})})}function Ze(e){return h(e==null?void 0:e.getReader)}function Y(e){if(e instanceof I)return e;if(e!=null){if(Ve(e))return et(e);if(pe(e))return tt(e);if(He(e))return rt(e);if(Ne(e))return ve(e);if(We(e))return nt(e);if(Ze(e))return ot(e)}throw Ke(e)}function et(e){return new I(function(r){var t=e[Z]();if(h(t.subscribe))return t.subscribe(r);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function tt(e){return new I(function(r){for(var t=0;t<e.length&&!r.closed;t++)r.next(e[t]);r.complete()})}function rt(e){return new I(function(r){e.then(function(t){r.closed||(r.next(t),r.complete())},function(t){return r.error(t)}).then(null,he)})}function nt(e){return new I(function(r){var t,n;try{for(var o=k(e),i=o.next();!i.done;i=o.next()){var s=i.value;if(r.next(s),r.closed)return}}catch(u){t={error:u}}finally{try{i&&!i.done&&(n=o.return)&&n.call(o)}finally{if(t)throw t.error}}r.complete()})}function ve(e){return new I(function(r){it(e,r).catch(function(t){return r.error(t)})})}function ot(e){return ve(ze(e))}function it(e,r){var t,n,o,i;return Ae(this,void 0,void 0,function(){var s,u;return le(this,function(a){switch(a.label){case 0:a.trys.push([0,5,6,11]),t=Le(e),a.label=1;case 1:return[4,t.next()];case 2:if(n=a.sent(),!!n.done)return[3,4];if(s=n.value,r.next(s),r.closed)return[2];a.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return u=a.sent(),o={error:u},[3,11];case 6:return a.trys.push([6,,9,10]),n&&!n.done&&(i=t.return)?[4,i.call(t)]:[3,8];case 7:a.sent(),a.label=8;case 8:return[3,10];case 9:if(o)throw o.error;return[7];case 10:return[7];case 11:return r.complete(),[2]}})})}function ee(e,r){return M(function(t,n){var o=0;t.subscribe(S(n,function(i){n.next(e.call(r,i,o++))}))})}var st=Array.isArray;function ct(e,r){return st(r)?e.apply(void 0,D([],L(r))):e(r)}function at(e){return ee(function(r){return ct(e,r)})}function ut(e,r,t,n,o,i,s,u){var a=[],c=0,f=0,b=!1,g=function(){b&&!a.length&&!c&&r.complete()},d=function(p){return c<n?y(p):a.push(p)},y=function(p){c++;var q=!1;Y(t(p,f++)).subscribe(S(r,function(T){r.next(T)},function(){q=!0},void 0,function(){if(q)try{c--;for(var T=function(){var J=a.shift();s||y(J)};a.length&&c<n;)T();g()}catch(J){r.error(J)}}))};return e.subscribe(S(r,d,function(){b=!0,g()})),function(){}}function ye(e,r,t){return t===void 0&&(t=1/0),h(r)?ye(function(n,o){return ee(function(i,s){return r(n,i,o,s)})(Y(e(n,o)))},t):(typeof r=="number"&&(t=r),M(function(n,o){return ut(n,o,e,t)}))}var lt=["addListener","removeListener"],ft=["addEventListener","removeEventListener"],dt=["on","off"];function C(e,r,t,n){if(h(t)&&(n=t,t=void 0),n)return C(e,r,t).pipe(at(n));var o=L(pt(e)?ft.map(function(u){return function(a){return e[u](r,a,t)}}):mt(e)?lt.map(se(e,r)):ht(e)?dt.map(se(e,r)):[],2),i=o[0],s=o[1];if(!i&&pe(e))return ye(function(u){return C(u,r,t)})(Y(e));if(!i)throw new TypeError("Invalid event target");return new I(function(u){var a=function(){for(var c=[],f=0;f<arguments.length;f++)c[f]=arguments[f];return u.next(1<c.length?c:c[0])};return i(a),function(){return s(a)}})}function se(e,r){return function(t){return function(n){return e[t](r,n)}}}function mt(e){return h(e.addListener)&&h(e.removeListener)}function ht(e){return h(e.on)&&h(e.off)}function pt(e){return h(e.addEventListener)&&h(e.removeEventListener)}function be(e,r){return M(function(t,n){var o=0;t.subscribe(S(n,function(i){return e.call(r,i,o++)&&n.next(i)}))})}function vt(e){return M(function(r,t){var n=[];return r.subscribe(S(t,function(o){return n.push(o)},function(){t.next(n),t.complete()})),Y(e).subscribe(S(t,function(){var o=n;n=[],t.next(o)},X)),function(){n=null}})}function yt(e,r){return r===void 0&&(r=$e),M(function(t,n){var o=null,i=null,s=null,u=function(){if(o){o.unsubscribe(),o=null;var c=i;i=null,n.next(c)}};function a(){var c=s+e,f=r.now();if(f<c){o=this.schedule(void 0,c-f),n.add(o);return}u()}t.subscribe(S(n,function(c){i=c,s=r.now(),o||(o=r.schedule(a,e),n.add(o))},function(){u(),n.complete()},void 0,function(){i=o=null}))})}let w,V;const v={add:"a",remove:"r",edit:" ",selectUp:"ArrowUp",selectDown:"ArrowDown",selectLeft:"ArrowLeft",selectRight:"ArrowRight",moveRight:["ArrowLeft","ArrowRight"],moveLeft:["ArrowRight","ArrowLeft"],moveDown:["ArrowUp","ArrowDown"],moveUp:["ArrowDown","ArrowUp"],rotateClockwise:["ArrowLeft","ArrowUp","ArrowRight"],rotateAnticlockwise:["ArrowRight","ArrowUp","ArrowLeft"]};let m={row:0,col:0};const ge=e=>{document.body.classList.contains("keyboard--mode")||document.body.classList.add("keyboard--mode")},bt=C(document,"keydown").pipe(be(e=>["a","r"].includes(e.key)));bt.subscribe(e=>{ge(),e.key===v.add&&St(),e.key===v.remove&&It()});const gt=C(document,"keydown").pipe(be(e=>Object.values(v).includes(e.key)),vt(C(document,"keyup").pipe(yt(150))),ee(e=>e.map(r=>r.key)));gt.subscribe(e=>{ge(),e.length===1?wt(e[0]):e.length===2?Et(e):e.length===3&&xt(e)});const wt=e=>{switch(e){case v.selectUp:x(m.row-1,m.col);break;case v.selectDown:x(m.row+1,m.col);break;case v.selectLeft:x(m.row,m.col-1);break;case v.selectRight:x(m.row,m.col+1);break;case v.edit:Ot(m.row,m.col);break}},Et=e=>{A(e,v.moveRight)?G(m.row,m.col,0,1):A(e,v.moveLeft)?G(m.row,m.col,0,-1):A(e,v.moveDown)?G(m.row,m.col,1,0):A(e,v.moveUp)&&G(m.row,m.col,-1,0)},xt=e=>{A(e,v.rotateClockwise)?ce(m.row,m.col,90):A(e,v.rotateAnticlockwise)&&ce(m.row,m.col,-90)},St=()=>{const{row:e,col:r}=Lt();e!==-1&&r!==-1&&(l.matrix.getGridInPos(e,r).addElement("box"),x(e,r))},It=()=>{const{row:e,col:r}=m;_(e,r)},x=(e,r)=>{e>=0&&e<l.matrix.n&&r>=0&&r<l.matrix.m&&(m={row:e,col:r},At(e,r))},At=(e,r)=>{V&&V.classList.remove("keyboard--outlined");const t=l.matrix.getGridInPos(e,r).grid;t.classList.add("keyboard--outlined"),V=t},Ot=(e,r)=>{const t=l.matrix.getElementInPos(e,r);t&&t.type==="box"&&t.focus()},G=(e,r,t,n)=>{const o=e+t,i=r+n;if(o>=0&&o<l.matrix.n&&i>=0&&i<l.matrix.m){const s=l.matrix.getGridInPos(e,r),u=l.matrix.getGridInPos(o,i);if(s&&u){let a={...s.element},c={...u.element};a&&(a==null?void 0:a.type)!==-1&&_(e,r),c&&(c==null?void 0:c.type)!==-1&&_(o,i),(a==null?void 0:a.type)!==-1&&l.matrix.getGridInPos(o,i).addElement(a.type,a.rotation,a.value),(c==null?void 0:c.type)!==-1&&l.matrix.getGridInPos(e,r).addElement(c.type,c.rotation,c.value),x(o,i)}}},ce=(e,r,t)=>{x(e,r);const n=l.matrix.getElementInPos(e,r);n&&(n.rotation=W(n.rotation+t,360),U(n.element,n.rotation))},Lt=()=>{for(let e=0;e<l.matrix.n;e++)for(let r=0;r<l.matrix.m;r++){let t=l.matrix.getGridInPos(e,r).element;if(t===-1||Object.keys(t).length===0)return{row:e,col:r}}return{row:-1,col:-1}},A=(e,r)=>(e=Array.isArray(e)?e:[],r=Array.isArray(r)?r:[],e.length===r.length&&e.every((t,n)=>t===r[n])),j=class j{constructor(r,t,n){j.matrix=this,this.label=void 0,this.id=void 0,this.n=r,this.m=t,this.matrix=[],this.gridDOMElement=document.querySelector(".grid--board"),this.initGridDOM(),this.createMatrix(n),this.addEventListeners()}initGridDOM(){this.gridDOMElement.style.gridTemplateColumns=`repeat(${this.m}, 1fr)`,this.gridDOMElement.style.gridTemplateRows=`repeat(${this.n}, 1fr)`}createMatrix(r){for(let t=0;t<this.n;t++){this.matrix[t]=[];for(let n=0;n<this.m;n++){const o=this.createGridPosElement(t,n);this.gridDOMElement.appendChild(o),this.matrix[t][n]=new Tt(t,n,o),r&&r[t][n]&&r[t][n].element!==-1&&this.matrix[t][n].addElement(r[t][n].element.type,r[t][n].element.rotation,r[t][n].element.value)}}}createGridPosElement(r,t){const n=document.createElement("div");return n.classList.add("grid--pos"),n.dataset.r=r,n.dataset.c=t,n}addEventListeners(){this.gridDOMElement.addEventListener("dragover",r=>r.preventDefault()),this.gridDOMElement.addEventListener("drop",r=>{const t=r.dataTransfer.getData("text"),n=r.target.closest(".grid--pos"),{r:o,c:i}=n.dataset;this.matrix[o][i].addElement(t)})}getElementInPos(r,t){return this.matrix[r][t].element!==-1?this.matrix[r][t].element:-1}getGridInPos(r,t){return this.matrix[r][t]}};te(j,"matrix");let l=j;class Pt{constructor(r,t,n,o,i){["arrow","box"].includes(r)&&(this.type=r,this.r=t,this.c=n,this.rotation=o,this.value=i,this.element=r==="arrow"?this.createArrowElement(t,n,o):this.createBoxElement(t,n,o,i))}focus(){E&&l.matrix.getElementInPos(this.r,this.c).unfocus(),E=[this.r,this.c],this.element.classList.add("focused"),this.type==="box"&&this.element.querySelector("textarea").focus()}unfocus(){this.element.classList.remove("focused"),E=!1}createBoxElement(r,t,n,o){const i=document.createElement("div");i.classList.add("grid--box--element","grid--element");const s=document.createElement("div"),u=document.createElement("p"),a=document.createElement("textarea");return a.value=this.value||"TEXT",u.textContent=this.value||"TEXT",s.appendChild(u),s.appendChild(a),a.onblur=c=>kt(c,u),i.appendChild(s),l.matrix.getGridInPos(r,t).grid.appendChild(i),U(i,n),i}createArrowElement(r,t,n){const o=document.createElement("div"),i=document.createElement("div");return o.classList.add("grid--arrow--element","grid--element"),i.onmouseleave=s=>Ct(s,r,t),o.appendChild(i),l.matrix.getGridInPos(r,t).grid.appendChild(o),U(i,n),i}}class Tt{constructor(r,t,n){this.r=r,this.c=t,this.element=-1,this.grid=n}addElement(r,t=0,n){if(this.element!==-1&&Object.keys(this.element).length>0)return;const o=new Pt(r,this.r,this.c,t,n);o&&(this.element=o)}}let E=!1;const we=(e,r=e,t)=>{e&&(_t(),new l(e,r,t))},kt=(e,r)=>{const t=e.target.value.trim();r.textContent=t;const[n,o]=E,i=l.matrix.getElementInPos(n,o);i.unfocus(),i.value=t},Dt=(e,r)=>{if(E){const[t,n]=E;l.matrix.getElementInPos(t,n).unfocus()}l.matrix.getElementInPos(e,r).focus()},_=(e,r)=>{const t=l.matrix.getGridInPos(e,r);t!=null&&t.grid&&(t.grid.innerHTML="",l.matrix.matrix[e][r].element=-1)},U=(e,r)=>{e.style.transform=`rotate(${r}deg)`},Ct=(e,r,t)=>{const n=l.matrix.getElementInPos(r,t),o=n.element,i=o.getBoundingClientRect(),{clientX:s,clientY:u}=e;s<i.left+20&&u<i.top+20?n.rotation=W(n.rotation-90,360):s>i.right-20&&u<i.top+20&&(n.rotation=W(n.rotation+90,360)),U(o,n.rotation)},Mt=e=>{let r=JSON.parse(localStorage.getItem("images"));if(!r||!r[e])return F();let t=JSON.parse(r[e]);we(t.n,t.m,t.matrix),l.matrix.id=e,l.matrix.label=t.label},qt=e=>{const r=document.querySelector("#select--image--prompt--template").content.cloneNode(!0),t=r.querySelector('button[value="true"]'),n=r.querySelector('button[value="false"]');document.body.appendChild(r),t.addEventListener("click",o=>{document.querySelector(".select--image--prompt").remove(),Rt(e)}),n.addEventListener("click",o=>{document.querySelector(".select--image--prompt").remove(),F()})},Rt=e=>{const r=document.querySelector("#select--image--prompt--dropdown--template").content.cloneNode(!0);document.body.appendChild(r);const t=document.querySelector(".select--image--dropdown--prompt"),n=t.querySelector("select");n.innerHTML="",Object.entries(e).forEach(([o,i])=>{i=JSON.parse(i),n.innerHTML+=`<option value="${o}">${i.label}</option>`}),t.addEventListener("submit",o=>{t.remove(),o.preventDefault(),Mt(n.value)})},F=()=>{const e=document.querySelector("#create--grid--prompt--template").content.cloneNode(!0);document.body.appendChild(e);const r=document.querySelector(".create--grid--prompt");r.addEventListener("submit",t=>{t.preventDefault();const n=t.target.querySelector("#rows--count"),o=t.target.querySelector("#cols--count"),i=parseInt(n.value),s=parseInt(o.value);!i||!s||(r.remove(),we(i,s))})},Gt=async()=>new Promise(e=>{const r=document.querySelector("#label--image--prompt--template").content.cloneNode(!0);document.body.appendChild(r);const t=document.createElement("div");t.classList.add("prompt--backdrop"),document.body.appendChild(t);const n=document.querySelector(".label--image--prompt");n.addEventListener("submit",o=>{o.preventDefault();const s=n.querySelector("input").value.trim();if(s.length==0)return xe("ERROR: You must enter a label.");n.remove(),t.remove(),e(s)})});let ae=JSON.parse(localStorage.getItem("images"));ae?qt(ae):F();let ue=!1;const _t=()=>{if(ue)return;const e=document.querySelector("#grid--board--template").content.cloneNode(!0);document.body.appendChild(e),document.addEventListener("dblclick",n=>{if(document.body.classList.remove("keyboard--mode"),!E&&n.target.closest(".grid--box--element")){const{r:o,c:i}=n.target.closest(".grid--pos").dataset;Dt(o,i)}}),document.addEventListener("contextmenu",n=>{if(document.body.classList.remove("keyboard--mode"),!E&&n.target.closest(".grid--element")){n.preventDefault();const{r:o,c:i}=n.target.closest(".grid--pos").dataset;_(o,i)}}),document.querySelectorAll(".elements > .element").forEach(n=>{n.draggable=!0}),window.addEventListener("dragstart",n=>{document.body.classList.remove("keyboard--mode"),n.dataTransfer.setData("text/plain",n.target.dataset.type)}),document.querySelector(".save--btn").addEventListener("click",async n=>{let o=JSON.parse(localStorage.getItem("images"));o||(o={});let i=l.matrix.label;i||(i=await Gt()),l.matrix.label=i,o[l.matrix.id||Ee()]=JSON.stringify(l.matrix),localStorage.setItem("images",JSON.stringify(o)),xe("Success: Your image has been saved!","success")}),ue=!0},Ee=()=>`${Date.now()}-${Math.random().toString(36).substr(2,9)}`,W=(e,r)=>(e%r+r)%r,xe=(e,r)=>{w&&w.remove();const t=document.querySelector("#notification--template").content.cloneNode(!0);document.body.appendChild(t),w=document.querySelector(".notification"),w.classList.add(r),w.textContent=e;let n=Ee();w.id=n,setTimeout(()=>{w.id===n&&w.remove(),w=void 0},3e3)};