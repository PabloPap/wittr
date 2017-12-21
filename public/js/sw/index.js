self.addEventListener('fetch', function(event) {
	// TODO: respond to all requests with an html response
	// containing an element with class="a-winner-is-me".
	// Ensure the Content-Type of the response is "text/html"
	event.respondWith(
		new Response("<p class='a-winner-is-me'>this is a paragraph</p>", {
			headers: {"Content-Type":"text/html"}
		})
	);
  console.log(event.request); 
});