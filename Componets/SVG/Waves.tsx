/* eslint-disable */
import {StyleSheet} from 'react-native';
import Svg, {
  G,
  Path,
  Defs,
  RadialGradient,
  Stop,
  ClipPath,
} from 'react-native-svg';

const styles = StyleSheet.create({
  top: {
    zIndex: 4,
    marginTop: '-10%',
  },
  button: {
    zIndex: 2,
    marginTop: '-30%',
  },
});

export const TopWave = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      style={styles.top}>
      <Path
        fill="#09f"
        d="m0 224 48 10.7C96 245 192 267 288 245.3 384 224 480 160 576 122.7 672 85 768 75 864 112s192 123 288 128 192-69 240-106.7l48-37.3V0H0Z"
      />
    </Svg>
  );
};

export const ButtonWave = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      style={styles.button}>
      <Path
        fill="#09f"
        d="m0 224 48 10.7C96 245 192 267 288 245.3 384 224 480 160 576 122.7 672 85 768 75 864 112s192 123 288 128 192-69 240-106.7l48-37.3v224H0Z"
      />
    </Svg>
  );
};
