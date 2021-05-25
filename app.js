if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register('/maths_masters/serviceWorker.js', {scope: '/maths_masters/'})
      .then(registration => {
          console.log("service worker registered");
      }).catch(error => {
          console.log("service worker not registered", error);
  })
}