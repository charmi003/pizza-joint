import React from 'react'
import {Link} from 'react-router-dom'

function PageNotFound() {
    return (
        <div className='w-2/5 mx-auto text-center'>
            <h1 className="text-xl pb-2">Sorry!</h1>
            <h2 className=' pb-1 text-white text-opacity-75'>The page cannot be found</h2>
            <Link to='' className='text-white no-underline'><p className='hover:underline'>Back to the homepage</p></Link>
        </div>
    )
}

export default PageNotFound
