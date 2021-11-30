import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Sentences from './pages/sentences-page';
import NewSentence from './pages/new-sentence-page';
import PageNotFound from './pages/404-page';
import { Wrapper } from './styledApp';

const App = () => {
	return (
		<Wrapper>
			<Router>
				<Header />
				<Routes>
					<Route path='/' element={<Sentences />} />
					<Route path='/add-new-sentence/' element={<NewSentence />} />
					<Route path='*' element={<PageNotFound />} />
				</Routes>
			</Router>
		</Wrapper>
	);
};

export default App;
