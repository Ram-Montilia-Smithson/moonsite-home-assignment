import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import { ClothingItem, Filter } from 'components';
import { selectPants, selectShirts, selectShoes, selectCurrentClothingType, selectCurrentSet, addNewSet, changeCurrentClothingType } from 'redux/clothingReducer';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ROOT } from 'navigation/Constants';

export default function CreatingSets() {

  const [clothes, setClothes] = useState([])
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
    if (clothingType === 'shoes') {
      setClothes(shoes)
    }
    if (clothingType === 'shirt') {
      setClothes(shirts)
    }
    if (clothingType === 'pants') {
      setClothes(pants)
    }
  }, [clothingType])

  useEffect(() => {
    if (currentSet.shirt && currentSet.shoes && currentSet.pants) {
      setIsSetFull(true)
    } else {
      setIsSetFull(false) 
    }
  }, [currentSet])

  const filterColor = (color) => {
    setColor(color)
    const newClothes = clothes.filter(element => element.color === color)
    setClothes(newClothes)
  }
  
  const filterSize = (size) => {
    const newClothes = clothes.filter(element => element.size === size)
    setClothes(newClothes)
    setSize(size)
  }
  
  const filterBrand = (brand) => {
    setBrand(brand)
    const newClothes = clothes.filter(element => element.size === brand)
    setClothes(newClothes)
  }
  
  const handleNewSet = () => {
    dispatch(addNewSet())
    navigate(ROOT, { replace: true })
  }

  return (
    <div>
      <div style={{display: 'flex',flexDirection: 'column', alignItems: 'center'}}>
        <div>
          <Filter
            brand={brand} color={color} size={size}
            filterColor={(color) => filterColor(color)}
            filterSize={(size) => filterSize(size)}
            filterBrand={(brand) => filterBrand(brand)}
            />
            {/* {clothingType} */}
        </div>
        <Button
          disabled={!isSetFull}
          onClick={() => handleNewSet()}
          variant='contained'
        >
          Pick The Set
        </Button>
      </div>
      <div>
      <div>
        <Typography component="div" variant="h3">Current Set</Typography>
      </div>
        {/* {JSON.stringify(currentSet)} */}
        {currentSet.shirt && <ClothingItem item={currentSet.shirt} key={currentSet.shirt.id} />}
        {currentSet.pants && <ClothingItem item={currentSet.pants} key={currentSet.pants.id} />}
        {currentSet.shoes && <ClothingItem item={currentSet.shoes} key={currentSet.shoes.id} />}
      </div>
      <hr/>
      <div>
        {clothes.map((item) => {
          return (
            <ClothingItem item={item} key={item.id} />
          )
        })}
      </div>
    </div>
  )
}
