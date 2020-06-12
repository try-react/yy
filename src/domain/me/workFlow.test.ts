import { workFlow } from ".";
import type { Repository, Me } from ".";
import { GatewayData } from "~/shared/typeGuard/Data";

const me: Me = { id: "1", name: "", address: "", flg: true };
const repository: Repository = {
  fetchMe: (_) => Promise.resolve(GatewayData.of<Me>(me)),
};

describe("getLatestInformationAboutMe", () => {
  it("データ取得", async () => {
    const res = await workFlow.getLatestInformationAboutMe({
      payload: { id: 1 },
      repository,
    })();

    expect(res.value).toEqual(me);
  });
});
