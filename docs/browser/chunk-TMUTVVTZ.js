import{B as ee,H as te,K as E,M as g,P as D,R as f,S as h,T as ne,V as re,W as ie,aa as se,f as X,i as H,l as J,la as $,m as U,q as _,w as q,y as Q}from"./chunk-ILFDFWYH.js";var ce=null;function j(){return ce}function cn(n){ce??=n}var oe=class{};var O=new D(""),de=(()=>{class n{historyGo(e){throw new Error("")}static \u0275fac=function(r){return new(r||n)};static \u0275prov=g({token:n,factory:()=>h(xe),providedIn:"platform"})}return n})();var xe=(()=>{class n extends de{_location;_history;_doc=h(O);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return j().getBaseHref(this._doc)}onPopState(e){let r=j().getGlobalEventTarget(this._doc,"window");return r.addEventListener("popstate",e,!1),()=>r.removeEventListener("popstate",e)}onHashChange(e){let r=j().getGlobalEventTarget(this._doc,"window");return r.addEventListener("hashchange",e,!1),()=>r.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,r,i){this._history.pushState(e,r,i)}replaceState(e,r,i){this._history.replaceState(e,r,i)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(r){return new(r||n)};static \u0275prov=g({token:n,factory:()=>new n,providedIn:"platform"})}return n})();function le(n,t){return n?t?n.endsWith("/")?t.startsWith("/")?n+t.slice(1):n+t:t.startsWith("/")?n+t:`${n}/${t}`:n:t}function ae(n){let t=n.search(/#|\?|$/);return n[t-1]==="/"?n.slice(0,t-1)+n.slice(t):n}function F(n){return n&&n[0]!=="?"?`?${n}`:n}var z=(()=>{class n{historyGo(e){throw new Error("")}static \u0275fac=function(r){return new(r||n)};static \u0275prov=g({token:n,factory:()=>h($e),providedIn:"root"})}return n})(),Ue=new D(""),$e=(()=>{class n extends z{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,r){super(),this._platformLocation=e,this._baseHref=r??this._platformLocation.getBaseHrefFromDOM()??h(O).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return le(this._baseHref,e)}path(e=!1){let r=this._platformLocation.pathname+F(this._platformLocation.search),i=this._platformLocation.hash;return i&&e?`${r}${i}`:r}pushState(e,r,i,o){let s=this.prepareExternalUrl(i+F(o));this._platformLocation.pushState(e,r,s)}replaceState(e,r,i,o){let s=this.prepareExternalUrl(i+F(o));this._platformLocation.replaceState(e,r,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(r){return new(r||n)(f(de),f(Ue,8))};static \u0275prov=g({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var je=(()=>{class n{_subject=new H;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let r=this._locationStrategy.getBaseHref();this._basePath=Ge(ae(ue(r))),this._locationStrategy.onPopState(i=>{this._subject.next({url:this.path(!0),pop:!0,state:i.state,type:i.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,r=""){return this.path()==this.normalize(e+F(r))}normalize(e){return n.stripTrailingSlash(Ve(this._basePath,ue(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,r="",i=null){this._locationStrategy.pushState(i,"",e,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+F(r)),i)}replaceState(e,r="",i=null){this._locationStrategy.replaceState(i,"",e,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+F(r)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(r=>{this._notifyUrlChangeListeners(r.url,r.state)}),()=>{let r=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(r,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",r){this._urlChangeListeners.forEach(i=>i(e,r))}subscribe(e,r,i){return this._subject.subscribe({next:e,error:r??void 0,complete:i??void 0})}static normalizeQueryParams=F;static joinWithSlash=le;static stripTrailingSlash=ae;static \u0275fac=function(r){return new(r||n)(f(z))};static \u0275prov=g({token:n,factory:()=>ze(),providedIn:"root"})}return n})();function ze(){return new je(f(z))}function Ve(n,t){if(!n||!t.startsWith(n))return t;let e=t.substring(n.length);return e===""||["/",";","?","#"].includes(e[0])?e:t}function ue(n){return n.replace(/\/index.html$/,"")}function Ge(n){if(new RegExp("^(https?:)?//").test(n)){let[,e]=n.split(/\/\/[^\/]+/);return e}return n}function fe(n,t){t=encodeURIComponent(t);for(let e of n.split(";")){let r=e.indexOf("="),[i,o]=r==-1?[e,""]:[e.slice(0,r),e.slice(r+1)];if(i.trim()===t)return decodeURIComponent(o)}return null}var dn="browser",We="server";function ln(n){return n===We}var M=class{};var R=class{},L=class{},C=class n{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(t){t?typeof t=="string"?this.lazyInit=()=>{this.headers=new Map,t.split(`
`).forEach(e=>{let r=e.indexOf(":");if(r>0){let i=e.slice(0,r),o=e.slice(r+1).trim();this.addHeaderEntry(i,o)}})}:typeof Headers<"u"&&t instanceof Headers?(this.headers=new Map,t.forEach((e,r)=>{this.addHeaderEntry(r,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(t).forEach(([e,r])=>{this.setHeaderEntries(e,r)})}:this.headers=new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();let e=this.headers.get(t.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,e){return this.clone({name:t,value:e,op:"a"})}set(t,e){return this.clone({name:t,value:e,op:"s"})}delete(t,e){return this.clone({name:t,value:e,op:"d"})}maybeSetNormalizedName(t,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,t)}init(){this.lazyInit&&(this.lazyInit instanceof n?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init(),Array.from(t.headers.keys()).forEach(e=>{this.headers.set(e,t.headers.get(e)),this.normalizedNames.set(e,t.normalizedNames.get(e))})}clone(t){let e=new n;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof n?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([t]),e}applyUpdate(t){let e=t.name.toLowerCase();switch(t.op){case"a":case"s":let r=t.value;if(typeof r=="string"&&(r=[r]),r.length===0)return;this.maybeSetNormalizedName(t.name,e);let i=(t.op==="a"?this.headers.get(e):void 0)||[];i.push(...r),this.headers.set(e,i);break;case"d":let o=t.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let s=this.headers.get(e);if(!s)return;s=s.filter(d=>o.indexOf(d)===-1),s.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,s)}break}}addHeaderEntry(t,e){let r=t.toLowerCase();this.maybeSetNormalizedName(t,r),this.headers.has(r)?this.headers.get(r).push(e):this.headers.set(r,[e])}setHeaderEntries(t,e){let r=(Array.isArray(e)?e:[e]).map(o=>o.toString()),i=t.toLowerCase();this.headers.set(i,r),this.maybeSetNormalizedName(t,i)}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>t(this.normalizedNames.get(e),this.headers.get(e)))}};var G=class{encodeKey(t){return he(t)}encodeValue(t){return he(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}};function Ze(n,t){let e=new Map;return n.length>0&&n.replace(/^\?/,"").split("&").forEach(i=>{let o=i.indexOf("="),[s,d]=o==-1?[t.decodeKey(i),""]:[t.decodeKey(i.slice(0,o)),t.decodeValue(i.slice(o+1))],a=e.get(s)||[];a.push(d),e.set(s,a)}),e}var Ke=/%(\d[a-f0-9])/gi,Xe={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function he(n){return encodeURIComponent(n).replace(Ke,(t,e)=>Xe[e]??t)}function P(n){return`${n}`}var w=class n{map;encoder;updates=null;cloneFrom=null;constructor(t={}){if(this.encoder=t.encoder||new G,t.fromString){if(t.fromObject)throw new E(2805,!1);this.map=Ze(t.fromString,this.encoder)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(e=>{let r=t.fromObject[e],i=Array.isArray(r)?r.map(P):[P(r)];this.map.set(e,i)})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();let e=this.map.get(t);return e?e[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,e){return this.clone({param:t,value:e,op:"a"})}appendAll(t){let e=[];return Object.keys(t).forEach(r=>{let i=t[r];Array.isArray(i)?i.forEach(o=>{e.push({param:r,value:o,op:"a"})}):e.push({param:r,value:i,op:"a"})}),this.clone(e)}set(t,e){return this.clone({param:t,value:e,op:"s"})}delete(t,e){return this.clone({param:t,value:e,op:"d"})}toString(){return this.init(),this.keys().map(t=>{let e=this.encoder.encodeKey(t);return this.map.get(t).map(r=>e+"="+this.encoder.encodeValue(r)).join("&")}).filter(t=>t!=="").join("&")}clone(t){let e=new n({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(t),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(t=>this.map.set(t,this.cloneFrom.map.get(t))),this.updates.forEach(t=>{switch(t.op){case"a":case"s":let e=(t.op==="a"?this.map.get(t.param):void 0)||[];e.push(P(t.value)),this.map.set(t.param,e);break;case"d":if(t.value!==void 0){let r=this.map.get(t.param)||[],i=r.indexOf(P(t.value));i!==-1&&r.splice(i,1),r.length>0?this.map.set(t.param,r):this.map.delete(t.param)}else{this.map.delete(t.param);break}}}),this.cloneFrom=this.updates=null)}};var W=class{map=new Map;set(t,e){return this.map.set(t,e),this}get(t){return this.map.has(t)||this.map.set(t,t.defaultValue()),this.map.get(t)}delete(t){return this.map.delete(t),this}has(t){return this.map.has(t)}keys(){return this.map.keys()}};function He(n){switch(n){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function ge(n){return typeof ArrayBuffer<"u"&&n instanceof ArrayBuffer}function pe(n){return typeof Blob<"u"&&n instanceof Blob}function De(n){return typeof FormData<"u"&&n instanceof FormData}function Je(n){return typeof URLSearchParams<"u"&&n instanceof URLSearchParams}var me="Content-Type",ye="Accept",Fe="X-Request-URL",Ce="text/plain",Ae="application/json",qe=`${Ae}, ${Ce}, */*`,S=class n{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;responseType="json";method;params;urlWithParams;transferCache;constructor(t,e,r,i){this.url=e,this.method=t.toUpperCase();let o;if(He(this.method)||i?(this.body=r!==void 0?r:null,o=i):o=r,o&&(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),this.transferCache=o.transferCache),this.headers??=new C,this.context??=new W,!this.params)this.params=new w,this.urlWithParams=e;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=e;else{let d=e.indexOf("?"),a=d===-1?"?":d<e.length-1?"&":"";this.urlWithParams=e+a+s}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||ge(this.body)||pe(this.body)||De(this.body)||Je(this.body)?this.body:this.body instanceof w?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||De(this.body)?null:pe(this.body)?this.body.type||null:ge(this.body)?null:typeof this.body=="string"?Ce:this.body instanceof w?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?Ae:null}clone(t={}){let e=t.method||this.method,r=t.url||this.url,i=t.responseType||this.responseType,o=t.transferCache??this.transferCache,s=t.body!==void 0?t.body:this.body,d=t.withCredentials??this.withCredentials,a=t.reportProgress??this.reportProgress,p=t.headers||this.headers,A=t.params||this.params,m=t.context??this.context;return t.setHeaders!==void 0&&(p=Object.keys(t.setHeaders).reduce((b,y)=>b.set(y,t.setHeaders[y]),p)),t.setParams&&(A=Object.keys(t.setParams).reduce((b,y)=>b.set(y,t.setParams[y]),A)),new n(e,r,s,{params:A,headers:p,context:m,reportProgress:a,responseType:i,withCredentials:d,transferCache:o})}},T=function(n){return n[n.Sent=0]="Sent",n[n.UploadProgress=1]="UploadProgress",n[n.ResponseHeader=2]="ResponseHeader",n[n.DownloadProgress=3]="DownloadProgress",n[n.Response=4]="Response",n[n.User=5]="User",n}(T||{}),I=class{headers;status;statusText;url;ok;type;constructor(t,e=200,r="OK"){this.headers=t.headers||new C,this.status=t.status!==void 0?t.status:e,this.statusText=t.statusText||r,this.url=t.url||null,this.ok=this.status>=200&&this.status<300}},Y=class n extends I{constructor(t={}){super(t)}type=T.ResponseHeader;clone(t={}){return new n({headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}},N=class n extends I{body;constructor(t={}){super(t),this.body=t.body!==void 0?t.body:null}type=T.Response;clone(t={}){return new n({body:t.body!==void 0?t.body:this.body,headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}},B=class extends I{name="HttpErrorResponse";message;error;ok=!1;constructor(t){super(t,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${t.url||"(unknown url)"}`:this.message=`Http failure response for ${t.url||"(unknown url)"}: ${t.status} ${t.statusText}`,this.error=t.error||null}},Qe=200,et=204;function V(n,t){return{body:t,headers:n.headers,context:n.context,observe:n.observe,params:n.params,reportProgress:n.reportProgress,responseType:n.responseType,withCredentials:n.withCredentials,transferCache:n.transferCache}}var tt=(()=>{class n{handler;constructor(e){this.handler=e}request(e,r,i={}){let o;if(e instanceof S)o=e;else{let a;i.headers instanceof C?a=i.headers:a=new C(i.headers);let p;i.params&&(i.params instanceof w?p=i.params:p=new w({fromObject:i.params})),o=new S(e,r,i.body!==void 0?i.body:null,{headers:a,context:i.context,params:p,reportProgress:i.reportProgress,responseType:i.responseType||"json",withCredentials:i.withCredentials,transferCache:i.transferCache})}let s=U(o).pipe(Q(a=>this.handler.handle(a)));if(e instanceof S||i.observe==="events")return s;let d=s.pipe(q(a=>a instanceof N));switch(i.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return d.pipe(_(a=>{if(a.body!==null&&!(a.body instanceof ArrayBuffer))throw new E(2806,!1);return a.body}));case"blob":return d.pipe(_(a=>{if(a.body!==null&&!(a.body instanceof Blob))throw new E(2807,!1);return a.body}));case"text":return d.pipe(_(a=>{if(a.body!==null&&typeof a.body!="string")throw new E(2808,!1);return a.body}));case"json":default:return d.pipe(_(a=>a.body))}case"response":return d;default:throw new E(2809,!1)}}delete(e,r={}){return this.request("DELETE",e,r)}get(e,r={}){return this.request("GET",e,r)}head(e,r={}){return this.request("HEAD",e,r)}jsonp(e,r){return this.request("JSONP",e,{params:new w().append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,r={}){return this.request("OPTIONS",e,r)}patch(e,r,i={}){return this.request("PATCH",e,V(i,r))}post(e,r,i={}){return this.request("POST",e,V(i,r))}put(e,r,i={}){return this.request("PUT",e,V(i,r))}static \u0275fac=function(r){return new(r||n)(f(R))};static \u0275prov=g({token:n,factory:n.\u0275fac})}return n})();var nt=new D("");function rt(n,t){return t(n)}function it(n,t,e){return(r,i)=>ie(e,()=>t(r,o=>n(o,i)))}var be=new D(""),st=new D(""),ot=new D("",{providedIn:"root",factory:()=>!0});var Ee=(()=>{class n extends R{backend;injector;chain=null;pendingTasks=h(se);contributeToStability=h(ot);constructor(e,r){super(),this.backend=e,this.injector=r}handle(e){if(this.chain===null){let r=Array.from(new Set([...this.injector.get(be),...this.injector.get(st,[])]));this.chain=r.reduceRight((i,o)=>it(i,o,this.injector),rt)}if(this.contributeToStability){let r=this.pendingTasks.add();return this.chain(e,i=>this.backend.handle(i)).pipe(ee(()=>this.pendingTasks.remove(r)))}else return this.chain(e,r=>this.backend.handle(r))}static \u0275fac=function(r){return new(r||n)(f(L),f(re))};static \u0275prov=g({token:n,factory:n.\u0275fac})}return n})();var at=/^\)\]\}',?\n/,ut=RegExp(`^${Fe}:`,"m");function ct(n){return"responseURL"in n&&n.responseURL?n.responseURL:ut.test(n.getAllResponseHeaders())?n.getResponseHeader(Fe):null}var we=(()=>{class n{xhrFactory;constructor(e){this.xhrFactory=e}handle(e){if(e.method==="JSONP")throw new E(-2800,!1);let r=this.xhrFactory;return(r.\u0275loadImpl?J(r.\u0275loadImpl()):U(null)).pipe(te(()=>new X(o=>{let s=r.build();if(s.open(e.method,e.urlWithParams),e.withCredentials&&(s.withCredentials=!0),e.headers.forEach((u,c)=>s.setRequestHeader(u,c.join(","))),e.headers.has(ye)||s.setRequestHeader(ye,qe),!e.headers.has(me)){let u=e.detectContentTypeHeader();u!==null&&s.setRequestHeader(me,u)}if(e.responseType){let u=e.responseType.toLowerCase();s.responseType=u!=="json"?u:"text"}let d=e.serializeBody(),a=null,p=()=>{if(a!==null)return a;let u=s.statusText||"OK",c=new C(s.getAllResponseHeaders()),v=ct(s)||e.url;return a=new Y({headers:c,status:s.status,statusText:u,url:v}),a},A=()=>{let{headers:u,status:c,statusText:v,url:K}=p(),l=null;c!==et&&(l=typeof s.response>"u"?s.responseText:s.response),c===0&&(c=l?Qe:0);let x=c>=200&&c<300;if(e.responseType==="json"&&typeof l=="string"){let Te=l;l=l.replace(at,"");try{l=l!==""?JSON.parse(l):null}catch(_e){l=Te,x&&(x=!1,l={error:_e,text:l})}}x?(o.next(new N({body:l,headers:u,status:c,statusText:v,url:K||void 0})),o.complete()):o.error(new B({error:l,headers:u,status:c,statusText:v,url:K||void 0}))},m=u=>{let{url:c}=p(),v=new B({error:u,status:s.status||0,statusText:s.statusText||"Unknown Error",url:c||void 0});o.error(v)},b=!1,y=u=>{b||(o.next(p()),b=!0);let c={type:T.DownloadProgress,loaded:u.loaded};u.lengthComputable&&(c.total=u.total),e.responseType==="text"&&s.responseText&&(c.partialText=s.responseText),o.next(c)},Z=u=>{let c={type:T.UploadProgress,loaded:u.loaded};u.lengthComputable&&(c.total=u.total),o.next(c)};return s.addEventListener("load",A),s.addEventListener("error",m),s.addEventListener("timeout",m),s.addEventListener("abort",m),e.reportProgress&&(s.addEventListener("progress",y),d!==null&&s.upload&&s.upload.addEventListener("progress",Z)),s.send(d),o.next({type:T.Sent}),()=>{s.removeEventListener("error",m),s.removeEventListener("abort",m),s.removeEventListener("load",A),s.removeEventListener("timeout",m),e.reportProgress&&(s.removeEventListener("progress",y),d!==null&&s.upload&&s.upload.removeEventListener("progress",Z)),s.readyState!==s.DONE&&s.abort()}})))}static \u0275fac=function(r){return new(r||n)(f(M))};static \u0275prov=g({token:n,factory:n.\u0275fac})}return n})(),ve=new D(""),dt="XSRF-TOKEN",lt=new D("",{providedIn:"root",factory:()=>dt}),ft="X-XSRF-TOKEN",ht=new D("",{providedIn:"root",factory:()=>ft}),k=class{},gt=(()=>{class n{doc;platform;cookieName;lastCookieString="";lastToken=null;parseCount=0;constructor(e,r,i){this.doc=e,this.platform=r,this.cookieName=i}getToken(){if(this.platform==="server")return null;let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=fe(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(r){return new(r||n)(f(O),f($),f(lt))};static \u0275prov=g({token:n,factory:n.\u0275fac})}return n})();function pt(n,t){let e=n.url.toLowerCase();if(!h(ve)||n.method==="GET"||n.method==="HEAD"||e.startsWith("http://")||e.startsWith("https://"))return t(n);let r=h(k).getToken(),i=h(ht);return r!=null&&!n.headers.has(i)&&(n=n.clone({headers:n.headers.set(i,r)})),t(n)}function In(...n){let t=[tt,we,Ee,{provide:R,useExisting:Ee},{provide:L,useFactory:()=>h(nt,{optional:!0})??h(we)},{provide:be,useValue:pt,multi:!0},{provide:ve,useValue:!0},{provide:k,useClass:gt}];for(let e of n)t.push(...e.\u0275providers);return ne(t)}export{j as a,cn as b,oe as c,O as d,z as e,je as f,fe as g,dn as h,ln as i,M as j,C as k,tt as l,In as m};
