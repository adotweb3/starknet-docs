function switch_style(t){var e,a;for("toggle"==t&&(t="Default"==window.localStorage.getItem("data-theme")?"Dark":"Default"),e=0,a=document.getElementsByTagName("link");e<a.length;e++)-1!=a[e].rel.indexOf("stylesheet")&&a[e].title&&(a[e].disabled=!0,a[e].title==t&&(a[e].disabled=!1)),set_localstorage(t);document.documentElement.setAttribute("data-theme","Dark"===t?"dark":"light")}function set_style_from_localstorage(t){(t=t||"Default").length&&switch_style(t)}function set_localstorage(t){"Dark"==t?window.localStorage.setItem("data-theme","Dark"):window.localStorage.setItem("data-theme","Default")}!function(){"use strict";var t=document.querySelectorAll("img");for(var e=0;e<t.length;e++)t[e].classList.contains("copy-icon")||t[e].classList.contains("pencil")||function t(e,a){if(0<=e.className.split(" ").indexOf(a))return!0;try{return e.parentNode&&t(e.parentNode,a)}catch(t){return!1}}(t[e],"overview-box")||t[e].setAttribute("data-zoomable","true");mediumZoom("[data-zoomable]");var a=window.localStorage.getItem("data-theme");a.length?set_style_from_localstorage(a):set_style_from_localstorage("Default")}(),console.log(uiRootPath);