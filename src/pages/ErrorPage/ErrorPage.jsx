import React from 'react';
import { Link, useRouteError,  } from 'react-router-dom';
import errorImg  from '../../assets/images/404.svg';

const ErrorPage = () => {
    const {state , error} = useRouteError();
    return (
        <div className='container mx-auto p-10'>
            <div className='flex flex-col-reverse md:flex md:flex-row justify-center items-center gap-8 h-screen'>
                <div className='mt-5'>
                    <h1 className='text-9xl mb-5 text-yellow-600'>{state || 404} 🥺</h1>
                    <p className='text-3xl mb-3 text-white'>Uh-oh!</p>
                    <p className='text-lg text-red-400 mb-5'>{error?.message ? error?.message : 'Page Not Found'}</p>
                    <Link to='/'><button className="btn btn-active btn-primary">Back to Home Page</button></Link>
                </div>
                <div>
                    <img src={errorImg} alt="error img" className='object-cover' />
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;