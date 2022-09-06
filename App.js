import { AppRegistry, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import AddPostScreen from "./screens/AddPostScreen";
import Homescreen from "./screens/Homescreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import { SignedInStack, SignedOutStack } from "./screens/Navigation";
import AuthNavigation from "./AuthNavigation";
import SetUsernamePfp from "./screens/SetUsernamePfp";

AppRegistry.registerComponent("app", () => App);

export default function App() {
  return <AuthNavigation />;
}
