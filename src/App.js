// import logo from './logo.svg';
import './App.css';
import Layout from "./components/shared/Layout";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path="/"
                           element={<Home/>} />

                    <Route path="/login"
                           element={<Login/>} />
                </Routes>
            </Layout>
        </>
    );
}

export default App;
