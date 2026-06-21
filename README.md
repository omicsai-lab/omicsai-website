# OmicsAI Website

React + Vite frontend for the OmicsAI academic lab website.

## Local development

```bash
npm run dev
```

## Production build

```bash
npm run build
```

## Docker (production)

```bash
docker build -t omicsai-website:local .
docker run --rm -p 8080:80 omicsai-website:local
```

## Routing note

The /agentic-causal/ path is handled by an external reverse proxy in production and is not served by this container.
