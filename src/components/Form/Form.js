import Button from '../Button';
import DropBox from '../DropBox';
import InputText from '../InputText';
import './Form.css';

export const Form = ()=> {

    const classes = ['Archer', 'Assassin', 'Avenger', 'Berserker', 'Caster', 'Lancer', 'Rider', 'Ruler', 'Saber']

    return(
        <section className="form">
            <form>
                <h2>Preencha os dados para criar o card dos servos</h2>
                <InputText label="Nome" placeholder="Digite o nome..." />
                <InputText label="Titulo" placeholder="Digite o titulo..." />
                <InputText label="Imagem" placeholder="Digite o endereço da imagem..." />
                <DropBox label="Classe" itens={classes}/>
                <Button>Criar Card</Button>
            </form>
        </section>
    );
}