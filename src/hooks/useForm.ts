import { useEffect, useMemo, useState } from 'react';

type ValidationFunction = (value: any) => boolean;
type FormValidations = Record<string, [ValidationFunction, string]>;

export const useForm = <T extends Record<string, any>>(initialForm: T, formValidations: FormValidations = {}) => {
  
  const [ formState, setFormState ] = useState<T>(initialForm);
  const [ formValidation, setFormValidation ] = useState<Record<string, string | null>>({});

  useEffect(() => {
      createValidators();
  }, [ formState ])

  useEffect(() => {
      setFormState( initialForm );
  }, [ initialForm ])
  
  
  const isFormValid = useMemo( () => {

    for (const formValue of Object.keys( formValidation )) {
        if ( formValidation[formValue] !== null ) return false;
    }

    return true;
  }, [ formValidation ])


  const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setFormState({
        ...formState,
        [ name ]: value
    });
  }

  const onResetForm = () => {
    setFormState( initialForm );
  }

  const createValidators = () => {
      
    const formCheckedValues: Record<string, string | null> = {};
    
    for (const formField of Object.keys( formValidations )) {
        const [ fn, errorMessage ] = formValidations[formField];

        formCheckedValues[`${ formField }Valid`] = fn( formState[formField as keyof T] ) ? null : errorMessage;
    }

    setFormValidation( formCheckedValues );
  }



  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,

    ...formValidation,
    isFormValid
  }
}