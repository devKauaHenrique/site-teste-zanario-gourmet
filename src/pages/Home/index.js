import Logo from '../../img/logo-zanario-gourmet.png';
import Confeiteira from '../../img/confeiteira.jpg';
import Brigadeiro from '../../img/brigadeiro.jpg';

import { Link } from 'react-router-dom';

import { MdOutlineShoppingCart } from 'react-icons/md';
import { FaInstagram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { PiTiktokLogoLight } from "react-icons/pi";

function Home(){
    return(
        <div className='w-full flex flex-col'>
            <main className="w-full h-screen-minus-header-2 md:h-screen-minus-header-1 mt-20 bg-home bg-cover bg-center">
                <div className="w-full h-full flex flex-col justify-center items-center">
                    <img className='w-64 h-64 animate-[wiggle_3.5s_infinite]' src={Logo} alt='Logo'/>
                    <h1 className="text-principal mb-1 text-5xl md:text-6xl font-lobster">Zanario Gourmet</h1>
                    <h2 className="text-white font-lobster text-2xl md:text-4xl">O seu dia mais feliz</h2>
                </div>
            </main>

           <section className='bg-principal w-full h-full px-10 py-5 md:px-24 md:py-14'>
                <div className='bg-white rounded-lg md:flex'>
                    <img className='md:w-1/2  rounded-t-lg md:rounded-l-lg' src={Confeiteira} alt='Foto Roseane'/>
                    <div className='flex flex-col justify-center items-center px-8 py-4  md:gap-6 gap-3'>
                        <h2 className='text-principal font-bold text-2xl font-poppins'>Quem somos</h2>
                        <p className='text-sm text-center font-poppins'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tempore ipsum alias eligendi error quia incidunt adipisci beatae, quidem nulla! Dolor, ipsam eius blanditiis officia magni minima maiores.</p>
                        <p className='text-sm text-center font-poppins'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tempore ipsum alias eligendi error quia incidunt adipisci beatae, quidem nulla! Dolor, ipsam eius blanditiis officia magni minima maiores.</p>
                        <a href='https://api.whatsapp.com/send/?phone=5511953736849&text=Quero%20fazer%20um%20agendamento%20hoje!' target='_blank' className='bg-principal text-white text-xl px-5 py-2 rounded-lg font-poppins'>Compre conosco</a>
                    </div>
                </div>
           </section>

            <section className='w-full h-full mt-10 mb-12 font-poppins'>
                <div className='flex justify-center mb-6'>
                    <h2 className='text-principal font-bold text-3xl'>Nosso cardápio</h2>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10 mx-auto max-w-7xl px-2 mt-10 mb-8'>

                    <div className='flex gap-2'>
                        <img 
                        src={Brigadeiro} 
                        alt='Brigadeiro'
                        className='w-28 h-28 rounded-md hover:scale-110 hover:-rotate-2 duration-300'
                        />
                        <div>
                            <p className='font-bold text-principal'>Brigadeiro XXX</p>
                            <p className='text-sm'>Pão levinho de fermentação natural da Trigou, 2 burguers 160g, queijo prato, salada e maionese da casa.</p>
                            <div className='flex items-center gap-2 justify-between mt-3'>
                                <p className='font-bold text-lg'>R$10.90</p>
                                <button
                                className='bg-principal px-5 rounded text-white text-2xl'
                                >
                                    <MdOutlineShoppingCart/>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='flex gap-2'>
                        <img 
                        src={Brigadeiro} 
                        alt='Brigadeiro'
                        className='w-28 h-28 rounded-md hover:scale-110 hover:-rotate-2 duration-300'
                        />
                        <div>
                            <p className='font-bold text-principal'>Brigadeiro XXX</p>
                            <p className='text-sm'>Pão levinho de fermentação natural da Trigou, 2 burguers 160g, queijo prato, salada e maionese da casa.</p>
                            <div className='flex items-center gap-2 justify-between mt-3'>
                                <p className='font-bold text-lg'>R$10.90</p>
                                <button
                                className='bg-principal px-5 rounded text-white text-2xl'
                                >
                                    <MdOutlineShoppingCart/>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='flex gap-2'>
                        <img 
                        src={Brigadeiro} 
                        alt='Brigadeiro'
                        className='w-28 h-28 rounded-md hover:scale-110 hover:-rotate-2 duration-300'
                        />
                        <div>
                            <p className='font-bold text-principal'>Brigadeiro XXX</p>
                            <p className='text-sm'>Pão levinho de fermentação natural da Trigou, 2 burguers 160g, queijo prato, salada e maionese da casa.</p>
                            <div className='flex items-center gap-2 justify-between mt-3'>
                                <p className='font-bold text-lg'>R$10.90</p>
                                <button
                                className='bg-principal px-5 rounded text-white text-2xl'
                                >
                                    <MdOutlineShoppingCart/>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='flex gap-2'>
                        <img 
                        src={Brigadeiro} 
                        alt='Brigadeiro'
                        className='w-28 h-28 rounded-md hover:scale-110 hover:-rotate-2 duration-300'
                        />
                        <div>
                            <p className='font-bold text-principal'>Bolo XXX</p>
                            <p className='text-sm'>Pão levinho de fermentação natural da Trigou, 2 burguers 160g, queijo prato, salada e maionese da casa.</p>
                            <div className='flex items-center gap-2 justify-between mt-3'>
                                <p className='font-bold text-lg'>R$10.90</p>
                                <button
                                className='bg-principal px-5 rounded text-white text-2xl'
                                >
                                    <MdOutlineShoppingCart/>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='flex gap-2'>
                        <img 
                        src={Brigadeiro} 
                        alt='Brigadeiro'
                        className='w-28 h-28 rounded-md hover:scale-110 hover:-rotate-2 duration-300'
                        />
                        <div>
                            <p className='font-bold text-principal'>Bolo XXX</p>
                            <p className='text-sm'>Pão levinho de fermentação natural da Trigou, 2 burguers 160g, queijo prato, salada e maionese da casa.</p>
                            <div className='flex items-center gap-2 justify-between mt-3'>
                                <p className='font-bold text-lg'>R$10.90</p>
                                <button
                                className='bg-principal px-5 rounded text-white text-2xl'
                                >
                                    <MdOutlineShoppingCart/>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='flex gap-2'>
                        <img 
                        src={Brigadeiro} 
                        alt='Brigadeiro'
                        className='w-28 h-28 rounded-md hover:scale-110 hover:-rotate-2 duration-300'
                        />
                        <div>
                            <p className='font-bold text-principal'>Bolo XXX</p>
                            <p className='text-sm'>Pão levinho de fermentação natural da Trigou, 2 burguers 160g, queijo prato, salada e maionese da casa.</p>
                            <div className='flex items-center gap-2 justify-between mt-3'>
                                <p className='font-bold text-lg'>R$10.90</p>
                                <button
                                className='bg-principal px-5 rounded text-white text-2xl'
                                >
                                    <MdOutlineShoppingCart/>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='flex gap-2'>
                        <img 
                        src={Brigadeiro} 
                        alt='Brigadeiro'
                        className='w-28 h-28 rounded-md hover:scale-110 hover:-rotate-2 duration-300'
                        />
                        <div>
                            <p className='font-bold text-principal'>Trufa XXX</p>
                            <p className='text-sm'>Pão levinho de fermentação natural da Trigou, 2 burguers 160g, queijo prato, salada e maionese da casa.</p>
                            <div className='flex items-center gap-2 justify-between mt-3'>
                                <p className='font-bold text-lg'>R$10.90</p>
                                <button
                                className='bg-principal px-5 rounded text-white text-2xl'
                                >
                                    <MdOutlineShoppingCart/>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='flex gap-2'>
                        <img 
                        src={Brigadeiro} 
                        alt='Brigadeiro'
                        className='w-28 h-28 rounded-md hover:scale-110 hover:-rotate-2 duration-300'
                        />
                        <div>
                            <p className='font-bold text-principal'>Trufa XXX</p>
                            <p className='text-sm'>Pão levinho de fermentação natural da Trigou, 2 burguers 160g, queijo prato, salada e maionese da casa.</p>
                            <div className='flex items-center gap-2 justify-between mt-3'>
                                <p className='font-bold text-lg'>R$10.90</p>
                                <button
                                className='bg-principal px-5 rounded text-white text-2xl'
                                >
                                    <MdOutlineShoppingCart/>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>    

                <div className='flex justify-center items-center mt-1'>
                    <button className='bg-principal text-white px-8 py-2 text-xl rounded-lg'>Veja mais</button>
                </div>

            </section>

            <footer className='w-full h-72 bg-principal flex flex-col items-center justify-center px-8 font-poppins'>
                <div className='flex flex-row gap-6 md:gap-20'>
                    <div className='flex flex-col text-center gap-1'>
                        <h2 className='text-white font-bold text-lg'>Telefone</h2>
                        <span className='text-white text-xs'>(11) 99999-9999</span>
                        <span className='text-white text-xs'>(11) 99999-9999</span>
                    </div>
                    <div className='flex flex-col text-center gap-1'>
                        <h2 className='text-white font-bold text-lg'>Outros</h2>
                        <span className='text-white text-xs'>zanariogabriela@gmail.com</span>
                        <span className='text-white text-xs'>@zanario_gourmet_</span>
                    </div>
                    <div className='flex flex-col text-center gap-1'>
                        <h2 className='text-white font-bold text-lg'>Endereço</h2>
                        <span className='text-white text-xs'>Av. Brasília, 233</span>
                        <span className='text-white text-xs'>Suzano - SP</span>
                    </div>
                </div>

                <div className='flex gap-1 mt-10 text-white text-3xl'>
                    <a href='#' className='hover:animate-[wiggle_2s_infinite_alternate]'><FaInstagram/></a>
                    <a href='#' className='hover:animate-[wiggle_2s_infinite_alternate]'><PiTiktokLogoLight/></a>
                    <a href='https://api.whatsapp.com/send/?phone=5511953736849&text=Quero%20fazer%20um%20agendamento%20hoje!' target='_blank' className='hover:animate-[wiggle_2s_infinite_alternate]'><FaWhatsapp/></a>
                </div>

                <div className='flex flex-col mt-10 text-white text-center'>
                    <span>&copy;ZANARIO GOURMET 2024</span>
                    <span className='text-sm'>Todos os direitos reservados.</span>
                </div>

                <a href='https://api.whatsapp.com/send/?phone=5511953736849&text=Quero%20fazer%20um%20agendamento%20hoje!'
                target='_blank'

                className='fixed bottom-4 right-6 z-50 bg-secundaria text-white flex items-center justify-center p-2 rounded-lg gap-2 text-xs'
                >   
                    <span className='text-3xl'><FaWhatsapp/></span>
                    Compre conosco<br/>
                    pelo Whatsapp
                </a>

            </footer>
        </div>
        
    )
}

export default Home;