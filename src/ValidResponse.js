import React from 'react'

export default ({ data }) => {
  return (
    <div>
      <header>
        <h1>You got it right!</h1>
      </header>

      <content>
        {data.image && (<img src={data.image} />)}
        {data.link && (<a href={data.link}>{data.link}</a>)}
      </content>
    </div>
  )
}
