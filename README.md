# Gatsby Partition Example

This repository includes a simplified example of a Gatsby site partitioned into
two build assets based on a content type and URL path.

In order to be able to share common functionality across Gatsby sites (or in this case partitions,) this example uses [Gatsby themes](https://www.gatsbyjs.com/docs/themes/). The use of a Gatsby theme will make it possible to share configuration (including data sourcing) and components across each of these partitioned sites. The sites themselves would be based on a custom [Gatsby starter](https://www.gatsbyjs.com/docs/creating-a-starter/) in order to simplify the process for creating new partitioned sites.

## Project Structure

/themes
	/gg-theme
/sites
	/articles
	/festivals
/mock-data
/node_modules
package.json

## Yarn Workspaces

Gatsby themes are often [used in combination with Yarn workspaces](https://www.gatsbyjs.com/blog/2019-05-22-setting-up-yarn-workspaces-for-theme-development/) in order to simplify local development.

To view the 'articles' site run:

`yarn run develop:articles`

or:

`yarn run build:articles`
`yarn run serve:articles`

To view the 'festivals' site run:

`yarn run develop:articles`

or

`yarn run build:festivals`
`yarn run serve:festivals`

## Configuration

Configuration and components can be shared across sites by using a Gatsby theme.

Each site uses `gg-theme` as a dependency and passes a `type` configuration to the theme. 
This type is used to determine which content to source for each partitioned site.

```js
module.exports = {
  plugins: [
    { resolve: `gg-theme`, options: { type: 'articles'} }
  ],
}
```

This example is simple, but is intended to demonstrate how a theme can respond to configuration
options from a consuming site.

## Component Shadowing

Within each site, components can be overridden with an approach called [shadowing](https://www.gatsbyjs.com/blog/2019-04-29-component-shadowing/).
The card component in `sites/festivals/src/gg-theme/components/card.js` overrides the `Card` component from the `gg-theme` package in order to demonstrate this concept.

This approach should be used sparingly - using the default component from the theme
will lead to more consistency and is often a better option.

---

<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Starter for creating a Gatsby Theme workspace
</h1>

```shell
gatsby new my-theme https://github.com/gatsbyjs/gatsby-starter-theme-workspace
cd my-theme
yarn workspace example develop
```

## Layout

```text
.
├── README.md
├── gatsby-theme-minimal
│   ├── README.md
│   ├── gatsby-config.js
│   ├── index.js
│   └── package.json
├── example
│   ├── README.md
│   ├── gatsby-config.js
│   ├── package.json
│   └── src
├── package.json
└── yarn.lock

3 directories, 10 files
```

### `gatsby-theme-minimal`

This directory is the theme package itself. You should rename this at
some point to be `gatsby-theme-{my-theme-name}`. Also change the
`package.json` name field and the corresponding dependency in the
example directory's `package.json`/`gatsby-config.js` to match the chosen name.

- `gatsby-theme-minimal/`
  - `gatsby-config.js`: An empty gatsby-config that you can use as a starting point for building functionality into your theme.
  - `index.js`: Since themes also function as plugins, this is an empty file that
    gatsby needs to use this theme as a plugin.
  - `package.json`: The dependencies that your theme will pull in when people install it. `gatsby` should be a `peerDependency`.

### `example`

This is an example usage of your theme. It should look the same as the
site of someone who installed and used your theme from npm.

- `example/`
  - `gatsby-config.js`: Specifies which theme to use and any other one-off config a site might need.
  - `src/`: Source code such as one-off pages or components that might live in
    a user's site.

You can run the example with:

```shell
yarn workspace example develop
```

## 🚀 Quick start (Gatsby Cloud)

Deploy this starter with one click on [Gatsby Cloud](https://www.gatsbyjs.com/cloud/):

[<img src="https://www.gatsbyjs.com/deploynow.svg" alt="Deploy to Gatsby Cloud">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-starter-theme-workspace)
