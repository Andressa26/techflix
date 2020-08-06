import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/Carousel/components/FormFielde';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#ffffff',
  };
  const [categorias, setCategorias] = useState([]);
  const [valores, setValores] = useState(valoresIniciais);

  function setValor(chave, valor) {
    // chave: nome, descricao, bla
    setValores({
      ...valores,
      [chave]: valor, // nome: 'valor'
    });
  }
  function handleChange(infosDoEvento) {
    setValor(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }
  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {valores.nome}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          valores,
        ]);
        setValores(valoresIniciais);
      }}
      >
        <FormField
          label="Nome da Categoria"
          tag="input"
          type="text"
          name="nome"
          value={valores.nome}
          onChange={handleChange}
        />
        <FormField
          label="Descrição"
          tag="textarea"
          type="text"
          name="descricao"
          value={valores.descricao}
          onChange={handleChange}
        />
        <FormField
          label="Cor"
          tag="input"
          type="color"
          name="cor"
          value={valores.cor}
          onChange={handleChange}
        />
        <Button>
          Cadastrar
        </Button>
      </form>
      <ul>
        {categorias.map((categoria, indice) => (
          <li key={`${categoria}${indice}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
