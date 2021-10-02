import React from "react";
import { usePersonStore } from "../../store/person";

const TableComponent = () => {
  const persons = usePersonStore((state) => state.persons);
  const buildTable = () => {
    return persons.map((p) => (
      <tr>
        <td>{p.firstName}</td>
        <td>{p.cityName}</td>
        <td>{p.age}</td>
      </tr>
    ));
  };

  return <table>{buildTable()}</table>;
};

export default TableComponent;
