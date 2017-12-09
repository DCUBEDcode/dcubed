var tabsActiveClass = "tabs--active-";
var codeLoaded = false;

document.addEventListener("DOMContentLoaded", function(e) {
  var showCode = document.getElementById("show-code"),
    body = document.querySelector("body"),
    hideCode = document.getElementById("hide-code"),
    shelfOpenClass = "shelf-open",
    htmlPreview = document.getElementById("html-preview"),
    cssPreview = document.getElementById("css-preview"),
    jsPreview = document.getElementById("js-preview"),
    tabs = document.getElementById("tabs"),
    tabBtns = document.querySelectorAll(".tabs__tab"),
    markup = document.documentElement.innerHTML;

  showCode.addEventListener("click", function(e) {
    body.classList.add(shelfOpenClass);
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

  // Load HTML into tabs
  htmlPreview.append(markup);

  // Load CSS into tabs
  fetch("styles/dcubed.css").then(function(res) {
    return res.text();
  }).then(function(data) {
    cssPreview.append(data);
  })

  // Load JS into tabs
  fetch("./app.js").then(function(res) {
    return res.text();
  }).then(function(data) {
    jsPreview.append(data);
  })

});
