# Getting Started with the LaunchDarkly React QR Demo

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Usage

Want to use GitHub Pages to publish your own copy of this? You've come to the right place!

### Duplicating the repository and creating a GitHub Page
1. Fork this repository
1. Run `npm install` in your local root directory of the project
1. In your GitHub repository, go to Settings > Pages and create a GitHub Page. Copy the URL of your GitHub Page, for use in the next section.

### Modifying variables for your own usage
1. In `src/components/qrCode.js`, modify `QRURL` to be your github pages URL
1. In `package.json`, modify the "homepage" to point to your github pages URL
1. In `src/index.js`, modify `CLIENTKEY` to be your own LaunchDarkly client-side SDK key

### Creating LaunchDarkly flags
1. You can either use the LaunchDarkly Terraform integration with `main.tf` in the root directory, replacing the `access_token` and `project_key` values. (Careful, project_key appears multiple times!)
1. Alternatively, you can manually create the flags in your project. You need the following flags:
    1. A string flag with a key of `reactBackgroundColor`, with `gray`, `purple`, `blue`, and `red` as string variations. 
    1. A string flag with a key of `reactCustomerLogo`, with string variations pointing to URLs of image.
    1. Boolean flag, with a key of `reactQRCode`.
    1. Boolean flag, with a key of `reactParentBrand`.
    1. Boolean flag, with a key of `reactChildHeaderLogo`.
    1. Boolean flag, with a key of `reactChildToggle`.
    1. Boolean flag, with a key of `reactShowCustomerLogo`.
    1. Boolean flag, with a key of `reactShowHeart`.

### Testing
1. To test that it's working locally, run `npm start` in the root directory of your project
1. On your LaunchDarkly dashboard, try turning the `reactQRCode` flag on and off, and serve different colors in the `reactBackgroundColor` flag

### Deploying
1. When you're ready, `npm run deploy` to deploy to a new `gh-pages` branch of your repository
1. On your GitHub repository, go to Settings > Pages and ensure you're using the `gh-pages` branch in the `root` directory
