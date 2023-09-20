(ns common.transit
  (:require [cognitect.transit :as transit]
            [cljc.java-time.instant :as i]
            [cljc.java-time.local-date :as ld]
            [cljc.java-time.local-time :as lt]
            [cljc.java-time.local-date-time :as ldt]
            [cljc.java-time.zoned-date-time :as zdt]
            [java.time :refer [Instant LocalDate LocalTime LocalDateTime
                               ZonedDateTime]]))

(def write-handlers
  {Instant (transit/write-handler (constantly "instant") i/to-string)
   LocalDate (transit/write-handler (constantly "ld") ld/to-string)
   LocalTime (transit/write-handler (constantly "lt") lt/to-string)
   LocalDateTime (transit/write-handler (constantly "ldt") ldt/to-string)
   ZonedDateTime (transit/write-handler (constantly "zdt") zdt/to-string)
   })

(def read-handlers
  "TODO: why do the parsers (except for i/parse) have to be wrapped in
  function literal to avoid 'formatter.parse is not a function' error?"
  {"instant" #(i/parse %)
   "ld" #(ld/parse %)
   "lt" #(lt/parse %)
   "ldt" #(ldt/parse %)
   "zdt" #(zdt/parse %)})

(defn transit-out [data]
  (let [writer (transit/writer :json {:handlers write-handlers})]
    (transit/write writer data)))

(defn transit-in [data]
  (let [reader (transit/reader :json {:handlers read-handlers})]
    (transit/read reader data)))

(comment

  (-> {:hello :world
       :name/first "John"
       :name/last "Boyd"
       :i (i/now)
       :ld (ld/now)
       :lt (lt/now)
       :ldt (ldt/now)
       :zdt (zdt/now)}
      transit-out
      transit-in)

  (let [data {:hello :world
              :name/first "John"
              :name/last "Boyd"
              :i (i/now)
              :ld (ld/now)
              :lt (lt/now)
              :ldt (ldt/now)
              :zdt (zdt/now)
              }
        out (transit-out data)
        in (transit-in out)]
    (when-not (= data in)
      {:data data :result in}))

  (transit-out {:hello :world})

  )















