import { UseMe } from "./type";

export const useMe: UseMe = (param) => {
  console.log(param.service);

  return { ...param.initData };
};
