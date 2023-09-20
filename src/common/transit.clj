(ns common.transit
  (:require [cognitect.transit :as transit]
            [cljc.java-time.instant :as i]
            [cljc.java-time.local-date :as ld]
            [cljc.java-time.local-time :as lt]
            [cljc.java-time.local-date-time :as ldt]
            [cljc.java-time.zoned-date-time :as zdt]
            [clojure.java.io :as io]
            [clojure.string :as str])
  (:import [java.io ByteArrayOutputStream]
           [java.time Instant LocalDate LocalTime LocalDateTime
            ZonedDateTime]))

(def write-handlers
  {Instant (transit/write-handler (constantly "instant") i/to-string)
   LocalDate (transit/write-handler (constantly "ld") ld/to-string)
   LocalTime (transit/write-handler (constantly "lt") lt/to-string)
   LocalDateTime (transit/write-handler (constantly "ldt") ldt/to-string)
   ZonedDateTime (transit/write-handler (constantly "zdt") zdt/to-string)})

(def read-handlers
  {"instant" (transit/read-handler i/parse)
   "ld" (transit/read-handler ld/parse)
   "lt" (transit/read-handler lt/parse)
   "ldt" (transit/read-handler ldt/parse)
   "zdt" (transit/read-handler zdt/parse)})

(defn transit-out [data]
  (let [out (ByteArrayOutputStream. 4096)
        writer (transit/writer out :json {:handlers write-handlers})]
    (transit/write writer data)
    (str out)))

(defn transit-in [data]
  (let [in (io/input-stream (.getBytes data))
        reader (transit/reader in :json {:handlers read-handlers})]
    (transit/read reader)))

(comment
  (let [data {:i (i/now)
              :ld (ld/now)
              :lt (lt/now)
              :ldt (ldt/now)
              :zdt (zdt/now)}
        result (transit-in (transit-out data))]
    (when-not (= data result)
      {:data data
       :result result})))

