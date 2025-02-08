import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/homePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import VerifyPage from "./pages/verifyPage.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import Dashboard from "./pages/dashboard.jsx";
import AboutPage from "./pages/aboutPage.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import ServicePage from "./pages/servicePage.jsx";
import ContactPage from "./pages/contactPage.jsx";
import BlogPage_CRUD from "./pages/CrudSection/BlogPage_CRUD.jsx";
import TeamPage_CRUD from "./pages/CrudSection/TeamPage_CRUD.jsx";
import BlogRead from "./components/CrudComponent/BlogRead.jsx";
import BlogReadPage from "./pages/CrudSection/BlogReadPage.jsx";
import BlogCreatePage from "./pages/CrudSection/BlogCreatePage.jsx";
import BlogUpdate from "./components/CrudComponent/BlogUpdate.jsx";
import BlogUpdatePage from "./pages/CrudSection/BlogUpdatePage.jsx";
import TeamCreatePage from "./pages/CrudSection/TeamCreatePage.jsx";
import TeamUpdatePage from "./pages/CrudSection/TeamUpdatePage.jsx";
import ServicePage_CRUD from "./pages/CrudSection/ServicePage_CRUD.jsx";
import ServicePageCrud from "./pages/CrudSection/ServicePage_CRUD.jsx";
import ServiceCreatePage from "./pages/CrudSection/ServiceCreatePage.jsx";
import ServiceUpdatePage from "./pages/CrudSection/ServiceUpdatePage.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/about" element={<AboutPage/>} />
                <Route path="/blog" element={<BlogPage/>} />
                <Route path="/service" element={<ServicePage/>} />
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/verify" element={<VerifyPage/>} />
                <Route path="/contact" element={<ContactPage/>} />
                <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>} />

                {/*CRUD*/}
                <Route path="/dashboard/blogContentCrud" element={<PrivateRoute><BlogPage_CRUD/></PrivateRoute>} />
                <Route path="/dashboard/teamContentCrud" element={<PrivateRoute><TeamPage_CRUD/></PrivateRoute>} />
                <Route path="/dashboard/blogCreate" element={<PrivateRoute><BlogCreatePage/></PrivateRoute>} />
                <Route path="/dashboard/blogUpdate/:id" element={<PrivateRoute><BlogUpdatePage/></PrivateRoute>} />
                <Route path="/dashboard/teamCreate" element={<PrivateRoute><TeamCreatePage/></PrivateRoute>} />
                <Route path="/dashboard/teamUpdate/:id" element={<PrivateRoute><TeamUpdatePage/></PrivateRoute>} />
                <Route path="/dashboard/serviceContentCrud" element={<PrivateRoute><ServicePageCrud/></PrivateRoute>} />
                <Route path="/dashboard/serviceCreate" element={<PrivateRoute><ServiceCreatePage/></PrivateRoute>} />
                <Route path="/dashboard/serviceUpdate/:id" element={<PrivateRoute><ServiceUpdatePage/></PrivateRoute>} />

            </Routes>
        </BrowserRouter>
    );
};

export default App;