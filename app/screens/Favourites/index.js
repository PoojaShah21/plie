import React from 'react';
import {View, Text, SafeAreaView, FlatList, StatusBar} from 'react-native';
import actions from '../../redux/auth/actions';
import {useDispatch, useSelector} from 'react-redux';
import CCard from '../../components/CCard';
import styles from './styles';
import BaseColor from '../../config/colors';

const Favourites = ({navigation, route}) => {
  const {toggleFavorite} = actions;
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.auth.favorites);
  const userData = useSelector(state => state.auth.userData);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={BaseColor.white}
        translucent={true}
      />{' '}
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello {userData?.user?.usr_fname}!</Text>
        <Text style={styles.subGreeting}>Are you ready to dance?</Text>
      </View>
      <FlatList
        data={favorites}
        keyExtractor={item => item.event_name}
        renderItem={({item}) => {
          console.log('item', item);
          return (
            <CCard
              image={item?.event_url}
              title={item?.event_name}
              date={item?.readable_from_date}
              location={`${item?.city} ${item?.country}`}
              price={item?.event_price_from}
              array={item?.danceStyles}
              isFavorite={favorites.some(
                fav => fav.event_name === item.event_name,
              )}
              onToggleFavorite={() => dispatch(toggleFavorite(item))}
            />
          );
        }}
        contentContainerStyle={styles.eventList}
        ListEmptyComponent={
          <View style={styles.emptyCon}>
            <Text style={styles.emptyText}>No Data Found</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default Favourites;
