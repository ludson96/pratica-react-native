import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import Groups from './src/screens/Groups';
import theme from './src/theme';

import Loading from '~/components/Loading';
import NewGroup from '~/screens/NewGroup';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      {fontsLoaded ? <NewGroup /> : <Loading />}
    </ThemeProvider>
  );
}
