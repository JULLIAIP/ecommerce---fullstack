
import { useContext } from 'react'
import { ContextGlobal } from "../../global/GlobalState";
import { ModelCreateDeal } from '../../components/ModelCreateDeal';

export const LoginPage = () => {
    const { navigate, setShowCreateUser, showCreateUser} = useContext(ContextGlobal);

    return (
        <div className="flex min-h-full relative flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            {showCreateUser && <ModelCreateDeal form = 'user'/>}
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign in to your account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                    <div>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                placeholder="E-mail"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                placeholder="Password"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="text-sm text-right w-full text-Primary">
                                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <button
                            onClick={() => navigate('/')}
                            type="submit"
                            className="flex w-full text-White bg-Primary justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Sign in
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Not a member?{' '}
                    <button onClick={()=>setShowCreateUser(true)} className="font-semibold underline leading-6 text-indigo-600 hover:text-indigo-500">
                        Start a 14 day free trial
                    </button>
                </p>
            </div>
        </div>

    )
}
