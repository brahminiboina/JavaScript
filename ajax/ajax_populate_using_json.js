
/* 	used to populate the index columns in a drop down box dynamically based on source table. */	
 	function myFunction() {
		var source_table = document.getElementById("source_table").value;
		var source_index_column = document.getElementById("source_index_column");
		$('#source_index_column').empty(); 
		  $.ajax({
				type: 		"post",
				url: 		"WipayBackupReportIndexColumns.jsp?source_table="+source_table+"&index_column_type=source",
				success:	function(data) {
					//alert(data);
					 if (data && data.length > 0) { 
						 const txt = data;
						const obj=JSON.parse( txt ); 
						console.log('objects are ' + obj + '.');//parse response string
						console.log('Columns are ' + obj.Data + '.');
					    var columns = obj.Data; //value of columns
						for( let i in columns){
							const jsonObj = columns[i];
							console.log('Columns are ' + jsonObj + '.');
							/* var col = JSON.stringify(jsonObj);
							console.log(' after stringify ' +col+ '.') ; */
							 var opt = document.createElement('option');
							// alert(jsonObj.columns);
						      opt.text = jsonObj.columns;
						      opt.value= jsonObj.columns;
						      source_index_column.add(opt, null);
						} 
					 }		
			},
		
		 });
		}
		
		<td width="50%"><select  name="source_table" id="source_table"  class="form-control" enabled onchange="myFunction()">
		