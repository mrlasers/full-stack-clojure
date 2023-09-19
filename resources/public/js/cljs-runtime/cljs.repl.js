goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__42348){
var map__42351 = p__42348;
var map__42351__$1 = cljs.core.__destructure_map(map__42351);
var m = map__42351__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42351__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42351__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__42362_42776 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__42363_42777 = null;
var count__42364_42778 = (0);
var i__42365_42779 = (0);
while(true){
if((i__42365_42779 < count__42364_42778)){
var f_42780 = chunk__42363_42777.cljs$core$IIndexed$_nth$arity$2(null,i__42365_42779);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_42780], 0));


var G__42781 = seq__42362_42776;
var G__42782 = chunk__42363_42777;
var G__42783 = count__42364_42778;
var G__42784 = (i__42365_42779 + (1));
seq__42362_42776 = G__42781;
chunk__42363_42777 = G__42782;
count__42364_42778 = G__42783;
i__42365_42779 = G__42784;
continue;
} else {
var temp__5804__auto___42785 = cljs.core.seq(seq__42362_42776);
if(temp__5804__auto___42785){
var seq__42362_42786__$1 = temp__5804__auto___42785;
if(cljs.core.chunked_seq_QMARK_(seq__42362_42786__$1)){
var c__5568__auto___42787 = cljs.core.chunk_first(seq__42362_42786__$1);
var G__42788 = cljs.core.chunk_rest(seq__42362_42786__$1);
var G__42789 = c__5568__auto___42787;
var G__42790 = cljs.core.count(c__5568__auto___42787);
var G__42791 = (0);
seq__42362_42776 = G__42788;
chunk__42363_42777 = G__42789;
count__42364_42778 = G__42790;
i__42365_42779 = G__42791;
continue;
} else {
var f_42798 = cljs.core.first(seq__42362_42786__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_42798], 0));


var G__42799 = cljs.core.next(seq__42362_42786__$1);
var G__42800 = null;
var G__42801 = (0);
var G__42802 = (0);
seq__42362_42776 = G__42799;
chunk__42363_42777 = G__42800;
count__42364_42778 = G__42801;
i__42365_42779 = G__42802;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_42803 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_42803], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_42803)))?cljs.core.second(arglists_42803):arglists_42803)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__42396_42809 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__42397_42810 = null;
var count__42398_42811 = (0);
var i__42399_42812 = (0);
while(true){
if((i__42399_42812 < count__42398_42811)){
var vec__42436_42813 = chunk__42397_42810.cljs$core$IIndexed$_nth$arity$2(null,i__42399_42812);
var name_42814 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42436_42813,(0),null);
var map__42439_42815 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42436_42813,(1),null);
var map__42439_42816__$1 = cljs.core.__destructure_map(map__42439_42815);
var doc_42817 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42439_42816__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_42818 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42439_42816__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_42814], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_42818], 0));

if(cljs.core.truth_(doc_42817)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_42817], 0));
} else {
}


var G__42819 = seq__42396_42809;
var G__42820 = chunk__42397_42810;
var G__42821 = count__42398_42811;
var G__42822 = (i__42399_42812 + (1));
seq__42396_42809 = G__42819;
chunk__42397_42810 = G__42820;
count__42398_42811 = G__42821;
i__42399_42812 = G__42822;
continue;
} else {
var temp__5804__auto___42823 = cljs.core.seq(seq__42396_42809);
if(temp__5804__auto___42823){
var seq__42396_42824__$1 = temp__5804__auto___42823;
if(cljs.core.chunked_seq_QMARK_(seq__42396_42824__$1)){
var c__5568__auto___42825 = cljs.core.chunk_first(seq__42396_42824__$1);
var G__42826 = cljs.core.chunk_rest(seq__42396_42824__$1);
var G__42827 = c__5568__auto___42825;
var G__42828 = cljs.core.count(c__5568__auto___42825);
var G__42829 = (0);
seq__42396_42809 = G__42826;
chunk__42397_42810 = G__42827;
count__42398_42811 = G__42828;
i__42399_42812 = G__42829;
continue;
} else {
var vec__42459_42830 = cljs.core.first(seq__42396_42824__$1);
var name_42831 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42459_42830,(0),null);
var map__42462_42832 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42459_42830,(1),null);
var map__42462_42833__$1 = cljs.core.__destructure_map(map__42462_42832);
var doc_42834 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42462_42833__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_42835 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42462_42833__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_42831], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_42835], 0));

if(cljs.core.truth_(doc_42834)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_42834], 0));
} else {
}


var G__42836 = cljs.core.next(seq__42396_42824__$1);
var G__42837 = null;
var G__42838 = (0);
var G__42839 = (0);
seq__42396_42809 = G__42836;
chunk__42397_42810 = G__42837;
count__42398_42811 = G__42838;
i__42399_42812 = G__42839;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__42486 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__42487 = null;
var count__42488 = (0);
var i__42489 = (0);
while(true){
if((i__42489 < count__42488)){
var role = chunk__42487.cljs$core$IIndexed$_nth$arity$2(null,i__42489);
var temp__5804__auto___42840__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___42840__$1)){
var spec_42841 = temp__5804__auto___42840__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_42841)], 0));
} else {
}


var G__42845 = seq__42486;
var G__42846 = chunk__42487;
var G__42847 = count__42488;
var G__42848 = (i__42489 + (1));
seq__42486 = G__42845;
chunk__42487 = G__42846;
count__42488 = G__42847;
i__42489 = G__42848;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__42486);
if(temp__5804__auto____$1){
var seq__42486__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__42486__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__42486__$1);
var G__42849 = cljs.core.chunk_rest(seq__42486__$1);
var G__42850 = c__5568__auto__;
var G__42851 = cljs.core.count(c__5568__auto__);
var G__42852 = (0);
seq__42486 = G__42849;
chunk__42487 = G__42850;
count__42488 = G__42851;
i__42489 = G__42852;
continue;
} else {
var role = cljs.core.first(seq__42486__$1);
var temp__5804__auto___42853__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___42853__$2)){
var spec_42855 = temp__5804__auto___42853__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_42855)], 0));
} else {
}


var G__42856 = cljs.core.next(seq__42486__$1);
var G__42857 = null;
var G__42858 = (0);
var G__42859 = (0);
seq__42486 = G__42856;
chunk__42487 = G__42857;
count__42488 = G__42858;
i__42489 = G__42859;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__42867 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__42868 = cljs.core.ex_cause(t);
via = G__42867;
t = G__42868;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__42610 = datafied_throwable;
var map__42610__$1 = cljs.core.__destructure_map(map__42610);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42610__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42610__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42610__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__42611 = cljs.core.last(via);
var map__42611__$1 = cljs.core.__destructure_map(map__42611);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42611__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42611__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42611__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__42612 = data;
var map__42612__$1 = cljs.core.__destructure_map(map__42612);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42612__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42612__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42612__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__42613 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__42613__$1 = cljs.core.__destructure_map(map__42613);
var top_data = map__42613__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42613__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__42624 = phase;
var G__42624__$1 = (((G__42624 instanceof cljs.core.Keyword))?G__42624.fqn:null);
switch (G__42624__$1) {
case "read-source":
var map__42625 = data;
var map__42625__$1 = cljs.core.__destructure_map(map__42625);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42625__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42625__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__42633 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__42633__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42633,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__42633);
var G__42633__$2 = (cljs.core.truth_((function (){var fexpr__42644 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__42644.cljs$core$IFn$_invoke$arity$1 ? fexpr__42644.cljs$core$IFn$_invoke$arity$1(source) : fexpr__42644.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__42633__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__42633__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42633__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__42633__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__42645 = top_data;
var G__42645__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42645,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__42645);
var G__42645__$2 = (cljs.core.truth_((function (){var fexpr__42654 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__42654.cljs$core$IFn$_invoke$arity$1 ? fexpr__42654.cljs$core$IFn$_invoke$arity$1(source) : fexpr__42654.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__42645__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__42645__$1);
var G__42645__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42645__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__42645__$2);
var G__42645__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42645__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__42645__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42645__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__42645__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__42662 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42662,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42662,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42662,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42662,(3),null);
var G__42665 = top_data;
var G__42665__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42665,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__42665);
var G__42665__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42665__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__42665__$1);
var G__42665__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42665__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__42665__$2);
var G__42665__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42665__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__42665__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42665__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__42665__$4;
}

break;
case "execution":
var vec__42674 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42674,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42674,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42674,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42674,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__42573_SHARP_){
var or__5045__auto__ = (p1__42573_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__42681 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__42681.cljs$core$IFn$_invoke$arity$1 ? fexpr__42681.cljs$core$IFn$_invoke$arity$1(p1__42573_SHARP_) : fexpr__42681.call(null,p1__42573_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__42688 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__42688__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42688,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__42688);
var G__42688__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42688__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__42688__$1);
var G__42688__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42688__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__42688__$2);
var G__42688__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42688__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__42688__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42688__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__42688__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42624__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__42701){
var map__42702 = p__42701;
var map__42702__$1 = cljs.core.__destructure_map(map__42702);
var triage_data = map__42702__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42702__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42702__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42702__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42702__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42702__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42702__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42702__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42702__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__42712 = phase;
var G__42712__$1 = (((G__42712 instanceof cljs.core.Keyword))?G__42712.fqn:null);
switch (G__42712__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__42713 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__42714 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__42715 = loc;
var G__42716 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__42718_42900 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__42719_42901 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__42720_42902 = true;
var _STAR_print_fn_STAR__temp_val__42721_42903 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__42720_42902);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__42721_42903);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42696_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__42696_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__42719_42901);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__42718_42900);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__42713,G__42714,G__42715,G__42716) : format.call(null,G__42713,G__42714,G__42715,G__42716));

break;
case "macroexpansion":
var G__42728 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__42729 = cause_type;
var G__42730 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__42731 = loc;
var G__42732 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__42728,G__42729,G__42730,G__42731,G__42732) : format.call(null,G__42728,G__42729,G__42730,G__42731,G__42732));

break;
case "compile-syntax-check":
var G__42733 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__42734 = cause_type;
var G__42735 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__42736 = loc;
var G__42737 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__42733,G__42734,G__42735,G__42736,G__42737) : format.call(null,G__42733,G__42734,G__42735,G__42736,G__42737));

break;
case "compilation":
var G__42738 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__42739 = cause_type;
var G__42740 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__42741 = loc;
var G__42742 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__42738,G__42739,G__42740,G__42741,G__42742) : format.call(null,G__42738,G__42739,G__42740,G__42741,G__42742));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__42743 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__42744 = symbol;
var G__42745 = loc;
var G__42746 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__42749_42908 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__42750_42909 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__42751_42910 = true;
var _STAR_print_fn_STAR__temp_val__42752_42911 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__42751_42910);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__42752_42911);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42697_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__42697_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__42750_42909);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__42749_42908);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__42743,G__42744,G__42745,G__42746) : format.call(null,G__42743,G__42744,G__42745,G__42746));
} else {
var G__42764 = "Execution error%s at %s(%s).\n%s\n";
var G__42765 = cause_type;
var G__42766 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__42767 = loc;
var G__42768 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__42764,G__42765,G__42766,G__42767,G__42768) : format.call(null,G__42764,G__42765,G__42766,G__42767,G__42768));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42712__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
