
function displayRadioValue() { 
	var ele = document.getElementsByName('hughJackman'); 
	for(i = 0; i < ele.length; i++) { 
		if(ele[i].checked) 
		document.getElementById("result").innerHTML = ele[i].value; 
	}
	var ele2 = document.getElementsByName('largestCountry'); 
	for(i = 0; i < ele2.length; i++) { 
		if(ele2[i].checked) 
		document.getElementById("result2").innerHTML = ele2[i].value; 
  }
  var ele3 = document.getElementsByName('birdsBody'); 
  for(i = 0; i < ele3.length; i++) { 
		if(ele3[i].checked) 
	  document.getElementById("result3").innerHTML = ele3[i].value; 
  }
  var ele4 = document.getElementsByName('verbSteal'); 
  for(i = 0; i < ele4.length; i++) { 
		if(ele4[i].checked) 
		document.getElementById("result4").innerHTML = ele4[i].value; 
  }
  var ele5 = document.getElementsByName('mostSun'); 
  for(i = 0; i < ele5.length; i++) { 
		if(ele5[i].checked)
		document.getElementById("result5").innerHTML = ele5[i].value; 
  }
  var ele6 = document.getElementsByName('kingdom'); 
  for(i = 0; i < ele6.length; i++) { 
		if(ele6[i].checked) 
		document.getElementById("result6").innerHTML = ele6[i].value; 
  }
  var ele7 = document.getElementsByName('nextInLine'); 
  for(i = 0; i < ele7.length; i++) { 
		if(ele7[i].checked) 
		document.getElementById("result7").innerHTML = ele7[i].value; 
  }
  var ele8 = document.getElementsByName('thatcher'); 
  for(i = 0; i < ele8.length; i++) { 
		if(ele8[i].checked) 
		document.getElementById("result8").innerHTML = ele8[i].value; 
  }
  var ele9 = document.getElementsByName('toyStory'); 
  for(i = 0; i < ele9.length; i++) { 
		if(ele9[i].checked) 
		document.getElementById("result9").innerHTML = ele9[i].value; 
  }
  var ele10 = document.getElementsByName('planets'); 
  for(i = 0; i < ele10.length; i++) { 
		if(ele10[i].checked)
		document.getElementById("result10").innerHTML = ele10[i].value; 
  }
	var ele11 = document.getElementsByName('warUsa'); 
  for(i = 0; i < ele11.length; i++) { 
		if(ele11[i].checked) 
		document.getElementById("result11").innerHTML = ele11[i].value; 
  }
  var ele12 = document.getElementsByName('tvHistory'); 
  for(i = 0; i < ele12.length; i++) { 
		if(ele12[i].checked) 
		document.getElementById("result12").innerHTML = ele12[i].value; 
  }
  var ele13 = document.getElementsByName('femalepolice'); 
  for(i = 0; i < ele13.length; i++) { 
		if(ele13[i].checked) 
		document.getElementById("result13").innerHTML = ele13[i].value; 
  }
  var ele14 = document.getElementsByName('lowestEarth'); 
  for(i = 0; i < ele14.length; i++) { 
		if(ele14[i].checked) 
		document.getElementById("result14").innerHTML = ele14[i].value; 
  }
  var ele15 = document.getElementsByName('blackDeath'); 
  for(i = 0; i < ele15.length; i++) { 
		if(ele15[i].checked) 
		document.getElementById("result15").innerHTML = ele15[i].value; 
  }
  var ele16 = document.getElementsByName('chickHatch'); 
  for(i = 0; i < ele16.length; i++) { 
		if(ele16[i].checked) 
		document.getElementById("result16").innerHTML = ele16[i].value; 
  }
  var ele17 = document.getElementsByName('canadalang'); 
  for(i = 0; i < ele17.length; i++) { 
		if(ele17[i].checked) 
		document.getElementById("result17").innerHTML = ele17[i].value; 
  }
  var ele18 = document.getElementsByName('humanBrain'); 
  for(i = 0; i < ele18.length; i++) { 
		if(ele18[i].checked) 
		document.getElementById("result18").innerHTML = ele18[i].value; 
  }
  var ele19 = document.getElementsByName('tvShow'); 
  for(i = 0; i < ele19.length; i++) { 
		if(ele19[i].checked) 
		document.getElementById("result19").innerHTML = ele19[i].value; 
  }
  var ele20 = document.getElementsByName('lexicon'); 
  for(i = 0; i < ele20.length; i++) { 
		if(ele20[i].checked) 
		document.getElementById("result20").innerHTML = ele20[i].value; 
}

//function checkScore() {
	var temp = $('body').text();
	var count = temp.match(/Correct - Well Done!/g);
  alert("You scored " + count.length + " out of 20!");
				}
