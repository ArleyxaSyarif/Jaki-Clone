import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';

// Import twrnc (Tailwind untuk React Native)
import tw from 'twrnc';

export default function JakWartaScreen() {
  // State untuk tab yang sedang aktif
  const [activeTab, setActiveTab] = useState('Berita');

  return (
    <SafeAreaView style={tw`flex-1 bg-white p-6 pt-3`}>
        <ScrollView>
      {/* Header */}
      <View style={tw`px-4 py-3 border-b border-gray-200 flex-row items-center`}>
        <Text style={tw`text-xl font-bold`}>JakWarta</Text>
      </View>

      {/* Kolom pencarian */}
      <View style={tw`px-4 mt-3`}>
        <TextInput
          placeholder="Pencarian"
          style={tw`border border-gray-300 rounded px-3 py-2 text-base`}
        />
      </View>

      {/* Tabs */}
      <View style={tw`flex-row mt-4 border-b border-gray-200`}>
        <TouchableOpacity
          style={[
            tw`flex-1 items-center p-3`,
            activeTab === 'Berita' && tw` bg-cyan-100  border-blue-500`,
          ]}
          onPress={() => setActiveTab('Berita')}
        >
          <Text
            style={tw`${activeTab === 'Berita' ? 'text-blue-500 font-bold' : 'text-gray-500'}`}
          >
            Berita
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            tw`flex-1 items-center p-3`,
            activeTab === 'Twitter' && tw`bg-cyan-100 border-blue-500`,
          ]}
          onPress={() => setActiveTab('Twitter')}
        >
          <Text
            style={tw`${activeTab === 'Twitter' ? 'text-blue-500 font-bold' : 'text-gray-500'}`}
          >
            Twitter Resmi
          </Text>
        </TouchableOpacity>
      </View>

      {/* Konten tab Berita */}
      {activeTab === 'Berita' && (
        <ScrollView style={tw`px-4 py-4`}>
          {/* Judul Berita Terbaru */}
          <Text style={tw`text-lg font-semibold mb-4`}>Berita Terbaru</Text>


        <View style={tw`flex-row gap-2`}>
          {/* Contoh blok kartu informasi */}
          <View style={tw`flex-1 bg-white shadow p-4 mb-4 rounded`}>
            {/* Header kolom */}
            <View style={tw`flex-row items-center mb-2`}>
              <Text style={tw`text-sm font-bold bg-green-100 px-2 py-1 rounded`}>
                JAKARTA SELATAN
              </Text>
            </View>
            <Image 
              source={require('../../assets/images/ayam.webp')}
              style={tw`w-full h-32 rounded-lg mb-2`}
              resizeMode="cover"
            />
            <Text style={tw`text-sm text-gray-600`}>
              Tebet, Setiabudi, Mampang Prapatan, Pasar Minggu, Kebayoran Lama, Cilandak, 
              Kebayoran Baru, Pancoran, Jagakarsa, Pesanggrahan
            </Text>
          </View>

          

          </View>
          <View style={tw`bg-white shadow p-4 mb-4 rounded`}>
            <View style={tw`flex-row items-center mb-2`}>
              <Text style={tw`text-sm font-bold bg-pink-100 px-2 py-1 rounded`}>
                SULAWESI SELATAN
              </Text>
            </View>
            <Image 
              source={require('../../assets/images/beras.jpg')}
              style={tw`w-full h-32 rounded-lg mb-2`}
              resizeMode="cover"
            />
            <Text style={tw`text-sm text-gray-600`}>
              Pasar Rebo, Makasar, Ciracas, Cipayung, Matraman, Pulogadung, 
              Jatinegara, Kramatjati, Cakung, Duren Sawit
            </Text>
          </View>

          {/* dan seterusnya, sesuaikan dengan data Anda... */}

          {/* Info terbaru dari BPBD */}
          <View style={tw`mt-4`}>
            <Text style={tw`text-sm font-semibold text-gray-800`}>
              Badan Penanggulangan Bencana Daerah
            </Text>
            <Text style={tw`text-base font-bold mt-1`}>
              UPDATE INFO PERINGATAN DINI CUACA WILAYAH JABODETABEK
            </Text>
            <Text style={tw`text-xs text-gray-500 mt-1`}>
              6 jam yang lalu • 8 suka
            </Text>
          </View>
        </ScrollView>
      )}

      {/* Konten tab Twitter Resmi */}
      {activeTab === 'Twitter' && (
        <ScrollView style={tw`px-4 py-4`}>
          <Text style={tw`text-lg font-semibold mb-4`}>Cuitan Terbaru</Text>

          {/* Contoh cuitan 1 */}
          <View style={tw`bg-white shadow p-4 mb-4 rounded`}>
            <Text style={tw`text-sm font-bold text-gray-900`}>Dinas Sumber Daya Air</Text>
            <Text style={tw`text-xs text-gray-500`}>4 menit yang lalu</Text>
            <Image 
              source={require('../../assets/images/longsor.jpg')}
              style={tw`w-full h-32 rounded-lg mb-2 mt-2`}
              resizeMode="cover"
            />
            <Text style={tw`text-sm text-gray-800 mt-2`}>
              UPDATE Tinggi Muka Air. Selasa, 06 Desember 2022 Pukul 24:00 WIB...
            </Text>
            <Text style={tw`text-xs text-blue-500 mt-2`}>
              #PasukanBiru #PerluTahu #JAKI
            </Text>
          </View>

          {/* Contoh cuitan 2 */}
          <View style={tw`bg-white shadow p-4 mb-4 rounded`}>
            <Text style={tw`text-sm font-bold text-gray-900`}>Dinas Sumber Daya Air</Text>
            <Text style={tw`text-xs text-gray-500`}>1 jam yang lalu</Text>
            <Image 
              source={require('../../assets/images/mrt1.jpg')}
              style={tw`w-full h-32 rounded-lg mb-2 mt-2`}
              resizeMode="cover"
            />
            <Text style={tw`text-sm text-gray-800 mt-2`}>
              UPDATE Tinggi Muka Air. Selasa, 06 Desember 2022 Pukul 23:00 WIB...
            </Text>
            <Text style={tw`text-xs text-blue-500 mt-2`}>
              #PasukanBiru #PerluTahu #JAKI
            </Text>
          </View>

        </ScrollView>
      )}
      </ScrollView>
    </SafeAreaView>
  );
}