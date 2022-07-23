type RootStackParamList = {
  SplashScreen: undefined;
  OnboardingScreen: undefined;
};

type SplashScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SplashScreen'
>;

type OnboardingScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'OnboardingScreen'
>;
