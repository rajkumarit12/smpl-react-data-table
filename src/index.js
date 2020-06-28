import React from 'react'
import styles from './styles.module.css'
import Cell from './cell'

export default function DataTable(props) {
  const { headings = [], rows = [] } = props
  function renderHeading() {
    return headings.map((_cell, index) => {
      return <Cell key={`heading-${index}`} content={_cell} header />
    })
  }
  function renderRows() {
    return rows.map((_cell, cellIndex) => {
      return (
        <tr key={`row-${cellIndex}`}>
          {_cell.map((item, index) => {
            return (
              <Cell
                key={`rows-${cellIndex}-${index}`}
                content={item}
                header={false}
              />
            )
          })}
        </tr>
      )
    })
  }
  return (
    <div className={styles.dataTable}>
      <div className={styles.scrollContainer}>
        <table className={styles.table}>
          <thead>
            <tr key='heading'>{renderHeading()}</tr>
          </thead>
          <tbody>{renderRows()}</tbody>
        </table>
      </div>
    </div>
  )
}
