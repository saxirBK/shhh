const adSelectors = [
    "iframe[src*='ads']",
    "div[class*='ad-']",
    "div[id*='ad-']",
    "[aria-label='Anuncios']"
  ];
  
  function removeAds() {
    adSelectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(ad => ad.remove());
    });
  }
  
  setInterval(removeAds, 2000);
