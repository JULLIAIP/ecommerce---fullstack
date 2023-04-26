
import Form from './Form';
import FormUser from './FormUser';

type TPropsModal = {
    form: string
}

export const ModelCreateDeal = (data: TPropsModal) => {

    return (
        <div className="w-full absolute top-0 left-0 min-h-screen h-auto bg-Default bg-opacity-60 z-10 justify-center sm:items-center flex p-4">

            <div className='bg-White h-auto rounded-md sm:w-3/4 md:2/4  max-sm:w-4/5 text-center m-4'>
                {data.form === 'user' && <FormUser />}
                {data.form === 'deal' && <Form />}


            </div>

        </div >
    )
}