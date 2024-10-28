var age=20;
var citizenship=true;
if(age>=18&&citizenship==true){
    console.log("can vote");
}
else{console.log("cannot vote");}//can vote


var age=20;
var invitationclub=true;
if(age>=21||invitationclub==true){
    console.log("can enter club");
}
else{console.log("cannot enter club");}//can enter club


var ismember=false;
var age=70;
if(ismember==true||age>=65){
    console.log("isEligibleForDiscount");}

else{console.log("isNotEligibleForDiscount");}//isEligibleForDiscount



var gpa=3.6;
var extracurriculars=true;
var recomandations=false;
if(gpa>=3.5&&extracurriculars==true||recomandations==true){
    console.log("iseligibleforscholarship");
}
else{console.log("noteligible");}//iseligibleforscholarship