import { useState, useEffect, FormEvent, ChangeEvent } from 'react';

type ObjectLiteral = { [key: string]: any };

function useForm<T>(callback: () => void, validate: any): {
  handleChange: (event: ChangeEvent<{
    name: string;
    value: any;
  }>) => void,
  handleSubmit: (event: FormEvent<Element>) => void,
  values: T | ObjectLiteral,
  errors: any
} {

  const [values, setValues] = useState<T | ObjectLiteral>({});
  const [errors, setErrors] = useState<{}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  const handleSubmit = (event: FormEvent) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleChange = (event: ChangeEvent<{ name: string, value: any }>) => {
    event.persist();
    setValues(values => ({ ...(values as object), [event.target.name]: event.target.value }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  }
};

export default useForm;