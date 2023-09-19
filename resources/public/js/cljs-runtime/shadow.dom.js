goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_42907 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_42907(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_42923 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_42923(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__41238 = coll;
var G__41239 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__41238,G__41239) : shadow.dom.lazy_native_coll_seq.call(null,G__41238,G__41239));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__41300 = arguments.length;
switch (G__41300) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__41313 = arguments.length;
switch (G__41313) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__41350 = arguments.length;
switch (G__41350) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__41363 = arguments.length;
switch (G__41363) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__41376 = arguments.length;
switch (G__41376) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__41394 = arguments.length;
switch (G__41394) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e41410){if((e41410 instanceof Object)){
var e = e41410;
return console.log("didnt support attachEvent",el,e);
} else {
throw e41410;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__41445 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__41446 = null;
var count__41447 = (0);
var i__41448 = (0);
while(true){
if((i__41448 < count__41447)){
var el = chunk__41446.cljs$core$IIndexed$_nth$arity$2(null,i__41448);
var handler_42950__$1 = ((function (seq__41445,chunk__41446,count__41447,i__41448,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__41445,chunk__41446,count__41447,i__41448,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_42950__$1);


var G__42951 = seq__41445;
var G__42952 = chunk__41446;
var G__42953 = count__41447;
var G__42954 = (i__41448 + (1));
seq__41445 = G__42951;
chunk__41446 = G__42952;
count__41447 = G__42953;
i__41448 = G__42954;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__41445);
if(temp__5804__auto__){
var seq__41445__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41445__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__41445__$1);
var G__42955 = cljs.core.chunk_rest(seq__41445__$1);
var G__42956 = c__5568__auto__;
var G__42957 = cljs.core.count(c__5568__auto__);
var G__42958 = (0);
seq__41445 = G__42955;
chunk__41446 = G__42956;
count__41447 = G__42957;
i__41448 = G__42958;
continue;
} else {
var el = cljs.core.first(seq__41445__$1);
var handler_42959__$1 = ((function (seq__41445,chunk__41446,count__41447,i__41448,el,seq__41445__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__41445,chunk__41446,count__41447,i__41448,el,seq__41445__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_42959__$1);


var G__42969 = cljs.core.next(seq__41445__$1);
var G__42970 = null;
var G__42971 = (0);
var G__42972 = (0);
seq__41445 = G__42969;
chunk__41446 = G__42970;
count__41447 = G__42971;
i__41448 = G__42972;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__41519 = arguments.length;
switch (G__41519) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__41540 = cljs.core.seq(events);
var chunk__41541 = null;
var count__41542 = (0);
var i__41543 = (0);
while(true){
if((i__41543 < count__41542)){
var vec__41575 = chunk__41541.cljs$core$IIndexed$_nth$arity$2(null,i__41543);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41575,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41575,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__42978 = seq__41540;
var G__42979 = chunk__41541;
var G__42980 = count__41542;
var G__42981 = (i__41543 + (1));
seq__41540 = G__42978;
chunk__41541 = G__42979;
count__41542 = G__42980;
i__41543 = G__42981;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__41540);
if(temp__5804__auto__){
var seq__41540__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41540__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__41540__$1);
var G__42982 = cljs.core.chunk_rest(seq__41540__$1);
var G__42983 = c__5568__auto__;
var G__42984 = cljs.core.count(c__5568__auto__);
var G__42985 = (0);
seq__41540 = G__42982;
chunk__41541 = G__42983;
count__41542 = G__42984;
i__41543 = G__42985;
continue;
} else {
var vec__41583 = cljs.core.first(seq__41540__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41583,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41583,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__42986 = cljs.core.next(seq__41540__$1);
var G__42987 = null;
var G__42988 = (0);
var G__42989 = (0);
seq__41540 = G__42986;
chunk__41541 = G__42987;
count__41542 = G__42988;
i__41543 = G__42989;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__41593 = cljs.core.seq(styles);
var chunk__41594 = null;
var count__41595 = (0);
var i__41596 = (0);
while(true){
if((i__41596 < count__41595)){
var vec__41630 = chunk__41594.cljs$core$IIndexed$_nth$arity$2(null,i__41596);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41630,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41630,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__42990 = seq__41593;
var G__42991 = chunk__41594;
var G__42992 = count__41595;
var G__42993 = (i__41596 + (1));
seq__41593 = G__42990;
chunk__41594 = G__42991;
count__41595 = G__42992;
i__41596 = G__42993;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__41593);
if(temp__5804__auto__){
var seq__41593__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41593__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__41593__$1);
var G__42994 = cljs.core.chunk_rest(seq__41593__$1);
var G__42995 = c__5568__auto__;
var G__42996 = cljs.core.count(c__5568__auto__);
var G__42997 = (0);
seq__41593 = G__42994;
chunk__41594 = G__42995;
count__41595 = G__42996;
i__41596 = G__42997;
continue;
} else {
var vec__41636 = cljs.core.first(seq__41593__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41636,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41636,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__42998 = cljs.core.next(seq__41593__$1);
var G__42999 = null;
var G__43000 = (0);
var G__43001 = (0);
seq__41593 = G__42998;
chunk__41594 = G__42999;
count__41595 = G__43000;
i__41596 = G__43001;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__41644_43002 = key;
var G__41644_43003__$1 = (((G__41644_43002 instanceof cljs.core.Keyword))?G__41644_43002.fqn:null);
switch (G__41644_43003__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_43007 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_43007,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_43007,"aria-");
}
})())){
el.setAttribute(ks_43007,value);
} else {
(el[ks_43007] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__41701){
var map__41702 = p__41701;
var map__41702__$1 = cljs.core.__destructure_map(map__41702);
var props = map__41702__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41702__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__41712 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41712,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41712,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41712,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__41716 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__41716,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__41716;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__41726 = arguments.length;
switch (G__41726) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__41745){
var vec__41746 = p__41745;
var seq__41747 = cljs.core.seq(vec__41746);
var first__41748 = cljs.core.first(seq__41747);
var seq__41747__$1 = cljs.core.next(seq__41747);
var nn = first__41748;
var first__41748__$1 = cljs.core.first(seq__41747__$1);
var seq__41747__$2 = cljs.core.next(seq__41747__$1);
var np = first__41748__$1;
var nc = seq__41747__$2;
var node = vec__41746;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__41759 = nn;
var G__41760 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__41759,G__41760) : create_fn.call(null,G__41759,G__41760));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__41762 = nn;
var G__41763 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__41762,G__41763) : create_fn.call(null,G__41762,G__41763));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__41768 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41768,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41768,(1),null);
var seq__41771_43019 = cljs.core.seq(node_children);
var chunk__41772_43020 = null;
var count__41773_43021 = (0);
var i__41774_43022 = (0);
while(true){
if((i__41774_43022 < count__41773_43021)){
var child_struct_43023 = chunk__41772_43020.cljs$core$IIndexed$_nth$arity$2(null,i__41774_43022);
var children_43024 = shadow.dom.dom_node(child_struct_43023);
if(cljs.core.seq_QMARK_(children_43024)){
var seq__41839_43025 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_43024));
var chunk__41841_43026 = null;
var count__41842_43027 = (0);
var i__41843_43028 = (0);
while(true){
if((i__41843_43028 < count__41842_43027)){
var child_43030 = chunk__41841_43026.cljs$core$IIndexed$_nth$arity$2(null,i__41843_43028);
if(cljs.core.truth_(child_43030)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_43030);


var G__43031 = seq__41839_43025;
var G__43032 = chunk__41841_43026;
var G__43033 = count__41842_43027;
var G__43034 = (i__41843_43028 + (1));
seq__41839_43025 = G__43031;
chunk__41841_43026 = G__43032;
count__41842_43027 = G__43033;
i__41843_43028 = G__43034;
continue;
} else {
var G__43035 = seq__41839_43025;
var G__43036 = chunk__41841_43026;
var G__43037 = count__41842_43027;
var G__43038 = (i__41843_43028 + (1));
seq__41839_43025 = G__43035;
chunk__41841_43026 = G__43036;
count__41842_43027 = G__43037;
i__41843_43028 = G__43038;
continue;
}
} else {
var temp__5804__auto___43039 = cljs.core.seq(seq__41839_43025);
if(temp__5804__auto___43039){
var seq__41839_43040__$1 = temp__5804__auto___43039;
if(cljs.core.chunked_seq_QMARK_(seq__41839_43040__$1)){
var c__5568__auto___43041 = cljs.core.chunk_first(seq__41839_43040__$1);
var G__43042 = cljs.core.chunk_rest(seq__41839_43040__$1);
var G__43043 = c__5568__auto___43041;
var G__43044 = cljs.core.count(c__5568__auto___43041);
var G__43045 = (0);
seq__41839_43025 = G__43042;
chunk__41841_43026 = G__43043;
count__41842_43027 = G__43044;
i__41843_43028 = G__43045;
continue;
} else {
var child_43046 = cljs.core.first(seq__41839_43040__$1);
if(cljs.core.truth_(child_43046)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_43046);


var G__43048 = cljs.core.next(seq__41839_43040__$1);
var G__43049 = null;
var G__43050 = (0);
var G__43051 = (0);
seq__41839_43025 = G__43048;
chunk__41841_43026 = G__43049;
count__41842_43027 = G__43050;
i__41843_43028 = G__43051;
continue;
} else {
var G__43052 = cljs.core.next(seq__41839_43040__$1);
var G__43053 = null;
var G__43054 = (0);
var G__43055 = (0);
seq__41839_43025 = G__43052;
chunk__41841_43026 = G__43053;
count__41842_43027 = G__43054;
i__41843_43028 = G__43055;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_43024);
}


var G__43056 = seq__41771_43019;
var G__43057 = chunk__41772_43020;
var G__43058 = count__41773_43021;
var G__43059 = (i__41774_43022 + (1));
seq__41771_43019 = G__43056;
chunk__41772_43020 = G__43057;
count__41773_43021 = G__43058;
i__41774_43022 = G__43059;
continue;
} else {
var temp__5804__auto___43060 = cljs.core.seq(seq__41771_43019);
if(temp__5804__auto___43060){
var seq__41771_43061__$1 = temp__5804__auto___43060;
if(cljs.core.chunked_seq_QMARK_(seq__41771_43061__$1)){
var c__5568__auto___43062 = cljs.core.chunk_first(seq__41771_43061__$1);
var G__43063 = cljs.core.chunk_rest(seq__41771_43061__$1);
var G__43064 = c__5568__auto___43062;
var G__43065 = cljs.core.count(c__5568__auto___43062);
var G__43066 = (0);
seq__41771_43019 = G__43063;
chunk__41772_43020 = G__43064;
count__41773_43021 = G__43065;
i__41774_43022 = G__43066;
continue;
} else {
var child_struct_43067 = cljs.core.first(seq__41771_43061__$1);
var children_43068 = shadow.dom.dom_node(child_struct_43067);
if(cljs.core.seq_QMARK_(children_43068)){
var seq__41870_43069 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_43068));
var chunk__41872_43070 = null;
var count__41873_43071 = (0);
var i__41874_43072 = (0);
while(true){
if((i__41874_43072 < count__41873_43071)){
var child_43073 = chunk__41872_43070.cljs$core$IIndexed$_nth$arity$2(null,i__41874_43072);
if(cljs.core.truth_(child_43073)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_43073);


var G__43078 = seq__41870_43069;
var G__43081 = chunk__41872_43070;
var G__43082 = count__41873_43071;
var G__43083 = (i__41874_43072 + (1));
seq__41870_43069 = G__43078;
chunk__41872_43070 = G__43081;
count__41873_43071 = G__43082;
i__41874_43072 = G__43083;
continue;
} else {
var G__43087 = seq__41870_43069;
var G__43088 = chunk__41872_43070;
var G__43089 = count__41873_43071;
var G__43090 = (i__41874_43072 + (1));
seq__41870_43069 = G__43087;
chunk__41872_43070 = G__43088;
count__41873_43071 = G__43089;
i__41874_43072 = G__43090;
continue;
}
} else {
var temp__5804__auto___43091__$1 = cljs.core.seq(seq__41870_43069);
if(temp__5804__auto___43091__$1){
var seq__41870_43092__$1 = temp__5804__auto___43091__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41870_43092__$1)){
var c__5568__auto___43093 = cljs.core.chunk_first(seq__41870_43092__$1);
var G__43094 = cljs.core.chunk_rest(seq__41870_43092__$1);
var G__43095 = c__5568__auto___43093;
var G__43096 = cljs.core.count(c__5568__auto___43093);
var G__43097 = (0);
seq__41870_43069 = G__43094;
chunk__41872_43070 = G__43095;
count__41873_43071 = G__43096;
i__41874_43072 = G__43097;
continue;
} else {
var child_43098 = cljs.core.first(seq__41870_43092__$1);
if(cljs.core.truth_(child_43098)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_43098);


var G__43099 = cljs.core.next(seq__41870_43092__$1);
var G__43100 = null;
var G__43101 = (0);
var G__43102 = (0);
seq__41870_43069 = G__43099;
chunk__41872_43070 = G__43100;
count__41873_43071 = G__43101;
i__41874_43072 = G__43102;
continue;
} else {
var G__43103 = cljs.core.next(seq__41870_43092__$1);
var G__43104 = null;
var G__43105 = (0);
var G__43106 = (0);
seq__41870_43069 = G__43103;
chunk__41872_43070 = G__43104;
count__41873_43071 = G__43105;
i__41874_43072 = G__43106;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_43068);
}


var G__43107 = cljs.core.next(seq__41771_43061__$1);
var G__43108 = null;
var G__43109 = (0);
var G__43110 = (0);
seq__41771_43019 = G__43107;
chunk__41772_43020 = G__43108;
count__41773_43021 = G__43109;
i__41774_43022 = G__43110;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__41941 = cljs.core.seq(node);
var chunk__41942 = null;
var count__41943 = (0);
var i__41944 = (0);
while(true){
if((i__41944 < count__41943)){
var n = chunk__41942.cljs$core$IIndexed$_nth$arity$2(null,i__41944);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__43117 = seq__41941;
var G__43118 = chunk__41942;
var G__43119 = count__41943;
var G__43120 = (i__41944 + (1));
seq__41941 = G__43117;
chunk__41942 = G__43118;
count__41943 = G__43119;
i__41944 = G__43120;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__41941);
if(temp__5804__auto__){
var seq__41941__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41941__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__41941__$1);
var G__43121 = cljs.core.chunk_rest(seq__41941__$1);
var G__43122 = c__5568__auto__;
var G__43123 = cljs.core.count(c__5568__auto__);
var G__43124 = (0);
seq__41941 = G__43121;
chunk__41942 = G__43122;
count__41943 = G__43123;
i__41944 = G__43124;
continue;
} else {
var n = cljs.core.first(seq__41941__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__43125 = cljs.core.next(seq__41941__$1);
var G__43126 = null;
var G__43127 = (0);
var G__43128 = (0);
seq__41941 = G__43125;
chunk__41942 = G__43126;
count__41943 = G__43127;
i__41944 = G__43128;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__41989 = arguments.length;
switch (G__41989) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__41996 = arguments.length;
switch (G__41996) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__42014 = arguments.length;
switch (G__42014) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43139 = arguments.length;
var i__5770__auto___43140 = (0);
while(true){
if((i__5770__auto___43140 < len__5769__auto___43139)){
args__5775__auto__.push((arguments[i__5770__auto___43140]));

var G__43141 = (i__5770__auto___43140 + (1));
i__5770__auto___43140 = G__43141;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__42059_43149 = cljs.core.seq(nodes);
var chunk__42060_43150 = null;
var count__42061_43151 = (0);
var i__42062_43152 = (0);
while(true){
if((i__42062_43152 < count__42061_43151)){
var node_43153 = chunk__42060_43150.cljs$core$IIndexed$_nth$arity$2(null,i__42062_43152);
fragment.appendChild(shadow.dom._to_dom(node_43153));


var G__43155 = seq__42059_43149;
var G__43156 = chunk__42060_43150;
var G__43157 = count__42061_43151;
var G__43158 = (i__42062_43152 + (1));
seq__42059_43149 = G__43155;
chunk__42060_43150 = G__43156;
count__42061_43151 = G__43157;
i__42062_43152 = G__43158;
continue;
} else {
var temp__5804__auto___43160 = cljs.core.seq(seq__42059_43149);
if(temp__5804__auto___43160){
var seq__42059_43161__$1 = temp__5804__auto___43160;
if(cljs.core.chunked_seq_QMARK_(seq__42059_43161__$1)){
var c__5568__auto___43163 = cljs.core.chunk_first(seq__42059_43161__$1);
var G__43164 = cljs.core.chunk_rest(seq__42059_43161__$1);
var G__43165 = c__5568__auto___43163;
var G__43166 = cljs.core.count(c__5568__auto___43163);
var G__43167 = (0);
seq__42059_43149 = G__43164;
chunk__42060_43150 = G__43165;
count__42061_43151 = G__43166;
i__42062_43152 = G__43167;
continue;
} else {
var node_43169 = cljs.core.first(seq__42059_43161__$1);
fragment.appendChild(shadow.dom._to_dom(node_43169));


var G__43170 = cljs.core.next(seq__42059_43161__$1);
var G__43171 = null;
var G__43172 = (0);
var G__43173 = (0);
seq__42059_43149 = G__43170;
chunk__42060_43150 = G__43171;
count__42061_43151 = G__43172;
i__42062_43152 = G__43173;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq42049){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42049));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__42079_43175 = cljs.core.seq(scripts);
var chunk__42080_43176 = null;
var count__42081_43177 = (0);
var i__42082_43178 = (0);
while(true){
if((i__42082_43178 < count__42081_43177)){
var vec__42090_43180 = chunk__42080_43176.cljs$core$IIndexed$_nth$arity$2(null,i__42082_43178);
var script_tag_43181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42090_43180,(0),null);
var script_body_43182 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42090_43180,(1),null);
eval(script_body_43182);


var G__43183 = seq__42079_43175;
var G__43184 = chunk__42080_43176;
var G__43185 = count__42081_43177;
var G__43186 = (i__42082_43178 + (1));
seq__42079_43175 = G__43183;
chunk__42080_43176 = G__43184;
count__42081_43177 = G__43185;
i__42082_43178 = G__43186;
continue;
} else {
var temp__5804__auto___43187 = cljs.core.seq(seq__42079_43175);
if(temp__5804__auto___43187){
var seq__42079_43188__$1 = temp__5804__auto___43187;
if(cljs.core.chunked_seq_QMARK_(seq__42079_43188__$1)){
var c__5568__auto___43189 = cljs.core.chunk_first(seq__42079_43188__$1);
var G__43190 = cljs.core.chunk_rest(seq__42079_43188__$1);
var G__43191 = c__5568__auto___43189;
var G__43192 = cljs.core.count(c__5568__auto___43189);
var G__43193 = (0);
seq__42079_43175 = G__43190;
chunk__42080_43176 = G__43191;
count__42081_43177 = G__43192;
i__42082_43178 = G__43193;
continue;
} else {
var vec__42111_43194 = cljs.core.first(seq__42079_43188__$1);
var script_tag_43195 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42111_43194,(0),null);
var script_body_43196 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42111_43194,(1),null);
eval(script_body_43196);


var G__43197 = cljs.core.next(seq__42079_43188__$1);
var G__43198 = null;
var G__43199 = (0);
var G__43200 = (0);
seq__42079_43175 = G__43197;
chunk__42080_43176 = G__43198;
count__42081_43177 = G__43199;
i__42082_43178 = G__43200;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__42130){
var vec__42131 = p__42130;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42131,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42131,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__42157 = arguments.length;
switch (G__42157) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__42178 = cljs.core.seq(style_keys);
var chunk__42179 = null;
var count__42180 = (0);
var i__42181 = (0);
while(true){
if((i__42181 < count__42180)){
var it = chunk__42179.cljs$core$IIndexed$_nth$arity$2(null,i__42181);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__43206 = seq__42178;
var G__43207 = chunk__42179;
var G__43208 = count__42180;
var G__43209 = (i__42181 + (1));
seq__42178 = G__43206;
chunk__42179 = G__43207;
count__42180 = G__43208;
i__42181 = G__43209;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__42178);
if(temp__5804__auto__){
var seq__42178__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42178__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__42178__$1);
var G__43210 = cljs.core.chunk_rest(seq__42178__$1);
var G__43211 = c__5568__auto__;
var G__43212 = cljs.core.count(c__5568__auto__);
var G__43213 = (0);
seq__42178 = G__43210;
chunk__42179 = G__43211;
count__42180 = G__43212;
i__42181 = G__43213;
continue;
} else {
var it = cljs.core.first(seq__42178__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__43217 = cljs.core.next(seq__42178__$1);
var G__43218 = null;
var G__43219 = (0);
var G__43220 = (0);
seq__42178 = G__43217;
chunk__42179 = G__43218;
count__42180 = G__43219;
i__42181 = G__43220;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k42202,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__42212 = k42202;
var G__42212__$1 = (((G__42212 instanceof cljs.core.Keyword))?G__42212.fqn:null);
switch (G__42212__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k42202,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__42217){
var vec__42219 = p__42217;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42219,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42219,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42201){
var self__ = this;
var G__42201__$1 = this;
return (new cljs.core.RecordIter((0),G__42201__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42204,other42205){
var self__ = this;
var this42204__$1 = this;
return (((!((other42205 == null)))) && ((((this42204__$1.constructor === other42205.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42204__$1.x,other42205.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42204__$1.y,other42205.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42204__$1.__extmap,other42205.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k42202){
var self__ = this;
var this__5350__auto____$1 = this;
var G__42247 = k42202;
var G__42247__$1 = (((G__42247 instanceof cljs.core.Keyword))?G__42247.fqn:null);
switch (G__42247__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k42202);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__42201){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__42253 = cljs.core.keyword_identical_QMARK_;
var expr__42254 = k__5352__auto__;
if(cljs.core.truth_((pred__42253.cljs$core$IFn$_invoke$arity$2 ? pred__42253.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__42254) : pred__42253.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__42254)))){
return (new shadow.dom.Coordinate(G__42201,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__42253.cljs$core$IFn$_invoke$arity$2 ? pred__42253.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__42254) : pred__42253.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__42254)))){
return (new shadow.dom.Coordinate(self__.x,G__42201,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__42201),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__42201){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__42201,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__42206){
var extmap__5385__auto__ = (function (){var G__42275 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__42206,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__42206)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__42275);
} else {
return G__42275;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__42206),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__42206),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k42286,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__42302 = k42286;
var G__42302__$1 = (((G__42302 instanceof cljs.core.Keyword))?G__42302.fqn:null);
switch (G__42302__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k42286,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__42306){
var vec__42307 = p__42306;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42307,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42307,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42285){
var self__ = this;
var G__42285__$1 = this;
return (new cljs.core.RecordIter((0),G__42285__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42287,other42288){
var self__ = this;
var this42287__$1 = this;
return (((!((other42288 == null)))) && ((((this42287__$1.constructor === other42288.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42287__$1.w,other42288.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42287__$1.h,other42288.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42287__$1.__extmap,other42288.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k42286){
var self__ = this;
var this__5350__auto____$1 = this;
var G__42340 = k42286;
var G__42340__$1 = (((G__42340 instanceof cljs.core.Keyword))?G__42340.fqn:null);
switch (G__42340__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k42286);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__42285){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__42343 = cljs.core.keyword_identical_QMARK_;
var expr__42344 = k__5352__auto__;
if(cljs.core.truth_((pred__42343.cljs$core$IFn$_invoke$arity$2 ? pred__42343.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__42344) : pred__42343.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__42344)))){
return (new shadow.dom.Size(G__42285,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__42343.cljs$core$IFn$_invoke$arity$2 ? pred__42343.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__42344) : pred__42343.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__42344)))){
return (new shadow.dom.Size(self__.w,G__42285,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__42285),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__42285){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__42285,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__42294){
var extmap__5385__auto__ = (function (){var G__42375 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__42294,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__42294)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__42375);
} else {
return G__42375;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__42294),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__42294),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__43258 = (i + (1));
var G__43259 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__43258;
ret = G__43259;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__42452){
var vec__42454 = p__42452;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42454,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42454,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__42468 = arguments.length;
switch (G__42468) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__43269 = ps;
var G__43270 = (i + (1));
el__$1 = G__43269;
i = G__43270;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__42550 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42550,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42550,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42550,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__42567_43275 = cljs.core.seq(props);
var chunk__42568_43276 = null;
var count__42569_43277 = (0);
var i__42570_43278 = (0);
while(true){
if((i__42570_43278 < count__42569_43277)){
var vec__42626_43279 = chunk__42568_43276.cljs$core$IIndexed$_nth$arity$2(null,i__42570_43278);
var k_43280 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42626_43279,(0),null);
var v_43281 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42626_43279,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_43280);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_43280),v_43281);


var G__43282 = seq__42567_43275;
var G__43283 = chunk__42568_43276;
var G__43284 = count__42569_43277;
var G__43285 = (i__42570_43278 + (1));
seq__42567_43275 = G__43282;
chunk__42568_43276 = G__43283;
count__42569_43277 = G__43284;
i__42570_43278 = G__43285;
continue;
} else {
var temp__5804__auto___43286 = cljs.core.seq(seq__42567_43275);
if(temp__5804__auto___43286){
var seq__42567_43288__$1 = temp__5804__auto___43286;
if(cljs.core.chunked_seq_QMARK_(seq__42567_43288__$1)){
var c__5568__auto___43291 = cljs.core.chunk_first(seq__42567_43288__$1);
var G__43292 = cljs.core.chunk_rest(seq__42567_43288__$1);
var G__43293 = c__5568__auto___43291;
var G__43294 = cljs.core.count(c__5568__auto___43291);
var G__43295 = (0);
seq__42567_43275 = G__43292;
chunk__42568_43276 = G__43293;
count__42569_43277 = G__43294;
i__42570_43278 = G__43295;
continue;
} else {
var vec__42655_43296 = cljs.core.first(seq__42567_43288__$1);
var k_43297 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42655_43296,(0),null);
var v_43298 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42655_43296,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_43297);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_43297),v_43298);


var G__43300 = cljs.core.next(seq__42567_43288__$1);
var G__43301 = null;
var G__43302 = (0);
var G__43303 = (0);
seq__42567_43275 = G__43300;
chunk__42568_43276 = G__43301;
count__42569_43277 = G__43302;
i__42570_43278 = G__43303;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__42678 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42678,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42678,(1),null);
var seq__42682_43304 = cljs.core.seq(node_children);
var chunk__42684_43305 = null;
var count__42685_43306 = (0);
var i__42686_43307 = (0);
while(true){
if((i__42686_43307 < count__42685_43306)){
var child_struct_43311 = chunk__42684_43305.cljs$core$IIndexed$_nth$arity$2(null,i__42686_43307);
if((!((child_struct_43311 == null)))){
if(typeof child_struct_43311 === 'string'){
var text_43312 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_43312),child_struct_43311].join(''));
} else {
var children_43313 = shadow.dom.svg_node(child_struct_43311);
if(cljs.core.seq_QMARK_(children_43313)){
var seq__42755_43314 = cljs.core.seq(children_43313);
var chunk__42757_43315 = null;
var count__42758_43316 = (0);
var i__42759_43317 = (0);
while(true){
if((i__42759_43317 < count__42758_43316)){
var child_43318 = chunk__42757_43315.cljs$core$IIndexed$_nth$arity$2(null,i__42759_43317);
if(cljs.core.truth_(child_43318)){
node.appendChild(child_43318);


var G__43319 = seq__42755_43314;
var G__43320 = chunk__42757_43315;
var G__43321 = count__42758_43316;
var G__43322 = (i__42759_43317 + (1));
seq__42755_43314 = G__43319;
chunk__42757_43315 = G__43320;
count__42758_43316 = G__43321;
i__42759_43317 = G__43322;
continue;
} else {
var G__43323 = seq__42755_43314;
var G__43324 = chunk__42757_43315;
var G__43325 = count__42758_43316;
var G__43326 = (i__42759_43317 + (1));
seq__42755_43314 = G__43323;
chunk__42757_43315 = G__43324;
count__42758_43316 = G__43325;
i__42759_43317 = G__43326;
continue;
}
} else {
var temp__5804__auto___43327 = cljs.core.seq(seq__42755_43314);
if(temp__5804__auto___43327){
var seq__42755_43328__$1 = temp__5804__auto___43327;
if(cljs.core.chunked_seq_QMARK_(seq__42755_43328__$1)){
var c__5568__auto___43329 = cljs.core.chunk_first(seq__42755_43328__$1);
var G__43330 = cljs.core.chunk_rest(seq__42755_43328__$1);
var G__43331 = c__5568__auto___43329;
var G__43332 = cljs.core.count(c__5568__auto___43329);
var G__43333 = (0);
seq__42755_43314 = G__43330;
chunk__42757_43315 = G__43331;
count__42758_43316 = G__43332;
i__42759_43317 = G__43333;
continue;
} else {
var child_43334 = cljs.core.first(seq__42755_43328__$1);
if(cljs.core.truth_(child_43334)){
node.appendChild(child_43334);


var G__43335 = cljs.core.next(seq__42755_43328__$1);
var G__43336 = null;
var G__43337 = (0);
var G__43338 = (0);
seq__42755_43314 = G__43335;
chunk__42757_43315 = G__43336;
count__42758_43316 = G__43337;
i__42759_43317 = G__43338;
continue;
} else {
var G__43339 = cljs.core.next(seq__42755_43328__$1);
var G__43340 = null;
var G__43341 = (0);
var G__43342 = (0);
seq__42755_43314 = G__43339;
chunk__42757_43315 = G__43340;
count__42758_43316 = G__43341;
i__42759_43317 = G__43342;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_43313);
}
}


var G__43343 = seq__42682_43304;
var G__43344 = chunk__42684_43305;
var G__43345 = count__42685_43306;
var G__43346 = (i__42686_43307 + (1));
seq__42682_43304 = G__43343;
chunk__42684_43305 = G__43344;
count__42685_43306 = G__43345;
i__42686_43307 = G__43346;
continue;
} else {
var G__43347 = seq__42682_43304;
var G__43348 = chunk__42684_43305;
var G__43349 = count__42685_43306;
var G__43350 = (i__42686_43307 + (1));
seq__42682_43304 = G__43347;
chunk__42684_43305 = G__43348;
count__42685_43306 = G__43349;
i__42686_43307 = G__43350;
continue;
}
} else {
var temp__5804__auto___43351 = cljs.core.seq(seq__42682_43304);
if(temp__5804__auto___43351){
var seq__42682_43352__$1 = temp__5804__auto___43351;
if(cljs.core.chunked_seq_QMARK_(seq__42682_43352__$1)){
var c__5568__auto___43353 = cljs.core.chunk_first(seq__42682_43352__$1);
var G__43357 = cljs.core.chunk_rest(seq__42682_43352__$1);
var G__43358 = c__5568__auto___43353;
var G__43359 = cljs.core.count(c__5568__auto___43353);
var G__43360 = (0);
seq__42682_43304 = G__43357;
chunk__42684_43305 = G__43358;
count__42685_43306 = G__43359;
i__42686_43307 = G__43360;
continue;
} else {
var child_struct_43361 = cljs.core.first(seq__42682_43352__$1);
if((!((child_struct_43361 == null)))){
if(typeof child_struct_43361 === 'string'){
var text_43362 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_43362),child_struct_43361].join(''));
} else {
var children_43363 = shadow.dom.svg_node(child_struct_43361);
if(cljs.core.seq_QMARK_(children_43363)){
var seq__42792_43364 = cljs.core.seq(children_43363);
var chunk__42794_43365 = null;
var count__42795_43366 = (0);
var i__42796_43367 = (0);
while(true){
if((i__42796_43367 < count__42795_43366)){
var child_43368 = chunk__42794_43365.cljs$core$IIndexed$_nth$arity$2(null,i__42796_43367);
if(cljs.core.truth_(child_43368)){
node.appendChild(child_43368);


var G__43369 = seq__42792_43364;
var G__43370 = chunk__42794_43365;
var G__43371 = count__42795_43366;
var G__43372 = (i__42796_43367 + (1));
seq__42792_43364 = G__43369;
chunk__42794_43365 = G__43370;
count__42795_43366 = G__43371;
i__42796_43367 = G__43372;
continue;
} else {
var G__43373 = seq__42792_43364;
var G__43374 = chunk__42794_43365;
var G__43375 = count__42795_43366;
var G__43376 = (i__42796_43367 + (1));
seq__42792_43364 = G__43373;
chunk__42794_43365 = G__43374;
count__42795_43366 = G__43375;
i__42796_43367 = G__43376;
continue;
}
} else {
var temp__5804__auto___43377__$1 = cljs.core.seq(seq__42792_43364);
if(temp__5804__auto___43377__$1){
var seq__42792_43378__$1 = temp__5804__auto___43377__$1;
if(cljs.core.chunked_seq_QMARK_(seq__42792_43378__$1)){
var c__5568__auto___43379 = cljs.core.chunk_first(seq__42792_43378__$1);
var G__43380 = cljs.core.chunk_rest(seq__42792_43378__$1);
var G__43381 = c__5568__auto___43379;
var G__43382 = cljs.core.count(c__5568__auto___43379);
var G__43383 = (0);
seq__42792_43364 = G__43380;
chunk__42794_43365 = G__43381;
count__42795_43366 = G__43382;
i__42796_43367 = G__43383;
continue;
} else {
var child_43384 = cljs.core.first(seq__42792_43378__$1);
if(cljs.core.truth_(child_43384)){
node.appendChild(child_43384);


var G__43385 = cljs.core.next(seq__42792_43378__$1);
var G__43386 = null;
var G__43387 = (0);
var G__43388 = (0);
seq__42792_43364 = G__43385;
chunk__42794_43365 = G__43386;
count__42795_43366 = G__43387;
i__42796_43367 = G__43388;
continue;
} else {
var G__43389 = cljs.core.next(seq__42792_43378__$1);
var G__43390 = null;
var G__43391 = (0);
var G__43392 = (0);
seq__42792_43364 = G__43389;
chunk__42794_43365 = G__43390;
count__42795_43366 = G__43391;
i__42796_43367 = G__43392;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_43363);
}
}


var G__43393 = cljs.core.next(seq__42682_43352__$1);
var G__43394 = null;
var G__43395 = (0);
var G__43396 = (0);
seq__42682_43304 = G__43393;
chunk__42684_43305 = G__43394;
count__42685_43306 = G__43395;
i__42686_43307 = G__43396;
continue;
} else {
var G__43397 = cljs.core.next(seq__42682_43352__$1);
var G__43398 = null;
var G__43399 = (0);
var G__43400 = (0);
seq__42682_43304 = G__43397;
chunk__42684_43305 = G__43398;
count__42685_43306 = G__43399;
i__42686_43307 = G__43400;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43401 = arguments.length;
var i__5770__auto___43402 = (0);
while(true){
if((i__5770__auto___43402 < len__5769__auto___43401)){
args__5775__auto__.push((arguments[i__5770__auto___43402]));

var G__43403 = (i__5770__auto___43402 + (1));
i__5770__auto___43402 = G__43403;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq42861){
var G__42862 = cljs.core.first(seq42861);
var seq42861__$1 = cljs.core.next(seq42861);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42862,seq42861__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__42876 = arguments.length;
switch (G__42876) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__37673__auto___43406 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37676__auto__ = (function (){var switch__37428__auto__ = (function (state_42882){
var state_val_42883 = (state_42882[(1)]);
if((state_val_42883 === (1))){
var state_42882__$1 = state_42882;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42882__$1,(2),once_or_cleanup);
} else {
if((state_val_42883 === (2))){
var inst_42879 = (state_42882[(2)]);
var inst_42880 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_42882__$1 = (function (){var statearr_42888 = state_42882;
(statearr_42888[(7)] = inst_42879);

return statearr_42888;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_42882__$1,inst_42880);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__37429__auto__ = null;
var shadow$dom$state_machine__37429__auto____0 = (function (){
var statearr_42892 = [null,null,null,null,null,null,null,null];
(statearr_42892[(0)] = shadow$dom$state_machine__37429__auto__);

(statearr_42892[(1)] = (1));

return statearr_42892;
});
var shadow$dom$state_machine__37429__auto____1 = (function (state_42882){
while(true){
var ret_value__37430__auto__ = (function (){try{while(true){
var result__37431__auto__ = switch__37428__auto__(state_42882);
if(cljs.core.keyword_identical_QMARK_(result__37431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37431__auto__;
}
break;
}
}catch (e42893){var ex__37432__auto__ = e42893;
var statearr_42896_43407 = state_42882;
(statearr_42896_43407[(2)] = ex__37432__auto__);


if(cljs.core.seq((state_42882[(4)]))){
var statearr_42897_43408 = state_42882;
(statearr_42897_43408[(1)] = cljs.core.first((state_42882[(4)])));

} else {
throw ex__37432__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43411 = state_42882;
state_42882 = G__43411;
continue;
} else {
return ret_value__37430__auto__;
}
break;
}
});
shadow$dom$state_machine__37429__auto__ = function(state_42882){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__37429__auto____0.call(this);
case 1:
return shadow$dom$state_machine__37429__auto____1.call(this,state_42882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__37429__auto____0;
shadow$dom$state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__37429__auto____1;
return shadow$dom$state_machine__37429__auto__;
})()
})();
var state__37677__auto__ = (function (){var statearr_42898 = f__37676__auto__();
(statearr_42898[(6)] = c__37673__auto___43406);

return statearr_42898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37677__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
