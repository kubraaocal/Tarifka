import React from 'react';
import {
  Text,
  View,
  Image,
  Button,
  Linking,
  TouchableOpacity,
} from 'react-native';
import styles from './DetailsCard.style';

const DetailCard = ({details}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: details.strMealThumb}} />
      <View style={styles.inner_container}>
        <Text style={styles.text}>{details.strMeal}</Text>
        <Text style={styles.country}>{details.strArea}</Text>
        <Text style={styles.description}>{details.strInstructions}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            Linking.openURL(details.strYoutube);
          }}>
          <Text style={styles.button_text}>Watch on Youtube</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailCard;
