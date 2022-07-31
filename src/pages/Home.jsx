import { SAVED_SETS } from 'navigation/Constants';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchClothes } from 'utils/APIUtils';

export default function Home() {

    const [clothes, setClothes] = useState([])

    useEffect(() => {
        logClothes()
    }, [])

    const logClothes = async () => {
        setClothes(await fetchClothes())
    }
    

    return (
        <div>
            <section style={{height:'30vh'}}>
                <Link to={SAVED_SETS}>Saved Sets</Link>
            </section>
            {clothes && clothes.map(element => {
                return (
                    <span key={element.id}>{JSON.stringify(element)}</span>
                )
            })}
        </div>
    )
}
