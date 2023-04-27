
document.getElementById('body').innerHTML += "<div id='colors' class='colors'></div>"

document.getElementById('colors').innerHTML += "<div id='color_1' class='color_1'></div>"
document.getElementById('body').innerHTML += "<div id='color_2' class='color_1'></div>"
document.getElementById('body').innerHTML += "<div id='color_3' class='color_1'></div>"
document.getElementById('body').innerHTML += "<div id='color_4' class='color_1'></div>"


buttonColor = document.getElementsByClassName('color_1');
buttonColor[0].addEventListener('click', change_color);
buttonColor[1].addEventListener('click', change_color);
buttonColor[2].addEventListener('click', change_color);
buttonColor[3].addEventListener('click', change_color);

//меняем bg
color1 = buttonColor[0];
color2 = buttonColor[1];
color3 = buttonColor[2];
color4 = buttonColor[3];


color1.style.background = "linear-gradient(to bottom right, #75D1CD, #F594D9)"

color2.style.background = "linear-gradient(to bottom right, #D6D275, #CC2D27)"

color2.style.position = "absolute";
color2.style.right = "-10px";
color2.style.top = "1970px";

color3.style.background = "linear-gradient(to bottom left, #44E176, #6CE0A6)"



color4.style.background = "linear-gradient(to bottom left, #99ABD1, #27F5DD)"
color4.innerText = "click me";
color4.style.visibility = "hidden";
color4.style.width = color4.style.height = "1800px";
color4.style.position = "fixed";
color4.style.margin = "200px";



//bool check
var findColor1 = false;
var findColor2 = false;
var findColor3 = false;

function change_color() {
    
    
    if (this.id == "color_1") {
        document.getElementById('body').style.backgroundColor = '#64A389'

        document.getElementById('circle1').style.backgroundColor = '#97C8CC'
        document.getElementById('circle2').style.backgroundColor = '#9694D6'
        document.getElementById('circle3').style.backgroundColor = '#D190D0'
        document.getElementById('circle4').style.backgroundColor = '#D9D7A3'

        document.getElementById('menu').style.backgroundColor = '#6EB598'

        document.getElementById('card_front2').style.backgroundColor = '#EDA4A9'
        document.getElementById('card_front3').style.backgroundColor = '#DDEDA4'
        document.getElementById('card_front4').style.backgroundColor = '#A6DBE0'
        
        document.getElementById('letter').style.color = '#A6DBE0'
        document.getElementById('portfolio').style.backgroundColor = '#2F4F4F'

        document.getElementById('sites').style.backgroundColor = '#375A66'
        document.getElementById('apps').style.backgroundColor = '#376659'

        document.getElementById('color_1').style.visibility = "hidden";
        findColor1 = true

        if (findColor1 && findColor2 && findColor3) {
            document.getElementById('color_4').style.visibility = "visible";
        }
    }
    
    else if (this.id == "color_2") {
        document.getElementById('body').style.backgroundColor = '#D7C193'

        document.getElementById('circle1').style.backgroundColor = '#D4A661'
        document.getElementById('circle2').style.backgroundColor = '#EBAD77'
        document.getElementById('circle3').style.backgroundColor = '#D48661'
        document.getElementById('circle4').style.backgroundColor = '#F68871'

        document.getElementById('menu').style.backgroundColor = '#F6C18A'

        document.getElementById('card_front2').style.backgroundColor = '#EBA490'
        document.getElementById('card_front3').style.backgroundColor = '#D49877'
        document.getElementById('card_front4').style.backgroundColor = '#D47D77'
        
        document.getElementById('letter').style.color = '#F5D57D'
        document.getElementById('portfolio').style.backgroundColor = '#D65D58'

        document.getElementById('sites').style.backgroundColor = '#D65D6E'
        document.getElementById('apps').style.backgroundColor = '#C28CE6'

        document.getElementById('color_2').style.visibility = "hidden";
        findColor2 = true

        if (findColor1 && findColor2 && findColor3) {
            document.getElementById('color_4').style.visibility = "visible";
        }
    }
    else if (this.id == "color_3") {
        document.getElementById('body').style.backgroundColor = '#57C2B1'

        document.getElementById('circle1').style.backgroundColor = '#96E0B0'
        document.getElementById('circle2').style.backgroundColor = '#5DA881'
        document.getElementById('circle3').style.backgroundColor = '#6FD777'
        document.getElementById('circle4').style.backgroundColor = '#6AD7B8'

        document.getElementById('menu').style.backgroundColor = '#8BE0C5'

        document.getElementById('card_front2').style.backgroundColor = '#3EC286'
        document.getElementById('card_front3').style.backgroundColor = '#66D796'
        document.getElementById('card_front4').style.backgroundColor = '#6BC283'
        
        document.getElementById('letter').style.color = '#54C29A'
        document.getElementById('portfolio').style.backgroundColor = '#87C9A0'

        document.getElementById('sites').style.backgroundColor = '#5DA8A4'
        document.getElementById('apps').style.backgroundColor = '#90D4B6'


        document.getElementById('color_3').style.visibility = "hidden";
        findColor3 = true

        if (findColor1 && findColor2 && findColor3) {
            document.getElementById('color_4').style.visibility = "visible";
        }
    }
    else if (this.id == "color_4") {
        document.getElementById('body').style.backgroundColor = "#90D4D3"

        document.getElementById('circle1').style.background = 'linear-gradient(#68D6CC, #878EC9)'
        document.getElementById('circle2').style.background = 'linear-gradient(#50C9D7, #87ADC9)'
        document.getElementById('circle3').style.background = 'linear-gradient(to bottom right, #6195C7, #5F9FAD)'
        document.getElementById('circle4').style.background = 'linear-gradient(to bottom left, #74C2AA, #8EE0F5)'

        document.getElementById('menu').style.background = 'linear-gradient(#97E090, #9395CF)'

        document.getElementById('card_front2').style.background = 'linear-gradient(to bottom right, #97D1CA, #50C2B4)'
        document.getElementById('card_front3').style.background = 'linear-gradient(to bottom left, #50C2B4, #97D1CA)'
        document.getElementById('card_front4').style.background = 'linear-gradient(#8EF5BD, #75C4CC)'
        
        document.getElementById('letter').style.color = "#AEF5E9"
        document.getElementById('portfolio').style.background = 'linear-gradient(#9996CC, #8EF5BD)'

        document.getElementById('sites').style.background = 'transparent'
        document.getElementById('apps').style.background = 'transparent'

        document.getElementById('links_social').style.background = 'linear-gradient(to left, #F54D4C, #D187C3, #99ABD1)'
        
        document.getElementById('color_1').style.visibility = "hidden";
        document.getElementById('color_2').style.visibility = "hidden";
        document.getElementById('color_3').style.visibility = "hidden";
        document.getElementById('color_4').style.visibility = "hidden";

    }
}