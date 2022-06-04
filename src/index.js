import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Readmore from './components/ReadMore';
import 'bootstrap/dist/css/bootstrap.css';
import {HashRouter, Route} from 'react-router-dom';

 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
	<HashRouter basename='/'>
	<Route path='/' element={<App />} />
	<Route path='/about' element={<About />} />
	<Route path='/blog' element={<Blog />} />
	<Route path= '/blog/read' element={<Readmore />} />
	<Route path='/contact' element={<Contact />} />
	</HashRouter>
	);

