<h3 align="center">ncm-preset-package</h3>
<p align="center" style="margin-bottom: 2em;">📦 [package] config standard and template used by @opbi/ncm</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@opbi/ncm-preset-package">
    <img alt="npm" src="https://img.shields.io/npm/v/@opbi/ncm-preset-package.svg">
  </a>
  <a href="https://circleci.com/gh/opbi/workflows/ncm-preset-package">
    <img alt="CI" src="https://img.shields.io/circleci/project/github/opbi/ncm-preset-package/master.svg">
  </a>
  <a href="https://coveralls.io/github/opbi/ncm-preset-package?branch=master">
    <img alt="Coveralls" src="https://img.shields.io/coveralls/github/opbi/ncm-preset-package/master.svg">
  </a>
  <a href="https://inch-ci.org/github/opbi/ncm-preset-package">
    <img alt="inch-ci" src="http://inch-ci.org/github/opbi/ncm-preset-package.svg?branch=master&style=shields">
  </a>
  <a href="https://github.com/semantic-release/semantic-release">
    <img alt="semantic-release" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg">
  </a>
</p>

<p align="center">
  <a href="https://snyk.io/test/github/opbi/ncm-preset-package">
    <img alt="Known Vulnerabilities" src="https://snyk.io/test/github/opbi/ncm-preset-package/badge.svg">
  </a>
  <a href="https://app.fossa.io/projects/git%2Bgithub.com%2Fopbi%2Fncm-preset-package?ref=badge_shield" alt="FOSSA Status">     <img src="https://app.fossa.io/api/projects/git%2Bgithub.com%2Fopbi%2Fncm-preset-package.svg?type=shield"/>
  </a>
  <a href="https://david-dm.org/opbi/ncm-preset-package">
    <img alt="Dependencies" src="https://img.shields.io/david/opbi/ncm-preset-package.svg">
  </a>
  <a href="https://david-dm.org/opbi/ncm-preset-package?type=dev">
    <img alt="devDependencies" src="https://img.shields.io/david/dev/opbi/ncm-preset-package.svg">
  </a>
  <a href="https://scrutinizer-ci.com/g/opbi/ncm-preset-package/?branch=master">
    <img alt="Scrutinizer Code Quality" src="https://img.shields.io/scrutinizer/g/opbi/ncm-preset-package.svg">
  </a>
</p>

---

### Purpose

#### Model of Package

This serves as the flagship and standard of how a package component should be developed, tested, built, published, documentated and shared. It is the mother and ultimate source of truth of how different tools and services are configured to model the process and standard of shipping a package.

#### Lord of Tooling

Any idea and optimisation should go into this repo, getting tested and reviewed, and populated to all packages through [ncm](https://github.com/opbi/ncm). It also serves as a single source of place to test any new development tool using its pipeline, and any niche programming edge case that may break the build configuration should be included in the src code here to be tested with any future tooling update. There should be no business logics here, and anything else that can be estabilished as a standard should be prooved here.

### Current Standard

- Initialisation: @opbi/ncm
- Development: yarn, babel, eslint, prettier, flow-typed, jsdoc, jest
- Commit: husky, commitlint
- Build & Publish: semantic-release, CircleCI, Coveralls, Scrutiniser, Snyk, Fossa, David, InchCI, Renovate
- Guide & Docs: documentation.js, gitbook, gh-pages, .md
- Deprecation: (@opbi/ncm)


### How to Use

### License
[MIT](License)
