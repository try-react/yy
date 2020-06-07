import { DomainData } from "./DomainData";

const createData = () => ({ a: "dummy", b: "dummy", c: { d: "dummy" } });

describe("DomainData.ofで生成されたデータが、instanceofで正常に判断されるか？", () => {
  it("DomainData", () => {
    const domainData = DomainData.of(createData());

    expect(domainData instanceof DomainData).toEqual(true);
  });

  it("Error", () => {
    const domainData = DomainData.of(createData());

    expect(domainData instanceof Error).toEqual(false);
  });
});

describe("元データから変更がないか確認", () => {
  it("DomainData", () => {
    const domainData = DomainData.of(createData());

    expect(domainData.value).toEqual(createData());
  });
});
