import React, { useState } from 'react';
import './SelectColumnForm.css'

function SelectColumnForm(props) {
  const { tableHeaders, columnsRender, setColumnsRender } = props
  const [optionsValues, setOptionsValues] = useState(columnsRender);

  const handleDropdownChange = (evt) => {
    const { name, checked } = evt.target;

    setOptionsValues((prev) => {
      return { ...prev, ...prev[name].visible = checked }
    })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    setColumnsRender(optionsValues)
  }

  return (
    <form onSubmit={handleSubmit} onChange={handleDropdownChange} className="row">
      <button
        className='dropdown-trigger col s4 btn deep-purple lighten-2'
        data-target='dropdown1'>
        Select columns
      </button>
      <button
        type="submit"
        className="col s4 btn green lighten-2">
        Submit
      </button>
      <ul id='dropdown1' className='dropdown-content'>
        {
          tableHeaders.map((headerItem, index) => {
            return (
              <li key={index} className="dropdown-content__list-item">
                <label>
                  <input
                    type="checkbox"
                    name={tableHeaders[index]}
                    className="filled-in"
                    defaultChecked={columnsRender[headerItem].visible}
                  />
                  <span className="dropdown-content__text">{ columnsRender[headerItem].title }</span>
                </label>
              </li>
            )
          })
        }
      </ul>
    </form>
  );
}

export default SelectColumnForm;
