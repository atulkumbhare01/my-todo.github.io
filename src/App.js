// important imports
import React from 'react'
import { BrowserRouter as Router,Route, Routes }
	from 'react-router-dom';
import './App.css';
import Create from './pages/Create';
import Edit from './pages/Edit';
import Home from './pages/Home';

function App() {
return (
	<div className='App'>

	<Router>
	<Routes>
		<Route path='/' element={<Home/>}/>
		<Route path='/create' element={<Create/>}/>
		<Route path='/edit' element={<Edit/>}/>
	</Routes>
	</Router>
</div>
);

}

export default App;
