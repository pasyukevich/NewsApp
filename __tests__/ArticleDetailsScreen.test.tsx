import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import SplashScreen from '../src/screens/SplashScreen';

jest.mock('lottie-react-native', () => 'LottieView');

describe('SplashScreen', () => {
  it('renders correctly', () => {
    const {getByTestId} = render(
      <SplashScreen navigation={{replace: jest.fn()}} />,
    );
    expect(getByTestId('SplashScreen')).toBeTruthy();
  });

  it('navigates to Home screen after animation finishes', () => {
    const replaceMock = jest.fn();
    const {getByTestId} = render(
      <SplashScreen navigation={{replace: replaceMock}} />,
    );
    const lottieView = getByTestId('SplashScreen');
    fireEvent(lottieView, 'animationFinish');
    expect(replaceMock).toHaveBeenCalledWith('Home');
  });
});
