import React from 'react'

const Caption = ({name, type}) => {
  return (
    <div style={{textAlign: 'center'}}>
      <p
        style={{
          fontFamily: 'light',
          fontSize: '1.5rem',
          textAlign: 'center',
          marginTop: 0,
        }}>
        {type === 'articles' ? (
          <em>
            Dive into many interesting articles related to Web Development,
            Software Tools, Tips&nbsp;&&nbsp;Tricks,&nbsp;etc.
          </em>
        ) : (
          <em>
            The articles related to <strong>{name}</strong> {type}.
          </em>
        )}
      </p>
    </div>
  )
}

export default Caption
