import React, { ReactNode } from 'react'


interface PropsNosotros {
    title: string,
    description: string,
    icono?: ReactNode
}

const CardNosotros = ({ title, description, icono }: PropsNosotros) => {



    return (
        < >
            <section className='px-4 mx-2 shadow-lg flex flex-col mb-2 pb-2 pt-3 mt-2 bg-white'>
                <div className='self-center flex flex-col items-center'>

                    <div className='text-6xl text-primary-sm mb-2 '>

                        {icono}
                    </div>
                    <div>
                        <h4 className='text-primary-sm text-3xl font-bold'>{title}</h4>
                    </div>
                </div>
                <div>
                    <p className='text-justify'>
                        {description}
                    </p>
                </div>

            </section>




        </ >
    )




}


export default CardNosotros;