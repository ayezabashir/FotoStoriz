import React from 'react'
import Button from './Button'

const QueryForm = () => {
    return (
        <div className='max-w-[900px] my-10 mx-auto'>
            <div className='mx-4'>
                <h2 className='text-center text-xl font-semibold'>Still Got Questions?</h2>
                <h3 className='text-center text-3xl font-bold'>Contact Us</h3>
                <form className='max-w-[400px] mx-auto'>
                    <div className='border-b flex flex-col gap-4 mt-5'>
                        <label className='font-semibold text-base' htmlFor="fullname">Full Name</label>
                        <input className='border-0 w-full outline-0' type="text" name="fullname" id="fullname" />
                    </div>
                    <div className='border-b flex flex-col gap-4 mt-5'>
                        <label className='font-semibold text-base' htmlFor="email">Email</label>
                        <input className='border-0 w-full outline-0' type="email" name="email" id="email" />
                    </div>
                    <div className='border-b flex flex-col gap-4 mt-5'>
                        <label className='font-semibold text-base' htmlFor="query">Your Query</label>
                        <textarea className='resize-none outline-0 border-0' cols="35" rows="1" name="query" id="query"></textarea>
                    </div>
                    <Button type="button" variant="primary" size="md" className="mt-6 mx-auto block p-2" onclick={(e)=>e.preventDefault()}>
                        Submit
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default QueryForm