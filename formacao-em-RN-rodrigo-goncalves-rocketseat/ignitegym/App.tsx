import { StatusBar, Text } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import Loading from './src/components/Loading';

export default function App() {
  const [fontsLoader] = useFonts({ Roboto_400Regular, Roboto_700Bold })
  return (
    <GluestackUIProvider config={config}>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      {fontsLoader ? <Loading /> : <Loading />}
    </GluestackUIProvider>
  );
}
