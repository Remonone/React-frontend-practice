import React from 'react'

const Page = (props: {element: React.ReactNode}) => {
  return (
    <div>
        <div>Header</div>
        {props.element}
        <div>Footer</div>
    </div>
  )
}

export default Page