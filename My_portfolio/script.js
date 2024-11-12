







function send(){
    
    const email = document.querySelector('input[type="email"]');
    const feedtxt = document.getElementById("feedtxt").value;
    const feedmsg = document.getElementById("feedmsg");

    if(email.checkValidity() && feedtxt.trim() != ""){
        feedmsg.textContent = "Thanks for the response!";
        feedmsg.style.color = "black";
        email.value = "";
        document.getElementById("feedtxt").value = "";
    }else{
        feedmsg.textContent = "Enter your text";
        feedmsg.style.color = "black";
    }
}
const viewmore=document.getElementsByClassName("view-more")[0];
const viewmoredis=document.getElementsByClassName("view-more-display")[0];
viewmore.addEventListener('click',function(){
    viewmoredis.style.display="block";
});