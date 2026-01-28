document.getElementById("Hound").addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  const results = await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: extractLinks
  });

  const { js_files, links } = results[0].result

  let jsItems = document.getElementById("js-items")
  let jsBadge = document.getElementById("js-badge")
  
  let linkItems = document.getElementById("link-items")
  let linkBadge = document.getElementById("links-badge")

  jsItems.innerHTML = ""
  linkItems.innerHTML = ""

  jsBadge.textContent = js_files.length
  linkBadge.textContent = links.length

  for (js of js_files){
    jsItems.innerHTML += `
        <li>${js}</li>
    `
  }
  for (link of links){
    linkItems.innerHTML += `
        <li>${link}</li>
    `
  }

});


const STATIC_EXTENSIONS = [
".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg",
".mp4", ".webm", ".mov",
".mp3", ".wav", ".ogg",
".woff", ".woff2", ".ttf", ".eot",
".css", ".ico"
];

function isStaticFile(url) {
    return STATIC_EXTENSIONS.some(ext =>
    url.toLowerCase().endsWith(ext));
}


function extractLinks(){
    function isStringObject(str) {
    try {
        const parsed = JSON.parse(str);
        return parsed !== null && typeof parsed === 'object' && !Array.isArray(parsed);
    } catch (e) {
        return false;
    }
    }


    links = [];
    js_files = [];
    
    document.querySelectorAll("[src]").forEach((el) => {
        let link = el.src
        if (typeof link === "string") {
            if (!links.includes(link)) links.push(link)
        } 
        
    });

    document.querySelectorAll("[href]").forEach((el) => {
        let link = el.href
        if (typeof link === "string") {
            if (!links.includes(link)) links.push(link)
        } 
        
    });
    
    document.querySelectorAll("[action]").forEach((el) => {
        let link = el.action
        if (typeof link === "string") {
            if (!links.includes(link)) links.push(link)
        } 
        
    });
    
    for (let link of links){
        if (!isStringObject(link)){
            console.log(link)
            if (link.endsWith(".js") && !js_files.includes(link)){
                js_files.push(link)
            }
        }
    }

    links = links.filter(link => !js_files.includes(link));

    links.sort((a, b) => a.length - b.length);
    js_files.sort((a, b) => a.length - b.length);


    return {
        links,
        js_files
    };

}
