import { describe, expect, it } from "vitest";
import { caseMedia } from "../redesign-cases";
import { translations } from "@/core/data/translations";

describe("redesign cases", () => {
  it("keeps Off Road after Zukarzen in the public order", () => {
    const ids = caseMedia.map((item) => item.id);
    expect(ids.indexOf("zukarzen")).toBeLessThan(ids.indexOf("offroad"));
    expect(ids).toEqual([
      "laboratoriaBcp",
      "zukarzen",
      "offroad",
      "laboratoria",
      "loreal",
      "utp",
      "colsubsidio",
      "biotraining",
      "hazlatarea",
      "stephanie",
    ]);
  });

  it("has ES and EN copy for every case id", () => {
    for (const item of caseMedia) {
      expect(translations.es.cases.items[item.id]).toBeTruthy();
      expect(translations.en.cases.items[item.id]).toBeTruthy();
      expect(translations.es.cases.items[item.id].title.length).toBeGreaterThan(0);
      expect(translations.en.cases.items[item.id].title.length).toBeGreaterThan(0);
      expect(item.href).toMatch(/^https?:\/\//);
    }
  });
});
