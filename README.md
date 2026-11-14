# Astro Shop [![Built with Astro](https://astro.badg.es/v2/built-with-astro/tiny.svg)](https://astro.build)

See the final repository and tutorial in Codrops
https://github.com/codrops/astro-shop-view-transitions

Astro Shop is a minimalist page with [Astro View Transitions](https://docs.astro.build/en/guides/view-transitions/), built for smooth and seamless navigations + TailwindCSS

[See Live Preview](https://astro-shop-fawn.vercel.app/)

![astro-shop-anim](https://github.com/igorm84/astro-shop/assets/16727448/41c97e04-dc16-48d3-b77d-73a3ec898000)

### Development and validation

Use Node.js 22.23.4 or newer (required by Astro 7.4.12) and pnpm 10.34.7 (pinned in `package.json`). With Corepack enabled:

```sh
corepack pnpm install --frozen-lockfile
corepack pnpm dev
```

Before opening a pull request, run:

```sh
corepack pnpm check
corepack pnpm format
corepack pnpm build
corepack pnpm audit
```

Tailwind CSS 4 uses its Vite plugin with explicit compatibility styles in `src/styles/global.css` to retain the production appearance. It requires Safari 16.4+, Chrome 111+, or Firefox 128+. TypeScript 6 is retained because `@astrojs/check` does not yet support TypeScript 7.

### About View Transitions

View Transitions is a browser mechanism to animate between DOM states, learn more in these links:

- Astro Documentation: https://docs.astro.build/en/guides/view-transitions/
- MDN Documentation: https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API

#### Browser Support

Same-document View Transitions are Baseline 2025: Chrome/Edge 111+, Safari/iOS 18+ and Firefox 144+. In older browsers, Astro's `<ClientRouter />` falls back to a simulated animation, so navigation still works. See https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API#browser_compatibility

## License

MIT — see [LICENSE](LICENSE).
