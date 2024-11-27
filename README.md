# Carlton's Tool Using Electron JS

## Code History

Create the code in this repo is based on the following article.

- https://www.electronforge.io/guides/framework-integration/react-with-typescript
- https://blog.saeloun.com/2023/02/24/integrate-tailwind-css-with-electron/

## Creation History

```bash
npm init electron-app@latest ccaj-tools-gui -- --template=webpack-typescript
cd ccaj-tools-gui
npm install --save react react-dom
npm install --save-dev @types/react @types/react-dom
```

Add tailwindcss:

```bash
npm i --save-dev tailwindcss postcss-loader autoprefixer
```
