import { findPath } from "~/externalInterface/api/http/client/util";
import { httpClient } from "~/externalInterface/api/http/client";
import { ExternalInterfaceData } from "~/shared/typeGuard/read/Data";
import type { OResponse, Me, FetchMe } from "./type";

const path = findPath("me");
const orm = (r: OResponse): Me => ({
  id: r.id_x_,
  name: r.name_x_,
  address: r.address_x_,
});

export const fetchMe: FetchMe = (_) =>
  httpClient
    .get<OResponse>(path)
    .then((r) =>
      r instanceof ExternalInterfaceData
        ? ExternalInterfaceData.of(orm(r.value))
        : r
    )
    .catch<never>((e) => e);
