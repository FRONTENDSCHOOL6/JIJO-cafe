import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Suspense } from 'react'
// 쿼리 클라이언트 객체 생성
const queryClient = new QueryClient({
  // 모든 쿼리에 사용되는 기본 옵션
  defaultOptions: {
    queries: {
      // retry: 5, (기본 값: 3)
      // staleTime: 1 * 1000 * 60 * 60 * 24 * 7 // 7일간 (기본 값: 0)
      // cacheTime: 1 * 1000 * 60 * 5, // (기본 값: 5분)
    },
  },
})

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Suspense>
          <h1 className="bg-zinc-200">151515지조</h1>
        </Suspense>
      </QueryClientProvider>
    </>
  )
}

export default App
