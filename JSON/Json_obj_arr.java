//how to put values in jsonObject, JsonArray.
	JSONObject json_request = new JSONObject();
	JSONArray data_jsonArray = new JSONArray();
	JSONObject json_response = new JSONObject();
	
	json_request.put("Greetings", "hello JSON");
	data_jsonArray.put(json_request);
	json_response.put("Data", data_jsonArray);	
	
	//how to send json response from one jsp page to another jsp page.
	
	while(rs.next()){
					JSONObject json_req=new JSONObject();      
					db_name = rs.getString("Database").toString();
					json_req.put("db", db_name);
					data_jsonArray.put(json_req);
				}
				//log.info("data_json: " +data_jsonArray);
		        json_response.put("Data", data_jsonArray);
				//log.info("json response: " +json_response);
				if(rs!=null) rs.close();rs=null;
				if(ps!=null) ps.close();ps=null;
				if(con1 != null) { con1.close();con1 = null; }
				response.setContentType("application/Json");
	        	response.getWriter().write(json_response.toString());
				//out.write(json_response.toString());