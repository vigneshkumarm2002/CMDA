import React, { useState } from 'react'
import payImage from "./../assets/cmda_payment.jpeg"
import PaySuccess from './paySuccess'

const PaymentPage = () => {
    const [showModal, setShowModal]=useState(false)
  return (
    <div className="flex flex-col w-full md:max-w-[800px] mx-auto ">
    <div className="flex min-h-full flex-1 flex-col justify-center  py-4 sm:px-6 lg:px-8">
      <div className="sm:bg-white sm:px-6 sm:py-6 sm:shadow sm:rounded-lg  w-full ">

        <img src={payImage} className='w-full h-full'/>
        </div>
        </div>
        <div className="flex gap-4 self-center mt-8">
                <button
                onClick={()=>setShowModal(true)} 
                  className="flex justify-center items-center w-[100px] rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Pay
                </button>
                <button
               onClick={()=>window.location.href = './'} 
                  type="submit"
                  className="bg-white border w-[100px]  flex gap-2 justify-center items-center border-gray-300 text-gray-900 hover:bg-gray-50 font-medium py-2 px-4 rounded-md"
                >
                  Cancel
                </button>
              </div>


              <PaySuccess open={showModal} setOpen={showModal} />
        </div>
  )
}

export default PaymentPage