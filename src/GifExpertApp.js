import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One punch'])

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {  
                    categories.map(cat => (
                        <GifGrid 
                            category={cat}
                            key={cat}
                        />
                    ))
                }
            </ol>
        </>
    );
}

export default GifExpertApp;
