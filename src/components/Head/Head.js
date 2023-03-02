import React from 'react'

export default ({title, description }) => {
  return (
    <>
      {title ? (
        <title>{title}</title>
      ) : null }
      {description ? (
        <meta name="description" content={description} />
      ) : null }
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </>
  )
}