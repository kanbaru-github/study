import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {
	const [id, setId] = useState('kanbaru-github');
	const [name, setName] = useState('');
	const ids = ['deatiger', 'gaearon', 'aws', 'google', 'facebook', 'kanbaru-github'];
	const getRandomId = () => {
		const _id = ids[Math.floor(Math.random() * ids.length)];
		setId(_id);
	}

	useEffect(() => {
		fetch(`https://api.github.com/users/${id}`)
		.then(res => res.json())
		.then(data => {
			console.log(data);
			setName(data.name);
		})
		.catch(error => {
			console.log(error)
		})
	}, [id]);

	return (
	<div>
		<p>{id}の、GitHubの名前は{name}です。</p>
		<button onClick={getRandomId}>IDを変更</button>
	</div>
	// デフォルト
	// <div className="App">
	// 	<header className="App-header">
	// 	<img src={logo} className="App-logo" alt="logo" />
	// 	<p>
	// 		Edit <code>src/App.js</code> and save to reload.
	// 	</p>
	// 	<a
	// 		className="App-link"
	// 		href="https://reactjs.org"
	// 		target="_blank"
	// 		rel="noopener noreferrer"
	// 	>
	// 		Learn React
	// 	</a>
	// 	</header>
	// </div>
	);
}

export default App;
