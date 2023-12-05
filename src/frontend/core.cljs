(ns frontend.core
  (:require [reagent.dom :as reagent-dom]
            [reagent.core :as r]
            [reitit.frontend :as rf]
            [reitit.frontend.easy :as rfe]
            ;; [common.views.home-page :refer [home-page]]
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
          [:li [:a {:href (rfe/href ::homepage)} "Home"]]
          [:li [:a {:href (rfe/href ::dashboard)} "Dashboard"]]
          [:li [:a {:href "/about"} "About"]]]]
   [user-box]])

(defn home-page []
  [:<>
   [:h1 "Welcome, Home."]
   [:p "Hello, World!"]])

(defn dashboard []
  [:<>
   [:h1 "Dashboard"]
   [:p "Here's where your dashboard controls will be."]])

(defn about-view []
  [:<>
   [:h1 "About This App"]
   [:p "This is an app by Timothy Pew."]])

;; adding reitit frontend routing
(defonce match (r/atom nil))

(def routes
  [["/" {:name ::homepage
         :view home-page}]
   ["/dashboard" {:name ::dashboard
                  :view dashboard}]
   ["/about" {:name ::about
              :view about-view}]])

(defn app []
  [:<>
   [header]
   (when-let [view (:view (:data @match))]
     #_[view @match]
     [:main [view @match]])])


(defn get-preloaded-state []
  (some-> js/document
          (.getElementById "__preloaded_state__")
          (.getAttribute "value")
          transit-in))

(defn ^:dev/after-load start []
  (println "starting...")
  (println "Preloaded State:" (get-preloaded-state))
  (let [root-element (.getElementById js/document "app")]
    (rfe/start!
     (rf/router routes {})
     (fn [m] (reset! match m))
     {:use-fragment false})
    (reagent-dom/render [app] root-element)
    ))

(defn init []
  (start))

(defn ^:dev/before-load stop []
  (println "stopping..."))
