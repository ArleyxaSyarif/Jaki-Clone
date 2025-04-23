import { StyleSheet, Image, Platform, ScrollView, View, Text, TouchableOpacity } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { SafeAreaView } from 'react-native-safe-area-context';
import  tw from 'twrnc';
import { AntDesign } from '@expo/vector-icons';

export default function TabTwoScreen() {
  return (
    <SafeAreaView>
      <ScrollView>

        <View style={tw`px-4`}>        
          <Text style={tw`text-xl font-bold mb-2 p-4`}>Akun</Text>

                  <View style={tw`flex-row items-center gap-2 pt-3`}>
                  <AntDesign name="barchart" size={24} color="gray" />

                    <Text style={tw`text-lg font-bold mb-2`}>Statistik Laporan</Text>
                    <View style={tw`flex-1`}></View>    
                    <AntDesign name="right" size={24} color="black" />             
                  </View>

                  <View style={tw`h-[1px] bg-gray-300 my-2`}></View>

                  <View style={tw`flex-row items-center gap-2 pt-3 pb-5`}>
                  <AntDesign name="setting" size={24} color="gray" />

                    <Text style={tw`text-lg font-bold mb-2`}>Pengaturan Akun</Text>
                    <View style={tw`flex-1`}></View>    
                    <AntDesign name="right" size={24} color="black" />             
                  </View>
        </View>
        <View style={tw`flex-1 bg-gray-200 h-[6]`}></View>    

        <View style={tw`px-4`}>        
          <Text style={tw`text-xl font-bold mb-2 p-4`}>Tentang</Text>

                  <View style={tw`flex-row items-center gap-2 pt-3`}>
                  <AntDesign name="warning" size={24} color="gray" />

                    <Text style={tw`text-lg font-bold mb-2`}>Tentang Aplikasi Jaki</Text>
                    <View style={tw`flex-1`}></View>    
                    <AntDesign name="right" size={24} color="black" />             
                  </View>

                  <View style={tw`h-[1px] bg-gray-300 my-2`}></View>


                  <View style={tw`flex-row items-center gap-2 mt-3 pt-3 `}>
                  <AntDesign name="flag" size={24} color="gray" />

                    <Text style={tw`text-lg font-bold mb-2`}>Syarat dan ketentuan</Text>
                    <View style={tw`flex-1`}></View>    
                    <AntDesign name="right" size={24} color="black" />             
                  </View>

                  <View style={tw`h-[1px] bg-gray-300 my-2`}></View>


                  <View style={tw`flex-row items-center gap-2 mt-3 pt-3 `}>
                  <AntDesign name="lock" size={24} color="gray" />

                    <Text style={tw`text-lg font-bold mb-2`}>Kebijakan Privasi</Text>
                    <View style={tw`flex-1`}></View>    
                    <AntDesign name="right" size={24} color="black" />             
                  </View>

                    <TouchableOpacity style={tw`bg-transparent border-2 border-red-500 px-40 py-3 mt-5 rounded-xl`}>
                      <Text style={tw`text-lg font-bold text-red-500 text-center`}>Keluar</Text>
                    </TouchableOpacity>
        </View>

        
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
