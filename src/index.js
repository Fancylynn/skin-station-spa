import React from 'react';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
import { render } from 'react-dom';
import Homepage from './containers/Homepage';
// import MoviesReducer from './src/reducers/movies';

// const store = createStore (
// 	MoviesReducer,
// 	window.devToolsExtension && window.devToolsExtension()
// );

render(
	// <Provider store={store}>
	<Homepage />,
	// </Provider>,
	document.getElementById('container')
);
