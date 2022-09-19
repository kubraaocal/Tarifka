import {Dimensions, StyleSheet} from 'react-native';
const deviceSize = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    margin: 10,
  },
  image: {
    width: deviceSize.width - 20,
    height: deviceSize.height / 4,
    resizeMode: "cover",
    borderRadius: 25,
  },
  inner_container: {
    position: 'absolute',
    bottom: 0,
  },
  info_container: {
    backgroundColor: "black",
    opacity:0.8,
    width: deviceSize.width - 20,
    padding: 10,
    alignItems: 'flex-end',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  text: {
    fontSize: 25,
    color: "white",
    fontWeight: "900",
  },
});
