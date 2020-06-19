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

const fetchMe: FetchMe = () =>
  httpClient
    .get<OResponse>(path)
    .then((r) => (r instanceof ExternalInterfaceData ? r.map(orm) : r));

export const dao = {
  fetchMe,
};
