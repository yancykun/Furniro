import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './routes/Shop';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
        </Routes>
    );
};

export default App;
