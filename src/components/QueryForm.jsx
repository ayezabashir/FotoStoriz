import React, { useRef, useState } from 'react'
import Button from './Button'

const QueryForm = () => {
    const [userName, setUserName] = useState('');
    const [error, setError] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userQuery, setUserQuery] = useState('');
    const emailRef = useRef(null);

    const handleEmailChange = (e) => {
        setUserEmail(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!emailRef.current.validity.valid) {
            setError("Please enter valid email address")
        } else {
            setError("");
            setUserEmail("");
            setUserName("");
            setUserQuery("");
        }

        
    }
    return (
        <div className='max-w-[900px] my-10 mx-auto'>
            <div className='mx-4'>
                <h2 className='text-center text-xl font-semibold'>Still Got Questions?</h2>
                <h3 className='text-center text-3xl font-bold'>Contact Us</h3>
                <form className='max-w-[400px] mx-auto' noValidate>
                    <div className='border-b flex flex-col gap-4 mt-5'>
                        <label className='font-semibold text-base' htmlFor="fullname">Full Name</label>
                        <input className='border-0 w-full outline-0' minLength="2" maxLength="50" value={userName} onChange={(e) => setUserName(e.target.value)} type="text" name="fullname" id="fullname" />
                    </div>
                    <div className='border-b flex flex-col gap-4 mt-5'>
                        <label className='font-semibold text-base' htmlFor="email">Email</label>
                        <input className='border-0 w-full outline-0' ref={emailRef} value={userEmail} onChange={(e) => handleEmailChange(e)} pattern="^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" type="email" name="email" id="email" />
                        {
                            error && <p className='text-red-500 text-xs'>{error}</p>
                        }
                    </div>
                    <div className='border-b flex flex-col gap-4 mt-5'>
                        <label className='font-semibold text-base' htmlFor="query">Your Query</label>
                        <textarea minLength="2" maxLength="500" className='resize-none outline-0 border-0' value={userQuery} onChange={(e) => setUserQuery(e.target.value)} cols="35" name="query" id="query"></textarea>
                        <p className='text-red-400 text-xs text-right'>Remaining characters: {500-userQuery.length}</p>
                    </div>
                    <Button type="submit" variant="primary" size="md" className="mt-6 mx-auto block p-2" onClick={(e) => handleSubmit(e)}>
                        Submit
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default QueryForm