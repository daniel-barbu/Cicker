var money=0;
var mpc=1; //money per click
var mps=0; //money per second
var chance=1; // critical click chance
var moneystring, firstpart, lastpart;
var wongame=false;
var mpc_price=10, mps_price=50, chance_price=1000;
var critn1=1, critn2, critn3, critn4, critn5;
var achvunlocks=0;


function btnpress() {
    critrandom = Math.floor((Math.random() * 100) + 1);
    if (critrandom == critn1 || critrandom == critn2 || critrandom == critn3 || critrandom == critn4 || critrandom == critn5) {
        document.getElementById("crit").innerHTML = "Critical Click!"; //display text for the first time
        document.getElementById("crit").style.display = "inline"; // unhide it for the second crit 
        $("#crit").fadeOut(1500); //fade out
        money = money + mpc*10; //10x money
    }
    else {
    money = money + mpc;
    }
}
//printeaza money (cu virgula)
//disable la butoane de MPC si MPS si CRITICAL CLICK CHANCE
//title not enough money
function refresh() {
    if (money >= mpc_price) {
        document.getElementById("buy_mpc_btn").disabled = false;
        document.getElementById("buy_mpc_btn").title = "Click to buy!";
    }
    else if (money < mpc_price) {
        document.getElementById("buy_mpc_btn").disabled = true;
        document.getElementById("buy_mpc_btn").title = "Not enough money!";
    }
    if (money >= mps_price) {
        document.getElementById("buy_mps_btn").disabled = false;
        document.getElementById("buy_mps_btn").title = "Click to buy!";
    }
    else if (money < mps_price) {
        document.getElementById("buy_mps_btn").disabled = true;
        document.getElementById("buy_mps_btn").title = "Not enough money!";
    }
    if (chance != 5) {
    if (money >= chance_price) {
        document.getElementById("buy_chance_btn").disabled = false;
        document.getElementById("buy_chance_btn").title = "Click to buy!";
    }
    else if (money < chance_price) {
        document.getElementById("buy_chance_btn").disabled = true;
        document.getElementById("buy_chance_btn").title = "Not enough money!";
    }
    }
    else if (chance == 5) {
        document.getElementById("buy_chance_btn").innerHTML = "SOLD OUT!";
        document.getElementById("buy_chance_btn").disabled = true;
        document.getElementById("buy_chance_btn").title = "Upgrade limit reached!";
    }
    if (money<1000) {
    document.getElementById("money").innerHTML = money;
    }
    else if (money>=1000 && money<10000) {
    moneystring = money.toString();
    firstpart=moneystring.slice(0,1); // 1K - 10K ONLY
    lastpart=moneystring.slice(-3); // 1K - 10K ONLY
    moneystring=firstpart + "," + lastpart;
    document.getElementById("money").innerHTML = moneystring;
    }
    else if (money>=10000 && money<100000) {
    moneystring = money.toString();
    firstpart=moneystring.slice(0,-3); // 10K - 100K ONLY
    lastpart=moneystring.slice(2); // 10K - 100K ONLY
    moneystring=firstpart + "," + lastpart;
    document.getElementById("money").innerHTML = moneystring;
    }
    else if (money>=100000 && money<1000000) {
    moneystring = money.toString();
    firstpart=moneystring.slice(0,3); // 100K - 1M ONLY
    lastpart=moneystring.slice(-3); // 100K - 1M ONLY
    moneystring=firstpart + "," + lastpart;
    document.getElementById("money").innerHTML = moneystring;
    }
    else if (money>=1000000) {
    if (wongame===false && confirm("congratz u broke the game!!1") === true) {
        wongame=true;
    }
    document.getElementById("money").innerHTML = money;
    }
///////////////////////////////////////////ACHIEVEMENTS//////////////////////////////////////////////////
    if (money >= 1000 && achvunlocks === 0) {
        document.getElementById("achv").innerHTML = "Achivement unlocked: <span id=achvname>Advanced Clicker</span> ($1000 Money)";
        $("#achv").fadeOut(5000, function() {
            document.getElementById("achv").innerHTML = "";
            document.getElementById("achv").style.display = "inline";
            achvunlocks = achvunlocks + 1;
        });
    }
    else if (money >= 5000 && achvunlocks === 1) {
        document.getElementById("achv").innerHTML = "Achivement unlocked: <span id=achvname>Professional Clicker</span> ($5000 Money)";
        $("#achv").fadeOut(5000, function() {
            document.getElementById("achv").innerHTML = "";
            document.getElementById("achv").style.display = "inline";
            achvunlocks = achvunlocks + 1;
        });
    }
}



function buy_mpc() {
    if(money>=mpc_price) {
    money=money-mpc_price;
    mpc=mpc+1;
    document.getElementById("mpc").innerHTML = mpc;
    mpc_price=mpc_price*3;
    document.getElementById("mpc_price").innerHTML = mpc_price;
    }
    refresh();
}

function buy_mps() {
    if(money>=mps_price) {
    money=money-mps_price;
    mps=mps+1;
    document.getElementById("mps").innerHTML = mps;
    mps_price=mps_price*3;
    document.getElementById("mps_price").innerHTML = mps_price;
    document.getElementById("mps_info").innerHTML = "Gives you 1 more dollar each second you are in the game."
    if (mps===1) {
    (function(){
    money=money+mps;
    refresh();
    setTimeout(arguments.callee, 1000);
    })();
    }
    }
    refresh();
}
function buy_chance() {
    if(money>=chance_price) {
    money=money-chance_price;
    chance=chance+1;
    if (chance == 2) {
        critn2=2;
    }
    else if (chance == 3) {
        critn3=3;
    }
    else if (chance == 4) {
        critn4=4;
    }
    else if (chance == 5) {
        critn5=5;
    }
    document.getElementById("chance").innerHTML = chance;
    chance_price=chance_price*5;
    document.getElementById("chance_price").innerHTML = chance_price;
    }
    refresh();
}
