
//we dont want all data so lets set limit to 30 only
//this url fetch will give palce holder pic only
//so we will generate random pics from picsum.photos
//we will be merging 2 APIs

//as at first we only get image of color 
//but we want some asom imgs
//we will be using lorem picsum


window.addEventListener('load', (event) => {
setTimeout(()=>{
	const centerdiv =document.getElementById('center-div');
fetch('https://jsonplaceholder.typicode.com/photos?_limit=30')
.then((datas)=>{
	return datas.json()
}).then((jsondata)=>{
	jsondata.map((val)=>{
			key=val.id;
		let img=document.createElement("img");
		// img.src=val.url;//replacing this
				// img.src="https://picsum.photos/200/300?random=2";
		// img.src=`https://picsum.photos/200/300?random=${val.id}`;
		img.src=`https://picsum.photos/200/300?grayscale&random=${val.id}`;
		centerdiv.appendChild(img);
	}); 
});
},4000);
});
setTimeout(myTimeout1, 1000)
setTimeout(myTimeout2, 2000)
setTimeout(myTimeout3, 3000)
setTimeout(myTimeout4, 4000) 



function myTimeout1() {
  document.getElementById("demo").innerHTML = "3";
}
function myTimeout2() {
  document.getElementById("demo").innerHTML = "2";
}
function myTimeout3() {
  document.getElementById("demo").innerHTML = "1";
}
function myTimeout4() {
  document.getElementById("demo").innerHTML = "";
}

		