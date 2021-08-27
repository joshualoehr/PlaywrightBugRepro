# Playwright Bug Repro

This repo reproduces a bug introduced in @playwright/test 1.14. This version added a dependency on `jest-matchers-util` without specifying it in the `package.json`, which causes Yarn's PnP to throw the following error:

```
/Users/jloehr/git/PlaywrightBugRepro/.pnp.cjs:11641
    throw firstError;
    ^

Error: @playwright/test tried to access jest-matcher-utils, but it isn't declared in its dependencies; this makes the require call ambiguous and unsound.

Required package: jest-matcher-utils
Required by: @playwright/test@npm:1.14.1 (via /Users/jloehr/git/PlaywrightBugRepro/.yarn/unplugged/@playwright-test-npm-1.14.1-07404d0924/node_modules/@playwright/test/lib/test/matchers/)

Require stack:
- /Users/jloehr/git/PlaywrightBugRepro/.yarn/unplugged/@playwright-test-npm-1.14.1-07404d0924/node_modules/@playwright/test/lib/test/matchers/toBeTruthy.js
- /Users/jloehr/git/PlaywrightBugRepro/.yarn/unplugged/@playwright-test-npm-1.14.1-07404d0924/node_modules/@playwright/test/lib/test/matchers/matchers.js
- /Users/jloehr/git/PlaywrightBugRepro/.yarn/unplugged/@playwright-test-npm-1.14.1-07404d0924/node_modules/@playwright/test/lib/test/expect.js
- /Users/jloehr/git/PlaywrightBugRepro/.yarn/unplugged/@playwright-test-npm-1.14.1-07404d0924/node_modules/@playwright/test/lib/test/testType.js
- /Users/jloehr/git/PlaywrightBugRepro/.yarn/unplugged/@playwright-test-npm-1.14.1-07404d0924/node_modules/@playwright/test/lib/test/index.js
- /Users/jloehr/git/PlaywrightBugRepro/.yarn/unplugged/@playwright-test-npm-1.14.1-07404d0924/node_modules/@playwright/test/index.js
- /Users/jloehr/git/PlaywrightBugRepro/.yarn/unplugged/@playwright-test-npm-1.14.1-07404d0924/node_modules/@playwright/test/lib/cli/driver.js
- /Users/jloehr/git/PlaywrightBugRepro/.yarn/unplugged/@playwright-test-npm-1.14.1-07404d0924/node_modules/@playwright/test/lib/cli/cli.js
    at Function.external_module_.Module._resolveFilename (/Users/jloehr/git/PlaywrightBugRepro/.pnp.cjs:11640:55)
    at Function.external_module_.Module._load (/Users/jloehr/git/PlaywrightBugRepro/.pnp.cjs:11439:48)
    at Module.require (internal/modules/cjs/loader.js:849:19)
    at require (internal/modules/cjs/helpers.js:74:18)
    at Object.<anonymous> (/Users/jloehr/git/PlaywrightBugRepro/.yarn/unplugged/@playwright-test-npm-1.14.1-07404d0924/node_modules/@playwright/test/lib/test/matchers/toBeTruthy.js:8:25)
    at Module._compile (internal/modules/cjs/loader.js:956:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:973:10)
    at Module.load (internal/modules/cjs/loader.js:812:32)
    at Function.external_module_.Module._load (/Users/jloehr/git/PlaywrightBugRepro/.pnp.cjs:11489:14)
    at Module.require (internal/modules/cjs/loader.js:849:19)
```

## To Reproduce

Requires Node 12+

1. Clone this repo
1. (if necessary) `npm i -g yarn`
1. `yarn install`
1. `yarn test`