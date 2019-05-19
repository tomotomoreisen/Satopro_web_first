$(document).ready(function(){
$("#dialog_intro").dialog({ autoOpen: false, modal:true,  height: 750, width:750, draggable: false, show: "fade", hide: "fade", resizable: false ,open: function(){
		$('.ui-widget-overlay').addClass('custom-overlay');
	}
});
$("#intro").click(function(){
	$("#dialog_intro").dialog("open");	
})


})
