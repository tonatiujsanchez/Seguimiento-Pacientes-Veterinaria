import { useState } from 'react';

import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoPacientes from './components/ListadoPacientes';


 function App() {

  const [ pacientes, setPacientes ] = useState([]);
  const [ paciente, setPaciente ] = useState({});


  const eliminarPaciente = ( idPaciente ) => {
    const pacientesActualizados = pacientes.filter( pacienteState => pacienteState.id !== idPaciente );
    setPacientes( pacientesActualizados );
  }
 

  return (
    <div className='container mx-auto mt-16'>
      <Header />
      <div className='mt-12 md:flex'>
        <Formulario
          pacientes = { pacientes }
          setPacientes = { setPacientes }
          paciente = { paciente }
          setPaciente = { setPaciente }
        />
        <ListadoPacientes 
        pacientes = { pacientes }
        setPaciente = { setPaciente }
        eliminarPaciente = { eliminarPaciente }
        />
      </div>
    </div>
  )
}

export default App

