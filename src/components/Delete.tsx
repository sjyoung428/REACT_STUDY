import { ITopic } from "./Nav";

interface IDelete {
  articleId: string;
  topics: ITopic[];
  setTopics: Function;
  setArticleId: Function;
  setIsCreate: Function;
  setIsUpdate: Function;
}

export default function Delete({
  articleId,
  topics,
  setTopics,
  setArticleId,
  setIsCreate,
  setIsUpdate,
}: IDelete) {
  const onDeleteClick = () => {
    let newTopics = [];
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id !== +articleId) {
        newTopics.push(topics[i]);
      }
    }
    setTopics(newTopics);
    setArticleId(false);
    setIsCreate(false);
    setIsUpdate(false);
  };
  return (
    <>
      <button onClick={onDeleteClick}>Delete</button>
    </>
  );
}
