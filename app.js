$(function(){
	var domain = "satopro2019.tumblr.com";
	var api_key = "iuq0bEpQe0JaH1UdInjo8GppXoYPvcpMEFT3l3vQGxVFuVkYVT"

	$.ajax({
		url: "http://api.tumblr.com/v2/blog/"+domain+"/posts?api_key="+api_key,
		dataType: "json"
	
	}).done(function(evt){
		var img = new Image();
		var ms = 200;
		try{
			$("#post").fadeIn(ms);
			$("#post-ttl").text(evt.response.posts[0].title);
			$("#post-body").html(evt.response.posts[0].body);
			$("#post-footer").text(evt.response.posts[0].date);
			$("#post-tags").text("Tagged: " + evt.response.posts[0].tags + ".");

			$("#post-link").attr({
				href:evt.response.posts[0].post_url,
				target:"_blank"
			});
		} catch(err){
			console.log(err)
		}
	});
});	
