import React, { useState } from 'react';
import {
  View, Text, FlatList, TextInput, StyleSheet,
  TouchableOpacity, Modal, Image, ScrollView
} from 'react-native';

const docesIniciais = [
  { id: '1', nome: 'Brigadeiro', preco: 2.5, categoria: 'Chocolate', imagem: 'https://i.imgur.com/M1XzKzM.jpg' },
  { id: '2', nome: 'Beijinho', preco: 2.0, categoria: 'Coco', imagem: 'https://i.imgur.com/vVjQdAq.jpg' },
  { id: '3', nome: 'Trufa', preco: 3.5, categoria: 'Recheado', imagem: 'https://i.imgur.com/efy5E0v.jpg' },
];

export default function CatalogoScreen() {
  const [doces, setDoces] = useState(docesIniciais);
  const [busca, setBusca] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [novoDoce, setNovoDoce] = useState({ nome: '', preco: '', categoria: '', imagem: '' });

  const filtrarDoces = () => {
    return doces.filter(d => 
      d.nome.toLowerCase().includes(busca.toLowerCase()) ||
      d.categoria.toLowerCase().includes(busca.toLowerCase())
    );
  };

  const adicionarDoce = () => {
    const novo = { ...novoDoce, id: Date.now().toString(), preco: parseFloat(novoDoce.preco) };
    setDoces([...doces, novo]);
    setNovoDoce({ nome: '', preco: '', categoria: '', imagem: '' });
    setModalVisible(false);
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.imagem }} style={styles.image} />
      <Text style={styles.nome}>{item.nome}</Text>
      <Text style={styles.preco}>R$ {item.preco.toFixed(2)}</Text>
      <TouchableOpacity style={styles.btnComprar}>
        <Text style={{ color: 'white' }}>Comprar</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <TextInput
        placeholder="Buscar por nome ou categoria..."
        style={styles.input}
        value={busca}
        onChangeText={setBusca}
      />

      <FlatList
        data={filtrarDoces()}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      <TouchableOpacity style={styles.botaoAdd} onPress={() => setModalVisible(true)}>
        <Text style={{ color: '#fff', fontSize: 16 }}>+ Adicionar Doce</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="slide">
        <ScrollView style={{ padding: 20 }}>
          <Text style={styles.tituloModal}>Novo Doce</Text>
          <TextInput placeholder="Nome" style={styles.input} value={novoDoce.nome}
            onChangeText={t => setNovoDoce({ ...novoDoce, nome: t })} />
          <TextInput placeholder="Preço" style={styles.input} keyboardType="numeric" value={novoDoce.preco}
            onChangeText={t => setNovoDoce({ ...novoDoce, preco: t })} />
          <TextInput placeholder="Categoria" style={styles.input} value={novoDoce.categoria}
            onChangeText={t => setNovoDoce({ ...novoDoce, categoria: t })} />
          <TextInput placeholder="URL da Imagem" style={styles.input} value={novoDoce.imagem}
            onChangeText={t => setNovoDoce({ ...novoDoce, imagem: t })} />

          <TouchableOpacity style={styles.btnSalvar} onPress={adicionarDoce}>
            <Text style={{ color: '#fff' }}>Salvar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.btnCancelar}>
            <Text>Cancelar</Text>
          </TouchableOpacity>
        </ScrollView>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1, borderColor: '#ccc', borderRadius: 5,
    padding: 10, marginBottom: 10,
  },
  card: {
    backgroundColor: '#fff', padding: 10, marginBottom: 10,
    borderRadius: 8, elevation: 3, alignItems: 'center'
  },
  image: {
    width: 100, height: 100, borderRadius: 8, marginBottom: 10
  },
  nome: {
    fontSize: 16, fontWeight: 'bold'
  },
  preco: {
    fontSize: 14, color: 'green', marginBottom: 10
  },
  btnComprar: {
    backgroundColor: '#e91e63', paddingHorizontal: 20,
    paddingVertical: 8, borderRadius: 5
  },
  botaoAdd: {
    position: 'absolute', bottom: 20, right: 20,
    backgroundColor: '#6200ea', padding: 15,
    borderRadius: 30, elevation: 5
  },
  tituloModal: {
    fontSize: 20, fontWeight: 'bold', marginBottom: 20
  },
  btnSalvar: {
    backgroundColor: 'green', padding: 15, alignItems: 'center', borderRadius: 5
  },
  btnCancelar: {
    marginTop: 10, alignItems: 'center'
  }
});

