import Dropdown from './Dropdowns'
//https://github.com/tailwindlabs/heroicons
import { HomeIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom'


export const Header = () => {

    return (
        <header className="bg-Black w-full h-auto font-inter text-Base font-semibold">

            <nav className='flex flex-wrap sm:justify-around max-sm:justify-between max-sm:px-3 items-center h-full bg-red'>

                <NavLink to={'/'} className='max-sm:w=1/4'>
                    <HomeIcon className="sm:w-14 max-sm:w-10 text-White hover:text-Primary" />
                </NavLink>

                <div className='flex items-center justify-end sm:gap-16  max-sm:text-SubDescription max-sm:gap-5'>

                    <Dropdown />

                    <NavLink to={'/invite'}
                        className="text-White hover:text-Primary md:my-6">
                        Convites
                    </NavLink>

                    <NavLink to={''}>
                        <UserCircleIcon className="w-10 text-White  hover:text-Primary " />
                    </NavLink>


                </div>
            </nav>
        </header >
    )

}