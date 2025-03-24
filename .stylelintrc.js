/**
 * Stylelint configuration
 * Defines linting rules for CSS/SCSS to maintain quality and consistency
 */
module.exports = {
  extends: ["stylelint-config-standard"], // Extend standard stylelint config
  plugins: ["stylelint-scss", "stylelint-order"], // Include SCSS and order plugins
  rules: {
    indentation: 2, // 2 spaces indentation
    "no-duplicate-selectors": true, // Prevent duplicate selectors
    "color-hex-case": "lower", // Use lowercase for hex colors
    "color-hex-length": "short", // Use short form for hex colors
    "selector-combinator-space-after": "always", // Space after selector combinator
    "selector-attribute-quotes": "always", // Always use quotes in attribute selectors
    "declaration-block-trailing-semicolon": "always", // Always include trailing semicolon
    "declaration-colon-space-before": "never", // No space before colon
    "declaration-colon-space-after": "always", // Space after colon
    "property-no-vendor-prefix": true, // No vendor prefixes for properties
    "value-no-vendor-prefix": true, // No vendor prefixes for values
    "number-leading-zero": "always", // Always include leading zero
    "function-url-quotes": "always", // Always use quotes in URLs
    "font-weight-notation": "numeric", // Use numeric font weight
    "font-family-name-quotes": "always-where-required", // Use quotes for font names when required
    "at-rule-no-vendor-prefix": true, // No vendor prefixes for at-rules
    "selector-no-vendor-prefix": true, // No vendor prefixes for selectors
    "media-feature-name-no-vendor-prefix": true, // No vendor prefixes for media features
    "comment-empty-line-before": "always", // Empty line before comments
  },
};
