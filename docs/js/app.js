"use strict";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function insertNumbers(e){for(var t=e.querySelectorAll(".item").length,r=0;r<t;r++){var n=document.createElement("div");n.classList.add("numbertext"),n.innerText=r+1+" / "+t,e.querySelectorAll(".item")[r].append(n)}}function insertDots(r){var e=document.createElement("div");e.classList.add("dots"),r.append(e),r.querySelectorAll(".item").forEach(function(e){var t=document.createElement("div");t.classList.add("dot"),r.querySelector(".dots").append(t)})}function plusItem(e){var t=currentItem(e);e.querySelectorAll(".item")[t].nextElementSibling.classList.contains("item")?showItems(e,t+1):showItems(e,0)}function minusItem(e){var t=currentItem(e);null!=e.querySelectorAll(".item")[t].previousElementSibling?showItems(e,t-1):showItems(e,e.querySelectorAll(".item").length-1)}function currentItem(e){return _toConsumableArray(e.querySelectorAll(".item")).findIndex(function(e){return"block"==e.style.display})}function showItems(e,t){null!=e.querySelectorAll(".item")[currentItem(e)]&&(e.querySelectorAll(".item")[currentItem(e)].style.display="none"),e.querySelectorAll(".item")[t].style.display="block",null!=e.querySelector(".dot.active")&&e.querySelector(".dot.active").classList.remove("active"),e.querySelectorAll(".dot")[t].classList.add("active")}document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".carousel-container").forEach(function(r){insertNumbers(r),r.querySelector(".prev").addEventListener("click",function(e){minusItem(r)}),r.querySelector(".next").addEventListener("click",function(){plusItem(r)}),insertDots(r),r.querySelectorAll(".dot").forEach(function(e){e.addEventListener("click",function(e){var t=Array.prototype.indexOf.call(e.target.parentNode.children,e.target);showItems(r,t)})}),showItems(r,0)})});
//# sourceMappingURL=maps/app.js.map
