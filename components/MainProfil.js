import Card from "./card"
import { GiSoccerKick } from 'react-icons/gi'
import { IoIosAddCircleOutline } from 'react-icons/io'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { useState } from 'react'
import { v4 as uuidv4 } from "uuid"


export default function MainProfil() {

  const [modal, setModal] = useState(false)
  const modalHandler = () => {
    setModal(!modal)
  }

  const [inputName, setInputName] = useState('')

  const inputNameHandler = (e) => {
    console.log(e.target.value)
    setInputName(e.target.value)
  }


  const [inputAge, setInputAge] = useState('')

  const inputAgeHandler = (e) => {
    console.log(e.target.value)
    setInputAge(e.target.value)
  }


  const [players, setPlayers] = useState([])

  ////////////  save players ////////////

  const playersHandler = (e) => {





    if (inputName && inputAge) {
      e.preventDefault();
      setPlayers([
        ...players, { Name: inputName, Age: inputAge, complete: false, id: uuidv4(), edit: false }
      ])
      modalHandler(false)
      setInputName("");

    }

    if (!inputName) {

      alert('please enter player Name')
    } else if (!inputAge) {

      alert('please enter Age')
    }





  }

  ///////////// Remove player  //////////

  const remeveHandler = () => {

    players.map((player) =>
      setPlayers(players.filter((el) => el.id !== player.id))

    )




  }







  return (
    <div className=" flex flex-col justify-between bg-[#000300] text-white ">
      <div className=" w-[100%] xl:h-[700px] bg-[#000300] rounded-2xl  p-3 h-[1300px] pt-5 hover:shadow-xl    ">

        <h3 className="text-center my-5">Create a Team</h3>
        <div className=" w-full h-96 grid sm:grid-cols-1 xl:grid-cols-3 gap-4">
          <div className='flex flex-col border text-left rounded-2xl py-2 '>
            <div className=" h-96 flex flex-col gap-3 px-2 overflow-auto   ">
              <div className='bg-[#00d8ff] inline-flex p-2  rounded-full w-12 '>
                <GiSoccerKick size={30} />
              </div>
              <button className='flex border px-20 py-0 border-dashed justify-center w-[80%] mx-[10%]  ' onClick={modalHandler}><IoIosAddCircleOutline size={30} className='md:' />Add Player</button>

              <div className="text-center">
                <ul className="">

                  {players.map((players) => (
                    <div className='bg-gradient-to-r from-[#00d8ff] font-opensans text-2xl  my-1 rounded-xl flex justify-between px-5 py-2 md:py-2 border-2 border-slate-700 '>
                      <div>
                        <li className='flex justify-around  '><h1 className="pr-20"><p className=" text-black">Name:</p>{players.Name}</h1><h1><p className=" text-red-300">Age:</p>{players.Age}</h1> </li>
                      </div >
                      <div className='flex '>

                        <button className='ml-[10%] hover:bg-gray-400 rounded-2xl' onClick={remeveHandler}><RiDeleteBin6Line color='white' /></button>


                      </div>
                    </div>
                  ))}




                </ul>

              </div>


            </div>
          </div>


          {/* ////////////////////////// agenda ///////////////////////////////////////// */}




          <div className='lex flex-col border text-left rounded-2xl justify-around py-2 bg-white hover:shadow-xl  shadow-ms shadow-white'>
            <div>
              
              <div class="flex items-center justify-center p-12 ">
                
                <div class="mx-auto w-full max-w-[550px]">
                  <form action="https://formbold.com/s/FORM_ID" method="POST">
                    <div class="-mx-3 flex ">
                      
                        <div class="mb-5">
                          <label
                            for="team Name"
                            class="mb-3 block text-base font-medium text-[#07074D]"
                          >
                            The Name of the Team
                          </label>
                          <input
                            type="text"
                            name="team Name"
                            id="fName"
                            placeholder="enter a Name"
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          />
                        </div>
                      
                      
                    </div>
                    <div class="mb-5">
                      <label
                        for="guest"
                        class="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        How many player your team have?
                      </label>
                      <input
                        type="number"
                        name="guest"
                        id="guest"
                        placeholder="5"
                        min="0"
                        class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    <div class="-mx-3 flex flex-wrap">
                      <div class="w-full px-3 sm:w-1/2">
                        <div class="mb-5">
                          <label
                            for="date"
                            class="mb-3 block text-base font-medium text-[#07074D]"
                          >
                            Date
                          </label>
                          <input
                            type="date"
                            name="date"
                            id="date"
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          />
                        </div>
                      </div>
                      <div class="w-full px-3 sm:w-1/2">
                        <div class="mb-5">
                          <label
                            for="time"
                            class="mb-3 block text-base font-medium text-[#07074D]"
                          >
                            Time
                          </label>
                          <input
                            type="time"
                            name="time"
                            id="time"
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="mb-5">
                      <label class="mb-3 block text-base font-medium text-[#07074D]">
                        Are you coming to the event?
                      </label>
                      <div class="flex items-center space-x-6">
                        <div class="flex items-center">
                          <input
                            type="radio"
                            name="radio1"
                            id="radioButton1"
                            class="h-5 w-5"
                          />
                          <label
                            for="radioButton1"
                            class="pl-3 text-base font-medium text-[#07074D]"
                          >
                            Yes
                          </label>
                        </div>
                        <div class="flex items-center">
                          <input
                            type="radio"
                            name="radio1"
                            id="radioButton2"
                            class="h-5 w-5"
                          />
                          <label
                            for="radioButton2"
                            class="pl-3 text-base font-medium text-[#07074D]"
                          >
                            No
                          </label>
                        </div>
                      </div>
                    </div>

                    <div>
                      <button
                        class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className='lex flex-col border text-left rounded-2xl justify-around py-2'>
            <div>
              <div className='bg-[#00d8ff] inline-flex p-2 rounded-full'>
                icon
              </div>
              <h3 className='text-xl font-bold py-4'>headling</h3>
              <p>
                text
              </p>
            </div>
          </div>
        </div>

      </div>


      <div className=" w-[100%] h-80  border text-left rounded-2xl py-5 px-8 my-5">
        <h3 className="text-center">Map Position</h3>
      </div>


      <div className=" w-[100%] h-80 bg-[#07dd47]  rounded-2xl my-2">
        <h3 className="text-center ">Find a team</h3>
      </div>


      {/* ////////////////// modal Player ////////////////////*/}

      <div className={modal ? " absolute mx-[23%] py-8 text-black  " : "hidden"}>
        <div className="w-96 mx-auto bg-white rounded-2xl shadow h-[450px] my-3 relative ">
          <button onClick={() => setModal(!modal)} className='top-0 right-2 absolute text-3xl text-black'>x</button>

          <div className="mx-16 py-4 px-8 text-black text-xl font-bold border-b border-grey-500">Player Information
          </div>

          <form name="Player Information" id="Player Information" action="">
            <div className="py-10 px-8">

              <div className="mb-4">

                <label className="block text-grey-darker text-sm font-bold mb-2">Player Name:</label>
                <input className=" border rounded w-full py-2 px-3 text-grey-darker" type="text"
                  name="Player Name" id="Player Name" placeholder="Enter Player Name" onChange={inputNameHandler} required />

              </div>


              <div className="mb-4">
                <label className="block text-grey-darker text-sm font-bold mb-2">Player Age</label>
                <input className=" border rounded w-full py-2 px-3 text-grey-darker" type="text"
                  name="Player Age" id="Player Age" placeholder="Enter Player Age" onChange={inputAgeHandler} required />

              </div>


              <div className="">
                <button
                  className="mb-2 mx-10 rounded-full py-1 px-24 bg-gradient-to-r from-green-400 to-blue-500 " onClick={playersHandler}>
                  Save
                </button>
              </div>
            </div>
          </form>

        </div>

      </div>


      {/* <div>
        <div class="max-w-xs bg-gray-800 text-sm text-white rounded-md shadow-lg dark:bg-gray-900 mb-3 ml-3 " role="alert">
          <div class="flex p-4">
          Are sure you want to delete this Player!

            <div class="ml-auto">
              <button type="button" class="inline-flex flex-shrink-0 justify-center items-center h-4 w-4 rounded-md text-white/[.5] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-gray-600 transition-all text-sm dark:focus:ring-offset-gray-900 dark:focus:ring-gray-800">
                <span class="sr-only">Close</span>
                <svg class="w-3.5 h-3.5" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z" fill="currentColor" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div> */}





    </div>
  )
}
