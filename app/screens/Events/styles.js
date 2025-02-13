import {Dimensions, StyleSheet} from 'react-native';
import BaseColor from '../../config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BaseColor.lightWhite,
  },
  header: {
    padding: 20,
    backgroundColor: BaseColor.white,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  subGreeting: {
    color: BaseColor.gray,
    marginTop: 5,
  },
  eventList: {
    padding: 15,
  },
  emptyCon: {
    height: Dimensions.get('window').height / 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: BaseColor.black,
  },
});
export default styles;
