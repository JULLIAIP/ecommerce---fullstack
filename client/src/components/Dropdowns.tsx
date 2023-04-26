//https://www.npmjs.com/package/@headlessui/react
import { Menu } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { ContextGlobal } from '../global/GlobalState';
import { useContext } from 'react'
import { NavLink } from 'react-router-dom';

export default function Dropdown() {
    const { setShowCreateDeal} = useContext(ContextGlobal)

    return (
        <Menu as="button" className="text-left">

            <Menu.Button>
                {({ open }) => (
                    <div className={`${open ? 'text-Primary' : ' text-White'}`}>
                        <div className='inline-flex items-center relative w-full justify-center gap-2 '>
                            Negociação
                            <ChevronDownIcon width={15} className='pt-1' />
                        </div>
                    </div>
                )}
            </Menu.Button>


            <Menu.Items className="grid absolute sm:top-16 max-sm:top-10 z-10 sm:mt-6 text-Button max-sm:text-SubDescription divide-y rounded-md bg-Primary text-White">

                <Menu.Item>
                    <NavLink to={'/negociations'} className="p-3">
                        Minhas Negociações
                    </NavLink>
                </Menu.Item>

                <Menu.Item>
                    <NavLink to={'/negociations'} className="p-3" onClick={() => setShowCreateDeal(true)}>
                        Criar Negociação
                    </NavLink>
                </Menu.Item>

            </Menu.Items>


        </Menu>
    )
}
