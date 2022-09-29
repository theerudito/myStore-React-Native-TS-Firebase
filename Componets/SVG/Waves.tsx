/* eslint-disable */
import {StyleSheet, View, Image} from 'react-native';
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
    zIndex: -1,
    marginTop: '-10%',
  },
  button: {
    zIndex: -1,
    marginTop: '10%',
    width: '100%',
    height: '100%',
  },
  container: {
    width: '100%',
    height: '10%',
    resizeMode: 'contain',
  },
});

export const TopWave = () => {
  return (
    <View style={styles.container}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style={styles.top}>
        <Path
          fill="#09f"
          d="m0 224 48 10.7C96 245 192 267 288 245.3 384 224 480 160 576 122.7 672 85 768 75 864 112s192 123 288 128 192-69 240-106.7l48-37.3V0H0Z"
        />
      </Svg>
    </View>
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

export const WaveTOP = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../Images/Controls/wave-top.png')} />
    </View>
  );
};

export const WaveButton = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../Images/Controls/wave-button.png')} />
    </View>
  );
};
