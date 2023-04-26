import { CardProducts } from '../../components/CardProducts'
import { Header } from '../../components/Header'
import { deals } from '../../data/deals'
import { Deal } from '../../types/Tdeals'


export const HomePage = () => {

    return (
        <main className='z-0'>
            <Header />
            <section className='grid grid-cols-12 p-5 gap-5'>
              {deals.map((deal: Deal, i)=><CardProducts key={deal.name+i} data={deal}/>)}
            </section>
        </main>
    )

}