import useSWR from 'swr'
export { useSWR }

export const fetcher = (...args) => fetch(...args).then((res) => res.json())
