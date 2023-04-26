import { UserIcon, EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import { ButtonPrimary } from '../global/styles'
import { FormEvent, useEffect, useState } from 'react'

import { ContextGlobal } from '../global/GlobalState';
import { useContext } from 'react'
import { Location } from '../types/Tusers';
import { api } from '../libs/axios';

export default function FormUser() {
    const { setShowCreateDeal, navigate } = useContext(ContextGlobal)
    const [name, setName] = useState<string | null>(null)
    const [email, setEmail] = useState<string | null>(null)
    const [password, setPassword] = useState<string | null>(null)
    const [login, setLogin] = useState<string | null>(null)
    const [location, setLocation] = useState<Location | null>(null)


    const states = [
        'Acre',
        'Alagoas',
        'Amapá',
        'Amazonas',
        'Bahia',
        'Ceará',
        'Distrito Federal',
        'Espírito Santo',
        'Goías',
        'Maranhão',
        'Mato Grosso',
        'Mato Grosso do Sul',
        'Minas Gerais',
        'Pará',
        'Paraíba',
        'Paraná',
        'Pernambuco',
        'Piauí',
        'Rio de Janeiro',
        'Rio Grande do Norte',
        'Rio Grande do Sul',
        'Rondônia',
        'Roraíma',
        'Santa Catarina',
        'São Paulo',
        'Sergipe',
        'Tocantins']

    let getLocation: Location = {
        latitude: 0,
        longitude: 0,
        address: '',
        city: '',
        state: '',
        zip_code: 0
    }

    function createNewUser(event: FormEvent) {

        event.preventDefault()

        setLocation(getLocation)

        console.log(name,
            email,
            password,
            login,
            location)

        try {

            if (!name || !email || !password || !login) {
                throw new Error()
            }

            api.post('user', {
                name,
                email,
                password,
                login,
                location
            })
            navigate("/")
            console.log("sucesso")

        } catch (error) {

            console.log("algo deu errado")

        }
    }

    useEffect(() => {
        // Check if the browser supports geolocation
        if ("geolocation" in navigator) {

            navigator.geolocation.getCurrentPosition(
                position => {
                    getLocation.latitude = position.coords.latitude;
                    getLocation.longitude = position.coords.longitude;
                },
                error => console.error(error),
                { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
            );
        } else {
            console.error("Geolocalização não suportada pelo navegador.");
        }
    }, []);


    return (
        <form onSubmit={createNewUser}>
            <div className="flex flex-col justify-center w-full items-center p-8">
                <p className='text-Base font-bold p-4'>Seja Membro</p>

                {/* Personal field data */}
                <label className=" w-full px-2 m-2 flex items-center border h-10 border-Background rounded-md hover:ring-2 hover:ring-Primary sm:text-sm sm:leading-6">
                    <UserIcon className='w-5 text-Default' />
                    <input
                        onChange={(event) => setName(event.target.value)}
                        type='text'
                        placeholder='name'
                        className='border-none h-9 '
                        required />
                </label>

                <label className=" w-full px-2 m-2 flex items-center border h-10 border-Background rounded-md hover:ring-2 hover:ring-Primary sm:text-sm sm:leading-6">
                    <EnvelopeIcon className='w-5 text-Default' />
                    <input
                        onChange={(event) => setEmail(event.target.value)}
                        required
                        type='email'
                        placeholder='E-mail'
                        className='border-none h-9 ' />
                </label>

                <label className=" w-full px-2 m-2 flex items-center border h-10 border-Background rounded-md hover:ring-2 hover:ring-Primary sm:text-sm sm:leading-6">
                    <UserIcon className='w-5 text-Default' />
                    <input
                        onChange={(event) => setLogin(event.target.value)}
                        required
                        type='text'
                        placeholder='Login'
                        className='border-none h-9 ' />
                </label>

                <label className=" w-full px-2 m-2 flex items-center border h-10 border-Background rounded-md hover:ring-2 hover:ring-Secondary sm:text-sm sm:leading-6">
                    <LockClosedIcon className='w-5 text-Default' />
                    <input
                        onChange={(event) => setPassword(event.target.value)}
                        required
                        type='password'
                        placeholder='password'
                        className='border-none h-9 sm:text-sm sm:leading-6 ' />
                </label>

                {/* Adress */}
                <hr />
                <h3>Endereço</h3>
                <div className='grid grid-cols-2 gap-2'>

                    <label className=" w-full px-2 m-2 flex items-center border h-10 border-Background rounded-md hover:ring-2 hover:ring-Primary sm:text-sm sm:leading-6">

                        <input
                            onChange={(event) => getLocation.address = event.target.value}
                            type='text'
                            placeholder='Rua'
                            className='border-none h-9 '
                            required />
                    </label>

                    <label className=" w-full px-2 m-2 flex items-center border h-10 border-Background rounded-md hover:ring-2 hover:ring-Primary sm:text-sm sm:leading-6">

                        <input
                            onChange={(event) => getLocation.city = event.target.value}
                            type='text'
                            placeholder='Cidade'
                            className='border-none h-9 '
                            required />
                    </label>

                    <label className=" w-full px-2 m-2 flex items-center border h-10 border-Background rounded-md hover:ring-2 hover:ring-Primary sm:text-sm sm:leading-6">

                        <select
                            onChange={(event) => getLocation.state = event.target.value}
                            className='border-none h-9 '
                            required>
                            {states.map((state) => <option key={state}>{state}</option>)}


                        </select>
                    </label>

                    <label className=" w-full px-2 m-2 flex items-center border h-10 border-Background rounded-md hover:ring-2 hover:ring-Primary sm:text-sm sm:leading-6">

                        <input
                            onChange={(event) => getLocation.zip_code = Number(event.target.value)}
                            type='text'
                            placeholder='Cep'
                            className='border-none h-9 '
                            required />
                    </label>

                </div>



                {/* buttons */}
                <div className="w-full grid grid-cols-2 justify-around items-center mb-2">

                    <button
                        type="button"
                        onClick={() => { navigate("/"); setShowCreateDeal(false) }}
                        className="m-5 h-10 font-medium text-Button border border-Background border-spacing-1 rounded-sm"
                    >
                        Cancelar
                    </button>

                    <button
                        type="submit"
                        onClick={() => { setShowCreateDeal(false) }}
                        className={`${ButtonPrimary} font-medium m-5`}
                    >
                        Salvar
                    </button>
                </div>

            </div>
        </form >
    )
}
