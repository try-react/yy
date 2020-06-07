import { repository } from "~/gateway/me";
import { workFlow } from "~/domain/me";
import { Interactor } from "./type";

export const interactor: Interactor = {
  fetchInitValue: workFlow.fetchInitValue({ repository }),
  getEnv: () => ({ id: 123 }),
};
