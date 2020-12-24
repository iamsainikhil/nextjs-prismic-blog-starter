/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx, Styled} from 'theme-ui'

const Caption = ({name, type}) => {
  return (
    <div style={{textAlign: 'center'}}>
      <Styled.p
        sx={{
          fontFamily: 'light',
          fontSize: [2, 3, 4],
          textAlign: 'center',
          mt: 0,
        }}>
        {type === 'articles' ? (
          <Styled.em>
            Dive into many interesting articles related to Web Development,
            Software Tools, Tips&nbsp;&&nbsp;Tricks,&nbsp;etc.
          </Styled.em>
        ) : (
          <Styled.em>
            The articles related to <strong>{name}</strong> {type}.
          </Styled.em>
        )}
      </Styled.p>
    </div>
  )
}

export default Caption
