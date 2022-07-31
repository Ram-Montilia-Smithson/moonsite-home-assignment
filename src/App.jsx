import { RouterConfig } from "navigation/RouterConfig";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <RouterConfig/>  
      </BrowserRouter>
    </div>
  );
}

export default App;
