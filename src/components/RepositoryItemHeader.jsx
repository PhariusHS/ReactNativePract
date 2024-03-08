import {View, Image, StyleSheet} from 'react-native'
import StyledText from "./styles/StyledText.jsx";
import theme from '../theme.js';

const RepositoryItemHeader = (props) => (
  <View style={{ flexDirection: "row", paddingBottom: 2 }}>
    <View style={{ }}>
      <Image style={styles.image} source={{ uri: props.ownerAvatarUrl }} />
    </View>
    <View style={{ paddingLeft: 10, flex: 1 }}>
      <StyledText fontWeight="bold">{props.fullname}</StyledText>
      <StyledText color="secondary">{props.description}</StyledText>
      <StyledText style={styles.language}>{props.language}</StyledText>
    </View>
  </View>
);

const styles = StyleSheet.create({
    language: {
        padding: 5,
        marginVertical:2,
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        alignSelf: "flex-start",
        borderRadius: 5,
        overflow: "hidden",
      },
      image: {
        width: 50,
        height: 50,
        borderRadius: 4,
    
      },
})

export default RepositoryItemHeader;
