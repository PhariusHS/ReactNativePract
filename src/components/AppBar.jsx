import { ViewPropTypes, StyleSheet, View, ScrollView } from "react-native";
import StyledText from "./styles/StyledText";
import Constants from "expo-constants";
import theme from "../theme";
import { Link, useLocation , TouchableWithoutFeedback} from "react-router-native";


const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scroll}>
        <AppBarTab to="/">Repositories</AppBarTab>
        <AppBarTab to="/signin">Sign In</AppBarTab>
      </ScrollView>
    </View>
  );
};

const AppBarTab = ({ children, to }) => {
  const { pathname } = useLocation();
  const active = pathname === to;

  const textStyles = [styles.text, active && styles.active];

  return (
    <Link to={to} underlayColor={"transparent"}>
      <StyledText fontWeight="bold" style={textStyles}>
        {children}
      </StyledText>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: theme.appBar.primary,
    padding: Constants.statusBarHeight + 10,
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  text: {
    paddingHorizontal: 5,
    color: theme.appBar.textSecondary,
  },
  scroll: {
    paddingBottom: 15,
  },
  active: {
    color: theme.appBar.textPrimary,
  },
});

export default AppBar;
