import { Image, StyleSheet, Platform, ScrollView, View, Text, TouchableOpacity } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import  tw from 'twrnc';
import { AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Modal } from 'react-native';
import { useState } from 'react';

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
   <SafeAreaView>
    <ScrollView>

      <View style={tw`px-4`}>
          <View style={tw`flex-row items-center justify-between`}>
            <Image source={require('../../assets/images/logo_jaki.png')} style={tw`w-[22] h-[10]`}></Image>
            <View style={tw`flex-row gap-4`}>
            <TouchableOpacity>
              <AntDesign name="scan1" size={24} color="black" />
              </TouchableOpacity>
              <TouchableOpacity>
            <AntDesign name="customerservice" size={24} color="black" />
            </TouchableOpacity>
            </View>
          </View>
        

        <View style={tw`w-[100%] h-[40] bg-blue-500 mt-5 rounded-xl shadow-lg`}>
          <Image source={require('../../assets/images/header1.jpg')} style={tw`w-[100%] h-[40] rounded-xl`}></Image>
        </View>

       

        <View style={tw`w-[100%] h-[15] bg-white mt-3 rounded-xl flex-row px-4 items-center gap-2 shadow-lg`}>
          <Text style={tw`font-bold text-xl `}>JakOne Pay</Text>
          <Text style={tw`text-blue-500 bg-blue-200 text-xs px-2 py-1 rounded-lg`}>Belum Aktif</Text>
          <View style={tw`flex-1`}></View>
          <TouchableOpacity>
          <AntDesign name="right" size={24} color="black" />
          </TouchableOpacity>
        </View>
     
        

      <View style={tw`w-[100%] h-[70] mt-5 rounded-xl p-4 bg-gray-200 `}>
        
     <Text style={tw`font-bold text-lg mb-2`}>Cari bantuan</Text>
       
        <View style={tw`flex-row justify-between`}>
          
          <View style={tw`flex-col items-center gap-2`}>
          <Link href="/projek/jakwarta" asChild>
          <TouchableOpacity>
                <View style={tw`w-[15] bg-white h-[15] rounded-xl items-center justify-center`}><Image source={require('../../assets/images/jaki1.webp')} style={tw`w-[10] h-[10] rounded-xl`}></Image></View>
                </TouchableOpacity> 
                </Link>  

                <Text style={tw`text-xs`}>JakWarta</Text>
                

          </View>
               

           <View style={tw`flex-col items-center gap-2`}>

           <Link href="/projek/jakrespons" asChild>
           <TouchableOpacity>
              <View style={tw`w-[15] bg-white h-[15] rounded-xl items-center justify-center`}><Image source={require('../../assets/images/jaki2.webp')} style={tw`w-[10] h-[10] rounded-xl`}></Image></View>
              </TouchableOpacity>
              </Link>

              <Text style={tw`text-xs`}>JakRespons</Text>
        </View> 

             <View style={tw`flex-col items-center gap-2`}>

             <Link href="/projek/jakpangan" asChild>

             <TouchableOpacity>
              <View style={tw`w-[15] bg-white h-[15] rounded-xl items-center justify-center`}><Image source={require('../../assets/images/jaki3.webp')} style={tw`w-[10] h-[10] rounded-xl`}></Image></View>
              </TouchableOpacity>
              </Link>

              <Text style={tw`text-xs`}>JakPangan</Text>
        </View> 

             <View style={tw`flex-col items-center gap-2`}>


          <Link href="/projek/jaklingko" asChild>
             <TouchableOpacity>

              <View style={tw`w-[15] bg-white h-[15] rounded-xl items-center justify-center`}><Image source={require('../../assets/images/jaki4.webp')} style={tw`w-[10] h-[10] rounded-xl`}></Image></View>
              </TouchableOpacity>
              </Link>

              <Text style={tw`text-xs`}>JakLingko</Text>
        </View> 
        </View>
        <View style={tw`flex-row justify-between mt-5`}>

        <View style={tw`flex-col items-center gap-2`}>

          <Link href="/projek/jaksiaga" asChild>
        <TouchableOpacity>

              <View style={tw`w-[15] bg-white h-[15] rounded-xl items-center justify-center`}><Image source={require('../../assets/images/jak5.webp')} style={tw`w-[10] h-[10] rounded-xl`}></Image></View>
              </TouchableOpacity>
              </Link>

              <Text style={tw`text-xs`}>JakSiaga</Text>
        </View> 

          <View style={tw`flex-col items-center gap-2`}>

            <Link href="/projek/jakwifi" asChild>
          <TouchableOpacity>

              <View style={tw`w-[15] bg-white h-[15] rounded-xl items-center justify-center`}><Image source={require('../../assets/images/jak6.webp')} style={tw`w-[10] h-[10] rounded-xl`}></Image></View>
              </TouchableOpacity>
              </Link>
              <Text style={tw`text-xs`}>JakWifi</Text>
        </View> 

        <View style={tw`flex-col items-center gap-2`}>
        <TouchableOpacity>

              <View style={tw`w-[15] bg-white h-[15] rounded-xl items-center justify-center`}><Image source={require('../../assets/images/jak7.webp')} style={tw`w-[10] h-[10] rounded-xl`}></Image></View>
              </TouchableOpacity>

              <Text style={tw`text-xs`}>JakPeta</Text>
        </View> 

        <View style={tw`flex-col items-center gap-2`}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
              <View style={tw`w-[15] bg-white h-[15] rounded-xl items-center justify-center`}>
                <Image source={require('../../assets/images/jak8.webp')} style={tw`w-[10] h-[10] rounded-xl`}></Image>
              </View>
        </TouchableOpacity>
              <Text style={tw`text-xs`}>Lainnya</Text>
        </View> 

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={tw`flex-1 justify-end`}>
            <View style={tw`bg-white w-full h-[60%] rounded-t-3xl p-5`}>
              <View style={tw`flex-row justify-between items-center mb-5`}>
                <Text style={tw`text-xl font-bold`}>Layanan Lainnya</Text>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <AntDesign name="close" size={24} color="black" />
                </TouchableOpacity>
                
              </View>




              <View style={tw`flex-row justify-between`}>

              <View style={tw`flex-col items-center gap-2`}>
          <Link href="/projek/jakwarta" asChild>
          <TouchableOpacity>
                <View style={tw`w-[15] bg-white h-[15] rounded-xl items-center justify-center`}><Image source={require('../../assets/images/jaki1.webp')} style={tw`w-[10] h-[10] rounded-xl`}></Image></View>
                </TouchableOpacity> 
                </Link>  

                <Text style={tw`text-xs`}>JakWarta</Text>
                

          </View>
               

           <View style={tw`flex-col items-center gap-2`}>

           <Link href="/projek/jakrespons" asChild>
           <TouchableOpacity>
              <View style={tw`w-[15] bg-white h-[15] rounded-xl items-center justify-center`}><Image source={require('../../assets/images/jaki2.webp')} style={tw`w-[10] h-[10] rounded-xl`}></Image></View>
              </TouchableOpacity>
              </Link>

              <Text style={tw`text-xs`}>JakRespons</Text>
        </View> 

             <View style={tw`flex-col items-center gap-2`}>

             <Link href="/projek/jakpangan" asChild>

             <TouchableOpacity>
              <View style={tw`w-[15] bg-white h-[15] rounded-xl items-center justify-center`}><Image source={require('../../assets/images/jaki3.webp')} style={tw`w-[10] h-[10] rounded-xl`}></Image></View>
              </TouchableOpacity>
              </Link>

              <Text style={tw`text-xs`}>JakPangan</Text>
        </View> 

             <View style={tw`flex-col items-center gap-2`}>


          <Link href="/projek/jaklingko" asChild>
             <TouchableOpacity>

              <View style={tw`w-[15] bg-white h-[15] rounded-xl items-center justify-center`}><Image source={require('../../assets/images/jaki4.webp')} style={tw`w-[10] h-[10] rounded-xl`}></Image></View>
              </TouchableOpacity>
              </Link>

              <Text style={tw`text-xs`}>JakLingko</Text>
        </View> 
        </View>
        <View style={tw`flex-row justify-between mt-5`}>

        <View style={tw`flex-col items-center gap-2`}>

          <Link href="/projek/jaksiaga" asChild>
        <TouchableOpacity>

              <View style={tw`w-[15] bg-white h-[15] rounded-xl items-center justify-center`}><Image source={require('../../assets/images/jak5.webp')} style={tw`w-[10] h-[10] rounded-xl`}></Image></View>
              </TouchableOpacity>
              </Link>

              <Text style={tw`text-xs`}>JakSiaga</Text>
        </View> 

          <View style={tw`flex-col items-center gap-2`}>

            <Link href="/projek/jakwifi" asChild>
          <TouchableOpacity>

              <View style={tw`w-[15] bg-white h-[15] rounded-xl items-center justify-center`}><Image source={require('../../assets/images/jak6.webp')} style={tw`w-[10] h-[10] rounded-xl`}></Image></View>
              </TouchableOpacity>
              </Link>
              <Text style={tw`text-xs`}>JakWifi</Text>
        </View> 

        <View style={tw`flex-col items-center gap-2`}>
        <TouchableOpacity>
              <View style={tw`w-[15] bg-white h-[15] rounded-xl items-center justify-center`}>
                <Image source={require('../../assets/images/jakpenda.webp')} style={tw`w-[10] h-[10] rounded-xl`}></Image>
              </View>
        </TouchableOpacity>
              <Text style={tw`text-xs`}>JakPenda</Text>
        </View> 

        <View style={tw`flex-col items-center gap-2`}>
        <TouchableOpacity>

              <View style={tw`w-[15] bg-white h-[15] rounded-xl items-center justify-center`}><Image source={require('../../assets/images/jak7.webp')} style={tw`w-[10] h-[10] rounded-xl`}></Image></View>
              </TouchableOpacity>

              <Text style={tw`text-xs`}>JakPeta</Text>
        </View> 

        
            
        </View>

        <View style={tw`flex-row gap-13 mt-5`}>

            <View style={tw`flex-col items-center gap-2`}>

              <Link href="/projek/jaksiaga" asChild>
            <TouchableOpacity>

                  <View style={tw`w-[15] bg-white h-[15] rounded-xl items-center justify-center`}><Image source={require('../../assets/images/jakispu.webp')} style={tw`w-[10] h-[10] rounded-xl`}></Image></View>
                  </TouchableOpacity>
                  </Link>

                  <Text style={tw`text-xs`}>JakIspu</Text>
            </View> 

              <View style={tw`flex-col items-center gap-2`}>

                <Link href="/projek/jakwifi" asChild>
              <TouchableOpacity>

                  <View style={tw`w-[15] bg-white h-[15] rounded-xl items-center justify-center`}><Image source={require('../../assets/images/banjir.webp')} style={tw`w-[10] h-[10] rounded-xl`}></Image></View>
                  </TouchableOpacity>
                  </Link>
                  <Text style={tw`text-xs`}>PantaU Banjir</Text>
            </View>
          </View>      
      </View>
          </View>
        </Modal>







        </View>
      </View>   


    <View style={tw`w-[100%] h-[67] mt-5 rounded-xl p-4 bg-gray-100 `}>
      <Text style={tw`font-bold text-lg mb-2`}>Ruang Ketiga</Text>
      <Text style={tw`text-gray-500`}>Jelajahi ruang favoritemu di jakarta</Text>



        <View style={tw`flex-row mt-5 gap-2 rounded-xl bg-white`}>

          <View>
            <Image source={require('../../assets/images/poster.jpg')} style={tw`w-[40$] h-[40] rounded-xl`}></Image>
            
          </View>
        <View style={tw`flex-1`}>
          <Text style={tw`text-sm font-medium`}>Harry Potter</Text>
          <Text style={tw`text-xs text-gray-500`}>Jakarta, film ini akan tayang di bioskop </Text>
          <Text style={tw`text-xs text-gray-500`}>pada tanggal 16 april 1678 </Text>

                 
                 <View style={tw`flex-row justify-start mt-16`}>
                  <View style={tw`flex-row justify-end gap-2 mt-2`}>
                  <TouchableOpacity>

                        <View style={tw`bg-blue-500 rounded-2 p-2`}>
                            <Text style={tw`text-xs text-white`}>Selengkapnya</Text>
                        </View>
                        </TouchableOpacity>

                    </View> 
                 </View>
        </View>
          

           
        </View>        

    </View>

<View>
    <View style={tw`w-[100%]  rounded-xl p-4 `}>
    <Text style={tw`text-sm font-medium`}>Jakarta Tanggap Covid-19</Text>
    <Text style={tw`text-xs text-gray-500`}>Jakarta, film ini akan tayang di bioskop </Text>


    </View>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={tw`flex-row`}>

    <TouchableOpacity>

      <View style={tw`w-[300px] h-[60] rounded-xl p-4 mr-2`}>
        <View style={tw`bg-white rounded-xl shadow-md`}>
            <Image source={require('../../assets/images/header.jpg')} style={tw`w-[100%] h-[30] rounded-xl`}></Image>
            
            <View style={tw`p-2`}>
              <Text style={tw`mt-2 mb-1`}>Vaksinasi Covid-19</Text>
              <Text style={tw`text-xs text-gray-500`}>Jakarta, film ini akan tayang di bioskop </Text>
            </View>
        </View>
      </View>
      </TouchableOpacity>


      <TouchableOpacity>

      <View style={tw`w-[300px] h-[60] rounded-xl p-4 mr-2`}>
        <View style={tw`bg-white rounded-xl shadow-md`}>
            <Image source={require('../../assets/images/bahan.png')} style={tw`w-[100%] h-[30] rounded-xl`}></Image>
            
            <View style={tw`p-2`}>
              <Text style={tw`mt-2 mb-1`}>Vaksinasi Covid-19</Text>
              <Text style={tw`text-xs text-gray-500 mb-3`}>Jakarta, film ini akan tayang di bioskop </Text>
            </View>
        </View>
      </View>
      </TouchableOpacity>


      <TouchableOpacity>

      <View style={tw`w-[300px] h-[60] rounded-xl p-4 mr-2`}>
        <View style={tw`bg-white rounded-xl shadow-md`}>
            <Image source={require('../../assets/images/poster2.webp')} style={tw`w-[100%] h-[30] rounded-xl`}></Image>
            
            <View style={tw`p-2`}>
              <Text style={tw`mt-2 mb-1`}>Vaksinasi Covid-19</Text>
              <Text style={tw`text-xs text-gray-500 mb-3`}>Jakarta, film ini akan tayang di bioskop </Text>
            </View>
        </View>
      </View>
      </TouchableOpacity>


      <TouchableOpacity>

      <View style={tw`w-[300px] h-[60] rounded-xl p-4 mr-2`}>
        <View style={tw`bg-white rounded-xl shadow-md`}>
            <Image source={require('../../assets/images/poster.jpg')} style={tw`w-[100%] h-[30] rounded-xl`}></Image>
            
            <View style={tw`p-2`}>
              <Text style={tw`mt-2 mb-1`}>Vaksinasi Covid-19</Text>
              <Text style={tw`text-xs text-gray-500 mb-3`}>Jakarta, film ini akan tayang di bioskop </Text>
            </View>
        </View>
      </View>
      </TouchableOpacity>
    </ScrollView> 

    <View style={tw`w-[100%]  rounded-xl p-4 `}>
    <Text style={tw`text-sm font-medium`}>Berita Hari Ini</Text>
    <Text style={tw`text-xs text-gray-500`}>Berikut adalah berita berita yang kami kumpulkan </Text>
</View>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={tw`flex-row`}>

      <TouchableOpacity>

      <View style={tw`w-[300px] h-[60] rounded-xl p-4 mr-2`}>
        <View style={tw`bg-white rounded-xl shadow-md`}>
            <Image source={require('../../assets/images/poster3.jpg')} style={tw`w-[100%] h-[30] rounded-xl`}></Image>
            
            <View style={tw`p-2`}>
              <Text style={tw`mt-2 mb-1`}>Vaksinasi Covid-19</Text>
              <Text style={tw`text-xs text-gray-500`}>Jakarta, film ini akan tayang di bioskop </Text>
            </View>
        </View>
      </View>
      </TouchableOpacity>

      
      <TouchableOpacity>
      <View style={tw`w-[300px] h-[60] rounded-xl p-4 mr-2`}>
        <View style={tw`bg-white rounded-xl shadow-md`}>
            <Image source={require('../../assets/images/poster4.jpg')} style={tw`w-[100%] h-[30] rounded-xl`}></Image>
            
            <View style={tw`p-2`}>
              <Text style={tw`mt-2 mb-1`}>Vaksinasi Covid-19</Text>
              <Text style={tw`text-xs text-gray-500 mb-3`}>Jakarta, film ini akan tayang di bioskop </Text>
            </View>
        </View>
      </View>
      </TouchableOpacity>


      <TouchableOpacity>
      <View style={tw`w-[300px] h-[60] rounded-xl p-4 mr-2`}>
        <View style={tw`bg-white rounded-xl shadow-md`}>
            <Image source={require('../../assets/images/poster6.jpg')} style={tw`w-[100%] h-[30] rounded-xl`}></Image>
            
            <View style={tw`p-2`}>
              <Text style={tw`mt-2 mb-1`}>Vaksinasi Covid-19</Text>
              <Text style={tw`text-xs text-gray-500 mb-3`}>Jakarta, film ini akan tayang di bioskop </Text>
            </View>
        </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity>
      <View style={tw`w-[300px] h-[60] rounded-xl p-4 mr-2`}>
        <View style={tw`bg-white rounded-xl shadow-md`}>
            <Image source={require('../../assets/images/poster7.webp')} style={tw`w-[100%] h-[30] rounded-xl`}></Image>
            
            <View style={tw`p-2`}>
              <Text style={tw`mt-2 mb-1`}>Vaksinasi Covid-19</Text>
              <Text style={tw`text-xs text-gray-500 mb-3`}>Jakarta, film ini akan tayang di bioskop </Text>
            </View>
        </View>
      </View>
      </TouchableOpacity>
    </ScrollView> 



    





    </View>

    </View>
  
    </ScrollView>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
