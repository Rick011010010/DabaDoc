import { getProviders, signIn, useSession, signOut, getSession } from "next-auth/react";
import { useState, useEffect } from 'react'
import { AiFillHome } from 'react-icons/ai'
import { AiFillSetting } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'
import { TiThMenu } from 'react-icons/ti'

function Navbar() {

    const { data: session, status } = useSession();
    const [logout, setLogout] = useState(false);

    const logoutHandler = () => {
        setLogout(!logout)
    }




    return (
        <div>
            <nav class=" border-b-gray-800 border-b-2 shadow-2xl shadow-gray-800">
                <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                    <div class="relative flex items-center justify-between h-16">
                        <div class="flex items-center px-2 lg:px-0">
                            <div class="flex">
                                <img class="block lg:hidden h-20 w-28" src="/LOGO INSSSSS.png" alt="Workflow/" />
                                <img class="hidden lg:block h-20 w-28 p-0" src="/LOGO INSSSSS.png" alt="Workflow" />
                                <h1 className='text-[#24d450] hidden lg:block text-4xl pt-5'>InstaKoora</h1>
                            </div>
                            <div class="hidden lg:block lg:ml-6">
                                <div class="flex space-x-4">
                                    {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                                    <a href="#" class="bg-gray-900 text-[#2afc5f]  px-3 py-2 rounded-md text-lg font-medium flex"><AiFillHome size={25} />Home</a>
                                    <a href="#" class="text-[#2afc5f] hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium flex">Team</a>
                                    <a href="#" class="text-[#2afc5f] hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium flex">Position</a>
                                    <a href="#" class="text-[#2afc5f] hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium flex">Calendar</a>
                                </div>
                            </div>
                        </div>
                        <div class="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
                            <div class="max-w-lg w-full lg:max-w-xs">
                                <label for="search" class="sr-only">Search</label>
                                <div class="relative">
                                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        {/* <!-- Heroicon name: solid/search --> */}
                                        <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                    <input id="search" name="search" class="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-700 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 sm:text-sm" placeholder="Search" type="search" />
                                </div>
                            </div>
                        </div>
                        <div class="flex lg:hidden">
                            {/* <!-- Mobile menu button --> */}
                            <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false" onClick={() => logoutHandler()}>
                                <span class="sr-only">Open main menu</span>
                                {/* <!--
                                    Icon when menu is closed.

                                    Heroicon name: outline/menu

                                    Menu open: "hidden", Menu closed: "block" */}

                                <svg class={!logout?"block h-6 w-6 text-[#2afc5f]":'hidden'} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                                {/* <!--
                                    Icon when menu is open.

                                    Heroicon name: outline/x

                                    Menu open: "block", Menu closed: "hidden" */}

                                <svg class={logout?"block h-6 w-6 text-[#2afc5f]":'hidden'} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div class="hidden lg:block lg:ml-4">
                            <div class="flex items-center">
                                <button type="button" class="flex-shrink-0 bg-gray-800 p-1 rounded-full text-gray-400 hover:text-[#2afc5f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-[#2afc5f]">
                                    <span class="sr-only">View notifications</span>
                                    {/* <!-- Heroicon name: outline/bell --> */}
                                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                    </svg>
                                </button>

                                {/* <!-- Profile dropdown --> */}
                                <div class="ml-4 relative flex-shrink-0">
                                    <div>
                                        <button type="button" class="bg-gray-800 rounded-full flex text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-[#039427]" id="user-menu-button" aria-expanded="false" aria-haspopup="true" onClick={() => logoutHandler()}>
                                            <span class="sr-only">Open user menu</span>
                                            <img class="h-8 w-8 rounded-full" src={session?.user?.image} alt="" />
                                        </button>
                                    </div>

                                    {/* <!--
                                        Dropdown menu, show/hide based on menu state.

                                        Entering: "transition ease-out duration-100"
                                        From: "transform opacity-0 scale-95"
                                        To: "transform opacity-100 scale-100"
                                        Leaving: "transition ease-in duration-75"
                                        From: "transform opacity-100 scale-100"
                                        To: "transform opacity-0 scale-95" */}

                                    <div class={logout ? "origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-[#2afc5f] ring-1 ring-black ring-opacity-5 focus:outline-none" : "hidden"} role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                                        {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
                                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 active:text-[#2afc5f] " role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
                                        <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
                                        <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2" onClick={() => signOut()}>Sign out</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Mobile menu, show/hide based on menu state. --> */}
                <div class={logout ?"lg:hidden":"hidden"} id="mobile-menu">
                    <div class="px-2 pt-2 pb-3 space-y-1">
                        {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                        <a href="#" class="bg-gray-900 text-[#2afc5f] block px-3 py-2 rounded-md text-base font-medium">Dashboard</a>
                        <a href="#" class="text-[#2afc5f] hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>
                        <a href="#" class="text-[#2afc5f] hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Position</a>
                        <a href="#" class="text-[#2afc5f] hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
                    </div>
                    <div class="pt-4 pb-3 border-t border-gray-700">
                        <div class="flex items-center px-5">
                            <div class="flex-shrink-0">
                                <img class="h-10 w-10 rounded-full" src={session?.user?.image} alt="" />
                            </div>
                            <div class="ml-3">
                                <div class="text-base font-medium text-white">{session?.user?.name}</div>
                                <div class="text-sm font-medium text-gray-400">{session?.user?.email}</div>
                            </div>
                            <button type="button" class="ml-auto flex-shrink-0 bg-gray-800 p-1 rounded-full text-gray-400 hover:text-[#2afc5f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-[#2afc5f]">
                                <span class="sr-only">View notifications</span>
                                {/* <!-- Heroicon name: outline/bell --> */}
                                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                            </button>
                        </div>
                        <div class="mt-3 px-2 space-y-1">
                            <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Your Profile</a>
                            <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Settings</a>
                            <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700" onClick={() => signOut()}>Sign out</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar