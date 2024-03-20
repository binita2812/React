import React from 'react';
import UseFetch from '.';


export default function UseFetchHookTest() {

    const {data, error, pending} = UseFetch('https://dummyjson.com/products', 
    {}
    );

    console.log(data, error, pending);
    return (
        <div>
            <h1>Use Fetch Hook</h1>
            {pending && <p>Loading...</p>}
            {
                data && data.products && data.products.length 
                ? data.products.map((item) => (
                    <p key={item.key}>
                    {item.title}             
                    </p>
                ))
                : null
            }
        </div>
    )
}