$(function(){
	
	$.mockjax({
		url: '/api/beer/random',
		responseTime: 150,
		responseText: {
			 success	: true
			,beerName	: 'Sam Adams'
		}
	});
	
	$.getJSON('/api/beer/random', function(resp){
		var html = (resp.success) ? 'Your beer today is ' + resp.beerName : 'No beer today';
		$('#content').html(html);
	});
	
});
