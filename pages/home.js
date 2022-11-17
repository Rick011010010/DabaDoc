import { getProviders, signIn, useSession, signOut, getSession } from "next-auth/react";
import { connectToDatabase } from '../util/mongodb'

import Sidebar from "../components/Sidebar";

import React, { useState } from 'react'

import Navbar from "../components/Navbar";
import Questions from "../components/Questions";



function home() {

  const { data: session, status } = useSession();
  console.log(session)

  const [menu, setMenu] = useState(true)

  const menuHandler = () => {
    setMenu(!menu)
  }



  return (
    <div className=" bg-[#000300]   ">

      <div className=" bg-[#000300] z-50 ">


        <Navbar />

        
      </div>



      <div className="md:grid md:grid-cols-3 xl:grid xl:grid-cols-4    ">

        <Sidebar  />



        <div className="    xl:col-span-3 md:col-span-2   ">
          
          <Questions/>
        </div>
      </div>







    </div>

  )

}

export default home


export const getServerSideProps = async (context) => {
  const session = await getSession(context)






  
  const { db } = await connectToDatabase();
  

  return {
    props: {
      session,
    },
  }


}