import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectPants, selectShirts, selectShoes } from 'redux/clothingReducer';
import { selectCurrentClothingType } from 'redux/currentSetReducer';

export default function CreatingSets() {

  const [clothes, setClothes] = useState([])

  useEffect(() => {
    if (clothingType === 'shirt') {
      setClothes(shirts)
    }
    if (clothingType === 'pants') {
      setClothes(pants)
    }
    if (clothingType === 'shoes') {
      setClothes(shoes)
    }
  
  }, [])
  

  const clothingType = useSelector(selectCurrentClothingType);
  const shirts = useSelector(selectShirts);
  const pants = useSelector(selectPants);
  const shoes = useSelector(selectShoes);
  const dispatch = useDispatch();


  return (
    <div>
      <div>
        {clothingType}
      </div>
      <div>
        {clothes.map((item) => {
          return (
            <div>{JSON.stringify(item)}</div>
          )
        })}
      </div>
    </div>
  )
}
