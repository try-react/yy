import { ExternalInterfaceDataException } from "./ExternalInterfaceDataException";

const createData = () => ({
  message: "dummy",
  error: { status: 4040 } as Response,
});

describe("ExternalInterfaceDataException.ofで生成されたデータが、instanceofで正常に判断されるか？", () => {
  it("ExternalInterfaceDataException", () => {
    const exception = ExternalInterfaceDataException.of(createData());

    expect(exception instanceof ExternalInterfaceDataException).toEqual(true);
  });
});

describe("元データから変更がないか確認", () => {
  it("DomainData", () => {
    const exception = ExternalInterfaceDataException.of(createData());

    expect(exception.errObj).toEqual(createData());
  });
});

describe("JSON.stringify -> JSON.parseして objectの検証", () => {
  it("maybeDomainDataValue", () => {
    const exception = ExternalInterfaceDataException.of(createData());
    const obj = JSON.parse(JSON.stringify(exception));

    expect(
      ExternalInterfaceDataException.isMaybeExternalInterfaceDataException(obj)
    ).toEqual(true);
  });
});
