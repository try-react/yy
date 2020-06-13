import { util } from "~/externalInterface/http/client/util";
import { httpClient } from "~/externalInterface/http/client";
import { ExternalInterfaceData } from "~/shared/typeGuard/Data";
import type { OResponse, FetchMe, ORM } from "./type";

const orm: ORM = (r) => ({
  id: r.id_x_,
  name: r.name_x_,
  address: r.address_x_,
});

const path = util.findPath("me");

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const fetchMe: FetchMe = (p) => {
  return httpClient
    .get<OResponse>(path, `/${p.id}`)
    .then((r) =>
      r instanceof ExternalInterfaceData
        ? ExternalInterfaceData.of(orm(r.value))
        : r
    );
};

export const dao = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fetchMe: (_: any) =>
    Promise.resolve(
      ExternalInterfaceData.of({ id: "1", name: "x", address: "y" })
    ),
};

// export const dao = {
//   fetchMe,
// };
