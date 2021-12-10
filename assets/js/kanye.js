const kanyeUrl = 'https://api.kanye.rest';

// The output is simply:
// 		Object.quote
function getKanye(callbackFun, errorCallback) {
    fetch(kanyeUrl)
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