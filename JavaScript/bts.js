function display(){
		var firstname = document.getElementById("first name").value;
		if(firstname == ""){
			alert("welcome beautiful")
			alert("Please enter your first name");
			return false;
		}

		var lastname = document.getElementById("last name").value;
		if(lastname == ""){
			alert("Please enter your last name");
			
			return false;
		}
		alert("Okay!you're all done Sweety...Lets goooo!!!!!");
		//document.write("Hey! you.. Yeah you look so beautiful when you smile");
		
		var info = "<table cellpadding='5' cellspacing='7' border='6'><tr><th>First Name</th><th>Last Name</th></tr><tr><td>"+firstname+"</td><td>"+lastname+"</td></tr></table>";
		document.getElementById("tableinfo").innerHTML=info;
		document.write(info);
		document.write("<br>")
		
	}