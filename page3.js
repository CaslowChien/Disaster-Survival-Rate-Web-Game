var money = 3000;

var item_var_flashlight = 299;
var item_var_giraffe = 2000;
var item_var_plant = 360;
var item_var_rock = 399;
var item_var_water = 25;
var item_var_food = 250;
var item_var_basketball = 411;
var item_var_cake = 1400;
var item_var_duck = 699;
var item_var_kit = 500;
var item_var_cosmetic = 689;
var item_var_bag = 399;
var item_var_clock = 199;
var item_var_song = 600;
var item_var_handgloves = 100;
var item_var_drum = 2000;
var item_var_whistle = 20;

var money_cost = 0
var item_disappear = 0
var item_list = [];

// general---------------------------
var snd_p3 = new Audio("audio/ka-ching.mp3");

function handle_flashlight(){
    money_cost = item_var_flashlight;
    document.getElementById("smallpic").src="image_small/image3_10_s.png";
    document.getElementById("popup_words_changable").innerText = "品項：手電筒";
    document.getElementById("price_changable").innerText = "價錢：NT. " + item_var_flashlight.toString();
    if ((money - money_cost)<0){
        document.querySelector("#confirm").style.visibility = "hidden";
        document.querySelector(".popup").style.visibility = "visible";
        document.getElementById("popup_info_changable").innerText = "超級重要但錢不夠了。";
        document.querySelector(".popup_button").style.width= "98%";
    }
    else{
        document.querySelector(".popup").style.visibility = "visible";
        document.querySelector("#confirm").style.visibility = "visible";
        document.getElementById("popup_info_changable").innerText = "照亮世界，照亮你我，你需要我。";
        document.querySelector(".popup_button").style.width= "49%";
        item_disappear = 10;
        return money_cost;
    }
}

function handle_giraffe(){
    money_cost = item_var_giraffe;
    document.getElementById("smallpic").src="image_small/image3_9_s.png";
    document.getElementById("popup_words_changable").innerText = "品項：長頸鹿";
    document.getElementById("price_changable").innerText = "價錢：NT. " + item_var_giraffe.toString();
    if ((money - money_cost)<0){
        document.querySelector("#confirm").style.visibility = "hidden";
        document.querySelector(".popup").style.visibility = "visible";
        document.getElementById("popup_info_changable").innerText = "長頸鹿，我買不起。";
        document.querySelector(".popup_button").style.width= "98%";
    }
    else{
        document.querySelector(".popup").style.visibility = "visible";
        document.querySelector("#confirm").style.visibility = "visible";
        document.getElementById("popup_info_changable").innerText = "沒有養過長頸鹿？要買趁現在啊~";
        document.querySelector(".popup_button").style.width= "49%";
        item_disappear = 9;
        return money_cost;
    }
}

function handle_plant(){
    money_cost = item_var_plant;
    document.getElementById("smallpic").src="image_small/image3_11_s.png";
    document.getElementById("popup_words_changable").innerText = "品項：植物";
    document.getElementById("price_changable").innerText = "價錢：NT. " + item_var_plant.toString();
    if ((money - money_cost)<0){
        document.querySelector("#confirm").style.visibility = "hidden";
        document.querySelector(".popup").style.visibility = "visible";
        document.getElementById("popup_info_changable").innerText = "你買不起我了呦~";
        document.querySelector(".popup_button").style.width= "98%";
    }
    else{
        document.querySelector(".popup").style.visibility = "visible";
        document.querySelector("#confirm").style.visibility = "visible";
        document.getElementById("popup_info_changable").innerText = "在家擺設植物，可以提升生活格調。";
        document.querySelector(".popup_button").style.width= "49%";
        item_disappear = 11;
        return money_cost;
    }

}

function handle_rock(){
    money_cost = item_var_rock;
    document.getElementById("smallpic").src="image_small/image3_12_s.png";
    document.getElementById("popup_words_changable").innerText = "品項：神奇石頭";
    document.getElementById("price_changable").innerText = "價錢：NT. " + item_var_rock.toString();
    if ((money - money_cost)<0){
        document.querySelector("#confirm").style.visibility = "hidden";
        document.querySelector(".popup").style.visibility = "visible";
        document.getElementById("popup_info_changable").innerText = "窮到連石頭都買不起QQ";
        document.querySelector(".popup_button").style.width= "98%";
    }
    else{
        document.querySelector(".popup").style.visibility = "visible";
        document.querySelector("#confirm").style.visibility = "visible";
        document.getElementById("popup_info_changable").innerText = "帶著重重的石頭還可以順便重訓多好啊。";
        document.querySelector(".popup_button").style.width= "49%";
        item_disappear = 12;
        return money_cost;
    }

}

function handle_water(){
    money_cost = item_var_water;
    document.getElementById("smallpic").src="image_small/image3_1_s.png";
    document.getElementById("popup_words_changable").innerText = "品項：水";
    document.getElementById("price_changable").innerText = "價錢：NT. " + item_var_water.toString();
    if ((money - money_cost)<0){
        document.querySelector("#confirm").style.visibility = "hidden";
        document.querySelector(".popup").style.visibility = "visible";
        document.getElementById("popup_info_changable").innerText = "沒錢買水，完蛋了。";
        document.querySelector(".popup_button").style.width= "98%";
    }
    else{
        document.querySelector(".popup").style.visibility = "visible";
        document.querySelector("#confirm").style.visibility = "visible";
        document.getElementById("popup_info_changable").innerText = "人不能沒有水，就像我不能沒有你。";
        document.querySelector(".popup_button").style.width= "49%";
        item_disappear = 1;
        return money_cost;
    }

}

function handle_food(){
    money_cost = item_var_food;
    document.getElementById("smallpic").src="image_small/image3_2_s.png";
    document.getElementById("popup_words_changable").innerText = "品項：乾糧、罐頭";
    document.getElementById("price_changable").innerText = "價錢：NT. " + item_var_food.toString();
    if ((money - money_cost)<0){
        document.querySelector("#confirm").style.visibility = "hidden";
        document.querySelector(".popup").style.visibility = "visible";
        document.getElementById("popup_info_changable").innerText = "颱風來了沒食物。";
        document.querySelector(".popup_button").style.width= "98%";
    }
    else{
        document.querySelector(".popup").style.visibility = "visible";
        document.querySelector("#confirm").style.visibility = "visible";
        document.getElementById("popup_info_changable").innerText = "餓的時候必須充飢才有力氣。";
        document.querySelector(".popup_button").style.width= "49%";
        item_disappear=2;
        return money_cost;
    }

}

function handle_basketball(){
    money_cost = item_var_basketball;
    document.getElementById("smallpic").src="image_small/image3_3_s.png";
    document.getElementById("popup_words_changable").innerText = "品項：籃球";
    document.getElementById("price_changable").innerText = "價錢：NT. " + item_var_basketball.toString();
    if ((money - money_cost)<0){
        document.querySelector("#confirm").style.visibility = "hidden";
        document.querySelector(".popup").style.visibility = "visible";
        document.getElementById("popup_info_changable").innerText = "記得要買水和食物。";
        document.querySelector(".popup_button").style.width= "98%";
    }
    else{
        document.querySelector(".popup").style.visibility = "visible";
        document.querySelector("#confirm").style.visibility = "visible";
        document.getElementById("popup_info_changable").innerText = "安西教練……我很想打籃球！";
        document.querySelector(".popup_button").style.width= "49%";
        item_disappear = 3;
        return money_cost;
    }

}

function handle_cake(){
    money_cost = item_var_cake;
    document.getElementById("smallpic").src="image_small/image3_4_s.png";
    document.getElementById("popup_words_changable").innerText = "品項：22歲生日蛋糕";
    document.getElementById("price_changable").innerText = "價錢：NT. " + item_var_cake.toString();
    if ((money - money_cost)<0){
        document.querySelector("#confirm").style.visibility = "hidden";
        document.querySelector(".popup").style.visibility = "visible";
        document.getElementById("popup_info_changable").innerText = "颱風來了還想吃蛋糕？";
        document.querySelector(".popup_button").style.width= "98%";
    }
    else{
        document.querySelector(".popup").style.visibility = "visible";
        document.querySelector("#confirm").style.visibility = "visible";
        document.getElementById("popup_info_changable").innerText = "我不知道你，但我要22了。";
        document.querySelector(".popup_button").style.width= "49%";
        item_disappear = 4;
        return money_cost;
    }

}

function handle_duck(){
    money_cost = item_var_duck;
    document.getElementById("smallpic").src="image_small/image3_6_s.png";
    document.getElementById("popup_words_changable").innerText = "品項：神聖的鵝";
    document.getElementById("price_changable").innerText = "價錢：NT. " + item_var_duck.toString();
    if ((money - money_cost)<0){
        document.querySelector("#confirm").style.visibility = "hidden";
        document.querySelector(".popup").style.visibility = "visible";
        document.getElementById("popup_info_changable").innerText = "請把錢花在防災用品上。";
        document.querySelector(".popup_button").style.width= "98%";
    }
    else{
        document.querySelector(".popup").style.visibility = "visible";
        document.querySelector("#confirm").style.visibility = "visible";
        document.getElementById("popup_info_changable").innerText = "鵝？颱風天買鵝？？？？？？？";
        document.querySelector(".popup_button").style.width= "49%";
        item_disappear = 6;
        return money_cost;
    }

}

function handle_kit(){
    money_cost = item_var_kit;
    document.getElementById("smallpic").src="image_small/image3_5_s.png";
    document.getElementById("popup_words_changable").innerText = "品項：急救包";
    document.getElementById("price_changable").innerText = "價錢：NT. " + item_var_kit.toString();
    if ((money - money_cost)<0){
        document.querySelector("#confirm").style.visibility = "hidden";
        document.querySelector(".popup").style.visibility = "visible";
        document.getElementById("popup_info_changable").innerText = "竟然花到沒錢買急救包。";
        document.querySelector(".popup_button").style.width= "98%";
    }
    else{
        document.querySelector(".popup").style.visibility = "visible";
        document.querySelector("#confirm").style.visibility = "visible";
        document.getElementById("popup_info_changable").innerText = "內含藥品、繃帶等，必備的防災品。";
        document.querySelector(".popup_button").style.width= "49%";
        item_disappear = 5;
        return money_cost;
    }

}

function handle_cosmetic(){
    money_cost = item_var_cosmetic;
    document.getElementById("smallpic").src="image_small/image3_7_s.png";
    document.getElementById("popup_words_changable").innerText = "品項：化妝品";
    document.getElementById("price_changable").innerText = "價錢：NT. " + item_var_cosmetic.toString();
    if ((money - money_cost)<0){
        document.querySelector("#confirm").style.visibility = "hidden";
        document.querySelector(".popup").style.visibility = "visible";
        document.getElementById("popup_info_changable").innerText = "化妝品，很貴的。";
        document.querySelector(".popup_button").style.width= "98%";
    }
    else{
        document.querySelector(".popup").style.visibility = "visible";
        document.querySelector("#confirm").style.visibility = "visible";
        document.getElementById("popup_info_changable").innerText = "面對颱風即使躲在家還是要美美的。";
        document.querySelector(".popup_button").style.width= "49%";
        item_disappear = 7;
        return money_cost;
    }

}

function handle_bag(){
    money_cost = item_var_bag;
    document.getElementById("smallpic").src="image_small/image3_8_s.png";
    document.getElementById("popup_words_changable").innerText = "品項：睡袋";
    document.getElementById("price_changable").innerText = "價錢：NT. " + item_var_bag.toString();
    if ((money - money_cost)<0){
        document.querySelector("#confirm").style.visibility = "hidden";
        document.querySelector(".popup").style.visibility = "visible";
        document.getElementById("popup_info_changable").innerText = "沒錢了，真可惜。";
        document.querySelector(".popup_button").style.width= "98%";
    }
    else{
        document.querySelector(".popup").style.visibility = "visible";
        document.querySelector("#confirm").style.visibility = "visible";
        document.getElementById("popup_info_changable").innerText = "流離失所讓你還是可以睡得安穩。";
        document.querySelector(".popup_button").style.width= "49%";
        item_disappear = 8;
        return money_cost;
    }

}

function handle_clock(){
    money_cost = item_var_clock;
    document.getElementById("smallpic").src="image_small/image3_13_s.png";
    document.getElementById("popup_words_changable").innerText = "品項：時鐘";
    document.getElementById("price_changable").innerText = "價錢：NT. " + item_var_clock.toString();
    if ((money - money_cost)<0){
        document.querySelector("#confirm").style.visibility = "hidden";
        document.querySelector(".popup").style.visibility = "visible";
        document.getElementById("popup_info_changable").innerText = "沒錢沒時鐘。";
        document.querySelector(".popup_button").style.width= "98%";
    }
    else{
        document.querySelector(".popup").style.visibility = "visible";
        document.querySelector("#confirm").style.visibility = "visible";
        document.getElementById("popup_info_changable").innerText = "隨時知道自己活在幾時幾分相當重要。";
        document.querySelector(".popup_button").style.width= "49%";
        item_disappear = 13;
        return money_cost;
    }

}

function handle_song(){
    money_cost = item_var_song;
    document.getElementById("smallpic").src="image_small/image3_14_s.png";
    document.getElementById("popup_words_changable").innerText = "品項：生菜海膽唱片";
    document.getElementById("price_changable").innerText = "價錢：NT. " + item_var_song.toString();
    if ((money - money_cost)<0){
        document.querySelector("#confirm").style.visibility = "hidden";
        document.querySelector(".popup").style.visibility = "visible";
        document.getElementById("popup_info_changable").innerText = "已經刷爆卡了。";
        document.querySelector(".popup_button").style.width= "98%";
    }
    else{
        document.querySelector(".popup").style.visibility = "visible";
        document.querySelector("#confirm").style.visibility = "visible";
        document.getElementById("popup_info_changable").innerText = "人生不可以沒有音樂，遇到颱風也是。";
        document.querySelector(".popup_button").style.width= "49%";
        item_disappear = 14;
        return money_cost;
    }

}

function handle_handgloves(){
    money_cost = item_var_handgloves;
    document.getElementById("smallpic").src="image_small/image3_15_s.png";
    document.getElementById("popup_words_changable").innerText = "品項：粗棉手套";
    document.getElementById("price_changable").innerText = "價錢：NT. " + item_var_handgloves.toString();
    if ((money - money_cost)<0){
        document.querySelector("#confirm").style.visibility = "hidden";
        document.querySelector(".popup").style.visibility = "visible";
        document.getElementById("popup_info_changable").innerText = "防災重點: 來不及了...";
        document.querySelector(".popup_button").style.width= "98%";
    }
    else{
        document.querySelector(".popup").style.visibility = "visible";
        document.querySelector("#confirm").style.visibility = "visible";
        document.getElementById("popup_info_changable").innerText = "災害來時，避免雙手被碎石頭、碎玻璃割傷。";
        document.querySelector(".popup_button").style.width= "49%";
        item_disappear = 15;
        return money_cost;
    }

}

function handle_drum(){
    money_cost = item_var_drum;
    document.getElementById("smallpic").src="image_small/image3_17_s.png";
    document.getElementById("popup_words_changable").innerText = "品項：鼓，沒有鼓棒";
    document.getElementById("price_changable").innerText = "價錢：NT. " + item_var_drum.toString();
    if ((money - money_cost)<0){
        document.querySelector("#confirm").style.visibility = "hidden";
        document.querySelector(".popup").style.visibility = "visible";
        document.getElementById("popup_info_changable").innerText = "鼓好貴，還是乖乖買水。";
        document.querySelector(".popup_button").style.width= "98%";
    }
    else{
        document.querySelector(".popup").style.visibility = "visible";
        document.querySelector("#confirm").style.visibility = "visible";
        document.getElementById("popup_info_changable").innerText = "聽說打鼓好像可以擊退颱風耶？";
        document.querySelector(".popup_button").style.width= "49%";
        item_disappear = 17;
        return money_cost;
    }

}

function handle_whistle(){
    money_cost = item_var_whistle;
    document.getElementById("smallpic").src="image_small/image3_16_s.png";
    document.getElementById("popup_words_changable").innerText = "品項：哨子，快買";
    document.getElementById("price_changable").innerText = "價錢：NT. " + item_var_whistle.toString();
    if ((money - money_cost)<0){
        document.querySelector("#confirm").style.visibility = "hidden";
        document.querySelector(".popup").style.visibility = "visible";
        document.getElementById("popup_info_changable").innerText = "竟然沒先買哨子？";
        document.querySelector(".popup_button").style.width= "98%";
    }
    else{
        document.querySelector(".popup").style.visibility = "visible";
        document.querySelector("#confirm").style.visibility = "visible";
        document.getElementById("popup_info_changable").innerText = "受困的時候可以讓大家知道你在哪。";
        document.querySelector(".popup_button").style.width= "49%";
        item_disappear = 16;
        return money_cost;
    }

}

document.getElementById("cancel").addEventListener("click",function(){
    document.querySelector(".popup").style.visibility ="hidden"
    document.querySelector("#confirm").style.visibility = "hidden";
    document.querySelector(".popup_button").style.width= "49%";
})


function backto_green(){
    document.querySelector("#money_total").style.color = 'black';
    document.querySelector("#money_total").style.opacity = 1.0;
}

document.getElementById("confirm").addEventListener("click",function(){
    document.querySelector(".popup").style.visibility ="hidden"
    document.querySelector("#confirm").style.visibility = "hidden";
    document.querySelector(".popup_button").style.width= "49%";
    
    document.querySelector("#money_total").style.color = 'red';
    document.querySelector("#money_total").style.opacity = 0.8;
        
    setTimeout("backto_green()",1500 );  
    
    money = money - money_cost;

    document.getElementById("money_total").innerText = money;
    snd_p3.play();
    snd_p3.currentTime=0;

    if (item_disappear==1){
        document.querySelector(".pic1").style.visibility ="hidden";
        document.querySelector(".item_water").style.visibility ="hidden";
        document.querySelector("#backpack_img_1").style.display ="inline-block";
        item_list.push(1);
    } else if (item_disappear==2){
        document.querySelector(".pic2").style.visibility ="hidden";
        document.querySelector(".item_food").style.visibility ="hidden";
        document.querySelector("#backpack_img_2").style.display ="inline-block";
        item_list.push(2);
    } else if (item_disappear==3){
        document.querySelector(".pic3").style.visibility ="hidden";
        document.querySelector(".item_basketball").style.visibility ="hidden";
        document.querySelector("#backpack_img_3").style.display ="inline-block";
        item_list.push(3);
    } else if (item_disappear==4){
        document.querySelector(".pic4").style.visibility ="hidden";
        document.querySelector(".item_cake").style.visibility ="hidden";
        document.querySelector("#backpack_img_4").style.display ="inline-block";
        item_list.push(4);
    } else if (item_disappear==5){
        document.querySelector(".pic5").style.visibility ="hidden";
        document.querySelector(".item_kit").style.visibility ="hidden";
        document.querySelector("#backpack_img_5").style.display ="inline-block";
        item_list.push(5);
    } else if (item_disappear==6){
        document.querySelector(".pic6").style.visibility ="hidden";
        document.querySelector(".item_duck").style.visibility ="hidden";
        document.querySelector("#backpack_img_6").style.display ="inline-block";
        item_list.push(6);
    } else if (item_disappear==7){
        document.querySelector(".pic7").style.visibility ="hidden";
        document.querySelector(".item_cosmetic").style.visibility ="hidden";
        document.querySelector("#backpack_img_7").style.display ="inline-block";
        item_list.push(7);
    } else if (item_disappear==8){
        document.querySelector(".pic8").style.visibility ="hidden";
        document.querySelector(".item_bag").style.visibility ="hidden";
        document.querySelector("#backpack_img_8").style.display ="inline-block";
        item_list.push(8);
    } else if (item_disappear==9){
        document.querySelector(".pic9").style.visibility ="hidden";
        document.querySelector(".item_giraffe").style.visibility ="hidden";
        document.querySelector("#backpack_img_9").style.display ="inline-block";
        item_list.push(9);
    } else if (item_disappear==10){
        document.querySelector(".pic10").style.visibility ="hidden";
        document.querySelector(".item_flashlight").style.visibility ="hidden";
        document.querySelector("#backpack_img_10").style.display ="inline-block";
        item_list.push(10);
    } else if (item_disappear==11){
        document.querySelector(".pic11").style.visibility ="hidden";
        document.querySelector(".item_plant").style.visibility ="hidden";
        document.querySelector("#backpack_img_11").style.display ="inline-block";
        item_list.push(11);
    } else if (item_disappear==12){
        document.querySelector(".pic12").style.visibility ="hidden";
        document.querySelector(".item_rock").style.visibility ="hidden";
        document.querySelector("#backpack_img_12").style.display ="inline-block";
        item_list.push(12);
    } else if (item_disappear==13){
        document.querySelector(".pic13").style.visibility ="hidden";
        document.querySelector(".item_clock").style.visibility ="hidden";
        document.querySelector("#backpack_img_13").style.display ="inline-block";
        item_list.push(13);
    } else if (item_disappear==14){
        document.querySelector(".pic14").style.visibility ="hidden";
        document.querySelector(".item_song").style.visibility ="hidden";
        document.querySelector("#backpack_img_14").style.display ="inline-block";
        item_list.push(14);
    }  else if (item_disappear==15){
        document.querySelector(".pic15").style.visibility ="hidden";
        document.querySelector(".item_handgloves").style.visibility ="hidden";
        document.querySelector("#backpack_img_15").style.display ="inline-block";
        item_list.push(15);
    } else if (item_disappear==16){
        document.querySelector(".pic16").style.visibility ="hidden";
        document.querySelector(".item_whistle").style.visibility ="hidden";
        document.querySelector("#backpack_img_16").style.display ="inline-block";
        item_list.push(16);
    } else if (item_disappear==17){
        document.querySelector(".pic17").style.visibility ="hidden";
        document.querySelector(".item_drum").style.visibility ="hidden";
        document.querySelector("#backpack_img_17").style.display ="inline-block";
        item_list.push(17);
        console.log(item_list);
    }
})

function remember(){
    localStorage.setItem("moneyKey", money);
    localStorage.setItem("moneyitemKey", item_list);
}

function backpack(){
    document.querySelector(".popup_backpack").style.visibility = 'visible';
}

function backpack_cancel(){
    document.querySelector(".popup_backpack").style.visibility = 'hidden';
}

function intro_cancel(){
    document.querySelector(".popup_intro").style.visibility = 'hidden';
}