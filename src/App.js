import React from 'react';
import NavBar from './NavBar';
import Header from './Header';
import CompanyDetails from './CompanyDetails';
import LatestArticles from './LatestArticles';
import FooterBar from './FooterBar';
import './styles.css';

function App() {
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