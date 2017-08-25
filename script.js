// JavaScript source code
function showToolTip(num) {
  var tooltipitem = "tooltipitem" + num;
  var menuitemname = "menuitem" + num;
  var tooltip = document.getElementById(tooltipitem);
  var menuitem = document.getElementById(menuitemname);

  tooltip.style.visibility = "visible";
  menuitem.className = "animation" + num;
}
function hideToolTip(num) {
  var tooltipitem = "tooltipitem" + num;
  var menuitemname = "menuitem" + num;
  var tooltip = document.getElementById(tooltipitem);
  var menuitem = document.getElementById(menuitemname);

  tooltip.style.visibility = "hidden";
  menuitem.className = "";
}
function highlightHeaderItem(num) {
  var headeraName = "headera" + num;
  var headera = document.getElementById(headeraName);
  headera.className = "headerAnimation";
}
function unhighlightHeaderItem(num) {
  var headeraName = "headera" + num;
  var headera = document.getElementById(headeraName);
  headera.className = "";
}
