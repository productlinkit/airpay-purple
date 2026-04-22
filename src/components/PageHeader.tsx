import { StickyNav } from "./StickyNav";

/**
 * Always-visible navbar used on non-home pages. Renders the same
 * floating pill as StickyNav, but without the scroll-trigger.
 */
export function PageHeader() {
  return <StickyNav alwaysVisible />;
}
