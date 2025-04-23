import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TextInput,
  Image,
  TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';

export default function JakLingkoScreen() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      {/* Header */}
      <View style={tw`flex-row items-center px-4 py-3`}>
        <TouchableOpacity style={tw`mr-3`}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={tw`text-xl font-bold`}>JakLingko</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Banner */}
        <View style={tw`bg-cyan-500 p-4`}>
          <Text style={tw`text-white text-xl font-semibold mb-2`}>
            Jelajahi Jakarta dengan{'\n'}Berbagai Transportasi Umum
          </Text>

          {/* Kotak pencarian */}
          <View style={tw`bg-white p-3 rounded-xl shadow-sm mt-3 flex-row items-center`}>
            <View style={tw`flex-1`}>
              <Text style={tw`text-sm text-gray-600 mb-1`}>Mau kemana hari ini?</Text>
              <TextInput
                placeholder="Stasiun, halte, atau rute tujuan.."
                style={tw`text-sm text-gray-500`}
                value={searchValue}
                onChangeText={setSearchValue}
              />
            </View>
            <TouchableOpacity>
              <Ionicons name="search" size={20} color="#3B82F6" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Konten Transportasi */}
        <View style={tw`px-4 mt-4`}>
          <Text style={tw`text-base font-semibold text-gray-800 mb-2`}>
            Transportasi yang tersedia
          </Text>

          {/* Kartu MRTJ */}
          <TouchableOpacity style={tw`bg-blue-50 p-3 rounded-xl mb-3 flex-row items-center`}>
            {/* Contoh gambar MRT */}
            <Image
              source={require('../../assets/images/buss1.jpg')} 
              style={tw`w-16 h-16 mr-3 rounded-lg`}
              resizeMode="contain"
            />
            <View style={tw`flex-1`}>
              <Text style={tw`font-semibold text-gray-700`}>TransJakarta</Text>
              <View style={tw`flex-row items-center mt-1`}>
                <Text style={tw`text-sm text-gray-500 mr-1`}>Lihat jadwal</Text>
                <Ionicons name="arrow-forward-circle-outline" size={16} color="#3B82F6" />
              </View>
            </View>
          </TouchableOpacity>

          {/* Kartu LRT Jakarta */}
          <TouchableOpacity style={tw`bg-blue-50 p-3 rounded-xl mb-3 flex-row items-center`}>
            <Image
              source={require('../../assets/images/buss2.jpg')}
              style={tw`w-16 h-16 mr-3 rounded-lg`}
              resizeMode="contain"
            />
            <View style={tw`flex-1`}>
              <Text style={tw`font-semibold text-gray-700`}>LRT Jakarta</Text>
              <View style={tw`flex-row items-center mt-1`}>
                <Text style={tw`text-sm text-gray-500 mr-1`}>Lihat jadwal</Text>
                <Ionicons name="arrow-forward-circle-outline" size={16} color="#3B82F6" />
              </View>
            </View>
          </TouchableOpacity>

          {/* Kartu TransJakarta */}
          <TouchableOpacity style={tw`bg-blue-50 p-3 rounded-xl mb-3 flex-row items-center`}>
            <Image
              source={require('../../assets/images/buss3.jpg')}
              style={tw`w-16 h-16 mr-3 rounded-lg`}
              resizeMode="contain"
            />
            <View style={tw`flex-1`}>
              <Text style={tw`font-semibold text-gray-700`}>Haryanto</Text>
              <View style={tw`flex-row items-center mt-1`}>
                <Text style={tw`text-sm text-gray-500 mr-1`}>Lihat koridor</Text>
                <Ionicons name="arrow-forward-circle-outline" size={16} color="#3B82F6" />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={tw`bg-blue-50 p-3 rounded-xl mb-3 flex-row items-center`}>
            <Image
              source={require('../../assets/images/buss4.jpg')}
              style={tw`w-16 h-16 mr-3 rounded-lg`}
              resizeMode="contain"
            />
            <View style={tw`flex-1`}>
              <Text style={tw`font-semibold text-gray-700`}>Lorena</Text>
              <View style={tw`flex-row items-center mt-1`}>
                <Text style={tw`text-sm text-gray-500 mr-1`}>Lihat koridor</Text>
                <Ionicons name="arrow-forward-circle-outline" size={16} color="#3B82F6" />
              </View>
            </View>
          </TouchableOpacity>

          {/* Anda bisa menambahkan transportasi lain di sini... */}
        </View>

        {/* Banner info tambahan */}
        <View style={tw`mx-4 mt-4 mb-6 bg-white rounded-xl p-4 shadow-sm`}>
          <View style={tw`flex-row items-center`}>
            {/* Ikon atau logo */}
            <Image
              source={require('../../assets/images/mrt4.jpg')}
              style={tw`w-10 h-10 mr-3 rounded-lg`}
              resizeMode="contain"
            />
            <View style={tw`flex-1`}>
              <Text style={tw`text-sm text-gray-700`}>
                Dapatkan informasi transportasi Jakarta lainnya di aplikasi JakLingko
              </Text>
            </View>
            {/* Tombol Close contoh */}
            <TouchableOpacity>
              <Ionicons name="close-outline" size={20} color="gray" />
            </TouchableOpacity>
          </View>
          {/* Tombol Buka */}
          <TouchableOpacity style={tw`mt-3 flex-row items-center`}>
            <Text style={tw`text-blue-600 text-sm font-semibold mr-1`}>
              Buka JakLingko
            </Text>
            <Ionicons name="arrow-forward" size={16} color="#3B82F6" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}