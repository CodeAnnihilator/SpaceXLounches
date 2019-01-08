import { fetch } from 'utils/fetch'

export const requestLaunches = () => fetch.get('launches')
