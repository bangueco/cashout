import { StyleSheet, Text, View, Button, Pressable } from "react-native";

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
    marginTop: 10,
    marginBottom: 10
  }
})
