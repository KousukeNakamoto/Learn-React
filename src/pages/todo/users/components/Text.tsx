import { useSuspenseQuery } from "@tanstack/react-query";
import { testQueryOptions } from "../../../../routes/(todo)/users";

export const Test = () => {
  const { data, error, isPending } = useSuspenseQuery(testQueryOptions);
  console.log(1000);

  //↓意味ない
  if (error) return <div>query error!</div>;
  if (isPending) return <div>query loading!</div>;
  return <div>aaaa</div>;
};
