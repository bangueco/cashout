import { StyleSheet, Text, View, Button, Pressable } from "react-native";
import { Feather, Fontisto, FontAwesome, MaterialIcons, FontAwesome6, AntDesign, Entypo } from '@expo/vector-icons';

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={{
        padding: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
      }}>
        <FontAwesome6 name="circle-dollar-to-slot" size={34} color="#5AB2FF" />
        <Text style={{fontSize: 35, color: 'black', textAlign: 'center'}}>CashOut</Text>
      </View>
      <View style={styles.balanceContainer}>
        <Text style={{
          fontSize: 18,
          textAlign: 'center',
          color: '#EEEDEB'
        }}>
          AVAILABLE BALANCE
        </Text>
        <Text style={{
          fontSize: 30,
          textAlign: 'center',
          color: '#FEFBF6'
        }}>
          ₱900
        </Text>
      </View>
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
        marginBottom: 15
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
            <Feather name="send" size={30} color="#5AB2FF" />
            <Text style={{color: '#5AB2FF'}}>Send</Text>
          </Pressable>
          <Pressable style={styles.optionItem}>
            <Fontisto name="mobile-alt" size={30} color="#5AB2FF" />
            <Text style={{color: '#5AB2FF'}}>Load</Text>
          </Pressable>
          <Pressable style={styles.optionItem}>
            <FontAwesome name="bank" size={30} color="#5AB2FF" />
            <Text style={{color: '#5AB2FF'}}>Transfer</Text>
          </Pressable>
          <Pressable style={styles.optionItem}>
            <MaterialIcons name="savings" size={30} color="#5AB2FF" />
            <Text style={{color: '#5AB2FF'}}>Savings</Text>
          </Pressable>
        </View>
        <View style={styles.row}>
          <Pressable style={styles.optionItem}>
            <FontAwesome6 name="money-bills" size={30} color="#5AB2FF" />
            <Text style={{color: '#5AB2FF'}}>Borrow</Text>
          </Pressable>
          <Pressable style={styles.optionItem}>
            <AntDesign name="creditcard" size={30} color="#5AB2FF" />
            <Text style={{color: '#5AB2FF'}}>Credit</Text>
          </Pressable>
          <Pressable style={styles.optionItem}>
            <Entypo name="text-document-inverted" size={30} color="#5AB2FF" />
            <Text style={{color: '#5AB2FF'}}>Pay Bills</Text>
          </Pressable>
          <Pressable style={styles.optionItem}>
            <MaterialIcons name="forest" size={30} color="#5AB2FF" />
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
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#5AB2FF',
    padding: 15,
    width: '95%',
    height: '13%',
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20
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
