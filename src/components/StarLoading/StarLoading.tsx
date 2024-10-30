import Lottie from "lottie-react-native";

export const StarLoading = () => {
  return (
    <Lottie
      source={require("../../assets/animations/star-animation.json")}
      autoPlay
      loop
    />
  );
};
