import { useSuspenseQuery } from "@tanstack/react-query";
import { testQueryOptions } from "../../../../routes/(todo)/users";

export const Test = () => {
  const { data } = useSuspenseQuery(testQueryOptions);
  return <div>aaaaaa</div>;
};
