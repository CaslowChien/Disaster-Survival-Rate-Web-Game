const result_money = localStorage.getItem("moneyKey");
const result_time = localStorage.getItem("timeKey");
const result_money_item = localStorage.getItem("moneyitemKey");
const result_time_item = localStorage.getItem("timeitemKey");
const result_evacuate = localStorage.getItem("evacuateKey");
const result_dangerous = localStorage.getItem("dangerousKey");

var result_kit = 0;
var result_house = 0;

if ((result_money_item.includes(1)) && (result_money_item.includes(2)) && (result_money_item.includes(5)) && (result_money_item.includes(8)) && (result_money_item.includes(10)) && (result_money_item.includes(15)) && (result_money_item.includes(16))){
    result_kit = 1;
}

if ((result_time_item.includes(1)) && (result_time_item.includes(2)) && (result_time_item.includes(4)) && (result_time_item.includes(7)) && (result_time_item.includes(9))){
    result_house = 1;
}

var money_lost = 0;

if (result_dangerous == 1){
    document.getElementById("p6money2").innerText = "- 0";
    money_lost = 0;
} else if (result_house == 1){
    document.getElementById("p6money2").innerText = "- 300";
    money_lost = 300;
} else{
    document.getElementById("p6money2").innerText = "- 500";
    money_lost = 500;
}

function show_result(){
    document.getElementById("p6money1").innerText = "- " + (3000 - result_money).toString();
    document.querySelector(".show_result").style.visibility = "hidden";
    document.querySelector(".show_result").style.transition = "0s";
    document.querySelector(".show_result_word").style.visibility = "hidden";
    document.getElementById("result_info").style.zIndex = "2";
    if ((result_money - money_lost) < 0){
        document.getElementById("p6money3").innerText = "你已破產";
    } else {
        document.getElementById("p6money3").innerText = result_money - money_lost;
    }
    

    if ((result_kit == 1) && (result_evacuate == 1) && (result_dangerous == 1)){
        document.getElementById("image6_result").src = "image/image6_1.gif";
        document.getElementById("image6_bc").src = "image/image6_result_8.gif";
        document.getElementById("p6_popup_left").src = "image/image6_pop_8.webp";
    } else if ((result_house == 1) &&(result_kit == 0) && (result_evacuate == 1) && (result_dangerous == 1)){
        document.getElementById("image6_result").src = "image/image6_2.gif";
        document.getElementById("image6_bc").src = "image/image6_result_7.gif";
        document.getElementById("p6_popup_left").src = "image/image6_pop_7.webp";
    } else if ((result_house == 0) && (result_kit == 0) && (result_evacuate == 1) && (result_dangerous == 1)){
        document.getElementById("image6_result").src = "image/image6_3.gif";
        document.getElementById("image6_bc").src = "image/image6_result_6.gif";
        document.getElementById("p6_popup_left").src = "image/image6_pop_6.webp";
    } else if ((result_evacuate == 0) && (result_dangerous == 1)){
        document.getElementById("image6_result").src = "image/image6_4.gif";
        document.getElementById("image6_bc").src = "image/image6_result_5.gif";
        document.getElementById("p6_popup_left").src = "image/image6_pop_5.webp";
    } else if ((result_evacuate == 1) && (result_dangerous == 0)){
        document.getElementById("image6_result").src = "image/image6_5.gif";
        document.getElementById("image6_bc").src = "image/image6_result_4.gif";
        document.getElementById("p6_popup_left").src = "image/image6_pop_4.webp";
    } else if ((result_house == 1) && (result_kit == 1)){
        document.getElementById("image6_result").src = "image/image6_6.gif";
        document.getElementById("image6_bc").src = "image/image6_result_3.gif";
        document.getElementById("p6_popup_left").src = "image/image6_pop_3.webp";
    } else if ((result_house == 0) && (result_kit == 1)){
        document.getElementById("image6_result").src = "image/image6_7.gif";
        document.getElementById("image6_bc").src = "image/image6_result_2.gif";
        document.getElementById("p6_popup_left").src = "image/image6_pop_2.webp";
    } else {
        document.getElementById("image6_result").src = "image/image6_8.gif";
        document.getElementById("image6_bc").src = "image/image6_result_1.gif";
        document.getElementById("p6_popup_left").src = "image/image6_pop_1.webp";
    }
}

function show_result_info(){
    document.querySelector(".p6_popup").style.visibility = "visible";
    if (! result_money_item.includes(1)){
        document.querySelector("#p6_2").style.display ="inline-block";
    }
    if (! result_money_item.includes(2)){
        document.querySelector("#p6_3").style.display ="inline-block";
    }
    if (! result_money_item.includes(5)){
        document.querySelector("#p6_4").style.display ="inline-block";
    }
    if (! result_money_item.includes(8)){
        document.querySelector("#p6_5").style.display ="inline-block";
    }
    if (! result_money_item.includes(10)){
        document.querySelector("#p6_1").style.display ="inline-block";
    }
    if (! result_money_item.includes(15)){
        document.querySelector("#p6_6").style.display ="inline-block";
    }
    if (! result_money_item.includes(16)){
        document.querySelector("#p6_7").style.display ="inline-block";
    }

    if (! result_time_item.includes(1)){
        document.querySelector("#p6_12").style.display ="inline-block";
    }
    if (! result_time_item.includes(2)){
        document.querySelector("#p6_11").style.display ="inline-block";
    }
    if (! result_time_item.includes(4)){
        document.querySelector("#p6_10").style.display ="inline-block";
    }
    if (! result_time_item.includes(7)){
        document.querySelector("#p6_9").style.display ="inline-block";
    }
    if (! result_time_item.includes(9)){
        document.querySelector("#p6_8").style.display ="inline-block";
    }
    
    if(result_dangerous==0){
        document.querySelector("#p6_13").style.display ="inline-block";
    }
    if(result_evacuate==0){
        document.querySelector("#p6_14").style.display ="inline-block";
    }

    if((result_dangerous==1) &&(result_evacuate==1) && (result_money_item.includes(1)) && (result_money_item.includes(2)) && (result_money_item.includes(5)) && (result_money_item.includes(8)) && ((result_money_item.includes(10))) && (result_money_item.includes(15)) && (result_money_item.includes(16)) && result_time_item.includes(1) && result_time_item.includes(2) && result_time_item.includes(4) &&result_time_item.includes(7) && result_time_item.includes(9)){
        document.getElementById("p6_0").innerText = "你做得很好哦!防災觀念100分"
    }

}

function popup_button(){
    document.querySelector(".p6_popup").style.visibility = "hidden";
}

function popup_button_gov(){
    window.open("https://alerts.ncdr.nat.gov.tw/");
}