import Dropdown from "./Dropdown"

export default function DDhandler(props) {
    const obj = props.info

    return (
        <div>
            {obj.map((item, index) => (
                <Dropdown key={index} data={item}/>
            ))}
        </div>
    )
}
