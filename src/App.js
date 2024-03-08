import { useEffect, useState } from 'react';
import './App.css';
import Searchbar from './components/Searchbar';

const apiURL = process.env.REACT_APP_API_URL
function App() {

  const [objData, setObjData] = useState([])
  
  async function get_drug_info() {
    const get_options = {
      method: "GET",
      headers: {
        accept: 'application/json',
        "Content-Type": "application/json"
      }
    };
    try {
      const response = await fetch(apiURL, get_options);
  
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`)
      }
      const data = await response.json()
      setObjData(data)
        
    }
    catch (error) {
      console.error('Error fetching data', error)
    };
  }

  useEffect(() => {
    get_drug_info()
  }, [])
  return (
    <div className="App">
      <div className='my-6 flex-col justify-center'>
        <h1 className='tracking-tight text-2xl font-medium sm:text-5xl font-serif flex justify-center'>British National Formulary (BNF)</h1>
        <h1 className='font-sans text-xl flex justify-center'>...but it's just the important safety information</h1>
      </div>
      
      <div className='info-handler'>
        <div className='w-3/4 flex justify-center'>
          <Searchbar components={objData}/>
        </div>
        
      </div>
      
    </div>
  );
}

export default App;
