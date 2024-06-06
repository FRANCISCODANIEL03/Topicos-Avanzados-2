const staticPage="dev-user-site-v1"

const assets= [
    "/",
    "/index.html",
    "/js/allData.js",
    "/js/createData.js",
    "/resources/svgDelete.svg",
    "/resources/svgUpdate.svg",
    "/resources/svgSave.svg",
    "/pages/createData.html"
]

self.addEventListener("install", (installEvent)=>{
    installEvent.waitUntil(
        caches.open(staticPage).then((cache)=>{
            cache.addAll(assets);
        })
    );
})

self.addEventListener("fetch", (fetchEvent)=>{
    fetchEvent.respondWith(
        caches.match(fetchEvent.request)
        .then((response)=>{
            return response || fetch(fetchEvent.request)
        })
    )
});
if("serviceWorker" in navigator){
    window.addEventListener("load", ()=>{
        navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res=>{console.log("serviceWorker registrado")})
        .catch(err=>{console.log("serviceWorker no registrado")})
        //console.log(navigator.geolocation, navigator.userAgent, navigator.language, navigator.permissions)

    })
}