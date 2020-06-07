import { useEffect } from "react";
import { UseMe } from "./type";
import { DomainData } from "~/shared/typeGuard/read/Data";

export const useMe: UseMe = ({ service, initData }) => {
  useEvent(service);
  return { ...initData };
};

const useEvent = (service: Parameters<UseMe>[0]["service"]) => {
  useEffect(() => {
    service
      .fetch()
      .then((r) => {
        if (r instanceof DomainData) {
          console.log(r.value);
          return;
        }
        Promise.reject(r);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [service]);
};
