import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Header />
				<Routes>
					
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	)
}

export default App