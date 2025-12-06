import { registerApplication, start } from "single-spa";

// ============================================
// Shared Libraries (imported by other MFEs)
// ============================================
// @zanza00/shared-libs is not registered as an app
// It's imported directly by other MFEs via import map

// ============================================
// Always-Active Applications
// ============================================

// Shell: Header + Progress Bar (always visible)
registerApplication({
  name: "@zanza00/shell",
  app: () =>
    import(
      // @ts-expect-error no static types for this package
      "@zanza00/shell"
    ),
  activeWhen: () => true, // Always active
});

// ============================================
// Routed Applications
// ============================================

// Intro MFE (introduction slides)
registerApplication({
  name: "@zanza00/intro",
  app: () =>
    import(
      // @ts-expect-error no static types for this package
      "@zanza00/intro"
    ),
  activeWhen: (location) => {
    const path = location.pathname;
    return path === "/" || path.startsWith("/intro");
  },
});

// Content MFE (main presentation slides)
registerApplication({
  name: "@zanza00/content",
  app: () =>
    import(
      // @ts-expect-error no static types for this package
      "@zanza00/content"
    ),
  activeWhen: (location) => location.pathname.startsWith("/content"),
});

// QA Extras (hidden content, accessible only via import-map-override)
// Fails gracefully if not in import map
registerApplication({
  name: "@zanza00/qa-extra",
  app: () =>
    import(
      // @ts-expect-error no static types for this package
      "@zanza00/qa-extra"
    ),
  activeWhen: (location) => location.pathname.startsWith("/extra"),
});

// ============================================
// Start Single-SPA
// ============================================
//
start({
  urlRerouteOnly: true,
});
