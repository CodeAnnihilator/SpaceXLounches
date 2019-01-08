import { fetch } from 'utils/fetch'

export const apiLaunches = () => fetch.get('launches')
