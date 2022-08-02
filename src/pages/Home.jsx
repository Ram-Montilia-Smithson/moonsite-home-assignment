import { Button, Grid } from '@mui/material';
import { CREATING_SETS, SAVED_SETS } from 'navigation/Constants';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
    selectPants, selectSavedSets, selectShirts, selectShoes, changeCurrentClothingType, selectCurrentClothingType
} from 'redux/clothingReducer';
import { Item } from 'components';

export default function Home() {

    const savedSets = useSelector(selectSavedSets);
    const shirts = useSelector(selectShirts);
    const pants = useSelector(selectPants);
    const shoes = useSelector(selectShoes);
    const clothingType = useSelector(selectCurrentClothingType);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const pickingClothes = (type) => {
        dispatch(changeCurrentClothingType(type))
        navigate(CREATING_SETS, { replace: true })
    }

    return (
        <div>
            <section style={{ height: '30vh' }}>
                <Link to={SAVED_SETS}>Saved Sets ({savedSets.length})</Link>
            </section>
            <section style={{ height: '30vh' }}>
                <Grid container spacing={3}>
                    <Grid item xs>
                        <Item>Shirts ({shirts.length })</Item>
                    </Grid>
                    <Grid item xs>
                        <Item>Pants ({pants.length})</Item>
                    </Grid>
                    <Grid item xs>
                        <Item>Shoes ({shoes.length})</Item>
                    </Grid>
                </Grid>
            </section>
            <section style={{ height: '30vh', border: 'solid black 1px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Button 
                    onClick={() => pickingClothes('shirt')} 
                    style={{margin: '10px'}} 
                    variant="contained"
                    disabled={clothingType==='shirt'}
                >
                    Pick Shirt
                </Button>
                <Button 
                    onClick={() => pickingClothes('pants')} 
                    style={{margin: '10px'}} 
                    variant="contained"
                    disabled={clothingType === 'pants'}
                >
                    Pick Pants
                </Button>
                <Button 
                    onClick={() => pickingClothes('shoes')} 
                    style={{margin: '10px'}} 
                    variant="contained"
                    disabled={clothingType === 'shoes'}
                >
                    Pick Shoes
                </Button>
            </section>
        </div>
    )
}
