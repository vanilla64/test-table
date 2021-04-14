import React, { useState } from 'react';
import M from 'materialize-css';
import { SLICE_COUNT } from '../../utils/constants'

function FilterForm(props) {
  const { data, setDataForRender, setIsTableScrollActive, usersToRender } = props;
  const [values, setValues] = useState({});

  const styles = {
    submitButton: 'col s1 waves-effect waves-light btn green lighten-2',
    resetButton: 'col s2 waves-effect waves-light btn black-text transparent',
    inputId: 'input-field col s1',
  }

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setValues((prev) => { return { ...prev, [name]: value } })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    setIsTableScrollActive(false)

    let filteredKeys = {}

    const keys = Object.keys(values) // создаем массив ключей из стейта

    keys.forEach(key => { // удаляем пустые свойства
      if (values[key] !== '') {
        filteredKeys[key] = values[key]
      } else { return }
    })

    const keysForSearch = Object.keys(filteredKeys)

    let filteredData = []

    keysForSearch.forEach(key => {
      let arr =
        usersToRender.filter(
          item => item[key].toString().toLowerCase().includes(values[key].toLowerCase())
        )

      arr.forEach(i => filteredData.push(i))
    })

    if (filteredData.length === 0) {
      return M.toast({ html: 'User not found' })
    } else {
      const reduceData = filteredData.reduce((result, item) => {
        return result.includes(item) ? result : [...result, item] // удаляем повторяющиеся объекты
      }, [])

      setDataForRender(reduceData)
    }
  }

  const handleReset = () => {
    setIsTableScrollActive(true)
    setDataForRender(data.slice(0, SLICE_COUNT))
    setValues({})
  }

  return (
    <form onChange={handleChange} onSubmit={handleSubmit} onReset={handleReset} className="row">
      <h4>Filter</h4>
      <div className={styles.inputId}>
        <input
          onChange={handleChange}
          value={values.id ? values.id : ''}
          name="id" id="filterId" type="number" className="validate" />
        <label htmlFor="filterId">Id</label>
      </div>
      <div className="input-field col s2">
        <input
          onChange={handleChange}
          value={values.firstName ? values.firstName : ''}
          name="firstName" id="filterFirst-name" type="text" className="validate" />
        <label htmlFor="filterFirst-name">First Name</label>
      </div>
      <div className="input-field col s2">
        <input
          onChange={handleChange}
          value={values.lastName ? values.lastName : ''}
          name="lastName" id="filterLast-name" type="text" className="validate" />
        <label htmlFor="filterLast-name">Last Name</label>
      </div>
      <div className="input-field col s2">
        <input
          onChange={handleChange}
          value={values.email ? values.email : ''}
          name="email" id="filterEmail" type="email" className="validate" />
        <label htmlFor="filterEmail">Email</label>
      </div>
      <div className="input-field col s2">
        <input
          onChange={handleChange}
          value={values.phone ? values.phone : ''}
          name="phone" id="filterPhone" type="tel" className="validate" />
        <label htmlFor="filterPhone">Phone</label>
      </div>
      <button type="submit" className={styles.submitButton}>Find</button>
      <button type="reset" className={styles.resetButton}>Show table</button>
    </form>
  );
}

export default FilterForm;
