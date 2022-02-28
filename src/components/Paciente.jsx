
const Paciente = ( { paciente } ) => {

  const { nombre ,propietario, email, fecha, sintomas } = paciente;

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
          <div>
            <button className="py-2 px-10 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 font-semibold mr-4"
              type="button">
              Editar
            </button>
            <button className="py-2 px-10 bg-red-600 text-white rounded-md hover:bg-red-700 font-semibold"
              type="button">
              Eliminar
            </button>
          </div>
      </div>
    )
}

export default Paciente;