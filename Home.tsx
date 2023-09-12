import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import { green } from 'react-native-reanimated';

const Home = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            padding: 20,
          }}>
          <Image
            source={require('./img/logo.jpg')}
            style={{width: 120, height: 120}}
          />
          <View>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              ตี๋น้อย 168 รัชโยธิน
            </Text>
            <Text style={{marginLeft: 40}}>8.00 - 13.00น.</Text>
            <Text style={{marginLeft: 40, fontWeight: 'bold', color: 'red'}}>
              พนักงานเสิร์ฟ
            </Text>
            <Text
              style={{
                marginLeft: 18,
                marginTop: 5,
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              50 เครดิต / ชั่วโมง
            </Text>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: 10,
          }}>
          <Image
            source={require('./img/info1.jpg')}
            style={{width: '100%', height: 170, marginBottom: 10}}
          />
          <Image
            source={require('./img/info2.jpg')}
            style={{width: '100%', height: 300}}
          />
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
        
            <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold' ,width:'100%' ,backgroundColor:'red', padding:10,textAlign:'center',borderRadius: 5}}>
              ไม่ผ่านการคัดเลือก
            </Text>
     
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: 'column',
  },
});

export default Home;
