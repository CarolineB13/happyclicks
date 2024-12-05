import { createBrowserRouter } from "react-router-dom";
import React, { Suspense } from "react";
import App from "../app/App"; // App reste non différé
import Loading from "../components/Loading/Loading"; // Ton composant de chargement (optionnel)

// Chargement différé des pages
const Home = React.lazy(() => import("../pages/Home/Home"));
const Portfolio = React.lazy(() => import("../pages/Portfolio/Portfolio"));
const Contact = React.lazy(() => import("../pages/Contact/Contact"));
const Blog = React.lazy(() => import("../pages/Blog/Blog"));
const BlogPost = React.lazy(() => import("../components/BlogPost/BlogPost"));
const NotFound = React.lazy(() => import("../pages/NotFound/NotFound"));

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: (
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "portfolio",
          element: (
            <Suspense fallback={<Loading />}>
              <Portfolio />
            </Suspense>
          ),
        },
        {
          path: "contact",
          element: (
            <Suspense fallback={<Loading />}>
              <Contact />
            </Suspense>
          ),
        },
        {
          path: "blog/*",
          children: [
            {
              path: "",
              element: (
                <Suspense fallback={<Loading />}>
                  <Blog />
                </Suspense>
              ),
            },
            {
              path: ":slug",
              element: (
                <Suspense fallback={<Loading />}>
                  <BlogPost />
                </Suspense>
              ),
            },
          ],
        },
        {
          path: "*",
          element: (
            <Suspense fallback={<Loading />}>
              <NotFound />
            </Suspense>
          ),
        },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

export default router;
