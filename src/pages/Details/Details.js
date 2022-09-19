import React, {useCallback} from 'react';
import {
  Alert,
  Image,
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  FlatList
} from 'react-native';
import Config from 'react-native-config';
import useFetch from '../../hooks/useFetch';

import Loading from '../../components/Loading';
import Error from '../../components/Error';
import styles from './Details.style';
import DetailsCard from '../../components/DetailsCard/';

const Details = ({route}) => {
  const {idMeal} = route.params;
  const {data, loading, error} = useFetch(`${Config.API_DETAIL_URL}${idMeal}`);

  const renderDetailItem = ({item}) => {
    return (
      <DetailsCard details={item} />
    );
  };

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <FlatList
      data={data.meals}
      keyExtractor={(item)=>item.idMeal}
      renderItem={renderDetailItem}
    />
  );
};

export default Details;

const OpenURLButton = ({url, children}) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      console.log('Hata');
    }
  }, [url]);

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.button_text}>{children}</Text>
    </TouchableOpacity>
  );
};
