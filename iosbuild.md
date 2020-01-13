Install the xcode command line tools
   xcode-select --insatall

Open xcode and create the development team and signing code.
  Open xcode -> preferences -> accounts

Check the simulator in 
    xcode -> window -> devices & Simulators

install ios-sim & ios-deploy
    npm install -g ios-sim ios-deploy

Add ios platform to your app
   ionic cordova prepare ios

Open the platforms/ios folder in xcode
Then run the app from the xcode in simulator