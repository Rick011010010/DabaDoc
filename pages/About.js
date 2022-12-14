import { getProviders, signIn, useSession, signOut } from "next-auth/react";

function About() {


  return (
    <div className=" hidden md:absolute md:w-[60%] xl:w-[40%] md:px-10 md:top-80 xl:top-96 md:flex md:flex-col md:justify-around md:h-60 md:py-9'">
      <h1 className="md:text-[#17D647] lg:text-white 2xl:text-8xl lg:text-4xl md:text-3xl xl:text-6xl ">WELCOME TO <p className="md:text-white lg:text-[#17D647] ">Ask Your neighbours</p> </h1>
      <div className="abdolute xl:mt-10">
        <h1 className=" lg:text-4xl md:text-2xl font-Merriweather my- tracking-wide xl:py-7 md:py-3 2xl:py-10 md:text-[#17D647] lg:text-white">join Us and you would be able to ask everything you want to the people next to you </h1>
        <p className=" tracking-wide text-xl font-opensans md:text-white lg:text-[#17D647] "></p>
        <div className="flex justify-start mt-6 text-bold  py-4">
          <button className=' bg-transparent border-2 rounded-full text-white px-10 md:py-0 py-1 shadow-ms hover:shadow-xl active:scale-90 transition duration-150 md:w-60 border-white '
            onClick={() => signIn()}>Create an Account</button>

          <button className=' bg-[#11D142] border-2 rounded-full text-white px-10 md:py-2 py-1 mx-3 shadow-ms hover:shadow-xl active:scale-90 transition duration-150 md:w-60 border-white '
            onClick={() => signIn()}>Connexion</button>


        </div>
      </div>

    </div>
  )
}

export default About


export async function getServerSideProps(context) {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}