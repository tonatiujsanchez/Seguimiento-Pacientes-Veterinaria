import Paciente from './Paciente';


const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {


  return (
    <div className='md:w-1/2 lg:w-3/5'>

    { pacientes && pacientes.length ? (
      <>
        <h2 className="font-black text-3xl text-center mb-5">
          Listado de Pacientes
        </h2>
        <p className="'text-lg text-center mb-10">
          Administra tus {''}
          <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>
        </p>
      </>
    ): (
      <>
        <h2 className="font-black text-3xl text-center mb-5">
          No hay pacientes agregados
        </h2>
        <p className="'text-lg text-center mb-10">
          Empieza agregado pacientes {''}
        </p>
      </>
    ) }



      { 
        pacientes.map( paciente => (

           <Paciente 
              key={ paciente.id }
              paciente = { paciente }
              setPaciente = { setPaciente }
              eliminarPaciente = { eliminarPaciente } 
            /> 
        
        ))
      }

      

    </div>
  )
}

export default ListadoPacientes;