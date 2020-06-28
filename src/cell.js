import React from 'react'

const th = function (content) {
  return <th className='Cell Cell-header'>{content}</th>
}

const td = function (content) {
  return <td className='Cell'>{content}</td>
}
export default function Cell({ content, header }) {
  return header ? th(content) : td(content)
}
