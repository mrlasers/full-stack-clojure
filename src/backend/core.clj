(ns backend.core
  (:require [ring.adapter.jetty :as jetty]
            [ring.util.response :as res]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [reitit.ring :as ring]
            [hiccup2.core :refer [html]]
            [clojure.java.io :as io]))

(def js-resources-handler
  (ring/create-resource-handler
   {:root "/public/js"
    :path "/js"
    :not-found-handler (res/not-found "js file not found")}))

(def default-handler
  (ring/create-default-handler
   {:not-found (constantly
                {:status 418
                 :body (-> [:div "I'm a little teapot! Also, 404."]
                           html
                           str)})}))

(defn home-route-handler [request]
  {:status 200
   :body (some->> "public/index.html"
                  io/resource
                  slurp)})

(def site-config
  (update site-defaults
          :security assoc :anti-forgery false))

(defn app []
  (ring/ring-handler
   (ring/router
    [["/" home-route-handler]]
    {:data {:middleware [[wrap-defaults site-config]]}})
   (ring/routes
    js-resources-handler
    default-handler
    (ring/redirect-trailing-slash-handler))))

(def server (atom nil))

(defn stop-server []
  (when @server (reset! server (.stop @server))))

(defn start-server
  ([] (start-server 9876))
  ([port]
   (stop-server)
   (reset! server (jetty/run-jetty
                   (fn [request] ((app) request))
                   {:port port :join? false}))))

(defn -main []
  (println "Hello, World!"))

(comment
  (start-server)
  (stop-server))
