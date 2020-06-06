import { DomainData } from "./DomainData";

describe("DomainData.ofで生成されたデータが、instanceofで正常に判断されるか？", () => {
  const data = { a: "dummy", b: "dummy" };
  const domainData = DomainData.of(data);

  it("DomainData", () => {
    expect(domainData instanceof DomainData).toEqual(true);
  });

  it("Error", () => {
    expect(domainData instanceof Error).toEqual(false);
  });
});

describe("valueを取得しデータが、instanceofで正常に判断されるか？", () => {
  it("DomainData", () => {
    const data = { a: "dummy", b: "dummy" };
    const domainData = DomainData.of(data);
    const value = domainData.value;

    expect(value instanceof DomainData).toEqual(false);
  });
});

describe("元データから変更がないか確認", () => {
  it("DomainData", () => {
    const data = { a: "dummy", b: "dummy", c: { d: "dummy" } };
    const domainData = DomainData.of(data);
    const value = domainData.value;

    expect(value).toEqual(data);
  });
});
