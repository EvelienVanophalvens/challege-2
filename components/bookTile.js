import { StyleSheet, Text, View, TouchableNativeFeedback} from 'react-native';

import react, {useState} from 'react';


const bookTile = (props) => {
  
  const [shoppingCount, setCounter] = useState(0);

  function addBook (shoppingCount) {
    setCounter((currentCounter) => currentCounter + 1 );
    console.log (shoppingCount);
  }


    return  (
        <View style={styles.bookTile}>
        <Text style={styles.bookTitle}>{props.title}</Text>
        <Text>{props.author}</Text>
        <View style={styles.bookDescription}>
          <Text>{props.discription}</Text>
        </View>
        <View style={styles.bookDetail}>
          <Text>{props.isbn}</Text>
          <TouchableNativeFeedback onPress={addBook}>
            <View>
                <Text style={styles.button}>ADD</Text>
            </View>
          </TouchableNativeFeedback>
          <Text>{shoppingCount}</Text>
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