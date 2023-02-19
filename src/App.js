import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import {userInputs, productInputs} from "./formSource"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="users" >
          <Route index element={<List />} />
          <Route path="single" element={<Single />} />
          <Route path="new" element={<New inputs={userInputs} title="Add New User"/>} />
        </Route>
        <Route path="products" >
          <Route index element={<List />} />
          <Route path=":productId" element={<Single />} />
          <Route path="new" element={<New inputs ={productInputs} title="Add New Product"/>} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
