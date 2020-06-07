import { repository } from "~/infra/repo/me";
import { workFlow } from "~/domain/me";
import { Interactor } from "./type";

export const interactor: Interactor = {
  fetchInitValue: workFlow.fetchInitValue({ repository }),
  getEnv: () => ({ id: 123 }),
};
