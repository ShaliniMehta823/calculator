const answerpanel=document.getElementById("answer");
const buttons=document.querySelectorAll("button");

buttons.forEach (button =>{
    button.addEventListener("click", () =>{
        const output= button.getAttribute("data-value");
        
        if (output==="C"){
            answerpanel.value=" "
        }else if (output==="="){
            try{
                const answer= new Function ("return"+answerpanel.value)();
                answerpanel.value=answer;
            }catch{
                answerpanel.value="Error";
            }
        }else{
            answerpanel.value+=output;
        };   
    });
});
    
