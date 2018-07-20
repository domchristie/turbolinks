/*
Turbolinks 5.1.1
Copyright © 2018 Basecamp, LLC
 */
(function(){var t=this;(function(){(function(){this.Turbolinks={supported:function(){return null!=window.history.pushState&&null!=window.requestAnimationFrame&&null!=window.addEventListener}(),visit:function(t,n){return e.controller.visit(t,n)},clearCache:function(){return e.controller.clearCache()},setProgressBarDelay:function(t){return e.controller.setProgressBarDelay(t)}}}).call(this)}).call(t);var e=t.Turbolinks;(function(){(function(){var t,n,r,o=[].slice;e.copyObject=function(t){var e,n,r;n={};for(e in t)r=t[e],n[e]=r;return n},e.closest=function(e,n){return t.call(e,n)},t=function(){var t,e;return t=document.documentElement,null!=(e=t.closest)?e:function(t){var e;for(e=this;e;){if(e.nodeType===Node.ELEMENT_NODE&&n.call(e,t))return e;e=e.parentNode}}}(),e.defer=function(t){return setTimeout(t,1)},e.throttle=function(t){var e;return e=null,function(){var n;return n=1<=arguments.length?o.call(arguments,0):[],null!=e?e:e=requestAnimationFrame(function(r){return function(){return e=null,t.apply(r,n)}}(this))}},e.dispatch=function(t,e){var n,o,i,s,a,u;return a=null!=e?e:{},u=a.target,n=a.cancelable,o=a.data,i=document.createEvent("Events"),i.initEvent(t,!0,n===!0),i.data=null!=o?o:{},i.cancelable&&!r&&(s=i.preventDefault,i.preventDefault=function(){return this.defaultPrevented||Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}}),s.call(this)}),(null!=u?u:document).dispatchEvent(i),i},r=function(){var t;return t=document.createEvent("Events"),t.initEvent("test",!0,!0),t.preventDefault(),t.defaultPrevented}(),e.match=function(t,e){return n.call(t,e)},n=function(){var t,e,n,r;return t=document.documentElement,null!=(e=null!=(n=null!=(r=t.matchesSelector)?r:t.webkitMatchesSelector)?n:t.msMatchesSelector)?e:t.mozMatchesSelector}(),e.uuid=function(){var t,e,n;for(n="",t=e=1;36>=e;t=++e)n+=9===t||14===t||19===t||24===t?"-":15===t?"4":20===t?(Math.floor(4*Math.random())+8).toString(16):Math.floor(15*Math.random()).toString(16);return n}}).call(this),function(){e.Location=function(){function t(t){var e,n,r;null==t&&(t=""),e=document.createElement("a"),e.href=t.toString(),this.absoluteURL=e.href,this.anchor=null!=(n=null!=(r=this.absoluteURL.match(/#(.*)$/))?r[1]:void 0)?n:null,this.requestURL=null!=this.anchor?this.absoluteURL.slice(0,-(this.anchor.length+1)):this.absoluteURL}var e,n,r,o;return t.wrap=function(t){return t instanceof this?t:new this(t)},t.prototype.getOrigin=function(){return this.absoluteURL.split("/",3).join("/")},t.prototype.getPath=function(){var t,e;return null!=(t=null!=(e=this.requestURL.match(/\/\/[^\/]*(\/[^?;]*)/))?e[1]:void 0)?t:"/"},t.prototype.getPathComponents=function(){return this.getPath().split("/").slice(1)},t.prototype.getLastPathComponent=function(){return this.getPathComponents().slice(-1)[0]},t.prototype.getExtension=function(){var t,e;return null!=(t=null!=(e=this.getLastPathComponent().match(/\.[^.]*$/))?e[0]:void 0)?t:""},t.prototype.isHTML=function(){return this.getExtension().match(/^(?:|\.(?:htm|html|xhtml))$/)},t.prototype.isPrefixedBy=function(t){var e;return e=n(t),this.isEqualTo(t)||o(this.absoluteURL,e)},t.prototype.isEqualTo=function(t){return this.absoluteURL===(null!=t?t.absoluteURL:void 0)},t.prototype.toCacheKey=function(){return this.requestURL},t.prototype.toJSON=function(){return this.absoluteURL},t.prototype.toString=function(){return this.absoluteURL},t.prototype.valueOf=function(){return this.absoluteURL},n=function(t){return e(t.getOrigin()+t.getPath())},e=function(t){return r(t,"/")?t:t+"/"},o=function(t,e){return t.slice(0,e.length)===e},r=function(t,e){return t.slice(-e.length)===e},t}()}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};e.HttpRequest=function(){function n(n,r,o){this.delegate=n,this.requestCanceled=t(this.requestCanceled,this),this.requestTimedOut=t(this.requestTimedOut,this),this.requestFailed=t(this.requestFailed,this),this.requestLoaded=t(this.requestLoaded,this),this.requestProgressed=t(this.requestProgressed,this),this.url=e.Location.wrap(r).requestURL,this.referrer=e.Location.wrap(o).absoluteURL,this.createXHR()}return n.NETWORK_FAILURE=0,n.TIMEOUT_FAILURE=-1,n.timeout=60,n.prototype.send=function(){var t;return this.xhr&&!this.sent?(this.notifyApplicationBeforeRequestStart(),this.setProgress(0),this.xhr.send(),this.sent=!0,"function"==typeof(t=this.delegate).requestStarted?t.requestStarted():void 0):void 0},n.prototype.cancel=function(){return this.xhr&&this.sent?this.xhr.abort():void 0},n.prototype.requestProgressed=function(t){return t.lengthComputable?this.setProgress(t.loaded/t.total):void 0},n.prototype.requestLoaded=function(){return this.endRequest(function(t){return function(){var e;return 200<=(e=t.xhr.status)&&300>e?t.delegate.requestCompletedWithResponse(t.xhr.responseText,t.xhr.getResponseHeader("Turbolinks-Location")):(t.failed=!0,t.delegate.requestFailedWithStatusCode(t.xhr.status,t.xhr.responseText))}}(this))},n.prototype.requestFailed=function(){return this.endRequest(function(t){return function(){return t.failed=!0,t.delegate.requestFailedWithStatusCode(t.constructor.NETWORK_FAILURE)}}(this))},n.prototype.requestTimedOut=function(){return this.endRequest(function(t){return function(){return t.failed=!0,t.delegate.requestFailedWithStatusCode(t.constructor.TIMEOUT_FAILURE)}}(this))},n.prototype.requestCanceled=function(){return this.endRequest()},n.prototype.notifyApplicationBeforeRequestStart=function(){return e.dispatch("turbolinks:request-start",{data:{url:this.url,xhr:this.xhr}})},n.prototype.notifyApplicationAfterRequestEnd=function(){return e.dispatch("turbolinks:request-end",{data:{url:this.url,xhr:this.xhr}})},n.prototype.createXHR=function(){return this.xhr=new XMLHttpRequest,this.xhr.open("GET",this.url,!0),this.xhr.timeout=1e3*this.constructor.timeout,this.xhr.setRequestHeader("Accept","text/html, application/xhtml+xml"),this.xhr.setRequestHeader("Turbolinks-Referrer",this.referrer),this.xhr.onprogress=this.requestProgressed,this.xhr.onload=this.requestLoaded,this.xhr.onerror=this.requestFailed,this.xhr.ontimeout=this.requestTimedOut,this.xhr.onabort=this.requestCanceled},n.prototype.endRequest=function(t){return this.xhr?(this.notifyApplicationAfterRequestEnd(),null!=t&&t.call(this),this.destroy()):void 0},n.prototype.setProgress=function(t){var e;return this.progress=t,"function"==typeof(e=this.delegate).requestProgressed?e.requestProgressed(this.progress):void 0},n.prototype.destroy=function(){var t;return this.setProgress(1),"function"==typeof(t=this.delegate).requestFinished&&t.requestFinished(),this.delegate=null,this.xhr=null},n}()}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};e.ProgressBar=function(){function e(){this.trickle=t(this.trickle,this),this.stylesheetElement=this.createStylesheetElement(),this.progressElement=this.createProgressElement()}var n;return n=300,e.defaultCSS=".turbolinks-progress-bar {\n  position: fixed;\n  display: block;\n  top: 0;\n  left: 0;\n  height: 3px;\n  background: #0076ff;\n  z-index: 9999;\n  transition: width "+n+"ms ease-out, opacity "+n/2+"ms "+n/2+"ms ease-in;\n  transform: translate3d(0, 0, 0);\n}",e.prototype.show=function(){return this.visible?void 0:(this.visible=!0,this.installStylesheetElement(),this.installProgressElement(),this.startTrickling())},e.prototype.hide=function(){return this.visible&&!this.hiding?(this.hiding=!0,this.fadeProgressElement(function(t){return function(){return t.uninstallProgressElement(),t.stopTrickling(),t.visible=!1,t.hiding=!1}}(this))):void 0},e.prototype.setValue=function(t){return this.value=t,this.refresh()},e.prototype.installStylesheetElement=function(){return document.head.insertBefore(this.stylesheetElement,document.head.firstChild)},e.prototype.installProgressElement=function(){return this.progressElement.style.width=0,this.progressElement.style.opacity=1,document.documentElement.insertBefore(this.progressElement,document.body),this.refresh()},e.prototype.fadeProgressElement=function(t){return this.progressElement.style.opacity=0,setTimeout(t,1.5*n)},e.prototype.uninstallProgressElement=function(){return this.progressElement.parentNode?document.documentElement.removeChild(this.progressElement):void 0},e.prototype.startTrickling=function(){return null!=this.trickleInterval?this.trickleInterval:this.trickleInterval=setInterval(this.trickle,n)},e.prototype.stopTrickling=function(){return clearInterval(this.trickleInterval),this.trickleInterval=null},e.prototype.trickle=function(){return this.setValue(this.value+Math.random()/100)},e.prototype.refresh=function(){return requestAnimationFrame(function(t){return function(){return t.progressElement.style.width=10+90*t.value+"%"}}(this))},e.prototype.createStylesheetElement=function(){var t;return t=document.createElement("style"),t.type="text/css",t.textContent=this.constructor.defaultCSS,t},e.prototype.createProgressElement=function(){var t;return t=document.createElement("div"),t.className="turbolinks-progress-bar",t},e}()}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};e.BrowserAdapter=function(){function n(n){this.controller=n,this.showProgressBar=t(this.showProgressBar,this),this.progressBar=new e.ProgressBar}var r,o,i;return i=e.HttpRequest,r=i.NETWORK_FAILURE,o=i.TIMEOUT_FAILURE,n.prototype.visitProposedToLocationWithAction=function(t,e){return this.controller.startVisitToLocationWithAction(t,e)},n.prototype.visitStarted=function(t){return t.issueRequest(),t.changeHistory(),t.goToSamePageAnchor(),t.loadCachedSnapshot()},n.prototype.visitRequestStarted=function(t){return this.progressBar.setValue(0),t.hasCachedSnapshot()||"restore"!==t.action?this.showProgressBarAfterDelay():this.showProgressBar()},n.prototype.visitRequestProgressed=function(t){return this.progressBar.setValue(t.progress)},n.prototype.visitRequestCompleted=function(t){return t.loadResponse()},n.prototype.visitRequestFailedWithStatusCode=function(t,e){switch(e){case r:case o:return this.reload();default:return t.loadResponse()}},n.prototype.visitRequestFinished=function(t){return this.hideProgressBar()},n.prototype.visitCompleted=function(t){return t.followRedirect()},n.prototype.pageInvalidated=function(){return this.reload()},n.prototype.showProgressBarAfterDelay=function(){return this.progressBarTimeout=setTimeout(this.showProgressBar,this.controller.progressBarDelay)},n.prototype.showProgressBar=function(){return this.progressBar.show()},n.prototype.hideProgressBar=function(){return this.progressBar.hide(),clearTimeout(this.progressBarTimeout)},n.prototype.reload=function(){return window.location.reload()},n}()}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};e.History=function(){function n(e){this.delegate=e,this.onPageLoad=t(this.onPageLoad,this),this.onPopState=t(this.onPopState,this)}return n.prototype.start=function(){return this.started?void 0:(addEventListener("popstate",this.onPopState,!1),addEventListener("load",this.onPageLoad,!1),this.started=!0)},n.prototype.stop=function(){return this.started?(removeEventListener("popstate",this.onPopState,!1),removeEventListener("load",this.onPageLoad,!1),this.started=!1):void 0},n.prototype.push=function(t,n){return t=e.Location.wrap(t),this.update("push",t,n)},n.prototype.replace=function(t,n){return t=e.Location.wrap(t),this.update("replace",t,n)},n.prototype.onPopState=function(t){var n,r,o,i;return this.shouldHandlePopState()&&(i=null!=(r=t.state)?r.turbolinks:void 0)?(n=e.Location.wrap(window.location),o=i.restorationIdentifier,this.delegate.historyPoppedToLocationWithRestorationIdentifier(n,o)):void 0},n.prototype.onPageLoad=function(t){return e.defer(function(t){return function(){return t.pageLoaded=!0}}(this))},n.prototype.shouldHandlePopState=function(){return this.pageIsLoaded()},n.prototype.pageIsLoaded=function(){return this.pageLoaded||"complete"===document.readyState},n.prototype.update=function(t,e,n){var r;return r={turbolinks:{restorationIdentifier:n}},history[t+"State"](r,null,e)},n}()}.call(this),function(){e.HeadDetails=function(){function t(t){var e,n,r,s,a,u;for(this.elements={},r=0,a=t.length;a>r;r++)u=t[r],u.nodeType===Node.ELEMENT_NODE&&(s=u.outerHTML,n=null!=(e=this.elements)[s]?e[s]:e[s]={type:i(u),tracked:o(u),elements:[]},n.elements.push(u))}var e,n,r,o,i;return t.fromHeadElement=function(t){var e;return new this(null!=(e=null!=t?t.childNodes:void 0)?e:[])},t.prototype.hasElementWithKey=function(t){return t in this.elements},t.prototype.getTrackedElementSignature=function(){var t,e;return function(){var n,r;n=this.elements,r=[];for(t in n)e=n[t].tracked,e&&r.push(t);return r}.call(this).join("")},t.prototype.getScriptElementsNotInDetails=function(t){return this.getElementsMatchingTypeNotInDetails("script",t)},t.prototype.getStylesheetElementsNotInDetails=function(t){return this.getElementsMatchingTypeNotInDetails("stylesheet",t)},t.prototype.getElementsMatchingTypeNotInDetails=function(t,e){var n,r,o,i,s,a;o=this.elements,s=[];for(r in o)i=o[r],a=i.type,n=i.elements,a!==t||e.hasElementWithKey(r)||s.push(n[0]);return s},t.prototype.getProvisionalElements=function(){var t,e,n,r,o,i,s;n=[],r=this.elements;for(e in r)o=r[e],s=o.type,i=o.tracked,t=o.elements,null!=s||i?t.length>1&&n.push.apply(n,t.slice(1)):n.push.apply(n,t);return n},t.prototype.getMetaValue=function(t){var e;return null!=(e=this.findMetaElementByName(t))?e.getAttribute("content"):void 0},t.prototype.findMetaElementByName=function(t){var n,r,o,i;n=void 0,i=this.elements;for(o in i)r=i[o].elements,e(r[0],t)&&(n=r[0]);return n},i=function(t){return n(t)?"script":r(t)?"stylesheet":void 0},o=function(t){return"reload"===t.getAttribute("data-turbolinks-track")},n=function(t){var e;return e=t.tagName.toLowerCase(),"script"===e},r=function(t){var e;return e=t.tagName.toLowerCase(),"style"===e||"link"===e&&"stylesheet"===t.getAttribute("rel")},e=function(t,e){var n;return n=t.tagName.toLowerCase(),"meta"===n&&t.getAttribute("name")===e},t}()}.call(this),function(){e.Snapshot=function(){function t(t,e){this.headDetails=t,this.bodyElement=e}return t.wrap=function(t){return t instanceof this?t:"string"==typeof t?this.fromHTMLString(t):this.fromHTMLElement(t)},t.fromHTMLString=function(t){var e;return e=document.createElement("html"),e.innerHTML=t,this.fromHTMLElement(e)},t.fromHTMLElement=function(t){var n,r,o,i;return o=t.querySelector("head"),n=null!=(i=t.querySelector("body"))?i:document.createElement("body"),r=e.HeadDetails.fromHeadElement(o),new this(r,n)},t.prototype.clone=function(){return new this.constructor(this.headDetails,this.bodyElement.cloneNode(!0))},t.prototype.getRootLocation=function(){var t,n;return n=null!=(t=this.getSetting("root"))?t:"/",new e.Location(n)},t.prototype.getCacheControlValue=function(){return this.getSetting("cache-control")},t.prototype.getElementForAnchor=function(t){try{return this.bodyElement.querySelector("[id='"+t+"'], a[name='"+t+"']")}catch(e){}},t.prototype.getPermanentElements=function(){return this.bodyElement.querySelectorAll("[id][data-turbolinks-permanent]")},t.prototype.getPermanentElementById=function(t){return this.bodyElement.querySelector("#"+t+"[data-turbolinks-permanent]")},t.prototype.getPermanentElementsPresentInSnapshot=function(t){var e,n,r,o,i;for(o=this.getPermanentElements(),i=[],n=0,r=o.length;r>n;n++)e=o[n],t.getPermanentElementById(e.id)&&i.push(e);return i},t.prototype.findFirstAutofocusableElement=function(){return this.bodyElement.querySelector("[autofocus]")},t.prototype.hasAnchor=function(t){return null!=this.getElementForAnchor(t)},t.prototype.isPreviewable=function(){return"no-preview"!==this.getCacheControlValue()},t.prototype.isCacheable=function(){return"no-cache"!==this.getCacheControlValue()},t.prototype.isVisitable=function(){return"reload"!==this.getSetting("visit-control")},t.prototype.getSetting=function(t){return this.headDetails.getMetaValue("turbolinks-"+t)},t}()}.call(this),function(){var t=[].slice;e.Renderer=function(){function e(){}var n;return e.render=function(){var e,n,r,o;return r=arguments[0],n=arguments[1],e=3<=arguments.length?t.call(arguments,2):[],o=function(t,e,n){n.prototype=t.prototype;var r=new n,o=t.apply(r,e);return Object(o)===o?o:r}(this,e,function(){}),o.delegate=r,o.render(n),o},e.prototype.renderView=function(t){return this.delegate.viewWillRender(this.newBody),t(),this.delegate.viewRendered(this.newBody)},e.prototype.invalidateView=function(){return this.delegate.viewInvalidated()},e.prototype.createScriptElement=function(t){var e;return"false"===t.getAttribute("data-turbolinks-eval")?t:(e=document.createElement("script"),e.textContent=t.textContent,e.async=!1,n(e,t),e)},n=function(t,e){var n,r,o,i,s,a,u;for(i=e.attributes,a=[],n=0,r=i.length;r>n;n++)s=i[n],o=s.name,u=s.value,a.push(t.setAttribute(o,u));return a},e}()}.call(this),function(){var t,n,r=function(t,e){function n(){this.constructor=t}for(var r in e)o.call(e,r)&&(t[r]=e[r]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},o={}.hasOwnProperty;e.SnapshotRenderer=function(e){function o(t,e,n){this.currentSnapshot=t,this.newSnapshot=e,this.isPreview=n,this.currentHeadDetails=this.currentSnapshot.headDetails,this.newHeadDetails=this.newSnapshot.headDetails,this.currentBody=this.currentSnapshot.bodyElement,this.newBody=this.newSnapshot.bodyElement}return r(o,e),o.prototype.render=function(t){return this.shouldRender()?(this.mergeHead(),this.renderView(function(e){return function(){return e.replaceBody(),e.isPreview||e.focusFirstAutofocusableElement(),t()}}(this))):this.invalidateView()},o.prototype.mergeHead=function(){return this.copyNewHeadStylesheetElements(),this.copyNewHeadScriptElements(),this.removeCurrentHeadProvisionalElements(),this.copyNewHeadProvisionalElements()},o.prototype.replaceBody=function(){var t;return t=this.relocateCurrentBodyPermanentElements(),this.activateNewBodyScriptElements(),this.assignNewBody(),this.replacePlaceholderElementsWithClonedPermanentElements(t)},o.prototype.shouldRender=function(){return this.newSnapshot.isVisitable()&&this.trackedElementsAreIdentical()},o.prototype.trackedElementsAreIdentical=function(){return this.currentHeadDetails.getTrackedElementSignature()===this.newHeadDetails.getTrackedElementSignature()},o.prototype.copyNewHeadStylesheetElements=function(){var t,e,n,r,o;for(r=this.getNewHeadStylesheetElements(),o=[],e=0,n=r.length;n>e;e++)t=r[e],o.push(document.head.appendChild(t));return o},o.prototype.copyNewHeadScriptElements=function(){var t,e,n,r,o;for(r=this.getNewHeadScriptElements(),o=[],e=0,n=r.length;n>e;e++)t=r[e],o.push(document.head.appendChild(this.createScriptElement(t)));return o},o.prototype.removeCurrentHeadProvisionalElements=function(){var t,e,n,r,o;for(r=this.getCurrentHeadProvisionalElements(),o=[],e=0,n=r.length;n>e;e++)t=r[e],o.push(document.head.removeChild(t));return o},o.prototype.copyNewHeadProvisionalElements=function(){var t,e,n,r,o;for(r=this.getNewHeadProvisionalElements(),o=[],e=0,n=r.length;n>e;e++)t=r[e],o.push(document.head.appendChild(t));return o},o.prototype.relocateCurrentBodyPermanentElements=function(){var e,r,o,i,s,a,u;for(a=this.getCurrentBodyPermanentElements(),u=[],e=0,r=a.length;r>e;e++)i=a[e],s=t(i),o=this.newSnapshot.getPermanentElementById(i.id),n(i,s.element),n(o,i),u.push(s);return u},o.prototype.replacePlaceholderElementsWithClonedPermanentElements=function(t){var e,r,o,i,s,a,u;for(u=[],o=0,i=t.length;i>o;o++)a=t[o],r=a.element,s=a.permanentElement,e=s.cloneNode(!0),u.push(n(r,e));return u},o.prototype.activateNewBodyScriptElements=function(){var t,e,r,o,i,s;for(i=this.getNewBodyScriptElements(),s=[],e=0,o=i.length;o>e;e++)r=i[e],t=this.createScriptElement(r),s.push(n(r,t));return s},o.prototype.assignNewBody=function(){return document.body=this.newBody},o.prototype.focusFirstAutofocusableElement=function(){var t;return null!=(t=this.newSnapshot.findFirstAutofocusableElement())?t.focus():void 0},o.prototype.getNewHeadStylesheetElements=function(){return this.newHeadDetails.getStylesheetElementsNotInDetails(this.currentHeadDetails)},o.prototype.getNewHeadScriptElements=function(){return this.newHeadDetails.getScriptElementsNotInDetails(this.currentHeadDetails)},o.prototype.getCurrentHeadProvisionalElements=function(){return this.currentHeadDetails.getProvisionalElements()},o.prototype.getNewHeadProvisionalElements=function(){return this.newHeadDetails.getProvisionalElements()},o.prototype.getCurrentBodyPermanentElements=function(){return this.currentSnapshot.getPermanentElementsPresentInSnapshot(this.newSnapshot)},o.prototype.getNewBodyScriptElements=function(){return this.newBody.querySelectorAll("script")},o}(e.Renderer),t=function(t){var e;return e=document.createElement("meta"),e.setAttribute("name","turbolinks-permanent-placeholder"),e.setAttribute("content",t.id),{element:e,permanentElement:t}},n=function(t,e){var n;return(n=t.parentNode)?n.replaceChild(e,t):void 0}}.call(this),function(){var t=function(t,e){function r(){this.constructor=t}for(var o in e)n.call(e,o)&&(t[o]=e[o]);return r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.ErrorRenderer=function(e){function n(t){this.html=t}return t(n,e),n.prototype.render=function(t){return this.renderView(function(e){return function(){return e.replaceDocumentHTML(),e.activateBodyScriptElements(),t()}}(this))},n.prototype.replaceDocumentHTML=function(){return document.documentElement.innerHTML=this.html},n.prototype.activateBodyScriptElements=function(){var t,e,n,r,o,i;for(r=this.getScriptElements(),i=[],e=0,n=r.length;n>e;e++)o=r[e],t=this.createScriptElement(o),i.push(o.parentNode.replaceChild(t,o));return i},n.prototype.getScriptElements=function(){return document.documentElement.querySelectorAll("script")},n}(e.Renderer)}.call(this),function(){e.View=function(){function t(t){this.delegate=t,this.htmlElement=document.documentElement}return t.prototype.getRootLocation=function(){return this.getSnapshot().getRootLocation()},t.prototype.getElementForAnchor=function(t){return this.getSnapshot().getElementForAnchor(t)},t.prototype.getSnapshot=function(){return e.Snapshot.fromHTMLElement(this.htmlElement)},t.prototype.render=function(t,e){var n,r,o;return o=t.snapshot,n=t.error,r=t.isPreview,this.markAsPreview(r),null!=o?this.renderSnapshot(o,r,e):this.renderError(n,e)},t.prototype.markAsPreview=function(t){return t?this.htmlElement.setAttribute("data-turbolinks-preview",""):this.htmlElement.removeAttribute("data-turbolinks-preview")},t.prototype.renderSnapshot=function(t,n,r){return e.SnapshotRenderer.render(this.delegate,r,this.getSnapshot(),e.Snapshot.wrap(t),n)},t.prototype.renderError=function(t,n){return e.ErrorRenderer.render(this.delegate,n,t)},t}()}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};e.ScrollManager=function(){function n(n){this.delegate=n,this.onScroll=t(this.onScroll,this),this.onScroll=e.throttle(this.onScroll)}return n.prototype.start=function(){return this.started?void 0:(addEventListener("scroll",this.onScroll,!1),this.onScroll(),this.started=!0)},n.prototype.stop=function(){return this.started?(removeEventListener("scroll",this.onScroll,!1),this.started=!1):void 0},n.prototype.scrollToElement=function(t){return t.scrollIntoView()},n.prototype.scrollToPosition=function(t){var e,n;return e=t.x,n=t.y,window.scrollTo(e,n)},n.prototype.onScroll=function(t){return this.updatePosition({x:window.pageXOffset,y:window.pageYOffset})},n.prototype.updatePosition=function(t){var e;return this.position=t,null!=(e=this.delegate)?e.scrollPositionChanged(this.position):void 0},n}()}.call(this),function(){e.SnapshotCache=function(){function t(t){this.size=t,this.keys=[],this.snapshots={}}var n;return t.prototype.has=function(t){var e;return e=n(t),e in this.snapshots},t.prototype.get=function(t){var e;if(this.has(t))return e=this.read(t),this.touch(t),e},t.prototype.put=function(t,e){return this.write(t,e),this.touch(t),e},t.prototype.read=function(t){var e;return e=n(t),this.snapshots[e]},t.prototype.write=function(t,e){var r;return r=n(t),this.snapshots[r]=e},t.prototype.touch=function(t){var e,r;return r=n(t),e=this.keys.indexOf(r),e>-1&&this.keys.splice(e,1),this.keys.unshift(r),this.trim()},t.prototype.trim=function(){var t,e,n,r,o;for(r=this.keys.splice(this.size),o=[],t=0,n=r.length;n>t;t++)e=r[t],o.push(delete this.snapshots[e]);return o},n=function(t){return e.Location.wrap(t).toCacheKey()},t}()}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};e.Visit=function(){function n(n,r,o){this.controller=n,this.action=o,this.performScroll=t(this.performScroll,this),this.identifier=e.uuid(),this.location=e.Location.wrap(r),this.adapter=this.controller.adapter,this.state="initialized",this.timingMetrics={}}var r;return n.prototype.start=function(){return"initialized"===this.state?(this.recordTimingMetric("visitStart"),this.state="started",this.adapter.visitStarted(this)):void 0},n.prototype.cancel=function(){var t;return"started"===this.state?(null!=(t=this.request)&&t.cancel(),this.cancelRender(),this.state="canceled"):void 0},n.prototype.complete=function(){var t;return"started"===this.state?(this.recordTimingMetric("visitEnd"),this.state="completed","function"==typeof(t=this.adapter).visitCompleted&&t.visitCompleted(this),this.controller.visitCompleted(this)):void 0},n.prototype.fail=function(){var t;return"started"===this.state?(this.state="failed","function"==typeof(t=this.adapter).visitFailed?t.visitFailed(this):void 0):void 0},n.prototype.changeHistory=function(){var t,e;return this.historyChanged?void 0:(t=this.location.isEqualTo(this.referrer)?"replace":this.action,e=r(t),this.controller[e](this.location,this.restorationIdentifier),this.historyChanged=!0)},n.prototype.issueRequest=function(){return this.shouldIssueRequest()&&null==this.request?(this.progress=0,this.request=new e.HttpRequest(this,this.location,this.referrer),this.request.send()):void 0},n.prototype.getCachedSnapshot=function(){var t;return!(t=this.controller.getCachedSnapshotForLocation(this.location))||null!=this.location.anchor&&!t.hasAnchor(this.location.anchor)||"restore"!==this.action&&!t.isPreviewable()?void 0:t},n.prototype.hasCachedSnapshot=function(){return null!=this.getCachedSnapshot()},n.prototype.loadCachedSnapshot=function(){var t,e;return(e=this.getCachedSnapshot())?(t=this.shouldIssueRequest(),this.render(function(){var n,r;return this.cacheSnapshot(),this.locationHasSamePageAnchor()?(this.performScroll(),"function"==typeof(n=this.adapter).visitRendered?n.visitRendered(this):void 0):(this.controller.render({snapshot:e,isPreview:t},this.performScroll),"function"==typeof(r=this.adapter).visitRendered&&r.visitRendered(this),t?void 0:this.complete())})):void 0},n.prototype.loadResponse=function(){return null!=this.response?this.render(function(){var t,e;return this.cacheSnapshot(),this.request.failed?(this.controller.render({error:this.response},this.performScroll),"function"==typeof(t=this.adapter).visitRendered&&t.visitRendered(this),this.fail()):(this.controller.render({snapshot:this.response},this.performScroll),"function"==typeof(e=this.adapter).visitRendered&&e.visitRendered(this),this.complete())}):void 0},n.prototype.followRedirect=function(){return this.redirectedToLocation&&!this.followedRedirect?(this.location=this.redirectedToLocation,this.controller.replaceHistoryWithLocationAndRestorationIdentifier(this.redirectedToLocation,this.restorationIdentifier),this.followedRedirect=!0):void 0},n.prototype.goToSamePageAnchor=function(){return this.locationHasSamePageAnchor()?this.render(function(){var t;return this.cacheSnapshot(),this.performScroll(),"function"==typeof(t=this.adapter).visitRendered?t.visitRendered(this):void 0}):void 0},n.prototype.requestStarted=function(){var t;return this.recordTimingMetric("requestStart"),"function"==typeof(t=this.adapter).visitRequestStarted?t.visitRequestStarted(this):void 0},n.prototype.requestProgressed=function(t){var e;return this.progress=t,"function"==typeof(e=this.adapter).visitRequestProgressed?e.visitRequestProgressed(this):void 0},n.prototype.requestCompletedWithResponse=function(t,n){return this.response=t,null!=n&&(this.redirectedToLocation=e.Location.wrap(n)),this.adapter.visitRequestCompleted(this)},n.prototype.requestFailedWithStatusCode=function(t,e){return this.response=e,this.adapter.visitRequestFailedWithStatusCode(this,t)},n.prototype.requestFinished=function(){var t;return this.recordTimingMetric("requestEnd"),"function"==typeof(t=this.adapter).visitRequestFinished?t.visitRequestFinished(this):void 0},n.prototype.performScroll=function(){return this.scrolled?void 0:("restore"===this.action?this.scrollToRestoredPosition()||this.scrollToTop():this.scrollToAnchor()||this.scrollToTop(),this.scrolled=!0)},n.prototype.scrollToRestoredPosition=function(){var t,e;return t=null!=(e=this.restorationData)?e.scrollPosition:void 0,null!=t?(this.controller.scrollToPosition(t),!0):void 0},n.prototype.scrollToAnchor=function(){return null!=this.location.anchor?(this.controller.scrollToAnchor(this.location.anchor),!0):void 0},n.prototype.scrollToTop=function(){return this.controller.scrollToPosition({x:0,y:0})},n.prototype.recordTimingMetric=function(t){var e;return null!=(e=this.timingMetrics)[t]?e[t]:e[t]=(new Date).getTime()},n.prototype.getTimingMetrics=function(){return e.copyObject(this.timingMetrics)},r=function(t){switch(t){case"replace":return"replaceHistoryWithLocationAndRestorationIdentifier";case"advance":case"restore":return"pushHistoryWithLocationAndRestorationIdentifier"}},n.prototype.shouldIssueRequest=function(){return"restore"===this.action?!this.hasCachedSnapshot():this.locationHasSamePageAnchor()?!1:!0},n.prototype.locationHasSamePageAnchor=function(){return null!=this.location.anchor&&this.location.requestURL===this.referrer.requestURL},n.prototype.cacheSnapshot=function(){return this.snapshotCached?void 0:(this.controller.cacheSnapshot(),this.snapshotCached=!0)},n.prototype.render=function(t){return this.cancelRender(),this.frame=requestAnimationFrame(function(e){return function(){return e.frame=null,t.call(e)}}(this))},n.prototype.cancelRender=function(){return this.frame?cancelAnimationFrame(this.frame):void 0},n}()}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};e.Controller=function(){function n(){this.clickBubbled=t(this.clickBubbled,this),this.clickCaptured=t(this.clickCaptured,this),this.pageLoaded=t(this.pageLoaded,this),this.history=new e.History(this),this.view=new e.View(this),this.scrollManager=new e.ScrollManager(this),this.restorationData={},this.clearCache(),this.setProgressBarDelay(500)}return n.prototype.start=function(){return e.supported&&!this.started?(addEventListener("click",this.clickCaptured,!0),addEventListener("DOMContentLoaded",this.pageLoaded,!1),this.scrollManager.start(),this.startHistory(),this.started=!0,this.enabled=!0):void 0},n.prototype.disable=function(){return this.enabled=!1},n.prototype.stop=function(){return this.started?(removeEventListener("click",this.clickCaptured,!0),removeEventListener("DOMContentLoaded",this.pageLoaded,!1),this.scrollManager.stop(),this.stopHistory(),this.started=!1):void 0},n.prototype.clearCache=function(){return this.cache=new e.SnapshotCache(10)},n.prototype.visit=function(t,n){var r,o;return null==n&&(n={}),t=e.Location.wrap(t),this.applicationAllowsVisitingLocation(t)?this.locationIsVisitable(t)?(r=null!=(o=n.action)?o:"advance",this.adapter.visitProposedToLocationWithAction(t,r)):window.location=t:void 0},n.prototype.startVisitToLocationWithAction=function(t,n,r){var o;return e.supported?(o=this.getRestorationDataForIdentifier(r),this.startVisit(t,n,{restorationData:o})):window.location=t},n.prototype.setProgressBarDelay=function(t){return this.progressBarDelay=t},n.prototype.startHistory=function(){return this.location=e.Location.wrap(window.location),this.restorationIdentifier=e.uuid(),this.history.start(),this.history.replace(this.location,this.restorationIdentifier)},n.prototype.stopHistory=function(){return this.history.stop()},n.prototype.pushHistoryWithLocationAndRestorationIdentifier=function(t,n){return this.restorationIdentifier=n,this.location=e.Location.wrap(t),this.history.push(this.location,this.restorationIdentifier)},n.prototype.replaceHistoryWithLocationAndRestorationIdentifier=function(t,n){return this.restorationIdentifier=n,this.location=e.Location.wrap(t),this.history.replace(this.location,this.restorationIdentifier)},n.prototype.historyPoppedToLocationWithRestorationIdentifier=function(t,n){var r;return this.restorationIdentifier=n,this.enabled?(r=this.getRestorationDataForIdentifier(this.restorationIdentifier),
this.startVisit(t,"restore",{restorationIdentifier:this.restorationIdentifier,restorationData:r,historyChanged:!0}),this.location=e.Location.wrap(t)):this.adapter.pageInvalidated()},n.prototype.getCachedSnapshotForLocation=function(t){var e;return null!=(e=this.cache.get(t))?e.clone():void 0},n.prototype.shouldCacheSnapshot=function(){return this.view.getSnapshot().isCacheable()},n.prototype.cacheSnapshot=function(){var t,n;return this.shouldCacheSnapshot()?(this.notifyApplicationBeforeCachingSnapshot(),n=this.view.getSnapshot(),t=this.lastRenderedLocation,e.defer(function(e){return function(){return e.cache.put(t,n.clone())}}(this))):void 0},n.prototype.scrollToAnchor=function(t){var e;return(e=this.view.getElementForAnchor(t))?this.scrollToElement(e):this.scrollToPosition({x:0,y:0})},n.prototype.scrollToElement=function(t){return this.scrollManager.scrollToElement(t)},n.prototype.scrollToPosition=function(t){return this.scrollManager.scrollToPosition(t)},n.prototype.scrollPositionChanged=function(t){var e;return e=this.getCurrentRestorationData(),e.scrollPosition=t},n.prototype.render=function(t,e){return this.view.render(t,e)},n.prototype.viewInvalidated=function(){return this.adapter.pageInvalidated()},n.prototype.viewWillRender=function(t){return this.notifyApplicationBeforeRender(t)},n.prototype.viewRendered=function(){return this.lastRenderedLocation=this.currentVisit.location,this.notifyApplicationAfterRender()},n.prototype.pageLoaded=function(){return this.lastRenderedLocation=this.location,this.notifyApplicationAfterPageLoad()},n.prototype.clickCaptured=function(){return removeEventListener("click",this.clickBubbled,!1),addEventListener("click",this.clickBubbled,!1)},n.prototype.clickBubbled=function(t){var e,n,r;return this.enabled&&this.clickEventIsSignificant(t)&&(n=this.getVisitableLinkForNode(t.target))&&(r=this.getVisitableLocationForLink(n))&&this.applicationAllowsFollowingLinkToLocation(n,r)?(t.preventDefault(),e=this.getActionForLink(n),this.visit(r,{action:e})):void 0},n.prototype.applicationAllowsFollowingLinkToLocation=function(t,e){var n;return n=this.notifyApplicationAfterClickingLinkToLocation(t,e),!n.defaultPrevented},n.prototype.applicationAllowsVisitingLocation=function(t){var e;return e=this.notifyApplicationBeforeVisitingLocation(t),!e.defaultPrevented},n.prototype.notifyApplicationAfterClickingLinkToLocation=function(t,n){return e.dispatch("turbolinks:click",{target:t,data:{url:n.absoluteURL},cancelable:!0})},n.prototype.notifyApplicationBeforeVisitingLocation=function(t){return e.dispatch("turbolinks:before-visit",{data:{url:t.absoluteURL},cancelable:!0})},n.prototype.notifyApplicationAfterVisitingLocation=function(t){return e.dispatch("turbolinks:visit",{data:{url:t.absoluteURL}})},n.prototype.notifyApplicationBeforeCachingSnapshot=function(){return e.dispatch("turbolinks:before-cache")},n.prototype.notifyApplicationBeforeRender=function(t){return e.dispatch("turbolinks:before-render",{data:{newBody:t}})},n.prototype.notifyApplicationAfterRender=function(){return e.dispatch("turbolinks:render")},n.prototype.notifyApplicationAfterPageLoad=function(t){return null==t&&(t={}),e.dispatch("turbolinks:load",{data:{url:this.location.absoluteURL,timing:t}})},n.prototype.startVisit=function(t,e,n){var r;return null!=(r=this.currentVisit)&&r.cancel(),this.currentVisit=this.createVisit(t,e,n),this.currentVisit.start(),this.notifyApplicationAfterVisitingLocation(t)},n.prototype.createVisit=function(t,n,r){var o,i,s,a,u;return i=null!=r?r:{},a=i.restorationIdentifier,s=i.restorationData,o=i.historyChanged,u=new e.Visit(this,t,n),u.restorationIdentifier=null!=a?a:e.uuid(),u.restorationData=e.copyObject(s),u.historyChanged=o,u.referrer=this.location,u},n.prototype.visitCompleted=function(t){return this.notifyApplicationAfterPageLoad(t.getTimingMetrics())},n.prototype.clickEventIsSignificant=function(t){return!(t.defaultPrevented||t.target.isContentEditable||t.which>1||t.altKey||t.ctrlKey||t.metaKey||t.shiftKey)},n.prototype.getVisitableLinkForNode=function(t){return this.nodeIsVisitable(t)?e.closest(t,"a[href]:not([target]):not([download])"):void 0},n.prototype.getVisitableLocationForLink=function(t){var n;return n=new e.Location(t.getAttribute("href")),this.locationIsVisitable(n)?n:void 0},n.prototype.getActionForLink=function(t){var e;return null!=(e=t.getAttribute("data-turbolinks-action"))?e:"advance"},n.prototype.nodeIsVisitable=function(t){var n;return(n=e.closest(t,"[data-turbolinks]"))?"false"!==n.getAttribute("data-turbolinks"):!0},n.prototype.locationIsVisitable=function(t){return t.isPrefixedBy(this.view.getRootLocation())&&t.isHTML()},n.prototype.getCurrentRestorationData=function(){return this.getRestorationDataForIdentifier(this.restorationIdentifier)},n.prototype.getRestorationDataForIdentifier=function(t){var e;return null!=(e=this.restorationData)[t]?e[t]:e[t]={}},n}()}.call(this),function(){!function(){var t,e;if((t=e=document.currentScript)&&!e.hasAttribute("data-turbolinks-suppress-warning"))for(;t=t.parentNode;)if(t===document.body)return console.warn("You are loading Turbolinks from a <script> element inside the <body> element. This is probably not what you meant to do!\n\nLoad your application\u2019s JavaScript bundle inside the <head> element instead. <script> elements in <body> are evaluated with each page change.\n\nFor more information, see: https://github.com/turbolinks/turbolinks#working-with-script-elements\n\n\u2014\u2014\nSuppress this warning by adding a `data-turbolinks-suppress-warning` attribute to: %s",e.outerHTML)}()}.call(this),function(){var t,n,r;e.start=function(){return n()?(null==e.controller&&(e.controller=t()),e.controller.start()):void 0},n=function(){return null==window.Turbolinks&&(window.Turbolinks=e),r()},t=function(){var t;return t=new e.Controller,t.adapter=new e.BrowserAdapter(t),t},r=function(){return window.Turbolinks===e},r()&&e.start()}.call(this)}).call(this),"object"==typeof module&&module.exports?module.exports=e:"function"==typeof define&&define.amd&&define(e)}).call(this);