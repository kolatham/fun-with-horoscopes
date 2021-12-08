const icanhazdadjokeUrl = 'https://icanhazdadjoke.com';

function getIcanhazdadjoke(requestUrl) {
    const headers = new Headers();
    headers.append("User-Agent", "https://github.com/kolatham/fun-with-horoscopes");
    headers.append("Accept", "application/json");

    const request = new Request(requestUrl, {
        headers: headers
    });

    fetch(request)
	.then (function (response) {
		return (response.json());
	})
	.then (function (data) {
        console.log("Here is the return from icanhazdadjoke");
        console.log(data.joke);
        console.log("--------------------------------------");
	});
}

getIcanhazdadjoke(icanhazdadjokeUrl);
