import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import BlogDetails from './component/Home/BlogDetails';
import AboutAndContact from './component/AboutAndContact/AboutAndContact';
import ToolsList from './component/GardeningInfo/ToolsList';
import ListSF from './component/Essentials/SoilAndFertilizer/ListSF';
import DetailsSL from './component/Essentials/SoilAndFertilizer/DetailsSL';
import Pesticides from './component/Essentials/Pesticides/Pesticides';
import PesticidesDetail from './component/Essentials/Pesticides/PesticidesDetail';
import Login from './component/Account/Login';
import BookList from './component/Resources/RelatedBooks/BookList';
import ListVideo from './component/Resources/EducationalVideos/ListVideo';
import ProductSuggestion from './component/Resources/ProductSuggestions/ProductSuggestion'
import ListSeeds from './component/Essentials/Seeds/ListSeeds';
import SeedDetail from './component/Essentials/Seeds/SeedDetail';
import BackToTopButton from './component/BackToTopButton';
import AvsG from './component/GardeningInfo/AvsG/AvsG';
import AvsG_Detail from './component/GardeningInfo/AvsG/AvsG_Detail';
import ToolsDetail from './component/GardeningInfo/ToolsDetail';
import BorrowBook from './component/Resources/RelatedBooks/BorrowBook';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/Login' index element={<Login/>}/>
        <Route path='/' index element={ <Home/> }/>
        <Route path='/BlogDetails/:id' element={<BlogDetails/>}/>
        <Route path='/AvsG' index element={<AvsG/>}/>
        <Route path='/AvsG_Detail/:id' index element={<AvsG_Detail/>}/>
        <Route path='/SoilAndFertilizers' index element={<ListSF/>}/>
        <Route path='/DetailsSL/:type/:id' element={<DetailsSL/>}/>
        <Route path="/Pesticides" element={<Pesticides />} />
        <Route path="/pesticides/:id" element={<PesticidesDetail />} />
        <Route path='/ListSeeds' index element={<ListSeeds/>}/>
        <Route path='/Seeds/:id' index element={<SeedDetail/>}/>
        <Route path='/AboutAndContact' index element={<AboutAndContact/>}/>
        <Route path='/ToolsList' index element={<ToolsList/>}/>
        <Route path='ToolsDetail/:id' index element={<ToolsDetail/>}/>
        <Route path='/ProductSuggestion' index element={<ProductSuggestion/>}/>
        <Route path='/ListVideo' index element={<ListVideo/>}/>
        <Route path='/BookList' index element={<BookList/>}/>
        <Route path="/Borrow/:bookTitle" element={<BorrowBook />} />
      </Routes>
      <BackToTopButton/>
      <Footer/>
    </div>
  );
}

export default App;
