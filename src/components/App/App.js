import React, { useState } from 'react';

import Table from "../Table/Table";
import api from '../../utils/Api';
import Preloader from "../Preloader/Preloader";
import FormAddUser from "../FormAddUser/FormAddUser";
import FilterForm from "../FilterForm/FilterForm";
import { TABLE_INFO, SLICE_COUNT } from "../../utils/constants";
import M from 'materialize-css'
import tableDragger from "table-dragger";

function App() {
  const [users, setUsers] = useState([]);
  const [usersToRender, setUsersToRender] = useState([]);
  const [isPreloaderVisible, setIsPreloaderVisible] = useState(false);
  const [isTableLoading, setIsTableLoading] = useState(false);
  const [isFormAddUserVisible, setIsFormAddUserVisible] = useState(false);
  const [columnsRender, setColumnsRender] = useState(TABLE_INFO);
  const [isTableScrollActive, setIsTableScrollActive] = useState(true);

  // Запуск скрипта формы выбора колонок
  const dropdownBtn = document.querySelectorAll('.dropdown-trigger');
  M.Dropdown.init(dropdownBtn, {
    closeOnClick: false,
    constrainWidth: false,
  });

  // Запуск скрипта всплывающей подсказки
  const tooltips = document.querySelectorAll('.tooltipped');
  M.Tooltip.init(tooltips);

  const resetBeforeFetch = () => {
    setUsers([])
    setUsersToRender([])
    setIsPreloaderVisible(true)
  }

  const handleGetData = () => {
    resetBeforeFetch()

    api.getData()
      .then(res => {
        setUsers(res)
        setUsersToRender(res.slice(0, SLICE_COUNT))
      })
      .then(() => {
        const draggableTable = document.querySelector('.table_type_scroll')

        const dragger = tableDragger(draggableTable, {
          animation: 1
        })
        dragger
          .on('drag', () => {
            if (window.getSelection) {
              window.getSelection().removeAllRanges();
            } else { // старый IE
              document.selection.empty();
            }
          })
      })
      .finally(() => setIsPreloaderVisible(false))
      .catch((err) => M.toast({html: err.message}))
  }

  const handleAddUser = (formData) => {
    formData.gender = 'test'
    formData.ipAddress = 'test'
    formData.dollars = '$0.00'
    formData.euro = '€0.00'
    formData.jpy = '¥0.00'
    formData.carImage = ''
    formData.carModel = 'test'
    formData.carYear = 2000
    formData.carVin = 'test'

    setUsers([formData, ...users])
    setUsersToRender([formData, ...users])

    M.toast({ html: 'User added!' })
  }

  const openFormAddUser = () => {
    if (isFormAddUserVisible) {
      return setIsFormAddUserVisible(false)
    }
    setIsFormAddUserVisible(true)
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Test task for Аэро-Трейд</h1>
        <div className="row">
          <button
            onClick={handleGetData}
            className="col s6 waves-effect waves-light btn pink lighten-2">Get data</button>
          <button
            onClick={openFormAddUser}
            className="col s6 waves-effect waves-light btn blue lighten-2">
            { isFormAddUserVisible ? 'Close form' : 'Add user' }
          </button>
        </div>
        <FormAddUser isVisible={isFormAddUserVisible} onSubmit={handleAddUser} />

        { isPreloaderVisible && <Preloader /> }

        { users.length > 0  &&
          <>
            <FilterForm
              setDataForRender={setUsersToRender}
              usersToRender={usersToRender}
              data={users}
              setIsTableScrollActive={setIsTableScrollActive}
            />
            <Table
              columnsRender={columnsRender}
              setColumnsRender={setColumnsRender}
              setUsersToRender={setUsersToRender}
              usersToRender={usersToRender}
              data={users}
              isTableLoading={isTableLoading}
              setIsTableLoading={setIsTableLoading}
              isTableScrollActive={isTableScrollActive}
            />
          </>
        }
      </div>
    </div>
  );
}

export default App;
