function expand(state){
  document.querySelectorAll(".snippet").forEach(function(el) {
    el.open = state;
  });
}
function html2text(targetEl) {
  let target = targetEl || ".snippet";
  document.querySelectorAll(target).forEach(function(el) {
    let codeEl = el.querySelector("code.sample");
    let sampleResultEl = el.querySelector(".sample-render");
    sampleResultEl.innerHTML = codeEl.innerHTML;
  });
  document.querySelectorAll("code").forEach(function(element) {
  element.innerHTML = element.innerHTML.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
  });
}
function getStyle(){
  let style = document.querySelector('style').innerHTML;
  style = style.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  document.querySelector('#source').innerHTML = style;
  document.querySelector('#codeWrapper').style.display="block";
  document.querySelector('#codeWrapper').scrollIntoView();
  hljs.highlightAll();
}