## Test

1) `yarn ngc -p tsconfig.json`
2) `yarn ngc -p tsconfig-with-tsickle.json`
3) `node dist-no-tsickle/index.js`
    (fails also in SSR unless `HTMLElement` is globally provided in a non-browser environment)
4) `node dist-with-tsickle/index.js` (works)