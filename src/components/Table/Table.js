import React, { useState } from 'react';
import './Table.css'
import TableRow from "../TableRow/TableRow";
import Pagination from "../Pagination/Pagination";

function Table(props) {
  const { data, usersToRender, setUsersToRender, handleRowClick } = props
  const [isIncrease, setIsIncrease] = useState(false);

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
      <table className="striped table_type_fixed">
        <thead className="table__header">
        <tr>
          <th>№</th>
          <th className="table__cell_type_id">
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
          <th>Email</th>
          <th>Phone</th>
          <th>Gender</th>
          <th>IP Address</th>
          <th>Money</th>
          <th>Car Model</th>
          <th>Car Year</th>
          <th>Car VIN</th>
        </tr>
        </thead>

        <tbody>
        {
          usersToRender.map((user, index) => (
              <TableRow
                key={index}
                type={'scroll'}
                user={user}
                index={index}
                handleRowClick={handleRowClick}
              />
            )
          )
        }
        </tbody>
      </table>







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
