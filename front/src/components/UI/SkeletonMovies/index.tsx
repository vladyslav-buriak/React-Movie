import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { FC } from "react";

export const SkeletonMovies: FC = () => {
  return (
    <SkeletonTheme baseColor="#ebebeb" highlightColor="#444">
      <Skeleton height={200} width={150} />
      <Skeleton style={{ marginTop: "0.5rem" }} height={80} width={150} />
    </SkeletonTheme>
  );
};
