export const POKETMON_SUCCESS = "POKETMON_SUCCESS";
export const POKETMON_FAIL = "POKETMON_FAIL";

export type PoketmonType = {
  abilities: PoketmonAbility[];
  sprites: PoketmonSprites;
  name: PoketmonName;
};

export type PoketmonAbility = {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
};

export type PoketmonSprites = {
  front_default: string;
};

export type PoketmonName = {
  name: string;
};

export interface PoketmonFailDispatch {
  type: typeof POKETMON_FAIL;
}

export interface PoketmonSuccessDispatch {
  type: typeof POKETMON_SUCCESS;
  payload: {
    abilities: PoketmonAbility[];
    sprites: PoketmonSprites;
    name: PoketmonName;
  };
}

export type PoketmonDispatchType =
  | PoketmonFailDispatch
  | PoketmonSuccessDispatch;
