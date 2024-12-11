import { createContext, useContext, useReducer } from "react";

const HadithContext = createContext();

const url = import.meta.env.VITE_APP_URL;
const key = "$2y$10$7eonun56mqljA6TIRX4iOwJ74UU5QIL7wNxmBvToJcDqReRm1Su";

const initialState = {
  hadiths: [],
  hadith: null,
  isLoading: false,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "load/hadiths":
      return { ...state, hadiths: action.payload, error: null };
    case "load/hadith":
      return { ...state, hadith: action.payload, error: null };
    case "loading":
      return { ...state, isLoading: action.payload };
    case "error":
      return { ...state, error: action.payload };
    default:
      throw new Error("Invalid action");
  }
}
// eslint-disable-next-line react/prop-types
function HadithProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { hadiths, hadith, isLoading, error } = state;

  async function fetchHadiths() {
    dispatch({ type: "loading", payload: true });
    try {
      const res = await fetch(url + `hadiths?book=sahih-bukhari&apiKey=${key}`);
      const data = await res.json();
      if (data.status !== 200)
        dispatch({ type: "error", payload: data.message });

      dispatch({ type: "load/hadiths", payload: data.hadiths.data });
    } catch (error) {
      dispatch({ type: "error", payload: error.message });
    } finally {
      dispatch({ type: "loading", payload: false });
    }
  }

  async function fetchChapterHadiths(chapterId) {
    dispatch({ type: "loading", payload: true });
    try {
      const res = await fetch(
        url + `hadiths?book=sahih-bukhari&chapter=${chapterId}&apiKey=${key}`,
      );
      const data = await res.json();

      if (data.status === 200)
        dispatch({ type: "load/hadiths", payload: data.hadiths.data });
    } catch (error) {
      if (error.status === 404)
        dispatch({ type: "error", payload: "Hadith not found" });
      else dispatch({ type: "error", payload: error.message });
    } finally {
      dispatch({ type: "loading", payload: false });
    }
  }

  async function fetchSingleHadith(slug, hadithNumber) {
    if (!slug || !hadithNumber) return;
    dispatch({ type: "loading", payload: true });
    try {
      const res = await fetch(
        url + `hadiths?book=${slug}&hadithNumber=${hadithNumber}&apiKey=${key}`,
      );
      const data = await res.json();

      if (data.status === 200)
        dispatch({ type: "load/hadith", payload: data.hadiths.data[0] });
      else throw new Error(data.message);
    } catch (error) {
      if (error.type === "TypeError")
        dispatch({ type: "error", payload: "Hadith not found" });
      else dispatch({ type: "error", payload: error.message });
    } finally {
      dispatch({ type: "loading", payload: false });
    }
  }

  return (
    <HadithContext.Provider
      value={{
        hadiths,
        hadith,
        isLoading,
        error,
        fetchHadiths,
        fetchSingleHadith,
        fetchChapterHadiths,
        dispatch,
      }}
    >
      {children}
    </HadithContext.Provider>
  );
}

function useHadith() {
  const context = useContext(HadithContext);
  if (context === undefined)
    throw new Error("useHadith must be used within HadithProvider");
  return context;
}
// eslint-disable-next-line react-refresh/only-export-components
export { useHadith, HadithProvider };
