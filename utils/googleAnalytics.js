import ReactGA from 'react-ga'

export const initGA = () => {
  ReactGA.initialize(process.env.NEXT_PUBLIC_GA_ID)
}

export const trackGAEvent = (category, action, label, value = 0) => {
  ReactGA.event({
    category,
    action,
    label,
    value,
  })
}
