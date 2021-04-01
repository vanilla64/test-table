import React, { useState } from 'react';
import './SelectColumnForm.css'

function SelectColumnForm(props) {
  // Выбираем заголовки для рендера элементов выпадаюшего меню
  const tableHeaders = Array.from(document.querySelectorAll('.table__header tr th'))

  const [optionsValues, setOptionsValues] = useState({
    id: true
  });

  const handleDropdownChange = (evt) => {
    const { name, value } = evt.target;
    console.log(evt.target.checked)
    setOptionsValues((prev) => { return { ...prev, [name]: value } })
  }

  return (
    <form onChange={handleDropdownChange} className="row">
      <button
        className='dropdown-trigger col s4 btn deep-purple lighten-2'
        data-target='dropdown1'>Select columns</button>
      <ul id='dropdown1' className='dropdown-content'>
        {
          tableHeaders.map((headerItem, index) => {
            if(index > 3) {
              return (
                <li key={index} className="dropdown-content__list-item">
                  <label>
                    <input type="checkbox" className="filled-in" defaultChecked={true} />
                    <span className="dropdown-content__text">{ headerItem.textContent }</span>
                  </label>
                </li>
              )
            }
          })
        }
      </ul>
    </form>
  );
}

export default SelectColumnForm;