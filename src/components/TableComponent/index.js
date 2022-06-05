import React from "react";
import { usePersonStore } from "../../store/person";

const TableComponent = () => {
  const persons = usePersonStore((state) => state.persons);
  const buildTable = () => {
    return persons.map((p, i) => (
      <tr key={i}>
        <td>{p.firstName}</td>
        <td>{p.cityName}</td>
        <td>{p.age}</td>
      </tr>
    ));
  };

  return <table>
    <tbody>{buildTable()}</tbody>
  </table>;
};

export default TableComponent;
