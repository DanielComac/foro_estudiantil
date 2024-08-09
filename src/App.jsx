import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { PublicacionProvider } from "./context/PublicacionesContext";
import { ComentarioProvider } from "./context/ComentariosContext";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Registro from "./components/Registro";
import CreatePublication from "./components/CreatePublication";
import EditPublication from "./components/EditPublication";

import CreateComment from "./components/CreateComment";

import ProtectedRoute from "../ProtectedRoute";

import "./styles/App.css";

const App = () => {
  return (
    <AuthProvider>
      <PublicacionProvider>
        <ComentarioProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Welcome />} />

              <Route element={<ProtectedRoute />}>
                <Route
                  path="/home"
                  element={
                    <div className="app">
                      <Navbar />
                      <div className="main-content">
                        <Sidebar />
                        <Home />
                      </div>
                    </div>
                  }
                />
                <Route path="/publicacion/:id" element={<EditPublication />} />
                <Route path="/publicacion/" element={<CreatePublication />} />

                <Route path="/comentario/:id" element={<CreateComment />}></Route>
              </Route>

              <Route path="/welcome" element={<Welcome />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Registro />} />
            </Routes>
          </Router>
        </ComentarioProvider>
      </PublicacionProvider>
    </AuthProvider>
  );
};

export default App;
