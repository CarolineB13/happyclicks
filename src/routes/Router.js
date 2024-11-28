import { createBrowserRouter } from "react-router-dom";
import App from "../app/App"; 
import Home from "../pages/Home/Home";
import Portfolio from '../pages/Portfolio/Portfolio';
import Contact from '../pages/Contact/Contact';
import Blog from '../pages/Blog/Blog';
import BlogPost from '../components/Blog/BlogPost';
import NotFound from '../pages/NotFound/NotFound';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        { path: "/", element: <Home /> },
        { path: "portfolio", element: <Portfolio /> },
        { path: "contact", element: <Contact /> },
        { path: "/blog", element: <Blog />},
        { path: "/blog/:id", element: <BlogPost />},
        { path: "*", element: <NotFound /> },
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
