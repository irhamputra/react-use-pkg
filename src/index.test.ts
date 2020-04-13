import { useFetchWithCORS, useFormatMoney, useZipCode } from "./";
import { renderHook, act } from "@testing-library/react-hooks";

describe("useFormatMoney", () => {
  it("should be formatted", () => {
    const { result } = renderHook(() => useFormatMoney());

    expect(result.current.value).toBe("");
    expect(typeof result.current.value).toBe("string");

    act(() => {
      result.current.setFormat(2000, "de", "EUR");
    });

    expect(typeof result.current.value).toBe("string");
  });
});

describe("useZipCode", () => {
  it("should be received data", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useZipCode());

    expect(result.current.data).toBeNull();

    act(() => {
      result.current.setCodeCountry("de", "04177");
    });

    await waitForNextUpdate();

    expect(typeof result.current.data).toBe("object");
    expect(result.current.data).toMatchObject({ country: "Germany" });
  });
});

describe("useFetchWithCORS", () => {
  it("should fetch without error", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchWithCORS());

    expect(typeof result.current.data).toBe("string");
    expect(result.current.data).toBe("");

    act(() => {
      result.current.setURI("http://api.zippopotam.us/de/04177");
    });

    await waitForNextUpdate();

    expect(result.current.data).toMatchObject({ country: "Germany" });
  });
});
