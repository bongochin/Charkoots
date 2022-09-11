import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import MenuNavBarProvider from './context/MenuNavBarContext';
import './index.css';
import 'fontsource-roboto';
import App from './App';

const store = configureStore();

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<MenuNavBarProvider>
				<App />
			</MenuNavBarProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
