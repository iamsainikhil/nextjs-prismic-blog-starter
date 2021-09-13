import { Themed } from "theme-ui"

interface CaptionProps {
  name: string
  type: string
}

const Caption = ({name, type}: CaptionProps) => {
  return (
    <div style={{textAlign: 'center'}}>
      <Themed.p
        sx={{
          fontFamily: 'light',
          fontSize: [2, 3, 4],
          textAlign: 'center',
          mt: 0,
        }}>
        {type === 'articles' ? (
          <Themed.em>
            Dive into many interesting articles related to Web Development,
            Software Tools, Tips&nbsp;&&nbsp;Tricks,&nbsp;etc.
          </Themed.em>
        ) : (
          <Themed.em>
            The articles related to <strong>{name}</strong> {type}.
          </Themed.em>
        )}
      </Themed.p>
    </div>
  )
}

export default Caption
