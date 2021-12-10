const aztroUrl = 'https://aztro.sameerkumar.website/?sign=aries&day=today';

// This asynchronously returns the following Object to the callbackFun:
// data.date_range, data.current_date, data.description, data.compatibility, data.mood, 
// data.color, data.lucky_number, data.lucky_time
function getHoroscope(callbackFun, errorCallback) {
    fetch(aztroUrl, {
		method: 'POST'
	})
	.then (function (response) {
		if (response.ok) {
			return (response.json());
		}
		errorCallback("Horoscope retrieval error.  Code " + response.status);
		return false;
	})
	.then (function (data) {
		if (data) {
			callbackFun(data);
		}
	});
}

// This returns the zodiak for a give date
function getZodiakFromDate(date) {

	let month = date.getMonth(); //0-11
	let day = date.getDate(); //1-31

	const zodiak = ["capricorn", "aquarius", "pisces", "aries", "taurus", "gemini", "cancer", "leo", "virgo", "libra", "scorpio", "sagittarius"];
	const zodiakBreakPoints = [20,18,20,19,20,20,22,22,22,22,21,21];

	if (day < zodiakBreakPoints[month]) {
		return zodiak[month];
	} 
	
	return zodiak[(month + 1) % 11];
}