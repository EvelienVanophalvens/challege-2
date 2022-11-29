import { StyleSheet, Text, View, TouchableNativeFeedback} from 'react-native';

const bookTile = (props) => {
    return  (
        <View style={styles.bookTile}>
        <Text style={styles.bookTitle}>{props.title}</Text>
        <Text>{props.author}</Text>
        <View style={styles.bookDescription}>
          <Text>{props.discription}</Text>
        </View>
        <View style={styles.bookDetail}>
          <Text>{props.isbn}</Text>
          <TouchableNativeFeedback>
            <View>
                <Text style={styles.button}>READ</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    );
 }

 const styles = StyleSheet.create({
    bookTitle:{
      fontSize: 20,
      fontWeight: 'bold',
    },
    bookDescription:{
      marginVertical: '2%',
  
    },
    bookDetail:{
      display: 'flex',
      marginVertical: '2%',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    button:{
      paddingHorizontal: '2%',
      paddingVertical: '1%',
      borderColor: '#000',
      borderWidth: 1,
      borderStyle: 'solid',
    }
  });
  



 export default bookTile;