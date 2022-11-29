import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,} from 'react-native';
import BookTile from './components/bookTile'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.header}>Bookshop</Text>
        <View style={styles.shop}>  
        <Image
          style={styles.icon}
          source={require('./assets/shoppingCart.png')}
        />
          <Text style={styles.shopCount}>1</Text>
        </View>
      </View>
      <BookTile title="Book title 1" author="by Some Random dude" discription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interger luctus, nulla sit amet pellentesque ultricies, mangna nisl vulputate urna, quis feugiat purus emin id ex." isbn="ISBN 978-8-2165-1860-1"/>
      <BookTile title="Book title 2" author="by Some Random dude" discription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interger luctus, nulla sit amet pellentesque ultricies, mangna nisl vulputate urna, quis feugiat purus emin id ex." isbn="ISBN 978-2-1425-4277-8"/>
      <BookTile title="Book title 3" author="by Jane Doe" discription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interger luctus, nulla sit amet pellentesque ultricies, mangna nisl vulputate urna, quis feugiat purus emin id ex." isbn="ISBN 978-5-9684-0436-7"/>
      <BookTile title="Book title 4" author="by Jane Doe" discription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interger luctus, nulla sit amet pellentesque ultricies, mangna nisl vulputate urna, quis feugiat purus emin id ex." isbn="ISBN 978-8-3356-4834-0"/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 56,
    marginHorizontal: '3%',
  },
  head:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '10%',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 32,
  },
  icon:{
    height: 40,
    width: 40,
  },
  shop:{
    flexDirection: 'row',
  },
  shopCount:{
    marginTop: '55%',
  },

});
