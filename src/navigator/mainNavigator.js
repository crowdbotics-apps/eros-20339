import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen15102276Navigator from '../features/BlankScreen15102276/navigator';
import BlankScreen14102271Navigator from '../features/BlankScreen14102271/navigator';
import Settings102270Navigator from '../features/Settings102270/navigator';
import UserProfile102263Navigator from '../features/UserProfile102263/navigator';
import Settings102260Navigator from '../features/Settings102260/navigator';
import SignIn2102258Navigator from '../features/SignIn2102258/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen15102276: { screen: BlankScreen15102276Navigator },
BlankScreen14102271: { screen: BlankScreen14102271Navigator },
Settings102270: { screen: Settings102270Navigator },
UserProfile102263: { screen: UserProfile102263Navigator },
Settings102260: { screen: Settings102260Navigator },
SignIn2102258: { screen: SignIn2102258Navigator },

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
