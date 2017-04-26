window.onload = function(){
	var compet1_li = document.getElementById('compet1_li');
	var compet2_li = document.getElementById('compet2_li');
	var compet1 = document.getElementById('compet1');
	var compet2 = document.getElementById('compet2');
	compet1_li.onclick=function(){
		compet1.style.display = "block";
		compet2.style.display = "none";
	}
	compet2_li.onclick=function(){
		compet1.style.display = "none";
		compet2.style.display = "block";
	}
}