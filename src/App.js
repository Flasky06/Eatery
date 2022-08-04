import Categories from "./Components/Categories";
import Pages from "./Pages/Pages";

import Search from "./Components/Search";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Cuisine from "./Pages/Cuisine";
import Searched from "./Pages/Searched";
import Recipe from "./Pages/Recipe";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Pages /> */}
        {/* <Search /> */}
        <Categories />
        <Routes>
          <Route
            children={({ location }) => {
              return !["/recipe"].includes(location.pathname) ? (
                <>
                  <Search />
                </>
              ) : (
                <Search />
              );
            }}
          ></Route>
          <Route path="/recipe/:name" element={<Recipe />} />
          <Route path="/" element={<Home />} />
          <Route path="/cuisine/:type" element={<Cuisine />} />
          <Route path="/searched/:search" element={<Searched />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
