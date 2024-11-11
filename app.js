var input=document.getElementById('inp')
// console.log(input)

var button=document.getElementById('btn')
// console.log(button)

function off(){
   if(input.getAttribute('placeholder' )=='0'){
    input.setAttribute('placeholder','')
    button.innerHTML='ON'
    input.value=''

   }else{
    button.innerHTML='OFF'
    input.setAttribute('placeholder','0')
   
    
   }
        
        
    }
   
function sum(num){
    // console.log(num)
    input.value+=num

}

function clearall(){
    // console.log("hi h.r")
    input.value=''
}

function answer(){
    // console.log('hi h.r')
    var output=eval(input.value)
    input.value=output
}

 function del(){
    // console.log('hi h.r')
  input.value=  input.value.slice(0,-1)
 }