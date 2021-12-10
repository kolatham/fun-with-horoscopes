const icanhazdadjokeUrl = 'https://icanhazdadjoke.com';

function getICanHazDadJoke(callbackFun, errorCallback) {
    const headers = new Headers();
    headers.append("User-Agent", "https://github.com/kolatham/fun-with-horoscopes");
    headers.append("Accept", "application/json");

    const request = new Request(icanhazdadjokeUrl, {
        headers: headers
    });

    fetch(request)
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