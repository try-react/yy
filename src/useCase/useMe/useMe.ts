import { UseMe } from "./type";
import { DomainData } from "~/shared/typeGuard/read/Data";
import { useAsync } from "react-use";

export const useMe: UseMe = ({ service, initData }) => {
  const { eventState } = useEvent(service);

  if (eventState.value instanceof DomainData) {
    console.log(eventState.value); // any
  }

  return { ...initData };
};

const useEvent = (service: Parameters<UseMe>[0]["service"]) => {
  const state = useAsync(
    () =>
      service
        .fetch()
        .then((r) => {
          if (r instanceof DomainData) {
            return r;
          }
          return Promise.reject(r);
        })
        .catch((e) => e),
    [service]
  );
  return { eventState: state };
};
