(ns user
  (:require [shadow.cljs.devtools.api :as shadow]
            [shadow.cljs.devtools.server :as server]
            [backend.core :refer [-main] :rename {-main start-server}]))

(defn clj-repl []
  (start-server))

(defn cljs-repl
  ([] (cljs-repl :app))
  ([build-id]
   (server/start!)
   (shadow/watch build-id)
   (shadow/nrepl-select build-id)))
