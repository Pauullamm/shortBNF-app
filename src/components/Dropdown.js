import {useState} from 'react'
import "../App.css"

export default function Dropdown(props) {
    const [isOpen, setIsOpen] = useState(false);
    const title = Object.keys(props.data);
    const content = Object.values(props.data)
    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className='dropdown-container'>
            <button onClick={toggleDropdown} className='inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'>
                {title}
                <svg 
                    className="-mr-1 h-5 w-5 text-gray-400" 
                    viewBox="0 0 20 20" 
                    fill="currentColor" 
                    aria-hidden="true">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
            </button>
            
            <ul className={`dropdown-content ${isOpen ? 'open' : ''}`}>
                <li className='text-gray-700 block px-4 py-2 text-sm'>{content}</li>
            </ul>
        </div>
        

    )
}