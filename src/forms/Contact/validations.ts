import * as yup from 'yup';

const useValidations = () => {
  return yup.object().shape({
    tipo_contato: yup
      .string()
      .required('Preencha este campo'),
    Nome: yup.string().required('Preencha este campo'),
    Email: yup
      .string()
      .email('e-mail inválido')
      .required('Preencha este campo'),
    Telefone: yup
      .string()
      .min(14)
      .test(
        'qtd',
        'Número inválido',
        (val: any) => val?.trim().length >= 14,
      )
      .required('Preencha este campo'),
    Mensagem: yup.string().required('Preencha este campo'),
  });
};

export default useValidations;
