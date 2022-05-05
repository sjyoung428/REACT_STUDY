import { ITopic } from "./Nav";

interface IDelete {
  articleId: string;
  topics: ITopic[];
  setTopics: Function;
}

export default function Delete({ articleId, topics, setTopics }: IDelete) {
  const onDeleteClick = () => {
    let newTopics = [];
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id !== +articleId) {
        newTopics.push(topics[i]);
      }
    }
    setTopics(newTopics);
  };
  return (
    <>
      <button onClick={onDeleteClick}>Delete</button>
    </>
  );
}
