import { useContext } from 'react'
import { ContextGlobal } from '../../global/GlobalState'
import { ModelCreateDeal } from '../../components/ModelCreateDeal'
import { Header } from '../../components/Header'

export const NegociationPage = () => {
    const { showCreateDeal } = useContext(ContextGlobal)
    return (
        <div className='relative'>
            <Header />
            {showCreateDeal && <ModelCreateDeal form='deal' />}
            <p>Negociation Page</p>
        </div>
    )

}