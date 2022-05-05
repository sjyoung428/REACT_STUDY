import { ITopics } from "./Nav";

interface IArticle extends ITopics {
  articleId: string;
  isCreate: boolean;
}

export default function Article({ articleId, topics, isCreate }: IArticle) {
  return (
    <article>
      {isCreate ? (
        <>
          <h2>Create</h2>
        </>
      ) : !articleId ? (
        <>
          <h2>Welcome</h2>
          <span>Hello Web</span>
        </>
      ) : (
        topics.map((topic) =>
          +articleId === topic.id ? (
            <div key={articleId}>
              <h2>{topic.title}</h2>
              <span>{topic.body}</span>
            </div>
          ) : (
            ""
          )
        )
      )}
    </article>
  );
}
