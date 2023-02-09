import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import { Category } from "./components/Category/Category";

function App() {
    const classes = [
        {
            name: 'Archer',
            primaryColor: '#57C278',
            secondaryColor: '#D9F7E9'
        },
        {
            name: 'Assassin',
            primaryColor: '#82CFFA',
            secondaryColor: '#E8F8FF'
        },
        {
            name: 'Avenger',
            primaryColor: '#A6D157',
            secondaryColor: '#F0F8E2'
        },
        {
            name: 'Berserker',
            primaryColor: '#E06B69',
            secondaryColor: '#FDE7E8'
        },
        {
            name: 'Caster',
            primaryColor: '#DB6EBF',
            secondaryColor: '#FAE9F5'
        },
        {
            name: 'Lancer',
            primaryColor: '#FFBA05',
            secondaryColor: '#FFF5D9'
        },
        {
            name: 'Rider',
            primaryColor: '#FF8A29',
            secondaryColor: '#FFEEDF'
        },
        {
            name: 'Ruler',
            primaryColor: '#DB6EBF',
            secondaryColor: '#FAE9F5'
        },
        {
            name: 'Saber',
            primaryColor: '#82CFFA',
            secondaryColor: '#E8F8FF'
        }
    ];

    const [servants, setServants] = useState([]);

    const onAddServ = (servant) => {
        console.log(servant);
        setServants([...servants, servant]);
    }

    return (
        <div className="App">
            <Banner/>
            <Form onSubmitServ={servant => onAddServ(servant)} />
            {classes.map(classe => <Category key={classe.name} name={classe.name} primaryColor={classe.primaryColor} secondaryColor={classe.secondaryColor}/>)}
        </div>
    );
}

export default App;