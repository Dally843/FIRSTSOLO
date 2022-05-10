function valid(){
    var username=document.getElementById("USERNAME").value;
    var gmail=document.getElementById("GMAIL")
    var password=document.getElementById("PASSWORD").value;
    if(username=="admin"&&password=="user"&&gmail=="fdq@sdff.ds"){
        alert("login success")
        
    }else{
        alert(loginfailed )
    }

}