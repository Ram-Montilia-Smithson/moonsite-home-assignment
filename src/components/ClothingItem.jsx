import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Item } from 'components';
import logo from 'static/images/logo.png'

export default function ClothingItem({ item }) {
    return (
        <span style={{ margin: '20px' }}>
            <Card sx={{ display: 'inline-flex', width: 250, margin: '20px' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            {item.brand}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            {item.type}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            Size: {item.size}
                        </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            Color:
                        </Typography>
                        <Item style={{ backgroundColor: item.color, border: item.color === 'white' ? 'black solid 1px' : '', margin: '5px' }} variant='contained' size="small"></Item>
                    </Box>
                    <img src={logo} alt='logo' width={50} height={50} />
                </Box>
            </Card>
        </span>
    )
}
