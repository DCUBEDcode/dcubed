var tabsActiveClass = "tabs--active-";
var codeLoaded = false;

document.addEventListener("DOMContentLoaded", function(e) {
  var showCode = document.getElementById("show-code"),
    body = document.querySelector("body"),
    hideCode = document.getElementById("hide-code"),
    shelfOpenClass = "shelf-open",
    htmlPreview = document.getElementById("html-preview"),
    cssPreview = document.getElementById("css-preview"),
    tabs = document.getElementById("tabs"),
    tabBtns = document.querySelectorAll(".tabs__tab");

  showCode.addEventListener("click", function(e) {
    var markup = document.documentElement.innerHTML;
    body.classList.add(shelfOpenClass);
    if(!codeLoaded) {
      htmlPreview.append(markup);
      PR.prettyPrint();
      codeLoaded = true;
      fetch("styles/dcubed.css").then(function(res) {
        console.log(res);
        return res.blob();
      }).then(function(data) {
        console.log(data);
      })
    }
  });

  hideCode.addEventListener("click", function(e) {
    var shelfIsOpen = body.classList.contains(shelfOpenClass);
    if(shelfIsOpen) {
      body.classList.remove(shelfOpenClass);
    }
  });

  tabBtns.forEach(function(tab) {
    tab.addEventListener("click", function(e) {
      var id = e.currentTarget.dataset.tabId;
      e.preventDefault();
      tabs.setAttribute("class", "tabs");
      tabs.classList.add(tabsActiveClass + id);
    })
  });

});
