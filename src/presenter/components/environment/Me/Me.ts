import { interactor, useMe } from "~/useCase/useMe";
import type { Interactor } from "~/useCase/useMe/type";

type P = Parameters<Interactor>[0];
type Me = (p: {
  envParam: P["envParam"];
  repository: P["repository"];
}) => ReturnType<Interactor>;

export const Me: Me = ({ envParam, repository }) =>
  interactor({ useMe, envParam, repository });
