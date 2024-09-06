import { useEffect, useState } from "react"
import DDhandler from "./DDhandler";
/**
 * @description Initializes a search interface with an input field, filtering components
 * based on user input and displaying results in a dropdown list via the `DDhandler`
 * component. It updates filtered results dynamically as the user types into the
 * search field.
 *
 * @param {object} props - Intended to pass custom properties to the component.
 *
 * @returns {JSX.Element} A React element that represents an HTML structure to be
 * rendered on the DOM.
 */
export default function Searchbar(props) {
    var componentsArray = props.components
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredComponents, setFilteredComponents] = useState(componentsArray);


    useEffect(() => {
        // Filters search results.
        const filtered = componentsArray.filter((component) => {
            // Filters components based on search term.
            const searchTextLower = searchTerm.toLowerCase();
            const componentKey = Object.keys(component)
            const componentNameLower = String(componentKey).toLowerCase();
            return componentNameLower.includes(searchTextLower);
        });
        setFilteredComponents(filtered);
    }, [searchTerm, componentsArray]);

    /**
     * @description Updates the application's state by setting a new value for `searchTerm`
     * whenever an input event occurs on the search field, allowing real-time filtering
     * or searching based on user input.
     *
     * @param {Event} event - Triggered by user input.
     */
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    }
    return (
        <div className="search-bar ">
            <div className="flex justify-center">
            <input
                type="text"
                placeholder="Search Drug..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="search-input my-5 rounded-md py-1 pl-1 border-2 border-gray-300 " 
                />
            </div>
            
            <DDhandler info={filteredComponents}/>
        </div>
    )
}