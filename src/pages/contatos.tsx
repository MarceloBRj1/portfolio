import { CopyButton } from '@/components/commons/CopyButton'
import Head from 'next/head'
import React from 'react'

const contato = () => {
  return (
    <>
    <Head>
      <title>Contatos | Marcelo</title>
    </Head>
    
    <div className='mt-12 md:mt-14 space-y-8 md:space-y-16 px-6'>
      <h1 className='text-5xl md:text-7xl font-bold text-center'>Contatos</h1>
      <ul className='table mx-auto space-y-6 md:space-y-8'>
        <li className='md:text-xl'>
          <span className='font-bold'>E-mail</span>
          <div className='flex gap-1 md:gap-3 items-center'>
            <a href="mailto:marcelobarreiradev@outlook.com" className='text-sm md:text-lg text-slate-300 underline truncade'>marcelobarreiradev@outlook.com</a>
            <CopyButton textToCopy='marcelobarreiradev@outlook.com' />
          </div>
        </li>
        <li className='md:text-xl'>
          <span className='font-bold'>LinkedIn</span>
          <div className='flex gap-1 md:gap-3 items-center' >
            <a target='blank' className='text-sm md:text-lg text-slate-300 underline truncade' href="https://www.linkedin.com/in/marcelobarreira-dev/">https://www.linkedin.com/in/marcelobarreira-dev/</a>
          </div>
        </li>
        <li className='md:text-xl'>
          <span className='font-bold'>GitHub</span>
          <div className='flex gap-1 md:gap-3 items-center' >
            <a target='blank' className='text-sm md:text-lg text-slate-300 underline truncade' href="https://github.com/MarceloBRj1">https://github.com/MarceloBRj1</a>
          </div>
        </li>
      </ul>
    </div>
    </>
  )
}

export default contato