
// let input = document.querySelector("#input");
// let a = [1,2,3,4,"r","q","t","y",9,10,22,34];
// function on(){
   
    // for( i=0; i<a.length; i++){
        // let rendPass = parseInt (Math.random()*a.length);
        // document.write(input.value = rendPass);
// }
    // }
    
// on();

function on(){
     

    let pss = 4;
    let password = '';

    let a ="qwertyuioplkjhgfdsazxcvbnm";
    for(i=0; i<pss; i++){
        let randPass = Math.floor(Math.random()*a.length);
        password += a.substring(randPass,randPass+1);
    }
    document.getElementById("input").value = password;


    let b = "1234567890";
    for(i=0; i<pss; i++){
        let randPass1 = Math.floor(Math.random()*b.length);
        password += b.substring(randPass1,randPass1+1);
    }
    document.getElementById("input").value = password;


    let c ="!@#$%^&*";  
    for(i=0; i<pss; i++){
        let randPass2 = Math.floor(Math.random()*c.length);
        password += c.substring(randPass2,randPass2+1);
    }
    document.getElementById("input").value = password;
}