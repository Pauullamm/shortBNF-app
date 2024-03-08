import { useEffect, useState } from "react"
import DDhandler from "./DDhandler";
export default function Searchbar(props) {
    var componentsArray = props.components
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredComponents, setFilteredComponents] = useState(componentsArray);


    useEffect(() => {
        const filtered = componentsArray.filter((component) => {
            const searchTextLower = searchTerm.toLowerCase();
            const componentKey = Object.keys(component)
            const componentNameLower = String(componentKey).toLowerCase();
            return componentNameLower.includes(searchTextLower);
        });
        setFilteredComponents(filtered);
    }, [searchTerm, componentsArray]);

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