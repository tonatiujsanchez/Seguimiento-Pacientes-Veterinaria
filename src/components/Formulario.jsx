import { useState, useEffect } from 'react';
import AlertaError from './AlertaError';


const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {

  const [ nombre, setNombre ] = useState('');
  const [ propietario, setPropietario ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ fecha, setFecha ] = useState('');
  const [ sintomas, setSintomas ] = useState('');

  const [ error, setError ] = useState(false);

  const [ edit, setEdit ] = useState( false );

  useEffect( ()=>{
    if( Object.keys(paciente).length > 0 ){
      llenarFormulario();
    }

  }, [paciente]);


  const llenarFormulario = () => {
    const { nombre, propietario, email, fecha, sintomas } = paciente;
    setNombre( nombre );
    setPropietario( propietario );
    setEmail( email );
    setFecha( fecha );
    setSintomas( sintomas );

    setEdit( true );
  }


  const generarId = () => {

    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return random + fecha; 
  }



  const handleSubmit = (e) => {
    e.preventDefault();

    // validación del Formulario
    if([ nombre, propietario, email, fecha, sintomas ].includes('')){
      setError(true);
      return;
    }


    setError(false);


    // Objeto paciente

    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas
    }

    if( edit ){
      objetoPaciente.id = paciente.id;
      editarPaciente( objetoPaciente );
    }else{
      objetoPaciente.id = generarId();
      setPacientes( [ objetoPaciente, ...pacientes ] );
    }


    limpiarFormulario();
  }


  const editarPaciente = ( objetoPaciente ) => {

    const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState );

    setPacientes( pacientesActualizados );
    setPaciente({});
    setEdit( false );
  }


  const limpiarFormulario = () => {
    setNombre('');
    setPropietario('');
    setEmail('');
    setFecha('');
    setSintomas('');
  }


  return (
    <div className='md:w-1/2 lg:w-2/5'>
        <h2 className='font-black text-3xl text-center mb-5'>Seguimiento de pacientes</h2>
        <p className='text-lg text-center mb-10 md:sticky top-4'>
          Añade pacientes y {''}
          <span className='text-indigo-600 font-bold'>Administralos</span>
        </p>

        <form onSubmit={ handleSubmit }
              className='bg-white shadow-md rounded-md py-10 px-5 mb-10 mx-3 md:sticky top-20'>

          {/* { error && <AlertaError mensaje = '¡Todos los campos son obligatorios!' /> } */}
          { error && <AlertaError><p>¡Todos los campos son obligatorios!</p></AlertaError> }

          <div className='mb-5'>
            <label htmlFor='nombreMascota' className='block text-gray-700 font-bold uppercase mb-2'>
              Nombre Mascota
            </label>
            <input 
            id='nombreMascota'
              type="text" 
              placeholder='Honter'
              className='border-2 p-2 w-full placeholder-gray-300 rounded-md' 
              value = { nombre }
              onChange = { (e)=> setNombre(e.target.value) }
              />
          </div>

          <div className='mb-5'>
            <label htmlFor='nombrePropietario' className='block text-gray-700 font-bold uppercase mb-2'>
              Propietario
            </label>
            <input 
            id='nombrePropietario'
              type="text" 
              placeholder='Nombre del propietario'
              className='border-2 p-2 w-full placeholder-gray-300 rounded-md' 
              value = { propietario }
              onChange = { (e)=> setPropietario(e.target.value) }
              />
          </div>

          <div className='mb-5'>
            <label htmlFor='email' className='block text-gray-700 font-bold uppercase mb-2'>
              Email
            </label>
            <input 
              id='email'
              type="email" 
              placeholder='correo@correro.com'
              className='border-2 p-2 w-full placeholder-gray-300 rounded-md' 
              value = { email }
              onChange = { (e)=> setEmail(e.target.value) }
              />
          </div>

          <div className='mb-5'>
            <label htmlFor='fechaAlta' className='block text-gray-700 font-bold uppercase mb-2'>
              Fecha Alta
            </label>
            <input 
              id='fechaAlta'
              type="date" 
              className='border-2 p-2 w-full placeholder-gray-300 rounded-md' 
              value = { fecha }
              onChange = { (e)=> setFecha(e.target.value) }
              />
          </div>

          <div className='mb-5'>
            <label htmlFor='sintomas' className='block text-gray-700 font-bold uppercase mb-2'>
              Sintomas
            </label>
            <textarea
              name="sintomas" 
              id="sintomas" 
              placeholder='Describe los simtomas'
              className='border-2 p-2 w-full placeholder-gray-300 rounded-md'
              value = { sintomas }
              onChange = { (e)=> setSintomas(e.target.value) }
              >
            </textarea>
          </div>

          <input 
            type="submit"
            value={ edit ? 'Guardar cambios': 'Agregar paciente' }
            className='bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-indigo-700 cursor-pointer transition-all'
           />

        </form>
    </div>
  )
}

export default Formulario;

