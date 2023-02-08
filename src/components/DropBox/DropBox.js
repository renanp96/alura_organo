import './DropBox.css'

export const DropBox = (props) => {
    const onType = (event) => {
        props.onChange(event.target.value);
    }

    return(
        <div className="dropbox">
            <label>{props.label}</label>
            <select required={props.required} value={props.value} onChange={onType}>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    );
}