//your JS code here. If required.
let bold=getElementById("bold");
let button=getElementById("btn");
let degree=0;
button.addEventListener("click",()=>{
	degree+=5;
	bold.transform=`rotate(${degree}deg)`;
});