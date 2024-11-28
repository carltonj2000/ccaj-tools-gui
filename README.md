# Carlton's Tool Using Electron JS

Could not get "@/" working for Shadcn/ui so change to "../.." in button component.

## Code History

Create the code in this repo is based on the following article.

- https://www.electronforge.io/guides/framework-integration/react-with-typescript
- https://blog.saeloun.com/2023/02/24/integrate-tailwind-css-with-electron/
- https://ui.shadcn.com/docs/installation/manual

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

Add shadcn:

```bash
npm install tailwindcss-animate class-variance-authority clsx tailwind-merge lucide-react
```
