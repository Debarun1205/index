
function closeMenu(){
    
    document.getElementById("menu").style.width='0px';
     document.getElementById("openMenu").style.zIndex="0";
}

function openMenu(){
    
    document.getElementById("menu").style.width='200px';
    document.getElementById("openMenu").style.zIndex="-1";
}

function openHome()
{

}

function closeHost(){
    
    document.getElementById("openHosts").style.height='0px';
    document.getElementById("closeHost").style.zIndex="-1";
}

function openHost(){
    
    document.getElementById("openHosts").style.height='355px';
    document.getElementById("closeHost").style.zIndex="-1";
}


function closeEvents(){
    
    document.getElementById("openEvent").style.height='0px';
    document.getElementById("closeEvents").style.zIndex="-1";
}

function openEvents(){
    
    document.getElementById("openEvent").style.height='275px';
    document.getElementById("closeEvents").style.zIndex="-1";
}

function closeInvest(){
    
    document.getElementById("openInvests").style.height='0px';
    document.getElementById("").style.zIndex="-1";
}

function openInvest(){
    
    document.getElementById("openInvests").style.height='170px';
    document.getElementById("").style.zIndex="-1";
}

function openContact()
{
    document.getElementById("").style.width='400px';
}
