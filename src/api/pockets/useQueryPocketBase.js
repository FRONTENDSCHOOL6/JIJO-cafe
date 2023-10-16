import { useQuery } from "@tanstack/react-query"
import { getProducts, getBeverage, getFoods, getNotices, getEvents, getPagination } from "@/api/pockets"

// PocketBase 데이터베이스의 데이터를 요청한 후 캐싱하는 커스텀 훅 함수
// 예시에서는 getProducts를 사용 (추후 queryFn에 연결될 함수를 외부로 분리 가능)
export const useQueryGetProducts = (key, page, perPage, options) => {
  return useQuery({
    queryKey: [key, page],
    queryFn: () => getProducts(page, perPage, options),
    keepPreviousData: true,
    ...options,
    // staleTime: 1000 * 60 * 5,  //5분 동안 "유효하지 않은(stale)" 상태로 유지되며, 5분 이후에 업데이트
    // refetchOnMount: false, //컴포넌트가 마운트될 때 데이터를 새로고침 여부
    // refetchOnReconnect: false,   //인터넷 연결이 다시 활성화될 때 데이터를 자동으로 새로고침 여부
    // refetchOnWindowFocus: false,  //브라우저 창이 포커스를 얻을 때 데이터 새로고침 여부
  })
}

export const useQueryGetFoods = (key, page, perPage, options) => {
  return useQuery({
    queryKey: [key, page],
    queryFn: () => getFoods(page, perPage, options),
    keepPreviousData: true,
    ...options,
  })
}

export const useQueryGetBeverage = (key, page, perPage, options) => {
  return useQuery({
    queryKey: [key, page],
    queryFn: () => getBeverage(page, perPage, options),
    keepPreviousData: true,
    ...options,
  })
}

export const useQueryGetNotices = (key, page, perPage, dependency, options) => {
  return useQuery({
    queryKey: [key, page, dependency],
    queryFn: () => getNotices(page, perPage, options),
    keepPreviousData: true,
    ...options,
    staleTime: 0,
  })
}

export const useQueryGetEvents = (key, page, perPage, options) => {
  return useQuery({
    queryKey: [key, page],
    queryFn: () => getEvents(page, perPage, options),
    keepPreviousData: true,
    ...options,
  })
}

export const useQueryPocketBase = (key, page, perPage, dependency, options) => {
  return useQuery({
    queryKey: [key, page, dependency],
    queryFn: () => getPagination(key, page, perPage, options),
    keepPreviousData: true,
    ...options,
    staleTime: 0,
  })
}
