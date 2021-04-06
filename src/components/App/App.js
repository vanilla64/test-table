import React, { useState } from 'react';

import Table from "../Table/Table";
import api from '../../utils/Api';
import Preloader from "../Preloader/Preloader";
import UserInfo from "../UserInfo/UserInfo";
import FormAddUser from "../FormAddUser/FormAddUser";
import FilterForm from "../FilterForm/FilterForm";
import { TABLE_INFO } from "../../utils/constants";
import M from 'materialize-css'

function App() {
  const [users, setUsers] = useState([]);
  const [usersToRender, setUsersToRender] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [isPreloaderVisible, setIsPreloaderVisible] = useState(false);
  const [isTableLoading, setIsTableLoading] = useState(false);
  const [isUserInfoOpen, setIsUserInfoOpen] = useState(false);
  const [isFormAddUserVisible, setIsFormAddUserVisible] = useState(false);
  const [columnsRender, setColumnsRender] = useState(TABLE_INFO);

  // Запуск скрипта формы выбора колонок
  const dropdownBtn = document.querySelectorAll('.dropdown-trigger');
  M.Dropdown.init(dropdownBtn, {
    closeOnClick: false,
    constrainWidth: false,
  });

  const resetBeforeFetch = () => {
    setUsers([])
    setUsersToRender([])
    setIsUserInfoOpen(false)
    setIsPreloaderVisible(true)
  }

  const handleGetData = () => {
    resetBeforeFetch()

    api.getData()
      .then(res => {
        setUsers(res)
        setUsersToRender(res.slice(0, 50))
      })
      .then(() => {
        // const tableHeaders = Array.from(document.querySelectorAll('.table__header tr th'))
        // const inputNames = tableHeaders.map(item => {
        //   return item.textContent.split(' ').join().replace(',', '')
        // })
        //
        // let inputValues = {}
        //
        // inputNames.forEach((item, index) => {
        //   if(index> 3) {
        //     inputValues[item] = true
        //   }
        // })
        //
        // setColumnsRender(inputValues)
      })
      .finally(() => setIsPreloaderVisible(false))
      .catch((err) => M.toast({html: err.message}))
  }

  // const handleGetMinData = () => {
  //   resetBeforeFetch()
  //
  //   api.getMinData()
  //     .then(res => {
  //       setUsers(res)
  //       setUsersToRender(res.slice(0, 50))
  //     })
  //     .finally(() => setIsPreloaderVisible(false))
  //     .catch((err) => M.toast({html: err.message}))
  // }

  // const handleGetMaxData = () => {
  //   resetBeforeFetch()
  //
  //   api.getMaxData()
  //     .then(res => {
  //       setUsers(res)
  //       setUsersToRender(res.slice(0, 50))
  //     })
  //     .finally(() => setIsPreloaderVisible(false))
  //     .catch((err) => M.toast({html: err.message}))
  // }

  const handleAddUser = (formData) => {
    setUsers([formData, ...users])
    setUsersToRender([formData, ...users])
    M.toast({ html: 'User added!' })
  }

  const openFormAddUser = () => {
    if (isFormAddUserVisible) {
      setIsFormAddUserVisible(false)
    } else {
      setIsFormAddUserVisible(true)
    }
  }

  const handleRowClick = (user) => {
    if (!isUserInfoOpen) {
      setIsUserInfoOpen(true)
    }

    setUserInfo(user)
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Test task for Аэро-Трейд</h1>
        {/*<h2>{ columnsRender.Email.toString() }</h2>*/}
        <div className="row">
          <button
            onClick={handleGetData}
            className="col s6 waves-effect waves-light btn pink lighten-2">Get data</button>
          {/*<button*/}
          {/*  onClick={handleGetMaxData}*/}
          {/*  className="col s4 waves-effect waves-light btn purple lighten-2">Get max data</button>*/}
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
              data={users}
            />

            <Table
              columnsRender={columnsRender}
              setColumnsRender={setColumnsRender}
              setUsersToRender={setUsersToRender}
              handleRowClick={handleRowClick}
              usersToRender={usersToRender}
              data={users}
              isTableLoading={isTableLoading}
              setIsTableLoading={setIsTableLoading}
            />

            { isUserInfoOpen && <UserInfo onClose={setIsUserInfoOpen} user={userInfo}/> }
          </>
        }
      </div>
    </div>
  );
}

export default App;
