

const AlertaError = ( {children} ) => {
  return (
    <div className='bg-red-700 text-white text-center p-2 font-bold mb-4 rounded-sm'>
        { children }
    </div>
  )
}

export default AlertaError;