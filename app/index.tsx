import { StyleSheet, Text, View, Button, Pressable } from "react-native";
import { Feather, Fontisto, FontAwesome, MaterialIcons, FontAwesome6, AntDesign, Entypo } from '@expo/vector-icons';

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.balanceContainer}>
        <Text style={{
          fontSize: 20,
          textAlign: 'center'
        }}>
          Available Balance: ₱9000
        </Text>
      </View>
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5
      }}>
        <Pressable style={{
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: 'green',
          width: 80,
          height: 40,
          borderRadius: 10,
        }}>
          <Text style={{fontSize: 15, color: 'white', textAlign: 'center'}}>Cash In</Text>
        </Pressable>
        <Text>|</Text>
        <Pressable style={{
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: 'red',
          width: 80,
          height: 40,
          borderRadius: 10,
        }}>
          <Text style={{fontSize: 15, color: 'white', textAlign: 'center'}}>Cash Out</Text>
        </Pressable>
      </View>
      <View style={styles.optionItemsContainer}>
        <View style={styles.row}>
          <Pressable style={styles.optionItem}>
            <Feather name="send" size={24} color="#5AB2FF" />
            <Text style={{color: '#5AB2FF'}}>Send</Text>
          </Pressable>
          <Pressable style={styles.optionItem}>
            <Fontisto name="mobile-alt" size={24} color="#5AB2FF" />
            <Text style={{color: '#5AB2FF'}}>Load</Text>
          </Pressable>
          <Pressable style={styles.optionItem}>
            <FontAwesome name="bank" size={24} color="#5AB2FF" />
            <Text style={{color: '#5AB2FF'}}>Transfer</Text>
          </Pressable>
          <Pressable style={styles.optionItem}>
            <MaterialIcons name="savings" size={24} color="#5AB2FF" />
            <Text style={{color: '#5AB2FF'}}>Savings</Text>
          </Pressable>
        </View>
        <View style={styles.row}>
          <Pressable style={styles.optionItem}>
            <FontAwesome6 name="money-bills" size={24} color="#5AB2FF" />
            <Text style={{color: '#5AB2FF'}}>Borrow</Text>
          </Pressable>
          <Pressable style={styles.optionItem}>
            <AntDesign name="creditcard" size={24} color="#5AB2FF" />
            <Text style={{color: '#5AB2FF'}}>Credit</Text>
          </Pressable>
          <Pressable style={styles.optionItem}>
            <Entypo name="text-document-inverted" size={24} color="#5AB2FF" />
            <Text style={{color: '#5AB2FF'}}>Pay Bills</Text>
          </Pressable>
          <Pressable style={styles.optionItem}>
            <MaterialIcons name="forest" size={24} color="#5AB2FF" />
            <Text style={{color: '#5AB2FF'}}>Forest</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  balanceContainer: {
    backgroundColor: 'powderblue',
    padding: 15,
    width: '80%',
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 30
  },
  optionItemsContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  optionItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 70
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10
  }
})
