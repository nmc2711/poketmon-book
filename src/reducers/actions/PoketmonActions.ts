import axios from "axios";
import { Dispatch } from "redux";
import {
  POKETMON_SUCCESS,
  POKETMON_FAIL,
  PoketmonDispatchType,
} from "./PoketmonActionsTypes";

export const fetchPoketmonDate = (poketmonName: string) => async (
  dispatch: Dispatch<PoketmonDispatchType>
) => {
  try {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${poketmonName}`
    );
    const data = res.data;
    console.log(data);
    dispatch({
      type: POKETMON_SUCCESS,
      payload: data,
    });
  } catch (err) {
    alert("해당 포켓몬이 없습니다.");

    dispatch({
      type: POKETMON_FAIL,
    });

    console.log(err);
  }
};
