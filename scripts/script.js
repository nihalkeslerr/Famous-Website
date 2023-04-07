function sendForm(){
    
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var  number = document.getElementById("number");
    var subject = document.getElementById("subject");
    var text = document.getElementById("textarea");
    var success = document.getElementById("success");
    success.style.padding="10px 0px"

    if(name.value==""){

        success.innerHTML="Name kısmını doldurmalısınız."
        success.style.color="red"

        document.getElementById("adsN").innerText="*";
        document.getElementById("adsN").style.color="red";
    }
    else if(email.value=="")
    {
        success.innerHTML="Email kısmını doldurmalısınız."
        success.style.color="red"

        document.getElementById("adsE").innerText="*";
        document.getElementById("adsE").style.color="red";
    }
   
    else if(number.value=="")
    {
        success.innerHTML="Number kısmını doldurmalısınız."
        success.style.color="red"
        document.getElementById("adsNum").innerText="*";
        document.getElementById("adsNum").style.color="red";
    }
    else if(subject.value=="")
    {
        success.innerHTML="Subject kısmını doldurmalısınız."
        success.style.color="red"
        document.getElementById("adsS").innerText="*";
        document.getElementById("adsS").style.color="red";
    }
    else if(text.value=="")
    {
        success.innerHTML="Text kısmını doldurmalısınız."
        success.style.color="red"
        document.getElementById("adsT").innerText="*";
        document.getElementById("adsT").style.color="red";
    }
    else{
      success.innerHTML="Mesajınız Başarıyla Gönderilmiştir."
      success.style.color="green"
        name.value=""
        email.value=""
        number.value=""
        subject.value=""
        text.value=""



    }
}

function subscribe(){

    var email= document.getElementById("Submail")
    
    if(email.value==""){
        alert("Abone olmak için lütfen mail adresinizi girin.");
    }
    else{
        alert("Aboneliğiniz başarıyla alınmıştır.")
       

    }
}