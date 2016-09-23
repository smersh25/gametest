/**
 * Created by Smersh on 22.09.2016.
 */

var initClicks,
    strSaved,
    arrImages,
    objSaved,
    objButton,
    initPairclicks;

function window_onload() {
    newGame()
}
function newGame() {
    initClicks = 0;
    initPairclicks = 0;
    arrImages = new Array("img/100px-Youtube-logo.png","img/100x100px-chocolov.jpg",
                            "img/logo_100x100.jpg","img/ZsLHv.png","img/100px-Youtube-logo.png","img/100x100px-chocolov.jpg",
        "img/logo_100x100.jpg","img/ZsLHv.png","img/100px-Youtube-logo.png","img/100x100px-chocolov.jpg",
        "img/logo_100x100.jpg","img/ZsLHv.png","img/100px-Youtube-logo.png","img/100x100px-chocolov.jpg",
        "img/logo_100x100.jpg","img/ZsLHv.png");
    console.log(arrImages)
    for (var i = 0; i < 15; i++) {
        var initRnd = Math.floor((16 * Math.random()) + 1)
        var strTemp = arrImages[i];
        arrImages[i] = arrImages[initRnd-1];
        arrImages[initRnd-1] = strTemp;
    }
    $("#1").css({'backgroundImage':'none'});
    $("#2").css({'backgroundImage':'none'});
    $("#3").css({'backgroundImage':'none'});
    $("#4").css({'backgroundImage':'none'});
    $("#5").css({'backgroundImage':'none'});
    $("#6").css({'backgroundImage':'none'});
    $("#7").css({'backgroundImage':'none'});
    $("#8").css({'backgroundImage':'none'});
    $("#9").css({'backgroundImage':'none'});
    $("#10").css({'backgroundImage':'none'});
    $("#11").css({'backgroundImage':'none'});
    $("#12").css({'backgroundImage':'none'});
    $("#13").css({'backgroundImage':'none'});
    $("#14").css({'backgroundImage':'none'});
    $("#15").css({'backgroundImage':'none'});
    $("#16").css({'backgroundImage':'none'});

    $("#1").css({'backgroundColor':'white'});
    $("#2").css({'backgroundColor':'white'});
    $("#3").css({'backgroundColor':'white'});
    $("#4").css({'backgroundColor':'white'});
    $("#5").css({'backgroundColor':'white'});
    $("#6").css({'backgroundColor':'white'});
    $("#7").css({'backgroundColor':'white'});
    $("#8").css({'backgroundColor':'white'});
    $("#9").css({'backgroundColor':'white'});
    $("#10").css({'backgroundColor':'white'});
    $("#11").css({'backgroundColor':'white'});
    $("#12").css({'backgroundColor':'white'});
    $("#13").css({'backgroundColor':'white'});
    $("#14").css({'backgroundColor':'white'});
    $("#15").css({'backgroundColor':'white'});
    $("#16").css({'backgroundColor':'white'});

    $("#1").css({'display':'inline'});
    $("#2").css({'display':'inline'});
    $("#3").css({'display':'inline'});
    $("#4").css({'display':'inline'});
    $("#5").css({'display':'inline'});
    $("#6").css({'display':'inline'});
    $("#7").css({'display':'inline'});
    $("#8").css({'display':'inline'});
    $("#9").css({'display':'inline'});
    $("#10").css({'display':'inline'});
    $("#11").css({'display':'inline'});
    $("#12").css({'display':'inline'});
    $("#13").css({'display':'inline'});
    $("#14").css({'display':'inline'});
    $("#15").css({'display':'inline'});
    $("#16").css({'display':'inline'});

    TotalClicks.innerHTML = "<b>" + initPairclicks + "</b>";
}
function Reveal() {
    initClicks = initClicks + 1;
    if (initClicks <= 2){
        objButton = window.event.srcElement;
        console.log(objButton)
        if(objButton.style.backgroundImage != "none"){
            initClicks = initClicks - 1;
        }
        objButton.style.backgroundImage='url('+arrImages[objButton.id-1]+')';
    }
    if (initClicks > 1){
        if (objButton.style.backgroundImage == strSaved){
            window.setTimeout("RemoveButtons()", 800);
        }
        else {
            window.setTimeout("HideButtons()", 800);
        }
    }
    else {
        initPairclicks = initPairclicks + 1;
        strSaved = objButton.style.backgroundImage;
        objSaved = objButton;
    }
    status = objButton.style.backgroundImage;
}
function RemoveButtons(){
    objButton.style.display = "none";
    objSaved.style.display = "none";
    objSaved = null;
    initClicks = 0;
    TotalClicks.innerHTML = "<b>" + intPairClicks + "</b>";
}
function HideButtons(){
    objButton.style.backgroundImage = "none";
    objSaved.style.backgroundImage = "none";
    objSaved = null;
    initClicks = 0;
    TotalClicks.innerHTML = "<b>" + initPairclicks + "</b>"
}
