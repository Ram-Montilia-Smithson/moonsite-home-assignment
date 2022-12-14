import { Navbar } from "components";
import { RouterConfig } from "navigation";
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { initializingClothes, setState } from "redux/clothingReducer";
import { fetchClothes } from "utils/APIUtils";

function App() {

  const dispatch = useDispatch();
  
  useEffect(() => {
    initializeState()
  }, [])

  const initializeState = () => {
    const formerState = window.localStorage.getItem("state");
    if (formerState) {
      dispatch(setState(JSON.parse(formerState)))
    }
    else getClothes()
  }

  const getClothes = async () => {
    dispatch(initializingClothes(await fetchClothes()))
  }
  
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <RouterConfig/>  
      </BrowserRouter>
    </div>
  );
}

export default App;
