# Metafy SVG

![vercel-metafy](https://vercelbadge.vercel.app/api/xiaoluoboding/metafy-svg)

> Easily crawl a website's metadata and generate an SVG as a service.

## Render In README.md

### Preview

|    Page Type     |                                   Light Mode                                   |                                   Dark Mode                                   |
| :--------------: | :----------------------------------------------------------------------------: | :---------------------------------------------------------------------------: |
|  bookmark.style  |  ![](https://metafy-svg.vercel.app/api?url=https://bookmark.style&mode=light)  |  ![](https://metafy-svg.vercel.app/api?url=https://bookmark.style&mode=dark)  |
| tech-stack.tools | ![](https://metafy-svg.vercel.app/api?url=https://tech-stack.tools&mode=light) | ![](https://metafy-svg.vercel.app/api?url=https://tech-stack.tools&mode=dark) |

### Code

```markdown
[![onetab.group](https://metafy-svg.vercel.app/api?url=https://onetab.group&mode=light)](https://onetab.group)
```

## Usage

Enter a valid `$URL` as params

```bash
curl https://metafy-svg.vercel.app/api?url=$URL
```

## Example

### Input

```bash
curl https://metafy-svg.vercel.app/api?url=https://onetab.group&mode=light
```

### Output

[![onetab.group](https://metafy-svg.vercel.app/api?url=https://onetab.group&mode=light)](https://onetab.group)

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
