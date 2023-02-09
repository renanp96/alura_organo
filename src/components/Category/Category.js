import { Card } from '../Card/Card';
import './Category.css';

export const Category = (props) => {
    const secondaryColor = { backgroundColor: props.secondaryColor };
    const primaryColor = { borderColor: props.primaryColor };

    return (
        <section className="category" style={secondaryColor}>
            <h3 style={primaryColor}>{props.name}</h3>
            <Card />
            <Card />
        </section>
    );
}