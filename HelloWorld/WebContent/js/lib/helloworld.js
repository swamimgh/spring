define(['jquery','jquery-ii8n','datatables','chosen'],function($,$ii8n,$datetables,chosen){
	return function(){
		console.log("hello world");
		
		var json;
			 $("#submit").click(function(){
			        alert($("#name").val());	
						
						
			 
				$.ajax({
					url:"../rest/webservice/getHelloWorld",
					dataType:"text",
					async:true,
					cache:false,
					success :function(result){
					
						console.log(result);
					
					},
					
					error:function(msg){
						console.log(msg);
					}
				});});
			 
			 onload();
			 function onload()
			 {
				 $.ajax({
					 url:"http://localhost:8080/rdm/ServiceController?wsname=allDropdown",
						dataType:"text",
						async:true,
						cache:false,
						success :function(result){
						 json = JSON.parse(result);
							$("#techslt").html('');
							$("#subtechslt").html('');
							
							$.each(json.techModelList,function(index,dataItem){
								
									$("#techslt").append("<option value='"+dataItem.tech+"'>"+dataItem.tech+"</option>");
									
								
								$("#subtechslt").append("<option value='"+dataItem.techId+"'>"+dataItem.subTech+"</option>");
							});
							
							$("#techslt").trigger("liszt:updated");
							$("#subtechslt").trigger("liszt:updated");
						},
						
						
						
						error:function(msg){
							console.log(msg);
						}
				 })
			 }
			 
			 $("#techslt").off('change').on('change',function(){
					var catalogLst = [];
					var subTechData = filterData(json.techModelList, $("#techslt option:selected").val()); 
					$("#subtechslt").html(''); 
					$.each(subTechData,function(index,dataItem){
						$("#subtechslt").append("<option value='"+dataItem.techId+"'>"+dataItem.subTech+"</option>");
					});
			 });
			 
			 function filterData(json,targetValue){
					var returnedData = $.grep(json, function(element, index){
						return element.tech == targetValue;
					}); 
					
					return returnedData;
				}
				getProjects("MY PROJECTS");
				var errmsg = $(".errmsg").text();
					function getProjects(projType) {
						var jsonObject = {
								"projType"	: projType,
								"projectId" : ""
						};
						var jsonStr = JSON.stringify(jsonObject);
						var jsonInput  = {
								jsonInput : jsonStr
								
						};
						$.ajax({
							url : "../rest/webservice/dataTable?ssoId=501244127",
							dataType : "json",
							type  : "GET",
							async : true,
							cache : false,
							data  : jsonInput,
							success : function(jsonResponse) {
								if(jsonResponse.status=="SUCCESS"){
									var projects = jsonResponse.projects;
									if(typeof projects === 'undefined'){projects=null;}
									populateProjectTab(projects);
								} else{
									$common.popErrorMessageTimer('fade1',errmsg);
								}
							},
							error : function(XMLHttpRequest, textStatus,errorThrown) {
								$common.popErrorMessageTimer('fade1',errmsg);
							}
						});
					}
					
					function populateProjectTab(jsonData){

						$("#allprojectIddiv").empty();				
						$("#allprojectIddiv").append('<table id="allprojectId" class="table table-bordered allproject" data-table-name="allproject-table"></table>');

						
								
						projTab = $('#allprojectId').dataTable({
							'sScrollY':'35vh',
							'isResponsive' : true,	
							"bScrollCollapse": true,
							"bAutoWidth" : false, 
							'bSort': true,
							'bFilter':true,
							'bPaginate':true,
							'bInfo':true,
							'bLengthChange': true,
							'oLanguage': { "sSearch": "" },
							'sDom': "fTRrt<'table-controls'<'pull-left'l><'pull-right'ip>>",
							'aLengthMenu': [[ 25, 50, 100, -1], [ 25, 50, 100, "All"]],
							"iDisplayLength": 25,
							
							"aaData" : jsonData,
							"aoColumns" : [ 
									          {"mData":"projectId","sTitle": "Project ID","sWidth":"15%"},
									          {"mData":"name","sTitle": "Name","sWidth":"30%"},
											  {"mData":"description","sTitle": "Description","sWidth":"25%"},
											  {"mData":"customer","sTitle": "Customer","sWidth":"10%"},
											  {"mData":"owner","sTitle": "Owner","sWidth":"10%"},
											  {"mData":"shared","sTitle": "Shared","sWidth":"10%"}],
							"fnRowCallback" : function(nRow, aData, iDisplayIndex, iDisplayIndexFull) {
								
													
													var projIdHtml = '<a id="aId" href="#" caseIds = "'+aData["caseIds"]+'"  name="'+aData["name"]+'"  description="'+aData["description"]+'" projectId="'+aData["projectId"]+'" shared="'+aData["shared"]+'" customer="'+aData["customer"]+'" owner="'+aData["owner"]+'" class="projectIdLink" data-toggle="modal" data-target="#project_cd">'+aData["projectId"]+'</a> ';
													$('td:eq(0)', nRow).html(projIdHtml);
													modalPopup();
													
												}	
							
						});
				
					
				
						modalPopup();
					}
					
					function modalPopup(){
					
					$('.projectIdLink').off('click').on('click', function(event){
						
						$("#project_cd").show();
						var projectId = $(event.target).attr("projectId");
						var name = $(event.target).attr("name");
						var shared = $(event.target).attr("shared");
						var description = $(event.target).attr("description");
						var customer  = $(event.target).attr("customer");
						var owner = $(event.target).attr("owner").substring(0,9);
						
						var row = {};
						var tabHtml = '<table class="table table-bordered mgview_table"><thead>';
						row["header"] =  '<tr><th class="text">header</th>';
						row["projectId"] =  '<tr><td class="text"  width="250"><b>Project Id</b></td>';
						row["name"] =  '<tr><td class="text"><b>Name</b></td>';
						row["desc"] =  '<tr><td class="text"><b>Description</b></td>';
						row["customer"] =  '<tr><td class="text"><b>Customer</b></td>';
						row["owner"] =  '<tr><td class="text"><b>Owner</b></td>';
						row["shrd"] =  '<tr><td class="text"><b>Shared</b></td>';
						
						row["projectId"] = row["projectId"]+'<td class="text" width="300px">'+projectId+'</td>';
						row["name"] = row["name"]+'<td class="text" width="300px">'+name+'</td>';
						row["desc"] = row["desc"]+'<td class="text" width="300px">'+description+'</td>';
						row["shrd"] = row["shrd"]+'<td class="text" width="300px">'+shared+'</td>';
						row["customer"] = row["customer"]+'<td class="text" width="300px">'+customer+'</td>';
						row["owner"]=row["owner"]+'<td class="text" width="300px">'+owner+'</td>';
						
						tabHtml = tabHtml + row["header"]+'</tr></thead><tbody>'+
						row["projectId"] +'</tr>'+
						row["name"] +'</tr>'+
						row["desc"] +'</tr>'+
						row["customer"] +'</tr>'+
						row["owner"] +'</tr>'+
						row["shrd"] +'</tr></tbody>';
						$("#RowDetailedViewDiv").empty();
						$("#RowDetailedViewDiv").html(tabHtml);
					//	$("#RowDetailedViewDiv").show();
						
					});}
					$('.close').off('click').on('click', function(){
						$("#project_cd").hide();
					});
	};
	});
