import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

export default class HomeScreen extends React.Component {
  search(text){
    
  }
  render() {
    return (
      <View style = {styles.AllProducts}>
        <TextInput placeholder="Search" style = {styles.SearchBox} />
        <TouchableOpacity style = {styles.SearchButton}>
          <Image
            source={require('../assets/search.png')}
            style = {styles.Image}
          />
        </TouchableOpacity>
        <View style = {styles.AllProducts}>
          <Text style = {styles.categoryName}>Electonics</Text>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('SegateBackupPlusSlim2TB');
            }}
            style = {styles.Button}>
            <Image
              source={require('../assets/SegateBackupPlus2tb.jpg')}
              style={styles.Image}
            />
            <Text style = {styles.ProductName}> Segate Backup Plus Slim 2 tb</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Toshiba1TB');
            }}
            style = {styles.Button}
            >
            <Image
              source={require('../assets/Toshiba1tb.jpg')}
              style={styles.Image}
            />
            <Text style = {styles.ProductName}> Toshiba 1 TB </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('WdElements1TB');
            }}
            style = {styles.Button}>
            <Image
              source={require('../assets/WD1tb.jpg')}
              style={styles.Image}
            />
            <Text style = {styles.ProductName}> Wd Elements 1 tb</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Segate1TBLaptop');
            }}
            style = {styles.Button}
            >
            <Image
              source={require('../assets/Segate1tblaptop.jpg')}
              style={styles.Image}
            />
            <Text style = {styles.ProductName}> Segate 1 tb laptop </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Toshiba1TBDesktop');
            }}
            style = {styles.Button}>
            <Image
              source={require('../assets/Toshiba1tbdesktop.jpg')}
              style={styles.Image}
            />
            <Text style = {styles.ProductName}> Toshiba 1 tb Desktop </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('WdBlue1TB');
            }}
            style = {styles.Button}>
            <Image
              source={require('../assets/WDblue1tb.jpg')}
              style={styles.Image}
            />
            <Text style = {styles.ProductName}> Wd blue 1 tb</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('DellKB216');
            }}
            style = {styles.Button}>
            <Image
              source={require('../assets/DellKb216.jpg')}
              style={styles.Image}
            />
            <Text style = {styles.ProductName}> Dell KB216 </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Hp100Wired');
            }}
            style = {styles.Button}>
            <Image
              source={require('../assets/Hp100.png')}
              style={styles.Image}
            />
            <Text style = {styles.ProductName}> Hp 100 Wired </Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('LogitechK120Wired');
          }}
          style = {styles.Button}>
          <Image
            source={require('../assets/LogitechK120.png')}
            style={styles.Image}
          />
          <Text style = {styles.ProductName}> Logitech K120 Wired</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('ZebronicsZEBKM2100');
          }}
          style = {styles.Button}>
          <Image
            source={require('../assets/ZebronicsKM2100.jpg')}
            style={styles.Image}
          />
          <Text style = {styles.ProductName}> Zebronics ZEB-KM2100 </Text>
        </TouchableOpacity>
        </View>
        <View style = {styles.AllProducts}>
          <Text style = {styles.categoryName}>Networking</Text>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Dlink650');
            }}
            style = {styles.Button}>
            <Image
              source={require('../assets/dlink650.jpg')}
              style={styles.Image}
            />
            <Text style = {styles.ProductName}> Dlink 650</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('LinksysWRT54GL');
            }}
            style = {styles.Button}>
            <Image
              source={require('../assets/Linksyswrt54gl.jpg')}
              style={styles.Image}
            />
            <Text style = {styles.ProductName}>Linksys WRT54GL</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Netgear6080');
            }}
            style = {styles.Button}>
            <Image
              source={require('../assets/Netgear6080.jpg')}
              style={styles.Image}
            />
            <Text style = {styles.ProductName}>Netgear 6080</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('TendaF3');
            }}
            style = {styles.Button}>
            <Image
              source={require('../assets/TendaF3.jpg')}
              style={styles.Image}
            />
            <Text style = {styles.ProductName}>Tenda F3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('tplinkC20');
            }}
            style = {styles.Button}>
            <Image
              source={require('../assets/TpLinkC20.jpeg')}
              style={styles.Image}
            />
            <Text style = {styles.ProductName}> Tplink C20</Text>
          </TouchableOpacity>
        </View>
        <View style = {styles.AllProducts}>
          <Text style = {styles.categoryName}>Communications</Text>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('BeetelC11');
            }}
            style = {styles.Button}>
            <Image
              source={require('../assets/BeetelC11.jpeg')}
              style={styles.Image}
            />
            <Text style = {styles.ProductName}>Beetel C11 </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('BinatoneSprit111');
            }}
            style = {styles.Button}>
            <Image
              source={require('../assets/BinatoneSpirit111.jpg')}
              style={styles.Image}
            />
            <Text style = {styles.ProductName}>Binatone Sprit 111 </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Panasonic400');
            }}
            style = {styles.Button}>
            <Image
              source={require('../assets/Panasonic400.jpeg')}
              style={styles.Image}
            />
            <Text style = {styles.ProductName}>Panasonic 400 </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Panasonic500');
            }}
            style = {styles.Button}>
            <Image
              source={require('../assets/Panasonic500.jpg')}
              style={styles.Image}
            />
            <Text style = {styles.ProductName}>Panasonic 500 </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('BeetelM71');
            }}
            style = {styles.Button}>
            <Image
              source={require('../assets/BeetelM71.jpg')}
              style={styles.Image}
            />
            <Text style = {styles.ProductName}>Beetel M71 </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('BinatoneConcept700');
            }}
            style = {styles.Button}>
            <Image
              source={require('../assets/BinatoneConcept700.jpg')}
              style={styles.Image}
            />
            <Text style = {styles.ProductName}>Binatone Concept 700 </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Panasonic62');
            }}
            style = {styles.Button}>
            <Image
              source={require('../assets/PanasonicC62.jpg')}
              style={styles.Image}
            />
            <Text style = {styles.ProductName}>Panasonic 62 </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('BeetelX90');
            }}
            style = {styles.Button}>
            <Image
              source={require('../assets/BeetelX90.jpeg')}
              style={styles.Image}
            />
            <Text style = {styles.ProductName}>Beetel X90 </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('BeetelX70');
            }}
            style = {styles.Button}>
            <Image
              source={require('../assets/BeetelX70.jpg')}
              style={styles.Image}
            />
            <Text style = {styles.ProductName}>Beetel X70 </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Panasonic3611');
            }}
            style = {styles.Button}>
            <Image
              source={require('../assets/Panasonic3611.jpg')}
              style={styles.Image}
            />
            <Text style = {styles.ProductName}>Panasonic 3611 </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  AllProducts:{
    alignContent:'center',
    alignItems:'center',
    alignSelf:'center',
    borderColor:'red',
    borderRadius:10,
    borderWidth:10,
    flex:1,
    flexDirection:'column',
    width:'100%',
  },
  SearchBox:{
    alignSelf:'center',
    backgroundColor:'blue',
    borderColor:'red',
    borderRadius:10,
    borderWidth:10,
    flexDirection:'column',
    flex:1,
    height:10,
    width:'100%',
  },
  SearchButton:{
    alignSelf:'center',
    backgroundColor:'blue',
    borderColor:'red',
    borderRadius:10,
    borderWidth:10,
    flex:1,
    flexDirection:'column',
    padding:10,
  },
  categoryName:{
    alignSelf:'center',
    backgroundColor:'blue',
    borderColor:'blue',
    borderRadius:10,
    borderWidth:10,
    color:'red',
    flex:1,
    flexDirection:'column',
    fontSize:10,
    fontWeight:'bold',
    width:'100%',
  },
  Image:{
    flex:1,
    flexDirection:'column',
    height:100,
    margin:10,
    width:100,
  },
  Button:{
    alignContent:'center',
    alignItems:'center',
    alignSelf:'center',
    borderColor:'red',
    borderRadius:10,
    borderWidth:10,
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
  },
  ProductName:{
    alignSelf:'center',
    color:'red',
    flex:1,
    flexDirection:'column',
    fontSize:10,
    fontWeight:'bold',
  },
});