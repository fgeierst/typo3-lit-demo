# TYPO3 Lit Demo

- Demo how to scaffold Lit Web Components as building blocks for a TYPO3 frontend
- Based on GitLab TYPO3 Distribution

<img src="screenshot.png" alt="Browser screenshot of website. Two parts are highlighted, a lit webcomponent and a showlace component." width="300"/>

## Prerequisites
- Docker Desktop or Colima
- DDEV
- Mutagen needs to be enabled for HMR

## Local installation guide
    git clone https://github.com/fgeierst/typo3-lit-demo.git
    cd typo3-lit-demo
    ddev start
    ddev composer install
    ddev snapshot restore --latest
    ddev pnpm install
    ddev pnpm build:production

Login via https://typo3-lit-demo.ddev.site/typo3 using these credentials:

- Username: `admin`
- Password: `Password.1`

## Start Vite development server

    ddev vite-serve start

## Test the production build

    ddev vite-serve stop
    ddev pnpm build:production


## Lit web components

Stored in *packages/site-distribution/Resources/Public/Components*

```html
<typo3lit-header> <!-- ... --> </typo3lit-header>
```

### Component explorer

Preview and develop the components in isolation using mock data with [Storybook](https://storybook.js.org/docs/web-components/).

```
pnpm run storybook
```


## Shoelace web components

Imported in *assets/JavaScript/app.ts*

```html
    <sl-button href="#">Link Button</sl-button>
```



## Documentation

  * TYPO3 - https://docs.typo3.org/
  * DDEV - https://ddev.readthedocs.io/en/stable/
  * Vite AssetCollector - https://github.com/s2b/vite-asset-collector/tree/main
  * Vite - https://vitejs.dev/
  * LightningCSS - https://lightningcss.dev/
  * Lit - https://lit.dev/docs/
  * Shoelace https://shoelace.style/

