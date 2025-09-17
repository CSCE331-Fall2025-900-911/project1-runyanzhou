function toggleStyleSheet(){
    var styleElement = document.getElementById("mainStyleSheet");
    var currentStyle = styleElement.getAttribute("href");
    var newStyle = "";
    if (currentStyle === "./styles.css") {
        newStyle = "./styles2.css";
    }
    else 
    {
        newStyle = "./styles.css";
    }
    styleElement.setAttribute("href", newStyle);

    localStorage.setItem("style", newStyle);
  
}


window.onload = function(){
    var style = localStorage.getItem("style");
    var styleElement = document.getElementById("mainStyleSheet");
    if(style){
        styleElement.setAttribute("href", style);
    }
}