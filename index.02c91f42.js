!function(){var e=document.querySelector(".breed-select"),t=document.querySelector(".loader"),n=document.querySelector(".error"),c=document.querySelector(".cat-info");document.addEventListener("DOMContentLoaded",(function(){t.removeAttribute("hidden");return fetch("".concat("https://api.thecatapi.com/v1/breeds","?api_key=").concat("live_h2A905RVIysndf8BRqQ3XQtorbR6H8F5eKw7XCIXIhcdpS55v7e2vUHQLO5vfWgW")).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})).then((function(n){t.setAttribute("hidden","hidden"),e.insertAdjacentHTML("afterbegin",n.map((function(e){var t=e.id,n=e.name;return"\n  <option value=".concat(t,">").concat(n,"</option>\n    ")})).join(""))})).catch((function(e){console.log(e),n.removeAttribute("hidden"),t.setAttribute("hidden","hidden")}))})),e.addEventListener("change",(function(e){!function(e){var t="live_h2A905RVIysndf8BRqQ3XQtorbR6H8F5eKw7XCIXIhcdpS55v7e2vUHQLO5vfWgW";fetch("".concat("https://api.thecatapi.com/v1/images/search","?breed_ids=").concat(e,"&api_key=").concat(t)).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})).then((function(e){var t=e[0],n=t.url,o=t.breeds;c.innerHTML="<img src=".concat(n," alt=").concat(o[0].name," width=400 /><h2>").concat(o[0].name,"</h2><p>").concat(o[0].description,"</p><p><b>Temperament </b>").concat(o[0].temperament,"</p>")})).catch((function(e){return console.log(e)}))}(e.currentTarget.value)}))}();
//# sourceMappingURL=index.02c91f42.js.map
