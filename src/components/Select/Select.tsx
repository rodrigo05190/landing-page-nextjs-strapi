import { ErrorMessage } from 'formik';
import React from 'react';
import {
  BoxInput,
  CustomStylesProps,
  Error,
  Input,
  Label,
} from './styles';

interface OptionProps {
  label: string;
  value: string | number;
}

interface SelectProps {
  label: string;
  name: string;
  options: OptionProps[];
  custom?: CustomStylesProps;
  mb?: number;
  mt?: number;
}

const Select: React.FC<SelectProps> = ({
  label,
  name,
  options,
  custom,
  mb,
  mt,
}) => {
  return (
    <BoxInput mb={mb} mt={mt}>
      <Label htmlFor={name} label={custom?.label}>
        {label}
      </Label>

      <Input name={name} id={name} component="select">
        <option value="" disabled selected>
          Selecione uma opção de contato
        </option>

        {options.map(opt => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </Input>

      <Error>
        <ErrorMessage name={name} />
      </Error>
    </BoxInput>
  );
};

export default Select;
