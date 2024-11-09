let inpBtn=document.querySelectorAll(".inp");
let btnBtn=document.querySelector(".btn");
let sum=0;
btnBtn.addEventListener("click",()=>{
    console.log("clicked");
    sum=0;
    for (let index = 0; index < inpBtn.length-1; index++) {
        if (inpBtn[index].value==="") {
            sum=0;
            break;
        }       
        else{
            if(index>0 && index <3){
                sum+=parseFloat((inpBtn[index].value)/2);
            }
            else if(index>2 && index<7){
                sum+=parseFloat((inpBtn[index].value)/3);
            }
            else if(index==12){
                sum+=parseFloat((inpBtn[index].value)/3);
            }
            else{
                sum+=parseFloat(inpBtn[index].value);
            }
        } 
    }
    console.log(sum);
    let internal=sum;
    if(sum==0){
        alert("Enter all compulsory fields");
    }
    else if(inpBtn[13].value===""){
        h3Btn=document.querySelector(".h3");
        h3Btn.textContent="Internal Marks = "+internal.toFixed(2)+" which will be "+(internal/2).toFixed(2)+" out of 70";
    }
    else{
        console.log(inpBtn[13].value);
        sum=(internal/2);
        sum+=parseFloat(inpBtn[13].value)/2;
        console.log("sum",sum);
        let tm=sum;
        sum=parseFloat(sum);
        console.log(sum," ",internal," ",tm);
        h3Btn=document.querySelector(".h3");
        let s=grade(sum,tm*2,internal);
        h3Btn.textContent=s;
    }
})
let inp1Btn=document.querySelectorAll(".inp2");
let btn1Btn=document.querySelector(".btn2");
sum=0;
btn1Btn.addEventListener("click",()=>{
    sum=0;
    for (let index = 0; index < inp1Btn.length-1; index++) {
        if (inp1Btn[index].value==="") {
            sum=0;
            break;
        }       
        else{
            if(index>=2 && index <=3){
                sum+=parseFloat((inp1Btn[index].value)/2);
            }
            else if(index==5){
                sum+=parseFloat((inp1Btn[index].value)/3);
            }
            else{
                sum+=parseFloat(inp1Btn[index].value);
            }
        } 
    }
    console.log(sum);
    let internal=parseFloat(sum);
    if(sum==0){
        alert("Enter all compulsory fields");
    }
    else if(inp1Btn[6].value===""){
        h3Btn=document.querySelector(".h3-1");
        h3Btn.textContent="Internal Marks = "+internal.toFixed(2)+" which will be "+(internal).toFixed(2)+" out of 40";
    }
    else{
        sum+=parseFloat(inp1Btn[6].value);
        let tm=sum;
        sum=parseFloat(sum);
        h3Btn=document.querySelector(".h3-1");
        let s=grade(sum,tm*2,internal*2);
        h3Btn.textContent=s;
    }

})

let inp2Btn=document.querySelectorAll(".inp3");
let btn2Btn=document.querySelector(".btn3");
btn2Btn.addEventListener("click",()=>{
    sum=0;
    for (let index = 0; index < inp2Btn.length-1; index++) {
        if (inp2Btn[index].value==="") {
            sum=0;
            break;
        }       
        else{
            if(index==1){
                sum+=parseFloat(((inp2Btn[index].value)/300)*50);
            }
            
            else{
                sum+=parseFloat(inp2Btn[index].value);
            }
        } 
    }
    let internal=sum;
    console.log(sum);
    if(sum==0){
        alert("Enter all compulsory fields");
    }
    else if(inp2Btn[4].value===""){
        h3Btn=document.querySelector(".h3-3");
        h3Btn.textContent="Internal Marks = "+internal.toFixed(2)+" which will be "+(internal).toFixed(2)+" out of 140";
    }
    else{
        sum+=parseFloat(inp2Btn[4].value);
        let tm=sum;
        sum=parseFloat(sum);
        h3Btn=document.querySelector(".h3-3");
        let s=grade(sum/2,tm,internal);
        h3Btn.textContent=s;
    }
})
let inp3Btn=document.querySelectorAll(".inp4");
let btn3Btn=document.querySelector(".btn4");

btn3Btn.addEventListener("click",()=>{
    sum=0;
    console.log("3");
    for (let index = 0; index < inp3Btn.length-1; index++) {
        if (inp3Btn[index].value==="") {
            sum=0;
            break;
        }       
        else{
            if(index==0){
                sum+=parseFloat(((inp3Btn[index].value)/300)*45);
            }
            
            else{
                sum+=parseFloat(inp3Btn[index].value);
            }
        } 
    }
    console.log("4");
    let internal=sum;
    console.log(sum);
    if(sum==0){
        alert("Enter all compulsory fields");
    }
    else if(inp3Btn[2].value===""){
        h3Btn=document.querySelector(".h3-4");
        h3Btn.textContent="Internal Marks = "+internal.toFixed(2)+" which will be "+(internal.toFixed(2))+" out of 60";
    }
    else{
        sum+=parseFloat(inp3Btn[2].value);
        let tm=sum;
        sum=parseFloat(sum);
        h3Btn=document.querySelector(".h3-4");
        let s=grade(sum,tm*2,internal*2);
        console.log(s);
        h3Btn.textContent=s;

    }
})
let inp4Btn=document.querySelectorAll(".inp5");
let btn4Btn=document.querySelector(".btn5");

btn4Btn.addEventListener("click",()=>{
    for (let index = 0; index < inp4Btn.length; index++) {
        if (inp4Btn[index].value==="") {
            sum=-1;
            break;
        }       
         
    }
    if(sum==-1){
        alert("Enter all compulsory fields");
    }
    else{
    sum=parseFloat(inp4Btn[0].value)/(inp4Btn[1].value);
    
    h3Btn=document.querySelector(".h3-5");
    let s=grade(sum*100,0,0);
    console.log(s);
    h3Btn.textContent=s;
    }
})
let grade1="";
let grade2="";
let str="";
function grade(sum,tm,internal) {
    console.log("new = ",sum,tm,internal);
    
    if(sum>100 || sum<0){
        str="Cannot be Generated";
        return str;
    }
    else if(sum===100){
        grade1="A+";
        grade2="A+";
    }
    else if(sum<100 && sum>94 ){
        grade1="A";
        grade2="A";
    }
    else if(sum<95 && sum>90){
        grade1="A";
        grade2="A";
    }
    else if(sum<90 && sum>84){
        grade1="A";
        grade2="B+";
    }
    else if(sum>74){
        grade1="B+";
        grade2="B+";
    }
    else if(sum>64){
        grade1="B";
        grade2="B";
    }
    else if(sum>54){
        grade1="C+";
        grade2="C+";
    }
    else if(sum>44){
        grade1="C";
        grade2="C";
    }
    else if(sum>33){
        grade1="D";
        grade2="D";
    }
    else{
        grade1="F";
        grade2="F";
    }
    if(tm===0){
        str=` Total Marks = ${(sum).toFixed(2)} and the most probable grade will be ${grade1} `;
        
    }
    else if(grade1!=grade2){
        str=` Internal Marks = ${(internal/2).toFixed(2)} and Total Marks = ${(tm/2).toFixed(2)} and the most probable grade will be ${grade1} or ${grade2}`;
        
    }
    else{
        str=` Internal Marks = ${(internal/2).toFixed(2)} and Total Marks = ${(tm/2).toFixed(2)} and the most probable grade will be ${grade1}`;
    }
    console.log(str);
    return str;
}
