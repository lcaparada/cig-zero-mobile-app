import { render, screen } from "test-utils";
import {
  AchievementProgressCard,
  AchievementProgressCardProps,
} from "../AchievementProgressCard";
import { StyleSheet } from "react-native";

const mockedData: AchievementProgressCardProps = {
  title: "test title",
  description: "test description",
  is_completed: true,
  lastItem: true,
  percentage: 0.5,
  data: [{ current: 10, target: 20, type: "hours" }],
};

describe("<AchievementProgressCard />", () => {
  it("should render title", () => {
    render(<AchievementProgressCard {...mockedData} />);

    expect(screen.getByText("test title")).toBeTruthy();
  });

  it("should render description", () => {
    render(<AchievementProgressCard {...mockedData} />);

    expect(screen.getByText("test description")).toBeTruthy();
  });

  it("should opacity to be 0.5 when is_completed is true", () => {
    render(<AchievementProgressCard {...mockedData} />);
    const progressBoxElement = screen.getByTestId("progress-box");

    const progressBoxElementStyle = StyleSheet.flatten(
      progressBoxElement.props.style
    );

    expect(progressBoxElementStyle.opacity).toEqual(0.5);
  });

  it("should opacity to be 1 when is_completed is false", () => {
    render(<AchievementProgressCard {...mockedData} is_completed={false} />);
    const progressBoxElement = screen.getByTestId("progress-box");

    const progressBoxElementStyle = StyleSheet.flatten(
      progressBoxElement.props.style
    );

    expect(progressBoxElementStyle.opacity).toEqual(1);
  });

  it("should render a divider when the item is not the last", () => {
    render(<AchievementProgressCard {...mockedData} lastItem={false} />);

    expect(screen.getByTestId("divider")).toBeTruthy();
  });

  it("should not render a divider when the item is the last", () => {
    render(<AchievementProgressCard {...mockedData} />);
    expect(screen.queryByTestId("divider")).not.toBeTruthy();
  });
});
