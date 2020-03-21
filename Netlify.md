# Instal Global

`npm install netlify-cli -g`

## Login

`netlify login`

## Deploy

Locate on this folder: ionic-app

# PROD

```bash
yarn build && netlify deploy --prod --dir=build --site=04c6c143-132a-4c68-bbdd-32812bffee59 --message="added service workers"
```

# DEV

```bash
yarn build &&
netlify deploy --dir=build --site=04c6c143-132a-4c68-bbdd-32812bffee59 --message="init"
```
