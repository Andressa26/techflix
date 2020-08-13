import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/Carousel/components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import categoriasRepository from '../../../repositories/categorias';

function CadastroCategoria() {
  const history = useHistory();
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#ffffff',
  };
  const { handleChange, valores, limpaValores } = useForm(valoresIniciais);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL_TOP = window.location.href.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://ttechflix.herokuapp.com/categorias';
    fetch(URL_TOP)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {valores.nome}
      </h1>

      {/*
      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          valores,
        ]);
        limpaValores(valoresIniciais);
      }}
      >
    */}
      <form onSubmit={(event) => {
        event.preventDefault();
        alert('Categoria cadastrada!');
        categoriasRepository.create({
          titulo: valores.nome,
          cor: valores.cor,
          link_extra: {
            text: valores.descricao,
            url: valores.url,
          },
        })
          .then(() => {
            history.push('/');
          });
      }}
      >
        <FormField
          label="Título da Categoria"
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
          label="URL Descrição da Categoria"
          tag="input"
          type="text"
          name="url"
          value={valores.url}
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
        <Button type="submit">
          Cadastrar
        </Button>
      </form>
      {categorias.length === 0 && (
        <div>
          Carregando...
        </div>
      )}
      <ul>
        {categorias.map((categoria, indice) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={`${categoria}${indice}`}>
            {categoria.titulo}
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
