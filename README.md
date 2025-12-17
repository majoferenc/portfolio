## My Portfolio Next.js App


### Prerequsites
Install Bun Javascript runtime: https://bun.com/docs/installation#package-managers

### Run app in dev mode
First, run the development server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Test Prod build

```bash
bun add -g serve
bun run build
serve out -s -l 8080
```
