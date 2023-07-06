import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Consultas from "./pages/Consultas";
import Pacientes from "./pages/Pacientes";
import PacienteDetail from "./pages/PacienteDetail";
import ConsultaDetail from "./pages/ConsultaDetail";
import Configuracion from "./pages/Configuracion";
import AgregarConsulta from "./pages/AgregarConsulta";
import AgregarPaciente from "./pages/AgregarPaciente";
import EditarConsulta from "./pages/EditarConsulta";
import EditarPaciente from "./pages/EditarPaciente";
import Login from "./pages/Login";
import Cambio from "./pages/Cambio";
import Nav from "./components/Nav";
import { UserContext } from "./context/UserContext";
import { UserProvider } from "./context/UserContext";

const App = () => {
  return (
    <>
      <UserProvider>
        <Router>
          <UserContext.Consumer>
            {({ isLoggedIn }) => (
              <>
                {isLoggedIn ? (
                  <>
                    <Nav />
                    <main>
                      <Routes>
                        <Route path="/" element={<Inicio />} />
                        <Route path="/consultas" element={<Consultas />} />
                        <Route path="/pacientes" element={<Pacientes />} />
                        <Route
                          path="/pacientes/:id"
                          element={<PacienteDetail />}
                        />
                        <Route
                          path="/consultas/:id"
                          element={<ConsultaDetail />}
                        />
                        <Route
                          path="/configuracion"
                          element={<Configuracion />}
                        />
                        <Route
                          path="/configuracion/:cambio"
                          element={<Cambio />}
                        />
                        <Route
                          path="/agregar-consulta"
                          element={<AgregarConsulta />}
                        />
                        <Route
                          path="/agregar-paciente"
                          element={<AgregarPaciente />}
                        />
                        <Route
                          path="/editar-consulta/:id"
                          element={<EditarConsulta />}
                        />
                        <Route
                          path="/editar-paciente/:id"
                          element={<EditarPaciente />}
                        />
                        <Route
                          path="*"
                          element={<h1>Esta página no existe</h1>}
                        />
                      </Routes>
                    </main>
                  </>
                ) : (
                  <Login />
                )}
              </>
            )}
          </UserContext.Consumer>
        </Router>
      </UserProvider>
    </>
  );
};

export default App;
