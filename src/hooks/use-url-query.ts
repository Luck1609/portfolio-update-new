import { useMemo } from "react"
import { useSearchParams } from "react-router-dom"
import qs from "query-string"


export default function useUrlQuery() {
  const [params, setParams] = useSearchParams()

  
  const urlQueryParams = useMemo(() => {
    const formattedParams: Record<string, string> = {}

    for (const [key, value] of params.entries()) {
      formattedParams[key] = value
    }
    return formattedParams
  }, [params])

  const query = qs.stringify(urlQueryParams, { skipEmptyString: true })

  const updateQuery = (queryString: Record<string, string>) => setParams(qs.stringify({...urlQueryParams, ...queryString}))
  
  return {query, updateQuery}
}