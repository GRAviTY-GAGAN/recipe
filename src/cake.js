import React from "react";
import pic1 from './img/photo1.png';

const cake = () => {
    return (
        <div>
            <h1 className='h1'>Classic Cheesecake Recipe</h1>
            <p className='p'>Look no further for a creamy and ultra smooth classic cheesecake recipe! Paired with a buttery graham cracker crust, no one can deny its simple decadence. For the best results, bake in a water bath.</p>
            <div className="container">
                <img className='cake' src={pic1} alt='cake'></img>
            </div>
        </div>
    )
}

export default cake;