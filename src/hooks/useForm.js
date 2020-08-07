import { useState } from 'react';

function useForm(valoresIniciais) {
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
  function limpaValores() {
    setValores(valoresIniciais);
  }
  return {
    valores,
    handleChange,
    limpaValores,
  };
}

export default useForm;
