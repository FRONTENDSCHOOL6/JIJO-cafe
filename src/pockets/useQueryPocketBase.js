import { useQuery } from "@tanstack/react-query"
import { getBeverage, getFoods, getProducts } from "./index"

const useQueryPocketBase = (key, page, perPage, options) => {
  return useQuery({
    queryKey: [key, page],
    queryFn: async () => {
      const products = await getProducts(page, perPage, options)
      const beverage = await getBeverage(page, perPage, options)
      const foods = await getFoods(page, perPage, options)

      return { products, beverage, foods }
    },
    keepPreviousData: true,
    // staleTime: 1000 * 60 * 5,
    staleTime: 1 * 1000 * 60 * 60 * 24 * 7,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    ...options,
  })
}

export default useQueryPocketBase
