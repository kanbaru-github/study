document.addEventListener('DOMContentLoaded', () => {
	document.getElementById('switch').addEventListener('click', (e) => {
		if (e.target = 'p#sort') {
			console.log('sort');
			history.pushState({}, '', "#sort");
			return false;
		} else if (e.target = 'p#delete') {
			console.log('delete');
			history.pushState({}, '', "#delete");
		}

		if (location.href.match(/#sort/)) {
			document.getElementById('current').textContent = 'sort';
		}
	});
	document.getElementById('reload').addEventListener('click', () => {
		location.reload();
	})
});