// import logo from './logo.svg';
import './App.css';
import Layout from "./components/shared/Layout";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import {AuthContextProvider} from "./components/shared/AuthContext";
import Movies from "./pages/Movies";
import ProtectedRoute from "./components/shared/ProtectedRoute";

function App() {
    return (
        <>
            <AuthContextProvider>
                <Layout>
                    <Routes>
                        <Route path="/"
                               element={<Home/>
                               }/>

                        <Route path="/login"
                               element={
                                   <ProtectedRoute accessBy="non-authentocated">
                                       <Login/>
                                   </ProtectedRoute>
                               }/>

                        <Route path="/movies"
                               element={
                                   <ProtectedRoute accessBy="authenticated">
                                       <Movies/>
                                   </ProtectedRoute>
                               }/>
                    </Routes>
                </Layout>
            </AuthContextProvider>
        </>
    );
}

export default App;
