

const AlertaError = ( {mensaje} ) => {
  return (
    <div className='bg-red-700 text-white text-center p-2 font-bold mb-4 rounded-sm'>
        <p>{ mensaje }</p>
    </div>
  )
}

export default AlertaError;