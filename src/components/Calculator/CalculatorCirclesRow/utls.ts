import { CircleType } from "./types";

export const getCircleType = (circleType: CircleType) => {
  switch (circleType) {
    case CircleType.CLOSE: {
      return "x";
    }
    case CircleType.MINIMIZE: {
      return "-";
    }
    case CircleType.EXPAND: {
      return "+";
    }
  }
};
