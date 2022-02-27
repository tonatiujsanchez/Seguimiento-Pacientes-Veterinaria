import Paciente from './Paciente'

const ListadoPacientes = ({ pacientes }) => {

  console.log( pacientes );

  return (
    <div className='md:w-1/2 lg:w-3/5'>
      <h2 className="font-black text-3xl text-center mb-5">
        Listado de Pacientes
      </h2>
      <p className="'text-lg text-center mb-10">
        Arministra tus {''}
        <span className='text-indigo-600 font-bold'>Paciente y Citas</span>
      </p>

      <Paciente />

    </div>
  )
}

export default ListadoPacientes;