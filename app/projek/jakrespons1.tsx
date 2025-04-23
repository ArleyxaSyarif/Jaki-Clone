import { AntDesign, Fontisto } from '@expo/vector-icons'
import React, { Component } from 'react'
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native'
import tw from 'twrnc';

export class jakrespons extends Component {
    render() {
      return (
          <SafeAreaView style={tw`pt-12`}>
          <ScrollView>
                 <View style={tw`w-[90%] h-200 mx-auto flex items-center`}>
                    <Text style={tw`text-3xl font-bold text-center`}>
                      Detail Laporan
                    </Text>
                    <View style={tw`w-100% h-10 bg-neutral-300 flex flex-row rounded-xl items-center justify-center mb-4`}>
                      <Text style={tw`text-xl font-bold`}>
                        No.JK2212060389
                      </Text>
                    </View>
            
                    <View style={tw`w-100% flex flex-col`}>
                      <Image 
                        source={require('../../assets/images/kebakaran.webp')} 
                        style={tw`w-full h-80 rounded-xl`}
                      />
                    
                      <View style={tw`mt-4`}>
                        <View style={tw`flex flex-row items-center justify-between`}>
                          <View style={tw`w-30 h-7 bg-red-500 rounded-xl items-center justify-center`}>
                            <Text style={tw`font-bold text-white`}>Menunggu</Text>
                          </View>
                          <Text style={tw`text-gray-500`}>59 Menit yang lalu</Text>
                        </View>

                        <View style={tw`mt-4`}>
                          <Text style={tw`text-xl font-bold mb-2`}>Lokasi:</Text>
                          <Text style={tw`text-lg text-gray-600`}>Lentang Agung, Jakarta Selatan</Text>
                        </View>

                        <View style={tw`mt-4`}>
                          <Text style={tw`text-xl font-bold mb-2`}>Deskripsi Masalah:</Text>
                          <Text style={tw`text-lg text-gray-600 leading-6`}>
                            Beberapa hari lalu saya sudah melihat ada potensi kebakaran di daerah ini. 
                            Terdapat beberapa kabel listrik yang tidak tertata dengan baik dan berpotensi 
                            menimbulkan percikan api. Mohon segera ditindaklanjuti untuk mencegah terjadinya 
                            kebakaran yang dapat membahayakan warga sekitar.
                          </Text>
                        </View>

                        <View style={tw`mt-4 flex flex-row items-center justify-between`}>
                          <View style={tw`flex flex-row items-center`}>
                            <AntDesign name='clockcircle' size={20} color="gray" />
                            <Text style={tw`ml-2 text-gray-500`}>Dilaporkan: 6 Des 2022</Text>
                          </View>
                          <Fontisto name='favorite' size={24} color="red" />
                        </View>
                      </View>
                    </View>
                  </View>
          </ScrollView>
      </SafeAreaView>    
      )
    }
}

export default jakrespons