import React from 'react';

function TableRow(props) {
  const { user, index } = props
  const {
    id,
    firstName,
    lastName,
    email,
    phone,
    gender,
    ipAddress,
    dollars,
    carModel,
    carYear,
    carVin,
    // img
  } = user;

  const handleClick = () => {
    props.handleRowClick(user)
  }

  return (
    <tr className="table-row" onClick={handleClick}>
      <td>{ index + 1 }</td>
      <td className="center-align" >{ id }</td>
      <td>{ firstName }</td>
      <td>{ lastName }</td>
      <td>{ email }</td>
      <td className="table__cell_type_phone">{ phone }</td>
      <td>{ gender }</td>
      <td>{ ipAddress }</td>
      <td>{ dollars }</td>
      <td>{ carModel }</td>
      <td>{ carYear }</td>
      <td>{ carVin }</td>

      <td>{ firstName }</td>
      <td>{ lastName }</td>
      <td>{ email }</td>
      <td>{ phone }</td>
      <td>{ gender }</td>
      <td>{ ipAddress }</td>
      <td>{ dollars }</td>
      <td>{ carModel }</td>
      <td>{ carYear }</td>
      <td>{ carVin }</td>
    </tr>
  );
}

export default TableRow;