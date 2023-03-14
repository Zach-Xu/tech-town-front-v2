import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { AppState } from '../redux/reducers'
import { TECH_TOWN_TOKEN } from '../lib/constants'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

type Props = {}

const Header = (props: Props) => {

    const currentUser = useSelector((state: AppState) => state.user)

    const router = useRouter()

    const logout = () => {
        if (typeof window !== 'undefined') {
            localStorage.removeItem(TECH_TOWN_TOKEN)
            router.push('/')
            toast.success('log out successfully')
        }
    }

    return (
        <div className='sticky top-0 h-[50px] bg-white border-b border-gray-300 py-2 flex items-center z-10'>
            <div className='w-screen flex items-center mx-auto max-w-[960px] px-3 space-x-5'>
                <Image src='/logo.png' width={36} height={36} className='hidden md:inline-block' alt='Tech Town Logo' />
                <div className='flex bg-gray-100 py-2 flex-1 rounded-full px-4 items-center space-x-3  focus-within:bg-white focus-within:border-blue-300 focus-within:border' tabIndex={1} >
                    <MagnifyingGlassIcon className='h-6 w-6' />
                    <input type="text" name="" placeholder='Search Question' className='bg-transparent focus:outline-none w-full text-gray-700' />
                </div>
                <ul className='flex space-x-2'>
                    <li>Welcome, {currentUser?.username}</li>
                    <li className='hidden md:inline-block cursor-pointer' onClick={logout}>Logout</li>
                </ul>
            </div>

        </div>
    )
}

export default Header