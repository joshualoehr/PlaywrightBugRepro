# Playwright Bug Repro

This branch reproduces a bug introduced in an unknown Playwright version which causes the webkit browser on MacOS to ignore padding.

**Chromium (correct):**

![Chromium correct screenshot](/test/test.spec.js-snapshots/my-test-chromium-darwin.png)

**Firefox (correct):**

![Firefox correct screenshot](/test/test.spec.js-snapshots/my-test-firefox-darwin.png)

**Webkit (incorrect):**

![Webkit incorrect screenshot](/test/test.spec.js-snapshots/my-test-webkit-darwin.png)

## To Reproduce

Requires Node 12+

1. Clone this repo
1. (if necessary) `npm i -g yarn`
1. `yarn install`
1. `yarn test`