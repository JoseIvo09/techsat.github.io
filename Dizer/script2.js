document.addEventListener('DOMContentLoaded', function() {
	const loadButton = document.getElementById("loadButton");
	const myFrame = document.getElementById("myFrame");

	loadButton.addEventListener('click', loadUrl);

	function loadUrl() {
		var part1 = document.getElementById("editablePart1").value;
		var part2 = document.getElementById("editablePart2").value;
		if(part1.trim() === '' || part2.trim() === '') {
			alert('Por favor, insira ambas as partes editáveis da URL.');
			return;
		}
		var newUrl = "https://m.pgsoft-games.com/" + encodeURIComponent(part1) + "/index.html?btt=1&ot=1744b4161227808290cb752a80b2b299&ops=gnGGdoSD5QQGAdaVdYEHptKRb9nq3ELQidSGBf7uqiHQzYcvcfDmDbVXkR6tjr62kqPk46XxywaG%2Bc%2FwSWJJaVDNJqdCahUG5nXPS%2FOEBvRp7791xXGl9v8zVUb3Y0K8NT9spt50P8hKQ6x203E28YGwRJT0kpKNWmF9yCfbpkGL9OnV2fESx9tHK3pnpHdD&__refer=m.pg-redirect.net&or=static.pgsoft-games.com&l=" + encodeURIComponent(part2) + "&__hv=1fb5a055";
		myFrame.src = newUrl;
	}

	function updateClock() {
		const now = new Date();
		const time = now.toLocaleTimeString('pt-BR', { 
			hour: '2-digit', 
			minute: '2-digit', 
			second: '2-digit' 
		});
		document.getElementById("clock").innerHTML = time;
	}

	setInterval(updateClock, 999);
});
