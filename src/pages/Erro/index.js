import { Link } from 'react-router-dom';

function Erro(){
    return(
        <div className="w-full h-screen-minus-header-2 md:h-screen-minus-header-1 mt-20 bg-white bg-cover bg-center flex flex-col justify-center items-center font-poppins">
            <h1 className='font-bold text-7xl'>404</h1>
            <h2 className='font-semibold text-2xl'>Página não encontrada</h2>
            <Link className='bg-principal text-white px-3 py-2 rounded-lg text-xl mt-2' to='/'>Volte para o Início</Link>
        </div>
    )
}

export default Erro;