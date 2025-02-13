import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';
import BaseColor from '../../config/colors';

const CCard = props => {
  const {
    image = '',
    title = '',
    date = '',
    location = '',
    price = '',
    array = [],
    isFavorite = false,
    onToggleFavorite = () => {},
  } = props;

  return (
    <TouchableOpacity style={styles.eventCard}>
      <Image
        source={{
          uri: !_.isEmpty(image) ? image : '',
        }}
        style={styles.eventImage}
      />
      <View style={styles.eventDetails}>
        <TouchableOpacity style={styles.arrowContainer}>
          <FontAwesome5 name="arrow-right" color={BaseColor.black} size={16} />
        </TouchableOpacity>
        <View>
          <Text style={styles.eventTitle}>{title}</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.eventDate}>{date}</Text>
            <Text style={styles.eventLocation}>{location}</Text>
          </View>

          <Text style={styles.eventPrice}>{price}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={styles.tagContainer}>
            {array?.map((tag, index) => (
              <Text key={index} style={styles.tag}>
                {tag}
              </Text>
            ))}
          </View>
          <View style={styles.eventActions}>
            <TouchableOpacity onPress={() => console.log('Share event')}>
              <Icon
                name="share-social-outline"
                size={20}
                color={BaseColor.gray}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={item => onToggleFavorite(item)}>
              <Icon
                name={isFavorite ? 'heart' : 'heart-outline'}
                size={20}
                color={isFavorite ? BaseColor.primary : BaseColor.secondary}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CCard;
