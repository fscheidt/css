function expand(state){
  document.querySelectorAll(".snippet").forEach(function(el) {
    el.open = state;
  });
}
function html2text(targetEl) {
  let target = targetEl || ".snippet";
  document.querySelectorAll(target).forEach(function(el) {
    let codeEl = el.querySelector("code.sample");
    let sampleResultEl = el.querySelector(".sample-result");
    sampleResultEl.innerHTML = codeEl.innerHTML;
  });
  document.querySelectorAll("code").forEach(function(element) {
  element.innerHTML = element.innerHTML.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
  });
}