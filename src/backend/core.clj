(ns backend.core
  (:require [ring.adapter.jetty :as jetty]
            [ring.util.response :as res]
            [reitit.ring :as ring]
            [clojure.java.io :as io]))

(defn app []
  (ring/ring-handler
   (ring/router
    ["/" (fn [request] {:status 200
                        :body (some->> "public/index.html"
                                       io/resource
                                       slurp)})])
   (ring/routes
    (ring/create-resource-handler
     {:root "/public/js"
      :path "/js"
      :not-found-handler (res/not-found "js file not found")})
    (ring/create-default-handler
     {:not-found
      (constantly {:status 418
                   :body "I'm a little teapot! Also, 404."})})
    (ring/redirect-trailing-slash-handler)
    )))

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
