import { View } from "react-native";
import StyledText from "./styles/StyledText";

const parseThousand = (value) => {
  return value >= 1000 ? `${Math.round(value / 100) / 10}k` : String(value);
};

const RepositoryStats = (props) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around", }}>
      <View>
        <StyledText align="center" fontWeight="bold">
          Stars
        </StyledText>
        <StyledText align="center" color="secondary">
          {parseThousand(props.stargazersCount)}
        </StyledText>
      </View>

      <View>
        <StyledText align="center" fontWeight="bold">
          Forks
        </StyledText>
        <StyledText align="center" color="secondary">
          {parseThousand(props.forksCount)}
        </StyledText>
      </View>
      <View>
        <StyledText align="center" fontWeight="bold">
          Review
        </StyledText>
        <StyledText align="center" color="secondary">
          {parseThousand(props.reviewCount)}
        </StyledText>
      </View>
      <View>
        <StyledText align="center" fontWeight="bold">
          Rating
        </StyledText>
        <StyledText align="center" color="secondary">
          {parseThousand(props.ratingAverage)}
        </StyledText>
      </View>
    </View>
  );
};

export default RepositoryStats;
