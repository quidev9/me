bg = document.getElementById('bg')

bg.style.backgrounAttachment = "fixed";
var heit = 100;
var globalScrollY = 1;
window.onscroll = function() {
    console.log(this.scrollY)
    if(this.scrollY > globalScrollY && this.scrollY < 502) {
        heit+=1
        globalScrollY = this.scrollY

        bg.style.height = `${heit}%`
    }
    else if (this.scrollY < globalScrollY && heit > 102){
        
        heit-=2

        globalScrollY = this.scrollY
        bg.style.height = `${heit}%`
    }
    
}

