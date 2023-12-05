(ns common.views.home-page
  #?(:cljs (:require [reitit.frontend.easy :refer [href]])))

#?(:clj (def href identity))

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
          [:li [:a {:href (href ::homepage)} "Home"]]
          [:li [:a {:href (href ::dashboard)} "Dashboard"]]
          [:li [:a {:href "/about"} "About"]]]]
   (user-box)])

(defn home-page []
  [:main
   [:h1 "Welcome Home"]
   [:p "This is your home page."]])

(defn app-wrapper [body]
  [:<>
   (header)
   body])
