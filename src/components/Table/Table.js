import React, { useState } from 'react';
import './Table.css'
import TableRow from "../TableRow/TableRow";
import SelectColumnForm from "../SelectColumnForm/SelectColumnForm";
import Preloader from "../Preloader/Preloader";
import M from 'materialize-css'

function Table(props) {
  const {
    data, usersToRender, setUsersToRender, handleRowClick, columnsRender,
    setColumnsRender, isTableLoading, setIsTableLoading
  } = props

  const [isIncrease, setIsIncrease] = useState(false);
  const [values, setValues] = useState({});

  const tableHeaders = Object.keys(columnsRender)

  const handleMoveRight = (evt) => {
    // let tabHed = Array.from(document.querySelectorAll('.table_type_scroll th'))
  }

  const handleScroll = (evt) => {
    const tableContainer = evt.target
    const table = evt.target.querySelector('table')

    console.log(data.length)

    if(data.length <= usersToRender.length) {
      return
    }

     if(!isTableLoading && tableContainer.scrollTop + tableContainer.offsetHeight >= table.offsetHeight) {
       const dataSlice = data.slice(usersToRender.length, usersToRender.length + 50)
       const dataToRender = usersToRender.concat(dataSlice)

       setIsTableLoading(true)

       // setTimout имитирует подгрузку с сервера
       setTimeout(() => {
         setUsersToRender(dataToRender)
         setIsTableLoading(false)
       }, 1500)

       return
     }
  }

  const handleSortId = () => {
    let dataSort

    if (isIncrease) {
      dataSort = usersToRender.map(item => { return item }).reverse()
      setUsersToRender(dataSort)
      setIsIncrease(false)
      return;
    }

    dataSort =
      usersToRender.sort((a, b) => {
        if (a.id > b.id) { return 1 }
        if (a.id < b.id) { return -1 }
        return 0
      }).map(item => { return item })

    setUsersToRender(dataSort)

    setIsIncrease(true)
  }

  return (
    <>
      <SelectColumnForm
        setValues={setValues}
        columnsRender={columnsRender}
        setColumnsRender={setColumnsRender}
        tableHeaders={tableHeaders}
        values={values}
      />
      <div onScroll={handleScroll} className="row table-container">
        <table className="striped table_type_fixed">
          <thead className="table__header">
          <tr>
            <th>№</th>
            <th onClick={handleSortId} className="table__cell_type_id">
              ID <i className="material-icons table__icon">{ isIncrease ? "arrow_drop_up" : "arrow_drop_down" }</i>
            </th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
          </thead>
          <tbody>
          {
            usersToRender.map((user, index) => (
                <TableRow
                  key={index}
                  type={'fixed'}
                  user={user}
                  index={index}
                  handleRowClick={handleRowClick}
                />
              )
            )
          }
          </tbody>
        </table>

        <table className="striped table_type_scroll">
          <thead className="table__header">
            <tr>
              { columnsRender.email.visible &&
              <th>
                {/*<i className="material-icons table__icon">keyboard_arrow_left</i>*/}
                { columnsRender.email.title }
                {/*<i onClick={handleMoveRight} className="material-icons table__icon">keyboard_arrow_right</i>*/}
              </th>
              }
              { columnsRender.phone.visible && <th>{ columnsRender.phone.title }</th> }
              { columnsRender.gender.visible && <th>{ columnsRender.gender.title }</th> }
              { columnsRender.ipAddress.visible && <th>{ columnsRender.ipAddress.title }</th> }
              { columnsRender.price.visible && <th>{ columnsRender.price.title }</th> }
              { columnsRender.carImage.visible && <th>{ columnsRender.carImage.title }</th> }
              { columnsRender.carModel.visible && <th>{ columnsRender.carModel.title }</th> }
              { columnsRender.carYear.visible && <th>{ columnsRender.carYear.title }</th> }
              { columnsRender.carVin.visible && <th>{ columnsRender.carVin.title }</th> }
            </tr>
          </thead>

          <tbody>
          {
            usersToRender.map((user, index) => (
                <TableRow
                  key={index}
                  type={'scroll'}
                  columnsRender={columnsRender}
                  user={user}
                  index={index}
                  handleRowClick={handleRowClick}
                />
              )
            )
          }
          </tbody>
        </table>
        {
          isTableLoading &&
          <div className="table-container__preloader">
            <Preloader />
          </div>
        }
      </div>
      {
        data.length <= usersToRender.length &&
        <h5>No data anymore...</h5>
      }








      {/*{ data.length > 49 &&*/}
      {/*<Pagination*/}
      {/*  data={data}*/}
      {/*  setUsersToRender={setUsersToRender}*/}
      {/*  pageSize={50}*/}
      {/*  portionSize={5} />*/}
      {/*}*/}
      {/*<table className="container table striped z-depth-4">*/}
      {/*  <thead className="table__header">*/}
      {/*    <tr>*/}
      {/*      <th className="table__headercell table__headercell_pos_first">№</th>*/}
      {/*      <th*/}
      {/*        onClick={handleSortId}*/}
      {/*        className="center-align table__cell_type_id table__headercell table__headercell_pos_second"*/}
      {/*      >ID <i className="material-icons">{ isIncrease ? "arrow_drop_up" : "arrow_drop_down" }</i>*/}
      {/*      </th>*/}
      {/*      <th>First Name</th>*/}
      {/*      <th>Last Name</th>*/}
      {/*      <th>Email</th>*/}
      {/*      <th>Phone</th>*/}
      {/*      <th>Gender</th>*/}
      {/*      <th>IP Address</th>*/}
      {/*      <th>Money</th>*/}
      {/*      <th>Car Model</th>*/}
      {/*      <th>Car Year</th>*/}
      {/*      <th>Car VIN</th>*/}
      {/*      /!**!/*/}
      {/*      <th>First Name</th>*/}
      {/*      <th>Last Name</th>*/}
      {/*      <th>Email</th>*/}
      {/*      <th>Phone</th>*/}
      {/*      <th>Gender</th>*/}
      {/*      <th>IP Address</th>*/}
      {/*      <th>Money</th>*/}
      {/*      <th>Car Model</th>*/}
      {/*      <th>Car Year</th>*/}
      {/*      <th>Car VIN</th>*/}
      {/*    </tr>*/}
      {/*  </thead>*/}

        {/*<tbody>*/}
        {/*{*/}
        {/*  usersToRender.map((user, index) => (*/}
        {/*      <TableRow*/}
        {/*        key={index}*/}
        {/*        user={user}*/}
        {/*        index={index}*/}
        {/*        handleRowClick={handleRowClick}*/}
        {/*      />*/}
        {/*    )*/}
        {/*  )*/}
        {/*}*/}
        {/*</tbody>*/}
      {/*</table>*/}
    </>
  );
}

export default Table;
