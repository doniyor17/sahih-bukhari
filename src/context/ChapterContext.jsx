import { createContext, useContext, useReducer } from "react";

const ChaptersContext = createContext();

const url = import.meta.env.VITE_APP_URL;
const key = "$2y$10$7eonun56mqljA6TIRX4iOwJ74UU5QIL7wNxmBvToJcDqReRm1Su";

const initialState = {
  chapters: [],
  hadiths: [],
  isLoading: false,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "load/chapters":
      return { ...state, chapters: action.payload };
    case "load/chaptersHadith":
      return { ...state, hadiths: action.payload };
    case "loading":
      return { ...state, isLoading: action.payload };
    case "error":
      return { ...state, error: action.payload };
    default:
      throw new Error("Invalid action");
  }
}
// eslint-disable-next-line react/prop-types
function ChapterProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { chapters, isLoading, error } = state;

  async function fetchChapters() {
    dispatch({ type: "loading", payload: true });
    try {
      const res = await fetch(url + `sahih-bukhari/chapters?apiKey=${key}`);
      const data = await res.json();

      if (data.status !== 200)
        dispatch({ type: "error", payload: data.message });

      dispatch({ type: "load/chapters", payload: data.chapters });
    } catch (error) {
      dispatch({ type: "error", payload: error.message });
    } finally {
      dispatch({ type: "loading", payload: false });
    }
  }

  async function fetchChaptersHadiths(slug, chapterId) {
    dispatch({ type: "loading", payload: true });
    try {
      const res = await fetch(
        url +
          `hadiths?book=sahih-bukhari&chapter=${
            chapterId ? chapterId : ""
          }&apiKey=$2y$10$7eonun56mqljA6TIRX4iOwJ74UU5QIL7wNxmBvToJcDqReRm1Su`,
      );
      const data = await res.json();
      if (data.status !== 200)
        dispatch({ type: "error", payload: data.message });

      dispatch({ type: "load/chaptersHadith", payload: data.hadiths.data });
    } catch (error) {
      dispatch({ type: "error", payload: error.message });
    } finally {
      dispatch({ type: "loading", payload: false });
    }
  }

  return (
    <ChaptersContext.Provider
      value={{
        chapters,
        isLoading,
        error,
        fetchChapters,
        fetchChaptersHadiths,
        dispatch,
      }}
    >
      {children}
    </ChaptersContext.Provider>
  );
}

function useChapter() {
  const context = useContext(ChaptersContext);
  if (context === undefined)
    throw new Error("useChapter must be used within ChapterProvider");
  return context;
}
// eslint-disable-next-line react-refresh/only-export-components
export { useChapter, ChapterProvider };
