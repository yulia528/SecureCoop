(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"f/Ol":function(e,t,l){"use strict";l.d(t,"b",(function(){return x})),l.d(t,"a",(function(){return c}));var a=l("jtHE"),i=l("LRne"),n=l("itXk"),r=l("3E0/"),h=l("lJxs"),s=l("JX91"),g=l("Kt/9");class x{constructor(){this.isShell=!1}}class c{constructor(e){this.shellModel=e,this.networkDelay=g.a.settings&&g.a.settings.networkDelay?g.a.settings.networkDelay:0,this.timeline=new a.a(1)}static AppendShell(e,t,l=400){const a=Object(i.a)(!0).pipe(Object(r.a)(l));return Object(n.a)([a,e]).pipe(Object(h.a)(([e,t])=>Object.assign(t,{isShell:!1})),Object(s.a)(Object.assign(t,{isShell:!0})))}load(e){c.AppendShell(e,this.shellModel,this.networkDelay).subscribe(e=>{this.timeline.next(e)})}get state(){return this.timeline.asObservable()}}},jtHE:function(e,t,l){"use strict";l.d(t,"a",(function(){return f}));var a=l("XNiG"),i=l("3N8a");class n extends i.a{constructor(e,t){super(e,t),this.scheduler=e,this.work=t}schedule(e,t=0){return t>0?super.schedule(e,t):(this.delay=t,this.state=e,this.scheduler.flush(this),this)}execute(e,t){return t>0||this.closed?super.execute(e,t):this._execute(e,t)}requestAsyncId(e,t,l=0){return null!==l&&l>0||null===l&&this.delay>0?super.requestAsyncId(e,t,l):e.flush(this)}}var r=l("IjjT");class h extends r.a{}const s=new h(n);var g=l("quSY"),x=l("7o/Q"),c=l("WMd4");class o extends x.a{constructor(e,t,l=0){super(e),this.scheduler=t,this.delay=l}static dispatch(e){const{notification:t,destination:l}=e;t.observe(l),this.unsubscribe()}scheduleMessage(e){this.destination.add(this.scheduler.schedule(o.dispatch,this.delay,new d(e,this.destination)))}_next(e){this.scheduleMessage(c.a.createNext(e))}_error(e){this.scheduleMessage(c.a.createError(e)),this.unsubscribe()}_complete(){this.scheduleMessage(c.a.createComplete()),this.unsubscribe()}}class d{constructor(e,t){this.notification=e,this.destination=t}}var v=l("9ppp"),u=l("Ylt2");class f extends a.a{constructor(e=Number.POSITIVE_INFINITY,t=Number.POSITIVE_INFINITY,l){super(),this.scheduler=l,this._events=[],this._infiniteTimeWindow=!1,this._bufferSize=e<1?1:e,this._windowTime=t<1?1:t,t===Number.POSITIVE_INFINITY?(this._infiniteTimeWindow=!0,this.next=this.nextInfiniteTimeWindow):this.next=this.nextTimeWindow}nextInfiniteTimeWindow(e){const t=this._events;t.push(e),t.length>this._bufferSize&&t.shift(),super.next(e)}nextTimeWindow(e){this._events.push(new p(this._getNow(),e)),this._trimBufferThenGetEvents(),super.next(e)}_subscribe(e){const t=this._infiniteTimeWindow,l=t?this._events:this._trimBufferThenGetEvents(),a=this.scheduler,i=l.length;let n;if(this.closed)throw new v.a;if(this.isStopped||this.hasError?n=g.a.EMPTY:(this.observers.push(e),n=new u.a(this,e)),a&&e.add(e=new o(e,a)),t)for(let r=0;r<i&&!e.closed;r++)e.next(l[r]);else for(let r=0;r<i&&!e.closed;r++)e.next(l[r].value);return this.hasError?e.error(this.thrownError):this.isStopped&&e.complete(),n}_getNow(){return(this.scheduler||s).now()}_trimBufferThenGetEvents(){const e=this._getNow(),t=this._bufferSize,l=this._windowTime,a=this._events,i=a.length;let n=0;for(;n<i&&!(e-a[n].time<l);)n++;return i>t&&(n=Math.max(n,i-t)),n>0&&a.splice(0,n),a}}class p{constructor(e,t){this.time=e,this.value=t}}},"zK/y":function(e,t,l){"use strict";l.d(t,"a",(function(){return n}));var a=l("Kt/9"),i=l("fXoL");let n=(()=>{class e{constructor(){this.debugMode=!(!a.a.settings||!a.a.settings.debug)&&a.a.settings.debug,this.textLoaded=!1}set data(e){this.debugMode||(this._data=null!=e?e:""),this.textLoaded=!(!this._data||""===this._data)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Eb({type:e,selectors:[["app-text-shell"]],hostVars:2,hostBindings:function(e,t){2&e&&i.Bb("text-loaded",t.textLoaded)},inputs:{data:"data"},decls:2,vars:1,template:function(e,t){1&e&&(i.Ob(0),i.yc(1),i.Nb()),2&e&&(i.zb(1),i.zc(t._data))},styles:['[_nghost-%COMP%]{--text-shell-background:transparent;--text-shell-line-color:#eee;--text-shell-line-height:16px;--text-shell-line-gutter:3px;display:block;position:relative;color:transparent;background-color:var(--text-shell-background);transform-style:preserve-3d;background-clip:content-box}[_nghost-%COMP%]:not([animation]){background-image:linear-gradient(90deg,var(--text-shell-line-color,#ccc) 90%,var(--text-shell-background,#fff) 0)}[_nghost-%COMP%]:not([animation]), [_nghost-%COMP%]:not([animation])[lines="1"]{background-position:0 0;background-size:100% var(--text-shell-line-height,16px);background-repeat:no-repeat;min-height:calc(var(--text-shell-line-height, 16px)*1 + var(--text-shell-line-gutter, 3px)*0)}[_nghost-%COMP%]:not([animation])[lines="1"]{background-image:linear-gradient(90deg,var(--text-shell-line-color,#ccc) 91%,var(--text-shell-background,#fff) 0)}[_nghost-%COMP%]:not([animation])[lines="2"]{background-image:linear-gradient(90deg,var(--text-shell-line-color,#ccc) 90%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-background,#fff) 100%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-line-color,#ccc) 38%,var(--text-shell-background,#fff) 0);background-position:0 0,0 calc(var(--text-shell-line-height, 16px)*1 + var(--text-shell-line-gutter, 3px)*0),0 calc(var(--text-shell-line-height, 16px) + var(--text-shell-line-gutter, 3px));background-size:100% var(--text-shell-line-height,16px),100% var(--text-shell-line-gutter,3px),100% var(--text-shell-line-height,16px);background-repeat:no-repeat;min-height:calc(var(--text-shell-line-height, 16px)*2 + var(--text-shell-line-gutter, 3px)*1)}[_nghost-%COMP%]:not([animation])[lines="3"]{background-image:linear-gradient(90deg,var(--text-shell-line-color,#ccc) 90%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-background,#fff) 100%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-line-color,#ccc) 68%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-background,#fff) 100%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-line-color,#ccc) 33%,var(--text-shell-background,#fff) 0);background-position:0 0,0 calc(var(--text-shell-line-height, 16px)*1 + var(--text-shell-line-gutter, 3px)*0),0 calc(var(--text-shell-line-height, 16px) + var(--text-shell-line-gutter, 3px)),0 calc(var(--text-shell-line-height, 16px)*2 + var(--text-shell-line-gutter, 3px)*1),0 calc(var(--text-shell-line-height, 16px) + var(--text-shell-line-gutter, 3px));background-size:100% var(--text-shell-line-height,16px),100% var(--text-shell-line-gutter,3px),100% var(--text-shell-line-height,16px),100% var(--text-shell-line-gutter,3px),100% var(--text-shell-line-height,16px);background-repeat:no-repeat;min-height:calc(var(--text-shell-line-height, 16px)*3 + var(--text-shell-line-gutter, 3px)*2)}[_nghost-%COMP%]:not([animation])[lines="4"]{background-image:linear-gradient(90deg,var(--text-shell-line-color,#ccc) 87%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-background,#fff) 100%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-line-color,#ccc) 76%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-background,#fff) 100%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-line-color,#ccc) 77%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-background,#fff) 100%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-line-color,#ccc) 44%,var(--text-shell-background,#fff) 0);background-position:0 0,0 calc(var(--text-shell-line-height, 16px)*1 + var(--text-shell-line-gutter, 3px)*0),0 calc(var(--text-shell-line-height, 16px) + var(--text-shell-line-gutter, 3px)),0 calc(var(--text-shell-line-height, 16px)*2 + var(--text-shell-line-gutter, 3px)*1),0 calc(var(--text-shell-line-height, 16px) + var(--text-shell-line-gutter, 3px)),0 calc(var(--text-shell-line-height, 16px)*3 + var(--text-shell-line-gutter, 3px)*2),0 calc(var(--text-shell-line-height, 16px) + var(--text-shell-line-gutter, 3px));background-size:100% var(--text-shell-line-height,16px),100% var(--text-shell-line-gutter,3px),100% var(--text-shell-line-height,16px),100% var(--text-shell-line-gutter,3px),100% var(--text-shell-line-height,16px),100% var(--text-shell-line-gutter,3px),100% var(--text-shell-line-height,16px);background-repeat:no-repeat;min-height:calc(var(--text-shell-line-height, 16px)*4 + var(--text-shell-line-gutter, 3px)*3)}[_nghost-%COMP%]:not([animation])[lines="5"]{background-image:linear-gradient(90deg,var(--text-shell-line-color,#ccc) 94%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-background,#fff) 100%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-line-color,#ccc) 67%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-background,#fff) 100%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-line-color,#ccc) 72%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-background,#fff) 100%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-line-color,#ccc) 61%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-background,#fff) 100%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-line-color,#ccc) 39%,var(--text-shell-background,#fff) 0);background-position:0 0,0 calc(var(--text-shell-line-height, 16px)*1 + var(--text-shell-line-gutter, 3px)*0),0 calc(var(--text-shell-line-height, 16px) + var(--text-shell-line-gutter, 3px)),0 calc(var(--text-shell-line-height, 16px)*2 + var(--text-shell-line-gutter, 3px)*1),0 calc(var(--text-shell-line-height, 16px) + var(--text-shell-line-gutter, 3px)),0 calc(var(--text-shell-line-height, 16px)*3 + var(--text-shell-line-gutter, 3px)*2),0 calc(var(--text-shell-line-height, 16px) + var(--text-shell-line-gutter, 3px)),0 calc(var(--text-shell-line-height, 16px)*4 + var(--text-shell-line-gutter, 3px)*3),0 calc(var(--text-shell-line-height, 16px) + var(--text-shell-line-gutter, 3px));background-size:100% var(--text-shell-line-height,16px),100% var(--text-shell-line-gutter,3px),100% var(--text-shell-line-height,16px),100% var(--text-shell-line-gutter,3px),100% var(--text-shell-line-height,16px),100% var(--text-shell-line-gutter,3px),100% var(--text-shell-line-height,16px),100% var(--text-shell-line-gutter,3px),100% var(--text-shell-line-height,16px);background-repeat:no-repeat;min-height:calc(var(--text-shell-line-height, 16px)*5 + var(--text-shell-line-gutter, 3px)*4)}[_nghost-%COMP%]:not([animation])[lines="6"]{background-image:linear-gradient(90deg,var(--text-shell-line-color,#ccc) 94%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-background,#fff) 100%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-line-color,#ccc) 67%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-background,#fff) 100%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-line-color,#ccc) 76%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-background,#fff) 100%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-line-color,#ccc) 75%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-background,#fff) 100%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-line-color,#ccc) 75%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-background,#fff) 100%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-line-color,#ccc) 42%,var(--text-shell-background,#fff) 0);background-position:0 0,0 calc(var(--text-shell-line-height, 16px)*1 + var(--text-shell-line-gutter, 3px)*0),0 calc(var(--text-shell-line-height, 16px) + var(--text-shell-line-gutter, 3px)),0 calc(var(--text-shell-line-height, 16px)*2 + var(--text-shell-line-gutter, 3px)*1),0 calc(var(--text-shell-line-height, 16px) + var(--text-shell-line-gutter, 3px)),0 calc(var(--text-shell-line-height, 16px)*3 + var(--text-shell-line-gutter, 3px)*2),0 calc(var(--text-shell-line-height, 16px) + var(--text-shell-line-gutter, 3px)),0 calc(var(--text-shell-line-height, 16px)*4 + var(--text-shell-line-gutter, 3px)*3),0 calc(var(--text-shell-line-height, 16px) + var(--text-shell-line-gutter, 3px)),0 calc(var(--text-shell-line-height, 16px)*5 + var(--text-shell-line-gutter, 3px)*4),0 calc(var(--text-shell-line-height, 16px) + var(--text-shell-line-gutter, 3px));background-size:100% var(--text-shell-line-height,16px),100% var(--text-shell-line-gutter,3px),100% var(--text-shell-line-height,16px),100% var(--text-shell-line-gutter,3px),100% var(--text-shell-line-height,16px),100% var(--text-shell-line-gutter,3px),100% var(--text-shell-line-height,16px),100% var(--text-shell-line-gutter,3px),100% var(--text-shell-line-height,16px),100% var(--text-shell-line-gutter,3px),100% var(--text-shell-line-height,16px);background-repeat:no-repeat;min-height:calc(var(--text-shell-line-height, 16px)*6 + var(--text-shell-line-gutter, 3px)*5)}[_nghost-%COMP%]:not([animation]).text-loaded{background:none;min-height:inherit;color:inherit}[animation=bouncing][_nghost-%COMP%]{background-image:linear-gradient(90deg,var(--text-shell-line-color,#ccc) 88%,var(--text-shell-background,#fff) 0);background-position:0 0;background-size:100% var(--text-shell-line-height,16px);background-repeat:no-repeat;-webkit-animation-direction:alternate;animation-direction:alternate;-webkit-animation-name:animateLine;animation-name:animateLine;min-height:calc(var(--text-shell-line-height, 16px)*1 + var(--text-shell-line-gutter, 3px)*0);-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-duration:1s;animation-duration:1s}@-webkit-keyframes animateLine{0%{background-size:85% var(--text-shell-line-height,16px)}to{background-size:100% var(--text-shell-line-height,16px)}}[animation=bouncing][lines="1"][_nghost-%COMP%]{background-image:linear-gradient(90deg,var(--text-shell-line-color,#ccc) 87%,var(--text-shell-background,#fff) 0);background-position:0 0;background-size:100% var(--text-shell-line-height,16px);background-repeat:no-repeat;-webkit-animation-direction:alternate;animation-direction:alternate;-webkit-animation-name:animateLine;animation-name:animateLine;min-height:calc(var(--text-shell-line-height, 16px)*1 + var(--text-shell-line-gutter, 3px)*0);-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-duration:1s;animation-duration:1s}@keyframes animateLine{0%{background-size:85% var(--text-shell-line-height,16px)}to{background-size:100% var(--text-shell-line-height,16px)}}[animation=bouncing][lines="2"][_nghost-%COMP%]{background-image:linear-gradient(90deg,var(--text-shell-line-color,#ccc) 86%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-background,#fff) 100%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-line-color,#ccc) 32%,var(--text-shell-background,#fff) 0);background-position:0 0,0 calc(var(--text-shell-line-height, 16px)*1 + var(--text-shell-line-gutter, 3px)*0),0 calc(var(--text-shell-line-height, 16px) + var(--text-shell-line-gutter, 3px));background-size:100% var(--text-shell-line-height,16px),100% var(--text-shell-line-gutter,3px),100% var(--text-shell-line-height,16px);background-repeat:no-repeat;animation-direction:alternate-reverse;-webkit-animation-name:animateMultiLine;animation-name:animateMultiLine;min-height:calc(var(--text-shell-line-height, 16px)*2 + var(--text-shell-line-gutter, 3px)*1);-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-duration:1s;animation-duration:1s}@-webkit-keyframes animateMultiLine{0%{background-size:85% var(--text-shell-line-height,16px),100% var(--text-shell-line-gutter,3px),55% var(--text-shell-line-height,16px)}to{background-size:100% var(--text-shell-line-height,16px),100% var(--text-shell-line-gutter,3px),100% var(--text-shell-line-height,16px)}}[animation=bouncing][lines="3"][_nghost-%COMP%]{background-image:linear-gradient(90deg,var(--text-shell-line-color,#ccc) 93%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-background,#fff) 100%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-line-color,#ccc) 76%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-background,#fff) 100%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-line-color,#ccc) 45%,var(--text-shell-background,#fff) 0);background-position:0 0,0 calc(var(--text-shell-line-height, 16px)*1 + var(--text-shell-line-gutter, 3px)*0),0 calc(var(--text-shell-line-height, 16px) + var(--text-shell-line-gutter, 3px)),0 calc(var(--text-shell-line-height, 16px)*2 + var(--text-shell-line-gutter, 3px)*1),0 calc(var(--text-shell-line-height, 16px) + var(--text-shell-line-gutter, 3px));background-size:100% var(--text-shell-line-height,16px),100% var(--text-shell-line-gutter,3px),100% var(--text-shell-line-height,16px),100% var(--text-shell-line-gutter,3px),100% var(--text-shell-line-height,16px);min-height:calc(var(--text-shell-line-height, 16px)*3 + var(--text-shell-line-gutter, 3px)*2)}[animation=bouncing][lines="3"][_nghost-%COMP%], [animation=bouncing][lines="4"][_nghost-%COMP%]{background-repeat:no-repeat;animation-direction:alternate-reverse;-webkit-animation-name:animateMultiLine;animation-name:animateMultiLine;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-duration:1s;animation-duration:1s}[animation=bouncing][lines="4"][_nghost-%COMP%]{background-image:linear-gradient(90deg,var(--text-shell-line-color,#ccc) 88%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-background,#fff) 100%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-line-color,#ccc) 67%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-background,#fff) 100%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-line-color,#ccc) 66%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-background,#fff) 100%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-line-color,#ccc) 34%,var(--text-shell-background,#fff) 0);background-position:0 0,0 calc(var(--text-shell-line-height, 16px)*1 + var(--text-shell-line-gutter, 3px)*0),0 calc(var(--text-shell-line-height, 16px) + var(--text-shell-line-gutter, 3px)),0 calc(var(--text-shell-line-height, 16px)*2 + var(--text-shell-line-gutter, 3px)*1),0 calc(var(--text-shell-line-height, 16px) + var(--text-shell-line-gutter, 3px)),0 calc(var(--text-shell-line-height, 16px)*3 + var(--text-shell-line-gutter, 3px)*2),0 calc(var(--text-shell-line-height, 16px) + var(--text-shell-line-gutter, 3px));background-size:100% var(--text-shell-line-height,16px),100% var(--text-shell-line-gutter,3px),100% var(--text-shell-line-height,16px),100% var(--text-shell-line-gutter,3px),100% var(--text-shell-line-height,16px),100% var(--text-shell-line-gutter,3px),100% var(--text-shell-line-height,16px);min-height:calc(var(--text-shell-line-height, 16px)*4 + var(--text-shell-line-gutter, 3px)*3)}[animation=bouncing][lines="5"][_nghost-%COMP%]{background-image:linear-gradient(90deg,var(--text-shell-line-color,#ccc) 94%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-background,#fff) 100%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-line-color,#ccc) 78%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-background,#fff) 100%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-line-color,#ccc) 64%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-background,#fff) 100%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-line-color,#ccc) 65%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-background,#fff) 100%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-line-color,#ccc) 30%,var(--text-shell-background,#fff) 0);background-position:0 0,0 calc(var(--text-shell-line-height, 16px)*1 + var(--text-shell-line-gutter, 3px)*0),0 calc(var(--text-shell-line-height, 16px) + var(--text-shell-line-gutter, 3px)),0 calc(var(--text-shell-line-height, 16px)*2 + var(--text-shell-line-gutter, 3px)*1),0 calc(var(--text-shell-line-height, 16px) + var(--text-shell-line-gutter, 3px)),0 calc(var(--text-shell-line-height, 16px)*3 + var(--text-shell-line-gutter, 3px)*2),0 calc(var(--text-shell-line-height, 16px) + var(--text-shell-line-gutter, 3px)),0 calc(var(--text-shell-line-height, 16px)*4 + var(--text-shell-line-gutter, 3px)*3),0 calc(var(--text-shell-line-height, 16px) + var(--text-shell-line-gutter, 3px));background-size:100% var(--text-shell-line-height,16px),100% var(--text-shell-line-gutter,3px),100% var(--text-shell-line-height,16px),100% var(--text-shell-line-gutter,3px),100% var(--text-shell-line-height,16px),100% var(--text-shell-line-gutter,3px),100% var(--text-shell-line-height,16px),100% var(--text-shell-line-gutter,3px),100% var(--text-shell-line-height,16px);min-height:calc(var(--text-shell-line-height, 16px)*5 + var(--text-shell-line-gutter, 3px)*4)}[animation=bouncing][lines="5"][_nghost-%COMP%], [animation=bouncing][lines="6"][_nghost-%COMP%]{background-repeat:no-repeat;animation-direction:alternate-reverse;-webkit-animation-name:animateMultiLine;animation-name:animateMultiLine;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-duration:1s;animation-duration:1s}[animation=bouncing][lines="6"][_nghost-%COMP%]{background-image:linear-gradient(90deg,var(--text-shell-line-color,#ccc) 87%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-background,#fff) 100%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-line-color,#ccc) 61%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-background,#fff) 100%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-line-color,#ccc) 60%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-background,#fff) 100%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-line-color,#ccc) 68%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-background,#fff) 100%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-line-color,#ccc) 75%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-background,#fff) 100%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-line-color,#ccc) 38%,var(--text-shell-background,#fff) 0);background-position:0 0,0 calc(var(--text-shell-line-height, 16px)*1 + var(--text-shell-line-gutter, 3px)*0),0 calc(var(--text-shell-line-height, 16px) + var(--text-shell-line-gutter, 3px)),0 calc(var(--text-shell-line-height, 16px)*2 + var(--text-shell-line-gutter, 3px)*1),0 calc(var(--text-shell-line-height, 16px) + var(--text-shell-line-gutter, 3px)),0 calc(var(--text-shell-line-height, 16px)*3 + var(--text-shell-line-gutter, 3px)*2),0 calc(var(--text-shell-line-height, 16px) + var(--text-shell-line-gutter, 3px)),0 calc(var(--text-shell-line-height, 16px)*4 + var(--text-shell-line-gutter, 3px)*3),0 calc(var(--text-shell-line-height, 16px) + var(--text-shell-line-gutter, 3px)),0 calc(var(--text-shell-line-height, 16px)*5 + var(--text-shell-line-gutter, 3px)*4),0 calc(var(--text-shell-line-height, 16px) + var(--text-shell-line-gutter, 3px));background-size:100% var(--text-shell-line-height,16px),100% var(--text-shell-line-gutter,3px),100% var(--text-shell-line-height,16px),100% var(--text-shell-line-gutter,3px),100% var(--text-shell-line-height,16px),100% var(--text-shell-line-gutter,3px),100% var(--text-shell-line-height,16px),100% var(--text-shell-line-gutter,3px),100% var(--text-shell-line-height,16px),100% var(--text-shell-line-gutter,3px),100% var(--text-shell-line-height,16px);min-height:calc(var(--text-shell-line-height, 16px)*6 + var(--text-shell-line-gutter, 3px)*5)}@keyframes animateMultiLine{0%{background-size:85% var(--text-shell-line-height,16px),100% var(--text-shell-line-gutter,3px),75% var(--text-shell-line-height,16px),100% var(--text-shell-line-gutter,3px),75% var(--text-shell-line-height,16px),100% var(--text-shell-line-gutter,3px),75% var(--text-shell-line-height,16px),100% var(--text-shell-line-gutter,3px),75% var(--text-shell-line-height,16px),100% var(--text-shell-line-gutter,3px),55% var(--text-shell-line-height,16px)}to{background-size:100% var(--text-shell-line-height,16px),100% var(--text-shell-line-gutter,3px),100% var(--text-shell-line-height,16px),100% var(--text-shell-line-gutter,3px),100% var(--text-shell-line-height,16px),100% var(--text-shell-line-gutter,3px),100% var(--text-shell-line-height,16px),100% var(--text-shell-line-gutter,3px),100% var(--text-shell-line-height,16px),100% var(--text-shell-line-gutter,3px),100% var(--text-shell-line-height,16px)}}[animation=bouncing].text-loaded[_nghost-%COMP%]{background:none;min-height:inherit;color:inherit;-webkit-animation:0;animation:0}[animation=gradient][_nghost-%COMP%]{--text-shell-background:#fff;--text-shell-line-color:transparent!important;--text-shell-animation-background:#eee;--text-shell-animation-color:#ddd;min-height:calc(var(--text-shell-line-height, 16px)*1 + var(--text-shell-line-gutter, 3px)*0)}[animation=gradient][_nghost-%COMP%]:before{content:"";position:absolute;top:0;left:0;bottom:0;right:0;background:linear-gradient(90deg,var(--text-shell-animation-background) 8%,var(--text-shell-animation-color) 18%,var(--text-shell-animation-background) 33%);background-size:800px 104px;-webkit-animation:animateBackground 2s ease-in-out infinite;animation:animateBackground 2s ease-in-out infinite}@-webkit-keyframes animateBackground{0%{background-position:-468px 0}to{background-position:468px 0}}@keyframes animateBackground{0%{background-position:-468px 0}to{background-position:468px 0}}[animation=gradient][_nghost-%COMP%]:after{content:"";position:absolute;top:0;left:0;bottom:0;right:0;background-image:linear-gradient(90deg,var(--text-shell-line-color,#ccc) 91%,var(--text-shell-background,#fff) 0);background-position:0 0;background-size:100% var(--text-shell-line-height,16px);background-repeat:no-repeat}[animation=gradient][_nghost-%COMP%]:after, [animation=gradient][lines="1"][_nghost-%COMP%], [animation=gradient][lines="1"][_nghost-%COMP%]:after{min-height:calc(var(--text-shell-line-height, 16px)*1 + var(--text-shell-line-gutter, 3px)*0)}[animation=gradient][lines="1"][_nghost-%COMP%]:after{background-image:linear-gradient(90deg,var(--text-shell-line-color,#ccc) 89%,var(--text-shell-background,#fff) 0);background-position:0 0;background-size:100% var(--text-shell-line-height,16px);background-repeat:no-repeat}[animation=gradient][lines="2"][_nghost-%COMP%], [animation=gradient][lines="2"][_nghost-%COMP%]:after{min-height:calc(var(--text-shell-line-height, 16px)*2 + var(--text-shell-line-gutter, 3px)*1)}[animation=gradient][lines="2"][_nghost-%COMP%]:after{background-image:linear-gradient(90deg,var(--text-shell-line-color,#ccc) 89%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-background,#fff) 100%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-line-color,#ccc) 38%,var(--text-shell-background,#fff) 0);background-position:0 0,0 calc(var(--text-shell-line-height, 16px)*1 + var(--text-shell-line-gutter, 3px)*0),0 calc(var(--text-shell-line-height, 16px) + var(--text-shell-line-gutter, 3px));background-size:100% var(--text-shell-line-height,16px),100% var(--text-shell-line-gutter,3px),100% var(--text-shell-line-height,16px);background-repeat:no-repeat}[animation=gradient][lines="3"][_nghost-%COMP%], [animation=gradient][lines="3"][_nghost-%COMP%]:after{min-height:calc(var(--text-shell-line-height, 16px)*3 + var(--text-shell-line-gutter, 3px)*2)}[animation=gradient][lines="3"][_nghost-%COMP%]:after{background-image:linear-gradient(90deg,var(--text-shell-line-color,#ccc) 91%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-background,#fff) 100%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-line-color,#ccc) 63%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-background,#fff) 100%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-line-color,#ccc) 47%,var(--text-shell-background,#fff) 0);background-position:0 0,0 calc(var(--text-shell-line-height, 16px)*1 + var(--text-shell-line-gutter, 3px)*0),0 calc(var(--text-shell-line-height, 16px) + var(--text-shell-line-gutter, 3px)),0 calc(var(--text-shell-line-height, 16px)*2 + var(--text-shell-line-gutter, 3px)*1),0 calc(var(--text-shell-line-height, 16px) + var(--text-shell-line-gutter, 3px));background-size:100% var(--text-shell-line-height,16px),100% var(--text-shell-line-gutter,3px),100% var(--text-shell-line-height,16px),100% var(--text-shell-line-gutter,3px),100% var(--text-shell-line-height,16px);background-repeat:no-repeat}[animation=gradient][lines="4"][_nghost-%COMP%], [animation=gradient][lines="4"][_nghost-%COMP%]:after{min-height:calc(var(--text-shell-line-height, 16px)*4 + var(--text-shell-line-gutter, 3px)*3)}[animation=gradient][lines="4"][_nghost-%COMP%]:after{background-image:linear-gradient(90deg,var(--text-shell-line-color,#ccc) 94%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-background,#fff) 100%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-line-color,#ccc) 76%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-background,#fff) 100%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-line-color,#ccc) 78%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-background,#fff) 100%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-line-color,#ccc) 33%,var(--text-shell-background,#fff) 0);background-position:0 0,0 calc(var(--text-shell-line-height, 16px)*1 + var(--text-shell-line-gutter, 3px)*0),0 calc(var(--text-shell-line-height, 16px) + var(--text-shell-line-gutter, 3px)),0 calc(var(--text-shell-line-height, 16px)*2 + var(--text-shell-line-gutter, 3px)*1),0 calc(var(--text-shell-line-height, 16px) + var(--text-shell-line-gutter, 3px)),0 calc(var(--text-shell-line-height, 16px)*3 + var(--text-shell-line-gutter, 3px)*2),0 calc(var(--text-shell-line-height, 16px) + var(--text-shell-line-gutter, 3px));background-size:100% var(--text-shell-line-height,16px),100% var(--text-shell-line-gutter,3px),100% var(--text-shell-line-height,16px),100% var(--text-shell-line-gutter,3px),100% var(--text-shell-line-height,16px),100% var(--text-shell-line-gutter,3px),100% var(--text-shell-line-height,16px);background-repeat:no-repeat}[animation=gradient][lines="5"][_nghost-%COMP%], [animation=gradient][lines="5"][_nghost-%COMP%]:after{min-height:calc(var(--text-shell-line-height, 16px)*5 + var(--text-shell-line-gutter, 3px)*4)}[animation=gradient][lines="5"][_nghost-%COMP%]:after{background-image:linear-gradient(90deg,var(--text-shell-line-color,#ccc) 89%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-background,#fff) 100%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-line-color,#ccc) 60%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-background,#fff) 100%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-line-color,#ccc) 63%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-background,#fff) 100%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-line-color,#ccc) 78%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-background,#fff) 100%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-line-color,#ccc) 34%,var(--text-shell-background,#fff) 0);background-position:0 0,0 calc(var(--text-shell-line-height, 16px)*1 + var(--text-shell-line-gutter, 3px)*0),0 calc(var(--text-shell-line-height, 16px) + var(--text-shell-line-gutter, 3px)),0 calc(var(--text-shell-line-height, 16px)*2 + var(--text-shell-line-gutter, 3px)*1),0 calc(var(--text-shell-line-height, 16px) + var(--text-shell-line-gutter, 3px)),0 calc(var(--text-shell-line-height, 16px)*3 + var(--text-shell-line-gutter, 3px)*2),0 calc(var(--text-shell-line-height, 16px) + var(--text-shell-line-gutter, 3px)),0 calc(var(--text-shell-line-height, 16px)*4 + var(--text-shell-line-gutter, 3px)*3),0 calc(var(--text-shell-line-height, 16px) + var(--text-shell-line-gutter, 3px));background-size:100% var(--text-shell-line-height,16px),100% var(--text-shell-line-gutter,3px),100% var(--text-shell-line-height,16px),100% var(--text-shell-line-gutter,3px),100% var(--text-shell-line-height,16px),100% var(--text-shell-line-gutter,3px),100% var(--text-shell-line-height,16px),100% var(--text-shell-line-gutter,3px),100% var(--text-shell-line-height,16px);background-repeat:no-repeat}[animation=gradient][lines="6"][_nghost-%COMP%], [animation=gradient][lines="6"][_nghost-%COMP%]:after{min-height:calc(var(--text-shell-line-height, 16px)*6 + var(--text-shell-line-gutter, 3px)*5)}[animation=gradient][lines="6"][_nghost-%COMP%]:after{background-image:linear-gradient(90deg,var(--text-shell-line-color,#ccc) 87%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-background,#fff) 100%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-line-color,#ccc) 78%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-background,#fff) 100%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-line-color,#ccc) 66%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-background,#fff) 100%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-line-color,#ccc) 74%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-background,#fff) 100%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-line-color,#ccc) 64%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-background,#fff) 100%,var(--text-shell-background,#fff) 0),linear-gradient(90deg,var(--text-shell-line-color,#ccc) 44%,var(--text-shell-background,#fff) 0);background-position:0 0,0 calc(var(--text-shell-line-height, 16px)*1 + var(--text-shell-line-gutter, 3px)*0),0 calc(var(--text-shell-line-height, 16px) + var(--text-shell-line-gutter, 3px)),0 calc(var(--text-shell-line-height, 16px)*2 + var(--text-shell-line-gutter, 3px)*1),0 calc(var(--text-shell-line-height, 16px) + var(--text-shell-line-gutter, 3px)),0 calc(var(--text-shell-line-height, 16px)*3 + var(--text-shell-line-gutter, 3px)*2),0 calc(var(--text-shell-line-height, 16px) + var(--text-shell-line-gutter, 3px)),0 calc(var(--text-shell-line-height, 16px)*4 + var(--text-shell-line-gutter, 3px)*3),0 calc(var(--text-shell-line-height, 16px) + var(--text-shell-line-gutter, 3px)),0 calc(var(--text-shell-line-height, 16px)*5 + var(--text-shell-line-gutter, 3px)*4),0 calc(var(--text-shell-line-height, 16px) + var(--text-shell-line-gutter, 3px));background-size:100% var(--text-shell-line-height,16px),100% var(--text-shell-line-gutter,3px),100% var(--text-shell-line-height,16px),100% var(--text-shell-line-gutter,3px),100% var(--text-shell-line-height,16px),100% var(--text-shell-line-gutter,3px),100% var(--text-shell-line-height,16px),100% var(--text-shell-line-gutter,3px),100% var(--text-shell-line-height,16px),100% var(--text-shell-line-gutter,3px),100% var(--text-shell-line-height,16px);background-repeat:no-repeat}[animation=gradient].text-loaded[_nghost-%COMP%]{background:none;min-height:inherit;color:inherit}[animation=gradient].text-loaded[_nghost-%COMP%]:after, [animation=gradient].text-loaded[_nghost-%COMP%]:before{background:none;-webkit-animation:0;animation:0}']}),e})()}}]);