import React from 'react';

function TableRow(props) {
  const { user, index, type } = props
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

  const classnames = {
    tableRow: index % 2 === 0
      ? 'table__row table__row_type_odd'
      : 'table__row table__row_type_even',
  }

  const renderRow = (rowType) => {
    let row

    switch (rowType) {
      case 'fixed':
        return row =
          <>
            <td>{ index + 1 }</td>
            <td>{ id }</td>
            <td>{ firstName }</td>
            <td>{ lastName }</td>
          </>

      case 'scroll':
        return row =
          <>
            <td>{ email }</td>
            <td className="table__cell_type_phone">{ phone }</td>
            <td>{ gender }</td>
            <td>{ ipAddress }</td>
            <td>{ dollars }</td>
            <td>{ carModel }</td>
            <td>{ carYear }</td>
            <td>{ carVin }</td>
          </>
    }
  }

  return (
    <tr className={ classnames.tableRow }>
      { renderRow(type) }
    </tr>



    // <tr className="table-row" onClick={handleClick}>
    //   <td className={ classnames.index }>{ index + 1 }</td>
    //   <td className={ classnames.id } >{ id }</td>
    //   <td>{ firstName }</td>
    //   <td>{ lastName }</td>
    //   <td>{ email }</td>
    //   <td className="table__cell_type_phone">{ phone }</td>
    //   <td>{ gender }</td>
    //   <td>{ ipAddress }</td>
    //   <td>{ dollars }</td>
    //   <td>{ carModel }</td>
    //   <td>{ carYear }</td>
    //   <td>{ carVin }</td>
    //
    //   <td>{ firstName }</td>
    //   <td>{ lastName }</td>
    //   <td>{ email }</td>
    //   <td>{ phone }</td>
    //   <td>{ gender }</td>
    //   <td>{ ipAddress }</td>
    //   <td>{ dollars }</td>
    //   <td>{ carModel }</td>
    //   <td>{ carYear }</td>
    //   <td>{ carVin }</td>
    // </tr>
  );
}

export default TableRow;