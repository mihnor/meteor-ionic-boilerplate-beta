App.info({
  name: 'Meteor Boilerplate + Ionic',
  description: 'AccountsEntry + Mailgun + Social Connections',
  author: 'Clelio de Paula',
  website: 'http://cleliodpaula.com',
  version: '0.0.1'
});

App.icons({
  'iphone': 'resources/icons/iphone.png',
  'iphone_2x': 'resources/icons/iphone_2x.png',
  'iphone_3x': 'resources/icons/iphone_3x.png',
  'ipad': 'resources/icons/ipad.png',
  'ipad_2x': 'resources/icons/ipad_2x.png',
  'android_ldpi': 'resources/icons/android_ldpi.png',
  'android_mdpi': 'resources/icons/android_mdpi.png',
  'android_hdpi': 'resources/icons/android_hdpi.png',
  'android_xhdpi': 'resources/icons/android_xhdpi.png'
});

App.launchScreens({
  'iphone': 'resources/splash/Default.png',
  'iphone_2x': 'resources/splash/Default_2x.png',
  'iphone5': 'resources/splash/Default-568h_2x.png',
  'iphone6': 'resources/splash/iPhone6_portrait_2x.png',
  'iphone6p_portrait': 'resources/splash/iPhone6_Plus_portrait_3x.png',
  'iphone6p_landscape': 'resources/splash/iPhone6_Plus_landscape_3x.png',
  'ipad_portrait': 'resources/splash/Default_ipad.png',
  'ipad_portrait_2x': 'resources/splash/Default_ipad_2x.png',
  'ipad_landscape': 'resources/splash/Default_ipad_landscape.png',
  'ipad_landscape_2x': 'resources/splash/Default_ipad_landscape_2x.png',
  'android_ldpi_portrait': 'resources/splash/android_ldpi_portrait.png',
  'android_ldpi_landscape': 'resources/splash/android_ldpi_landscape.png',
  'android_mdpi_portrait': 'resources/splash/android_mdpi_portrait.png',
  'android_mdpi_landscape': 'resources/splash/android_mdpi_landscape.png',
  'android_hdpi_portrait': 'resources/splash/android_hdpi_portrait.png',
  'android_hdpi_landscape': 'resources/splash/android_hdpi_landscape.png',
  'android_xhdpi_portrait': 'resources/splash/android_xhdpi_portrait.png',
  'android_xhdpi_landscape': 'resources/splash/android_xhdpi_landscape.png'
});

App.setPreference('StatusBarOverlaysWebView', true);
App.setPreference('StatusBarStyle', 'default');
