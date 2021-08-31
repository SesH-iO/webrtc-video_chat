import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { ContextProvider } from './Context';

const app = (
	<ContextProvider>
		<App />
	</ContextProvider>
);

ReactDOM.render(app, document.getElementById('root'));
