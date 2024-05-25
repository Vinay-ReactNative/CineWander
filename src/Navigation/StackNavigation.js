import { createStackNavigator } from "@react-navigation/stack";
import Onboarding from "../Screens.js/Onboarding/Onboarding";
import SignOptions from "../Screens.js/Registration/SignOptions";
import { CreateAccount } from "../Screens.js/Registration/CreateAccount";
import { Splash } from "../Screens.js/Onboarding/Splash";
import { Login } from "../Screens.js/Registration/Login";
import Dummy2 from "../Screens.js/Onboarding/Dummy2";
import { NewPassword } from "../Screens.js/Registration/NewPassword";

const Stack = createStackNavigator();


export const StackNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="NewPassword">
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name="onboarding" component={Onboarding} options={{ headerShown: false }} />
            <Stack.Screen name="SignOptions" component={SignOptions} options={{ headerShown: false }} />
            <Stack.Screen name="CreateAccount" component={CreateAccount} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Dummy2" component={Dummy2} options={{ headerShown: false }} />
            <Stack.Screen name="NewPassword" component={NewPassword} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}
