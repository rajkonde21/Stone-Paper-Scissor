const rule=document.querySelector(".rules");
const ruleBox=document.querySelector(".full-rule-box");
const closeRule=document.querySelector(".rules-box-close");
const Again=document.querySelector(".play-again");

ruleBox.style.display="none";

rule.addEventListener("click",()=>{
    ruleBox.style.display="block";

})

closeRule.addEventListener("click",()=>{
    ruleBox.style.display="none";
})

Again.addEventListener("click",()=>{
    window.location.href="index.html";

})

