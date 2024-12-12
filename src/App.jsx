import { BrowserRouter, Route, Routes } from "react-router";

import { HadithProvider } from "./context/HadithContext";
import { ChapterProvider } from "./context/ChapterContext";

import Default from "./components/layouts/Default";
import Hadiths from "./pages/Hadiths";
import Chapter from "./pages/Chapter";
import SingleHadith from "./pages/SingleHadith";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <ChapterProvider>
      <HadithProvider>
        <BrowserRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
          <Routes>
            <Route
              path="/"
              element={<Default />}
            >
              <Route
                index
                element={<Home />}
              />
              <Route
                path="/chapters"
                element={<Chapter />}
              />
              <Route
                path="/hadiths"
                element={<Hadiths />}
              />
              <Route
                path="/chapters/:chapterId/:chapterName"
                element={<Hadiths />}
              />
              <Route
                path="/hadiths/:slug/:hadithNumber"
                element={<SingleHadith />}
              />
              <Route
                path="/about"
                element={<About />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </HadithProvider>
    </ChapterProvider>
  );
}

export default App;
