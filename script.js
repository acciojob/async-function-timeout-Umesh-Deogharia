//your JS code here. If required.

const output = document.querySelector("#output");
const btn = document.querySelector("#btn");
const text = document.querySelector("#text");
const delay = document.querySelector("#delay");

// const name = prompt("What is your name");
// 	  const delay = prompt("What delay do you want");
btn.addEventListener("submit", async()=>{
	output.innerText="";
	const message = text.value;
	const delayTime = Number(delay.value);
	async new Promise(res => res,delayTime)
	output.innerText = ""
})

if () {
	
}
// 	prompt("");
// 	prompt("");
