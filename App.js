import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Definitions from './src/screens/definitions';
import Listening from './src/screens/listening';
import FillInTheGaps from './src/screens/fillinthegaps';
import Synonyms from './src/screens/synonyms';

const Tab = createBottomTabNavigator();

const App = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Definitions" component={Definitions} />
      <Tab.Screen name="Listening" component={Listening} />
      <Tab.Screen name="FillInTheGaps" component={FillInTheGaps} />
      <Tab.Screen name="Synonyms" component={Synonyms} />
    </Tab.Navigator>
  </NavigationContainer>
);
export default App;
