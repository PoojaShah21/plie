import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  StatusBar,
} from 'react-native';
import BaseSetting from '../../config/setting';
import {getApiDataProgress} from '../../utils/apiHelper';
import actions from '../../redux/auth/actions';
import {useDispatch, useSelector} from 'react-redux';
import CCard from '../../components/CCard';
import styles from './styles';
import BaseColor from '../../config/colors';

const Events = ({navigation, route}) => {
  const [loading, setLoading] = useState(false);
  const [eventsData, setEventsData] = useState([]);
  const {toggleFavorite} = actions;
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.auth.favorites);
  const userData = useSelector(state => state.auth.userData);

  useEffect(() => {
    getEventsList();
  }, []);

  const getEventsList = async () => {
    try {
      setLoading(true);
      const response = await getApiDataProgress(
        BaseSetting.endpoints.eventList,
        'Post',
        {},
      );

      console.log('responeventtse===', response);
      if (response.success) {
        console.log('response', response?.data);
        setEventsData(response?.data?.events);
      } else {
        console.log('error events', response?.message);
      }
      setLoading(false);
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: error?.message,
      });
      setLoading(false);
    }
  };

  const events = [
    {
      title: 'ADICTO: Berlin Festival',
      date: '24.02.2022 - 26.02.2022',
      price: '€40 - €100',
      location: 'Berlin, Germany',
      tags: ['Workshop', 'Bachata'],
      image: require('../../assets/google.png'),
    },
    {
      title: 'Bachata: Open level',
      date: '27.02.2022 @8pm',
      price: '€12',
      location: 'Berlin, Germany',
      tags: ['Course', 'Bachata'],
      image: require('../../assets/google.png'),
    },
    {
      title: 'SSD Rovinj 2022',
      date: '07.06.2022 - 13.06.2022',
      price: '€85 - €450',
      location: 'Rovinj, Croatia',
      tags: ['Festival', 'Bachata'],
      image: require('../../assets/google.png'),
    },
    {
      title: 'Berlin Sensual Nights',
      date: '21.02.2022 21:00 - 04:00',
      price: '€30 - €100',
      location: 'Berlin, Germany',
      tags: ['Party', 'Bachata', 'Salsa', 'Kizz'],
      image: require('../../assets/google.png'),
    },
    {
      title: 'Salsa & Bachata Night',
      date: '05.03.2022 | 19:00 - 01:00',
      price: '',
      location: 'Berlin, Germany',
      tags: ['Course', 'Party', 'Bachata', 'Salsa'],
      image: require('../../assets/google.png'),
    },
    {
      title: 'Soda Social Club - Salsa, Bachata',
      date: '06.03.2022 | 19:00 - 02:00',
      price: '',
      location: 'Berlin, Germany',
      tags: ['Party', 'Bachata', 'Salsa', 'Kiz'],
      image: require('../../assets/google.png'),
    },
  ];

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
        data={eventsData}
        keyExtractor={item => item.event_id}
        renderItem={({item}) => {
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

export default Events;
