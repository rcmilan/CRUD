import React from "react";
import { useForm } from "react-hook-form";
import { usePersonStore } from "../../store/person";

const FormComponent = () => {
  const addPerson = usePersonStore((state) => state.addPerson);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    addPerson(data);
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div>
        Nome
        <input {...register("firstName", { required: true, minLength: 2 })} />
        <p>
          {errors.firstName?.type === "required" && "Nome é obrigatório"}
          {errors.firstName?.type === "minLength" && "Minimo: 2 caracteres"}
        </p>
      </div>
      <div>
        Cidade
        <input {...register("cityName", { maxLength: 100 })} />
        <p>
          {errors.cityName?.type === "maxLength" &&
            "Nome da cidade deve ter menos de 100 caracteres"}
        </p>
      </div>
      <div>
        Idade
        <input {...register("age", { required: true, min: 1, max: 100 })} />
        <p>
          {errors.age?.type === "required" && "Idade é obrigatório"}
          {errors.age?.type === "min" && "Minimo: 1"}
          {errors.age?.type === "max" && "Maximo: 100"}
        </p>
      </div>
      <input type="submit" value="enviar" />
    </form>
  );
};

export default FormComponent;
