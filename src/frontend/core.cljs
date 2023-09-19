(ns frontend.core)

(println "Hello, World!!")


(-> js/document
    (.getElementById "app")
    (.-innerHTML)
    (set! "<h1>Hello, World!!!!</h1>"))
