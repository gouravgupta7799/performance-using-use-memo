import React, { useMemo } from 'react'

export default function DemoList(props) {

  const sortedList = useMemo(() => {
    if (props.title === 'Sorted in Ascending Order') {
      return (props.items.sort((a, b) => a - b))

    } else if (props.title === 'Sorted in Descending Order') {
      return (props.items.sort((a, b) => b - a))
    }
  }, [props.items, props.title])

  return (
    <div>
      <h2>{props.title}</h2>
      <ul className='text-align: center;' style={{'listStyleType': 'none'}}>
        {sortedList.map((item) => {
          return (
            <li key={item}>{item}</li>
          )
        })}
      </ul>
    </div>
  )
}
