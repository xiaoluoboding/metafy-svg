# Metafy SVG

![metafy-svg](https://vercelbadge.vercel.app/api/xiaoluoboding/metafy-svg)

> Easily crawl a website's metadata and generate SVG as a service.

## Render In README.md

You can render the bookmark.style card as a SVG in the GitHub README.md now.

### Code

```markdown
[![onetab.group](https://svg.bookmark.style/api?url=https://onetab.group&mode=light)](https://onetab.group)
```

### Preview

|  Card Style  |                                          Light Mode                                          |                                          Dark Mode                                          |
| :----------: | :------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: |
| Twitter Like |          ![](https://svg.bookmark.style/api?url=https://bookmark.style&mode=light)           |          ![](https://svg.bookmark.style/api?url=https://bookmark.style&mode=dark)           |
| Notion Like  | ![](https://svg.bookmark.style/api?url=https://tech-stack.tools&mode=light&style=horizontal) | ![](https://svg.bookmark.style/api?url=https://tech-stack.tools&mode=dark&style=horizontal) |

### Customize the gradient color

The hex color in the URL can not contain the `#` character, so you can write like this `#000000` to `000000`

#### Type

```ts
type GradidentColor = {
  formColor: string
  viaColor?: string
  toColor: string
}
```

#### URL

```bash
curl https://svg.bookmark.style/api?url=$URL&formColor=$FROM_COLOR&viaColor=$VIA_COLOR&toColor=$TO_COLOR
```

#### Demo without `viaColor`

```bash
https://svg.bookmark.style/api?url=https://onetab.group&mode=light&fromColor=fa4&toColor=a4f
```

![](https://svg.bookmark.style/api?url=https://onetab.group&mode=light&fromColor=fa4&toColor=a4f&style=horizontal)

#### Demo with `viaColor`

```bash
https://svg.bookmark.style/api?url=https://onetab.group&mode=light&fromColor=fa4&viaColor=4af&toColor=a4f
```

![](https://svg.bookmark.style/api?url=https://onetab.group&mode=light&fromColor=fa4&viaColor=4af&toColor=a4f&style=horizontal)

## Usage

Enter a valid `$URL` as params

```bash
curl https://svg.bookmark.style/api?url=$URL
```

## Types

```ts
type Params = {
  url: string
  mode?: 'light' | 'dark'
  style?: 'vertical' | 'horizontal'
  formColor?: string
  viaColor?: string
  toColor?: string
}
```

## Example

### Input

```bash
curl https://svg.bookmark.style/api?url=https://onetab.group&mode=light
```

### Output

[![onetab.group](https://svg.bookmark.style/api?url=https://onetab.group&mode=light)](https://onetab.group)

## Deploy your own instance

Deploy your `Metafy` on your own instance with one-click.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fxiaoluoboding%2Fmetafy-svg)

## Tech Stack

- [vercel](https://vercel.com/) - Develop. Preview. Ship. For the best frontend teams.
- [metascraper](https://metascraper.js.org/) - metascraper, easily scrape metadata from an article on the web.
- [typescript](https://www.typescriptlang.org/) - Typed JavaScript at Any Scale.
- [got](https://github.com/sindresorhus/got) - 🌐 Human-friendly and powerful HTTP request library for Node.js
- [html-escaper](https://github.com/WebReflection/html-escaper) - A simple module to escape/unescape common problematic entities.
- [esno](https://github.com/antfu/esno) - TypeScript / ESNext node runtime powered by esbuild

## License

MIT [xiaoluoboding](https://github.com/xiaoluoboding)
