import { interactor, useMe } from "~/useCase/useMe";
import type { Interactor } from "~/useCase/useMe/type";

type P = Parameters<Interactor>[0];
type Me = (p: {
  repository: P["repository"];
  payload: P["payload"];
}) => ReturnType<Interactor>;

export const Me: Me = ({ payload, repository }) =>
  interactor({ useMe, payload, repository });
