"use client"
import React, { useState } from 'react'
import Link from 'next/link'

const Card6 = () => {
    const [tabOpen, setTabOpen] = useState(1)
  return (
    <div className='md:flex my-5 justify-between border p-10 rounded-2xl space-x-5'>
        <div> 
            <div className='border p-0.5 rounded-full'>
                <button onClick={()=>{setTabOpen(1)}} className={`${tabOpen == 1 ? "bg-white  py-2 text-black border-none rounded-full px-6" :   "py-2 text-white border-none rounded-full px-6"} font-semibold w-[200px]`}>Native</button>
                <button onClick={()=>{setTabOpen(2)}} className={`${tabOpen == 2 ? "bg-white  py-2 text-black border-none rounded-full px-6" :   "py-2 text-white border-none rounded-full px-6"} font-semibold w-[200px]`}>Permissionless</button>
            </div>
           {tabOpen == 1? 
           <div>
           <div class="grid-css"></div>
           
            <div className='first-tab border rounded-2xl p-8 my-5'>
            <div className='flex justify-between my-3 space-x-8'>
                <ul>
                    <li className='pb-2 text-sm'>Token Transfers</li>
                    <li className='pb-2 text-sm'>Transaction Signing</li>
                    <li className='pb-2 text-sm'>Google Login</li>
                </ul>
                <ul>
                    <li className='pb-2 text-sm'>Account Management</li>
                    <li className='pb-2 text-sm'>Endpoint Infrastructure</li>
                    <li className='pb-2 text-sm'>Staking/Governance</li>
                </ul>
            </div>
            <hr/>
             <div className='flex justify-between mt-6'>
                <div className='mt-2'> <Link href="#">Get Started</Link></div>
                <div className='h-[40px] bg-cyan-400 py-2 px-4 rounded-full text-black'>
                     <Link className='' href="#">Learn More</Link>
                </div>
             </div>
            </div> </div> :  tabOpen == 2 ?  <div className=' border rounded-2xl p-8 my-5'>
            <div className='flex justify-between my-3 space-x-8'>
                <ul>
                    <li className='pb-2 text-sm'>Token Transfers</li>
                    <li className='pb-2 text-sm'>Transaction Signing</li>
                    <li className='pb-2 text-sm'>Google Login</li>
                </ul>
                <ul>
                    <li className='pb-2 text-sm'>Account Management</li>
                    <li className='pb-2 text-sm'>Endpoint Infrastructure</li>
                    <li className='pb-2 text-sm'>Staking/Governance</li>
                </ul>
            </div>
            <hr/>
             <div className='flex justify-between mt-6 '>
                <div className='mt-2'> <Link href="#">Get Started</Link></div>
                <div className='h-[40px] bg-cyan-400 py-2 px-4 rounded-full text-black'>
                     <Link className='' href="#">See Documentation</Link>
                </div>
             </div>
            </div> : ""
           }
        </div>
        <div className='my-auto'>
            <h2 className='text-3xl font-semibold'>Built for Developers</h2>
          <p> Keplr is open-sourced. Add the seamless <br/> wallet experience easily to your products</p> 
        </div>
    </div>
  )
}

export default Card6
