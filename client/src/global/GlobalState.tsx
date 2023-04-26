
import { createContext, ReactNode, useState, Dispatch } from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom';


type Globais = {
    setShowCreateDeal: Dispatch<setShowCreateDeal<boolean>>,
    showCreateDeal: boolean,
    setShowCreateUser: Dispatch<setShowCreateUser<boolean>>,
    showCreateUser: boolean,
    setIsLoading: Dispatch<setShowCreateDeal<boolean>>,
    isLoading: boolean,
    navigate: NavigateFunction
}
export type TProps = {
    children: ReactNode;
}
export const ContextGlobal = createContext<Globais>({} as Globais)

export const GlobalState = ({ children }: TProps) => {

    const [showCreateDeal, setShowCreateDeal] = useState(false)
    const [showCreateUser, setShowCreateUser] = useState(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const navigate = useNavigate();

    return <ContextGlobal.Provider value={{
        showCreateDeal,
        isLoading,
        showCreateUser,
        setShowCreateUser,
        setIsLoading,
        setShowCreateDeal,
        navigate
    }}>
        {children}
    </ContextGlobal.Provider>
}