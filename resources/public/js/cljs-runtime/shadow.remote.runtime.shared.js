goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__37859){
var map__37861 = p__37859;
var map__37861__$1 = cljs.core.__destructure_map(map__37861);
var runtime = map__37861__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37861__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_38090 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_38090)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__37863 = runtime;
var G__37864 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_38090);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__37863,G__37864) : shadow.remote.runtime.shared.process.call(null,G__37863,G__37864));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__37868,res){
var map__37869 = p__37868;
var map__37869__$1 = cljs.core.__destructure_map(map__37869);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37869__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37869__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__37870 = res;
var G__37870__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37870,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__37870);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37870__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__37870__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__37876 = arguments.length;
switch (G__37876) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__37877,msg,handlers,timeout_after_ms){
var map__37879 = p__37877;
var map__37879__$1 = cljs.core.__destructure_map(map__37879);
var runtime = map__37879__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37879__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___38111 = arguments.length;
var i__5770__auto___38112 = (0);
while(true){
if((i__5770__auto___38112 < len__5769__auto___38111)){
args__5775__auto__.push((arguments[i__5770__auto___38112]));

var G__38113 = (i__5770__auto___38112 + (1));
i__5770__auto___38112 = G__38113;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__37891,ev,args){
var map__37892 = p__37891;
var map__37892__$1 = cljs.core.__destructure_map(map__37892);
var runtime = map__37892__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37892__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__37893 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__37896 = null;
var count__37897 = (0);
var i__37898 = (0);
while(true){
if((i__37898 < count__37897)){
var ext = chunk__37896.cljs$core$IIndexed$_nth$arity$2(null,i__37898);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__38123 = seq__37893;
var G__38124 = chunk__37896;
var G__38125 = count__37897;
var G__38126 = (i__37898 + (1));
seq__37893 = G__38123;
chunk__37896 = G__38124;
count__37897 = G__38125;
i__37898 = G__38126;
continue;
} else {
var G__38127 = seq__37893;
var G__38128 = chunk__37896;
var G__38129 = count__37897;
var G__38130 = (i__37898 + (1));
seq__37893 = G__38127;
chunk__37896 = G__38128;
count__37897 = G__38129;
i__37898 = G__38130;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37893);
if(temp__5804__auto__){
var seq__37893__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37893__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37893__$1);
var G__38138 = cljs.core.chunk_rest(seq__37893__$1);
var G__38139 = c__5568__auto__;
var G__38140 = cljs.core.count(c__5568__auto__);
var G__38141 = (0);
seq__37893 = G__38138;
chunk__37896 = G__38139;
count__37897 = G__38140;
i__37898 = G__38141;
continue;
} else {
var ext = cljs.core.first(seq__37893__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__38149 = cljs.core.next(seq__37893__$1);
var G__38150 = null;
var G__38151 = (0);
var G__38152 = (0);
seq__37893 = G__38149;
chunk__37896 = G__38150;
count__37897 = G__38151;
i__37898 = G__38152;
continue;
} else {
var G__38157 = cljs.core.next(seq__37893__$1);
var G__38158 = null;
var G__38159 = (0);
var G__38160 = (0);
seq__37893 = G__38157;
chunk__37896 = G__38158;
count__37897 = G__38159;
i__37898 = G__38160;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq37888){
var G__37889 = cljs.core.first(seq37888);
var seq37888__$1 = cljs.core.next(seq37888);
var G__37890 = cljs.core.first(seq37888__$1);
var seq37888__$2 = cljs.core.next(seq37888__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37889,G__37890,seq37888__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__37930,p__37931){
var map__37932 = p__37930;
var map__37932__$1 = cljs.core.__destructure_map(map__37932);
var runtime = map__37932__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37932__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__37933 = p__37931;
var map__37933__$1 = cljs.core.__destructure_map(map__37933);
var msg = map__37933__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37933__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__37934 = cljs.core.deref(state_ref);
var map__37934__$1 = cljs.core.__destructure_map(map__37934);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37934__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37934__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__37939,msg){
var map__37941 = p__37939;
var map__37941__$1 = cljs.core.__destructure_map(map__37941);
var runtime = map__37941__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37941__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__37955,key,p__37956){
var map__37957 = p__37955;
var map__37957__$1 = cljs.core.__destructure_map(map__37957);
var state = map__37957__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37957__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__37958 = p__37956;
var map__37958__$1 = cljs.core.__destructure_map(map__37958);
var spec = map__37958__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37958__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__37975,key,spec){
var map__37976 = p__37975;
var map__37976__$1 = cljs.core.__destructure_map(map__37976);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37976__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__37977_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__37977_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__37979_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__37979_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__37980_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__37980_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__37981_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__37981_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__37982_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__37982_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__37991,key){
var map__37993 = p__37991;
var map__37993__$1 = cljs.core.__destructure_map(map__37993);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37993__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__38009,msg){
var map__38014 = p__38009;
var map__38014__$1 = cljs.core.__destructure_map(map__38014);
var runtime = map__38014__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38014__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__38032,p__38033){
var map__38034 = p__38032;
var map__38034__$1 = cljs.core.__destructure_map(map__38034);
var runtime = map__38034__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38034__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__38035 = p__38033;
var map__38035__$1 = cljs.core.__destructure_map(map__38035);
var msg = map__38035__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38035__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38035__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__38049 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__38051 = null;
var count__38052 = (0);
var i__38053 = (0);
while(true){
if((i__38053 < count__38052)){
var map__38071 = chunk__38051.cljs$core$IIndexed$_nth$arity$2(null,i__38053);
var map__38071__$1 = cljs.core.__destructure_map(map__38071);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38071__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__38251 = seq__38049;
var G__38252 = chunk__38051;
var G__38253 = count__38052;
var G__38254 = (i__38053 + (1));
seq__38049 = G__38251;
chunk__38051 = G__38252;
count__38052 = G__38253;
i__38053 = G__38254;
continue;
} else {
var G__38256 = seq__38049;
var G__38257 = chunk__38051;
var G__38258 = count__38052;
var G__38259 = (i__38053 + (1));
seq__38049 = G__38256;
chunk__38051 = G__38257;
count__38052 = G__38258;
i__38053 = G__38259;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38049);
if(temp__5804__auto__){
var seq__38049__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38049__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38049__$1);
var G__38267 = cljs.core.chunk_rest(seq__38049__$1);
var G__38268 = c__5568__auto__;
var G__38269 = cljs.core.count(c__5568__auto__);
var G__38270 = (0);
seq__38049 = G__38267;
chunk__38051 = G__38268;
count__38052 = G__38269;
i__38053 = G__38270;
continue;
} else {
var map__38074 = cljs.core.first(seq__38049__$1);
var map__38074__$1 = cljs.core.__destructure_map(map__38074);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38074__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__38282 = cljs.core.next(seq__38049__$1);
var G__38283 = null;
var G__38284 = (0);
var G__38285 = (0);
seq__38049 = G__38282;
chunk__38051 = G__38283;
count__38052 = G__38284;
i__38053 = G__38285;
continue;
} else {
var G__38286 = cljs.core.next(seq__38049__$1);
var G__38287 = null;
var G__38288 = (0);
var G__38289 = (0);
seq__38049 = G__38286;
chunk__38051 = G__38287;
count__38052 = G__38288;
i__38053 = G__38289;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
