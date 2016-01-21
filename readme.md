# tachyons-border-widths 2.0.0

Border width CSS module for Tachyons

#### Stats

343 | 24 | 24
---|---|---
bytes | selectors | declarations

## Installation

#### With [npm](https://npmjs.com)

```
npm install --save-dev tachyons-border-widths
```

#### With Git

```
git clone https://github.com/tachyons-css/tachyons-border-widths
```

## Usage

#### Using with [PostCSS](https://github.com/postcss/postcss)

Import the css module

```css
@import "tachyons-border-widths";
```

Then process the CSS using the [`tachyons-cli`](https://github.com/tachyons-css/tachyons-cli)

```sh
$ npm i -g tachyons-cli
$ tachyons-cli path/to/css-file.css > dist/t.css
```

#### Using the CSS

The built CSS is located in the `css` directory. It contains an unminified and minified version.
You can either cut and paste that css or link to it directly in your html.

```html
<link rel="stylesheet" href="path/to/module/css/tachyons-border-widths">
```

#### Development

The source CSS files can be found in the `src` directory.
Running `$ npm start` will process the source CSS and place the built CSS in the `css` directory.

## The CSS

```css
/*

   BORDER WIDTHS

   Base:
     bw = border-width

   Modifiers:
     0 = 0 width border
     1 = 1st step in border-width scale
     2 = 2nd step in border-width scale
     3 = 3rd step in border-width scale
     4 = 4th step in border-width scale
     5 = 5th step in border-width scale

   Media Query Extensions:
     -ns = not-small
     -m  = medium
     -l  = large

*/
.bw0 { border-width: 0; }
.bw1 { border-width: .125rem; }
.bw2 { border-width: .25rem; }
.bw3 { border-width: .5rem; }
.bw4 { border-width: 1rem; }
.bw5 { border-width: 2rem; }
@media screen and (min-width: 48em) {
 .bw0-ns { border-width: 0; }
 .bw1-ns { border-width: .125rem; }
 .bw2-ns { border-width: .25rem; }
 .bw3-ns { border-width: .5rem; }
 .bw4-ns { border-width: 1rem; }
 .bw5-ns { border-width: 2rem; }
}
@media screen and (min-width: 48em) and (max-width: 64em) {
 .bw0-m { border-width: 0; }
 .bw1-m { border-width: .125rem; }
 .bw2-m { border-width: .25rem; }
 .bw3-m { border-width: .5rem; }
 .bw4-m { border-width: 1rem; }
 .bw5-m { border-width: 2rem; }
}
@media screen and (min-width: 64em) {
 .bw0-l { border-width: 0; }
 .bw1-l { border-width: .125rem; }
 .bw2-l { border-width: .25rem; }
 .bw3-l { border-width: .5rem; }
 .bw4-l { border-width: 1rem; }
 .bw5-l { border-width: 2rem; }
}
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## Authors

* [mrmrs](http://mrmrs.io)
* [johno](http://johnotander.com)

## License

MIT

