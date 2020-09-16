import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings102004Navigator from '../features/Settings102004/navigator';
import Tutorial7101999Navigator from '../features/Tutorial7101999/navigator';
import SignUp19101998Navigator from '../features/SignUp19101998/navigator';
import SignUp110101997Navigator from '../features/SignUp110101997/navigator';
import Camera9101996Navigator from '../features/Camera9101996/navigator';
import Dashboard110101995Navigator from '../features/Dashboard110101995/navigator';
import BlankScreen0101994Navigator from '../features/BlankScreen0101994/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings102004: { screen: Settings102004Navigator },
Tutorial7101999: { screen: Tutorial7101999Navigator },
SignUp19101998: { screen: SignUp19101998Navigator },
SignUp110101997: { screen: SignUp110101997Navigator },
Camera9101996: { screen: Camera9101996Navigator },
Dashboard110101995: { screen: Dashboard110101995Navigator },
BlankScreen0101994: { screen: BlankScreen0101994Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
