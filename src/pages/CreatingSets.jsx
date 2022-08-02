import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import { ClothingItem, Filter } from 'components';
import { selectPants, selectShirts, selectShoes, selectCurrentClothingType, selectCurrentSet, addNewSet } from 'redux/clothingReducer';
import { Box, Modal, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ROOT } from 'navigation/Constants';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 250,
  backgroundColor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function CreatingSets() {

  const [filteredClothes, setFilteredClothes] = useState([])
  const [isSetFull, setIsSetFull] = useState(false)
  const [brand, setBrand] = useState('')
  const [color, setColor] = useState('')
  const [size, setSize] = useState('')
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);


  const clothingType = useSelector(selectCurrentClothingType);
  const shirts = useSelector(selectShirts);
  const pants = useSelector(selectPants);
  const shoes = useSelector(selectShoes);
  const currentSet = useSelector(selectCurrentSet);
  const dispatch = useDispatch();

  useEffect(() => {
    getClothesByType()
  }, [color, size, brand, clothingType])

  useEffect(() => {
    setSize('') // resetting size due to the fact that the sizes are different for each type of clothing
  }, [clothingType])

  const getClothesByType = () => {
    if (clothingType === 'shoes') {
      filter(shoes)
    }
    if (clothingType === 'shirt') {
      filter(shirts)
    }
    if (clothingType === 'pants') {
      filter(pants)
    }
  }

  const filter = (clothesFilteredByType) => {
    let newClothes = [...clothesFilteredByType]
    if (brand) newClothes = newClothes.filter(element => element.brand === brand)
    if (color) newClothes = newClothes.filter(element => element.color === color)
    if (size) newClothes = newClothes.filter(element => element.size === size)
    setFilteredClothes(newClothes)
  }

  useEffect(() => {
    if (currentSet.shirt && currentSet.shoes && currentSet.pants) setIsSetFull(true)
    else setIsSetFull(false)
  }, [currentSet])

  const openModal = () => {
    setOpen(true)
  }
  
  const handleNewSet = () => {
    dispatch(addNewSet())
    setOpen(false)
    navigate(ROOT, { replace: true })
  }

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Filter
          brand={brand} color={color} size={size}
          filterColor={(color) => setColor(color)}
          filterSize={(size) => setSize(size)}
          filterBrand={(brand) => setBrand(brand)}
        />
        <Button disabled={!isSetFull} onClick={() => openModal()} variant='contained'>
          Pick The Set
        </Button>
      </div>
      <Typography component="div" variant="h3">Current Set</Typography>
      {currentSet.shirt && <ClothingItem item={currentSet.shirt} key={currentSet.shirt.id} />}
      {currentSet.pants && <ClothingItem item={currentSet.pants} key={currentSet.pants.id} />}
      {currentSet.shoes && <ClothingItem item={currentSet.shoes} key={currentSet.shoes.id} />}
      <hr />
      {filteredClothes.map(item => <ClothingItem item={item} key={item.id} />)}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="are-you-sure"
        aria-describedby="making sure you really want to delete the set"
      >
        <Box sx={style}>
          <Typography variant="h6" component="h2">Congrats on your new set!</Typography>
          <Typography id="are-you-sure" variant="h6" component="h2">Are You Sure?</Typography>
          <Button onClick={() => handleNewSet()} variant='contained' color='success'>Yes</Button>
        </Box>
      </Modal>
    </div>
  )
}
