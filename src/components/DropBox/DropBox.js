import './DropBox.css'

export const DropBox = (props) => {
    //props.itens
    return(
        <div className="dropbox">
            <label>{props.label}</label>
            <select>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    );
}