import { InitData, State } from "./type";

type UseMe = (p: InitData) => State;
export const useMe: UseMe = (initData) => ({ ...initData });
