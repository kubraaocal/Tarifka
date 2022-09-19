import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import Config from 'react-native-config';
import styles from './Categories.style';
import CategoryCard from '../../components/CategoriesCard';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Categories = ({navigation}) => {
  const {data, loading, error} = useFetch(Config.API_URL);
  console.log("asdasdas"+Config.API_URL)
  const handleCategorySelect = strCategory => {
    navigation.navigate("Meals", {strCategory});
  };

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const renderCategoryItems = ({item}) => {
    return (
      <CategoryCard
        categories={item}
        onSelect={() => handleCategorySelect(item.strCategory)}
      />
    );
  };

  return (
    <FlatList
      style={styles.container}
      keyExtractor={data => data.idCategory}
      data={data.categories}
      renderItem={renderCategoryItems}
    />
  );
};

export default Categories;
