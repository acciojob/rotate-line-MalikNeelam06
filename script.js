//your JS code here. If required.
let bold=document.getElementsBytag("hr");
// let button=getElementById("btn");
let degree=0;
// button.addEventListener("click",()=>{
	degree+=5;
// });

setInterval(()=>{
		bold.style.transform=`rotate(${degree}deg)`
},5)