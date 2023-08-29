//your JS code here. If required.
let bold=document.getElementsBytag("hr");
// let button=getElementById("btn");
let degree=0;
// button.addEventListener("click",()=>{
	
// });

setInterval(()=>{
	degree+=5;
		bold.style.transform=`rotate(${degree}deg)`
},5)