# tachyons-border-widths
1.1.0

Performance-first css module for setting border-widths..

## Install
```
npm install --save-dev tachyons-border-widths
```

or download the css on github and include in your project:

```
git clone git@github.com:mrmrs/tachyons-border-widths
```

## The Code
```
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

## Author

[mrmrs](http://mrmrs.io)

## License

The MIT License (MIT)

Copyright (c) 2015 @mrmrs

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

