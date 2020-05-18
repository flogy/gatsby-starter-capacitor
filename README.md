# gatsby-starter-capacitor

**📱 Build blazing fast mobile apps with [Gatsby](https://www.gatsbyjs.org/) and [Capacitor](https://capacitor.ionicframework.com/)**

[![GitHub license](https://img.shields.io/github/license/flogy/gatsby-starter-capacitor)](https://github.com/flogy/gatsby-starter-capacitor/blob/master/LICENSE)

You want to build a blazing fast web app that can also be turned into a mobile app running on Android and iOS?

Then kick off your project with this boilerplate code. This starter ships with a default configuration of Gatsby combined with Capacitor, the spiritual successor to Apache Cordova and Adobe PhoneGap.

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the gatsby-starter-capacitor.

    ```shell
    # create a new Gatsby site using the gatsby-starter-capacitor starter
    gatsby new my-gatsby-capacitor-project https://github.com/flogy/gatsby-starter-capacitor
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-gatsby-capacitor-project/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    Open the `my-hello-world-starter` directory in your code editor of choice and edit `src/pages/index.ts`. Save your changes and the browser will update in real time!

1.  **Build and start app for Android.**

    Build the project and prepare it for Android (requires all dependencies installed as mentioned in the [Capacitor documentation](https://capacitor.ionicframework.com/docs/getting-started/dependencies/)).

    ```shell
    gatsby build
    npx cap update android
    npx cap copy android
    npx cap open android
    ```

    Start your app from Android Studio which should now be opened.

1.  **Build and start app for iOS.**

    Build the project and prepare it for iOS (requires all dependencies installed as mentioned in the [Capacitor documentation](https://capacitor.ionicframework.com/docs/getting-started/dependencies/)).

    ```shell
    gatsby build
    npx cap update ios
    npx cap copy ios
    npx cap open ios
    ```

    Start your app from Xcode which should now be opened.

## License

The [MIT License](LICENSE)


## Credits

The *gatsby-starter-capacitor* starter is maintained and sponsored by the Swiss web and mobile app development company [Florian Gyger Software](https://floriangyger.ch).
