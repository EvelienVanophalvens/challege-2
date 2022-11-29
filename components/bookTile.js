import { StyleSheet, Text, View, TouchableNativeFeedback} from 'react-native';

import react, {useState} from 'react';


const bookTile = (props) => {
  
  const [stockCount, setCounter] = useState(10);

  function addBook (stockCount) {
    setCounter((currentCounter) => currentCounter - 1 );
    console.log (stockCount);
  }


    return  (
        <View style={styles.bookTile}>
        <Text style={styles.bookTitle}>{props.title}</Text>
        <View style={styles.info}>
          <Text>{props.author}</Text>
          <View style={styles.stock}>
            <Text>stock:</Text>
            <Text> {stockCount}</Text>
          </View>
        </View>
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
    info:{
      display: 'flex',
      marginVertical: '2%',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    stock:{
      display: 'flex',
      marginVertical: '2%',
      flexDirection: 'row',
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