import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import 'global.css';
import { GluestackUIProvider } from 'components/ui/gluestack-ui-provider';
import { StatusBar, View } from 'react-native';

import Loading from '~/components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  return (
    <GluestackUIProvider mode="dark">
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      {fontsLoaded ? <View /> : <Loading />}
    </GluestackUIProvider>
  );
}
