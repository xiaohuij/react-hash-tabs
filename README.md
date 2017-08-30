# react-hash-tabs [![Build Status](https://travis-ci.org/xiaohuij/react-hash-tabs.svg?branch=master)](https://travis-ci.org/xiaohuij/react-hash-tabs) [![npm](https://img.shields.io/npm/v/react-hash-tabs.svg)](https://www.npmjs.com/package/react-hash-tabs)

Friendly for server-side rendering and SEO

## Why React-hash-tabs

|                    | *Rendering* | *Hash tag* |
| ---------------- | :-------------: | :-----: |
| **React-hash-tabs**    | Render all but only display selected tab | support trailing-hash |
| **Other choices**   | Render only selected tab             |   No |

## Installing

```bash
yarn add react-hash-tabs
```

You can also still use npm

```bash
npm install react-hash-tabs --save
```

Or use directly in your html as UMD component

```html
<script src="https://unpkg.com/react-hash-tabs@0.0.1/dist/react-hash-tabs.min.js" />
```

## Run demo

```js
yarn start
```
Or
```bash
npm run start
```

Go to http://localhost:8080

## Basic Usage

```js
import HashTabs from 'react-hash-tabs';

const tabs = [
  { name: 'Tab One', hash: 'one', content: <Component /> },
  { name: 'Tab Two', hash: 'two', content: 'text content' }
]

const enableHash = false

const App = () => (
  <div>
    <HashTabs isHash={enableHash} tabs={tabs} />
  </div>
)
```

## Components

React-hash-tabs has only 1 component.

### &lt;HashTabs /&gt;

#### isHash: `boolean`

> default: `true`

`isHash` is a switch to decide whether adding trailing-hash.

#### tabs: `Array<{[name]:String, [hash]:String, [content]: Node}>`

> default: []

`tabs` is an array of object each should have three keys: `name`, `hash` and `content`.
`name` is tab name, `hash` is related hash name, while `content` is tab content which could be raw text or react component.

## Styling

React-hash-tabs provides default style, which could be overwritten as per design.

Styles is implemented by SASS, which is accessible from

```scss
@import '../../path/to/node_modules/react-hash-tabs/src/index.scss';
```

## License

MIT

> Reference https://github.com/reactjs/react-tabs
