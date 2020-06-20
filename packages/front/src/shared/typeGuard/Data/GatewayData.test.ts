import { GatewayData } from "./GatewayData";

const createData = () => ({ a: "dummy", b: "dummy", c: { d: "dummy" } });

describe("GatewayData.ofで生成されたデータが、instanceofで正常に判断されるか？", () => {
  it("GatewayData", () => {
    const gatewayData = GatewayData.of(createData());

    expect(gatewayData instanceof GatewayData).toEqual(true);
  });

  it("Error", () => {
    const gatewayData = GatewayData.of(createData());

    expect(gatewayData instanceof Error).toEqual(false);
  });
});

describe("元データから変更がないか確認", () => {
  it("GatewayData", () => {
    const gatewayData = GatewayData.of(createData());

    expect(gatewayData.value).toEqual(createData());
  });
});
