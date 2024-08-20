import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { PublicacionProvider } from "./context/PublicacionesContext";
import { ComentarioProvider } from "./context/ComentariosContext";
import { UserProvider } from "./context/UserContext";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Registro from "./components/Registro";
import CreatePublication from "./components/CreatePublication";
import EditPublication from "./components/EditPublication";
import EditComment from "./components/EditComment";
import AdminView from "./components/AdminView";
import Users from './components/Users';
import Message from "./components/Message";

import CreateComment from "./components/CreateComment";
import ProtectedRoute from "../ProtectedRoute";
import "./styles/App.css";

const App = () => {
  const [materiaSeleccionada, setMateriaSeleccionada] = useState('Todas las asignaturas');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSelectMateria = (materia) => {
    setMateriaSeleccionada(materia);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <AuthProvider>
      <UserProvider>
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
                        <Navbar onSearch={handleSearch} />
                        <div className="main-content">
                          <Sidebar onSelectMateria={handleSelectMateria} />
                          <Home materiaSeleccionada={materiaSeleccionada} searchTerm={searchTerm} />
                        </div>
                      </div>
                    }
                  />

                    <Route
                    path="/admin"
                    element={
                      <div className="app">
                        <Navbar />
                        <div className="main-content">
                          <AdminView />
                        </div>
                      </div>
                    }
                  />

                  <Route
                    path="/publicacion/:id"
                    element={<EditPublication />}
                  />
                  <Route path="/publicacion/" element={<CreatePublication />} />
                  <Route path="/comentario/:id" element={<CreateComment />} />
                  <Route path="/Editarcomentario/:id" element={<EditComment />} />

                  <Route path="/users" element={
                    <div className="app">
                    <Navbar />
                    <div className="main-content">
                      <Users />
                    </div>
                  </div>
                    
                    } />

                  <Route path="/cuentaBloqueada" element={ <Message />}></Route>
                </Route>

                <Route path="/welcome" element={<Welcome />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Registro />} />
              </Routes>
            </Router>
          </ComentarioProvider>
        </PublicacionProvider>
      </UserProvider>
    </AuthProvider>
  );
};

export default App;
