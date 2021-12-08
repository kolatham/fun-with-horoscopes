const aztroUrl = 'https://aztro.sameerkumar.website/?sign=aries&day=today';

function getAztro(requestUrl) {
    fetch(requestUrl, {
		method: 'POST'
	})
	.then (function (response) {
		console.log(response.status);
		return (response.json());
	})
	.then (function (data) {
		console.log(data.date_range);
		console.log(data.current_date);
		console.log(data.description);
		console.log(data.compatibility);
		console.log(data.mood);
		console.log(data.color);
		console.log(data.lucky_number);
		console.log(data.lucky_time);
		console.log("-----------------------------");
	});
}

console.log("Here is the return from aztro");
getAztro(aztroUrl);