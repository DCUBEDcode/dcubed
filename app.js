var tabsActiveClass = "tabs--active-";

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
    htmlPreview.append(markup);
    PR.prettyPrint();
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
