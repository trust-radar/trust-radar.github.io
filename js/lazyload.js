KEEP.initLazyLoad=()=>{const t=document.querySelectorAll("img");let e=Date.now(),n=!0;function o(t){e=Date.now(),n=Array.from(t).some(t=>t.hasAttribute("lazyload"));const o=window.innerHeight,a=document.documentElement.scrollTop||document.body.scrollTop;t.forEach(e=>{if(e.hasAttribute("lazyload")&&!e.hasAttribute("loading")&&o+a>e.offsetTop){e.setAttribute("loading",!0);const n=setTimeout(()=>{const t=new Image,o=e.getAttribute("data-src");t.src=o,t.onload=()=>{e.src=o,e.removeAttribute("lazyload"),e.removeAttribute("loading"),clearTimeout(n)}},500)}})}o(t),window.onscroll=()=>{50<Date.now()-e&&n&&o(t)}};