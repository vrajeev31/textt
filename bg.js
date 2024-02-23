const button = document.querySelectorAll(".box")
const body = document.querySelector("body")

button.forEach(function(box)  {
box.addEventListener('click',function(colour){
     if(colour.target.id ==='box1'){
        body.style.backgroundColor = "aqua"
     }

     if(colour.target.id ==='box2'){
      body.style.backgroundColor = "blueviolet"
   }

   if(colour.target.id ==='box3'){
      body.style.backgroundColor = "coral"
   }

   if(colour.target.id ==='box4'){
      body.style.backgroundColor = "crimson"
   }

   if(colour.target.id ==='box5'){
      body.style.backgroundColor = "chartreuse"
   }


   })

})