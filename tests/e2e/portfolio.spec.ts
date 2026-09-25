import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.setTimeout(90_000);

test("renders the portfolio and navigates to engineering work", async ({ page }) => {
  const errors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  page.on("pageerror", (error) => errors.push(error.message));

  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: "Building quality into engineering systems." }),
  ).toBeVisible();
  await page.getByRole("link", { name: /Explore engineering work/i }).click();
  await expect(page.locator("#work")).toBeInViewport();
  await expect(page.getByText("Yakeey", { exact: true }).first()).toBeVisible();
  await expect(page.getByText("Billo", { exact: true })).toBeVisible();

  expect(errors).toEqual([]);
});

test("mobile navigation is keyboard accessible and closes after selection", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  const open = page.getByRole("button", { name: "Open navigation menu" });
  await open.click();
  const dialog = page.getByRole("dialog", { name: "Navigation" });
  await expect(dialog).toBeVisible();

  await page.keyboard.press("Escape");
  await expect(dialog).toBeHidden();

  await open.click();
  await dialog.getByRole("link", { name: /Work/ }).click();
  await expect(dialog).toBeHidden();
  await expect(page.locator("#work")).toBeInViewport();
});

test("architecture explorer changes active quality layers", async ({ page }) => {
  await page.goto("/");
  const explorer = page.getByRole("tablist", { name: "Quality architecture layers" });
  await explorer.getByRole("tab", { name: "PERFORMANCE" }).click();
  await expect(explorer.getByRole("tab", { name: "PERFORMANCE" })).toHaveAttribute(
    "aria-selected",
    "true",
  );
  await expect(
    page.getByText("Modeled traffic enters the system while telemetry exits to observability."),
  ).toBeVisible();
});

test("publishes correct contact links and omits an unverified resume", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("link", { name: "LinkedIn" }).first()).toHaveAttribute(
    "href",
    "https://www.linkedin.com/in/amine-zerradi",
  );
  await expect(page.getByRole("link", { name: "GitHub" }).last()).toHaveAttribute(
    "href",
    "https://github.com/dasileker",
  );
  await expect(page.getByRole("link", { name: /resume/i })).toHaveCount(0);
});

test("meets automated WCAG 2.2 AA checks", async ({ page }) => {
  await page.goto("/");
  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
    .analyze();

  expect(results.violations).toEqual([]);
});

test("supports reduced motion without hiding content", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.locator(".traveling-signal")).toBeHidden();
  await expect(page.getByRole("heading", { name: "Quality across the delivery lifecycle." })).toBeVisible();
});
