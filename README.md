# Getting Started with the LaunchDarkly React QR Demo

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Usage

Want to use GitHub Pages to publish your own copy of this? You've come to the right place!

### Duplicating the repository and creating a GitHub Page

1. Fork this repository
1. Clone the new repository to your local machine, cloud editor, or whatever
1. Run `npm install` in your local root directory of the project
    1. NOTE: Due to an [outstanding issue with Webpack and version 17+ of Node](https://stackoverflow.com/questions/69692842/error-message-error0308010cdigital-envelope-routinesunsupported), you must use Node version 16.X or below.
1. In your GitHub repository, go to Settings > Pages and create a GitHub Page. Copy the URL of your GitHub Page, for use in the next section.

### Modifying variables for your own usage

1. In `src/components/qrCode.js`, modify `QRURL` to be your github pages URL
1. In `package.json`, modify the "homepage" to point to your github pages URL
1. In `src/index.js`, modify `CLIENTKEY` to be your own LaunchDarkly client-side SDK key

### Flags used by the app

    * `reactBackgroundColor`: A **string** flag with `gray`, `purple`, `blue`, and `red` as string variations. 
    * `reactCustomerLogo`: A **string** flag with variations containing URLs of images.
    * `reactQRCode`: **boolean**
    * `reactParentBrand`: **boolean**
    * `reactChildHeaderLogo`: **boolean**
    * `reactChildToggle`: **boolean**
    * `reactShowCustomerLogo`: **boolean**
    * `reactShowHeart`: **boolean**

### Creating LaunchDarkly flags

The project [**React QR Demo**](https://app.launchdarkly.com/react-qr-demo/) exists on the LD Production account with all the necessary flags. You can add a new environment for yourself.

If you want to create a new project with all the right flags, then you can either use the LaunchDarkly Terraform integration to set all the flags up in one go (see below), or do it manually using the list above.

#### Creating flags with Terraform

1. Ensure that you have:
   1. An empty LaunchDarkly project, ready for some funky fresh flags
   2. An API access token with `Writer` permissions. Go to the [Authorizations](https://app.launchdarkly.com/settings/authorization) page to create it.
   3. Terraform installed
1. See the `.tfvars.example` file in the root directory? Rename it to `.tfvars`.
1. Then edit the `.tfvars` file, replacing the `access_token` and `project_key` values.
1. Run: `terraform plan -var-file=".tfvars"`
1. If that ran with no errors, then run: `terraform apply -var-file=".tfvars"`
1. Go enjoy your lovely new flags!

### Testing

1. To test that it's working locally, run `npm start` in the root directory of your project
1. On your LaunchDarkly dashboard, try turning the `reactQRCode` flag on and off, and serve different colors in the `reactBackgroundColor` flag

### Deploying

1. When you're ready, `npm run deploy` to deploy to a new `gh-pages` branch of your repository
1. On your GitHub repository, go to Settings > Pages and ensure you're using the `gh-pages` branch in the `root` directory
