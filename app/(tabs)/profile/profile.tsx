import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

const menuOptions = [
  { id: '1', title: 'Mis Likes' },
  { id: '2', title: 'Favoritos' },
  { id: '3', title: 'Mis Seguidores' },
  { id: '4', title: 'Cambiar Contraseña' },
  { id: '5', title: 'Cuenta' },
  { id: '6', title: 'Configuración' },
  { id: '7', title: 'Ayuda' },
  { id: '8', title: 'Cerrar sesión' },
];

export default function ProfileMenu() {
  const renderOption = ({ item }: { item: typeof menuOptions[0] }) => (
    <TouchableOpacity style={styles.menuItem}>
      <Text style={styles.menuText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Avatar y nombre */}
      <View style={styles.profileHeader}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }} // Puedes reemplazar esta URL con una imagen local
          style={styles.avatar}
        />
        <Text style={styles.name}>Sarah Johnson</Text>
        <TouchableOpacity style={styles.profileButton}>
          <Text style={styles.profileButtonText}>Ver Perfil</Text>
        </TouchableOpacity>
      </View>

      {/* Opciones de menú */}
      <FlatList
        data={menuOptions}
        renderItem={renderOption}
        keyExtractor={(item) => item.id}
        style={styles.menuList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCDDD2',
    padding: 20,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  profileButton: {
    backgroundColor: '#FF4500',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  profileButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  menuList: {
    marginTop: 10,
  },
  menuItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  menuText: {
    fontSize: 16,
    color: '#333',
  },
});