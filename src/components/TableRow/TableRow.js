import React from 'react';

function TableRow(props) {
  const { user, index, type, columnsRender } = props
  const {
    id,
    firstName,
    lastName,
    email,
    phone,
    gender,
    ipAddress,
    dollars,
    euro,
    jpy,
    carModel,
    carYear,
    carVin,
  } = user;

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
            { columnsRender.email.visible && <td className="table__cell_type_email">{email}</td> }
            { columnsRender.phone.visible && <td className="table__cell_type_phone">{ phone }</td> }
            { columnsRender.gender.visible && <td className="table__cell_type_gender">{ gender }</td> }
            { columnsRender.ipAddress.visible && <td className="table__cell_type_ip">{ ipAddress }</td> }
            { columnsRender.dollars.visible && <td className="table__cell_type_price">{ dollars }</td> }
            { columnsRender.euro.visible && <td className="table__cell_type_price">{ euro }</td> }
            { columnsRender.jpy.visible && <td className="table__cell_type_price">{ jpy }</td> }
            {
              columnsRender.carImage.visible &&
              <td className="table__cell_type_img">
                <img
                  className="table__img"
                  src={columnsRender.carImage.src[Math.floor(Math.random() * 5)]} alt="Car"
                />
              </td>
            }
            { columnsRender.carModel.visible && <td>{ carModel }</td> }
            { columnsRender.carYear.visible && <td>{ carYear }</td> }
            { columnsRender.carVin.visible && <td>{ carVin }</td> }
          </>
    }
  }

  return (
    <tr className={ classnames.tableRow }>
      { renderRow(type) }
    </tr>
  );
}

export default TableRow;
