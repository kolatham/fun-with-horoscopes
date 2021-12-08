const kanyeUrl = 'https://api.kanye.rest';

function getKanye(requestUrl) {
    fetch(requestUrl)
	.then (function (response) {
		console.log(response.status);
		return (response.json());
	})
	.then (function (data) {
		console.log("Here is the return from Kanye");
		console.log(data.quote);
		console.log("-----------------------------");
	});
}

getKanye(kanyeUrl);