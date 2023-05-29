let string="";
let buttons=document.querySelectorAll('button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML==="="){
            string=eval(string);
            document.querySelector('input').value=string;
            document.querySelector('input').className="positioning";
        }
        else if(e.target.innerHTML=='AC'){
            string="";
            document.querySelector('input').value=string;
            document.querySelector('input').className="positioning";
        }
        else{
        string=string+e.target.innerHTML;
        document.querySelector('input').value=string;
        document.querySelector('input').className="positioning";
        }
    })
})