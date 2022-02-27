
const Paciente = () => {

    return (
      <div className="bg-white shadow-md mx-3 px-5 py-10 rounded-md mb-10">
          <p className="font-bold mb-3 text-gray-700 uppercase">
            Nombre: {''}
            <span className="font-normal normal-case">Hook</span>
          </p>  
          <p className="font-bold mb-3 text-gray-700 uppercase">
            Propietario: {''}
            <span className="font-normal normal-case">Brandon</span>
          </p>  
          <p className="font-bold mb-3 text-gray-700 uppercase">
            Email: {''}
            <span className="font-normal normal-case">correo@correo.com</span>
          </p>  
          <p className="font-bold mb-3 text-gray-700 uppercase">
            Fecha alta: {''}
            <span className="font-normal normal-case">26 Febrero de 2022</span>
          </p>  
          <p className="font-bold mb-3 text-gray-700 uppercase">
            Sintomas: {''}
            <span className="font-normal normal-case">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem est sequi provident ipsum aliquid fugit possimus corporis.</span>
          </p>  
      </div>
    )
}

export default Paciente;