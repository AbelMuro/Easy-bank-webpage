import React from 'react';
import NavBar from './NavBar';
import Header from './Header';
import CompanyDetails from './CompanyDetails';
import LatestArticles from './LatestArticles';
import './styles.css';

function App() {
    return (
      <>
        <NavBar/>
        <Header/>
        <CompanyDetails/>
        <LatestArticles/>
      </>
        
    )
}
    

export default App;