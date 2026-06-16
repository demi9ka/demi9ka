/**
 * Hero grid background with a barely-perceptible color shift between a
 * neutral and a faint cool tint. Animation lives in index.css
 * (`hero-grid-*`), respects prefers-reduced-motion.
 */
export const HeroBackground = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="hero-grid-mask">
        <div className="hero-grid-line hero-grid-a" />
        <div className="hero-grid-line hero-grid-b" />
      </div>
    </div>
  )
}
