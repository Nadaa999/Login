var usersArray=[]


if(localStorage.getItem('Users')!=null){ 

    usersArray=JSON.parse(localStorage.getItem('Users'))

}

function search(Email){

    for (var i=0 ; i < usersArray.length ; i++) {
        if(usersArray[i].email==Email){
            // console.log("nada")
            return true;
        }
    }
    return false ;  
    
}

function searchName(Email,Password){

    for (var i=0 ; i < usersArray.length ; i++) {
        if(usersArray[i].email==Email&&usersArray[i].password==Password){
            // console.log("nada")
        
            localStorage.setItem('last',usersArray[i].name)
        }
    }
   
    
}



function searchPassword(password){

    for (var i=0 ; i < usersArray.length ; i++) {
        if(usersArray[i].password==password){
            // console.log("nada")
            return true;
        }
    }
    return false ;  
    
}
console.log(usersArray)


function Login(){

var email=document.getElementById('email').value
var password=document.getElementById('password').value


if(search(email)==true&&searchPassword(password)){

    searchName(email,password)
    window.location.href="file:///C:/Users/maadi/Documents/Front%20End%20Diploma/Assignments/Login/pages/page2.html";
    

}
else {
    document.getElementById('incorrect').classList.replace('d-none','d-block')
}


}

