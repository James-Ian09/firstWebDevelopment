
	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
		
	
	document.body.addEventListener('mouseover', function(event) {
		if (event.target.tagName.match(/H1|H2|P|A|LI|.container .items1 .computer_Studies/)) {
			event.target.style.color = "green";
		}
	});

	document.body.addEventListener('mouseout', function(event) {
		if (event.target.tagName.match(/H1|H2|P|A|LI/)) {
			event.target.style.color = ""; // reset the color to its original value
		}
	});

