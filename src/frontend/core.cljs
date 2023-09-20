(ns frontend.core
  (:require [reagent.dom :as reagent-dom]
            [common.transit :refer [transit-in transit-out]]))

(defn user-box []
  [:div.user-box
   [:form
    [:input {:type :text :name :username
             :placeholder "jonboi420"}]
    [:input {:type :password :name :password
             :placeholder "sekrit-password-123"}]
    [:button {:type :submit} "Login"]]])

(defn header []
  [:header
   [:div.logo "Full-Stack"]
   [:nav [:ul
          [:li [:a {:href "/"} "Home"]]
          [:li [:a {:href "/dashboard"} "Dashboard"]]
          [:li [:a {:href "/about"} "About"]]]]
   [user-box]])

(defn app []
  [:div
   [header]
   [:main
    [:h1 "Hello, World!!!!!!~"]
    [:p "Welcome to the world."]]])

(defn get-preloaded-state []
  (some-> js/document
          (.getElementById "__preloaded_state__")
          (.getAttribute "value")
          transit-in))

(defn ^:dev/after-load start []
  (println "starting...")
  (println "Preloaded State:" (get-preloaded-state))
  (let [root-element (.getElementById js/document "app")]
    (reagent-dom/render [app] root-element) ))

(defn init []
  (start))

(defn ^:dev/before-load stop []
  (println "stopping..."))
