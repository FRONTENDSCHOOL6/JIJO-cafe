import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import router from "./routes/routes";
import JijoSpinner from "./components/JijoSpinner";
// 쿼리 클라이언트 객체 생성
const queryClient = new QueryClient({
  // 모든 쿼리에 사용되는 기본 옵션
  defaultOptions: {
    queries: {
      // retry: 5,  // (기본 값: 3) 재시도(retry)할 횟수
      staleTime: 1 * 1000 * 60 * 60 * 24 * 1, // 1일간 (기본 값: 0)
      // cacheTime: 1 * 1000 * 60 * 5, // (기본 값: 5분) 캐시된 데이터가 캐시에서 유지되는 시간
    },
  },
});

function App() {
  return (
    <>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <Suspense fallback={<JijoSpinner />}>
            <RouterProvider router={router}></RouterProvider>
          </Suspense>
          {/* <ReactQueryDevtools initialIsOpen={true} /> */}
        </QueryClientProvider>
      </HelmetProvider>
      <Toaster />
    </>
  );
}

export default App;
