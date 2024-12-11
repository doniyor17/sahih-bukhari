import { createContext, useContext, useEffect, useReducer } from "react";

const BooksContext = createContext();

const url = import.meta.env.VITE_APP_URL;

const initialState = {
  books: [],
  isLoading: false,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "load/books":
      return { ...state, books: action.payload };
    case "loading":
      return { ...state, isLoading: action.payload };
    case "error":
      return { ...state, error: action.payload };
    default:
      throw new Error("Invalid action");
  }
}
// eslint-disable-next-line react/prop-types
function BooksProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { books, isLoading, error } = state;

  useEffect(() => {
    async function fetchBooks() {
      dispatch({ type: "loading", payload: true });
      try {
        const res = await fetch(
          url +
            `books?apiKey=$2y$10$7eonun56mqljA6TIRX4iOwJ74UU5QIL7wNxmBvToJcDqReRm1Su`,
        );
        const data = await res.json();
        if (data.status !== 200)
          dispatch({ type: "error", payload: data.message });

        dispatch({ type: "load/books", payload: data.books });
      } catch (error) {
        dispatch({ type: "error", payload: error.message });
      } finally {
        dispatch({ type: "loading", payload: false });
      }
    }
    fetchBooks();
  }, []);

  return (
    <BooksContext.Provider
      value={{
        books,
        isLoading,
        error,
        dispatch,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
}

function useBooks() {
  const context = useContext(BooksContext);
  if (context === undefined)
    throw new Error("useBooks must be used within BooksProvider");
  return context;
}
// eslint-disable-next-line react-refresh/only-export-components
export { useBooks, BooksProvider };
