var messageget = new Audio("audio/messageget.mp3");
var messagesend = new Audio("audio/messagesend.mp3");

var evacuate_ornot = 0;
var dangerous = 0;


function message_sound(){
    messageget.play();
}

function evacuate(){
    document.getElementById("evacuate1").style.visibility = "visible";
    document.getElementById("evacuate2").style.visibility = "visible";
    document.getElementById("p5b2").src= "image/image5_2.png";
    document.getElementById("p5b3").src= "image/image5_3.png";
    document.getElementById("p5b4").src= "image/image5_4.png";
    document.getElementById("p5b5").src= "image/image5_5.png";

    document.getElementById("p5button_hover_2").src= "image/image5_2.png";
    document.getElementById("p5button_hover_3").src= "image/image5_3.png";
    document.getElementById("p5button_hover_4").src= "image/image5_4.png";
    document.getElementById("p5button_hover_5").src= "image/image5_5.png";
}

function general(){
    document.getElementById("p5bc").src= "image/image5_bc_2.jpg";
    document.getElementById("p5popmessage").style.animation = "moving 0.75s 1.2s forwards";
    document.querySelector(".p5popmessage").style.visibility = "visible";
    document.querySelector(".p5message").className = "p5message_move";
    document.querySelector(".filter").style.visibility = "visible";
    messagesend.play();
}

function p5button_2_f(){
    general();
    dangerous = 1;
    setTimeout("message_sound()",1000);  
    setTimeout("evacuate()",2500);

    document.getElementById("p5button_hover_2").style.animation = "moving_2 0.3s forwards";
    document.querySelector(".p5button_hover_2").style.visibility = "visible";
}

function p5button_3_f(){
    general();
    dangerous = 1;
    setTimeout("message_sound()",1000);  
    setTimeout("evacuate()",2500);  

    document.getElementById("p5button_hover_3").style.animation = "moving_3 0.3s forwards";
    document.querySelector(".p5button_hover_3").style.visibility = "visible";
}

function p5button_4_f(){
    general();
    dangerous = 0;
    setTimeout("message_sound()",1000);  
    setTimeout("evacuate()",2500);  

    document.getElementById("p5button_hover_4").style.animation = "moving_4 0.3s forwards";
    document.querySelector(".p5button_hover_4").style.visibility = "visible";
}

function p5button_5_f(){
    general();
    dangerous = 0;
    setTimeout("message_sound()",1000);  
    setTimeout("evacuate()",2500);  

    document.getElementById("p5button_hover_5").style.animation = "moving_5 0.3s forwards";
    document.querySelector(".p5button_hover_5").style.visibility = "visible";
}

function p6loading(){
    location.href = "p06.html";
}

function evacuate_true(){
    evacuate_ornot = 1;
    localStorage.setItem("evacuateKey", evacuate_ornot);
    localStorage.setItem("dangerousKey", dangerous);
    document.querySelector("#p5loading1").style.visibility = 'visible';
    setTimeout("p6loading()",2500);  
}

function evacuate_false(){
    localStorage.setItem("evacuateKey", evacuate_ornot);
    localStorage.setItem("dangerousKey", dangerous);
    document.querySelector("#p5loading2").style.visibility = 'visible';
    setTimeout("p6loading()",2500);  
}

function intro_cancel(){
    document.querySelector(".popup_intro").style.visibility = 'hidden';
}