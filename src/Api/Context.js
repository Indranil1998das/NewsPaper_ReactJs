import React, { useContext, createContext, useEffect, useReducer } from "react";
import reducer from "./Reducer";
const initialState = {
  isLoading: true,
  articles: [],
  error: null,
};
const appContext = createContext();
const AppProvider = ({ children }) => {
  const [countryAndCategory, setCountryAndCategory] = React.useState({
    country_name: null,
    country_id: null,
    category: null,
  });
  const [state, dispatch] = useReducer(reducer, initialState);
  //one api fetch
  const everything_data_get = async (apiUrl) => {
    dispatch({
      type: "SET_LOADING",
    });
    const res = await fetch(apiUrl);
    await res
      .json()
      .then((data) => {
        dispatch({
          type: "GET-DATA",
          payload: {
            articlesPay: data.articles,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: "ERROR",
          error: err,
        });
      });
  };

  //secend api fetch
  const top_headlines_data_get = async (apiUrl) => {
    dispatch({
      type: "SET_LOADING",
    });
    const res = await fetch(apiUrl);
    await res
      .json()
      .then((data) => {
        dispatch({
          type: "GET-DATA",
          payload: {
            articlesPay: data.articles,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: "ERROR",
          error: err,
        });
      });
  };

  useEffect(() => {
    if (
      countryAndCategory.country_name !== null ||
      countryAndCategory.country_id !== null ||
      countryAndCategory.category !== null
    ) {
      if (
        countryAndCategory.country_name == null &&
        countryAndCategory.category !== null
      ) {
        top_headlines_data_get(
          `${process.env.REACT_APP_NEWS_URL_two}country=${countryAndCategory.country_id}&category=${countryAndCategory.category}&apikey=${process.env.REACT_APP_API_KEYS}`
        );
      }
      if (countryAndCategory.country_name !== null) {
        everything_data_get(
          `${process.env.REACT_APP_NEWS_URL}${countryAndCategory.country_name}&apiKey=${process.env.REACT_APP_API_KEYS}`
        );
      }
    }
  }, [
    countryAndCategory.category,
    countryAndCategory.country_name,
    countryAndCategory.country_id,
  ]);

  const ChangeStateValue = (country, category) => {
    if (category === "/") {
      setCountryAndCategory({
        country_name: country.country_name,
        country_id: null,
        category: null,
      });
    } else {
      setCountryAndCategory({
        country_name: null,
        country_id: country.country_id,
        category: category.substring(1),
      });
    }
  };

  return (
    <appContext.Provider value={{ ...state, ChangeStateValue }}>
      {children}
    </appContext.Provider>
  );
};

// to make a custom hook
const useGlobalContext = () => {
  return useContext(appContext);
};

export { AppProvider, useGlobalContext };
