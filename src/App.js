import { useEffect, useState } from 'react';
import './App.css';
import Searchbar from './components/Searchbar';
// const object1 = [{
//   TIOTROPIUM: 'MHRA/CHM advice: BraltusÂ® (tiotropium): risk of inhalation of capsule if placed in the mouthpiece of the inhaler (May 2018)In adults: The MHRA have received reports of patients who have inhaled a BraltusÂ® capsule from the mouthpiece into the back of the throat, resulting in coughing and risking aspiration or airway obstruction. Patients should be trained in the correct use of their inhaler and told to store capsules in the screw-top bottle provided (never in the inhaler) and to always check the mouthpiece is clear before inhaling. Pharmacists dispensing BraltusÂ® capsules should remind patients always to read the instructions for use in the package leaflet and that they must never place a capsule directly into the mouthpiece. MHRA/CHM advice: Pressurised metered dose inhalers (pMDI): risk of airway obstruction from aspiration of loose objects (July 2018) See Respiratory system, inhaled drug delivery.',
// },
// {
//   DEXAMETHASONE: 'MHRA/CHM advice: Corticosteroids: rare risk of central serous chorioretinopathy with local as well as systemic administration (August 2017) See Corticosteroids, general use. NHS Improvement Patient Safety Alert: Steroid Emergency Card to support early recognition and treatment of adrenal crisis in adults (August 2020)In adults: See Adrenal insufficiency. Adrenal Insufficiency Card (April 2023)In children: The British Society for Paediatric Endocrinology and Diabetes (BSPED) has developed an Adrenal Insufficiency Card which should be issued to children with adrenal insufficiency and steroid dependence. The card includes a management summary for the emergency treatment of adrenal crisis and sick day dosing, and can be issued by any healthcare professional managing such patients. The BSPED Adrenal Insufficiency Card is available at: https://www.bsped.org.uk/adrenal-insufficiency.'
// }]

const apiURL = process.env.REACT_APP_API_URL
console.log(apiURL)
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
      console.log(response)
  
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`)
      }
      const data = await response.json()
      console.log(data)
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
      <div className='my-6 flex justify-center'>
        <h1 className='text-lg font-bold'>BNF...but just the important safety information</h1>
      </div>
      
      <div className='info-handler'>
        <div className='w-1/2'>
          {/* <DDhandler info={objData}/> */}
          <Searchbar components={objData}/>
        </div>
        
      </div>
      
    </div>
  );
}

export default App;
