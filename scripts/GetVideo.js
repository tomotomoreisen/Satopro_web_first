$(function(){
	var id = "UCjNbOD6Q1mnilL35BtZ6aYQ"; /*チャンネルid*/
	var key = "AIzaSyDwSb2U_fKKLogP79QtUGoL8Objj82VG_Y"; /* api key*/
	$.ajax({
		type: "GET",
		url: "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=" + id + "&key=" + key + "&maxResults=10&order=date",
		dateType: "json"
	})

	.done(function(res){
		var videoId = res.items[0].id.videoId;
		console.log(res.items[0].snippet.title);
		console.log(res.items[0].id);
		var videoTitle = res.items[0].snippet.title;
		var playerHtml = '<iframe type="text/html" width="640" height="360" src="http://www.youtube.com/embed/' + videoId + '?controls=0&amp;showinfo=0" frameborder="0"; encrypted-media" allowfullscreen><\/iframe>'
		$('#videoPlayer').append(playerHtml);
	})

	.fail(function(res){
		console.log(res);
		console.log("err");	
	});
});
