// import { useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Functions from './components/Functions'
import { MenuProvider } from './hooks/MenuContext';


function App() {

  return (
    
    <div>
    <MenuProvider>
      <Header />
      <Home />
      <Functions />
    </MenuProvider>
    </div>
    
  );
}

export default App
