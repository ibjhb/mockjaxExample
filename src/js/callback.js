$(function(){
	
	ibjhb.mock = {
		beer : [
			{
				 id		: 1
				,name	: 'Sam Adams'
			}
			,{
				 id		: 2
				,name	: 'Magic Hat'
			}
		]
	};
	
	$.mockjax(function(settings){
		// Try to match our API URL string
		var service = settings.url.match(/\/api\/beer\/get\/(.*)$/i);
		
		// If we find a match, handle the response
		if (service) {
			
			// Convert the string to a number
			var beer_id = Number(service[1]);
			
			// JavaScript counts from 0
			var response = ibjhb.mock.beer[beer_id - 1];
			
			// If the response doesn't exist, defer to making an ajax, 
			// otherwise create our return JSON packet to be returned
			return (typeof response === 'undefined') 
				? undefined 
				: 	{
						responseText : {
							 success 	: true
							,beer		: response
						}
					}
		}
		return;
	});
	
	
	// Ajax call for beer 1
	$.getJSON('/api/beer/get/1', function(resp){
		var html = (resp.success) ? '<p>Your beer 1 is ' + resp.beer.name + '</p>': 'No beer today';
		$('#content').append(html);
	});
	
	// Ajax call for beer 2
	$.getJSON('/api/beer/get/2', function(resp){
		var html = (resp.success) ? '<p>Your beer 1 is ' + resp.beer.name + '</p>': 'No beer today';
		$('#content').append(html);
	});
	
	// Demonstrating an error call.  If you look in Firebug, you'll see the Ajax call (and it will error)
	$.getJSON('/api/beer/get/999');
});
