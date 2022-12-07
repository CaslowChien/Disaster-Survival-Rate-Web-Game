var lefttime = 100;
var item_disappear = 0

var item_var_window = 1
var item_var_potplant = 6
var item_var_wall = 10
var item_var_grass = 22
var item_var_tree = 35
var item_var_statue = 55
var item_var_road = 30
var item_var_car = 30
var item_var_sandbag = 18

var lefttime_cost = 0
var item_p4_disappear = 0

var snd_window = new Audio("audio/window.mp3");
var snd_bag = new Audio("audio/bag.mp3");
var snd_car = new Audio("audio/car.mp3");
var snd_grass = new Audio("audio/grass.mp3");
var snd_potplant = new Audio("audio/potplant.mp3");
var snd_road = new Audio("audio/road.mp3");
var snd_statue = new Audio("audio/statue.mp3");
var snd_tree = new Audio("audio/tree.mp3");
var snd_wall = new Audio("audio/wall.mp3");

var item_list = [];

document.getElementById("cancel").addEventListener("click",function(){
    document.querySelector(".popup").style.visibility ="hidden"
    document.querySelector("#confirm").style.visibility = "hidden";
    document.querySelector(".popup_button").style.width= "49%";
})

function backto_green(tmp_item_disappear, tmp_lefttime_cost){
    document.querySelector("#time_total").style.color = 'black';
    document.querySelector("#time_total").style.opacity = 1.0;

    if (tmp_item_disappear==20){
        document.querySelector(".pic4_9").style.visibility = "visible";
        document.querySelector(".item_window").style.visibility ="hidden";
    } else if (tmp_item_disappear==21){
        document.querySelector(".pic4_4").style.visibility = "visible";
        document.querySelector(".item_potplant").style.visibility ="hidden";
    } else if (tmp_item_disappear==22){
        document.querySelector(".pic4_6").style.visibility = "visible";
        document.querySelector(".item_wall_1").style.visibility ="hidden";
        document.querySelector(".item_wall_2").style.visibility ="hidden";
    } else if (tmp_item_disappear==23){
        document.querySelector(".pic4_8").style.visibility = "visible";
        document.querySelector(".item_grass_1").style.visibility ="hidden";
        document.querySelector(".item_grass_2").style.visibility ="hidden";
    } else if (tmp_item_disappear==24){
        document.querySelector(".pic4_2").style.visibility = "visible";
        document.querySelector(".item_tree").style.visibility ="hidden";
    } else if (tmp_item_disappear==25){
        document.querySelector(".pic4_5").style.visibility = "visible";
        document.querySelector(".item_statue").style.visibility ="hidden";
    } else if (tmp_item_disappear==26){
        document.querySelector(".pic4_1").style.visibility = "visible";
        document.querySelector(".item_road").style.visibility ="hidden";
    } else if (tmp_item_disappear==27){
        document.querySelector(".pic4_3").style.visibility = "visible";
        document.querySelector(".item_car").style.visibility ="hidden";
    } else if (tmp_item_disappear==28){
        document.querySelector(".pic4_7").style.visibility = "visible";
        document.querySelector(".item_sandbag").style.visibility ="hidden";
    }
    lefttime = lefttime - tmp_lefttime_cost;
    document.getElementById("time_total").innerText = lefttime;
    
}

document.getElementById("confirm").addEventListener("click",function(){
    var tmp_item_disappear = item_disappear;
    var tmp_lefttime_cost = lefttime_cost;
    document.querySelector(".popup").style.visibility ="hidden"
    document.querySelector("#confirm").style.visibility = "hidden";
    document.querySelector(".popup_button").style.width= "49%";

    document.querySelector("#time_total").style.color = 'red';
    document.querySelector("#time_total").style.opacity = 0.8;
    switch (item_disappear){
        case 20:
            snd_window.play();
            snd_window.currentTime=0;
            item_list.push(9);
            break;
        case 21:
            snd_potplant.play();
            snd_potplant.currentTime=0;
            item_list.push(4);
            break;
        case 22:
            snd_wall.play();
            snd_wall.currentTime=0;
            item_list.push(6);
            break;
        case 23:
            snd_grass.play();
            snd_grass.currentTime=0;
            item_list.push(8);
            break;
        case 24:
            snd_tree.play();
            snd_tree.currentTime=0;
            item_list.push(2);
            break;
        case 25:
            snd_statue.play();
            snd_statue.currentTime=0;
            item_list.push(5);
            break;
        case 26:
            snd_road.play();
            snd_road.currentTime=0;
            item_list.push(1);
            break;
        case 27:
            snd_car.play();
            snd_car.currentTime=0;
            item_list.push(3);
            break;
        case 28:
            snd_bag.play();
            snd_bag.currentTime=0;
            item_list.push(7);
            break;
    }
    setTimeout(function(){backto_green(tmp_item_disappear, tmp_lefttime_cost);},1500 );  
})


function handle_window(){
    lefttime_cost = item_var_window;
    document.getElementById("smallpic").src="image_small/image4_9_s.png";
    document.getElementById("popup_words_changable").innerText = "緊閉門窗";
    document.querySelector(".popup").style.visibility = "visible";
    document.getElementById("price_changable").innerText = "耗費時間" + item_var_window.toString() + "mins";
    if ((lefttime - lefttime_cost)<0){
        document.querySelector("#confirm").style.visibility = "hidden";
        document.querySelector(".popup").style.visibility = "visible";
        document.getElementById("popup_info_changable").innerText = "你連關窗戶都沒有時間囉";
        document.querySelector(".popup_button").style.width= "98%";
    }
    else{
        document.querySelector(".popup").style.visibility = "visible";
        document.querySelector("#confirm").style.visibility = "visible";
        document.getElementById("popup_info_changable").innerText = "防止風吹雨打侵襲我家舒適的室內。";
        document.querySelector(".popup_button").style.width= "49%";
        
        item_disappear = 20;
        return lefttime_cost;
    }
}

function handle_potplant(){
    lefttime_cost = item_var_potplant;
    document.getElementById("smallpic").src="image_small/image4_4_s.png";
    document.getElementById("popup_words_changable").innerText = "盆栽移入室內";
    document.querySelector(".popup").style.visibility = "visible";
    document.getElementById("price_changable").innerText = "耗費時間" + item_var_potplant.toString() + "mins";
    if ((lefttime - lefttime_cost)<0){
        document.querySelector("#confirm").style.visibility = "hidden";
        document.querySelector(".popup").style.visibility = "visible";
        document.getElementById("popup_info_changable").innerText = "盆栽說: 你沒時間搬我了";
        document.querySelector(".popup_button").style.width= "98%";
    }
    else{
        document.querySelector(".popup").style.visibility = "visible";
        document.querySelector("#confirm").style.visibility = "visible";
        document.getElementById("popup_info_changable").innerText = "盆栽才不會被吹飛造成周遭的危險。";
        document.querySelector(".popup_button").style.width= "49%";
        item_disappear = 21;
        return lefttime_cost;
    }
}

function handle_wall(){
    lefttime_cost = item_var_wall;
    document.getElementById("smallpic").src="image_small/image4_6_s.png";
    document.getElementById("popup_words_changable").innerText = "裝飾牆壁";
    document.querySelector(".popup").style.visibility = "visible";
    document.getElementById("price_changable").innerText = "耗費時間" + item_var_wall.toString() + "mins";
    if ((lefttime - lefttime_cost)<0){
        document.querySelector("#confirm").style.visibility = "hidden";
        document.querySelector(".popup").style.visibility = "visible";
        document.getElementById("popup_info_changable").innerText = "醜醜的牆壁";
        document.querySelector(".popup_button").style.width= "98%";
    }
    else{
        document.querySelector(".popup").style.visibility = "visible";
        document.querySelector("#confirm").style.visibility = "visible";
        document.getElementById("popup_info_changable").innerText = "家外牆上貼門神可以保佑自家安全。";
        document.querySelector(".popup_button").style.width= "49%";
        item_disappear = 22;
        return lefttime_cost;
    }
}

function handle_grass(){
    lefttime_cost = item_var_grass;
    document.getElementById("smallpic").src="image_small/image4_8_s.png";
    document.getElementById("popup_words_changable").innerText = "種花";
    document.querySelector(".popup").style.visibility = "visible";
    document.getElementById("price_changable").innerText = "耗費時間" + item_var_grass.toString() + "mins";
    if ((lefttime - lefttime_cost)<0){
        document.querySelector("#confirm").style.visibility = "hidden";
        document.querySelector(".popup").style.visibility = "visible";
        document.getElementById("popup_info_changable").innerText = "你的庭院很無聊。";
        document.querySelector(".popup_button").style.width= "98%";
    }
    else{
        document.querySelector(".popup").style.visibility = "visible";
        document.querySelector("#confirm").style.visibility = "visible";
        document.getElementById("popup_info_changable").innerText = "在下豪雨的時候種花一定可以長很快。";
        document.querySelector(".popup_button").style.width= "49%";
        item_disappear = 23;
        return lefttime_cost;
    }
}

function handle_tree(){
    document.getElementById("smallpic").src="image_small/image4_2_s.png";
    lefttime_cost = item_var_tree;
    document.getElementById("popup_words_changable").innerText = "修剪樹木枝幹";
    document.querySelector(".popup").style.visibility = "visible";
    document.getElementById("price_changable").innerText = "耗費時間" + item_var_tree.toString() + "mins";
    if ((lefttime - lefttime_cost)<0){
        document.querySelector("#confirm").style.visibility = "hidden";
        document.querySelector(".popup").style.visibility = "visible";
        document.getElementById("popup_info_changable").innerText = "修但幾ㄌㄟ，沒錢";
        document.querySelector(".popup_button").style.width= "98%";
    }
    else{
        document.querySelector(".popup").style.visibility = "visible";
        document.querySelector("#confirm").style.visibility = "visible";
        document.getElementById("popup_info_changable").innerText = "避免猖狂的樹枝被吹倒摧毀到我家。";
        document.querySelector(".popup_button").style.width= "49%";
        item_disappear = 24;
        return lefttime_cost;
    }
}

function handle_statue(){
    lefttime_cost = item_var_statue;
    document.getElementById("smallpic").src="image_small/image4_5_s.png";
    document.getElementById("popup_words_changable").innerText = "建造雕像";
    document.querySelector(".popup").style.visibility = "visible";
    document.getElementById("price_changable").innerText = "耗費時間" + item_var_statue.toString() + "mins";
    if ((lefttime - lefttime_cost)<0){
        document.querySelector("#confirm").style.visibility = "hidden";
        document.querySelector(".popup").style.visibility = "visible";
        document.getElementById("popup_info_changable").innerText = "你的庭院很無聊。";
        document.querySelector(".popup_button").style.width= "98%";
    }
    else{
        document.querySelector(".popup").style.visibility = "visible";
        document.querySelector("#confirm").style.visibility = "visible";
        document.getElementById("popup_info_changable").innerText = "是讓庭園增添中世紀風格的好時機。";
        document.querySelector(".popup_button").style.width= "49%";
        item_disappear = 25;
        return lefttime_cost;
    }
}

function handle_road(){
    lefttime_cost = item_var_road;
    document.getElementById("smallpic").src="image_small/image4_1_s.png";
    document.getElementById("popup_words_changable").innerText = "疏通排水溝";
    document.querySelector(".popup").style.visibility = "visible";
    document.getElementById("price_changable").innerText = "耗費時間" + item_var_road.toString() + "mins";
    if ((lefttime - lefttime_cost)<0){
        document.querySelector("#confirm").style.visibility = "hidden";
        document.querySelector(".popup").style.visibility = "visible";
        document.getElementById("popup_info_changable").innerText = "水溝堵塞，沒時間清理";
        document.querySelector(".popup_button").style.width= "98%";
    }
    else{
        document.querySelector(".popup").style.visibility = "visible";
        document.querySelector("#confirm").style.visibility = "visible";
        document.getElementById("popup_info_changable").innerText = "預防淹水就必須保持排水系統暢通。";
        document.querySelector(".popup_button").style.width= "49%";
        item_disappear = 26;
        return lefttime_cost;
    }
}

function handle_car(){
    lefttime_cost = item_var_car;
    document.getElementById("smallpic").src="image_small/image4_3_s.png";
    document.getElementById("popup_words_changable").innerText = "洗車";
    document.querySelector(".popup").style.visibility = "visible";
    document.getElementById("price_changable").innerText = "耗費時間" + item_var_car.toString() + "mins";
    if ((lefttime - lefttime_cost)<0){
        document.querySelector("#confirm").style.visibility = "hidden";
        document.querySelector(".popup").style.visibility = "visible";
        document.getElementById("popup_info_changable").innerText = "你的愛車在哭泣。";
        document.querySelector(".popup_button").style.width= "98%";
    }
    else{
        document.querySelector(".popup").style.visibility = "visible";
        document.querySelector("#confirm").style.visibility = "visible";
        document.getElementById("popup_info_changable").innerText = "趁雨水豐沛拿來洗車可以省水真讚!";
        document.querySelector(".popup_button").style.width= "49%";
        item_disappear = 27;
        return lefttime_cost;
    }
}

function handle_sandbag(){
    lefttime_cost = item_var_sandbag;
    document.getElementById("smallpic").src="image_small/image4_7_s.png";
    document.getElementById("popup_words_changable").innerText = "堆沙包";
    document.querySelector(".popup").style.visibility = "visible";
    document.getElementById("price_changable").innerText = "耗費時間" + item_var_sandbag.toString() + "mins";
    if ((lefttime - lefttime_cost)<0){
        document.querySelector("#confirm").style.visibility = "hidden";
        document.querySelector(".popup").style.visibility = "visible";
        document.getElementById("popup_info_changable").innerText = "沒有放沙包，真慘。";
        document.querySelector(".popup_button").style.width= "98%";
    }
    else{
        document.querySelector(".popup").style.visibility = "visible";
        document.querySelector("#confirm").style.visibility = "visible";
        document.getElementById("popup_info_changable").innerText = "沙包的吸水性可以防止住家的淹水。";
        document.querySelector(".popup_button").style.width= "49%";
        item_disappear = 28;
        return lefttime_cost;
    }
}

function remember(){
    localStorage.setItem("timeitemKey", item_list);
}

function intro_cancel(){
    document.querySelector(".popup_intro").style.visibility = 'hidden';
}