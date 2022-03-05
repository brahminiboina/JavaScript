<tr>
  			<td align="right" width="40%">Source table index column&nbsp;&nbsp;</td>
  			<td  width="50%">
  				<select  name="source_index_column" id="source_index_column"  class="form-control">
  				 	<option value="select">Select </option>	 
  				</select>
				<font color="green"><p id = "min_ts"></p></font>
			</td>
		</tr>

//ajax on blur function:


$(document).ready(function(){  
		$('#msg').empty() 
		//var mr_id = document.getElementById("mr_id").value;
	    $("#name").blur(function(){  
	    	var name = document.getElementById("name").value;
			console.log(name);
			$('#msg').empty(); 
	       	isExists = false;
			 $.ajax({
					type: 		"post",
					url: 		"merchant_validate_name.jsp?name="+name,
					success:	function(msg) {
				
					var	response = msg.trim();
					console.log(response);
						if(response=="E"){
							isExists = true;
							console.log(response);
							
							const node = document.createTextNode("Merchant with this name already exists");
							document.getElementById("msg").appendChild(node);

						}
						
									
				},
			 });
	    });  
	});  