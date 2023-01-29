document.addEventListener('DOMContentLoaded', () => {
	// document.getElementById('switch').addEventListener('click', (e) => {
	// 	if (e.target = 'p#sort') {
	// 		console.log('sort');
	// 		history.pushState({}, '', "#sort");
	// 		return false;
	// 	} else if (e.target = 'p#delete') {
	// 		console.log('delete');
	// 		history.pushState({}, '', "#delete");
	// 	}

		if (location.href.match(/#sort/)) {
			document.getElementById('current').textContent = 'sort';
		}
	// });

	const contentType = document.getElementById('content_type');
	document.getElementById('sort').addEventListener('click', () => {
		// ページを読み込まずにでURLを変更
		history.pushState({}, '', "#sort");
		contentType.classList.remove('delete');
	});
	document.getElementById('delete').addEventListener('click', () => {
		history.pushState({}, '', "#delete");
		contentType.classList.add('delete');
	});

	if (location.href.match(/#delete/)) {

	}

	document.getElementById('reload').addEventListener('click', () => {
		location.reload();
	})
});