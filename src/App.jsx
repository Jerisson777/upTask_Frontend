import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Authlayout from './layouts/Authlayout'
import ConfirmarCuenta from './paginas/ConfirmarCuenta'
import Login from './paginas/Login'
import NuevoPassword from './paginas/NuevoPassword'
import OlvidePassword from './paginas/OlvidePassword'
import Registrar from './paginas/Registrar'
import RutaProtegida from './layouts/RutaProtegida'
import Proyectos from './paginas/Proyectos'
import NuevoProyecto from './paginas/NuevoProyecto'
import { AuthProvider } from './context/AuthProvider'
import { ProyectosProvider } from './context/ProyectosProvider'
import Proyecto from './paginas/Proyecto'
import EditarProyecto from './paginas/EditarProyecto'
import NuevoColaborador from './paginas/NuevoColaborador'

function App() {
     
  return (
    <BrowserRouter>
      <AuthProvider>
        <ProyectosProvider>
          <Routes>
            <Route path='/' element={<Authlayout/>}>
                <Route index element={<Login/>}/>
                <Route path='registrar' element={<Registrar/>}/>
                <Route path='cambiar-password' element={<OlvidePassword/>}/>
                <Route path='cambiar-password/:token' element={<NuevoPassword/>}/>
                <Route path='confirmar/:id' element={<ConfirmarCuenta/>}/>
            </Route>

            <Route path='/proyectos' element={<RutaProtegida/>}>
              <Route index element={<Proyectos/>}/>
              <Route path='crear-proyecto' element={<NuevoProyecto/>}/>
              <Route path=':id' element={<Proyecto/>}/>
              <Route path='editar/:id' element={<EditarProyecto/>}/>
              <Route path='nuevo-colaborador/:id' element={<NuevoColaborador/>}/>
            </Route>

          </Routes>
        </ProyectosProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
