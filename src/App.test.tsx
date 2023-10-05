import { beforeEach, describe, expect, it } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

export const asyncRender = (ui: React.ReactElement) => {
  return waitFor(async () => render(ui));
};

describe("renders application", () => {
  beforeEach(async () => {
    await import("./pages/page1");
    const res = await asyncRender(<App />);
  });

  it("renders title", async () => {
    const title = screen.getByText(/360 Virtual Tour/i);
    expect(title).toBeInTheDocument();
  });

  it("renders subtitle", async () => {
    const subtitle = screen.getByText(/Ken Tandrian/i);
    expect(subtitle).toBeInTheDocument();
  });

  it("renders pitch", async () => {
    const pitch = screen.getByText(/Pitch/i);
    expect(pitch).toBeInTheDocument();
  });

  it("renders yaw", async () => {
    const yaw = screen.getByText(/Yaw/i);
    expect(yaw).toBeInTheDocument();
  });
});
