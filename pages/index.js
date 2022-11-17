import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../layouts/Navbar'
import Login from '../components/Login'
import { getProviders, signIn, useSession, signOut, getSession } from "next-auth/react";
import LoginMobile from '../components/LoginMobile';

import About from './About'
import HowWork from '../layouts/HowWork'
import Footer from '../layouts/Footer'
import AboutUsTele from '../layouts/AboutUsTele'


const Home = () => {


  
  return (
    <div className="bg-black w-screen h-screen ">


      <Head>
        <title>dabaDoc</title>
        <link rel="icon" href="/LOGO INSSSSS.png" />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@1,800&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@700&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@1,600&display=swap" rel="stylesheet"></link>
        <link href='https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css' rel='stylesheet' />
        
      </Head>




      
      <div className='hidden md:flex  xl:h-[800px] 2xl:h-[900px] w-screen md:h-[700px]' >
        <About />
      </div>








      






      


      









    </div>
  )
}

export default Home




