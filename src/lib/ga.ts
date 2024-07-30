import ReactGA from 'react-ga4'

export const initGA = (measurementId: string) => {
  ReactGA.initialize(measurementId)
}
