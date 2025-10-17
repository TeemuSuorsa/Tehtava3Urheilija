import { useReducer } from "react";
import PropTypes from "prop-types";
import AppReducer from "./AppReducer";
import UrheilijaContext from "./UrheilijaContext";
import axios from "axios";
import {
  GET_URHEILIJAT,
  GET_URHEILIJA,
  ADD_URHEILIJA,
  EDIT_URHEILIJA,
  DELETE_URHEILIJA,
} from "./types";

const GlobalState = (props) => {
  // initial state
  const initialState = {
    urheilijat: [],
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  const apiUrl = "http://localhost:3000/urheilija"; // backend URL

  // Hae kaikki urheilijat
  const getUrheilijat = async () => {
    try {
      const res = await axios.get(apiUrl);
      const data = res.data.urheilijat || res.data;
      dispatch({ type: GET_URHEILIJAT, payload: data });
    } catch (error) {
      console.error(error);
    }
  };

  // Hae yksittäinen urheilija ID:llä
  const getUrheilija = async (id) => {
    try {
      const res = await axios.get(`${apiUrl}/${id}`);
      dispatch({
        type: GET_URHEILIJA,
        payload: res.data.urheilija || res.data,
      });
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  // Lisää urheilija
  const addUrheilija = async (uusiUrheilija) => {
    try {
      const res = await axios.post(apiUrl, uusiUrheilija);
      dispatch({ type: ADD_URHEILIJA, payload: res.data });
    } catch (error) {
      console.error(error);
    }
  };

  // Päivitä urheilija
  const updateUrheilija = async (id, paivitettyUrheilija) => {
    try {
      const res = await axios.put(`${apiUrl}/${id}`, paivitettyUrheilija);
      dispatch({ type: EDIT_URHEILIJA, payload: res.data });
    } catch (error) {
      console.error(error);
    }
  };

  // Poista urheilija
  const deleteUrheilija = async (id) => {
    try {
      await axios.delete(`${apiUrl}/${id}`);
      dispatch({ type: DELETE_URHEILIJA, payload: id });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <UrheilijaContext.Provider
      value={{
        urheilijat: state.urheilijat,
        getUrheilijat,
        getUrheilija,
        addUrheilija,
        updateUrheilija,
        deleteUrheilija,
      }}
    >
      {props.children}
    </UrheilijaContext.Provider>
  );
};

GlobalState.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalState;
