import React from 'react';
import { MenuBtn } from '../components/MenuBtn';
import './Home.css';
import AboutImg from '../utils/img/About.jpg'
import { Link } from 'react-router-dom'
import { ImageGallery } from '../components/ImageGallery';
import { ContactInfo } from '../components/ContactInfo';
import ContactImage from '../utils/img/Contact.jpg'

function Home() {
    return(
         <div className='home-page'>
             <header className='h-100 min-vh-100 d-flex align-items-center text-light shadow'>
                 <div className='container'>
                     <div className='row'>
                         <div className='col-sm-6 d-flex d-sm-block flex-column align-items-center'>
                             <h2 className='mb-0 text-black fw-bold'>Bienvenidos a</h2>
                             <h1 className='mb-5 text-black fw-bold text-center text-sm-start'>My Restaurant</h1>
                             <MenuBtn/>
                         </div>
                     </div>
                 </div>
             </header>  
                <div container my-5>
                    <div className='row'>
                        <div className='col-lg-6 d-flex justify-content-center d-none d-lg-flex'>
                            <img src={AboutImg} className='img-fluid w-50' alt='About img' />
                        </div>
                        <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center'>
                            <h2 className='fs-1 mb-5 text-uppercase fw-bold'>Acerca de Nosotros</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis quam odit, voluptate molestiae laborum possimus libero cupiditate voluptates quod officiis!
                            </p>
                            <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ipsum officiis neque consectetur natus tempora voluptatum qui iusto odio excepturi?</p>
                            <Link to='/About'>
                                <button type='button' className='btn btn-outline-success btn-lg'>Mas de Nosotros</button> 
                            </Link>
                        </div>
                    </div> 
                </div>     

                <div className='menu-section py-5 text-light shadow'>
                    <div className='container d-flex flex-column align-items-center'>
                        <h2 className='fs-1 mb-5 text-uppercase fw-bold'>Nuestros Favoritos</h2>
                        <div className='row mb-5 w-100'>

                            <div className='col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0'>
                                <h3 className='fs-2 mb-5'>Para Comer</h3>
                                <ul className='px-0'>
                                    <li className='d-flex justify-content-between'>
                                        <p className='fs-3 mx-2'>Desayunos</p>
                                        <p className='fs-3 mx-2 text-success fw-nold'>$12</p>
                                    </li>
                                    <li className='d-flex justify-content-between'>
                                        <p className='fs-3 mx-2'>Beef</p>
                                        <p className='fs-3 mx-2 text-success fw-nold'>$15</p>
                                    </li>
                                    <li className='d-flex justify-content-between'>
                                        <p className='fs-3 mx-2'>Spaghetti con salsa Bolognese</p>
                                        <p className='fs-3 mx-2 text-success fw-nold'>$11</p>
                                    </li>
                                </ul>
                            </div>

                            <div className='col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0'>
                                <h3 className='fs-2 mb-5'>Para beber</h3>
                                <ul className='px-0'>
                                    <li className='d-flex justify-content-between'>
                                        <p className='fs-3 mx-2'>Cafe</p>
                                        <p className='fs-3 mx-2 text-success fw-nold'>$12</p>
                                    </li>
                                    <li className='d-flex justify-content-between'>
                                        <p className='fs-3 mx-2'>Jugos</p>
                                        <p className='fs-3 mx-2 text-success fw-nold'>$15</p>
                                    </li>
                                    <li className='d-flex justify-content-between'>
                                        <p className='fs-3 mx-2'>Cockteles</p>
                                        <p className='fs-3 mx-2 text-success fw-nold'>$11</p>
                                    </li>
                                </ul>
                            </div>                  
                            
                            
                        </div>
                        <MenuBtn />
                    </div>
                </div> 
                <ImageGallery />   
                <div className='bg-dark text-light py-5 shadow'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-0'>
                                <ContactInfo />
                            </div>
                            <div className='col-lg-6 d-flex justify-content-center'>
                                <img src={ContactImage} className='img-fluid w-50' alt=''/>
                            </div>
                        </div>
                    </div>
                </div>
         </div>
    )
}
export default Home;
