import React from 'react';

const Contact = () => {
    return (
        <div className='container mx-auto mt-24 '>
            <h1 className='text-white text-2xl font-bold mb-6'>Let's Build Something Great Together</h1>
            <div className='bg-gray-700 p-16 rounded-xl flex gap-12 '>
                <form className='text-white flex flex-col gap-5 w-1/3'>
                    <label>
                        First Name *
                        <input type='text' className='block bg-gray-300 text-black rounded-lg mt-2 w-full' required />
                    </label>
                    <label>
                        Email *
                        <input type='email' className='block bg-gray-300 text-black rounded-lg mt-2 w-full' required />
                    </label>
                    <label>
                        Phone
                        <input type='text' className='block bg-gray-300 text-black rounded-lg mt-2 w-full' />
                    </label>
                    <button className='bg-black p-3 rounded-lg  w-fit'>Contact</button>
                </form>
                <p>lorem</p>
            </div>
        </div>
    );
};

export default Contact;