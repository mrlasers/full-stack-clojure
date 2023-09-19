goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___45060 = arguments.length;
var i__5770__auto___45061 = (0);
while(true){
if((i__5770__auto___45061 < len__5769__auto___45060)){
args__5775__auto__.push((arguments[i__5770__auto___45061]));

var G__45062 = (i__5770__auto___45061 + (1));
i__5770__auto___45061 = G__45062;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq44775){
var G__44776 = cljs.core.first(seq44775);
var seq44775__$1 = cljs.core.next(seq44775);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44776,seq44775__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__44777 = cljs.core.seq(sources);
var chunk__44778 = null;
var count__44779 = (0);
var i__44780 = (0);
while(true){
if((i__44780 < count__44779)){
var map__44790 = chunk__44778.cljs$core$IIndexed$_nth$arity$2(null,i__44780);
var map__44790__$1 = cljs.core.__destructure_map(map__44790);
var src = map__44790__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44790__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44790__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44790__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44790__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e44791){var e_45063 = e44791;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_45063);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_45063.message)].join('')));
}

var G__45064 = seq__44777;
var G__45065 = chunk__44778;
var G__45066 = count__44779;
var G__45067 = (i__44780 + (1));
seq__44777 = G__45064;
chunk__44778 = G__45065;
count__44779 = G__45066;
i__44780 = G__45067;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__44777);
if(temp__5804__auto__){
var seq__44777__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44777__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__44777__$1);
var G__45068 = cljs.core.chunk_rest(seq__44777__$1);
var G__45069 = c__5568__auto__;
var G__45070 = cljs.core.count(c__5568__auto__);
var G__45071 = (0);
seq__44777 = G__45068;
chunk__44778 = G__45069;
count__44779 = G__45070;
i__44780 = G__45071;
continue;
} else {
var map__44792 = cljs.core.first(seq__44777__$1);
var map__44792__$1 = cljs.core.__destructure_map(map__44792);
var src = map__44792__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44792__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44792__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44792__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44792__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e44793){var e_45072 = e44793;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_45072);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_45072.message)].join('')));
}

var G__45073 = cljs.core.next(seq__44777__$1);
var G__45074 = null;
var G__45075 = (0);
var G__45076 = (0);
seq__44777 = G__45073;
chunk__44778 = G__45074;
count__44779 = G__45075;
i__44780 = G__45076;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__44794 = cljs.core.seq(js_requires);
var chunk__44795 = null;
var count__44796 = (0);
var i__44797 = (0);
while(true){
if((i__44797 < count__44796)){
var js_ns = chunk__44795.cljs$core$IIndexed$_nth$arity$2(null,i__44797);
var require_str_45077 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_45077);


var G__45078 = seq__44794;
var G__45079 = chunk__44795;
var G__45080 = count__44796;
var G__45081 = (i__44797 + (1));
seq__44794 = G__45078;
chunk__44795 = G__45079;
count__44796 = G__45080;
i__44797 = G__45081;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__44794);
if(temp__5804__auto__){
var seq__44794__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44794__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__44794__$1);
var G__45082 = cljs.core.chunk_rest(seq__44794__$1);
var G__45083 = c__5568__auto__;
var G__45084 = cljs.core.count(c__5568__auto__);
var G__45085 = (0);
seq__44794 = G__45082;
chunk__44795 = G__45083;
count__44796 = G__45084;
i__44797 = G__45085;
continue;
} else {
var js_ns = cljs.core.first(seq__44794__$1);
var require_str_45086 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_45086);


var G__45087 = cljs.core.next(seq__44794__$1);
var G__45088 = null;
var G__45089 = (0);
var G__45090 = (0);
seq__44794 = G__45087;
chunk__44795 = G__45088;
count__44796 = G__45089;
i__44797 = G__45090;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__44801){
var map__44802 = p__44801;
var map__44802__$1 = cljs.core.__destructure_map(map__44802);
var msg = map__44802__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44802__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44802__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__44803(s__44804){
return (new cljs.core.LazySeq(null,(function (){
var s__44804__$1 = s__44804;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__44804__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__44809 = cljs.core.first(xs__6360__auto__);
var map__44809__$1 = cljs.core.__destructure_map(map__44809);
var src = map__44809__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44809__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44809__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__44804__$1,map__44809,map__44809__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__44802,map__44802__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__44803_$_iter__44805(s__44806){
return (new cljs.core.LazySeq(null,((function (s__44804__$1,map__44809,map__44809__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__44802,map__44802__$1,msg,info,reload_info){
return (function (){
var s__44806__$1 = s__44806;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__44806__$1);
if(temp__5804__auto____$1){
var s__44806__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__44806__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__44806__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__44808 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__44807 = (0);
while(true){
if((i__44807 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__44807);
cljs.core.chunk_append(b__44808,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__45091 = (i__44807 + (1));
i__44807 = G__45091;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44808),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__44803_$_iter__44805(cljs.core.chunk_rest(s__44806__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44808),null);
}
} else {
var warning = cljs.core.first(s__44806__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__44803_$_iter__44805(cljs.core.rest(s__44806__$2)));
}
} else {
return null;
}
break;
}
});})(s__44804__$1,map__44809,map__44809__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__44802,map__44802__$1,msg,info,reload_info))
,null,null));
});})(s__44804__$1,map__44809,map__44809__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__44802,map__44802__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__44803(cljs.core.rest(s__44804__$1)));
} else {
var G__45092 = cljs.core.rest(s__44804__$1);
s__44804__$1 = G__45092;
continue;
}
} else {
var G__45093 = cljs.core.rest(s__44804__$1);
s__44804__$1 = G__45093;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__44810_45094 = cljs.core.seq(warnings);
var chunk__44811_45095 = null;
var count__44812_45096 = (0);
var i__44813_45097 = (0);
while(true){
if((i__44813_45097 < count__44812_45096)){
var map__44816_45098 = chunk__44811_45095.cljs$core$IIndexed$_nth$arity$2(null,i__44813_45097);
var map__44816_45099__$1 = cljs.core.__destructure_map(map__44816_45098);
var w_45100 = map__44816_45099__$1;
var msg_45101__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44816_45099__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_45102 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44816_45099__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_45103 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44816_45099__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_45104 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44816_45099__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_45104)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_45102),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_45103),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_45101__$1)].join(''));


var G__45105 = seq__44810_45094;
var G__45106 = chunk__44811_45095;
var G__45107 = count__44812_45096;
var G__45108 = (i__44813_45097 + (1));
seq__44810_45094 = G__45105;
chunk__44811_45095 = G__45106;
count__44812_45096 = G__45107;
i__44813_45097 = G__45108;
continue;
} else {
var temp__5804__auto___45109 = cljs.core.seq(seq__44810_45094);
if(temp__5804__auto___45109){
var seq__44810_45110__$1 = temp__5804__auto___45109;
if(cljs.core.chunked_seq_QMARK_(seq__44810_45110__$1)){
var c__5568__auto___45111 = cljs.core.chunk_first(seq__44810_45110__$1);
var G__45112 = cljs.core.chunk_rest(seq__44810_45110__$1);
var G__45113 = c__5568__auto___45111;
var G__45114 = cljs.core.count(c__5568__auto___45111);
var G__45115 = (0);
seq__44810_45094 = G__45112;
chunk__44811_45095 = G__45113;
count__44812_45096 = G__45114;
i__44813_45097 = G__45115;
continue;
} else {
var map__44817_45116 = cljs.core.first(seq__44810_45110__$1);
var map__44817_45117__$1 = cljs.core.__destructure_map(map__44817_45116);
var w_45118 = map__44817_45117__$1;
var msg_45119__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44817_45117__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_45120 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44817_45117__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_45121 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44817_45117__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_45122 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44817_45117__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_45122)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_45120),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_45121),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_45119__$1)].join(''));


var G__45123 = cljs.core.next(seq__44810_45110__$1);
var G__45124 = null;
var G__45125 = (0);
var G__45126 = (0);
seq__44810_45094 = G__45123;
chunk__44811_45095 = G__45124;
count__44812_45096 = G__45125;
i__44813_45097 = G__45126;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__44800_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__44800_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__44818){
var map__44819 = p__44818;
var map__44819__$1 = cljs.core.__destructure_map(map__44819);
var msg = map__44819__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44819__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44819__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__44820 = cljs.core.seq(updates);
var chunk__44822 = null;
var count__44823 = (0);
var i__44824 = (0);
while(true){
if((i__44824 < count__44823)){
var path = chunk__44822.cljs$core$IIndexed$_nth$arity$2(null,i__44824);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__44934_45127 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__44938_45128 = null;
var count__44939_45129 = (0);
var i__44940_45130 = (0);
while(true){
if((i__44940_45130 < count__44939_45129)){
var node_45131 = chunk__44938_45128.cljs$core$IIndexed$_nth$arity$2(null,i__44940_45130);
if(cljs.core.not(node_45131.shadow$old)){
var path_match_45132 = shadow.cljs.devtools.client.browser.match_paths(node_45131.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45132)){
var new_link_45133 = (function (){var G__44966 = node_45131.cloneNode(true);
G__44966.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45132),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__44966;
})();
(node_45131.shadow$old = true);

(new_link_45133.onload = ((function (seq__44934_45127,chunk__44938_45128,count__44939_45129,i__44940_45130,seq__44820,chunk__44822,count__44823,i__44824,new_link_45133,path_match_45132,node_45131,path,map__44819,map__44819__$1,msg,updates,reload_info){
return (function (e){
var seq__44967_45134 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__44969_45135 = null;
var count__44970_45136 = (0);
var i__44971_45137 = (0);
while(true){
if((i__44971_45137 < count__44970_45136)){
var map__44975_45138 = chunk__44969_45135.cljs$core$IIndexed$_nth$arity$2(null,i__44971_45137);
var map__44975_45139__$1 = cljs.core.__destructure_map(map__44975_45138);
var task_45140 = map__44975_45139__$1;
var fn_str_45141 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44975_45139__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_45142 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44975_45139__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_45143 = goog.getObjectByName(fn_str_45141,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_45142)].join(''));

(fn_obj_45143.cljs$core$IFn$_invoke$arity$2 ? fn_obj_45143.cljs$core$IFn$_invoke$arity$2(path,new_link_45133) : fn_obj_45143.call(null,path,new_link_45133));


var G__45144 = seq__44967_45134;
var G__45145 = chunk__44969_45135;
var G__45146 = count__44970_45136;
var G__45147 = (i__44971_45137 + (1));
seq__44967_45134 = G__45144;
chunk__44969_45135 = G__45145;
count__44970_45136 = G__45146;
i__44971_45137 = G__45147;
continue;
} else {
var temp__5804__auto___45148 = cljs.core.seq(seq__44967_45134);
if(temp__5804__auto___45148){
var seq__44967_45149__$1 = temp__5804__auto___45148;
if(cljs.core.chunked_seq_QMARK_(seq__44967_45149__$1)){
var c__5568__auto___45150 = cljs.core.chunk_first(seq__44967_45149__$1);
var G__45151 = cljs.core.chunk_rest(seq__44967_45149__$1);
var G__45152 = c__5568__auto___45150;
var G__45153 = cljs.core.count(c__5568__auto___45150);
var G__45154 = (0);
seq__44967_45134 = G__45151;
chunk__44969_45135 = G__45152;
count__44970_45136 = G__45153;
i__44971_45137 = G__45154;
continue;
} else {
var map__44976_45155 = cljs.core.first(seq__44967_45149__$1);
var map__44976_45156__$1 = cljs.core.__destructure_map(map__44976_45155);
var task_45157 = map__44976_45156__$1;
var fn_str_45158 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44976_45156__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_45159 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44976_45156__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_45160 = goog.getObjectByName(fn_str_45158,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_45159)].join(''));

(fn_obj_45160.cljs$core$IFn$_invoke$arity$2 ? fn_obj_45160.cljs$core$IFn$_invoke$arity$2(path,new_link_45133) : fn_obj_45160.call(null,path,new_link_45133));


var G__45161 = cljs.core.next(seq__44967_45149__$1);
var G__45162 = null;
var G__45163 = (0);
var G__45164 = (0);
seq__44967_45134 = G__45161;
chunk__44969_45135 = G__45162;
count__44970_45136 = G__45163;
i__44971_45137 = G__45164;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_45131);
});})(seq__44934_45127,chunk__44938_45128,count__44939_45129,i__44940_45130,seq__44820,chunk__44822,count__44823,i__44824,new_link_45133,path_match_45132,node_45131,path,map__44819,map__44819__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45132], 0));

goog.dom.insertSiblingAfter(new_link_45133,node_45131);


var G__45165 = seq__44934_45127;
var G__45166 = chunk__44938_45128;
var G__45167 = count__44939_45129;
var G__45168 = (i__44940_45130 + (1));
seq__44934_45127 = G__45165;
chunk__44938_45128 = G__45166;
count__44939_45129 = G__45167;
i__44940_45130 = G__45168;
continue;
} else {
var G__45169 = seq__44934_45127;
var G__45170 = chunk__44938_45128;
var G__45171 = count__44939_45129;
var G__45172 = (i__44940_45130 + (1));
seq__44934_45127 = G__45169;
chunk__44938_45128 = G__45170;
count__44939_45129 = G__45171;
i__44940_45130 = G__45172;
continue;
}
} else {
var G__45173 = seq__44934_45127;
var G__45174 = chunk__44938_45128;
var G__45175 = count__44939_45129;
var G__45176 = (i__44940_45130 + (1));
seq__44934_45127 = G__45173;
chunk__44938_45128 = G__45174;
count__44939_45129 = G__45175;
i__44940_45130 = G__45176;
continue;
}
} else {
var temp__5804__auto___45177 = cljs.core.seq(seq__44934_45127);
if(temp__5804__auto___45177){
var seq__44934_45178__$1 = temp__5804__auto___45177;
if(cljs.core.chunked_seq_QMARK_(seq__44934_45178__$1)){
var c__5568__auto___45179 = cljs.core.chunk_first(seq__44934_45178__$1);
var G__45180 = cljs.core.chunk_rest(seq__44934_45178__$1);
var G__45181 = c__5568__auto___45179;
var G__45182 = cljs.core.count(c__5568__auto___45179);
var G__45183 = (0);
seq__44934_45127 = G__45180;
chunk__44938_45128 = G__45181;
count__44939_45129 = G__45182;
i__44940_45130 = G__45183;
continue;
} else {
var node_45184 = cljs.core.first(seq__44934_45178__$1);
if(cljs.core.not(node_45184.shadow$old)){
var path_match_45185 = shadow.cljs.devtools.client.browser.match_paths(node_45184.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45185)){
var new_link_45186 = (function (){var G__44977 = node_45184.cloneNode(true);
G__44977.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45185),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__44977;
})();
(node_45184.shadow$old = true);

(new_link_45186.onload = ((function (seq__44934_45127,chunk__44938_45128,count__44939_45129,i__44940_45130,seq__44820,chunk__44822,count__44823,i__44824,new_link_45186,path_match_45185,node_45184,seq__44934_45178__$1,temp__5804__auto___45177,path,map__44819,map__44819__$1,msg,updates,reload_info){
return (function (e){
var seq__44978_45187 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__44980_45188 = null;
var count__44981_45189 = (0);
var i__44982_45190 = (0);
while(true){
if((i__44982_45190 < count__44981_45189)){
var map__44986_45191 = chunk__44980_45188.cljs$core$IIndexed$_nth$arity$2(null,i__44982_45190);
var map__44986_45192__$1 = cljs.core.__destructure_map(map__44986_45191);
var task_45193 = map__44986_45192__$1;
var fn_str_45194 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44986_45192__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_45195 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44986_45192__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_45196 = goog.getObjectByName(fn_str_45194,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_45195)].join(''));

(fn_obj_45196.cljs$core$IFn$_invoke$arity$2 ? fn_obj_45196.cljs$core$IFn$_invoke$arity$2(path,new_link_45186) : fn_obj_45196.call(null,path,new_link_45186));


var G__45197 = seq__44978_45187;
var G__45198 = chunk__44980_45188;
var G__45199 = count__44981_45189;
var G__45200 = (i__44982_45190 + (1));
seq__44978_45187 = G__45197;
chunk__44980_45188 = G__45198;
count__44981_45189 = G__45199;
i__44982_45190 = G__45200;
continue;
} else {
var temp__5804__auto___45201__$1 = cljs.core.seq(seq__44978_45187);
if(temp__5804__auto___45201__$1){
var seq__44978_45202__$1 = temp__5804__auto___45201__$1;
if(cljs.core.chunked_seq_QMARK_(seq__44978_45202__$1)){
var c__5568__auto___45203 = cljs.core.chunk_first(seq__44978_45202__$1);
var G__45204 = cljs.core.chunk_rest(seq__44978_45202__$1);
var G__45205 = c__5568__auto___45203;
var G__45206 = cljs.core.count(c__5568__auto___45203);
var G__45207 = (0);
seq__44978_45187 = G__45204;
chunk__44980_45188 = G__45205;
count__44981_45189 = G__45206;
i__44982_45190 = G__45207;
continue;
} else {
var map__44987_45208 = cljs.core.first(seq__44978_45202__$1);
var map__44987_45209__$1 = cljs.core.__destructure_map(map__44987_45208);
var task_45210 = map__44987_45209__$1;
var fn_str_45211 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44987_45209__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_45212 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44987_45209__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_45213 = goog.getObjectByName(fn_str_45211,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_45212)].join(''));

(fn_obj_45213.cljs$core$IFn$_invoke$arity$2 ? fn_obj_45213.cljs$core$IFn$_invoke$arity$2(path,new_link_45186) : fn_obj_45213.call(null,path,new_link_45186));


var G__45214 = cljs.core.next(seq__44978_45202__$1);
var G__45215 = null;
var G__45216 = (0);
var G__45217 = (0);
seq__44978_45187 = G__45214;
chunk__44980_45188 = G__45215;
count__44981_45189 = G__45216;
i__44982_45190 = G__45217;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_45184);
});})(seq__44934_45127,chunk__44938_45128,count__44939_45129,i__44940_45130,seq__44820,chunk__44822,count__44823,i__44824,new_link_45186,path_match_45185,node_45184,seq__44934_45178__$1,temp__5804__auto___45177,path,map__44819,map__44819__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45185], 0));

goog.dom.insertSiblingAfter(new_link_45186,node_45184);


var G__45218 = cljs.core.next(seq__44934_45178__$1);
var G__45219 = null;
var G__45220 = (0);
var G__45221 = (0);
seq__44934_45127 = G__45218;
chunk__44938_45128 = G__45219;
count__44939_45129 = G__45220;
i__44940_45130 = G__45221;
continue;
} else {
var G__45222 = cljs.core.next(seq__44934_45178__$1);
var G__45223 = null;
var G__45224 = (0);
var G__45225 = (0);
seq__44934_45127 = G__45222;
chunk__44938_45128 = G__45223;
count__44939_45129 = G__45224;
i__44940_45130 = G__45225;
continue;
}
} else {
var G__45226 = cljs.core.next(seq__44934_45178__$1);
var G__45227 = null;
var G__45228 = (0);
var G__45229 = (0);
seq__44934_45127 = G__45226;
chunk__44938_45128 = G__45227;
count__44939_45129 = G__45228;
i__44940_45130 = G__45229;
continue;
}
}
} else {
}
}
break;
}


var G__45230 = seq__44820;
var G__45231 = chunk__44822;
var G__45232 = count__44823;
var G__45233 = (i__44824 + (1));
seq__44820 = G__45230;
chunk__44822 = G__45231;
count__44823 = G__45232;
i__44824 = G__45233;
continue;
} else {
var G__45234 = seq__44820;
var G__45235 = chunk__44822;
var G__45236 = count__44823;
var G__45237 = (i__44824 + (1));
seq__44820 = G__45234;
chunk__44822 = G__45235;
count__44823 = G__45236;
i__44824 = G__45237;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__44820);
if(temp__5804__auto__){
var seq__44820__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44820__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__44820__$1);
var G__45238 = cljs.core.chunk_rest(seq__44820__$1);
var G__45239 = c__5568__auto__;
var G__45240 = cljs.core.count(c__5568__auto__);
var G__45241 = (0);
seq__44820 = G__45238;
chunk__44822 = G__45239;
count__44823 = G__45240;
i__44824 = G__45241;
continue;
} else {
var path = cljs.core.first(seq__44820__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__44988_45242 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__44992_45243 = null;
var count__44993_45244 = (0);
var i__44994_45245 = (0);
while(true){
if((i__44994_45245 < count__44993_45244)){
var node_45246 = chunk__44992_45243.cljs$core$IIndexed$_nth$arity$2(null,i__44994_45245);
if(cljs.core.not(node_45246.shadow$old)){
var path_match_45247 = shadow.cljs.devtools.client.browser.match_paths(node_45246.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45247)){
var new_link_45248 = (function (){var G__45020 = node_45246.cloneNode(true);
G__45020.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45247),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45020;
})();
(node_45246.shadow$old = true);

(new_link_45248.onload = ((function (seq__44988_45242,chunk__44992_45243,count__44993_45244,i__44994_45245,seq__44820,chunk__44822,count__44823,i__44824,new_link_45248,path_match_45247,node_45246,path,seq__44820__$1,temp__5804__auto__,map__44819,map__44819__$1,msg,updates,reload_info){
return (function (e){
var seq__45021_45249 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__45023_45250 = null;
var count__45024_45251 = (0);
var i__45025_45252 = (0);
while(true){
if((i__45025_45252 < count__45024_45251)){
var map__45029_45253 = chunk__45023_45250.cljs$core$IIndexed$_nth$arity$2(null,i__45025_45252);
var map__45029_45254__$1 = cljs.core.__destructure_map(map__45029_45253);
var task_45255 = map__45029_45254__$1;
var fn_str_45256 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45029_45254__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_45257 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45029_45254__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_45258 = goog.getObjectByName(fn_str_45256,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_45257)].join(''));

(fn_obj_45258.cljs$core$IFn$_invoke$arity$2 ? fn_obj_45258.cljs$core$IFn$_invoke$arity$2(path,new_link_45248) : fn_obj_45258.call(null,path,new_link_45248));


var G__45259 = seq__45021_45249;
var G__45260 = chunk__45023_45250;
var G__45261 = count__45024_45251;
var G__45262 = (i__45025_45252 + (1));
seq__45021_45249 = G__45259;
chunk__45023_45250 = G__45260;
count__45024_45251 = G__45261;
i__45025_45252 = G__45262;
continue;
} else {
var temp__5804__auto___45263__$1 = cljs.core.seq(seq__45021_45249);
if(temp__5804__auto___45263__$1){
var seq__45021_45264__$1 = temp__5804__auto___45263__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45021_45264__$1)){
var c__5568__auto___45265 = cljs.core.chunk_first(seq__45021_45264__$1);
var G__45266 = cljs.core.chunk_rest(seq__45021_45264__$1);
var G__45267 = c__5568__auto___45265;
var G__45268 = cljs.core.count(c__5568__auto___45265);
var G__45269 = (0);
seq__45021_45249 = G__45266;
chunk__45023_45250 = G__45267;
count__45024_45251 = G__45268;
i__45025_45252 = G__45269;
continue;
} else {
var map__45030_45270 = cljs.core.first(seq__45021_45264__$1);
var map__45030_45271__$1 = cljs.core.__destructure_map(map__45030_45270);
var task_45272 = map__45030_45271__$1;
var fn_str_45273 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45030_45271__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_45274 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45030_45271__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_45275 = goog.getObjectByName(fn_str_45273,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_45274)].join(''));

(fn_obj_45275.cljs$core$IFn$_invoke$arity$2 ? fn_obj_45275.cljs$core$IFn$_invoke$arity$2(path,new_link_45248) : fn_obj_45275.call(null,path,new_link_45248));


var G__45276 = cljs.core.next(seq__45021_45264__$1);
var G__45277 = null;
var G__45278 = (0);
var G__45279 = (0);
seq__45021_45249 = G__45276;
chunk__45023_45250 = G__45277;
count__45024_45251 = G__45278;
i__45025_45252 = G__45279;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_45246);
});})(seq__44988_45242,chunk__44992_45243,count__44993_45244,i__44994_45245,seq__44820,chunk__44822,count__44823,i__44824,new_link_45248,path_match_45247,node_45246,path,seq__44820__$1,temp__5804__auto__,map__44819,map__44819__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45247], 0));

goog.dom.insertSiblingAfter(new_link_45248,node_45246);


var G__45280 = seq__44988_45242;
var G__45281 = chunk__44992_45243;
var G__45282 = count__44993_45244;
var G__45283 = (i__44994_45245 + (1));
seq__44988_45242 = G__45280;
chunk__44992_45243 = G__45281;
count__44993_45244 = G__45282;
i__44994_45245 = G__45283;
continue;
} else {
var G__45284 = seq__44988_45242;
var G__45285 = chunk__44992_45243;
var G__45286 = count__44993_45244;
var G__45287 = (i__44994_45245 + (1));
seq__44988_45242 = G__45284;
chunk__44992_45243 = G__45285;
count__44993_45244 = G__45286;
i__44994_45245 = G__45287;
continue;
}
} else {
var G__45288 = seq__44988_45242;
var G__45289 = chunk__44992_45243;
var G__45290 = count__44993_45244;
var G__45291 = (i__44994_45245 + (1));
seq__44988_45242 = G__45288;
chunk__44992_45243 = G__45289;
count__44993_45244 = G__45290;
i__44994_45245 = G__45291;
continue;
}
} else {
var temp__5804__auto___45292__$1 = cljs.core.seq(seq__44988_45242);
if(temp__5804__auto___45292__$1){
var seq__44988_45293__$1 = temp__5804__auto___45292__$1;
if(cljs.core.chunked_seq_QMARK_(seq__44988_45293__$1)){
var c__5568__auto___45294 = cljs.core.chunk_first(seq__44988_45293__$1);
var G__45295 = cljs.core.chunk_rest(seq__44988_45293__$1);
var G__45296 = c__5568__auto___45294;
var G__45297 = cljs.core.count(c__5568__auto___45294);
var G__45298 = (0);
seq__44988_45242 = G__45295;
chunk__44992_45243 = G__45296;
count__44993_45244 = G__45297;
i__44994_45245 = G__45298;
continue;
} else {
var node_45299 = cljs.core.first(seq__44988_45293__$1);
if(cljs.core.not(node_45299.shadow$old)){
var path_match_45300 = shadow.cljs.devtools.client.browser.match_paths(node_45299.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45300)){
var new_link_45301 = (function (){var G__45031 = node_45299.cloneNode(true);
G__45031.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45300),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45031;
})();
(node_45299.shadow$old = true);

(new_link_45301.onload = ((function (seq__44988_45242,chunk__44992_45243,count__44993_45244,i__44994_45245,seq__44820,chunk__44822,count__44823,i__44824,new_link_45301,path_match_45300,node_45299,seq__44988_45293__$1,temp__5804__auto___45292__$1,path,seq__44820__$1,temp__5804__auto__,map__44819,map__44819__$1,msg,updates,reload_info){
return (function (e){
var seq__45032_45302 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__45034_45303 = null;
var count__45035_45304 = (0);
var i__45036_45305 = (0);
while(true){
if((i__45036_45305 < count__45035_45304)){
var map__45040_45306 = chunk__45034_45303.cljs$core$IIndexed$_nth$arity$2(null,i__45036_45305);
var map__45040_45307__$1 = cljs.core.__destructure_map(map__45040_45306);
var task_45308 = map__45040_45307__$1;
var fn_str_45309 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45040_45307__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_45310 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45040_45307__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_45311 = goog.getObjectByName(fn_str_45309,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_45310)].join(''));

(fn_obj_45311.cljs$core$IFn$_invoke$arity$2 ? fn_obj_45311.cljs$core$IFn$_invoke$arity$2(path,new_link_45301) : fn_obj_45311.call(null,path,new_link_45301));


var G__45312 = seq__45032_45302;
var G__45313 = chunk__45034_45303;
var G__45314 = count__45035_45304;
var G__45315 = (i__45036_45305 + (1));
seq__45032_45302 = G__45312;
chunk__45034_45303 = G__45313;
count__45035_45304 = G__45314;
i__45036_45305 = G__45315;
continue;
} else {
var temp__5804__auto___45316__$2 = cljs.core.seq(seq__45032_45302);
if(temp__5804__auto___45316__$2){
var seq__45032_45317__$1 = temp__5804__auto___45316__$2;
if(cljs.core.chunked_seq_QMARK_(seq__45032_45317__$1)){
var c__5568__auto___45318 = cljs.core.chunk_first(seq__45032_45317__$1);
var G__45319 = cljs.core.chunk_rest(seq__45032_45317__$1);
var G__45320 = c__5568__auto___45318;
var G__45321 = cljs.core.count(c__5568__auto___45318);
var G__45322 = (0);
seq__45032_45302 = G__45319;
chunk__45034_45303 = G__45320;
count__45035_45304 = G__45321;
i__45036_45305 = G__45322;
continue;
} else {
var map__45041_45323 = cljs.core.first(seq__45032_45317__$1);
var map__45041_45324__$1 = cljs.core.__destructure_map(map__45041_45323);
var task_45325 = map__45041_45324__$1;
var fn_str_45326 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45041_45324__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_45327 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45041_45324__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_45328 = goog.getObjectByName(fn_str_45326,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_45327)].join(''));

(fn_obj_45328.cljs$core$IFn$_invoke$arity$2 ? fn_obj_45328.cljs$core$IFn$_invoke$arity$2(path,new_link_45301) : fn_obj_45328.call(null,path,new_link_45301));


var G__45329 = cljs.core.next(seq__45032_45317__$1);
var G__45330 = null;
var G__45331 = (0);
var G__45332 = (0);
seq__45032_45302 = G__45329;
chunk__45034_45303 = G__45330;
count__45035_45304 = G__45331;
i__45036_45305 = G__45332;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_45299);
});})(seq__44988_45242,chunk__44992_45243,count__44993_45244,i__44994_45245,seq__44820,chunk__44822,count__44823,i__44824,new_link_45301,path_match_45300,node_45299,seq__44988_45293__$1,temp__5804__auto___45292__$1,path,seq__44820__$1,temp__5804__auto__,map__44819,map__44819__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45300], 0));

goog.dom.insertSiblingAfter(new_link_45301,node_45299);


var G__45333 = cljs.core.next(seq__44988_45293__$1);
var G__45334 = null;
var G__45335 = (0);
var G__45336 = (0);
seq__44988_45242 = G__45333;
chunk__44992_45243 = G__45334;
count__44993_45244 = G__45335;
i__44994_45245 = G__45336;
continue;
} else {
var G__45337 = cljs.core.next(seq__44988_45293__$1);
var G__45338 = null;
var G__45339 = (0);
var G__45340 = (0);
seq__44988_45242 = G__45337;
chunk__44992_45243 = G__45338;
count__44993_45244 = G__45339;
i__44994_45245 = G__45340;
continue;
}
} else {
var G__45341 = cljs.core.next(seq__44988_45293__$1);
var G__45342 = null;
var G__45343 = (0);
var G__45344 = (0);
seq__44988_45242 = G__45341;
chunk__44992_45243 = G__45342;
count__44993_45244 = G__45343;
i__44994_45245 = G__45344;
continue;
}
}
} else {
}
}
break;
}


var G__45345 = cljs.core.next(seq__44820__$1);
var G__45346 = null;
var G__45347 = (0);
var G__45348 = (0);
seq__44820 = G__45345;
chunk__44822 = G__45346;
count__44823 = G__45347;
i__44824 = G__45348;
continue;
} else {
var G__45349 = cljs.core.next(seq__44820__$1);
var G__45350 = null;
var G__45351 = (0);
var G__45352 = (0);
seq__44820 = G__45349;
chunk__44822 = G__45350;
count__44823 = G__45351;
i__44824 = G__45352;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__45042){
var map__45043 = p__45042;
var map__45043__$1 = cljs.core.__destructure_map(map__45043);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45043__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__45044,done,error){
var map__45045 = p__45044;
var map__45045__$1 = cljs.core.__destructure_map(map__45045);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45045__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__45046,done,error){
var map__45047 = p__45046;
var map__45047__$1 = cljs.core.__destructure_map(map__45047);
var msg = map__45047__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45047__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45047__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45047__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__45048){
var map__45049 = p__45048;
var map__45049__$1 = cljs.core.__destructure_map(map__45049);
var src = map__45049__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45049__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__45050 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__45050) : done.call(null,G__45050));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__45051){
var map__45052 = p__45051;
var map__45052__$1 = cljs.core.__destructure_map(map__45052);
var msg__$1 = map__45052__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45052__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e45053){var ex = e45053;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__45054){
var map__45055 = p__45054;
var map__45055__$1 = cljs.core.__destructure_map(map__45055);
var env = map__45055__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45055__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__45056){
var map__45057 = p__45056;
var map__45057__$1 = cljs.core.__destructure_map(map__45057);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45057__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45057__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__45058){
var map__45059 = p__45058;
var map__45059__$1 = cljs.core.__destructure_map(map__45059);
var svc = map__45059__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45059__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
