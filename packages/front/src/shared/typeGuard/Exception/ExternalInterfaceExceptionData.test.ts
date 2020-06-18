import { ExternalInterfaceExceptionData } from "./ExternalInterfaceExceptionData";

const createData = () => ({
  message: "dummy",
  error: { status: 4040 } as Response,
});

describe("ExternalInterfaceExceptionData.ofで生成されたデータが、instanceofで正常に判断されるか？", () => {
  it("ExternalInterfaceExceptionData", () => {
    const exception = ExternalInterfaceExceptionData.of(createData());

    expect(exception instanceof ExternalInterfaceExceptionData).toEqual(true);
  });
});

describe("元データから変更がないか確認", () => {
  it("DomainData", () => {
    const exception = ExternalInterfaceExceptionData.of(createData());

    expect(exception.errObj).toEqual(createData());
  });
});

describe("JSON.stringify -> JSON.parseして objectの検証", () => {
  it("maybeDomainDataValue", () => {
    const exception = ExternalInterfaceExceptionData.of(createData());
    const obj = JSON.parse(JSON.stringify(exception));

    expect(
      ExternalInterfaceExceptionData.isMaybeExternalInterfaceExceptionData(obj)
    ).toEqual(true);
  });
});
