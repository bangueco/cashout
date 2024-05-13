import { Image, View, Text, StyleSheet } from "react-native";
import { AntDesign, MaterialIcons, Entypo } from '@expo/vector-icons';

export default function Profile() {
  return(
    <View>
      <View style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 10,
          backgroundColor: '#5AB2FF'
        }}>
        <View style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10
        }}>
          <Image 
            source={require('../../assets/images/profile.png')}
            style={{width: 50, height: 50, borderRadius: 100}}
          />
          <Text style={{fontSize: 25, color: 'white'}}>Ban Gueco</Text>
        </View>
        <Text style={{fontSize: 20, color: 'white', borderWidth: 2, padding: 8, borderRadius: 20, borderColor: 'white'}}>Fully Verified</Text>
      </View>
      <View style={{padding: 5, marginTop: 10, marginLeft: 10, display: 'flex', gap: 20}}>
        <View style={styles.profileItem}>
          <AntDesign name="edit" size={24} color="#5AB2FF" />
          <Text style={{color: '#5AB2FF', fontSize: 20}}>Edit Basic Info</Text>
        </View>
        <View style={styles.profileItem}>
          <MaterialIcons name="library-books" size={24} color="#5AB2FF" />
          <Text style={{color: '#5AB2FF', fontSize: 20}}>See Transaction Records</Text>
        </View>
        <View style={styles.profileItem}>
          <Entypo name="text-document" size={24} color="#5AB2FF" />
          <Text style={{color: '#5AB2FF', fontSize: 20}}>Terms & Conditions</Text>
        </View>
        <View style={styles.profileItem}>
          <Entypo name="text-document" size={24} color="#5AB2FF" />
          <Text style={{color: '#5AB2FF', fontSize: 20}}>Privacy Notice</Text>
        </View>
        <View style={styles.profileItem}>
          <AntDesign name="qrcode" size={24} color="#5AB2FF" />
          <Text style={{color: '#5AB2FF', fontSize: 20}}>QR Code</Text>
        </View>
        <View style={styles.profileItem}>
          <Entypo name="log-out" size={24} color="#5AB2FF" />
          <Text style={{color: '#5AB2FF', fontSize: 20}}>Logout</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  profileItem: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10
  }
})