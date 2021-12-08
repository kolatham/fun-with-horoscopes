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
		console.log("Here is the return from aztro");
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

function getZodiakFromDate(date) {

	console.log("zodiak");
	console.log(date);

	let month = date.getMonth(); //0-11
	let day = date.getDate(); //1-31

	console.log(month + "/" + day);

	const zodiak = ["capricorn", "aquarius", "pisces", "aries", "taurus", "gemini", "cancer", "leo", "virgo", "libra", "scorpio", "sagittarius"];
	const zodiakBreakPoints = [20,18,20,19,20,20,22,22,22,22,21,21];

	if (day < zodiakBreakPoints[month]) {
		return zodiak[month];
	} 
	
	if (month < 11) {
		return zodiak[month + 1];
	}

	return zodiak[0];
}

console.log(getZodiakFromDate(new Date()));

getAztro(aztroUrl);