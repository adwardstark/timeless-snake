import { Fragment, useContext } from "react";
import { StyleSheet, View } from "react-native";
import { ThemeColors } from "../styles/colors";
import { Coordinate } from "../types/types";
import { GameContext } from "./GameContext";

type SnakeProps = {
  snake: Coordinate[];
};

export default function Snake({ snake }: SnakeProps) {
  const { theme } = useContext(GameContext);

  return (
    <Fragment>
      {snake.map((segment: any, index: number) => {
        const segmentStyle = {
          left: segment.x * 10, // adjust for the size of each segment
          top: segment.y * 10,
        };
        return (
          <View
            key={index}
            style={[
              styles.snake,
              segmentStyle,
              { backgroundColor: theme.primary },
            ]}
          />
        );
      })}
    </Fragment>
  );
}
const styles = StyleSheet.create({
  snake: {
    width: 12,
    height: 12,
    borderRadius: 1,
    backgroundColor: ThemeColors.classic1998.primary,
    position: "absolute",
  },
});
