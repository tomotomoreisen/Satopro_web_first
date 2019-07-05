$(document).ready(function(){
$("#dialog_intro").dialog({ 
	autoOpen: false, 
	modal:true,  
	height: 750, 
	width:750, 
	draggable: false, 
	show: "fade", 
	hide: "fade", 
	resizable: false ,
	open: function(){
		$('.ui-widget-overlay').addClass('custom-overlay');
	}
});
$("#intro").click(function(){
	$("#dialog_intro").dialog("open");	
})
$("#dialog_intro .ui-dialog-titlebar-close").bind("click", function() {
  return $("#dialog_intro").dialog("close");
});

$("#dialog_act").dialog({ 
	autoOpen: false, 
	modal:true,  
	height: 750, 
	width:750, 
	draggable: false, 
	show: "fade", 
	hide: "fade", 
	resizable: false ,
	open: function(){
		$('.ui-widget-overlay').addClass('custom-overlay');
	}
});
$("#activity").click(function(){
	$("#dialog_act").dialog("open");	
})
$("#dialog_act .ui-dialog-titlebar-close").bind("click", function() {
  return $("#dialog_act").dialog("close");
});

$("#dialog_member").dialog({ 
	autoOpen: false, 
	modal:true,  
	height: 750, 
	width:750, 
	draggable: false, 
	show: "fade", 
	hide: "fade", 
	resizable: false ,
	open: function(){
		$('.ui-widget-overlay').addClass('custom-overlay');
	}
});
$("#member").click(function(){
	$("#dialog_member").dialog("open");	
})
$("#dialog_member .ui-dialog-titlebar-close").bind("click", function() {
  return $("#dialog_member").dialog("close");
});



})
