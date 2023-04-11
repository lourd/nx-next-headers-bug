# Nx - Next.js missing custom headers for public/ files bug reproduction

## Execution

- `npm install`
- `npm run build regression-repro`
- `npm test regression-repro-e2e`

This will fail due to a missing header value for the `test.txt` file.
