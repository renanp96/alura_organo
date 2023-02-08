import Button from '../Button';
import DropBox from '../DropBox';
import InputText from '../InputText';
import './Form.css';

export const Form = ()=> {

    const classes = ['Archer', 'Assassin', 'Avenger', 'Berserker', 'Caster', 'Lancer', 'Rider', 'Ruler', 'Saber']

    const onSave = (event) => {
        event.preventDefault();
        console.log("Form submetido");
    }

    return(
        <section className="form">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card dos servos</h2>
                <InputText required={true} label="Nome" placeholder="Digite o nome..." />
                <InputText required={true} label="Titulo" placeholder="Digite o titulo..." />
                <InputText label="Imagem" placeholder="Digite o endereço da imagem..." />
                <DropBox required={true} label="Classe" itens={classes}/>
                <Button>Criar Card</Button>
            </form>
        </section>
    );
}