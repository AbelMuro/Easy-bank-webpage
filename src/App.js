import React,{useEffect} from 'react';
import NavBar from './NavBar';
import Header from './Header';
import CompanyDetails from './CompanyDetails';
import LatestArticles from './LatestArticles';
import FooterBar from './FooterBar';
import './styles.css';

function App() {

    useEffect(() => {
      window.onbeforeunload = () => {
        window.scrollTo(0,0);
      }
    }, [])

    return (
      <>
        <NavBar/>
        <Header/>
        <CompanyDetails/>
        <LatestArticles/>
        <FooterBar/>
      </>
        
    )
}
    

export default App;