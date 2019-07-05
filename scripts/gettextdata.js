$(function(){
$.ajax({
	type: "GET",
	url: "description.txt",
	dataType: "text"
})

.done(function(res){
	$("#description").text(res);

})

.fail(function(res){
	console.log("erro")
});


});
