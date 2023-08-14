var usersArray=[]


if(localStorage.getItem('Users')!=null){ 

    usersArray=JSON.parse(localStorage.getItem('Users'))

}




function Singup(){
    var uName=document.getElementById('uName')
    var uEmail=document.getElementById('uEmail')
    var uPass=document.getElementById('uPass')

if(search(uEmail.value)==false){

    var userObject={
        name:uName.value,
        email:uEmail.value,
        password:uPass.value
    }
    usersArray.push(userObject)
    localStorage.setItem('Users',JSON.stringify(usersArray))
    clear()
    document.getElementById('hide').classList.replace('d-none','d-block')
    document.getElementById('hide2').classList.replace('d-block','d-none')

}else if(search(uEmail.value)==true) {
    document.getElementById('hide2').classList.replace('d-none','d-block')
    document.getElementById('hide').classList.replace('d-block','d-none')

}
}

function clear(){
    uName.value=''
    uEmail.value=''
    uPass.value=''
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