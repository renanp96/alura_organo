import { useState } from 'react';
import Button from '../Button';
import DropBox from '../DropBox';
import InputText from '../InputText';
import './Form.css';

export const Form = (props) => {
    const [classe, setClasses] = useState('');
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [img, setImg] = useState('');

    const onSave = (event) => {
        event.preventDefault();
        props.onSubmitServ({ name, title, img, classe });
    }

    return (
        <section className="form">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card dos servos</h2>
                <InputText required={true}
                    label="Nome"
                    placeholder="Digite o nome..."
                    value={name}
                    onChange={value => setName(value)} />
                <InputText required={true}
                    label="Titulo"
                    placeholder="Digite o titulo..."
                    value={title}
                    onChange={value => setTitle(value)} />
                <InputText label="Imagem"
                    placeholder="Digite o endereço da imagem..."
                    value={img}
                    onChange={value => setImg(value)} />
                <DropBox required={true}
                    label="Classe"
                    itens={props.classes}
                    value={classe}
                    onChange={value => setClasses(value)}
                />
                <Button>Criar Card</Button>
            </form>
        </section>
    );
}