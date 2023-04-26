import { useState, useContext, useEffect } from 'react'
import { MapPinIcon, CircleStackIcon } from '@heroicons/react/24/outline'
import { getDistance } from 'geolib';
import { getUserLocation } from '../utilities/getLocation';
import { Location } from '../types/Tusers';
import { ButtonPrimary } from '../global/styles';
import { ContextGlobal } from '../global/GlobalState';


export const CardProducts = ({ data }: any) => {
    const [distance, setDistance] = useState<number | null>(null)
    const { isLoading, setIsLoading } = useContext(ContextGlobal)
    const productLocation: Location = { lat: -23.5489, lng: -46.6388 };

    getUserLocation()
        .then((userLocation) => {
            setDistance(getDistance(userLocation, productLocation) / 1000)
        })
        .catch(() => alert('Erro ao carregar dados'));

    useEffect(() => {

        if (!data || !data.photos || !data.photos[0]) {
            setIsLoading(true)
        } else {
            setIsLoading(false)
        }

    }, [data])
    return (
        <div className=' p-4 h-auto max-sm:col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 shadow-Shadow_medium grid'>
            {isLoading ? <CircleStackIcon /> : <div>
                {distance != null &&
                    <p
                        className='bg-Black text-Primary justify-center flex gap-2 mb-2 p-1 text-SubDescription'>
                        Menos de {distance.toFixed(2)} km
                        <MapPinIcon width={15} />
                    </p>}

                <img
                    src={data.photos[0].src}
                />
                <div className='h-20 flex flex-col max-w-full'>
                    <span className='text-Base font-semibold leading-tight pt-2'>
                        {data.name}
                    </span>

                    <span className='text-Base font-semibold leading-tight'>
                        R$ {data.value}
                    </span>
                </div>
                <div className=' flex w-full justify-center pt-4 font-inter '>

                    <button className={`${ButtonPrimary}uppercase w-3/4`}>
                        Fazer Proposta
                    </button>

                </div></div>}

        </div>
    )

}