import {useState} from 'react'
import Alerta from './Alerta'
import useProyectos from '../hooks/useProyectos'

const FormularioColaborador = () => {
    const [email, setEmail] = useState('')
  
    const {mostrarAlerta, alerta, submitColaborador} = useProyectos()
  
    const handleSubmit =  e => {
        e.preventDefault()

        //Validar
        if(email === ''){
            mostrarAlerta({
                msg:'El email es Obligatorio',
                error: true
            })
            return 
        }

         submitColaborador(email)
    }

    const {msg} = alerta
    return (
    <form 
        className='bg-white py-10 px-5 md:w-1/2 w-full rounded-lg shadow'
        onSubmit={handleSubmit}    
    >
        {msg && <Alerta alerta={alerta}/>}
        
        <div className='mb-5'>
            <label 
                className='text-gray-700 uppercase font-bold text-sm'
                htmlFor='email'    
            >Email Colaborador</label>

            <input
                id='email'
                type='email'
                className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                placeholder='email del usuario'
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
        </div>

        <input
           type='submit'
           className='bg-sky-600 hover:bg-sky-700 w-full p-3 text-white uppercase font-bold cursor-pointer transition-colors rounded text-sm'
           value='Buscar Colaborador'
        />
    </form>
  )
}

export default FormularioColaborador