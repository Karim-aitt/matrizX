function mPatron (n){
  
    let sec = [];
    let patron = [];  
    
      for (let i = 0; i < n; i++){
          for (let j = 0; j < n; j++){
        if(i == j || i+j == n-1){
          sec.push("x")
        } else{
          sec.push("  ")
        }
          } 
        //   patron.push(sec)
        document.write(sec)
        sec = []
        document.write("<br>")
      } 

  }


  let inpu = document.getElementById("numeroX");

inpu.addEventListener("change", function(){
    let y = inpu.value
    mPatron(y)
})

  

