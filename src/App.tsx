import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify";
import { lazy, Suspense } from "react";

import AppLayout from "./components/AppLayout";
import Authorization from "./components/Authorization";
import ScrollToTop from "./components/ScrollToTop";
import SpinnerFullPage from "./components/SpinnerFullPage";

const HomePage = lazy(() => import("./page/HomePage"));
const LoginPage = lazy(() => import("./page/LoginPage"));
const MealDetailPage = lazy(() => import("./page/MealDetailPage"));
const FavoritePage = lazy(() => import("./page/FavoritePage"));
const SearchMealsPage = lazy(() => import("./page/SearchMealsPage"));
const NotFoundPage = lazy(() => import("./page/NotFoundPage"));

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ToastContainer />
      <BrowserRouter>
        <ScrollToTop>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route
                path="/"
                element={
                  <Authorization>
                    <AppLayout />
                  </Authorization>
                }
              >
                <Route index element={<HomePage />} />
                <Route path="/meal/:mealId" element={<MealDetailPage />} />
                <Route path="/search" element={<SearchMealsPage />} />
                <Route path="/favorite" element={<FavoritePage />} />
              </Route>

              <Route path="login" element={<LoginPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </ScrollToTop>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
