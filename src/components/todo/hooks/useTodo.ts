import useSWR from 'swr';

type Todo = {
  id: number;
  title: string;
};

export const useTodo = () => {
  const fetcher = (url: string): Promise<Todo[]> =>
    fetch(url, {
      mode: 'cors',
    }).then((res) => res.json());
  const { data, error } = useSWR('http://localhost:3001/todos/', fetcher);

  return {
    data,
    isLoading: !data && !error,
  };
};
