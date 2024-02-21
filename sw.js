const CACHE_ELEMENTS = [
    "./",
    "https://unpkg.com/react@18/umd/react.production.min.js",
    "https://unpkg.com/react-dom@18/umd/react-dom.production.min.js",
    "https://unpkg.com/@babel/standalone/babel.min.js",
    "style.css",
    "./components/Contador.js",
    "./index.js"
]

const CACHE_NAME = "version 2.5"

self.addEventListener("install", (e)=>{
    e.waitUntil(
        caches.open(CACHE_NAME)
        .then((cache)=>{
            cache.addAll(CACHE_ELEMENTS)
            .then(()=>{
                self.skipWaiting()
            }).catch(console.log())
        })
    )
})

self.addEventListener("activate", (e)=>{
    const cacheWhiteList = [CACHE_NAME]
    e.waitUntil(
        caches.keys().then((cacheNames)=>{
            return Promise.all(cacheNames.map((cacheNames=>{
                return cacheWhiteList.indexOf(cacheNames) === -1 && caches.delete(cacheNames)
            })
            ))
        }).then(()=>self.clients.claim())
    )
}) 
 

self.addEventListener("fetch", (e) => {
  e.repondWith(
    caches.match(e.request).then((res)=>{
        res ? res : fetch(e.request)
    })
  )
}
) 