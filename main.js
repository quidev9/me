document.getElementById('body').innerHTML += "<div id='saits' class='saits'></div>"

document.getElementById('saits').innerHTML += "<iframe type='site' frameborder='no' align='left' src='https://property091.github.io/zeros/'></iframe>"
document.getElementById('saits').innerHTML += "<iframe type='site' frameborder='no' align='left' src='https://property091.github.io/numbers/'></iframe>"
document.getElementById('saits').innerHTML += "<iframe type='site' frameborder='no' align='left' src='https://property091.github.io/table/'></iframe>"

document.getElementById('saits').innerHTML += "<div id='nameportfolio' class='nameportfolio'></div>"

document.getElementById('nameportfolio').innerHTML = "PORTFOLIO"



document.getElementById('body').innerHTML += "<div id='color_1' class='color_1'></div>"


button1 = document.getElementsByClassName('color_1');
button1[0].addEventListener('click', change_color);

function change_color() {
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
    document.getElementById('saits').style.backgroundColor = '#2F4F4F'

    document.getElementById('color_1').style.visibility = 'hidden'
}

