import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import { usePublicacion } from "../context/PublicacionesContext";
import { useComentario } from "../context/ComentariosContext";
import { useAuth } from "../context/AuthContext";
import { useUser } from "../context/UserContext";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

const Users = () => {
//   const { getPublicaciones, publicaciones, deletePublicacion } =
//     usePublicacion();
//   const { getComentarios, comentarios, deleteComentario } = useComentario();
  const { user } = useAuth();
  const { getUsers, userData, updateUser } = useUser();
  const [gato, setGato] = useState(null);
  const [perro, setPerro] = useState(null);
  const quitarPriv = {
    priv: "" 
  }
  const recuperarPriv = {
    priv: "user"
  }

  useEffect(() => {
    // getPublicaciones();
    // getComentarios();
    getUsers();
  }, []);

  useEffect(() => {
    const storedUser = Cookies.get("user");
    if (storedUser) {
      setGato(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    const storedId = Cookies.get("publicacion");
    if (storedId) {
      setPerro(JSON.parse(storedId));
    }
  }, []);

  console.log(gato);
  console.log(perro);
  console.log(user);

  return (
    <>
        <div className="home">
          <div className="home__content">
            <a className="preguntas_recientes">Usuarios Registrados</a>
            <div className="home__questions">
              {userData.map((user) => (
                <div className="question" >
                  <h3>{user.username}</h3>
                  <p><b>Correo electrónico:</b> {user.email}</p>
                  <p><b>Privilegio:</b> {user.priv}</p>

                  <br></br>
                    
                    {(user.priv === "user") ? (
                      <button onClick={() => {updateUser(user._id, quitarPriv), window.location.reload()}}>
                        Bloquear
                      </button>
                    ) : (
                        <button onClick={() => { updateUser(user._id, recuperarPriv), window.location.reload()}}>
                        Desloquear
                        </button>
                    )}

                      

                      {/* <Link
                        className="home__button"
                        to={`/publicacion/${publicacion._id}`}
                      >
                        Editar
                      </Link> */}
                  
                  <br></br>
                  <br></br>
                  

                </div>
              ))}
            </div>
          </div>
        </div>
    </>
  );
};

export default Users;
