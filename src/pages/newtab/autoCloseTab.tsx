let tabInactive = false;
let timeoutId;
function startTimer() {
  timeoutId = setTimeout(closeTab, 500);
}
function closeTab() {
  if (!document.hasFocus()) {
    tabInactive = true;
    window.close();
  }
}
function cancelTimer() {
  clearTimeout(timeoutId);
  if (tabInactive) {
    tabInactive = false;
    startTimer();
  }
}
window.addEventListener("blur", startTimer);
window.addEventListener("mousemove", cancelTimer);
// window.onload = () => startTimer();
