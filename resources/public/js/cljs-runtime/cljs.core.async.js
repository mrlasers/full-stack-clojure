goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37809 = (function (f,blockable,meta37810){
this.f = f;
this.blockable = blockable;
this.meta37810 = meta37810;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37809.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37811,meta37810__$1){
var self__ = this;
var _37811__$1 = this;
return (new cljs.core.async.t_cljs$core$async37809(self__.f,self__.blockable,meta37810__$1));
}));

(cljs.core.async.t_cljs$core$async37809.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37811){
var self__ = this;
var _37811__$1 = this;
return self__.meta37810;
}));

(cljs.core.async.t_cljs$core$async37809.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37809.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37809.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async37809.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async37809.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta37810","meta37810",607389715,null)], null);
}));

(cljs.core.async.t_cljs$core$async37809.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37809.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37809");

(cljs.core.async.t_cljs$core$async37809.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async37809");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37809.
 */
cljs.core.async.__GT_t_cljs$core$async37809 = (function cljs$core$async$__GT_t_cljs$core$async37809(f,blockable,meta37810){
return (new cljs.core.async.t_cljs$core$async37809(f,blockable,meta37810));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__37803 = arguments.length;
switch (G__37803) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async37809(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__37831 = arguments.length;
switch (G__37831) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__37833 = arguments.length;
switch (G__37833) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__37840 = arguments.length;
switch (G__37840) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_41206 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_41206) : fn1.call(null,val_41206));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_41206) : fn1.call(null,val_41206));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__37852 = arguments.length;
switch (G__37852) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___41220 = n;
var x_41221 = (0);
while(true){
if((x_41221 < n__5636__auto___41220)){
(a[x_41221] = x_41221);

var G__41222 = (x_41221 + (1));
x_41221 = G__41222;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37865 = (function (flag,meta37866){
this.flag = flag;
this.meta37866 = meta37866;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37865.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37867,meta37866__$1){
var self__ = this;
var _37867__$1 = this;
return (new cljs.core.async.t_cljs$core$async37865(self__.flag,meta37866__$1));
}));

(cljs.core.async.t_cljs$core$async37865.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37867){
var self__ = this;
var _37867__$1 = this;
return self__.meta37866;
}));

(cljs.core.async.t_cljs$core$async37865.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37865.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async37865.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37865.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async37865.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta37866","meta37866",1767874630,null)], null);
}));

(cljs.core.async.t_cljs$core$async37865.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37865.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37865");

(cljs.core.async.t_cljs$core$async37865.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async37865");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37865.
 */
cljs.core.async.__GT_t_cljs$core$async37865 = (function cljs$core$async$__GT_t_cljs$core$async37865(flag,meta37866){
return (new cljs.core.async.t_cljs$core$async37865(flag,meta37866));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async37865(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37883 = (function (flag,cb,meta37884){
this.flag = flag;
this.cb = cb;
this.meta37884 = meta37884;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37883.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37885,meta37884__$1){
var self__ = this;
var _37885__$1 = this;
return (new cljs.core.async.t_cljs$core$async37883(self__.flag,self__.cb,meta37884__$1));
}));

(cljs.core.async.t_cljs$core$async37883.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37885){
var self__ = this;
var _37885__$1 = this;
return self__.meta37884;
}));

(cljs.core.async.t_cljs$core$async37883.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37883.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async37883.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37883.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async37883.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta37884","meta37884",339664994,null)], null);
}));

(cljs.core.async.t_cljs$core$async37883.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37883.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37883");

(cljs.core.async.t_cljs$core$async37883.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async37883");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37883.
 */
cljs.core.async.__GT_t_cljs$core$async37883 = (function cljs$core$async$__GT_t_cljs$core$async37883(flag,cb,meta37884){
return (new cljs.core.async.t_cljs$core$async37883(flag,cb,meta37884));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async37883(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37901_SHARP_){
var G__37912 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37901_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__37912) : fret.call(null,G__37912));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37902_SHARP_){
var G__37913 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37902_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__37913) : fret.call(null,G__37913));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__41240 = (i + (1));
i = G__41240;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___41241 = arguments.length;
var i__5770__auto___41242 = (0);
while(true){
if((i__5770__auto___41242 < len__5769__auto___41241)){
args__5775__auto__.push((arguments[i__5770__auto___41242]));

var G__41243 = (i__5770__auto___41242 + (1));
i__5770__auto___41242 = G__41243;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__37935){
var map__37936 = p__37935;
var map__37936__$1 = cljs.core.__destructure_map(map__37936);
var opts = map__37936__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq37925){
var G__37926 = cljs.core.first(seq37925);
var seq37925__$1 = cljs.core.next(seq37925);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37926,seq37925__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__37953 = arguments.length;
switch (G__37953) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__37673__auto___41260 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37676__auto__ = (function (){var switch__37428__auto__ = (function (state_38030){
var state_val_38031 = (state_38030[(1)]);
if((state_val_38031 === (7))){
var inst_38022 = (state_38030[(2)]);
var state_38030__$1 = state_38030;
var statearr_38046_41261 = state_38030__$1;
(statearr_38046_41261[(2)] = inst_38022);

(statearr_38046_41261[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38031 === (1))){
var state_38030__$1 = state_38030;
var statearr_38056_41262 = state_38030__$1;
(statearr_38056_41262[(2)] = null);

(statearr_38056_41262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38031 === (4))){
var inst_37992 = (state_38030[(7)]);
var inst_37992__$1 = (state_38030[(2)]);
var inst_37999 = (inst_37992__$1 == null);
var state_38030__$1 = (function (){var statearr_38059 = state_38030;
(statearr_38059[(7)] = inst_37992__$1);

return statearr_38059;
})();
if(cljs.core.truth_(inst_37999)){
var statearr_38062_41263 = state_38030__$1;
(statearr_38062_41263[(1)] = (5));

} else {
var statearr_38063_41264 = state_38030__$1;
(statearr_38063_41264[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38031 === (13))){
var state_38030__$1 = state_38030;
var statearr_38070_41265 = state_38030__$1;
(statearr_38070_41265[(2)] = null);

(statearr_38070_41265[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38031 === (6))){
var inst_37992 = (state_38030[(7)]);
var state_38030__$1 = state_38030;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38030__$1,(11),to,inst_37992);
} else {
if((state_val_38031 === (3))){
var inst_38025 = (state_38030[(2)]);
var state_38030__$1 = state_38030;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38030__$1,inst_38025);
} else {
if((state_val_38031 === (12))){
var state_38030__$1 = state_38030;
var statearr_38075_41266 = state_38030__$1;
(statearr_38075_41266[(2)] = null);

(statearr_38075_41266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38031 === (2))){
var state_38030__$1 = state_38030;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38030__$1,(4),from);
} else {
if((state_val_38031 === (11))){
var inst_38013 = (state_38030[(2)]);
var state_38030__$1 = state_38030;
if(cljs.core.truth_(inst_38013)){
var statearr_38078_41267 = state_38030__$1;
(statearr_38078_41267[(1)] = (12));

} else {
var statearr_38080_41271 = state_38030__$1;
(statearr_38080_41271[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38031 === (9))){
var state_38030__$1 = state_38030;
var statearr_38084_41272 = state_38030__$1;
(statearr_38084_41272[(2)] = null);

(statearr_38084_41272[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38031 === (5))){
var state_38030__$1 = state_38030;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38086_41280 = state_38030__$1;
(statearr_38086_41280[(1)] = (8));

} else {
var statearr_38087_41281 = state_38030__$1;
(statearr_38087_41281[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38031 === (14))){
var inst_38020 = (state_38030[(2)]);
var state_38030__$1 = state_38030;
var statearr_38089_41282 = state_38030__$1;
(statearr_38089_41282[(2)] = inst_38020);

(statearr_38089_41282[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38031 === (10))){
var inst_38010 = (state_38030[(2)]);
var state_38030__$1 = state_38030;
var statearr_38093_41286 = state_38030__$1;
(statearr_38093_41286[(2)] = inst_38010);

(statearr_38093_41286[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38031 === (8))){
var inst_38005 = cljs.core.async.close_BANG_(to);
var state_38030__$1 = state_38030;
var statearr_38097_41288 = state_38030__$1;
(statearr_38097_41288[(2)] = inst_38005);

(statearr_38097_41288[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37429__auto__ = null;
var cljs$core$async$state_machine__37429__auto____0 = (function (){
var statearr_38100 = [null,null,null,null,null,null,null,null];
(statearr_38100[(0)] = cljs$core$async$state_machine__37429__auto__);

(statearr_38100[(1)] = (1));

return statearr_38100;
});
var cljs$core$async$state_machine__37429__auto____1 = (function (state_38030){
while(true){
var ret_value__37430__auto__ = (function (){try{while(true){
var result__37431__auto__ = switch__37428__auto__(state_38030);
if(cljs.core.keyword_identical_QMARK_(result__37431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37431__auto__;
}
break;
}
}catch (e38101){var ex__37432__auto__ = e38101;
var statearr_38104_41289 = state_38030;
(statearr_38104_41289[(2)] = ex__37432__auto__);


if(cljs.core.seq((state_38030[(4)]))){
var statearr_38106_41290 = state_38030;
(statearr_38106_41290[(1)] = cljs.core.first((state_38030[(4)])));

} else {
throw ex__37432__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41291 = state_38030;
state_38030 = G__41291;
continue;
} else {
return ret_value__37430__auto__;
}
break;
}
});
cljs$core$async$state_machine__37429__auto__ = function(state_38030){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37429__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37429__auto____1.call(this,state_38030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37429__auto____0;
cljs$core$async$state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37429__auto____1;
return cljs$core$async$state_machine__37429__auto__;
})()
})();
var state__37677__auto__ = (function (){var statearr_38110 = f__37676__auto__();
(statearr_38110[(6)] = c__37673__auto___41260);

return statearr_38110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37677__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__38162){
var vec__38163 = p__38162;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38163,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38163,(1),null);
var job = vec__38163;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__37673__auto___41304 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37676__auto__ = (function (){var switch__37428__auto__ = (function (state_38174){
var state_val_38175 = (state_38174[(1)]);
if((state_val_38175 === (1))){
var state_38174__$1 = state_38174;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38174__$1,(2),res,v);
} else {
if((state_val_38175 === (2))){
var inst_38171 = (state_38174[(2)]);
var inst_38172 = cljs.core.async.close_BANG_(res);
var state_38174__$1 = (function (){var statearr_38178 = state_38174;
(statearr_38178[(7)] = inst_38171);

return statearr_38178;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38174__$1,inst_38172);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37429__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37429__auto____0 = (function (){
var statearr_38185 = [null,null,null,null,null,null,null,null];
(statearr_38185[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37429__auto__);

(statearr_38185[(1)] = (1));

return statearr_38185;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37429__auto____1 = (function (state_38174){
while(true){
var ret_value__37430__auto__ = (function (){try{while(true){
var result__37431__auto__ = switch__37428__auto__(state_38174);
if(cljs.core.keyword_identical_QMARK_(result__37431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37431__auto__;
}
break;
}
}catch (e38190){var ex__37432__auto__ = e38190;
var statearr_38191_41312 = state_38174;
(statearr_38191_41312[(2)] = ex__37432__auto__);


if(cljs.core.seq((state_38174[(4)]))){
var statearr_38192_41314 = state_38174;
(statearr_38192_41314[(1)] = cljs.core.first((state_38174[(4)])));

} else {
throw ex__37432__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41323 = state_38174;
state_38174 = G__41323;
continue;
} else {
return ret_value__37430__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37429__auto__ = function(state_38174){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37429__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37429__auto____1.call(this,state_38174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37429__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37429__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37429__auto__;
})()
})();
var state__37677__auto__ = (function (){var statearr_38197 = f__37676__auto__();
(statearr_38197[(6)] = c__37673__auto___41304);

return statearr_38197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37677__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__38198){
var vec__38201 = p__38198;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38201,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38201,(1),null);
var job = vec__38201;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___41336 = n;
var __41337 = (0);
while(true){
if((__41337 < n__5636__auto___41336)){
var G__38216_41342 = type;
var G__38216_41343__$1 = (((G__38216_41342 instanceof cljs.core.Keyword))?G__38216_41342.fqn:null);
switch (G__38216_41343__$1) {
case "compute":
var c__37673__auto___41348 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__41337,c__37673__auto___41348,G__38216_41342,G__38216_41343__$1,n__5636__auto___41336,jobs,results,process__$1,async){
return (function (){
var f__37676__auto__ = (function (){var switch__37428__auto__ = ((function (__41337,c__37673__auto___41348,G__38216_41342,G__38216_41343__$1,n__5636__auto___41336,jobs,results,process__$1,async){
return (function (state_38240){
var state_val_38241 = (state_38240[(1)]);
if((state_val_38241 === (1))){
var state_38240__$1 = state_38240;
var statearr_38243_41351 = state_38240__$1;
(statearr_38243_41351[(2)] = null);

(statearr_38243_41351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38241 === (2))){
var state_38240__$1 = state_38240;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38240__$1,(4),jobs);
} else {
if((state_val_38241 === (3))){
var inst_38238 = (state_38240[(2)]);
var state_38240__$1 = state_38240;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38240__$1,inst_38238);
} else {
if((state_val_38241 === (4))){
var inst_38230 = (state_38240[(2)]);
var inst_38231 = process__$1(inst_38230);
var state_38240__$1 = state_38240;
if(cljs.core.truth_(inst_38231)){
var statearr_38275_41354 = state_38240__$1;
(statearr_38275_41354[(1)] = (5));

} else {
var statearr_38281_41355 = state_38240__$1;
(statearr_38281_41355[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38241 === (5))){
var state_38240__$1 = state_38240;
var statearr_38290_41356 = state_38240__$1;
(statearr_38290_41356[(2)] = null);

(statearr_38290_41356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38241 === (6))){
var state_38240__$1 = state_38240;
var statearr_38291_41357 = state_38240__$1;
(statearr_38291_41357[(2)] = null);

(statearr_38291_41357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38241 === (7))){
var inst_38236 = (state_38240[(2)]);
var state_38240__$1 = state_38240;
var statearr_38297_41361 = state_38240__$1;
(statearr_38297_41361[(2)] = inst_38236);

(statearr_38297_41361[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__41337,c__37673__auto___41348,G__38216_41342,G__38216_41343__$1,n__5636__auto___41336,jobs,results,process__$1,async))
;
return ((function (__41337,switch__37428__auto__,c__37673__auto___41348,G__38216_41342,G__38216_41343__$1,n__5636__auto___41336,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37429__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37429__auto____0 = (function (){
var statearr_38310 = [null,null,null,null,null,null,null];
(statearr_38310[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37429__auto__);

(statearr_38310[(1)] = (1));

return statearr_38310;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37429__auto____1 = (function (state_38240){
while(true){
var ret_value__37430__auto__ = (function (){try{while(true){
var result__37431__auto__ = switch__37428__auto__(state_38240);
if(cljs.core.keyword_identical_QMARK_(result__37431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37431__auto__;
}
break;
}
}catch (e38316){var ex__37432__auto__ = e38316;
var statearr_38318_41364 = state_38240;
(statearr_38318_41364[(2)] = ex__37432__auto__);


if(cljs.core.seq((state_38240[(4)]))){
var statearr_38321_41366 = state_38240;
(statearr_38321_41366[(1)] = cljs.core.first((state_38240[(4)])));

} else {
throw ex__37432__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41367 = state_38240;
state_38240 = G__41367;
continue;
} else {
return ret_value__37430__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37429__auto__ = function(state_38240){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37429__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37429__auto____1.call(this,state_38240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37429__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37429__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37429__auto__;
})()
;})(__41337,switch__37428__auto__,c__37673__auto___41348,G__38216_41342,G__38216_41343__$1,n__5636__auto___41336,jobs,results,process__$1,async))
})();
var state__37677__auto__ = (function (){var statearr_38322 = f__37676__auto__();
(statearr_38322[(6)] = c__37673__auto___41348);

return statearr_38322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37677__auto__);
});})(__41337,c__37673__auto___41348,G__38216_41342,G__38216_41343__$1,n__5636__auto___41336,jobs,results,process__$1,async))
);


break;
case "async":
var c__37673__auto___41368 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__41337,c__37673__auto___41368,G__38216_41342,G__38216_41343__$1,n__5636__auto___41336,jobs,results,process__$1,async){
return (function (){
var f__37676__auto__ = (function (){var switch__37428__auto__ = ((function (__41337,c__37673__auto___41368,G__38216_41342,G__38216_41343__$1,n__5636__auto___41336,jobs,results,process__$1,async){
return (function (state_38335){
var state_val_38336 = (state_38335[(1)]);
if((state_val_38336 === (1))){
var state_38335__$1 = state_38335;
var statearr_38338_41369 = state_38335__$1;
(statearr_38338_41369[(2)] = null);

(statearr_38338_41369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38336 === (2))){
var state_38335__$1 = state_38335;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38335__$1,(4),jobs);
} else {
if((state_val_38336 === (3))){
var inst_38333 = (state_38335[(2)]);
var state_38335__$1 = state_38335;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38335__$1,inst_38333);
} else {
if((state_val_38336 === (4))){
var inst_38325 = (state_38335[(2)]);
var inst_38326 = async(inst_38325);
var state_38335__$1 = state_38335;
if(cljs.core.truth_(inst_38326)){
var statearr_38339_41370 = state_38335__$1;
(statearr_38339_41370[(1)] = (5));

} else {
var statearr_38340_41371 = state_38335__$1;
(statearr_38340_41371[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38336 === (5))){
var state_38335__$1 = state_38335;
var statearr_38342_41372 = state_38335__$1;
(statearr_38342_41372[(2)] = null);

(statearr_38342_41372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38336 === (6))){
var state_38335__$1 = state_38335;
var statearr_38344_41375 = state_38335__$1;
(statearr_38344_41375[(2)] = null);

(statearr_38344_41375[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38336 === (7))){
var inst_38331 = (state_38335[(2)]);
var state_38335__$1 = state_38335;
var statearr_38345_41377 = state_38335__$1;
(statearr_38345_41377[(2)] = inst_38331);

(statearr_38345_41377[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__41337,c__37673__auto___41368,G__38216_41342,G__38216_41343__$1,n__5636__auto___41336,jobs,results,process__$1,async))
;
return ((function (__41337,switch__37428__auto__,c__37673__auto___41368,G__38216_41342,G__38216_41343__$1,n__5636__auto___41336,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37429__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37429__auto____0 = (function (){
var statearr_38356 = [null,null,null,null,null,null,null];
(statearr_38356[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37429__auto__);

(statearr_38356[(1)] = (1));

return statearr_38356;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37429__auto____1 = (function (state_38335){
while(true){
var ret_value__37430__auto__ = (function (){try{while(true){
var result__37431__auto__ = switch__37428__auto__(state_38335);
if(cljs.core.keyword_identical_QMARK_(result__37431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37431__auto__;
}
break;
}
}catch (e38363){var ex__37432__auto__ = e38363;
var statearr_38364_41380 = state_38335;
(statearr_38364_41380[(2)] = ex__37432__auto__);


if(cljs.core.seq((state_38335[(4)]))){
var statearr_38365_41381 = state_38335;
(statearr_38365_41381[(1)] = cljs.core.first((state_38335[(4)])));

} else {
throw ex__37432__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41382 = state_38335;
state_38335 = G__41382;
continue;
} else {
return ret_value__37430__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37429__auto__ = function(state_38335){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37429__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37429__auto____1.call(this,state_38335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37429__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37429__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37429__auto__;
})()
;})(__41337,switch__37428__auto__,c__37673__auto___41368,G__38216_41342,G__38216_41343__$1,n__5636__auto___41336,jobs,results,process__$1,async))
})();
var state__37677__auto__ = (function (){var statearr_38370 = f__37676__auto__();
(statearr_38370[(6)] = c__37673__auto___41368);

return statearr_38370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37677__auto__);
});})(__41337,c__37673__auto___41368,G__38216_41342,G__38216_41343__$1,n__5636__auto___41336,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38216_41343__$1)].join('')));

}

var G__41384 = (__41337 + (1));
__41337 = G__41384;
continue;
} else {
}
break;
}

var c__37673__auto___41385 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37676__auto__ = (function (){var switch__37428__auto__ = (function (state_38398){
var state_val_38399 = (state_38398[(1)]);
if((state_val_38399 === (7))){
var inst_38394 = (state_38398[(2)]);
var state_38398__$1 = state_38398;
var statearr_38406_41387 = state_38398__$1;
(statearr_38406_41387[(2)] = inst_38394);

(statearr_38406_41387[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38399 === (1))){
var state_38398__$1 = state_38398;
var statearr_38411_41388 = state_38398__$1;
(statearr_38411_41388[(2)] = null);

(statearr_38411_41388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38399 === (4))){
var inst_38374 = (state_38398[(7)]);
var inst_38374__$1 = (state_38398[(2)]);
var inst_38376 = (inst_38374__$1 == null);
var state_38398__$1 = (function (){var statearr_38413 = state_38398;
(statearr_38413[(7)] = inst_38374__$1);

return statearr_38413;
})();
if(cljs.core.truth_(inst_38376)){
var statearr_38414_41390 = state_38398__$1;
(statearr_38414_41390[(1)] = (5));

} else {
var statearr_38415_41391 = state_38398__$1;
(statearr_38415_41391[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38399 === (6))){
var inst_38380 = (state_38398[(8)]);
var inst_38374 = (state_38398[(7)]);
var inst_38380__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_38384 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38386 = [inst_38374,inst_38380__$1];
var inst_38387 = (new cljs.core.PersistentVector(null,2,(5),inst_38384,inst_38386,null));
var state_38398__$1 = (function (){var statearr_38419 = state_38398;
(statearr_38419[(8)] = inst_38380__$1);

return statearr_38419;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38398__$1,(8),jobs,inst_38387);
} else {
if((state_val_38399 === (3))){
var inst_38396 = (state_38398[(2)]);
var state_38398__$1 = state_38398;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38398__$1,inst_38396);
} else {
if((state_val_38399 === (2))){
var state_38398__$1 = state_38398;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38398__$1,(4),from);
} else {
if((state_val_38399 === (9))){
var inst_38391 = (state_38398[(2)]);
var state_38398__$1 = (function (){var statearr_38424 = state_38398;
(statearr_38424[(9)] = inst_38391);

return statearr_38424;
})();
var statearr_38426_41402 = state_38398__$1;
(statearr_38426_41402[(2)] = null);

(statearr_38426_41402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38399 === (5))){
var inst_38378 = cljs.core.async.close_BANG_(jobs);
var state_38398__$1 = state_38398;
var statearr_38428_41403 = state_38398__$1;
(statearr_38428_41403[(2)] = inst_38378);

(statearr_38428_41403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38399 === (8))){
var inst_38380 = (state_38398[(8)]);
var inst_38389 = (state_38398[(2)]);
var state_38398__$1 = (function (){var statearr_38436 = state_38398;
(statearr_38436[(10)] = inst_38389);

return statearr_38436;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38398__$1,(9),results,inst_38380);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37429__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37429__auto____0 = (function (){
var statearr_38438 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38438[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37429__auto__);

(statearr_38438[(1)] = (1));

return statearr_38438;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37429__auto____1 = (function (state_38398){
while(true){
var ret_value__37430__auto__ = (function (){try{while(true){
var result__37431__auto__ = switch__37428__auto__(state_38398);
if(cljs.core.keyword_identical_QMARK_(result__37431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37431__auto__;
}
break;
}
}catch (e38441){var ex__37432__auto__ = e38441;
var statearr_38443_41407 = state_38398;
(statearr_38443_41407[(2)] = ex__37432__auto__);


if(cljs.core.seq((state_38398[(4)]))){
var statearr_38446_41408 = state_38398;
(statearr_38446_41408[(1)] = cljs.core.first((state_38398[(4)])));

} else {
throw ex__37432__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41409 = state_38398;
state_38398 = G__41409;
continue;
} else {
return ret_value__37430__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37429__auto__ = function(state_38398){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37429__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37429__auto____1.call(this,state_38398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37429__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37429__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37429__auto__;
})()
})();
var state__37677__auto__ = (function (){var statearr_38452 = f__37676__auto__();
(statearr_38452[(6)] = c__37673__auto___41385);

return statearr_38452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37677__auto__);
}));


var c__37673__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37676__auto__ = (function (){var switch__37428__auto__ = (function (state_38501){
var state_val_38502 = (state_38501[(1)]);
if((state_val_38502 === (7))){
var inst_38496 = (state_38501[(2)]);
var state_38501__$1 = state_38501;
var statearr_38512_41413 = state_38501__$1;
(statearr_38512_41413[(2)] = inst_38496);

(statearr_38512_41413[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38502 === (20))){
var state_38501__$1 = state_38501;
var statearr_38513_41414 = state_38501__$1;
(statearr_38513_41414[(2)] = null);

(statearr_38513_41414[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38502 === (1))){
var state_38501__$1 = state_38501;
var statearr_38514_41415 = state_38501__$1;
(statearr_38514_41415[(2)] = null);

(statearr_38514_41415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38502 === (4))){
var inst_38460 = (state_38501[(7)]);
var inst_38460__$1 = (state_38501[(2)]);
var inst_38461 = (inst_38460__$1 == null);
var state_38501__$1 = (function (){var statearr_38519 = state_38501;
(statearr_38519[(7)] = inst_38460__$1);

return statearr_38519;
})();
if(cljs.core.truth_(inst_38461)){
var statearr_38521_41418 = state_38501__$1;
(statearr_38521_41418[(1)] = (5));

} else {
var statearr_38522_41422 = state_38501__$1;
(statearr_38522_41422[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38502 === (15))){
var inst_38477 = (state_38501[(8)]);
var state_38501__$1 = state_38501;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38501__$1,(18),to,inst_38477);
} else {
if((state_val_38502 === (21))){
var inst_38491 = (state_38501[(2)]);
var state_38501__$1 = state_38501;
var statearr_38529_41432 = state_38501__$1;
(statearr_38529_41432[(2)] = inst_38491);

(statearr_38529_41432[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38502 === (13))){
var inst_38493 = (state_38501[(2)]);
var state_38501__$1 = (function (){var statearr_38532 = state_38501;
(statearr_38532[(9)] = inst_38493);

return statearr_38532;
})();
var statearr_38533_41435 = state_38501__$1;
(statearr_38533_41435[(2)] = null);

(statearr_38533_41435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38502 === (6))){
var inst_38460 = (state_38501[(7)]);
var state_38501__$1 = state_38501;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38501__$1,(11),inst_38460);
} else {
if((state_val_38502 === (17))){
var inst_38486 = (state_38501[(2)]);
var state_38501__$1 = state_38501;
if(cljs.core.truth_(inst_38486)){
var statearr_38538_41450 = state_38501__$1;
(statearr_38538_41450[(1)] = (19));

} else {
var statearr_38539_41451 = state_38501__$1;
(statearr_38539_41451[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38502 === (3))){
var inst_38498 = (state_38501[(2)]);
var state_38501__$1 = state_38501;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38501__$1,inst_38498);
} else {
if((state_val_38502 === (12))){
var inst_38474 = (state_38501[(10)]);
var state_38501__$1 = state_38501;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38501__$1,(14),inst_38474);
} else {
if((state_val_38502 === (2))){
var state_38501__$1 = state_38501;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38501__$1,(4),results);
} else {
if((state_val_38502 === (19))){
var state_38501__$1 = state_38501;
var statearr_38543_41453 = state_38501__$1;
(statearr_38543_41453[(2)] = null);

(statearr_38543_41453[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38502 === (11))){
var inst_38474 = (state_38501[(2)]);
var state_38501__$1 = (function (){var statearr_38548 = state_38501;
(statearr_38548[(10)] = inst_38474);

return statearr_38548;
})();
var statearr_38551_41455 = state_38501__$1;
(statearr_38551_41455[(2)] = null);

(statearr_38551_41455[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38502 === (9))){
var state_38501__$1 = state_38501;
var statearr_38554_41456 = state_38501__$1;
(statearr_38554_41456[(2)] = null);

(statearr_38554_41456[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38502 === (5))){
var state_38501__$1 = state_38501;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38555_41458 = state_38501__$1;
(statearr_38555_41458[(1)] = (8));

} else {
var statearr_38556_41459 = state_38501__$1;
(statearr_38556_41459[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38502 === (14))){
var inst_38477 = (state_38501[(8)]);
var inst_38479 = (state_38501[(11)]);
var inst_38477__$1 = (state_38501[(2)]);
var inst_38478 = (inst_38477__$1 == null);
var inst_38479__$1 = cljs.core.not(inst_38478);
var state_38501__$1 = (function (){var statearr_38566 = state_38501;
(statearr_38566[(8)] = inst_38477__$1);

(statearr_38566[(11)] = inst_38479__$1);

return statearr_38566;
})();
if(inst_38479__$1){
var statearr_38568_41463 = state_38501__$1;
(statearr_38568_41463[(1)] = (15));

} else {
var statearr_38569_41465 = state_38501__$1;
(statearr_38569_41465[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38502 === (16))){
var inst_38479 = (state_38501[(11)]);
var state_38501__$1 = state_38501;
var statearr_38571_41466 = state_38501__$1;
(statearr_38571_41466[(2)] = inst_38479);

(statearr_38571_41466[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38502 === (10))){
var inst_38470 = (state_38501[(2)]);
var state_38501__$1 = state_38501;
var statearr_38575_41467 = state_38501__$1;
(statearr_38575_41467[(2)] = inst_38470);

(statearr_38575_41467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38502 === (18))){
var inst_38483 = (state_38501[(2)]);
var state_38501__$1 = state_38501;
var statearr_38579_41468 = state_38501__$1;
(statearr_38579_41468[(2)] = inst_38483);

(statearr_38579_41468[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38502 === (8))){
var inst_38467 = cljs.core.async.close_BANG_(to);
var state_38501__$1 = state_38501;
var statearr_38584_41476 = state_38501__$1;
(statearr_38584_41476[(2)] = inst_38467);

(statearr_38584_41476[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37429__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37429__auto____0 = (function (){
var statearr_38598 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38598[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37429__auto__);

(statearr_38598[(1)] = (1));

return statearr_38598;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37429__auto____1 = (function (state_38501){
while(true){
var ret_value__37430__auto__ = (function (){try{while(true){
var result__37431__auto__ = switch__37428__auto__(state_38501);
if(cljs.core.keyword_identical_QMARK_(result__37431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37431__auto__;
}
break;
}
}catch (e38601){var ex__37432__auto__ = e38601;
var statearr_38602_41498 = state_38501;
(statearr_38602_41498[(2)] = ex__37432__auto__);


if(cljs.core.seq((state_38501[(4)]))){
var statearr_38606_41503 = state_38501;
(statearr_38606_41503[(1)] = cljs.core.first((state_38501[(4)])));

} else {
throw ex__37432__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41511 = state_38501;
state_38501 = G__41511;
continue;
} else {
return ret_value__37430__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37429__auto__ = function(state_38501){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37429__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37429__auto____1.call(this,state_38501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37429__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37429__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37429__auto__;
})()
})();
var state__37677__auto__ = (function (){var statearr_38613 = f__37676__auto__();
(statearr_38613[(6)] = c__37673__auto__);

return statearr_38613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37677__auto__);
}));

return c__37673__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__38620 = arguments.length;
switch (G__38620) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__38634 = arguments.length;
switch (G__38634) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__38650 = arguments.length;
switch (G__38650) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__37673__auto___41539 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37676__auto__ = (function (){var switch__37428__auto__ = (function (state_38691){
var state_val_38692 = (state_38691[(1)]);
if((state_val_38692 === (7))){
var inst_38681 = (state_38691[(2)]);
var state_38691__$1 = state_38691;
var statearr_38707_41548 = state_38691__$1;
(statearr_38707_41548[(2)] = inst_38681);

(statearr_38707_41548[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38692 === (1))){
var state_38691__$1 = state_38691;
var statearr_38712_41554 = state_38691__$1;
(statearr_38712_41554[(2)] = null);

(statearr_38712_41554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38692 === (4))){
var inst_38660 = (state_38691[(7)]);
var inst_38660__$1 = (state_38691[(2)]);
var inst_38661 = (inst_38660__$1 == null);
var state_38691__$1 = (function (){var statearr_38714 = state_38691;
(statearr_38714[(7)] = inst_38660__$1);

return statearr_38714;
})();
if(cljs.core.truth_(inst_38661)){
var statearr_38717_41564 = state_38691__$1;
(statearr_38717_41564[(1)] = (5));

} else {
var statearr_38718_41566 = state_38691__$1;
(statearr_38718_41566[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38692 === (13))){
var state_38691__$1 = state_38691;
var statearr_38719_41567 = state_38691__$1;
(statearr_38719_41567[(2)] = null);

(statearr_38719_41567[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38692 === (6))){
var inst_38660 = (state_38691[(7)]);
var inst_38667 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_38660) : p.call(null,inst_38660));
var state_38691__$1 = state_38691;
if(cljs.core.truth_(inst_38667)){
var statearr_38720_41571 = state_38691__$1;
(statearr_38720_41571[(1)] = (9));

} else {
var statearr_38721_41572 = state_38691__$1;
(statearr_38721_41572[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38692 === (3))){
var inst_38686 = (state_38691[(2)]);
var state_38691__$1 = state_38691;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38691__$1,inst_38686);
} else {
if((state_val_38692 === (12))){
var state_38691__$1 = state_38691;
var statearr_38724_41574 = state_38691__$1;
(statearr_38724_41574[(2)] = null);

(statearr_38724_41574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38692 === (2))){
var state_38691__$1 = state_38691;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38691__$1,(4),ch);
} else {
if((state_val_38692 === (11))){
var inst_38660 = (state_38691[(7)]);
var inst_38671 = (state_38691[(2)]);
var state_38691__$1 = state_38691;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38691__$1,(8),inst_38671,inst_38660);
} else {
if((state_val_38692 === (9))){
var state_38691__$1 = state_38691;
var statearr_38728_41580 = state_38691__$1;
(statearr_38728_41580[(2)] = tc);

(statearr_38728_41580[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38692 === (5))){
var inst_38664 = cljs.core.async.close_BANG_(tc);
var inst_38665 = cljs.core.async.close_BANG_(fc);
var state_38691__$1 = (function (){var statearr_38729 = state_38691;
(statearr_38729[(8)] = inst_38664);

return statearr_38729;
})();
var statearr_38730_41582 = state_38691__$1;
(statearr_38730_41582[(2)] = inst_38665);

(statearr_38730_41582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38692 === (14))){
var inst_38679 = (state_38691[(2)]);
var state_38691__$1 = state_38691;
var statearr_38731_41586 = state_38691__$1;
(statearr_38731_41586[(2)] = inst_38679);

(statearr_38731_41586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38692 === (10))){
var state_38691__$1 = state_38691;
var statearr_38732_41588 = state_38691__$1;
(statearr_38732_41588[(2)] = fc);

(statearr_38732_41588[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38692 === (8))){
var inst_38673 = (state_38691[(2)]);
var state_38691__$1 = state_38691;
if(cljs.core.truth_(inst_38673)){
var statearr_38733_41589 = state_38691__$1;
(statearr_38733_41589[(1)] = (12));

} else {
var statearr_38734_41590 = state_38691__$1;
(statearr_38734_41590[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37429__auto__ = null;
var cljs$core$async$state_machine__37429__auto____0 = (function (){
var statearr_38735 = [null,null,null,null,null,null,null,null,null];
(statearr_38735[(0)] = cljs$core$async$state_machine__37429__auto__);

(statearr_38735[(1)] = (1));

return statearr_38735;
});
var cljs$core$async$state_machine__37429__auto____1 = (function (state_38691){
while(true){
var ret_value__37430__auto__ = (function (){try{while(true){
var result__37431__auto__ = switch__37428__auto__(state_38691);
if(cljs.core.keyword_identical_QMARK_(result__37431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37431__auto__;
}
break;
}
}catch (e38737){var ex__37432__auto__ = e38737;
var statearr_38738_41607 = state_38691;
(statearr_38738_41607[(2)] = ex__37432__auto__);


if(cljs.core.seq((state_38691[(4)]))){
var statearr_38740_41611 = state_38691;
(statearr_38740_41611[(1)] = cljs.core.first((state_38691[(4)])));

} else {
throw ex__37432__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41612 = state_38691;
state_38691 = G__41612;
continue;
} else {
return ret_value__37430__auto__;
}
break;
}
});
cljs$core$async$state_machine__37429__auto__ = function(state_38691){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37429__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37429__auto____1.call(this,state_38691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37429__auto____0;
cljs$core$async$state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37429__auto____1;
return cljs$core$async$state_machine__37429__auto__;
})()
})();
var state__37677__auto__ = (function (){var statearr_38741 = f__37676__auto__();
(statearr_38741[(6)] = c__37673__auto___41539);

return statearr_38741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37677__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__37673__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37676__auto__ = (function (){var switch__37428__auto__ = (function (state_38772){
var state_val_38773 = (state_38772[(1)]);
if((state_val_38773 === (7))){
var inst_38768 = (state_38772[(2)]);
var state_38772__$1 = state_38772;
var statearr_38777_41615 = state_38772__$1;
(statearr_38777_41615[(2)] = inst_38768);

(statearr_38777_41615[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38773 === (1))){
var inst_38745 = init;
var inst_38747 = inst_38745;
var state_38772__$1 = (function (){var statearr_38782 = state_38772;
(statearr_38782[(7)] = inst_38747);

return statearr_38782;
})();
var statearr_38783_41621 = state_38772__$1;
(statearr_38783_41621[(2)] = null);

(statearr_38783_41621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38773 === (4))){
var inst_38750 = (state_38772[(8)]);
var inst_38750__$1 = (state_38772[(2)]);
var inst_38751 = (inst_38750__$1 == null);
var state_38772__$1 = (function (){var statearr_38787 = state_38772;
(statearr_38787[(8)] = inst_38750__$1);

return statearr_38787;
})();
if(cljs.core.truth_(inst_38751)){
var statearr_38788_41622 = state_38772__$1;
(statearr_38788_41622[(1)] = (5));

} else {
var statearr_38789_41629 = state_38772__$1;
(statearr_38789_41629[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38773 === (6))){
var inst_38754 = (state_38772[(9)]);
var inst_38747 = (state_38772[(7)]);
var inst_38750 = (state_38772[(8)]);
var inst_38754__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_38747,inst_38750) : f.call(null,inst_38747,inst_38750));
var inst_38760 = cljs.core.reduced_QMARK_(inst_38754__$1);
var state_38772__$1 = (function (){var statearr_38791 = state_38772;
(statearr_38791[(9)] = inst_38754__$1);

return statearr_38791;
})();
if(inst_38760){
var statearr_38792_41633 = state_38772__$1;
(statearr_38792_41633[(1)] = (8));

} else {
var statearr_38796_41634 = state_38772__$1;
(statearr_38796_41634[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38773 === (3))){
var inst_38770 = (state_38772[(2)]);
var state_38772__$1 = state_38772;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38772__$1,inst_38770);
} else {
if((state_val_38773 === (2))){
var state_38772__$1 = state_38772;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38772__$1,(4),ch);
} else {
if((state_val_38773 === (9))){
var inst_38754 = (state_38772[(9)]);
var inst_38747 = inst_38754;
var state_38772__$1 = (function (){var statearr_38801 = state_38772;
(statearr_38801[(7)] = inst_38747);

return statearr_38801;
})();
var statearr_38803_41635 = state_38772__$1;
(statearr_38803_41635[(2)] = null);

(statearr_38803_41635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38773 === (5))){
var inst_38747 = (state_38772[(7)]);
var state_38772__$1 = state_38772;
var statearr_38804_41640 = state_38772__$1;
(statearr_38804_41640[(2)] = inst_38747);

(statearr_38804_41640[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38773 === (10))){
var inst_38766 = (state_38772[(2)]);
var state_38772__$1 = state_38772;
var statearr_38805_41641 = state_38772__$1;
(statearr_38805_41641[(2)] = inst_38766);

(statearr_38805_41641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38773 === (8))){
var inst_38754 = (state_38772[(9)]);
var inst_38762 = cljs.core.deref(inst_38754);
var state_38772__$1 = state_38772;
var statearr_38812_41642 = state_38772__$1;
(statearr_38812_41642[(2)] = inst_38762);

(statearr_38812_41642[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__37429__auto__ = null;
var cljs$core$async$reduce_$_state_machine__37429__auto____0 = (function (){
var statearr_38815 = [null,null,null,null,null,null,null,null,null,null];
(statearr_38815[(0)] = cljs$core$async$reduce_$_state_machine__37429__auto__);

(statearr_38815[(1)] = (1));

return statearr_38815;
});
var cljs$core$async$reduce_$_state_machine__37429__auto____1 = (function (state_38772){
while(true){
var ret_value__37430__auto__ = (function (){try{while(true){
var result__37431__auto__ = switch__37428__auto__(state_38772);
if(cljs.core.keyword_identical_QMARK_(result__37431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37431__auto__;
}
break;
}
}catch (e38822){var ex__37432__auto__ = e38822;
var statearr_38823_41643 = state_38772;
(statearr_38823_41643[(2)] = ex__37432__auto__);


if(cljs.core.seq((state_38772[(4)]))){
var statearr_38824_41645 = state_38772;
(statearr_38824_41645[(1)] = cljs.core.first((state_38772[(4)])));

} else {
throw ex__37432__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41646 = state_38772;
state_38772 = G__41646;
continue;
} else {
return ret_value__37430__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__37429__auto__ = function(state_38772){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__37429__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__37429__auto____1.call(this,state_38772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__37429__auto____0;
cljs$core$async$reduce_$_state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__37429__auto____1;
return cljs$core$async$reduce_$_state_machine__37429__auto__;
})()
})();
var state__37677__auto__ = (function (){var statearr_38831 = f__37676__auto__();
(statearr_38831[(6)] = c__37673__auto__);

return statearr_38831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37677__auto__);
}));

return c__37673__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__37673__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37676__auto__ = (function (){var switch__37428__auto__ = (function (state_38845){
var state_val_38847 = (state_38845[(1)]);
if((state_val_38847 === (1))){
var inst_38840 = cljs.core.async.reduce(f__$1,init,ch);
var state_38845__$1 = state_38845;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38845__$1,(2),inst_38840);
} else {
if((state_val_38847 === (2))){
var inst_38842 = (state_38845[(2)]);
var inst_38843 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_38842) : f__$1.call(null,inst_38842));
var state_38845__$1 = state_38845;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38845__$1,inst_38843);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__37429__auto__ = null;
var cljs$core$async$transduce_$_state_machine__37429__auto____0 = (function (){
var statearr_38862 = [null,null,null,null,null,null,null];
(statearr_38862[(0)] = cljs$core$async$transduce_$_state_machine__37429__auto__);

(statearr_38862[(1)] = (1));

return statearr_38862;
});
var cljs$core$async$transduce_$_state_machine__37429__auto____1 = (function (state_38845){
while(true){
var ret_value__37430__auto__ = (function (){try{while(true){
var result__37431__auto__ = switch__37428__auto__(state_38845);
if(cljs.core.keyword_identical_QMARK_(result__37431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37431__auto__;
}
break;
}
}catch (e38864){var ex__37432__auto__ = e38864;
var statearr_38865_41654 = state_38845;
(statearr_38865_41654[(2)] = ex__37432__auto__);


if(cljs.core.seq((state_38845[(4)]))){
var statearr_38866_41655 = state_38845;
(statearr_38866_41655[(1)] = cljs.core.first((state_38845[(4)])));

} else {
throw ex__37432__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41656 = state_38845;
state_38845 = G__41656;
continue;
} else {
return ret_value__37430__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__37429__auto__ = function(state_38845){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__37429__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__37429__auto____1.call(this,state_38845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__37429__auto____0;
cljs$core$async$transduce_$_state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__37429__auto____1;
return cljs$core$async$transduce_$_state_machine__37429__auto__;
})()
})();
var state__37677__auto__ = (function (){var statearr_38873 = f__37676__auto__();
(statearr_38873[(6)] = c__37673__auto__);

return statearr_38873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37677__auto__);
}));

return c__37673__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__38878 = arguments.length;
switch (G__38878) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__37673__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37676__auto__ = (function (){var switch__37428__auto__ = (function (state_38913){
var state_val_38914 = (state_38913[(1)]);
if((state_val_38914 === (7))){
var inst_38894 = (state_38913[(2)]);
var state_38913__$1 = state_38913;
var statearr_38918_41663 = state_38913__$1;
(statearr_38918_41663[(2)] = inst_38894);

(statearr_38918_41663[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38914 === (1))){
var inst_38887 = cljs.core.seq(coll);
var inst_38888 = inst_38887;
var state_38913__$1 = (function (){var statearr_38920 = state_38913;
(statearr_38920[(7)] = inst_38888);

return statearr_38920;
})();
var statearr_38921_41664 = state_38913__$1;
(statearr_38921_41664[(2)] = null);

(statearr_38921_41664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38914 === (4))){
var inst_38888 = (state_38913[(7)]);
var inst_38892 = cljs.core.first(inst_38888);
var state_38913__$1 = state_38913;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38913__$1,(7),ch,inst_38892);
} else {
if((state_val_38914 === (13))){
var inst_38907 = (state_38913[(2)]);
var state_38913__$1 = state_38913;
var statearr_38923_41666 = state_38913__$1;
(statearr_38923_41666[(2)] = inst_38907);

(statearr_38923_41666[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38914 === (6))){
var inst_38897 = (state_38913[(2)]);
var state_38913__$1 = state_38913;
if(cljs.core.truth_(inst_38897)){
var statearr_38924_41668 = state_38913__$1;
(statearr_38924_41668[(1)] = (8));

} else {
var statearr_38925_41669 = state_38913__$1;
(statearr_38925_41669[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38914 === (3))){
var inst_38911 = (state_38913[(2)]);
var state_38913__$1 = state_38913;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38913__$1,inst_38911);
} else {
if((state_val_38914 === (12))){
var state_38913__$1 = state_38913;
var statearr_38927_41670 = state_38913__$1;
(statearr_38927_41670[(2)] = null);

(statearr_38927_41670[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38914 === (2))){
var inst_38888 = (state_38913[(7)]);
var state_38913__$1 = state_38913;
if(cljs.core.truth_(inst_38888)){
var statearr_38929_41672 = state_38913__$1;
(statearr_38929_41672[(1)] = (4));

} else {
var statearr_38930_41673 = state_38913__$1;
(statearr_38930_41673[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38914 === (11))){
var inst_38904 = cljs.core.async.close_BANG_(ch);
var state_38913__$1 = state_38913;
var statearr_38931_41675 = state_38913__$1;
(statearr_38931_41675[(2)] = inst_38904);

(statearr_38931_41675[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38914 === (9))){
var state_38913__$1 = state_38913;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38933_41676 = state_38913__$1;
(statearr_38933_41676[(1)] = (11));

} else {
var statearr_38935_41677 = state_38913__$1;
(statearr_38935_41677[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38914 === (5))){
var inst_38888 = (state_38913[(7)]);
var state_38913__$1 = state_38913;
var statearr_38936_41679 = state_38913__$1;
(statearr_38936_41679[(2)] = inst_38888);

(statearr_38936_41679[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38914 === (10))){
var inst_38909 = (state_38913[(2)]);
var state_38913__$1 = state_38913;
var statearr_38938_41684 = state_38913__$1;
(statearr_38938_41684[(2)] = inst_38909);

(statearr_38938_41684[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38914 === (8))){
var inst_38888 = (state_38913[(7)]);
var inst_38899 = cljs.core.next(inst_38888);
var inst_38888__$1 = inst_38899;
var state_38913__$1 = (function (){var statearr_38941 = state_38913;
(statearr_38941[(7)] = inst_38888__$1);

return statearr_38941;
})();
var statearr_38943_41692 = state_38913__$1;
(statearr_38943_41692[(2)] = null);

(statearr_38943_41692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37429__auto__ = null;
var cljs$core$async$state_machine__37429__auto____0 = (function (){
var statearr_38945 = [null,null,null,null,null,null,null,null];
(statearr_38945[(0)] = cljs$core$async$state_machine__37429__auto__);

(statearr_38945[(1)] = (1));

return statearr_38945;
});
var cljs$core$async$state_machine__37429__auto____1 = (function (state_38913){
while(true){
var ret_value__37430__auto__ = (function (){try{while(true){
var result__37431__auto__ = switch__37428__auto__(state_38913);
if(cljs.core.keyword_identical_QMARK_(result__37431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37431__auto__;
}
break;
}
}catch (e38946){var ex__37432__auto__ = e38946;
var statearr_38947_41695 = state_38913;
(statearr_38947_41695[(2)] = ex__37432__auto__);


if(cljs.core.seq((state_38913[(4)]))){
var statearr_38948_41696 = state_38913;
(statearr_38948_41696[(1)] = cljs.core.first((state_38913[(4)])));

} else {
throw ex__37432__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41700 = state_38913;
state_38913 = G__41700;
continue;
} else {
return ret_value__37430__auto__;
}
break;
}
});
cljs$core$async$state_machine__37429__auto__ = function(state_38913){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37429__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37429__auto____1.call(this,state_38913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37429__auto____0;
cljs$core$async$state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37429__auto____1;
return cljs$core$async$state_machine__37429__auto__;
})()
})();
var state__37677__auto__ = (function (){var statearr_38950 = f__37676__auto__();
(statearr_38950[(6)] = c__37673__auto__);

return statearr_38950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37677__auto__);
}));

return c__37673__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__38954 = arguments.length;
switch (G__38954) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_41720 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_41720(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_41727 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_41727(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_41735 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_41735(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_41737 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_41737(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38980 = (function (ch,cs,meta38981){
this.ch = ch;
this.cs = cs;
this.meta38981 = meta38981;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38980.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38982,meta38981__$1){
var self__ = this;
var _38982__$1 = this;
return (new cljs.core.async.t_cljs$core$async38980(self__.ch,self__.cs,meta38981__$1));
}));

(cljs.core.async.t_cljs$core$async38980.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38982){
var self__ = this;
var _38982__$1 = this;
return self__.meta38981;
}));

(cljs.core.async.t_cljs$core$async38980.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38980.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async38980.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38980.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async38980.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async38980.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async38980.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta38981","meta38981",-50287578,null)], null);
}));

(cljs.core.async.t_cljs$core$async38980.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38980.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38980");

(cljs.core.async.t_cljs$core$async38980.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async38980");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38980.
 */
cljs.core.async.__GT_t_cljs$core$async38980 = (function cljs$core$async$__GT_t_cljs$core$async38980(ch,cs,meta38981){
return (new cljs.core.async.t_cljs$core$async38980(ch,cs,meta38981));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async38980(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__37673__auto___41761 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37676__auto__ = (function (){var switch__37428__auto__ = (function (state_39135){
var state_val_39136 = (state_39135[(1)]);
if((state_val_39136 === (7))){
var inst_39131 = (state_39135[(2)]);
var state_39135__$1 = state_39135;
var statearr_39141_41764 = state_39135__$1;
(statearr_39141_41764[(2)] = inst_39131);

(statearr_39141_41764[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39136 === (20))){
var inst_39034 = (state_39135[(7)]);
var inst_39046 = cljs.core.first(inst_39034);
var inst_39047 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39046,(0),null);
var inst_39048 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39046,(1),null);
var state_39135__$1 = (function (){var statearr_39142 = state_39135;
(statearr_39142[(8)] = inst_39047);

return statearr_39142;
})();
if(cljs.core.truth_(inst_39048)){
var statearr_39143_41766 = state_39135__$1;
(statearr_39143_41766[(1)] = (22));

} else {
var statearr_39145_41767 = state_39135__$1;
(statearr_39145_41767[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39136 === (27))){
var inst_38994 = (state_39135[(9)]);
var inst_39078 = (state_39135[(10)]);
var inst_39076 = (state_39135[(11)]);
var inst_39084 = (state_39135[(12)]);
var inst_39084__$1 = cljs.core._nth(inst_39076,inst_39078);
var inst_39085 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_39084__$1,inst_38994,done);
var state_39135__$1 = (function (){var statearr_39147 = state_39135;
(statearr_39147[(12)] = inst_39084__$1);

return statearr_39147;
})();
if(cljs.core.truth_(inst_39085)){
var statearr_39148_41778 = state_39135__$1;
(statearr_39148_41778[(1)] = (30));

} else {
var statearr_39149_41779 = state_39135__$1;
(statearr_39149_41779[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39136 === (1))){
var state_39135__$1 = state_39135;
var statearr_39151_41787 = state_39135__$1;
(statearr_39151_41787[(2)] = null);

(statearr_39151_41787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39136 === (24))){
var inst_39034 = (state_39135[(7)]);
var inst_39053 = (state_39135[(2)]);
var inst_39054 = cljs.core.next(inst_39034);
var inst_39010 = inst_39054;
var inst_39011 = null;
var inst_39012 = (0);
var inst_39013 = (0);
var state_39135__$1 = (function (){var statearr_39154 = state_39135;
(statearr_39154[(13)] = inst_39013);

(statearr_39154[(14)] = inst_39010);

(statearr_39154[(15)] = inst_39012);

(statearr_39154[(16)] = inst_39053);

(statearr_39154[(17)] = inst_39011);

return statearr_39154;
})();
var statearr_39157_41800 = state_39135__$1;
(statearr_39157_41800[(2)] = null);

(statearr_39157_41800[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39136 === (39))){
var state_39135__$1 = state_39135;
var statearr_39161_41801 = state_39135__$1;
(statearr_39161_41801[(2)] = null);

(statearr_39161_41801[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39136 === (4))){
var inst_38994 = (state_39135[(9)]);
var inst_38994__$1 = (state_39135[(2)]);
var inst_38995 = (inst_38994__$1 == null);
var state_39135__$1 = (function (){var statearr_39163 = state_39135;
(statearr_39163[(9)] = inst_38994__$1);

return statearr_39163;
})();
if(cljs.core.truth_(inst_38995)){
var statearr_39164_41802 = state_39135__$1;
(statearr_39164_41802[(1)] = (5));

} else {
var statearr_39165_41803 = state_39135__$1;
(statearr_39165_41803[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39136 === (15))){
var inst_39013 = (state_39135[(13)]);
var inst_39010 = (state_39135[(14)]);
var inst_39012 = (state_39135[(15)]);
var inst_39011 = (state_39135[(17)]);
var inst_39030 = (state_39135[(2)]);
var inst_39031 = (inst_39013 + (1));
var tmp39158 = inst_39010;
var tmp39159 = inst_39012;
var tmp39160 = inst_39011;
var inst_39010__$1 = tmp39158;
var inst_39011__$1 = tmp39160;
var inst_39012__$1 = tmp39159;
var inst_39013__$1 = inst_39031;
var state_39135__$1 = (function (){var statearr_39170 = state_39135;
(statearr_39170[(13)] = inst_39013__$1);

(statearr_39170[(14)] = inst_39010__$1);

(statearr_39170[(18)] = inst_39030);

(statearr_39170[(15)] = inst_39012__$1);

(statearr_39170[(17)] = inst_39011__$1);

return statearr_39170;
})();
var statearr_39171_41805 = state_39135__$1;
(statearr_39171_41805[(2)] = null);

(statearr_39171_41805[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39136 === (21))){
var inst_39057 = (state_39135[(2)]);
var state_39135__$1 = state_39135;
var statearr_39175_41806 = state_39135__$1;
(statearr_39175_41806[(2)] = inst_39057);

(statearr_39175_41806[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39136 === (31))){
var inst_39084 = (state_39135[(12)]);
var inst_39088 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_39084);
var state_39135__$1 = state_39135;
var statearr_39176_41807 = state_39135__$1;
(statearr_39176_41807[(2)] = inst_39088);

(statearr_39176_41807[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39136 === (32))){
var inst_39075 = (state_39135[(19)]);
var inst_39078 = (state_39135[(10)]);
var inst_39076 = (state_39135[(11)]);
var inst_39077 = (state_39135[(20)]);
var inst_39090 = (state_39135[(2)]);
var inst_39091 = (inst_39078 + (1));
var tmp39172 = inst_39075;
var tmp39173 = inst_39076;
var tmp39174 = inst_39077;
var inst_39075__$1 = tmp39172;
var inst_39076__$1 = tmp39173;
var inst_39077__$1 = tmp39174;
var inst_39078__$1 = inst_39091;
var state_39135__$1 = (function (){var statearr_39177 = state_39135;
(statearr_39177[(19)] = inst_39075__$1);

(statearr_39177[(21)] = inst_39090);

(statearr_39177[(10)] = inst_39078__$1);

(statearr_39177[(11)] = inst_39076__$1);

(statearr_39177[(20)] = inst_39077__$1);

return statearr_39177;
})();
var statearr_39179_41815 = state_39135__$1;
(statearr_39179_41815[(2)] = null);

(statearr_39179_41815[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39136 === (40))){
var inst_39103 = (state_39135[(22)]);
var inst_39107 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_39103);
var state_39135__$1 = state_39135;
var statearr_39180_41816 = state_39135__$1;
(statearr_39180_41816[(2)] = inst_39107);

(statearr_39180_41816[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39136 === (33))){
var inst_39094 = (state_39135[(23)]);
var inst_39096 = cljs.core.chunked_seq_QMARK_(inst_39094);
var state_39135__$1 = state_39135;
if(inst_39096){
var statearr_39181_41818 = state_39135__$1;
(statearr_39181_41818[(1)] = (36));

} else {
var statearr_39182_41825 = state_39135__$1;
(statearr_39182_41825[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39136 === (13))){
var inst_39024 = (state_39135[(24)]);
var inst_39027 = cljs.core.async.close_BANG_(inst_39024);
var state_39135__$1 = state_39135;
var statearr_39187_41826 = state_39135__$1;
(statearr_39187_41826[(2)] = inst_39027);

(statearr_39187_41826[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39136 === (22))){
var inst_39047 = (state_39135[(8)]);
var inst_39050 = cljs.core.async.close_BANG_(inst_39047);
var state_39135__$1 = state_39135;
var statearr_39188_41827 = state_39135__$1;
(statearr_39188_41827[(2)] = inst_39050);

(statearr_39188_41827[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39136 === (36))){
var inst_39094 = (state_39135[(23)]);
var inst_39098 = cljs.core.chunk_first(inst_39094);
var inst_39099 = cljs.core.chunk_rest(inst_39094);
var inst_39100 = cljs.core.count(inst_39098);
var inst_39075 = inst_39099;
var inst_39076 = inst_39098;
var inst_39077 = inst_39100;
var inst_39078 = (0);
var state_39135__$1 = (function (){var statearr_39191 = state_39135;
(statearr_39191[(19)] = inst_39075);

(statearr_39191[(10)] = inst_39078);

(statearr_39191[(11)] = inst_39076);

(statearr_39191[(20)] = inst_39077);

return statearr_39191;
})();
var statearr_39192_41828 = state_39135__$1;
(statearr_39192_41828[(2)] = null);

(statearr_39192_41828[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39136 === (41))){
var inst_39094 = (state_39135[(23)]);
var inst_39109 = (state_39135[(2)]);
var inst_39110 = cljs.core.next(inst_39094);
var inst_39075 = inst_39110;
var inst_39076 = null;
var inst_39077 = (0);
var inst_39078 = (0);
var state_39135__$1 = (function (){var statearr_39196 = state_39135;
(statearr_39196[(19)] = inst_39075);

(statearr_39196[(25)] = inst_39109);

(statearr_39196[(10)] = inst_39078);

(statearr_39196[(11)] = inst_39076);

(statearr_39196[(20)] = inst_39077);

return statearr_39196;
})();
var statearr_39197_41831 = state_39135__$1;
(statearr_39197_41831[(2)] = null);

(statearr_39197_41831[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39136 === (43))){
var state_39135__$1 = state_39135;
var statearr_39198_41832 = state_39135__$1;
(statearr_39198_41832[(2)] = null);

(statearr_39198_41832[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39136 === (29))){
var inst_39119 = (state_39135[(2)]);
var state_39135__$1 = state_39135;
var statearr_39200_41835 = state_39135__$1;
(statearr_39200_41835[(2)] = inst_39119);

(statearr_39200_41835[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39136 === (44))){
var inst_39128 = (state_39135[(2)]);
var state_39135__$1 = (function (){var statearr_39201 = state_39135;
(statearr_39201[(26)] = inst_39128);

return statearr_39201;
})();
var statearr_39202_41836 = state_39135__$1;
(statearr_39202_41836[(2)] = null);

(statearr_39202_41836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39136 === (6))){
var inst_39067 = (state_39135[(27)]);
var inst_39066 = cljs.core.deref(cs);
var inst_39067__$1 = cljs.core.keys(inst_39066);
var inst_39068 = cljs.core.count(inst_39067__$1);
var inst_39069 = cljs.core.reset_BANG_(dctr,inst_39068);
var inst_39074 = cljs.core.seq(inst_39067__$1);
var inst_39075 = inst_39074;
var inst_39076 = null;
var inst_39077 = (0);
var inst_39078 = (0);
var state_39135__$1 = (function (){var statearr_39208 = state_39135;
(statearr_39208[(28)] = inst_39069);

(statearr_39208[(19)] = inst_39075);

(statearr_39208[(27)] = inst_39067__$1);

(statearr_39208[(10)] = inst_39078);

(statearr_39208[(11)] = inst_39076);

(statearr_39208[(20)] = inst_39077);

return statearr_39208;
})();
var statearr_39210_41837 = state_39135__$1;
(statearr_39210_41837[(2)] = null);

(statearr_39210_41837[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39136 === (28))){
var inst_39075 = (state_39135[(19)]);
var inst_39094 = (state_39135[(23)]);
var inst_39094__$1 = cljs.core.seq(inst_39075);
var state_39135__$1 = (function (){var statearr_39213 = state_39135;
(statearr_39213[(23)] = inst_39094__$1);

return statearr_39213;
})();
if(inst_39094__$1){
var statearr_39214_41845 = state_39135__$1;
(statearr_39214_41845[(1)] = (33));

} else {
var statearr_39215_41846 = state_39135__$1;
(statearr_39215_41846[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39136 === (25))){
var inst_39078 = (state_39135[(10)]);
var inst_39077 = (state_39135[(20)]);
var inst_39081 = (inst_39078 < inst_39077);
var inst_39082 = inst_39081;
var state_39135__$1 = state_39135;
if(cljs.core.truth_(inst_39082)){
var statearr_39216_41848 = state_39135__$1;
(statearr_39216_41848[(1)] = (27));

} else {
var statearr_39217_41849 = state_39135__$1;
(statearr_39217_41849[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39136 === (34))){
var state_39135__$1 = state_39135;
var statearr_39221_41850 = state_39135__$1;
(statearr_39221_41850[(2)] = null);

(statearr_39221_41850[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39136 === (17))){
var state_39135__$1 = state_39135;
var statearr_39224_41854 = state_39135__$1;
(statearr_39224_41854[(2)] = null);

(statearr_39224_41854[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39136 === (3))){
var inst_39133 = (state_39135[(2)]);
var state_39135__$1 = state_39135;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39135__$1,inst_39133);
} else {
if((state_val_39136 === (12))){
var inst_39062 = (state_39135[(2)]);
var state_39135__$1 = state_39135;
var statearr_39229_41855 = state_39135__$1;
(statearr_39229_41855[(2)] = inst_39062);

(statearr_39229_41855[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39136 === (2))){
var state_39135__$1 = state_39135;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39135__$1,(4),ch);
} else {
if((state_val_39136 === (23))){
var state_39135__$1 = state_39135;
var statearr_39231_41856 = state_39135__$1;
(statearr_39231_41856[(2)] = null);

(statearr_39231_41856[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39136 === (35))){
var inst_39117 = (state_39135[(2)]);
var state_39135__$1 = state_39135;
var statearr_39233_41857 = state_39135__$1;
(statearr_39233_41857[(2)] = inst_39117);

(statearr_39233_41857[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39136 === (19))){
var inst_39034 = (state_39135[(7)]);
var inst_39038 = cljs.core.chunk_first(inst_39034);
var inst_39039 = cljs.core.chunk_rest(inst_39034);
var inst_39040 = cljs.core.count(inst_39038);
var inst_39010 = inst_39039;
var inst_39011 = inst_39038;
var inst_39012 = inst_39040;
var inst_39013 = (0);
var state_39135__$1 = (function (){var statearr_39234 = state_39135;
(statearr_39234[(13)] = inst_39013);

(statearr_39234[(14)] = inst_39010);

(statearr_39234[(15)] = inst_39012);

(statearr_39234[(17)] = inst_39011);

return statearr_39234;
})();
var statearr_39235_41861 = state_39135__$1;
(statearr_39235_41861[(2)] = null);

(statearr_39235_41861[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39136 === (11))){
var inst_39034 = (state_39135[(7)]);
var inst_39010 = (state_39135[(14)]);
var inst_39034__$1 = cljs.core.seq(inst_39010);
var state_39135__$1 = (function (){var statearr_39237 = state_39135;
(statearr_39237[(7)] = inst_39034__$1);

return statearr_39237;
})();
if(inst_39034__$1){
var statearr_39238_41862 = state_39135__$1;
(statearr_39238_41862[(1)] = (16));

} else {
var statearr_39239_41863 = state_39135__$1;
(statearr_39239_41863[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39136 === (9))){
var inst_39064 = (state_39135[(2)]);
var state_39135__$1 = state_39135;
var statearr_39240_41864 = state_39135__$1;
(statearr_39240_41864[(2)] = inst_39064);

(statearr_39240_41864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39136 === (5))){
var inst_39004 = cljs.core.deref(cs);
var inst_39005 = cljs.core.seq(inst_39004);
var inst_39010 = inst_39005;
var inst_39011 = null;
var inst_39012 = (0);
var inst_39013 = (0);
var state_39135__$1 = (function (){var statearr_39241 = state_39135;
(statearr_39241[(13)] = inst_39013);

(statearr_39241[(14)] = inst_39010);

(statearr_39241[(15)] = inst_39012);

(statearr_39241[(17)] = inst_39011);

return statearr_39241;
})();
var statearr_39242_41865 = state_39135__$1;
(statearr_39242_41865[(2)] = null);

(statearr_39242_41865[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39136 === (14))){
var state_39135__$1 = state_39135;
var statearr_39243_41876 = state_39135__$1;
(statearr_39243_41876[(2)] = null);

(statearr_39243_41876[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39136 === (45))){
var inst_39125 = (state_39135[(2)]);
var state_39135__$1 = state_39135;
var statearr_39245_41877 = state_39135__$1;
(statearr_39245_41877[(2)] = inst_39125);

(statearr_39245_41877[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39136 === (26))){
var inst_39067 = (state_39135[(27)]);
var inst_39121 = (state_39135[(2)]);
var inst_39122 = cljs.core.seq(inst_39067);
var state_39135__$1 = (function (){var statearr_39246 = state_39135;
(statearr_39246[(29)] = inst_39121);

return statearr_39246;
})();
if(inst_39122){
var statearr_39247_41878 = state_39135__$1;
(statearr_39247_41878[(1)] = (42));

} else {
var statearr_39248_41879 = state_39135__$1;
(statearr_39248_41879[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39136 === (16))){
var inst_39034 = (state_39135[(7)]);
var inst_39036 = cljs.core.chunked_seq_QMARK_(inst_39034);
var state_39135__$1 = state_39135;
if(inst_39036){
var statearr_39250_41883 = state_39135__$1;
(statearr_39250_41883[(1)] = (19));

} else {
var statearr_39251_41884 = state_39135__$1;
(statearr_39251_41884[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39136 === (38))){
var inst_39114 = (state_39135[(2)]);
var state_39135__$1 = state_39135;
var statearr_39252_41886 = state_39135__$1;
(statearr_39252_41886[(2)] = inst_39114);

(statearr_39252_41886[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39136 === (30))){
var state_39135__$1 = state_39135;
var statearr_39254_41887 = state_39135__$1;
(statearr_39254_41887[(2)] = null);

(statearr_39254_41887[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39136 === (10))){
var inst_39013 = (state_39135[(13)]);
var inst_39011 = (state_39135[(17)]);
var inst_39023 = cljs.core._nth(inst_39011,inst_39013);
var inst_39024 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39023,(0),null);
var inst_39025 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39023,(1),null);
var state_39135__$1 = (function (){var statearr_39257 = state_39135;
(statearr_39257[(24)] = inst_39024);

return statearr_39257;
})();
if(cljs.core.truth_(inst_39025)){
var statearr_39259_41888 = state_39135__$1;
(statearr_39259_41888[(1)] = (13));

} else {
var statearr_39260_41889 = state_39135__$1;
(statearr_39260_41889[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39136 === (18))){
var inst_39060 = (state_39135[(2)]);
var state_39135__$1 = state_39135;
var statearr_39261_41891 = state_39135__$1;
(statearr_39261_41891[(2)] = inst_39060);

(statearr_39261_41891[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39136 === (42))){
var state_39135__$1 = state_39135;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39135__$1,(45),dchan);
} else {
if((state_val_39136 === (37))){
var inst_39094 = (state_39135[(23)]);
var inst_38994 = (state_39135[(9)]);
var inst_39103 = (state_39135[(22)]);
var inst_39103__$1 = cljs.core.first(inst_39094);
var inst_39104 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_39103__$1,inst_38994,done);
var state_39135__$1 = (function (){var statearr_39269 = state_39135;
(statearr_39269[(22)] = inst_39103__$1);

return statearr_39269;
})();
if(cljs.core.truth_(inst_39104)){
var statearr_39270_41904 = state_39135__$1;
(statearr_39270_41904[(1)] = (39));

} else {
var statearr_39271_41905 = state_39135__$1;
(statearr_39271_41905[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39136 === (8))){
var inst_39013 = (state_39135[(13)]);
var inst_39012 = (state_39135[(15)]);
var inst_39015 = (inst_39013 < inst_39012);
var inst_39016 = inst_39015;
var state_39135__$1 = state_39135;
if(cljs.core.truth_(inst_39016)){
var statearr_39272_41906 = state_39135__$1;
(statearr_39272_41906[(1)] = (10));

} else {
var statearr_39273_41907 = state_39135__$1;
(statearr_39273_41907[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__37429__auto__ = null;
var cljs$core$async$mult_$_state_machine__37429__auto____0 = (function (){
var statearr_39275 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39275[(0)] = cljs$core$async$mult_$_state_machine__37429__auto__);

(statearr_39275[(1)] = (1));

return statearr_39275;
});
var cljs$core$async$mult_$_state_machine__37429__auto____1 = (function (state_39135){
while(true){
var ret_value__37430__auto__ = (function (){try{while(true){
var result__37431__auto__ = switch__37428__auto__(state_39135);
if(cljs.core.keyword_identical_QMARK_(result__37431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37431__auto__;
}
break;
}
}catch (e39276){var ex__37432__auto__ = e39276;
var statearr_39277_41913 = state_39135;
(statearr_39277_41913[(2)] = ex__37432__auto__);


if(cljs.core.seq((state_39135[(4)]))){
var statearr_39278_41914 = state_39135;
(statearr_39278_41914[(1)] = cljs.core.first((state_39135[(4)])));

} else {
throw ex__37432__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41915 = state_39135;
state_39135 = G__41915;
continue;
} else {
return ret_value__37430__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__37429__auto__ = function(state_39135){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__37429__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__37429__auto____1.call(this,state_39135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__37429__auto____0;
cljs$core$async$mult_$_state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__37429__auto____1;
return cljs$core$async$mult_$_state_machine__37429__auto__;
})()
})();
var state__37677__auto__ = (function (){var statearr_39279 = f__37676__auto__();
(statearr_39279[(6)] = c__37673__auto___41761);

return statearr_39279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37677__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__39284 = arguments.length;
switch (G__39284) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_41925 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_41925(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_41936 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_41936(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_41940 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_41940(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_41954 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_41954(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_41965 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_41965(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___41969 = arguments.length;
var i__5770__auto___41970 = (0);
while(true){
if((i__5770__auto___41970 < len__5769__auto___41969)){
args__5775__auto__.push((arguments[i__5770__auto___41970]));

var G__41971 = (i__5770__auto___41970 + (1));
i__5770__auto___41970 = G__41971;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__39323){
var map__39324 = p__39323;
var map__39324__$1 = cljs.core.__destructure_map(map__39324);
var opts = map__39324__$1;
var statearr_39325_41977 = state;
(statearr_39325_41977[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_39326_41978 = state;
(statearr_39326_41978[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_39327_41979 = state;
(statearr_39327_41979[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq39313){
var G__39314 = cljs.core.first(seq39313);
var seq39313__$1 = cljs.core.next(seq39313);
var G__39315 = cljs.core.first(seq39313__$1);
var seq39313__$2 = cljs.core.next(seq39313__$1);
var G__39316 = cljs.core.first(seq39313__$2);
var seq39313__$3 = cljs.core.next(seq39313__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39314,G__39315,G__39316,seq39313__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39343 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta39344){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta39344 = meta39344;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39343.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39345,meta39344__$1){
var self__ = this;
var _39345__$1 = this;
return (new cljs.core.async.t_cljs$core$async39343(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta39344__$1));
}));

(cljs.core.async.t_cljs$core$async39343.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39345){
var self__ = this;
var _39345__$1 = this;
return self__.meta39344;
}));

(cljs.core.async.t_cljs$core$async39343.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39343.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async39343.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39343.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async39343.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async39343.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async39343.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async39343.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async39343.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta39344","meta39344",318278724,null)], null);
}));

(cljs.core.async.t_cljs$core$async39343.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39343.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39343");

(cljs.core.async.t_cljs$core$async39343.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async39343");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39343.
 */
cljs.core.async.__GT_t_cljs$core$async39343 = (function cljs$core$async$__GT_t_cljs$core$async39343(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta39344){
return (new cljs.core.async.t_cljs$core$async39343(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta39344));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async39343(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__37673__auto___42007 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37676__auto__ = (function (){var switch__37428__auto__ = (function (state_39434){
var state_val_39435 = (state_39434[(1)]);
if((state_val_39435 === (7))){
var inst_39390 = (state_39434[(2)]);
var state_39434__$1 = state_39434;
if(cljs.core.truth_(inst_39390)){
var statearr_39436_42008 = state_39434__$1;
(statearr_39436_42008[(1)] = (8));

} else {
var statearr_39437_42009 = state_39434__$1;
(statearr_39437_42009[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39435 === (20))){
var inst_39381 = (state_39434[(7)]);
var state_39434__$1 = state_39434;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39434__$1,(23),out,inst_39381);
} else {
if((state_val_39435 === (1))){
var inst_39362 = calc_state();
var inst_39363 = cljs.core.__destructure_map(inst_39362);
var inst_39365 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39363,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_39366 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39363,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_39367 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39363,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_39368 = inst_39362;
var state_39434__$1 = (function (){var statearr_39441 = state_39434;
(statearr_39441[(8)] = inst_39366);

(statearr_39441[(9)] = inst_39367);

(statearr_39441[(10)] = inst_39368);

(statearr_39441[(11)] = inst_39365);

return statearr_39441;
})();
var statearr_39445_42010 = state_39434__$1;
(statearr_39445_42010[(2)] = null);

(statearr_39445_42010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39435 === (24))){
var inst_39372 = (state_39434[(12)]);
var inst_39368 = inst_39372;
var state_39434__$1 = (function (){var statearr_39446 = state_39434;
(statearr_39446[(10)] = inst_39368);

return statearr_39446;
})();
var statearr_39448_42011 = state_39434__$1;
(statearr_39448_42011[(2)] = null);

(statearr_39448_42011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39435 === (4))){
var inst_39381 = (state_39434[(7)]);
var inst_39385 = (state_39434[(13)]);
var inst_39380 = (state_39434[(2)]);
var inst_39381__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39380,(0),null);
var inst_39383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39380,(1),null);
var inst_39385__$1 = (inst_39381__$1 == null);
var state_39434__$1 = (function (){var statearr_39450 = state_39434;
(statearr_39450[(14)] = inst_39383);

(statearr_39450[(7)] = inst_39381__$1);

(statearr_39450[(13)] = inst_39385__$1);

return statearr_39450;
})();
if(cljs.core.truth_(inst_39385__$1)){
var statearr_39451_42018 = state_39434__$1;
(statearr_39451_42018[(1)] = (5));

} else {
var statearr_39453_42019 = state_39434__$1;
(statearr_39453_42019[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39435 === (15))){
var inst_39373 = (state_39434[(15)]);
var inst_39408 = (state_39434[(16)]);
var inst_39408__$1 = cljs.core.empty_QMARK_(inst_39373);
var state_39434__$1 = (function (){var statearr_39454 = state_39434;
(statearr_39454[(16)] = inst_39408__$1);

return statearr_39454;
})();
if(inst_39408__$1){
var statearr_39455_42020 = state_39434__$1;
(statearr_39455_42020[(1)] = (17));

} else {
var statearr_39456_42021 = state_39434__$1;
(statearr_39456_42021[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39435 === (21))){
var inst_39372 = (state_39434[(12)]);
var inst_39368 = inst_39372;
var state_39434__$1 = (function (){var statearr_39457 = state_39434;
(statearr_39457[(10)] = inst_39368);

return statearr_39457;
})();
var statearr_39458_42022 = state_39434__$1;
(statearr_39458_42022[(2)] = null);

(statearr_39458_42022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39435 === (13))){
var inst_39399 = (state_39434[(2)]);
var inst_39400 = calc_state();
var inst_39368 = inst_39400;
var state_39434__$1 = (function (){var statearr_39459 = state_39434;
(statearr_39459[(17)] = inst_39399);

(statearr_39459[(10)] = inst_39368);

return statearr_39459;
})();
var statearr_39460_42023 = state_39434__$1;
(statearr_39460_42023[(2)] = null);

(statearr_39460_42023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39435 === (22))){
var inst_39428 = (state_39434[(2)]);
var state_39434__$1 = state_39434;
var statearr_39461_42024 = state_39434__$1;
(statearr_39461_42024[(2)] = inst_39428);

(statearr_39461_42024[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39435 === (6))){
var inst_39383 = (state_39434[(14)]);
var inst_39388 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_39383,change);
var state_39434__$1 = state_39434;
var statearr_39464_42027 = state_39434__$1;
(statearr_39464_42027[(2)] = inst_39388);

(statearr_39464_42027[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39435 === (25))){
var state_39434__$1 = state_39434;
var statearr_39465_42032 = state_39434__$1;
(statearr_39465_42032[(2)] = null);

(statearr_39465_42032[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39435 === (17))){
var inst_39374 = (state_39434[(18)]);
var inst_39383 = (state_39434[(14)]);
var inst_39410 = (inst_39374.cljs$core$IFn$_invoke$arity$1 ? inst_39374.cljs$core$IFn$_invoke$arity$1(inst_39383) : inst_39374.call(null,inst_39383));
var inst_39411 = cljs.core.not(inst_39410);
var state_39434__$1 = state_39434;
var statearr_39470_42036 = state_39434__$1;
(statearr_39470_42036[(2)] = inst_39411);

(statearr_39470_42036[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39435 === (3))){
var inst_39432 = (state_39434[(2)]);
var state_39434__$1 = state_39434;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39434__$1,inst_39432);
} else {
if((state_val_39435 === (12))){
var state_39434__$1 = state_39434;
var statearr_39480_42040 = state_39434__$1;
(statearr_39480_42040[(2)] = null);

(statearr_39480_42040[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39435 === (2))){
var inst_39372 = (state_39434[(12)]);
var inst_39368 = (state_39434[(10)]);
var inst_39372__$1 = cljs.core.__destructure_map(inst_39368);
var inst_39373 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39372__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_39374 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39372__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_39375 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39372__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_39434__$1 = (function (){var statearr_39489 = state_39434;
(statearr_39489[(12)] = inst_39372__$1);

(statearr_39489[(18)] = inst_39374);

(statearr_39489[(15)] = inst_39373);

return statearr_39489;
})();
return cljs.core.async.ioc_alts_BANG_(state_39434__$1,(4),inst_39375);
} else {
if((state_val_39435 === (23))){
var inst_39419 = (state_39434[(2)]);
var state_39434__$1 = state_39434;
if(cljs.core.truth_(inst_39419)){
var statearr_39490_42042 = state_39434__$1;
(statearr_39490_42042[(1)] = (24));

} else {
var statearr_39491_42043 = state_39434__$1;
(statearr_39491_42043[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39435 === (19))){
var inst_39414 = (state_39434[(2)]);
var state_39434__$1 = state_39434;
var statearr_39493_42044 = state_39434__$1;
(statearr_39493_42044[(2)] = inst_39414);

(statearr_39493_42044[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39435 === (11))){
var inst_39383 = (state_39434[(14)]);
var inst_39396 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_39383);
var state_39434__$1 = state_39434;
var statearr_39495_42045 = state_39434__$1;
(statearr_39495_42045[(2)] = inst_39396);

(statearr_39495_42045[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39435 === (9))){
var inst_39383 = (state_39434[(14)]);
var inst_39373 = (state_39434[(15)]);
var inst_39404 = (state_39434[(19)]);
var inst_39404__$1 = (inst_39373.cljs$core$IFn$_invoke$arity$1 ? inst_39373.cljs$core$IFn$_invoke$arity$1(inst_39383) : inst_39373.call(null,inst_39383));
var state_39434__$1 = (function (){var statearr_39496 = state_39434;
(statearr_39496[(19)] = inst_39404__$1);

return statearr_39496;
})();
if(cljs.core.truth_(inst_39404__$1)){
var statearr_39502_42046 = state_39434__$1;
(statearr_39502_42046[(1)] = (14));

} else {
var statearr_39508_42047 = state_39434__$1;
(statearr_39508_42047[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39435 === (5))){
var inst_39385 = (state_39434[(13)]);
var state_39434__$1 = state_39434;
var statearr_39509_42048 = state_39434__$1;
(statearr_39509_42048[(2)] = inst_39385);

(statearr_39509_42048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39435 === (14))){
var inst_39404 = (state_39434[(19)]);
var state_39434__$1 = state_39434;
var statearr_39510_42050 = state_39434__$1;
(statearr_39510_42050[(2)] = inst_39404);

(statearr_39510_42050[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39435 === (26))){
var inst_39424 = (state_39434[(2)]);
var state_39434__$1 = state_39434;
var statearr_39511_42054 = state_39434__$1;
(statearr_39511_42054[(2)] = inst_39424);

(statearr_39511_42054[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39435 === (16))){
var inst_39416 = (state_39434[(2)]);
var state_39434__$1 = state_39434;
if(cljs.core.truth_(inst_39416)){
var statearr_39514_42055 = state_39434__$1;
(statearr_39514_42055[(1)] = (20));

} else {
var statearr_39516_42056 = state_39434__$1;
(statearr_39516_42056[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39435 === (10))){
var inst_39430 = (state_39434[(2)]);
var state_39434__$1 = state_39434;
var statearr_39517_42057 = state_39434__$1;
(statearr_39517_42057[(2)] = inst_39430);

(statearr_39517_42057[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39435 === (18))){
var inst_39408 = (state_39434[(16)]);
var state_39434__$1 = state_39434;
var statearr_39518_42058 = state_39434__$1;
(statearr_39518_42058[(2)] = inst_39408);

(statearr_39518_42058[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39435 === (8))){
var inst_39381 = (state_39434[(7)]);
var inst_39392 = (inst_39381 == null);
var state_39434__$1 = state_39434;
if(cljs.core.truth_(inst_39392)){
var statearr_39519_42063 = state_39434__$1;
(statearr_39519_42063[(1)] = (11));

} else {
var statearr_39521_42064 = state_39434__$1;
(statearr_39521_42064[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__37429__auto__ = null;
var cljs$core$async$mix_$_state_machine__37429__auto____0 = (function (){
var statearr_39530 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39530[(0)] = cljs$core$async$mix_$_state_machine__37429__auto__);

(statearr_39530[(1)] = (1));

return statearr_39530;
});
var cljs$core$async$mix_$_state_machine__37429__auto____1 = (function (state_39434){
while(true){
var ret_value__37430__auto__ = (function (){try{while(true){
var result__37431__auto__ = switch__37428__auto__(state_39434);
if(cljs.core.keyword_identical_QMARK_(result__37431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37431__auto__;
}
break;
}
}catch (e39533){var ex__37432__auto__ = e39533;
var statearr_39534_42065 = state_39434;
(statearr_39534_42065[(2)] = ex__37432__auto__);


if(cljs.core.seq((state_39434[(4)]))){
var statearr_39535_42066 = state_39434;
(statearr_39535_42066[(1)] = cljs.core.first((state_39434[(4)])));

} else {
throw ex__37432__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42067 = state_39434;
state_39434 = G__42067;
continue;
} else {
return ret_value__37430__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__37429__auto__ = function(state_39434){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__37429__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__37429__auto____1.call(this,state_39434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__37429__auto____0;
cljs$core$async$mix_$_state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__37429__auto____1;
return cljs$core$async$mix_$_state_machine__37429__auto__;
})()
})();
var state__37677__auto__ = (function (){var statearr_39541 = f__37676__auto__();
(statearr_39541[(6)] = c__37673__auto___42007);

return statearr_39541;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37677__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_42068 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_42068(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_42072 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_42072(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_42077 = (function() {
var G__42078 = null;
var G__42078__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__42078__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__42078 = function(p,v){
switch(arguments.length){
case 1:
return G__42078__1.call(this,p);
case 2:
return G__42078__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__42078.cljs$core$IFn$_invoke$arity$1 = G__42078__1;
G__42078.cljs$core$IFn$_invoke$arity$2 = G__42078__2;
return G__42078;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__39585 = arguments.length;
switch (G__39585) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_42077(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_42077(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39609 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta39610){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta39610 = meta39610;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39609.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39611,meta39610__$1){
var self__ = this;
var _39611__$1 = this;
return (new cljs.core.async.t_cljs$core$async39609(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta39610__$1));
}));

(cljs.core.async.t_cljs$core$async39609.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39611){
var self__ = this;
var _39611__$1 = this;
return self__.meta39610;
}));

(cljs.core.async.t_cljs$core$async39609.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39609.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async39609.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39609.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async39609.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async39609.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async39609.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async39609.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta39610","meta39610",-1517481693,null)], null);
}));

(cljs.core.async.t_cljs$core$async39609.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39609.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39609");

(cljs.core.async.t_cljs$core$async39609.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async39609");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39609.
 */
cljs.core.async.__GT_t_cljs$core$async39609 = (function cljs$core$async$__GT_t_cljs$core$async39609(ch,topic_fn,buf_fn,mults,ensure_mult,meta39610){
return (new cljs.core.async.t_cljs$core$async39609(ch,topic_fn,buf_fn,mults,ensure_mult,meta39610));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__39602 = arguments.length;
switch (G__39602) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__39593_SHARP_){
if(cljs.core.truth_((p1__39593_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__39593_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__39593_SHARP_.call(null,topic)))){
return p1__39593_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__39593_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async39609(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__37673__auto___42141 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37676__auto__ = (function (){var switch__37428__auto__ = (function (state_39721){
var state_val_39722 = (state_39721[(1)]);
if((state_val_39722 === (7))){
var inst_39717 = (state_39721[(2)]);
var state_39721__$1 = state_39721;
var statearr_39733_42142 = state_39721__$1;
(statearr_39733_42142[(2)] = inst_39717);

(statearr_39733_42142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39722 === (20))){
var state_39721__$1 = state_39721;
var statearr_39734_42145 = state_39721__$1;
(statearr_39734_42145[(2)] = null);

(statearr_39734_42145[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39722 === (1))){
var state_39721__$1 = state_39721;
var statearr_39737_42147 = state_39721__$1;
(statearr_39737_42147[(2)] = null);

(statearr_39737_42147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39722 === (24))){
var inst_39698 = (state_39721[(7)]);
var inst_39709 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_39698);
var state_39721__$1 = state_39721;
var statearr_39740_42151 = state_39721__$1;
(statearr_39740_42151[(2)] = inst_39709);

(statearr_39740_42151[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39722 === (4))){
var inst_39641 = (state_39721[(8)]);
var inst_39641__$1 = (state_39721[(2)]);
var inst_39642 = (inst_39641__$1 == null);
var state_39721__$1 = (function (){var statearr_39742 = state_39721;
(statearr_39742[(8)] = inst_39641__$1);

return statearr_39742;
})();
if(cljs.core.truth_(inst_39642)){
var statearr_39743_42152 = state_39721__$1;
(statearr_39743_42152[(1)] = (5));

} else {
var statearr_39744_42153 = state_39721__$1;
(statearr_39744_42153[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39722 === (15))){
var inst_39691 = (state_39721[(2)]);
var state_39721__$1 = state_39721;
var statearr_39751_42154 = state_39721__$1;
(statearr_39751_42154[(2)] = inst_39691);

(statearr_39751_42154[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39722 === (21))){
var inst_39714 = (state_39721[(2)]);
var state_39721__$1 = (function (){var statearr_39755 = state_39721;
(statearr_39755[(9)] = inst_39714);

return statearr_39755;
})();
var statearr_39757_42156 = state_39721__$1;
(statearr_39757_42156[(2)] = null);

(statearr_39757_42156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39722 === (13))){
var inst_39669 = (state_39721[(10)]);
var inst_39671 = cljs.core.chunked_seq_QMARK_(inst_39669);
var state_39721__$1 = state_39721;
if(inst_39671){
var statearr_39758_42158 = state_39721__$1;
(statearr_39758_42158[(1)] = (16));

} else {
var statearr_39760_42159 = state_39721__$1;
(statearr_39760_42159[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39722 === (22))){
var inst_39706 = (state_39721[(2)]);
var state_39721__$1 = state_39721;
if(cljs.core.truth_(inst_39706)){
var statearr_39761_42160 = state_39721__$1;
(statearr_39761_42160[(1)] = (23));

} else {
var statearr_39763_42161 = state_39721__$1;
(statearr_39763_42161[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39722 === (6))){
var inst_39701 = (state_39721[(11)]);
var inst_39698 = (state_39721[(7)]);
var inst_39641 = (state_39721[(8)]);
var inst_39698__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_39641) : topic_fn.call(null,inst_39641));
var inst_39700 = cljs.core.deref(mults);
var inst_39701__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39700,inst_39698__$1);
var state_39721__$1 = (function (){var statearr_39767 = state_39721;
(statearr_39767[(11)] = inst_39701__$1);

(statearr_39767[(7)] = inst_39698__$1);

return statearr_39767;
})();
if(cljs.core.truth_(inst_39701__$1)){
var statearr_39771_42165 = state_39721__$1;
(statearr_39771_42165[(1)] = (19));

} else {
var statearr_39772_42166 = state_39721__$1;
(statearr_39772_42166[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39722 === (25))){
var inst_39711 = (state_39721[(2)]);
var state_39721__$1 = state_39721;
var statearr_39775_42167 = state_39721__$1;
(statearr_39775_42167[(2)] = inst_39711);

(statearr_39775_42167[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39722 === (17))){
var inst_39669 = (state_39721[(10)]);
var inst_39682 = cljs.core.first(inst_39669);
var inst_39683 = cljs.core.async.muxch_STAR_(inst_39682);
var inst_39684 = cljs.core.async.close_BANG_(inst_39683);
var inst_39685 = cljs.core.next(inst_39669);
var inst_39651 = inst_39685;
var inst_39652 = null;
var inst_39653 = (0);
var inst_39654 = (0);
var state_39721__$1 = (function (){var statearr_39779 = state_39721;
(statearr_39779[(12)] = inst_39653);

(statearr_39779[(13)] = inst_39654);

(statearr_39779[(14)] = inst_39652);

(statearr_39779[(15)] = inst_39651);

(statearr_39779[(16)] = inst_39684);

return statearr_39779;
})();
var statearr_39781_42168 = state_39721__$1;
(statearr_39781_42168[(2)] = null);

(statearr_39781_42168[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39722 === (3))){
var inst_39719 = (state_39721[(2)]);
var state_39721__$1 = state_39721;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39721__$1,inst_39719);
} else {
if((state_val_39722 === (12))){
var inst_39693 = (state_39721[(2)]);
var state_39721__$1 = state_39721;
var statearr_39785_42169 = state_39721__$1;
(statearr_39785_42169[(2)] = inst_39693);

(statearr_39785_42169[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39722 === (2))){
var state_39721__$1 = state_39721;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39721__$1,(4),ch);
} else {
if((state_val_39722 === (23))){
var state_39721__$1 = state_39721;
var statearr_39787_42170 = state_39721__$1;
(statearr_39787_42170[(2)] = null);

(statearr_39787_42170[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39722 === (19))){
var inst_39701 = (state_39721[(11)]);
var inst_39641 = (state_39721[(8)]);
var inst_39704 = cljs.core.async.muxch_STAR_(inst_39701);
var state_39721__$1 = state_39721;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39721__$1,(22),inst_39704,inst_39641);
} else {
if((state_val_39722 === (11))){
var inst_39651 = (state_39721[(15)]);
var inst_39669 = (state_39721[(10)]);
var inst_39669__$1 = cljs.core.seq(inst_39651);
var state_39721__$1 = (function (){var statearr_39795 = state_39721;
(statearr_39795[(10)] = inst_39669__$1);

return statearr_39795;
})();
if(inst_39669__$1){
var statearr_39796_42171 = state_39721__$1;
(statearr_39796_42171[(1)] = (13));

} else {
var statearr_39798_42172 = state_39721__$1;
(statearr_39798_42172[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39722 === (9))){
var inst_39695 = (state_39721[(2)]);
var state_39721__$1 = state_39721;
var statearr_39802_42173 = state_39721__$1;
(statearr_39802_42173[(2)] = inst_39695);

(statearr_39802_42173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39722 === (5))){
var inst_39648 = cljs.core.deref(mults);
var inst_39649 = cljs.core.vals(inst_39648);
var inst_39650 = cljs.core.seq(inst_39649);
var inst_39651 = inst_39650;
var inst_39652 = null;
var inst_39653 = (0);
var inst_39654 = (0);
var state_39721__$1 = (function (){var statearr_39806 = state_39721;
(statearr_39806[(12)] = inst_39653);

(statearr_39806[(13)] = inst_39654);

(statearr_39806[(14)] = inst_39652);

(statearr_39806[(15)] = inst_39651);

return statearr_39806;
})();
var statearr_39807_42175 = state_39721__$1;
(statearr_39807_42175[(2)] = null);

(statearr_39807_42175[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39722 === (14))){
var state_39721__$1 = state_39721;
var statearr_39812_42176 = state_39721__$1;
(statearr_39812_42176[(2)] = null);

(statearr_39812_42176[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39722 === (16))){
var inst_39669 = (state_39721[(10)]);
var inst_39677 = cljs.core.chunk_first(inst_39669);
var inst_39678 = cljs.core.chunk_rest(inst_39669);
var inst_39679 = cljs.core.count(inst_39677);
var inst_39651 = inst_39678;
var inst_39652 = inst_39677;
var inst_39653 = inst_39679;
var inst_39654 = (0);
var state_39721__$1 = (function (){var statearr_39820 = state_39721;
(statearr_39820[(12)] = inst_39653);

(statearr_39820[(13)] = inst_39654);

(statearr_39820[(14)] = inst_39652);

(statearr_39820[(15)] = inst_39651);

return statearr_39820;
})();
var statearr_39821_42177 = state_39721__$1;
(statearr_39821_42177[(2)] = null);

(statearr_39821_42177[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39722 === (10))){
var inst_39653 = (state_39721[(12)]);
var inst_39654 = (state_39721[(13)]);
var inst_39652 = (state_39721[(14)]);
var inst_39651 = (state_39721[(15)]);
var inst_39662 = cljs.core._nth(inst_39652,inst_39654);
var inst_39664 = cljs.core.async.muxch_STAR_(inst_39662);
var inst_39665 = cljs.core.async.close_BANG_(inst_39664);
var inst_39666 = (inst_39654 + (1));
var tmp39809 = inst_39653;
var tmp39810 = inst_39652;
var tmp39811 = inst_39651;
var inst_39651__$1 = tmp39811;
var inst_39652__$1 = tmp39810;
var inst_39653__$1 = tmp39809;
var inst_39654__$1 = inst_39666;
var state_39721__$1 = (function (){var statearr_39828 = state_39721;
(statearr_39828[(12)] = inst_39653__$1);

(statearr_39828[(13)] = inst_39654__$1);

(statearr_39828[(17)] = inst_39665);

(statearr_39828[(14)] = inst_39652__$1);

(statearr_39828[(15)] = inst_39651__$1);

return statearr_39828;
})();
var statearr_39830_42182 = state_39721__$1;
(statearr_39830_42182[(2)] = null);

(statearr_39830_42182[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39722 === (18))){
var inst_39688 = (state_39721[(2)]);
var state_39721__$1 = state_39721;
var statearr_39832_42183 = state_39721__$1;
(statearr_39832_42183[(2)] = inst_39688);

(statearr_39832_42183[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39722 === (8))){
var inst_39653 = (state_39721[(12)]);
var inst_39654 = (state_39721[(13)]);
var inst_39657 = (inst_39654 < inst_39653);
var inst_39658 = inst_39657;
var state_39721__$1 = state_39721;
if(cljs.core.truth_(inst_39658)){
var statearr_39833_42188 = state_39721__$1;
(statearr_39833_42188[(1)] = (10));

} else {
var statearr_39836_42189 = state_39721__$1;
(statearr_39836_42189[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37429__auto__ = null;
var cljs$core$async$state_machine__37429__auto____0 = (function (){
var statearr_39838 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39838[(0)] = cljs$core$async$state_machine__37429__auto__);

(statearr_39838[(1)] = (1));

return statearr_39838;
});
var cljs$core$async$state_machine__37429__auto____1 = (function (state_39721){
while(true){
var ret_value__37430__auto__ = (function (){try{while(true){
var result__37431__auto__ = switch__37428__auto__(state_39721);
if(cljs.core.keyword_identical_QMARK_(result__37431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37431__auto__;
}
break;
}
}catch (e39841){var ex__37432__auto__ = e39841;
var statearr_39842_42194 = state_39721;
(statearr_39842_42194[(2)] = ex__37432__auto__);


if(cljs.core.seq((state_39721[(4)]))){
var statearr_39845_42195 = state_39721;
(statearr_39845_42195[(1)] = cljs.core.first((state_39721[(4)])));

} else {
throw ex__37432__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42196 = state_39721;
state_39721 = G__42196;
continue;
} else {
return ret_value__37430__auto__;
}
break;
}
});
cljs$core$async$state_machine__37429__auto__ = function(state_39721){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37429__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37429__auto____1.call(this,state_39721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37429__auto____0;
cljs$core$async$state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37429__auto____1;
return cljs$core$async$state_machine__37429__auto__;
})()
})();
var state__37677__auto__ = (function (){var statearr_39847 = f__37676__auto__();
(statearr_39847[(6)] = c__37673__auto___42141);

return statearr_39847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37677__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__39854 = arguments.length;
switch (G__39854) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__39864 = arguments.length;
switch (G__39864) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__39875 = arguments.length;
switch (G__39875) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__37673__auto___42210 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37676__auto__ = (function (){var switch__37428__auto__ = (function (state_39940){
var state_val_39941 = (state_39940[(1)]);
if((state_val_39941 === (7))){
var state_39940__$1 = state_39940;
var statearr_39947_42211 = state_39940__$1;
(statearr_39947_42211[(2)] = null);

(statearr_39947_42211[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39941 === (1))){
var state_39940__$1 = state_39940;
var statearr_39951_42213 = state_39940__$1;
(statearr_39951_42213[(2)] = null);

(statearr_39951_42213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39941 === (4))){
var inst_39892 = (state_39940[(7)]);
var inst_39893 = (state_39940[(8)]);
var inst_39895 = (inst_39893 < inst_39892);
var state_39940__$1 = state_39940;
if(cljs.core.truth_(inst_39895)){
var statearr_39956_42214 = state_39940__$1;
(statearr_39956_42214[(1)] = (6));

} else {
var statearr_39957_42215 = state_39940__$1;
(statearr_39957_42215[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39941 === (15))){
var inst_39924 = (state_39940[(9)]);
var inst_39930 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_39924);
var state_39940__$1 = state_39940;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39940__$1,(17),out,inst_39930);
} else {
if((state_val_39941 === (13))){
var inst_39924 = (state_39940[(9)]);
var inst_39924__$1 = (state_39940[(2)]);
var inst_39925 = cljs.core.some(cljs.core.nil_QMARK_,inst_39924__$1);
var state_39940__$1 = (function (){var statearr_39963 = state_39940;
(statearr_39963[(9)] = inst_39924__$1);

return statearr_39963;
})();
if(cljs.core.truth_(inst_39925)){
var statearr_39965_42216 = state_39940__$1;
(statearr_39965_42216[(1)] = (14));

} else {
var statearr_39966_42218 = state_39940__$1;
(statearr_39966_42218[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39941 === (6))){
var state_39940__$1 = state_39940;
var statearr_39968_42222 = state_39940__$1;
(statearr_39968_42222[(2)] = null);

(statearr_39968_42222[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39941 === (17))){
var inst_39932 = (state_39940[(2)]);
var state_39940__$1 = (function (){var statearr_39977 = state_39940;
(statearr_39977[(10)] = inst_39932);

return statearr_39977;
})();
var statearr_39979_42223 = state_39940__$1;
(statearr_39979_42223[(2)] = null);

(statearr_39979_42223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39941 === (3))){
var inst_39937 = (state_39940[(2)]);
var state_39940__$1 = state_39940;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39940__$1,inst_39937);
} else {
if((state_val_39941 === (12))){
var _ = (function (){var statearr_39981 = state_39940;
(statearr_39981[(4)] = cljs.core.rest((state_39940[(4)])));

return statearr_39981;
})();
var state_39940__$1 = state_39940;
var ex39972 = (state_39940__$1[(2)]);
var statearr_39986_42224 = state_39940__$1;
(statearr_39986_42224[(5)] = ex39972);


if((ex39972 instanceof Object)){
var statearr_39998_42225 = state_39940__$1;
(statearr_39998_42225[(1)] = (11));

(statearr_39998_42225[(5)] = null);

} else {
throw ex39972;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39941 === (2))){
var inst_39891 = cljs.core.reset_BANG_(dctr,cnt);
var inst_39892 = cnt;
var inst_39893 = (0);
var state_39940__$1 = (function (){var statearr_40016 = state_39940;
(statearr_40016[(7)] = inst_39892);

(statearr_40016[(11)] = inst_39891);

(statearr_40016[(8)] = inst_39893);

return statearr_40016;
})();
var statearr_40017_42226 = state_39940__$1;
(statearr_40017_42226[(2)] = null);

(statearr_40017_42226[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39941 === (11))){
var inst_39901 = (state_39940[(2)]);
var inst_39902 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_39940__$1 = (function (){var statearr_40019 = state_39940;
(statearr_40019[(12)] = inst_39901);

return statearr_40019;
})();
var statearr_40020_42227 = state_39940__$1;
(statearr_40020_42227[(2)] = inst_39902);

(statearr_40020_42227[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39941 === (9))){
var inst_39893 = (state_39940[(8)]);
var _ = (function (){var statearr_40027 = state_39940;
(statearr_40027[(4)] = cljs.core.cons((12),(state_39940[(4)])));

return statearr_40027;
})();
var inst_39908 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_39893) : chs__$1.call(null,inst_39893));
var inst_39909 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_39893) : done.call(null,inst_39893));
var inst_39910 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_39908,inst_39909);
var ___$1 = (function (){var statearr_40032 = state_39940;
(statearr_40032[(4)] = cljs.core.rest((state_39940[(4)])));

return statearr_40032;
})();
var state_39940__$1 = state_39940;
var statearr_40034_42232 = state_39940__$1;
(statearr_40034_42232[(2)] = inst_39910);

(statearr_40034_42232[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39941 === (5))){
var inst_39921 = (state_39940[(2)]);
var state_39940__$1 = (function (){var statearr_40036 = state_39940;
(statearr_40036[(13)] = inst_39921);

return statearr_40036;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39940__$1,(13),dchan);
} else {
if((state_val_39941 === (14))){
var inst_39928 = cljs.core.async.close_BANG_(out);
var state_39940__$1 = state_39940;
var statearr_40040_42236 = state_39940__$1;
(statearr_40040_42236[(2)] = inst_39928);

(statearr_40040_42236[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39941 === (16))){
var inst_39935 = (state_39940[(2)]);
var state_39940__$1 = state_39940;
var statearr_40045_42237 = state_39940__$1;
(statearr_40045_42237[(2)] = inst_39935);

(statearr_40045_42237[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39941 === (10))){
var inst_39893 = (state_39940[(8)]);
var inst_39913 = (state_39940[(2)]);
var inst_39914 = (inst_39893 + (1));
var inst_39893__$1 = inst_39914;
var state_39940__$1 = (function (){var statearr_40047 = state_39940;
(statearr_40047[(14)] = inst_39913);

(statearr_40047[(8)] = inst_39893__$1);

return statearr_40047;
})();
var statearr_40048_42238 = state_39940__$1;
(statearr_40048_42238[(2)] = null);

(statearr_40048_42238[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39941 === (8))){
var inst_39918 = (state_39940[(2)]);
var state_39940__$1 = state_39940;
var statearr_40056_42239 = state_39940__$1;
(statearr_40056_42239[(2)] = inst_39918);

(statearr_40056_42239[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37429__auto__ = null;
var cljs$core$async$state_machine__37429__auto____0 = (function (){
var statearr_40058 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40058[(0)] = cljs$core$async$state_machine__37429__auto__);

(statearr_40058[(1)] = (1));

return statearr_40058;
});
var cljs$core$async$state_machine__37429__auto____1 = (function (state_39940){
while(true){
var ret_value__37430__auto__ = (function (){try{while(true){
var result__37431__auto__ = switch__37428__auto__(state_39940);
if(cljs.core.keyword_identical_QMARK_(result__37431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37431__auto__;
}
break;
}
}catch (e40059){var ex__37432__auto__ = e40059;
var statearr_40064_42240 = state_39940;
(statearr_40064_42240[(2)] = ex__37432__auto__);


if(cljs.core.seq((state_39940[(4)]))){
var statearr_40067_42241 = state_39940;
(statearr_40067_42241[(1)] = cljs.core.first((state_39940[(4)])));

} else {
throw ex__37432__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42242 = state_39940;
state_39940 = G__42242;
continue;
} else {
return ret_value__37430__auto__;
}
break;
}
});
cljs$core$async$state_machine__37429__auto__ = function(state_39940){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37429__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37429__auto____1.call(this,state_39940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37429__auto____0;
cljs$core$async$state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37429__auto____1;
return cljs$core$async$state_machine__37429__auto__;
})()
})();
var state__37677__auto__ = (function (){var statearr_40076 = f__37676__auto__();
(statearr_40076[(6)] = c__37673__auto___42210);

return statearr_40076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37677__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__40086 = arguments.length;
switch (G__40086) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37673__auto___42244 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37676__auto__ = (function (){var switch__37428__auto__ = (function (state_40139){
var state_val_40140 = (state_40139[(1)]);
if((state_val_40140 === (7))){
var inst_40112 = (state_40139[(7)]);
var inst_40115 = (state_40139[(8)]);
var inst_40112__$1 = (state_40139[(2)]);
var inst_40115__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40112__$1,(0),null);
var inst_40117 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40112__$1,(1),null);
var inst_40119 = (inst_40115__$1 == null);
var state_40139__$1 = (function (){var statearr_40147 = state_40139;
(statearr_40147[(7)] = inst_40112__$1);

(statearr_40147[(8)] = inst_40115__$1);

(statearr_40147[(9)] = inst_40117);

return statearr_40147;
})();
if(cljs.core.truth_(inst_40119)){
var statearr_40148_42246 = state_40139__$1;
(statearr_40148_42246[(1)] = (8));

} else {
var statearr_40152_42248 = state_40139__$1;
(statearr_40152_42248[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40140 === (1))){
var inst_40093 = cljs.core.vec(chs);
var inst_40094 = inst_40093;
var state_40139__$1 = (function (){var statearr_40154 = state_40139;
(statearr_40154[(10)] = inst_40094);

return statearr_40154;
})();
var statearr_40155_42252 = state_40139__$1;
(statearr_40155_42252[(2)] = null);

(statearr_40155_42252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40140 === (4))){
var inst_40094 = (state_40139[(10)]);
var state_40139__$1 = state_40139;
return cljs.core.async.ioc_alts_BANG_(state_40139__$1,(7),inst_40094);
} else {
if((state_val_40140 === (6))){
var inst_40135 = (state_40139[(2)]);
var state_40139__$1 = state_40139;
var statearr_40159_42256 = state_40139__$1;
(statearr_40159_42256[(2)] = inst_40135);

(statearr_40159_42256[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40140 === (3))){
var inst_40137 = (state_40139[(2)]);
var state_40139__$1 = state_40139;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40139__$1,inst_40137);
} else {
if((state_val_40140 === (2))){
var inst_40094 = (state_40139[(10)]);
var inst_40102 = cljs.core.count(inst_40094);
var inst_40103 = (inst_40102 > (0));
var state_40139__$1 = state_40139;
if(cljs.core.truth_(inst_40103)){
var statearr_40162_42263 = state_40139__$1;
(statearr_40162_42263[(1)] = (4));

} else {
var statearr_40163_42264 = state_40139__$1;
(statearr_40163_42264[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40140 === (11))){
var inst_40094 = (state_40139[(10)]);
var inst_40127 = (state_40139[(2)]);
var tmp40160 = inst_40094;
var inst_40094__$1 = tmp40160;
var state_40139__$1 = (function (){var statearr_40165 = state_40139;
(statearr_40165[(10)] = inst_40094__$1);

(statearr_40165[(11)] = inst_40127);

return statearr_40165;
})();
var statearr_40166_42265 = state_40139__$1;
(statearr_40166_42265[(2)] = null);

(statearr_40166_42265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40140 === (9))){
var inst_40115 = (state_40139[(8)]);
var state_40139__$1 = state_40139;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40139__$1,(11),out,inst_40115);
} else {
if((state_val_40140 === (5))){
var inst_40133 = cljs.core.async.close_BANG_(out);
var state_40139__$1 = state_40139;
var statearr_40172_42269 = state_40139__$1;
(statearr_40172_42269[(2)] = inst_40133);

(statearr_40172_42269[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40140 === (10))){
var inst_40130 = (state_40139[(2)]);
var state_40139__$1 = state_40139;
var statearr_40179_42270 = state_40139__$1;
(statearr_40179_42270[(2)] = inst_40130);

(statearr_40179_42270[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40140 === (8))){
var inst_40112 = (state_40139[(7)]);
var inst_40094 = (state_40139[(10)]);
var inst_40115 = (state_40139[(8)]);
var inst_40117 = (state_40139[(9)]);
var inst_40122 = (function (){var cs = inst_40094;
var vec__40106 = inst_40112;
var v = inst_40115;
var c = inst_40117;
return (function (p1__40079_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__40079_SHARP_);
});
})();
var inst_40123 = cljs.core.filterv(inst_40122,inst_40094);
var inst_40094__$1 = inst_40123;
var state_40139__$1 = (function (){var statearr_40181 = state_40139;
(statearr_40181[(10)] = inst_40094__$1);

return statearr_40181;
})();
var statearr_40184_42271 = state_40139__$1;
(statearr_40184_42271[(2)] = null);

(statearr_40184_42271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37429__auto__ = null;
var cljs$core$async$state_machine__37429__auto____0 = (function (){
var statearr_40189 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40189[(0)] = cljs$core$async$state_machine__37429__auto__);

(statearr_40189[(1)] = (1));

return statearr_40189;
});
var cljs$core$async$state_machine__37429__auto____1 = (function (state_40139){
while(true){
var ret_value__37430__auto__ = (function (){try{while(true){
var result__37431__auto__ = switch__37428__auto__(state_40139);
if(cljs.core.keyword_identical_QMARK_(result__37431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37431__auto__;
}
break;
}
}catch (e40191){var ex__37432__auto__ = e40191;
var statearr_40192_42272 = state_40139;
(statearr_40192_42272[(2)] = ex__37432__auto__);


if(cljs.core.seq((state_40139[(4)]))){
var statearr_40197_42273 = state_40139;
(statearr_40197_42273[(1)] = cljs.core.first((state_40139[(4)])));

} else {
throw ex__37432__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42274 = state_40139;
state_40139 = G__42274;
continue;
} else {
return ret_value__37430__auto__;
}
break;
}
});
cljs$core$async$state_machine__37429__auto__ = function(state_40139){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37429__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37429__auto____1.call(this,state_40139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37429__auto____0;
cljs$core$async$state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37429__auto____1;
return cljs$core$async$state_machine__37429__auto__;
})()
})();
var state__37677__auto__ = (function (){var statearr_40200 = f__37676__auto__();
(statearr_40200[(6)] = c__37673__auto___42244);

return statearr_40200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37677__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__40207 = arguments.length;
switch (G__40207) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37673__auto___42277 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37676__auto__ = (function (){var switch__37428__auto__ = (function (state_40238){
var state_val_40239 = (state_40238[(1)]);
if((state_val_40239 === (7))){
var inst_40214 = (state_40238[(7)]);
var inst_40214__$1 = (state_40238[(2)]);
var inst_40215 = (inst_40214__$1 == null);
var inst_40216 = cljs.core.not(inst_40215);
var state_40238__$1 = (function (){var statearr_40268 = state_40238;
(statearr_40268[(7)] = inst_40214__$1);

return statearr_40268;
})();
if(inst_40216){
var statearr_40269_42278 = state_40238__$1;
(statearr_40269_42278[(1)] = (8));

} else {
var statearr_40270_42279 = state_40238__$1;
(statearr_40270_42279[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (1))){
var inst_40209 = (0);
var state_40238__$1 = (function (){var statearr_40274 = state_40238;
(statearr_40274[(8)] = inst_40209);

return statearr_40274;
})();
var statearr_40276_42280 = state_40238__$1;
(statearr_40276_42280[(2)] = null);

(statearr_40276_42280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (4))){
var state_40238__$1 = state_40238;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40238__$1,(7),ch);
} else {
if((state_val_40239 === (6))){
var inst_40229 = (state_40238[(2)]);
var state_40238__$1 = state_40238;
var statearr_40277_42281 = state_40238__$1;
(statearr_40277_42281[(2)] = inst_40229);

(statearr_40277_42281[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (3))){
var inst_40231 = (state_40238[(2)]);
var inst_40232 = cljs.core.async.close_BANG_(out);
var state_40238__$1 = (function (){var statearr_40284 = state_40238;
(statearr_40284[(9)] = inst_40231);

return statearr_40284;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_40238__$1,inst_40232);
} else {
if((state_val_40239 === (2))){
var inst_40209 = (state_40238[(8)]);
var inst_40211 = (inst_40209 < n);
var state_40238__$1 = state_40238;
if(cljs.core.truth_(inst_40211)){
var statearr_40287_42282 = state_40238__$1;
(statearr_40287_42282[(1)] = (4));

} else {
var statearr_40288_42283 = state_40238__$1;
(statearr_40288_42283[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (11))){
var inst_40209 = (state_40238[(8)]);
var inst_40219 = (state_40238[(2)]);
var inst_40222 = (inst_40209 + (1));
var inst_40209__$1 = inst_40222;
var state_40238__$1 = (function (){var statearr_40292 = state_40238;
(statearr_40292[(10)] = inst_40219);

(statearr_40292[(8)] = inst_40209__$1);

return statearr_40292;
})();
var statearr_40294_42284 = state_40238__$1;
(statearr_40294_42284[(2)] = null);

(statearr_40294_42284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (9))){
var state_40238__$1 = state_40238;
var statearr_40296_42289 = state_40238__$1;
(statearr_40296_42289[(2)] = null);

(statearr_40296_42289[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (5))){
var state_40238__$1 = state_40238;
var statearr_40299_42291 = state_40238__$1;
(statearr_40299_42291[(2)] = null);

(statearr_40299_42291[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (10))){
var inst_40226 = (state_40238[(2)]);
var state_40238__$1 = state_40238;
var statearr_40301_42293 = state_40238__$1;
(statearr_40301_42293[(2)] = inst_40226);

(statearr_40301_42293[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40239 === (8))){
var inst_40214 = (state_40238[(7)]);
var state_40238__$1 = state_40238;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40238__$1,(11),out,inst_40214);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37429__auto__ = null;
var cljs$core$async$state_machine__37429__auto____0 = (function (){
var statearr_40307 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40307[(0)] = cljs$core$async$state_machine__37429__auto__);

(statearr_40307[(1)] = (1));

return statearr_40307;
});
var cljs$core$async$state_machine__37429__auto____1 = (function (state_40238){
while(true){
var ret_value__37430__auto__ = (function (){try{while(true){
var result__37431__auto__ = switch__37428__auto__(state_40238);
if(cljs.core.keyword_identical_QMARK_(result__37431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37431__auto__;
}
break;
}
}catch (e40310){var ex__37432__auto__ = e40310;
var statearr_40311_42296 = state_40238;
(statearr_40311_42296[(2)] = ex__37432__auto__);


if(cljs.core.seq((state_40238[(4)]))){
var statearr_40312_42297 = state_40238;
(statearr_40312_42297[(1)] = cljs.core.first((state_40238[(4)])));

} else {
throw ex__37432__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42298 = state_40238;
state_40238 = G__42298;
continue;
} else {
return ret_value__37430__auto__;
}
break;
}
});
cljs$core$async$state_machine__37429__auto__ = function(state_40238){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37429__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37429__auto____1.call(this,state_40238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37429__auto____0;
cljs$core$async$state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37429__auto____1;
return cljs$core$async$state_machine__37429__auto__;
})()
})();
var state__37677__auto__ = (function (){var statearr_40317 = f__37676__auto__();
(statearr_40317[(6)] = c__37673__auto___42277);

return statearr_40317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37677__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40329 = (function (f,ch,meta40321,_,fn1,meta40330){
this.f = f;
this.ch = ch;
this.meta40321 = meta40321;
this._ = _;
this.fn1 = fn1;
this.meta40330 = meta40330;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40329.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40331,meta40330__$1){
var self__ = this;
var _40331__$1 = this;
return (new cljs.core.async.t_cljs$core$async40329(self__.f,self__.ch,self__.meta40321,self__._,self__.fn1,meta40330__$1));
}));

(cljs.core.async.t_cljs$core$async40329.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40331){
var self__ = this;
var _40331__$1 = this;
return self__.meta40330;
}));

(cljs.core.async.t_cljs$core$async40329.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40329.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async40329.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async40329.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__40319_SHARP_){
var G__40339 = (((p1__40319_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__40319_SHARP_) : self__.f.call(null,p1__40319_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__40339) : f1.call(null,G__40339));
});
}));

(cljs.core.async.t_cljs$core$async40329.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40321","meta40321",-1031323370,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async40320","cljs.core.async/t_cljs$core$async40320",590218410,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta40330","meta40330",1197808040,null)], null);
}));

(cljs.core.async.t_cljs$core$async40329.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40329.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40329");

(cljs.core.async.t_cljs$core$async40329.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async40329");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40329.
 */
cljs.core.async.__GT_t_cljs$core$async40329 = (function cljs$core$async$__GT_t_cljs$core$async40329(f,ch,meta40321,_,fn1,meta40330){
return (new cljs.core.async.t_cljs$core$async40329(f,ch,meta40321,_,fn1,meta40330));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40320 = (function (f,ch,meta40321){
this.f = f;
this.ch = ch;
this.meta40321 = meta40321;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40320.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40322,meta40321__$1){
var self__ = this;
var _40322__$1 = this;
return (new cljs.core.async.t_cljs$core$async40320(self__.f,self__.ch,meta40321__$1));
}));

(cljs.core.async.t_cljs$core$async40320.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40322){
var self__ = this;
var _40322__$1 = this;
return self__.meta40321;
}));

(cljs.core.async.t_cljs$core$async40320.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40320.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async40320.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async40320.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40320.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async40329(self__.f,self__.ch,self__.meta40321,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__40346 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__40346) : self__.f.call(null,G__40346));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async40320.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40320.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async40320.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40321","meta40321",-1031323370,null)], null);
}));

(cljs.core.async.t_cljs$core$async40320.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40320.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40320");

(cljs.core.async.t_cljs$core$async40320.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async40320");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40320.
 */
cljs.core.async.__GT_t_cljs$core$async40320 = (function cljs$core$async$__GT_t_cljs$core$async40320(f,ch,meta40321){
return (new cljs.core.async.t_cljs$core$async40320(f,ch,meta40321));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async40320(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40347 = (function (f,ch,meta40348){
this.f = f;
this.ch = ch;
this.meta40348 = meta40348;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40347.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40349,meta40348__$1){
var self__ = this;
var _40349__$1 = this;
return (new cljs.core.async.t_cljs$core$async40347(self__.f,self__.ch,meta40348__$1));
}));

(cljs.core.async.t_cljs$core$async40347.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40349){
var self__ = this;
var _40349__$1 = this;
return self__.meta40348;
}));

(cljs.core.async.t_cljs$core$async40347.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40347.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async40347.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40347.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async40347.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40347.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async40347.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40348","meta40348",-376130573,null)], null);
}));

(cljs.core.async.t_cljs$core$async40347.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40347.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40347");

(cljs.core.async.t_cljs$core$async40347.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async40347");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40347.
 */
cljs.core.async.__GT_t_cljs$core$async40347 = (function cljs$core$async$__GT_t_cljs$core$async40347(f,ch,meta40348){
return (new cljs.core.async.t_cljs$core$async40347(f,ch,meta40348));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async40347(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40357 = (function (p,ch,meta40358){
this.p = p;
this.ch = ch;
this.meta40358 = meta40358;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40357.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40359,meta40358__$1){
var self__ = this;
var _40359__$1 = this;
return (new cljs.core.async.t_cljs$core$async40357(self__.p,self__.ch,meta40358__$1));
}));

(cljs.core.async.t_cljs$core$async40357.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40359){
var self__ = this;
var _40359__$1 = this;
return self__.meta40358;
}));

(cljs.core.async.t_cljs$core$async40357.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40357.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async40357.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async40357.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40357.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async40357.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40357.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async40357.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40358","meta40358",1884938794,null)], null);
}));

(cljs.core.async.t_cljs$core$async40357.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40357.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40357");

(cljs.core.async.t_cljs$core$async40357.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async40357");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40357.
 */
cljs.core.async.__GT_t_cljs$core$async40357 = (function cljs$core$async$__GT_t_cljs$core$async40357(p,ch,meta40358){
return (new cljs.core.async.t_cljs$core$async40357(p,ch,meta40358));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async40357(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__40392 = arguments.length;
switch (G__40392) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37673__auto___42323 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37676__auto__ = (function (){var switch__37428__auto__ = (function (state_40422){
var state_val_40423 = (state_40422[(1)]);
if((state_val_40423 === (7))){
var inst_40416 = (state_40422[(2)]);
var state_40422__$1 = state_40422;
var statearr_40432_42324 = state_40422__$1;
(statearr_40432_42324[(2)] = inst_40416);

(statearr_40432_42324[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40423 === (1))){
var state_40422__$1 = state_40422;
var statearr_40435_42325 = state_40422__$1;
(statearr_40435_42325[(2)] = null);

(statearr_40435_42325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40423 === (4))){
var inst_40402 = (state_40422[(7)]);
var inst_40402__$1 = (state_40422[(2)]);
var inst_40403 = (inst_40402__$1 == null);
var state_40422__$1 = (function (){var statearr_40439 = state_40422;
(statearr_40439[(7)] = inst_40402__$1);

return statearr_40439;
})();
if(cljs.core.truth_(inst_40403)){
var statearr_40442_42326 = state_40422__$1;
(statearr_40442_42326[(1)] = (5));

} else {
var statearr_40445_42327 = state_40422__$1;
(statearr_40445_42327[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40423 === (6))){
var inst_40402 = (state_40422[(7)]);
var inst_40407 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_40402) : p.call(null,inst_40402));
var state_40422__$1 = state_40422;
if(cljs.core.truth_(inst_40407)){
var statearr_40449_42329 = state_40422__$1;
(statearr_40449_42329[(1)] = (8));

} else {
var statearr_40450_42330 = state_40422__$1;
(statearr_40450_42330[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40423 === (3))){
var inst_40418 = (state_40422[(2)]);
var state_40422__$1 = state_40422;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40422__$1,inst_40418);
} else {
if((state_val_40423 === (2))){
var state_40422__$1 = state_40422;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40422__$1,(4),ch);
} else {
if((state_val_40423 === (11))){
var inst_40410 = (state_40422[(2)]);
var state_40422__$1 = state_40422;
var statearr_40460_42334 = state_40422__$1;
(statearr_40460_42334[(2)] = inst_40410);

(statearr_40460_42334[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40423 === (9))){
var state_40422__$1 = state_40422;
var statearr_40462_42335 = state_40422__$1;
(statearr_40462_42335[(2)] = null);

(statearr_40462_42335[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40423 === (5))){
var inst_40405 = cljs.core.async.close_BANG_(out);
var state_40422__$1 = state_40422;
var statearr_40468_42336 = state_40422__$1;
(statearr_40468_42336[(2)] = inst_40405);

(statearr_40468_42336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40423 === (10))){
var inst_40413 = (state_40422[(2)]);
var state_40422__$1 = (function (){var statearr_40469 = state_40422;
(statearr_40469[(8)] = inst_40413);

return statearr_40469;
})();
var statearr_40470_42337 = state_40422__$1;
(statearr_40470_42337[(2)] = null);

(statearr_40470_42337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40423 === (8))){
var inst_40402 = (state_40422[(7)]);
var state_40422__$1 = state_40422;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40422__$1,(11),out,inst_40402);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37429__auto__ = null;
var cljs$core$async$state_machine__37429__auto____0 = (function (){
var statearr_40471 = [null,null,null,null,null,null,null,null,null];
(statearr_40471[(0)] = cljs$core$async$state_machine__37429__auto__);

(statearr_40471[(1)] = (1));

return statearr_40471;
});
var cljs$core$async$state_machine__37429__auto____1 = (function (state_40422){
while(true){
var ret_value__37430__auto__ = (function (){try{while(true){
var result__37431__auto__ = switch__37428__auto__(state_40422);
if(cljs.core.keyword_identical_QMARK_(result__37431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37431__auto__;
}
break;
}
}catch (e40473){var ex__37432__auto__ = e40473;
var statearr_40474_42338 = state_40422;
(statearr_40474_42338[(2)] = ex__37432__auto__);


if(cljs.core.seq((state_40422[(4)]))){
var statearr_40475_42339 = state_40422;
(statearr_40475_42339[(1)] = cljs.core.first((state_40422[(4)])));

} else {
throw ex__37432__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42341 = state_40422;
state_40422 = G__42341;
continue;
} else {
return ret_value__37430__auto__;
}
break;
}
});
cljs$core$async$state_machine__37429__auto__ = function(state_40422){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37429__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37429__auto____1.call(this,state_40422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37429__auto____0;
cljs$core$async$state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37429__auto____1;
return cljs$core$async$state_machine__37429__auto__;
})()
})();
var state__37677__auto__ = (function (){var statearr_40477 = f__37676__auto__();
(statearr_40477[(6)] = c__37673__auto___42323);

return statearr_40477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37677__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__40482 = arguments.length;
switch (G__40482) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__37673__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37676__auto__ = (function (){var switch__37428__auto__ = (function (state_40559){
var state_val_40560 = (state_40559[(1)]);
if((state_val_40560 === (7))){
var inst_40555 = (state_40559[(2)]);
var state_40559__$1 = state_40559;
var statearr_40582_42346 = state_40559__$1;
(statearr_40582_42346[(2)] = inst_40555);

(statearr_40582_42346[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40560 === (20))){
var inst_40519 = (state_40559[(7)]);
var inst_40536 = (state_40559[(2)]);
var inst_40537 = cljs.core.next(inst_40519);
var inst_40504 = inst_40537;
var inst_40505 = null;
var inst_40506 = (0);
var inst_40507 = (0);
var state_40559__$1 = (function (){var statearr_40584 = state_40559;
(statearr_40584[(8)] = inst_40536);

(statearr_40584[(9)] = inst_40505);

(statearr_40584[(10)] = inst_40507);

(statearr_40584[(11)] = inst_40504);

(statearr_40584[(12)] = inst_40506);

return statearr_40584;
})();
var statearr_40585_42347 = state_40559__$1;
(statearr_40585_42347[(2)] = null);

(statearr_40585_42347[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40560 === (1))){
var state_40559__$1 = state_40559;
var statearr_40586_42350 = state_40559__$1;
(statearr_40586_42350[(2)] = null);

(statearr_40586_42350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40560 === (4))){
var inst_40490 = (state_40559[(13)]);
var inst_40490__$1 = (state_40559[(2)]);
var inst_40491 = (inst_40490__$1 == null);
var state_40559__$1 = (function (){var statearr_40591 = state_40559;
(statearr_40591[(13)] = inst_40490__$1);

return statearr_40591;
})();
if(cljs.core.truth_(inst_40491)){
var statearr_40599_42355 = state_40559__$1;
(statearr_40599_42355[(1)] = (5));

} else {
var statearr_40600_42356 = state_40559__$1;
(statearr_40600_42356[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40560 === (15))){
var state_40559__$1 = state_40559;
var statearr_40616_42357 = state_40559__$1;
(statearr_40616_42357[(2)] = null);

(statearr_40616_42357[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40560 === (21))){
var state_40559__$1 = state_40559;
var statearr_40617_42358 = state_40559__$1;
(statearr_40617_42358[(2)] = null);

(statearr_40617_42358[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40560 === (13))){
var inst_40505 = (state_40559[(9)]);
var inst_40507 = (state_40559[(10)]);
var inst_40504 = (state_40559[(11)]);
var inst_40506 = (state_40559[(12)]);
var inst_40515 = (state_40559[(2)]);
var inst_40516 = (inst_40507 + (1));
var tmp40606 = inst_40505;
var tmp40607 = inst_40504;
var tmp40608 = inst_40506;
var inst_40504__$1 = tmp40607;
var inst_40505__$1 = tmp40606;
var inst_40506__$1 = tmp40608;
var inst_40507__$1 = inst_40516;
var state_40559__$1 = (function (){var statearr_40621 = state_40559;
(statearr_40621[(14)] = inst_40515);

(statearr_40621[(9)] = inst_40505__$1);

(statearr_40621[(10)] = inst_40507__$1);

(statearr_40621[(11)] = inst_40504__$1);

(statearr_40621[(12)] = inst_40506__$1);

return statearr_40621;
})();
var statearr_40622_42359 = state_40559__$1;
(statearr_40622_42359[(2)] = null);

(statearr_40622_42359[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40560 === (22))){
var state_40559__$1 = state_40559;
var statearr_40630_42360 = state_40559__$1;
(statearr_40630_42360[(2)] = null);

(statearr_40630_42360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40560 === (6))){
var inst_40490 = (state_40559[(13)]);
var inst_40502 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_40490) : f.call(null,inst_40490));
var inst_40503 = cljs.core.seq(inst_40502);
var inst_40504 = inst_40503;
var inst_40505 = null;
var inst_40506 = (0);
var inst_40507 = (0);
var state_40559__$1 = (function (){var statearr_40635 = state_40559;
(statearr_40635[(9)] = inst_40505);

(statearr_40635[(10)] = inst_40507);

(statearr_40635[(11)] = inst_40504);

(statearr_40635[(12)] = inst_40506);

return statearr_40635;
})();
var statearr_40636_42361 = state_40559__$1;
(statearr_40636_42361[(2)] = null);

(statearr_40636_42361[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40560 === (17))){
var inst_40519 = (state_40559[(7)]);
var inst_40529 = cljs.core.chunk_first(inst_40519);
var inst_40530 = cljs.core.chunk_rest(inst_40519);
var inst_40531 = cljs.core.count(inst_40529);
var inst_40504 = inst_40530;
var inst_40505 = inst_40529;
var inst_40506 = inst_40531;
var inst_40507 = (0);
var state_40559__$1 = (function (){var statearr_40637 = state_40559;
(statearr_40637[(9)] = inst_40505);

(statearr_40637[(10)] = inst_40507);

(statearr_40637[(11)] = inst_40504);

(statearr_40637[(12)] = inst_40506);

return statearr_40637;
})();
var statearr_40642_42366 = state_40559__$1;
(statearr_40642_42366[(2)] = null);

(statearr_40642_42366[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40560 === (3))){
var inst_40557 = (state_40559[(2)]);
var state_40559__$1 = state_40559;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40559__$1,inst_40557);
} else {
if((state_val_40560 === (12))){
var inst_40545 = (state_40559[(2)]);
var state_40559__$1 = state_40559;
var statearr_40650_42367 = state_40559__$1;
(statearr_40650_42367[(2)] = inst_40545);

(statearr_40650_42367[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40560 === (2))){
var state_40559__$1 = state_40559;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40559__$1,(4),in$);
} else {
if((state_val_40560 === (23))){
var inst_40553 = (state_40559[(2)]);
var state_40559__$1 = state_40559;
var statearr_40656_42368 = state_40559__$1;
(statearr_40656_42368[(2)] = inst_40553);

(statearr_40656_42368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40560 === (19))){
var inst_40540 = (state_40559[(2)]);
var state_40559__$1 = state_40559;
var statearr_40658_42369 = state_40559__$1;
(statearr_40658_42369[(2)] = inst_40540);

(statearr_40658_42369[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40560 === (11))){
var inst_40504 = (state_40559[(11)]);
var inst_40519 = (state_40559[(7)]);
var inst_40519__$1 = cljs.core.seq(inst_40504);
var state_40559__$1 = (function (){var statearr_40659 = state_40559;
(statearr_40659[(7)] = inst_40519__$1);

return statearr_40659;
})();
if(inst_40519__$1){
var statearr_40660_42370 = state_40559__$1;
(statearr_40660_42370[(1)] = (14));

} else {
var statearr_40662_42371 = state_40559__$1;
(statearr_40662_42371[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40560 === (9))){
var inst_40547 = (state_40559[(2)]);
var inst_40548 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_40559__$1 = (function (){var statearr_40663 = state_40559;
(statearr_40663[(15)] = inst_40547);

return statearr_40663;
})();
if(cljs.core.truth_(inst_40548)){
var statearr_40664_42372 = state_40559__$1;
(statearr_40664_42372[(1)] = (21));

} else {
var statearr_40665_42374 = state_40559__$1;
(statearr_40665_42374[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40560 === (5))){
var inst_40495 = cljs.core.async.close_BANG_(out);
var state_40559__$1 = state_40559;
var statearr_40673_42376 = state_40559__$1;
(statearr_40673_42376[(2)] = inst_40495);

(statearr_40673_42376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40560 === (14))){
var inst_40519 = (state_40559[(7)]);
var inst_40527 = cljs.core.chunked_seq_QMARK_(inst_40519);
var state_40559__$1 = state_40559;
if(inst_40527){
var statearr_40674_42377 = state_40559__$1;
(statearr_40674_42377[(1)] = (17));

} else {
var statearr_40675_42378 = state_40559__$1;
(statearr_40675_42378[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40560 === (16))){
var inst_40543 = (state_40559[(2)]);
var state_40559__$1 = state_40559;
var statearr_40680_42379 = state_40559__$1;
(statearr_40680_42379[(2)] = inst_40543);

(statearr_40680_42379[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40560 === (10))){
var inst_40505 = (state_40559[(9)]);
var inst_40507 = (state_40559[(10)]);
var inst_40513 = cljs.core._nth(inst_40505,inst_40507);
var state_40559__$1 = state_40559;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40559__$1,(13),out,inst_40513);
} else {
if((state_val_40560 === (18))){
var inst_40519 = (state_40559[(7)]);
var inst_40534 = cljs.core.first(inst_40519);
var state_40559__$1 = state_40559;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40559__$1,(20),out,inst_40534);
} else {
if((state_val_40560 === (8))){
var inst_40507 = (state_40559[(10)]);
var inst_40506 = (state_40559[(12)]);
var inst_40509 = (inst_40507 < inst_40506);
var inst_40511 = inst_40509;
var state_40559__$1 = state_40559;
if(cljs.core.truth_(inst_40511)){
var statearr_40692_42381 = state_40559__$1;
(statearr_40692_42381[(1)] = (10));

} else {
var statearr_40694_42382 = state_40559__$1;
(statearr_40694_42382[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__37429__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__37429__auto____0 = (function (){
var statearr_40696 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40696[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__37429__auto__);

(statearr_40696[(1)] = (1));

return statearr_40696;
});
var cljs$core$async$mapcat_STAR__$_state_machine__37429__auto____1 = (function (state_40559){
while(true){
var ret_value__37430__auto__ = (function (){try{while(true){
var result__37431__auto__ = switch__37428__auto__(state_40559);
if(cljs.core.keyword_identical_QMARK_(result__37431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37431__auto__;
}
break;
}
}catch (e40697){var ex__37432__auto__ = e40697;
var statearr_40698_42385 = state_40559;
(statearr_40698_42385[(2)] = ex__37432__auto__);


if(cljs.core.seq((state_40559[(4)]))){
var statearr_40700_42387 = state_40559;
(statearr_40700_42387[(1)] = cljs.core.first((state_40559[(4)])));

} else {
throw ex__37432__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42391 = state_40559;
state_40559 = G__42391;
continue;
} else {
return ret_value__37430__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__37429__auto__ = function(state_40559){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__37429__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__37429__auto____1.call(this,state_40559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__37429__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__37429__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__37429__auto__;
})()
})();
var state__37677__auto__ = (function (){var statearr_40701 = f__37676__auto__();
(statearr_40701[(6)] = c__37673__auto__);

return statearr_40701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37677__auto__);
}));

return c__37673__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__40704 = arguments.length;
switch (G__40704) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__40718 = arguments.length;
switch (G__40718) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__40734 = arguments.length;
switch (G__40734) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37673__auto___42400 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37676__auto__ = (function (){var switch__37428__auto__ = (function (state_40767){
var state_val_40768 = (state_40767[(1)]);
if((state_val_40768 === (7))){
var inst_40759 = (state_40767[(2)]);
var state_40767__$1 = state_40767;
var statearr_40778_42402 = state_40767__$1;
(statearr_40778_42402[(2)] = inst_40759);

(statearr_40778_42402[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40768 === (1))){
var inst_40739 = null;
var state_40767__$1 = (function (){var statearr_40779 = state_40767;
(statearr_40779[(7)] = inst_40739);

return statearr_40779;
})();
var statearr_40780_42407 = state_40767__$1;
(statearr_40780_42407[(2)] = null);

(statearr_40780_42407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40768 === (4))){
var inst_40744 = (state_40767[(8)]);
var inst_40744__$1 = (state_40767[(2)]);
var inst_40745 = (inst_40744__$1 == null);
var inst_40746 = cljs.core.not(inst_40745);
var state_40767__$1 = (function (){var statearr_40787 = state_40767;
(statearr_40787[(8)] = inst_40744__$1);

return statearr_40787;
})();
if(inst_40746){
var statearr_40788_42408 = state_40767__$1;
(statearr_40788_42408[(1)] = (5));

} else {
var statearr_40789_42409 = state_40767__$1;
(statearr_40789_42409[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40768 === (6))){
var state_40767__$1 = state_40767;
var statearr_40790_42411 = state_40767__$1;
(statearr_40790_42411[(2)] = null);

(statearr_40790_42411[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40768 === (3))){
var inst_40761 = (state_40767[(2)]);
var inst_40765 = cljs.core.async.close_BANG_(out);
var state_40767__$1 = (function (){var statearr_40792 = state_40767;
(statearr_40792[(9)] = inst_40761);

return statearr_40792;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_40767__$1,inst_40765);
} else {
if((state_val_40768 === (2))){
var state_40767__$1 = state_40767;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40767__$1,(4),ch);
} else {
if((state_val_40768 === (11))){
var inst_40744 = (state_40767[(8)]);
var inst_40753 = (state_40767[(2)]);
var inst_40739 = inst_40744;
var state_40767__$1 = (function (){var statearr_40798 = state_40767;
(statearr_40798[(10)] = inst_40753);

(statearr_40798[(7)] = inst_40739);

return statearr_40798;
})();
var statearr_40800_42416 = state_40767__$1;
(statearr_40800_42416[(2)] = null);

(statearr_40800_42416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40768 === (9))){
var inst_40744 = (state_40767[(8)]);
var state_40767__$1 = state_40767;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40767__$1,(11),out,inst_40744);
} else {
if((state_val_40768 === (5))){
var inst_40744 = (state_40767[(8)]);
var inst_40739 = (state_40767[(7)]);
var inst_40748 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_40744,inst_40739);
var state_40767__$1 = state_40767;
if(inst_40748){
var statearr_40802_42418 = state_40767__$1;
(statearr_40802_42418[(1)] = (8));

} else {
var statearr_40804_42423 = state_40767__$1;
(statearr_40804_42423[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40768 === (10))){
var inst_40756 = (state_40767[(2)]);
var state_40767__$1 = state_40767;
var statearr_40806_42424 = state_40767__$1;
(statearr_40806_42424[(2)] = inst_40756);

(statearr_40806_42424[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40768 === (8))){
var inst_40739 = (state_40767[(7)]);
var tmp40801 = inst_40739;
var inst_40739__$1 = tmp40801;
var state_40767__$1 = (function (){var statearr_40807 = state_40767;
(statearr_40807[(7)] = inst_40739__$1);

return statearr_40807;
})();
var statearr_40808_42425 = state_40767__$1;
(statearr_40808_42425[(2)] = null);

(statearr_40808_42425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37429__auto__ = null;
var cljs$core$async$state_machine__37429__auto____0 = (function (){
var statearr_40810 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40810[(0)] = cljs$core$async$state_machine__37429__auto__);

(statearr_40810[(1)] = (1));

return statearr_40810;
});
var cljs$core$async$state_machine__37429__auto____1 = (function (state_40767){
while(true){
var ret_value__37430__auto__ = (function (){try{while(true){
var result__37431__auto__ = switch__37428__auto__(state_40767);
if(cljs.core.keyword_identical_QMARK_(result__37431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37431__auto__;
}
break;
}
}catch (e40811){var ex__37432__auto__ = e40811;
var statearr_40812_42432 = state_40767;
(statearr_40812_42432[(2)] = ex__37432__auto__);


if(cljs.core.seq((state_40767[(4)]))){
var statearr_40813_42433 = state_40767;
(statearr_40813_42433[(1)] = cljs.core.first((state_40767[(4)])));

} else {
throw ex__37432__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42434 = state_40767;
state_40767 = G__42434;
continue;
} else {
return ret_value__37430__auto__;
}
break;
}
});
cljs$core$async$state_machine__37429__auto__ = function(state_40767){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37429__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37429__auto____1.call(this,state_40767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37429__auto____0;
cljs$core$async$state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37429__auto____1;
return cljs$core$async$state_machine__37429__auto__;
})()
})();
var state__37677__auto__ = (function (){var statearr_40819 = f__37676__auto__();
(statearr_40819[(6)] = c__37673__auto___42400);

return statearr_40819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37677__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__40825 = arguments.length;
switch (G__40825) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37673__auto___42450 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37676__auto__ = (function (){var switch__37428__auto__ = (function (state_40867){
var state_val_40868 = (state_40867[(1)]);
if((state_val_40868 === (7))){
var inst_40862 = (state_40867[(2)]);
var state_40867__$1 = state_40867;
var statearr_40872_42451 = state_40867__$1;
(statearr_40872_42451[(2)] = inst_40862);

(statearr_40872_42451[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40868 === (1))){
var inst_40826 = (new Array(n));
var inst_40827 = inst_40826;
var inst_40828 = (0);
var state_40867__$1 = (function (){var statearr_40876 = state_40867;
(statearr_40876[(7)] = inst_40828);

(statearr_40876[(8)] = inst_40827);

return statearr_40876;
})();
var statearr_40877_42453 = state_40867__$1;
(statearr_40877_42453[(2)] = null);

(statearr_40877_42453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40868 === (4))){
var inst_40831 = (state_40867[(9)]);
var inst_40831__$1 = (state_40867[(2)]);
var inst_40833 = (inst_40831__$1 == null);
var inst_40834 = cljs.core.not(inst_40833);
var state_40867__$1 = (function (){var statearr_40880 = state_40867;
(statearr_40880[(9)] = inst_40831__$1);

return statearr_40880;
})();
if(inst_40834){
var statearr_40881_42457 = state_40867__$1;
(statearr_40881_42457[(1)] = (5));

} else {
var statearr_40882_42458 = state_40867__$1;
(statearr_40882_42458[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40868 === (15))){
var inst_40856 = (state_40867[(2)]);
var state_40867__$1 = state_40867;
var statearr_40883_42463 = state_40867__$1;
(statearr_40883_42463[(2)] = inst_40856);

(statearr_40883_42463[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40868 === (13))){
var state_40867__$1 = state_40867;
var statearr_40884_42464 = state_40867__$1;
(statearr_40884_42464[(2)] = null);

(statearr_40884_42464[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40868 === (6))){
var inst_40828 = (state_40867[(7)]);
var inst_40851 = (inst_40828 > (0));
var state_40867__$1 = state_40867;
if(cljs.core.truth_(inst_40851)){
var statearr_40885_42465 = state_40867__$1;
(statearr_40885_42465[(1)] = (12));

} else {
var statearr_40886_42466 = state_40867__$1;
(statearr_40886_42466[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40868 === (3))){
var inst_40864 = (state_40867[(2)]);
var state_40867__$1 = state_40867;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40867__$1,inst_40864);
} else {
if((state_val_40868 === (12))){
var inst_40827 = (state_40867[(8)]);
var inst_40854 = cljs.core.vec(inst_40827);
var state_40867__$1 = state_40867;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40867__$1,(15),out,inst_40854);
} else {
if((state_val_40868 === (2))){
var state_40867__$1 = state_40867;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40867__$1,(4),ch);
} else {
if((state_val_40868 === (11))){
var inst_40845 = (state_40867[(2)]);
var inst_40846 = (new Array(n));
var inst_40827 = inst_40846;
var inst_40828 = (0);
var state_40867__$1 = (function (){var statearr_40891 = state_40867;
(statearr_40891[(7)] = inst_40828);

(statearr_40891[(10)] = inst_40845);

(statearr_40891[(8)] = inst_40827);

return statearr_40891;
})();
var statearr_40892_42470 = state_40867__$1;
(statearr_40892_42470[(2)] = null);

(statearr_40892_42470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40868 === (9))){
var inst_40827 = (state_40867[(8)]);
var inst_40843 = cljs.core.vec(inst_40827);
var state_40867__$1 = state_40867;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40867__$1,(11),out,inst_40843);
} else {
if((state_val_40868 === (5))){
var inst_40838 = (state_40867[(11)]);
var inst_40831 = (state_40867[(9)]);
var inst_40828 = (state_40867[(7)]);
var inst_40827 = (state_40867[(8)]);
var inst_40836 = (inst_40827[inst_40828] = inst_40831);
var inst_40838__$1 = (inst_40828 + (1));
var inst_40839 = (inst_40838__$1 < n);
var state_40867__$1 = (function (){var statearr_40893 = state_40867;
(statearr_40893[(11)] = inst_40838__$1);

(statearr_40893[(12)] = inst_40836);

return statearr_40893;
})();
if(cljs.core.truth_(inst_40839)){
var statearr_40894_42484 = state_40867__$1;
(statearr_40894_42484[(1)] = (8));

} else {
var statearr_40897_42485 = state_40867__$1;
(statearr_40897_42485[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40868 === (14))){
var inst_40859 = (state_40867[(2)]);
var inst_40860 = cljs.core.async.close_BANG_(out);
var state_40867__$1 = (function (){var statearr_40899 = state_40867;
(statearr_40899[(13)] = inst_40859);

return statearr_40899;
})();
var statearr_40900_42490 = state_40867__$1;
(statearr_40900_42490[(2)] = inst_40860);

(statearr_40900_42490[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40868 === (10))){
var inst_40849 = (state_40867[(2)]);
var state_40867__$1 = state_40867;
var statearr_40901_42491 = state_40867__$1;
(statearr_40901_42491[(2)] = inst_40849);

(statearr_40901_42491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40868 === (8))){
var inst_40838 = (state_40867[(11)]);
var inst_40827 = (state_40867[(8)]);
var tmp40898 = inst_40827;
var inst_40827__$1 = tmp40898;
var inst_40828 = inst_40838;
var state_40867__$1 = (function (){var statearr_40902 = state_40867;
(statearr_40902[(7)] = inst_40828);

(statearr_40902[(8)] = inst_40827__$1);

return statearr_40902;
})();
var statearr_40904_42493 = state_40867__$1;
(statearr_40904_42493[(2)] = null);

(statearr_40904_42493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37429__auto__ = null;
var cljs$core$async$state_machine__37429__auto____0 = (function (){
var statearr_40905 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40905[(0)] = cljs$core$async$state_machine__37429__auto__);

(statearr_40905[(1)] = (1));

return statearr_40905;
});
var cljs$core$async$state_machine__37429__auto____1 = (function (state_40867){
while(true){
var ret_value__37430__auto__ = (function (){try{while(true){
var result__37431__auto__ = switch__37428__auto__(state_40867);
if(cljs.core.keyword_identical_QMARK_(result__37431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37431__auto__;
}
break;
}
}catch (e40906){var ex__37432__auto__ = e40906;
var statearr_40907_42494 = state_40867;
(statearr_40907_42494[(2)] = ex__37432__auto__);


if(cljs.core.seq((state_40867[(4)]))){
var statearr_40909_42495 = state_40867;
(statearr_40909_42495[(1)] = cljs.core.first((state_40867[(4)])));

} else {
throw ex__37432__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42497 = state_40867;
state_40867 = G__42497;
continue;
} else {
return ret_value__37430__auto__;
}
break;
}
});
cljs$core$async$state_machine__37429__auto__ = function(state_40867){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37429__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37429__auto____1.call(this,state_40867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37429__auto____0;
cljs$core$async$state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37429__auto____1;
return cljs$core$async$state_machine__37429__auto__;
})()
})();
var state__37677__auto__ = (function (){var statearr_40911 = f__37676__auto__();
(statearr_40911[(6)] = c__37673__auto___42450);

return statearr_40911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37677__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__40919 = arguments.length;
switch (G__40919) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37673__auto___42499 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37676__auto__ = (function (){var switch__37428__auto__ = (function (state_40973){
var state_val_40974 = (state_40973[(1)]);
if((state_val_40974 === (7))){
var inst_40968 = (state_40973[(2)]);
var state_40973__$1 = state_40973;
var statearr_40982_42500 = state_40973__$1;
(statearr_40982_42500[(2)] = inst_40968);

(statearr_40982_42500[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40974 === (1))){
var inst_40921 = [];
var inst_40922 = inst_40921;
var inst_40923 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_40973__$1 = (function (){var statearr_40986 = state_40973;
(statearr_40986[(7)] = inst_40922);

(statearr_40986[(8)] = inst_40923);

return statearr_40986;
})();
var statearr_40987_42501 = state_40973__$1;
(statearr_40987_42501[(2)] = null);

(statearr_40987_42501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40974 === (4))){
var inst_40929 = (state_40973[(9)]);
var inst_40929__$1 = (state_40973[(2)]);
var inst_40930 = (inst_40929__$1 == null);
var inst_40931 = cljs.core.not(inst_40930);
var state_40973__$1 = (function (){var statearr_40992 = state_40973;
(statearr_40992[(9)] = inst_40929__$1);

return statearr_40992;
})();
if(inst_40931){
var statearr_40994_42503 = state_40973__$1;
(statearr_40994_42503[(1)] = (5));

} else {
var statearr_40996_42504 = state_40973__$1;
(statearr_40996_42504[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40974 === (15))){
var inst_40922 = (state_40973[(7)]);
var inst_40959 = cljs.core.vec(inst_40922);
var state_40973__$1 = state_40973;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40973__$1,(18),out,inst_40959);
} else {
if((state_val_40974 === (13))){
var inst_40952 = (state_40973[(2)]);
var state_40973__$1 = state_40973;
var statearr_41000_42505 = state_40973__$1;
(statearr_41000_42505[(2)] = inst_40952);

(statearr_41000_42505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40974 === (6))){
var inst_40922 = (state_40973[(7)]);
var inst_40955 = inst_40922.length;
var inst_40957 = (inst_40955 > (0));
var state_40973__$1 = state_40973;
if(cljs.core.truth_(inst_40957)){
var statearr_41002_42506 = state_40973__$1;
(statearr_41002_42506[(1)] = (15));

} else {
var statearr_41005_42508 = state_40973__$1;
(statearr_41005_42508[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40974 === (17))){
var inst_40965 = (state_40973[(2)]);
var inst_40966 = cljs.core.async.close_BANG_(out);
var state_40973__$1 = (function (){var statearr_41009 = state_40973;
(statearr_41009[(10)] = inst_40965);

return statearr_41009;
})();
var statearr_41010_42509 = state_40973__$1;
(statearr_41010_42509[(2)] = inst_40966);

(statearr_41010_42509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40974 === (3))){
var inst_40970 = (state_40973[(2)]);
var state_40973__$1 = state_40973;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40973__$1,inst_40970);
} else {
if((state_val_40974 === (12))){
var inst_40922 = (state_40973[(7)]);
var inst_40944 = cljs.core.vec(inst_40922);
var state_40973__$1 = state_40973;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40973__$1,(14),out,inst_40944);
} else {
if((state_val_40974 === (2))){
var state_40973__$1 = state_40973;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40973__$1,(4),ch);
} else {
if((state_val_40974 === (11))){
var inst_40922 = (state_40973[(7)]);
var inst_40929 = (state_40973[(9)]);
var inst_40933 = (state_40973[(11)]);
var inst_40941 = inst_40922.push(inst_40929);
var tmp41013 = inst_40922;
var inst_40922__$1 = tmp41013;
var inst_40923 = inst_40933;
var state_40973__$1 = (function (){var statearr_41039 = state_40973;
(statearr_41039[(7)] = inst_40922__$1);

(statearr_41039[(8)] = inst_40923);

(statearr_41039[(12)] = inst_40941);

return statearr_41039;
})();
var statearr_41042_42510 = state_40973__$1;
(statearr_41042_42510[(2)] = null);

(statearr_41042_42510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40974 === (9))){
var inst_40923 = (state_40973[(8)]);
var inst_40937 = cljs.core.keyword_identical_QMARK_(inst_40923,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_40973__$1 = state_40973;
var statearr_41044_42511 = state_40973__$1;
(statearr_41044_42511[(2)] = inst_40937);

(statearr_41044_42511[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40974 === (5))){
var inst_40929 = (state_40973[(9)]);
var inst_40933 = (state_40973[(11)]);
var inst_40923 = (state_40973[(8)]);
var inst_40934 = (state_40973[(13)]);
var inst_40933__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_40929) : f.call(null,inst_40929));
var inst_40934__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_40933__$1,inst_40923);
var state_40973__$1 = (function (){var statearr_41062 = state_40973;
(statearr_41062[(11)] = inst_40933__$1);

(statearr_41062[(13)] = inst_40934__$1);

return statearr_41062;
})();
if(inst_40934__$1){
var statearr_41063_42512 = state_40973__$1;
(statearr_41063_42512[(1)] = (8));

} else {
var statearr_41064_42513 = state_40973__$1;
(statearr_41064_42513[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40974 === (14))){
var inst_40929 = (state_40973[(9)]);
var inst_40933 = (state_40973[(11)]);
var inst_40946 = (state_40973[(2)]);
var inst_40948 = [];
var inst_40949 = inst_40948.push(inst_40929);
var inst_40922 = inst_40948;
var inst_40923 = inst_40933;
var state_40973__$1 = (function (){var statearr_41071 = state_40973;
(statearr_41071[(14)] = inst_40946);

(statearr_41071[(7)] = inst_40922);

(statearr_41071[(8)] = inst_40923);

(statearr_41071[(15)] = inst_40949);

return statearr_41071;
})();
var statearr_41072_42514 = state_40973__$1;
(statearr_41072_42514[(2)] = null);

(statearr_41072_42514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40974 === (16))){
var state_40973__$1 = state_40973;
var statearr_41075_42515 = state_40973__$1;
(statearr_41075_42515[(2)] = null);

(statearr_41075_42515[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40974 === (10))){
var inst_40939 = (state_40973[(2)]);
var state_40973__$1 = state_40973;
if(cljs.core.truth_(inst_40939)){
var statearr_41087_42516 = state_40973__$1;
(statearr_41087_42516[(1)] = (11));

} else {
var statearr_41093_42517 = state_40973__$1;
(statearr_41093_42517[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40974 === (18))){
var inst_40962 = (state_40973[(2)]);
var state_40973__$1 = state_40973;
var statearr_41097_42518 = state_40973__$1;
(statearr_41097_42518[(2)] = inst_40962);

(statearr_41097_42518[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40974 === (8))){
var inst_40934 = (state_40973[(13)]);
var state_40973__$1 = state_40973;
var statearr_41102_42519 = state_40973__$1;
(statearr_41102_42519[(2)] = inst_40934);

(statearr_41102_42519[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37429__auto__ = null;
var cljs$core$async$state_machine__37429__auto____0 = (function (){
var statearr_41104 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41104[(0)] = cljs$core$async$state_machine__37429__auto__);

(statearr_41104[(1)] = (1));

return statearr_41104;
});
var cljs$core$async$state_machine__37429__auto____1 = (function (state_40973){
while(true){
var ret_value__37430__auto__ = (function (){try{while(true){
var result__37431__auto__ = switch__37428__auto__(state_40973);
if(cljs.core.keyword_identical_QMARK_(result__37431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37431__auto__;
}
break;
}
}catch (e41112){var ex__37432__auto__ = e41112;
var statearr_41120_42523 = state_40973;
(statearr_41120_42523[(2)] = ex__37432__auto__);


if(cljs.core.seq((state_40973[(4)]))){
var statearr_41125_42524 = state_40973;
(statearr_41125_42524[(1)] = cljs.core.first((state_40973[(4)])));

} else {
throw ex__37432__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42525 = state_40973;
state_40973 = G__42525;
continue;
} else {
return ret_value__37430__auto__;
}
break;
}
});
cljs$core$async$state_machine__37429__auto__ = function(state_40973){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37429__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37429__auto____1.call(this,state_40973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37429__auto____0;
cljs$core$async$state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37429__auto____1;
return cljs$core$async$state_machine__37429__auto__;
})()
})();
var state__37677__auto__ = (function (){var statearr_41126 = f__37676__auto__();
(statearr_41126[(6)] = c__37673__auto___42499);

return statearr_41126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37677__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
