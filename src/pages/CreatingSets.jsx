import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import { ClothingItem, Filter } from 'components';
import { selectPants, selectShirts, selectShoes, selectCurrentClothingType, selectCurrentSet, addNewSet } from 'redux/clothingReducer';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ROOT } from 'navigation/Constants';

export default function CreatingSets() {

  const [filteredClothes, setFilteredClothes] = useState([])
  const [isSetFull, setIsSetFull] = useState(false)
  const [brand, setBrand] = useState('')
  const [color, setColor] = useState('')
  const [size, setSize] = useState('')
  const navigate = useNavigate();

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

  const handleNewSet = () => {
    dispatch(addNewSet())
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
        <Button disabled={!isSetFull} onClick={() => handleNewSet()} variant='contained'>
          Pick The Set
        </Button>
      </div>
      <Typography component="div" variant="h3">Current Set</Typography>
      {currentSet.shirt && <ClothingItem item={currentSet.shirt} key={currentSet.shirt.id} />}
      {currentSet.pants && <ClothingItem item={currentSet.pants} key={currentSet.pants.id} />}
      {currentSet.shoes && <ClothingItem item={currentSet.shoes} key={currentSet.shoes.id} />}
      <hr />
      {filteredClothes.map(item => <ClothingItem item={item} key={item.id} />)}
    </div>
  )
}
