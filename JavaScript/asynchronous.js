// Promiseのみ
new Promise(resolve => {
	setTimeout(() => {
		console.log(3);
		resolve();
	}, 1000)
}).then(() => {
	return new Promise(resolve => {
		setTimeout(() => {
			console.log(2);
			resolve();
		}, 1000);
	}, 1000)
}).then(() => {
	return new Promise(resolve => {
		setTimeout(() => {
			console.log(1);
			resolve();
		}, 1000);
	}, 1000)
});

// async/awaitを使用
countDown = async () => {
	await log(3);
	await log(2);
	await log(1);
}
log = (num) => {
	return new Promise(resolve => {
		setTimeout(() => {
			console.log(num);
			resolve();
		}, 1000)
	});
}
countDown();
