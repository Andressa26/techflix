import React, {useState} from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/Carousel/components/FormFielde';

function CadastroCategoria(){
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '#000555',
    }
    const [categorias, setCategorias] = useState([]);
    const [valores, setValores] = useState(valoresIniciais);

    function setValor(chave, valor) {
        // chave: nome, descricao, bla
        setValores({
          ...valores,
          [chave]: valor, // nome: 'valor'
        })
        
    }
    function handleChange(infosDoEvento) {
        setValor(
            infosDoEvento.target.getAttribute('name'),
            infosDoEvento.target.value       
        );
      }
    return(      
        <PageDefault>
            <h1>Cadastro de Categoria: {valores.nome}</h1>
    
            <form onSubmit={function handleSubmit(infosDoEvento) {
                infosDoEvento.preventDefault();
                setCategorias([
                    ...categorias,
                    valores
                ]);
                setValores(valoresIniciais);
            }}>
            <FormField
                label = "Nome da Categoria"
                type = "text"
                name = "nome"
                value = {valores.nome}
                onChange ={handleChange}
            />
            <FormField
                label = "Descrição"
                type = "textarea"
                name = "descricao"
                value = {valores.descricao}
                onChange ={handleChange}
            />
            <FormField
                label = "Cor"
                type = "color"
                name = "cor"
                value = {valores.cor}
                onChange ={handleChange}
            />
           
             {/*<div>
                <label>
                    Descrição:
                    <textarea
                    type="text"
                    name="descricao"
                    value={valores.descricao}
                    onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Cor:
                    <input
                    type="color"
                    name="cor"
                    value={valores.cor}
                    onChange={handleChange}
                    />
                </label>
            </div>
            */}
            <button>
                Cadastrar
            </button>
            </form>
            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria}${indice}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>
    
            <Link to="/">
            Ir para home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;