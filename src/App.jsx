import Main from './pages/Main.jsx';
import CalculatorPage from './pages/Calculator-page.jsx';
import VideosPage from './pages/Videos-page.jsx';
import About from './pages/About.jsx';
import Loan from './pages/Loan.jsx';
import Terms from './pages/Terms.jsx';
import Conditions from './pages/Conditions.jsx';
import Blog from './pages/Blog.jsx';
import Article from './pages/Article.jsx';
import Article2 from './pages/Article-2.jsx';
import Quiz from './pages/Quiz.jsx';
import Catalog from './pages/Catalog.jsx';
import Car from './pages/Car.jsx';

import React from "react";
import { Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/calculator" element={<CalculatorPage />} />
                <Route path="/videos" element={<VideosPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/loan" element={<Loan />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/conditions" element={<Conditions />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/article" element={<Article />} />
                <Route path="/article2" element={<Article2 />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/car" element={<Car />} />
                <Route path="*" element={<Error />} />
            </Routes>
            {/* <Car></Car> */}
        </>
    );
};

export default App;
