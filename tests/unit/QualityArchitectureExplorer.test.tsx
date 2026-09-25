import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { QualityArchitectureExplorer } from "@/components/diagrams/QualityArchitectureExplorer";

describe("QualityArchitectureExplorer", () => {
  it("switches quality layers and exposes the active state", () => {
    render(<QualityArchitectureExplorer />);

    expect(screen.getByRole("tab", { name: "UI" })).toHaveAttribute("aria-selected", "true");
    expect(screen.getByText("Browser and mobile journeys prove critical customer behavior.")).toBeVisible();

    fireEvent.click(screen.getByRole("tab", { name: "PERFORMANCE" }));

    expect(screen.getByRole("tab", { name: "PERFORMANCE" })).toHaveAttribute(
      "aria-selected",
      "true",
    );
    expect(
      screen.getByText(
        "Modeled traffic enters the system while telemetry exits to observability.",
      ),
    ).toBeVisible();
  });
});
