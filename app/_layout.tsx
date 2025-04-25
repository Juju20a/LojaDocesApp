import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Início' }} />
      <Tabs.Screen name="loja-doces" options={{ title: 'Loja de Doces' }} />
      <Tabs.Screen name="cadastro-cliente" options={{ title: 'Cadastro-Clientes' }} />

    </Tabs>
  );
}
