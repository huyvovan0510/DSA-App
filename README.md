# DSA-App using ReNative v0.34.0

Welcome to the DSA-App project! This README file will guide you through the setup and build instructions to get started with the project.

## Platform Support

- iOS
- Android
- Web
- tvOS
- Android TV

Here is the result of our DSA-App:

![DSA-App Result](https://im.ge/i/Screenshot-2024-03-17-at-6-22-05PM.RPKNqP)

## Required Setup

Before you begin, please ensure that you have the following dependencies installed on your system:

- [Android Studio](https://developer.android.com/studio)
- [Xcode](https://developer.apple.com/xcode/)
- [Node.js](https://nodejs.org/) (version > 16)
- [Ruby](https://www.ruby-lang.org/) (version >= 3.2.1)

## Build Instructions

To build the DSA-App project, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/DSA-App.git
   ```

2. Navigate to the project directory:

   ```bash
   cd DSA-App
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the following command to build the application:

   ```bash
   rnv run -p [Platform]
   ```

   Replace `[Platform]` with the desired platform (e.g., `ios`, `android`, `web`, `tvos`, `androidtv`).

5. For iOS, Android, tvOS, and Android TV platforms, after running the build script, you can use Xcode and Android Studio to further build and run the application on respective platforms.

## Additional Notes

- Ensure that you have proper permissions and configurations set up in Xcode and Android Studio for building and running the application on iOS and Android platforms respectively.
- For more detailed instructions and troubleshooting, refer to the documentation provided by ReNative and the official documentation of each platform (iOS, Android, Web, tvOS, Android TV).
