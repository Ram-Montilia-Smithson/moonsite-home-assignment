import { Navbar } from "components";
import { RouterConfig } from "navigation";
import { BrowserRouter } from "react-router-dom";

function App() {
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
