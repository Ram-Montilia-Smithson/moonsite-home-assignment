import { Button, Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { ClothingItem } from 'components';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeSet, selectSavedSets } from 'redux/clothingReducer';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 200,
  backgroundColor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function SavedSets() {

  const [open, setOpen] = useState(false);
  const [setToDelete, changeSetToDelete] = useState({});
  const handleClose = () => setOpen(false);
  const savedSets = useSelector(selectSavedSets);
  const dispatch = useDispatch();

  const handleModalOpen = (set) => {
    setOpen(true)
    changeSetToDelete(set)
  }

  const handleDelete = () => {
    dispatch(removeSet(setToDelete))
    changeSetToDelete({})
    handleClose()
  }

  const time = (start, end) => {
    let hours = Math.floor((end - start) / 1000 / 60 / 60)
    let minutes = Math.floor((end - start) / 1000 / 60)
    let seconds = Math.floor((end - start) / 1000)
    if(hours) minutes = minutes - (hours * 60)
    if(minutes) seconds = seconds - (minutes * 60)
    return `hours: ${hours}, minutes: ${minutes}, seconds: ${seconds}`
  }

  return (
    <div>
      {savedSets.length ? savedSets.map(set => {
        return (
          <span key={set.lastTime}>
            <ClothingItem item={set.shirt} key={set.shirt.id} inSavedSets={true}/>
            <ClothingItem item={set.pants} key={set.pants.id} inSavedSets={true} />
            <ClothingItem item={set.shoes} key={set.shoes.id} inSavedSets={true} />
            <span style={{ display: 'inline-flex', width: 150, height: 170, padding: '5px', margin: '5px', flexDirection: 'column' }}>
              <Typography>Time To Pick Set:</Typography>
              <Typography>{time(set.firstTime, set.lastTime)}</Typography>
              <Button onClick={() => handleModalOpen(set)} variant='contained' color='error'>Delete</Button>
            </span>
            <hr />
          </span>
        )
      })
        :
        <Typography id="are-you-sure" variant="h6" component="h2">
          No Sets Picked
        </Typography>
      }
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="are-you-sure"
        aria-describedby="making sure you really want to delete the set"
      >
        <Box sx={style}>
          <Typography id="are-you-sure" variant="h6" component="h2">
            Are You Sure?
          </Typography>
          <Button onClick={() => handleDelete()} variant='contained' color='error'>Yes</Button>
        </Box>
      </Modal>
    </div>
  )
}
