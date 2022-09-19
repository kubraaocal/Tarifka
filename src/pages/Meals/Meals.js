import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import Config from 'react-native-config';
import useFetch from '../../hooks/useFetch';
import MealsCard from '../../components/MealsCard';

import Loading from '../../components/Loading';
import Error from '../../components/Error';

import styles from './Meals.style';

const Meals = ({navigation, route}) => {
  const {strCategory} = route.params;
  const {data, loading, error} = useFetch(`${Config.API_MEALS_URL}${strCategory}`);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const handleMealSelect = idMeal => {
    navigation.navigate('Details', {idMeal});
  };

  const renderMealsItems = ({item}) => {
    return (
      <MealsCard meals={item} onSelect={() => handleMealSelect(item.idMeal)} />
    );
  };

  return (
    <FlatList
      style={styles.container}
      data={data.meals}
      keyExtractor={data => data.idMeal}
      renderItem={renderMealsItems}
    />
  );
};

export default Meals;
