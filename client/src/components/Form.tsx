import { ArrowUpTrayIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { ButtonPrimary } from '../global/styles'
import { FormEvent, useState } from 'react'

import { ContextGlobal } from '../global/GlobalState';
import { useContext } from 'react'

export default function Form() {
    const [actions, setAction] = useState<string[]>(['venda'])
    const [isLimitDate, setIsLimitDate] = useState<Boolean>(false)
    const { setShowCreateDeal, navigate } = useContext(ContextGlobal)

    //fields values
    const [] = useState()


    const removeAction = (item: string) => {
        const itemRemove = actions.filter((act) => item !== act)
        setAction(itemRemove)
    }

    const handleAddAction = (item: string) => {
        setAction((old) => [...old, item])
    }


    const sendSubmit = (event: FormEvent) => {
        event.preventDefault()
    

    }


    return (
        <form onSubmit={sendSubmit}>
            <div className="flex flex-col justify-center w-full items-center ">
            <p className='text-Base font-bold p-4'>Nova negociação</p>
                {/* tipo */}
                <div className='grid w-full px-5 text-start font-medium text-Button mb-2'>
                    <label>
                        Tipo
                    </label>
                    <div className='border h-10 border-Background rounded-md flex items-center justify-between'>
                        <p className='h-9 flex pl-2 items-center gap-3'>{actions !== null &&
                            actions?.map((item) =>
                                <button
                                    onClick={() => removeAction(item)}
                                    className='bg-Background rounded-sm px-2 text-SubDescription h-6 flex items-center'>
                                    {item} <XMarkIcon className='w-2 ml-1 pb-2' />
                                </button>
                            )}
                        </p>
                        <select
                            onChange={(e) => handleAddAction(e.target.value)}
                            className='border-none h-9 focus:none'>
                            <option></option>
                            <option>Venda</option>
                            <option>Troca</option>
                            <option>Desejo</option>

                        </select>
                    </div>
                </div>

                {/* Descrição */}
                <div className='w-full px-5 mb-2'>

                    <textarea className='w-full border h-20 border-Background rounded-md' placeholder='Descrição' />

                </div>

                <div className='grid grid-cols-2 gap-2 w-full px-5 items-center mb-4'>

                    {/* price */}
                    <div className="flex border h-10 border-Background rounded-md">
                        <select
                            id="currency"
                            name="currency"
                            className=" rounded-md border-0 bg-Background text-SubDescription"
                        >
                            <option>USD</option>
                            <option>BRL</option>
                            <option>EUR</option>
                        </select>
                        <input
                            type="text"
                            name="price"
                            id="price"
                            className="block w-full border-none "
                            placeholder="0.00"
                        />
                    </div>

                    {/*Urgency  */}
                    <div className="1/2">
                        <div className=" h-10 ">
                            <select
                                id="urgency"
                                name="urgency"
                                autoComplete="urgency-name"
                                className=" w-full border h-10 border-Background rounded-md"
                                onChange={(e) => { e.target.value === 'Personalizado' ? setIsLimitDate(true) : setIsLimitDate(false) }}
                            >
                                <option>Baixa</option>
                                <option>Média</option>
                                <option>Alta</option>
                                <option>Personalizado</option>
                            </select>
                        </div>
                    </div>
                    <div className=' justify-end text-right grid col-span-2'>
                        {isLimitDate && <input
                            className=' flex border h-10 border-Background rounded-md text-center '
                            type='date' />}
                    </div>

                </div>

                {/* UpLoad File */}
                <div className="w-full justify-center flex">
                    <div className="mt-2 w-2/4 bg-Background flex justify-center rounded-sm border border-dashed border-Primary px-3 py-2">
                        <div className="text-center">
                            <ArrowUpTrayIcon className="mx-auto h-5 w-12 text-Primary" />

                            <label
                                htmlFor="file-upload"
                                className="relative w-full text-SubDescription cursor-pointer rounded-md "
                            >
                                <span className="">Drag & drop or </span>
                                <span className='underline text-Primary'>browse</span>
                                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                            </label>



                        </div>
                    </div>
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
                        onClick={() => { setShowCreateDeal(false), navigate("/deal/1") }}
                        className={`${ButtonPrimary} font-medium m-5`}
                    >
                        Salvar
                    </button>
                </div>

            </div>
        </form >
    )
}
