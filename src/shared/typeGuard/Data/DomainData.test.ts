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

describe("JSON.stringify -> JSON.parseして objectの検証", () => {
  it("maybeDomainDataValue", () => {
    const domainData = DomainData.of(createData());
    const obj = JSON.parse(JSON.stringify(domainData));

    expect(DomainData.isMaybeDomainData(obj)).toEqual(true);
    expect(DomainData.getMaybeDomainDataValue(obj)).toEqual(domainData.value);
  });
});
