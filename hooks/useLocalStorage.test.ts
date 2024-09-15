import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { useLocalStorage } from "./useLocalStorage";

const TEST_KEY = "cart";
const DEFAULT_VALUE = "";

describe("useLocalStorage", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.spyOn(Storage.prototype, "setItem");
    vi.spyOn(Storage.prototype, "getItem");
  });

  it("Given a key and default value, When hook is initialized, Then return default value", () => {
    // GIVEN + WHEN
    const { result } = renderHook(() =>
      useLocalStorage(TEST_KEY, DEFAULT_VALUE)
    );

    // THEN
    expect(result.current[0]).toBe(DEFAULT_VALUE);
  });

  it("Given a stored value, When hook is initialized, Then return stored value", () => {
    // GIVEN
    localStorage.setItem(TEST_KEY, JSON.stringify("storedValue"));

    // WHEN
    const { result } = renderHook(() =>
      useLocalStorage(TEST_KEY, DEFAULT_VALUE)
    );

    // THEN
    expect(result.current[0]).toBe("storedValue");
  });

  it("Given a new value, When setValue is called, Then update state and localStorage", () => {
    // GIVEN
    const { result } = renderHook(() =>
      useLocalStorage(TEST_KEY, DEFAULT_VALUE)
    );

    // WHEN
    act(() => {
      result.current[1]("newValue");
    });

    // THEN
    expect(result.current[0]).toBe("newValue");
    expect(localStorage.setItem).toHaveBeenCalledWith(
      TEST_KEY,
      JSON.stringify("newValue")
    );
  });

  it("Given a storage event, When event is dispatched, Then update state", () => {
    // GIVEN
    const { result } = renderHook(() =>
      useLocalStorage(TEST_KEY, DEFAULT_VALUE)
    );

    // WHEN
    act(() => {
      localStorage.setItem(TEST_KEY, JSON.stringify("updatedValue"));
      window.dispatchEvent(new StorageEvent("storage", { key: TEST_KEY }));
    });

    // THEN
    expect(result.current[0]).toBe("updatedValue");
  });
});
