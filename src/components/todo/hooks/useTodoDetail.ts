import useSWR from 'swr';

type Todo = {
  id: number;
  title: string;
};

export const useTodoDetail = (id: number | undefined) => {
  const fetcher = (url: string): Promise<Todo> =>
    fetch(url, {
      mode: 'cors',
    }).then((res) => res.json());
  const { data, error } = useSWR(id ? [`http://localhost:3001/todos/${id}`, id] : null, fetcher);

  return {
    data,
    isLoading: !data && !error,
  };
};
