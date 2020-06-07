import type { ReadModel } from "~/domain/me/type";
import { Repository } from "~/domain/me/type";
import type { WorkFlow } from "~/domain/me";
import type { LazyExoticComponent, FC } from "react";

type InitData = ReadModel["object"];

export type State = {
  name: string;
  address: string;
  id: string;
  flg: boolean;
};

export type UseMe = (p: InitData) => State;

export type Interactor = (p: {
  repository: Repository;
  useMe: UseMe;
  envParam: Parameters<ReturnType<WorkFlow["fetchInitValue"]>>[0];
}) => LazyExoticComponent<FC>;
