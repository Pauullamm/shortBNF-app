import Dropdown from "./Dropdown"

export default function DDhandler(props) {
    //receives array with dictionaries
    const obj = props.info

    return (
        <div>
            {obj.map((item, index) => (
                <Dropdown key={index} data={item}/>
            ))}
        </div>
    )
}