import {StyleSheet} from 'react-native';
import BaseColor from '../../config/colors';

const styles = StyleSheet.create({
  eventCard: {
    backgroundColor: BaseColor.white,
    borderRadius: 15,
    marginBottom: 15,
    flexDirection: 'row',
    paddingLeft: 10,
    elevation: 5,
  },
  eventImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    alignSelf: 'center',
  },
  eventDetails: {
    flex: 1,
    paddingLeft: 10,
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  eventTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
    color: BaseColor.darkBlack,
  },
  eventDate: {
    color: BaseColor.primary,
    fontSize: 12,
    marginBottom: 2,
    fontWeight: 500,
  },
  eventPrice: {
    color: BaseColor.lightGray,
    fontSize: 11,
    marginBottom: 4,
    fontWeight: 500,
  },
  eventLocation: {
    color: BaseColor.gray,
    fontSize: 12,
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
  },
  tag: {
    fontSize: 12,
    color: BaseColor.gray,
    backgroundColor: BaseColor.lightWhite,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    overflow: 'hidden',
  },
  eventActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10,
    marginTop: 5,
    marginRight: 10,
  },
  arrowContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  arrow: {
    fontSize: 20,
    color: BaseColor.gray,
  },
});
export default styles;
