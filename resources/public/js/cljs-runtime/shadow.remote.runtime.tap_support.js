goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__43763,p__43764){
var map__43765 = p__43763;
var map__43765__$1 = cljs.core.__destructure_map(map__43765);
var svc = map__43765__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43765__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43765__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43765__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__43766 = p__43764;
var map__43766__$1 = cljs.core.__destructure_map(map__43766);
var msg = map__43766__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43766__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43766__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43766__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43766__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__43798,p__43799){
var map__43803 = p__43798;
var map__43803__$1 = cljs.core.__destructure_map(map__43803);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43803__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__43804 = p__43799;
var map__43804__$1 = cljs.core.__destructure_map(map__43804);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43804__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__43809,p__43810){
var map__43814 = p__43809;
var map__43814__$1 = cljs.core.__destructure_map(map__43814);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43814__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43814__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__43815 = p__43810;
var map__43815__$1 = cljs.core.__destructure_map(map__43815);
var msg = map__43815__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43815__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__43831,tid){
var map__43832 = p__43831;
var map__43832__$1 = cljs.core.__destructure_map(map__43832);
var svc = map__43832__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43832__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__43846 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__43847 = null;
var count__43848 = (0);
var i__43849 = (0);
while(true){
if((i__43849 < count__43848)){
var vec__43859 = chunk__43847.cljs$core$IIndexed$_nth$arity$2(null,i__43849);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43859,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43859,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__43946 = seq__43846;
var G__43947 = chunk__43847;
var G__43948 = count__43848;
var G__43949 = (i__43849 + (1));
seq__43846 = G__43946;
chunk__43847 = G__43947;
count__43848 = G__43948;
i__43849 = G__43949;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__43846);
if(temp__5804__auto__){
var seq__43846__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43846__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__43846__$1);
var G__43950 = cljs.core.chunk_rest(seq__43846__$1);
var G__43951 = c__5568__auto__;
var G__43952 = cljs.core.count(c__5568__auto__);
var G__43953 = (0);
seq__43846 = G__43950;
chunk__43847 = G__43951;
count__43848 = G__43952;
i__43849 = G__43953;
continue;
} else {
var vec__43878 = cljs.core.first(seq__43846__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43878,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43878,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__43957 = cljs.core.next(seq__43846__$1);
var G__43958 = null;
var G__43959 = (0);
var G__43960 = (0);
seq__43846 = G__43957;
chunk__43847 = G__43958;
count__43848 = G__43959;
i__43849 = G__43960;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__43840_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__43840_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__43841_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__43841_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__43842_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__43842_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__43843_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__43843_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__43886){
var map__43890 = p__43886;
var map__43890__$1 = cljs.core.__destructure_map(map__43890);
var svc = map__43890__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43890__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43890__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
