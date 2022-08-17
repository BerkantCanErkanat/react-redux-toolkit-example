import { CartList } from "../cart/CartList";
import { NotFound} from "../common/NotFound";
import { AddNewCategory} from "../common/AddNewCategory";
import { Routes, Route } from "react-router-dom";
import {Dashboard} from './Dashboard';
import {Navi} from '../navi/Navi'
import {Container} from 'reactstrap';
//addNewCategory link ver, history ile submit sonrası kendi ana sayfaya dussun
function App() {
  return (
    <div>
      <Container>
        <Navi />
        <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/cart" element={<CartList />} />
        <Route path="/addNewCategory" element={<AddNewCategory />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Container>
    </div>
  );
}

export default App;
