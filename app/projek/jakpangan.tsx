import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import { Ionicons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import tw from 'twrnc';

const DATA_KOMODITAS = [
  {
    id: 1,
    category: 'Daging',
    name: 'Daging Ayam',
    price: 'Rp 135.000/kg',
    market: 'Pasar Modern BSD',
    image: require('../../assets/images/ayam.webp'),
  },
  {
    id: 2,
    category: 'Bumbu Dapur',
    name: 'Bawang Merah',
    price: 'Rp 45.000/kg',
    market: 'Pasar Modern BSD',
    image: require('../../assets/images/bawang-merah.jpg'),
  },
  {
    id: 3,
    category: 'Bumbu Dapur',
    name: 'Bawang Putih',
    price: 'Rp 22.000/kg',
    market: 'Pasar Serpong',
    image: require('../../assets/images/bawang-putih.jpg'),
  },
  {
    id: 4,
    category: 'Makanan Pokok',
    name: 'Beras',
    price: 'Rp 28.000/kg',
    market: 'Pasar Serpong',
    image: require('../../assets/images/beras.jpg'),
  },
];

export default function InfoPanganScreen() {
  const [activeTab, setActiveTab] = useState('Komoditas');
  const [searchText, setSearchText] = useState('');

  return (
    <SafeAreaView style={tw`flex-1 bg-gray-50 p-4 pt-8`}>
      <View style={tw`flex-row items-center justify-between p-4`}>
        <View style={tw`flex-row items-center`}>
          <TouchableOpacity style={tw`mr-3`}>
            <Ionicons name="arrow-back-circle" size={28} color="#3B82F6" />
          </TouchableOpacity>
          <Text style={tw`text-xl font-bold text-gray-800`}>Pantau Harga</Text>
        </View>
        <TouchableOpacity>
          <MaterialCommunityIcons name="bell-outline" size={24} color="#3B82F6" />
        </TouchableOpacity>
      </View>

      <View style={tw`px-4`}>
        <View style={tw`relative`}>
          <TextInput
            value={searchText}
            onChangeText={text => setSearchText(text)}
            placeholder="Cari produk atau lokasi pasar"
            style={tw`bg-white border border-gray-200 rounded-full px-4 py-2.5 text-sm pl-10`}
          />
          <Ionicons name="search" size={20} color="gray" style={tw`absolute left-3 top-2.5`} />
        </View>
      </View>

      <View style={tw`flex-row mt-6 px-4`}>
        <TouchableOpacity
          style={[
            tw`flex-1 items-center py-3 rounded-xl border`,
            activeTab === 'Komoditas' ? tw`bg-blue-500 border-blue-500` : tw`bg-white border-gray-200`
          ]}
          onPress={() => setActiveTab('Komoditas')}
        >
          <Text style={tw`${activeTab === 'Komoditas' ? 'text-white font-bold' : 'text-gray-600'}`}>
            Komoditas
          </Text>
        </TouchableOpacity>

        <View style={tw`w-4`} />

        <TouchableOpacity
          style={[
            tw`flex-1 items-center py-3 rounded-xl border`,
            activeTab === 'Pasar' ? tw`bg-blue-500 border-blue-500` : tw`bg-white border-gray-200`
          ]}
          onPress={() => setActiveTab('Pasar')}
        >
          <Text style={tw`${activeTab === 'Pasar' ? 'text-white font-bold' : 'text-gray-600'}`}>
            Pasar
          </Text>
        </TouchableOpacity>
      </View>

      <View style={tw`px-4 mt-4 flex-row items-center bg-white p-3 rounded-xl`}>
        <Entypo name="location-pin" size={18} color="#3B82F6" style={tw`mr-2`} />
        <Text style={tw`text-sm text-gray-700 flex-1 font-medium`}>
          BSD City, Tangerang Selatan
        </Text>
        <View style={tw`bg-blue-50 px-3 py-1.5 rounded-lg`}>
          <Text style={tw`text-xs text-blue-600 font-medium`}>24 Jan 2025</Text>
        </View>
      </View>

      {activeTab === 'Komoditas' && (
        <ScrollView style={tw`mt-4`} showsVerticalScrollIndicator={false}>
          <View style={tw`px-4 flex-row flex-wrap justify-between`}>
            {DATA_KOMODITAS.map(item => (
              <TouchableOpacity
                key={item.id}
                style={tw`w-[48%] bg-white rounded-2xl mb-4 p-4 shadow-sm`}
              >
                <View style={tw`flex-row justify-between mb-3`}>
                  <View style={tw`bg-blue-50 px-2 py-1 rounded-lg`}>
                    <Text style={tw`text-xs text-blue-600 font-medium`}>{item.category}</Text>
                  </View>
                  <MaterialCommunityIcons name="dots-vertical" size={18} color="#64748B" />
                </View>

                <View style={tw`items-center mb-3`}>
                  <Image
                    source={item.image}
                    style={tw`w-20 h-20 rounded-xl`}
                    resizeMode="cover"
                  />
                </View>

                <Text style={tw`text-sm font-medium text-gray-800`}>{item.name}</Text>
                <Text style={tw`text-base font-bold text-blue-600 mt-1`}>{item.price}</Text>
                <View style={tw`flex-row items-center mt-2`}>
                  <Entypo name="location-pin" size={14} color="#64748B" />
                  <Text style={tw`text-xs text-gray-500 ml-1`}>{item.market}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      )}

      {activeTab === 'Pasar' && (
        <View style={tw`flex-1 items-center justify-center`}>
          <MaterialCommunityIcons name="store-search" size={48} color="#CBD5E1" />
          <Text style={tw`text-base text-gray-400 mt-4`}>
            Daftar pasar akan tersedia segera
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
}