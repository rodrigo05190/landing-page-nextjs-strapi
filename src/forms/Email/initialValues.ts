export type TypesInitalProps =
  | 'Nome'
  | 'Email'
  | 'Telefone'
  | 'Mensagem';

const initialValues = {
  Nome: '',
  Email: '',
  Telefone: '',
  Mensagem:
    'Olá, gostaria de receber mais informações sobre os empreendimentos Trisul Investimentos.',
  tipo_contato: 'Email',
};

export default initialValues;
