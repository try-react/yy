import type { ReadModel } from "~/domain/me/type";

type InitData = ReadModel["object"];

export type State = {
  name: string;
  address: string;
  id: string;
  flg: boolean;
};

export type UseMe = (p: InitData) => State;
