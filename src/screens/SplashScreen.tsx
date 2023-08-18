import React, {useEffect, useRef} from 'react';
import LottieView from 'lottie-react-native';

const SplashScreen = ({navigation}) => {
  const animationRef = useRef(null);

  useEffect(() => {
    if (animationRef.current) {
      animationRef.current.play();
    }
  }, []);

  return (
    <LottieView
      ref={animationRef}
      source={require('../../assets/lottie/splash.json')} // Replace with your animation path
      style={{flex: 1}}
      loop={false}
      onAnimationFinish={() => {
        // Navigate to your main app screen (or any other action you want) after the animation finishes
        navigation.replace('Home');
      }}
      testID="SplashScreen"
    />
  );
};

SplashScreen.displayName = 'SplashScreen';

export default SplashScreen;
