import { BrowserRouter, Route, NavLink, Routes} from 'react-router-dom'

import Home from './page/HOME';
import Product from './page/Product';
import './Style.scss';


function App() {

    return (
        <div>
          <BrowserRouter>
          <header>
            <NavLink to="/">HOME</NavLink>
            <span> | </span>
            <NavLink to="/product">Product</NavLink>
          </header>
          <main>

            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/product" element={<Product/>} />
            </Routes>

          </main>
          <footer></footer>
          </BrowserRouter>
        </div>
      );
}

export default App;
