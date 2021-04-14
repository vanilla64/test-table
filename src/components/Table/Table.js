import React, { useState } from 'react';
import './Table.css'
import { SLICE_COUNT } from '../../utils/constants'
import TableRow from "../TableRow/TableRow";
import SelectColumnForm from "../SelectColumnForm/SelectColumnForm";
import Preloader from "../Preloader/Preloader";

function Table(props) {
  const
    {
      data, usersToRender, setUsersToRender, columnsRender,
      setColumnsRender, isTableLoading, setIsTableLoading, isTableScrollActive
    } = props

  const [isIncrease, setIsIncrease] = useState(false);

  const tableHeaders = Object.keys(columnsRender)

  const selectKeysFromArr = (arr, keyName) => {
    return arr.map(i => i[keyName])
  }

  const computeTotalPrice = (arr, keyName) => {
    let sum = 0

    selectKeysFromArr(arr, keyName)
      .forEach(i => {
        const number = parseFloat(i.replace(i.charAt(0), ''))
        sum = sum + number
      })

    return sum
  }

  const computeAverage = (arr, keyName) => {
    let sum = 0
    let average

    const array = selectKeysFromArr(arr, keyName)
      .map(i => {
        sum = sum + i
        return i
      })

    average = sum / array.length
    return average
  }

  const reduceGender = (arr, keyName) => {
    const genderCount = {
      male: 0,
      female: 0
    }

    selectKeysFromArr(arr, keyName)
      .forEach(i => {
        switch (i.toLowerCase()) {
          case 'male':
            genderCount.male++
            break
          case 'female':
            genderCount.female++
            break
        }
      })

    return genderCount
  }

  const handleScroll = (evt) => {
    const tableContainer = evt.target
    const table = evt.target.querySelector('table')

    if(data.length <= usersToRender.length) {
      return
    }

     if(!isTableLoading && tableContainer.scrollTop + tableContainer.offsetHeight >= table.offsetHeight) {
       const dataSlice = data.slice(usersToRender.length, usersToRender.length + SLICE_COUNT)
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
        columnsRender={columnsRender}
        setColumnsRender={setColumnsRender}
        tableHeaders={tableHeaders}
      />
      <div onScroll={isTableScrollActive ? handleScroll : null} className="row table-container">
        <table className="striped table_type_fixed">
          <thead className="table__header">
          <tr>
            <th>№</th>
            <th
              onClick={handleSortId}
              className="table__cell_type_id"
            >
              ID <i className="material-icons table__icon">{ isIncrease ? "arrow_drop_up" : "arrow_drop_down" }</i>
            </th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
          </thead>
          <thead className="table__header">
          <tr>
            <th>Total</th>
            <th>{ selectKeysFromArr(usersToRender, 'id').length }</th>
            <th>{ selectKeysFromArr(usersToRender, 'firstName').length }</th>
            <th>{ selectKeysFromArr(usersToRender, 'lastName').length }</th>
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
                />
              )
            )
          }
          </tbody>
        </table>

        <table className="striped table_type_scroll">
          <thead className="table__header">
            <tr>
              { columnsRender.email.visible && <th>{ columnsRender.email.title }</th> }
              { columnsRender.phone.visible && <th>{ columnsRender.phone.title }</th> }
              {
                columnsRender.gender.visible &&
                <th
                  className="tooltipped"
                  data-position="bottom"
                  data-tooltip={`
                  Male: ${reduceGender(usersToRender, 'gender').male}
                  Female: ${reduceGender(usersToRender, 'gender').female}
                  `}
                >
                  { columnsRender.gender.title }
                </th>
              }
              { columnsRender.ipAddress.visible && <th>{ columnsRender.ipAddress.title }</th> }
              { columnsRender.dollars.visible && <th>{ columnsRender.dollars.title }</th> }
              { columnsRender.euro.visible && <th>{ columnsRender.euro.title }</th> }
              { columnsRender.jpy.visible && <th>{ columnsRender.jpy.title }</th> }
              { columnsRender.carImage.visible && <th>{ columnsRender.carImage.title }</th> }
              { columnsRender.carModel.visible && <th>{ columnsRender.carModel.title }</th> }
              { columnsRender.carYear.visible && <th>{ columnsRender.carYear.title }</th> }
              { columnsRender.carVin.visible && <th>{ columnsRender.carVin.title }</th> }
            </tr>
          </thead>
          <thead className="table__header">
            <tr>
              { columnsRender.email.visible && <th>{ selectKeysFromArr(usersToRender, 'email').length }</th> }
              { columnsRender.phone.visible && <th>{ selectKeysFromArr(usersToRender, 'phone').length }</th> }
              {
                columnsRender.gender.visible &&
                <th>
                  { selectKeysFromArr(usersToRender, 'gender').length }
                </th>
              }
              { columnsRender.ipAddress.visible && <th>{ selectKeysFromArr(usersToRender, 'ipAddress').length }</th> }
              {
                columnsRender.dollars.visible &&
                <th>{ '$' + computeTotalPrice(usersToRender, 'dollars').toFixed(2) }</th>
              }
              {
                columnsRender.euro.visible &&
                <th>{ '€' + computeTotalPrice(usersToRender, 'euro').toFixed(2) }</th>
              }
              {
                columnsRender.jpy.visible &&
                <th>{ '¥' + computeTotalPrice(usersToRender, 'jpy').toFixed(2) }</th>
              }
              { columnsRender.carImage.visible && <th></th> }
              { columnsRender.carModel.visible && <th>{ selectKeysFromArr(usersToRender, 'carModel').length }</th> }
              { columnsRender.carYear.visible && <th>{ computeAverage(usersToRender, 'carYear').toFixed(0) }</th> }
              { columnsRender.carVin.visible && <th>{ selectKeysFromArr(usersToRender, 'carVin').length }</th> }
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
    </>
  );
}

export default Table;
