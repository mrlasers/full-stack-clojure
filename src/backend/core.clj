(ns backend.core
  (:require [ring.adapter.jetty :as jetty]
            [ring.util.response :as res]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [reitit.ring :as ring]
            [hiccup2.core :refer [html raw]]
            [cognitect.transit :as transit]
            [common.transit :as t]
            [clojure.java.io :as io]))

(t/transit-out {:hello :world})

(defn transit-out [data]
  (let [out (java.io.ByteArrayOutputStream. 4096)
        writer (transit/writer out :json)]
    (transit/write writer data)
    (.toString out)))

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

(defn page-template
  ([] (page-template nil))
  ([preloaded-state]
   (html (raw "<!DOCTYPE html>")
         [:html
          [:head
           [:meta {:charset "utf-8"}]
           [:title "Full-Stack Clojure"]
           [:script {:src "/js/main.js" :defer true}]
           (when preloaded-state
             [:meta {:id "__preloaded_state__"
                     :value (transit-out preloaded-state)}]
             #_(raw "<meta id=\"__preloaded_state__\">"
                  (transit-out preloaded-state) "</meta>"))]
          [:body [:div#app]]])))

(defn home-route-handler [request]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body (str (page-template #{:hello :world}))
   #_(some->> "public/index.html"
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
