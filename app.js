var acc = document.getElementsByClassName('accordion');

var i;

for(i = 0; i < acc.length; i++){
    acc[i].addEventListener('click', function(){
        this.classList.toggle("active");
        
        var panel = this.nextElementSibling;
        var padding = "18";
        if(panel.style.maxHeight){
            panel.style.maxHeight = null;
            panel.style.padding = null;
        } else {
          panel.style.padding = padding + "px";
          panel.style.maxHeight = panel.scrollHeight + "px";
          // panel.style.padding = padding + "px";
        }
        
    })
}