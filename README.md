# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Usage

Want to use GitHub Pages to publish your own copy of this? You've come to the right place!

### Duplicating the repository
1. [Duplicate this repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/duplicating-a-repository) into your own GitHub repo
1. Run `npm install` in your local root directory of the project

### Modifying variables for your own usage
1. In `src/components/qrCode.js`, modify `QRURL` to be your github pages URL
1. In `package.json`, modify the "homepage" to point to your github pages URL
1. In `src/index.js`, modify `CLIENTKEY` to be your own LaunchDarkly client-side SDK key

### Creating LaunchDarkly flags
1. You can either use the LaunchDarkly Terraform integration with `main.tf` in the root directory, replacing the `access_token` and `project_key` values. (Careful, project_key appears twice!)
1. Alternatively, you can manually create the flags in your project. Flag one needs a key of `reactBackgroundColor`, with `gray`, `purple`, `blue`, and `red` as string variations. Flag two is a boolean flag, with a key of `reactQRCode`.

### Testing
1. To test that it's working locally, run `npm start` in the root directory of your project
1. On your LaunchDarkly dashboard, try turning the `reactQRCode` flag on and off, and serve different colors in the `reactBackgroundColor` flag

### Deploying
1. When you're ready, `npm run deploy` to deploy to a new `gh-pages` branch of your repository
1. On your GitHub repository, go to Settings > Pages and publish a Page using the `gh-pages` branch in the `root` directory