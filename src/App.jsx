import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css'
import HomePage from "./pages/homePage/homePage.jsx";
import Sidebar from "./componets/sidebar/sidebar.jsx";

function App() {

    return (
        <div className={"container"}>
            <Sidebar/>
            <div className="main-content">
                <Router>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                    </Routes>
                </Router>
            </div>
        </div>
    )
}

export default App
