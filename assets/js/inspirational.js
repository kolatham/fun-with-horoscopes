const inspirationalUrl = 'https://type.fit/api/quotes';

function getInspirational(requestUrl) {

    fetch(requestUrl)
	.then (function (response) {
		console.log(response.status);
		return (response.json());
	})
	.then (function (data) {
		console.log("Here is the return from Inspirational");
		console.log("-----------------------------");
        console.log(data);
        let index = Math.floor(Math.random()*data.length);
        console.log(data[index].text);
        console.log("  -- quote from " + data[index].author);
		console.log("-----------------------------");
	});
}

getInspirational(inspirationalUrl);