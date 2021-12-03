import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
	HOME_URL,
	ADD_SENTENCE_URL,
	WHO_URL,
	WHAT_URL,
	WHEN_URL,
	WHERE_URL,
} from './constants';
import { Wrapper } from './styledApp';
import Header from './components/header';
import Sentences from './pages/sentences-page';
import NewSentence from './pages/new-sentence-page';
import PageNotFound from './pages/404-page';
import WhoComponent from './components/new-sentence-page-components/who-component';
import WhatComponent from './components/new-sentence-page-components/what-component';
import WhenComponent from './components/new-sentence-page-components/when-component';
import WhereComponent from './components/new-sentence-page-components/where-component';
import { useEffect, useState } from 'react';

const App = () => {
	const [windowInnerHeight, setWindowInnerHeight] = useState(
		window.innerHeight
	);

	useEffect(() => {
		window.addEventListener('resize', onVindowResizeHandler);

		return () => window.removeEventListener('resize', onVindowResizeHandler);
	});

	const onVindowResizeHandler = () => {
		setWindowInnerHeight(window.innerHeight);
	};

	return (
		<Wrapper windowHeight={windowInnerHeight}>
			<Router>
				<Header />
				<Routes>
					<Route path={HOME_URL} element={<Sentences />} />
					<Route path={ADD_SENTENCE_URL} element={<NewSentence />}>
						<Route path={WHO_URL} element={<WhoComponent />} />
						<Route path={WHAT_URL} element={<WhatComponent />} />
						<Route path={WHEN_URL} element={<WhenComponent />} />
						<Route path={WHERE_URL} element={<WhereComponent />} />
					</Route>
					<Route path='*' element={<PageNotFound />} />
				</Routes>
			</Router>
		</Wrapper>
	);
};

export default App;
