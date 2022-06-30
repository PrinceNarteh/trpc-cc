import type { NextPage } from "next";
import { trpc } from "utils/trpc";

const Home: NextPage = () => {
  const { data, isLoading, isError, error } = trpc.useQuery(["hello"]);

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  if (isError) {
    return <div>{JSON.stringify(error)}</div>;
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <h1 className="text-3xl font-bold text-slate-500">{data}</h1>
    </div>
  );
};

export default Home;
