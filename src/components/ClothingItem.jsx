import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Item } from 'components';
import logo from 'static/images/logo.png'
import shirt from 'static/images/shirt.png'
import pants from 'static/images/pants.jpg'
import shoes from 'static/images/shoes.jpg'
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { pickingItem, returningItem, selectCurrentSet } from 'redux/clothingReducer';

export default function ClothingItem({ item, inSavedSets }) {

    const [image, setImage] = useState(null)

    useEffect(() => {
        changeImage()
    }, [])
    

    const currentSet = useSelector(selectCurrentSet);
    const dispatch = useDispatch();

    const handleItemPicking = (item) => {
        if (currentSet[item.type]) dispatch(returningItem(currentSet[item.type]))
        if (currentSet[item.type]?.id !== item.id) dispatch(pickingItem(item))
    }

    const changeImage = () => {
        if (item.type === 'shirt') setImage({ image: shirt, title: 'shirt' })
        if (item.type === 'pants') setImage({ image: pants, title: 'pants' })
        if (item.type === 'shoes') setImage({ image: shoes, title: 'shoes' })
    }

    return (
        <Card
            sx={{ display: 'inline-flex', width: 150, height: 170, padding: '5px', margin: '5px', flexDirection: 'column' }}
        >
            <Typography>
                {item.brand}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography variant="subtitle1" component="div">
                            {item.type}
                        </Typography>
                        <Typography variant="subtitle1" component="div">
                            Size: {item.size}
                        </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                        <Typography variant="subtitle1" component="div">
                            Color:
                        </Typography>
                        <Item style={{ backgroundColor: item.color, border: item.color === 'white' ? 'black solid 1px' : '', margin: '5px' }} variant='contained' size="small"></Item>
                    </Box>
                </Box>
                <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '10px', flexDirection: 'column' }}>
                    <img src={image.image} alt={image.title} style={{ width: '50px', height: '50px' }} />
                    {!inSavedSets && <Button onClick={() => handleItemPicking(item)} style={{ width: '50px' }} variant='contained'>Pick Item</Button>}
                </span>
            </Box>
        </Card>
    )
}
