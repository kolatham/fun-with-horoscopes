const inspirationalUrl = 'https://type.fit/api/quotes';

function getInspirational(callbackFun, errorCallback) {

    fetch(inspirationalUrl)
	.then (function (response) {
		if (response.ok) {
			return (response.json());
		}
		errorCallback("Horoscope retrieval error.  Code " + response.status);
		return false;
	})
	.then (function (data) {
		if (data) { // select a random quote from the many provided
			callbackFun(data[Math.floor(Math.random()*data.length)]);
		}
	});
}