import { useEffect, useState } from 'react';
import './App.css';
import Searchbar from './components/Searchbar';

const apiURL = process.env.REACT_APP_API_URL
/**
 * @description Initializes state and fetches data from an API, displaying a header
 * and a searchbar component with the retrieved data. It catches any errors during
 * the data fetching process and logs them to the console. The searchbar is populated
 * using the fetched data.
 *
 * @returns {JSX.Element} A virtual representation of the UI components that will be
 * rendered on the screen. It defines the structure and layout of a web page with
 * several elements including headings, divs, and a searchbar component.
 */
function App() {

  const [objData, setObjData] = useState([])
  
  /**
   * @description Fetches drug information from an API, checks for HTTP errors, and
   * updates local state with the received JSON data if successful, logging any encountered
   * errors to the console instead.
   */
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
    // Executes once on component mount.
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
