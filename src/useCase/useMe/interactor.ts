import { workFlow } from "~/domain/me";
import { Interactor } from "./type";

export const interactor: Interactor = ({ repository }) => ({
  fetchInitValue: workFlow.fetchInitValue({ repository }),
});
