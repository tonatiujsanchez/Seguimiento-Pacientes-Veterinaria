
const Paciente = ( { paciente, setPaciente, eliminarPaciente } ) => {

  const { nombre ,propietario, email, fecha, sintomas } = paciente;

  const handleEliminar = () => {
    const respuesta = confirm(`Deseas eliminar el paciente, ${ paciente.nombre }`);

    if(respuesta){
      eliminarPaciente( paciente.id )
    }

  }
  
    return (
      <div className="bg-white shadow-md mx-3 px-5 py-10 rounded-md mb-10">
          <p className="font-bold mb-3 text-gray-700 uppercase">
            Nombre: {''}
            <span className="font-normal normal-case">{ nombre }</span>
          </p>  
          <p className="font-bold mb-3 text-gray-700 uppercase">
            Propietario: {''}
            <span className="font-normal normal-case">{ propietario }</span>
          </p>  
          <p className="font-bold mb-3 text-gray-700 uppercase">
            Email: {''}
            <span className="font-normal normal-case">{ email }</span>
          </p>  
          <p className="font-bold mb-3 text-gray-700 uppercase">
            Fecha alta: {''}
            <span className="font-normal normal-case">{ fecha }</span>
          </p>  
          <p className="font-bold mb-3 text-gray-700 uppercase">
            Sintomas: {''}
            <span className="font-normal normal-case">{ sintomas }</span>
          </p>  
          <div className="mt-10 flex justify-end gap-10">
            <button
              onClick={ () => setPaciente( paciente ) } 
              className="py-2 px-10 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 font-semibold"
              type="button">
              Editar
            </button>
            <button
              onClick={ handleEliminar } 
              className="py-2 px-10 bg-red-600 text-white rounded-md hover:bg-red-700 font-semibold"
              type="button">
              Eliminar
            </button>
          </div>
      </div>
    )
}

export default Paciente;