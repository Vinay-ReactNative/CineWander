import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Explore } from "../Screens.js/Explore/Explore";
import { MyList } from "../Screens.js/MyList/MyList";
import { Dashboard } from "../Screens.js/Dashboard/Dashboard";
import { Download } from "../Screens.js/Downloads/Download";
import { Profile } from "../Screens.js/Profile/Profile";

const Tab = createBottomTabNavigator()

export const BottomtabNavigation = () => {
    return (
        <Tab.Navigator initialRouteName="Dashboard">
            <Tab.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
            <Tab.Screen name="Explore" component={Explore} options={{ headerShown: false }} />
            <Tab.Screen name="MyList" component={MyList} options={{ headerShown: false }} />
            <Tab.Screen name="Download" component={Download} options={{ headerShown: false }} />
            <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        </Tab.Navigator>
    )
}