const pageData = {
  conceitos: {}
}
const opts = {
    ui: {
        pagePath: true,        
    },
    page: {
      zoom: Math.round(window.devicePixelRatio * 100),
      url: "",
    },
    footer: {
        links: [
            { name: "home", url: "/" },
            { name: "flex", url: "/flex" },
            { name: "grid", url: "/grid" },
            { name: "js", url: "/js" },
        ]
    }
}
function setConceitos(){
  let wrapper = document.querySelector("#definitions");
  if(wrapper){
      let html = "";
      for(const [key,val] of Object.entries(pageData.conceitos)){
        html += `<p class='topic'>${key}</p>`;
        html += `<dl>`;
        let terms = Object.entries(val);
        
        for(const [k,v] of terms){
          html += `<dt>${k}</dt>`;
          html += `<dd>${v.def}</dd>`;
        }
        html+= "</dl>";
      }
      wrapper.innerHTML = html;
  }
  // else{
  //     console.log('! conceitos nao existe');
  // }
}
function getData(){
  fetch('./resources/__data.json')
    .then(res => res.json())
    .then(data => {
      pageData.conceitos = data.conceitos;
      setConceitos();
    });
}
function setTitle(){
    let title = 
        document.querySelector("header .title") 
        || document.querySelector("#title");
    if(title){
        document.title = title.textContent;
        console.log('title:',title.textContent);
    }
    // else{
    //     console.log('! title not found');
    // }
}

function setFooter(){
    let footer = document.querySelector("footer");
    if(footer){
        let links = opts.footer.links;
        let html = "";
        for(let i = 0; i < links.length; i++){
            html += `<a href="${links[i].url}">${links[i].name}</a>`;
        }
        footer.innerHTML = html;
    }
    // else{
    //     console.log('! footer not found');
    // }
}
function setPath(){
  opts.page.url = window.location.pathname;
  if(opts.ui.pagePath) {
    document.querySelector("#path").innerHTML = opts.page.url;
  }
}
function setPage(page){
  console.log('[init page]');
  setPath();
  if(opts.page.url === "/index.html"){
    getData();
  }
  setFooter();
  setTitle();
}
window.onload = function(){
    setPage();
}