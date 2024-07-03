import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import Loading from './src/components/Loading';
import Groups from './src/screens/Groups';
import NewGroup from './src/screens/NewGroup';
import Players from './src/screens/Players';
import theme from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      {fontsLoaded ? <Players /> : <Loading />}
    </ThemeProvider>
  );
}
