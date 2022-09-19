import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginVertical: 5,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
  },
  image: {
    width: 70,
    height: 70,
    marginLeft: 10,
    resizeMode: 'contain',
  },
  inner_container: {
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    marginLeft: 10,
    fontWeight: 'bold',
  },
});