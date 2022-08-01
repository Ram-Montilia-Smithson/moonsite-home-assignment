import React, { useState } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { changeCurrentClothingType, selectCurrentClothingType } from 'redux/clothingReducer';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@mui/material';

export default function Filter({ filterColor, filterSize, filterBrand, size, brand, color }) {

  const clothingType = useSelector(selectCurrentClothingType);
  const dispatch = useDispatch();
  
  const handleTypeChange = (event) => {
    dispatch(changeCurrentClothingType(event.target.value))
  };
  
  const handleColorChange = (event) => {
    filterColor(event.target.value);
  };
  
  const handleBrandChange = (event) => {
    filterBrand(event.target.value);
  };
  
  const handleSizeChange = (event) => {
    filterSize(event.target.value);
  };
  
  return (
    <Box sx={{ border: '1px solid black', borderRadius: '5px', padding: '10px', width: '350px', margin: '10px' }}>
      <Typography component="div" variant="h5">Filter</Typography>
      <FormControl style={{width: '150px', margin: '5px'}}>
        <InputLabel id="type">Type</InputLabel>
        <Select
          labelId="type"
          value={clothingType}
          label="Type"
          onChange={handleTypeChange}
        >
          <MenuItem value={'shirt'}>Shirt</MenuItem>
          <MenuItem value={'pants'}>Pants</MenuItem>
          <MenuItem value={'shoes'}>Shoes</MenuItem>
        </Select>
      </FormControl>
      <FormControl style={{ width: '150px', margin: '5px' }}>
        <InputLabel id="color">Color</InputLabel>
        <Select
          labelId="color"
          value={color}
          label="Color"
          onChange={handleColorChange}
        >
          <MenuItem value={'black'}>Black</MenuItem>
          <MenuItem value={'white'}>White</MenuItem>
          <MenuItem value={'green'}>Green</MenuItem>
          <MenuItem value={'pink'}>Pink</MenuItem>
          <MenuItem value={'red'}>Red</MenuItem>
        </Select>
      </FormControl>
      <FormControl style={{ width: '150px', margin: '5px' }}>
        <InputLabel id="brand">Brand</InputLabel>
        <Select
          labelId="brand"
          value={brand}
          label="Brand"
          onChange={handleBrandChange}
        >
          <MenuItem value={'Lacoste'}>Lacoste</MenuItem>
          <MenuItem value={'Lee Cooper'}>Lee Cooper</MenuItem>
          <MenuItem value={'Tommy Hilfiger'}>Tommy Hilfiger</MenuItem>
          <MenuItem value={'Calvin Klein'}>Calvin Klein</MenuItem>
          <MenuItem value={'GAP'}>GAP</MenuItem>
        </Select>
      </FormControl>
      {clothingType === 'shirt' ?
        <FormControl style={{ width: '150px', margin: '5px' }}>
          <InputLabel id="size">Size</InputLabel>
              <Select
                labelId="size"
                value={size}
                label="Size"
                onChange={handleSizeChange}
              >
              <MenuItem value={'S'}>S</MenuItem>
              <MenuItem value={'L'}>L</MenuItem>
              <MenuItem value={'XL'}>XL</MenuItem>
            <MenuItem value={'XXL'}>XXL</MenuItem>
            </Select>
        </FormControl>
        : clothingType === 'shoes' ?
          <FormControl style={{ width: '150px', margin: '5px' }}>
            <InputLabel id="size">Size</InputLabel>
              <Select
                labelId="size"
                value={size}
                label="Size"
                onChange={handleSizeChange}
              >
              <MenuItem value={'37'}>37</MenuItem>
              <MenuItem value={'39'}>39</MenuItem>
              <MenuItem value={'43'}>43</MenuItem>
              <MenuItem value={'45'}>45</MenuItem>
              <MenuItem value={'46'}>46</MenuItem>
            </Select>
          </FormControl>
        :
          <FormControl style={{ width: '150px', margin: '5px' }}>
            <InputLabel id="size">Size</InputLabel>
                <Select
                  labelId="size"
                  value={size}
                  label="Size"
                  onChange={handleSizeChange}
                >
              <MenuItem value={'30'}>30</MenuItem>
              <MenuItem value={'31'}>31</MenuItem>
              <MenuItem value={'32'}>32</MenuItem>
              <MenuItem value={'34'}>34</MenuItem>
              <MenuItem value={'35'}>35</MenuItem>
              <MenuItem value={'36'}>36</MenuItem>
              <MenuItem value={'39'}>39</MenuItem>
              <MenuItem value={'42'}>42</MenuItem>
              <MenuItem value={'43'}>43</MenuItem>
              <MenuItem value={'48'}>48</MenuItem>
            </Select>
          </FormControl>
      }
    </Box>
  )
}
