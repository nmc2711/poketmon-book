import {
  PoketmonDispatchType,
  PoketmonType,
  POKETMON_FAIL,
  POKETMON_SUCCESS,
} from "./actions/PoketmonActionsTypes";

interface InitialState {
  success: boolean;
  poketmon?: PoketmonType;
}

const initialState: InitialState = {
  success: false,
};

const PoketmonReducer = (
  state = initialState,
  action: PoketmonDispatchType
) => {
  switch (action.type) {
    case POKETMON_FAIL:
      return {
        ...state,
        success: false,
      };
    case POKETMON_SUCCESS:
      const { abilities, sprites, name } = action.payload;
      return {
        ...state,
        success: true,
        poketmon: {
          abilities,
          sprites,
          name,
        },
      };
    default:
      return state;
  }
};

export default PoketmonReducer;
