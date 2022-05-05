import React, { useEffect, useState } from "react";
import { ITopic, ITopics } from "./Nav";

interface IUpdate extends ITopics {
  onUpdate: Function;
  articleId: string;
}

export default function Update({ topics, articleId, onUpdate }: IUpdate) {
  const [topic, setTopic] = useState<ITopic>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const filterdTopic = topics
      .map((topic) => (topic.id === +articleId ? topic : undefined))
      .filter((topic) => topic !== undefined)[0];
    setTopic(filterdTopic);
    setIsLoading(false);
  }, []);

  const onUpdateSubmit = (event: any) => {
    event.preventDefault();
    const {
      currentTarget: {
        title: { value: title },
        body: { value: body },
      },
    } = event;
    onUpdate(title, body, +articleId);
  };

  const onChangeTitle = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    let newTopic = { ...topic };
    newTopic = { id: topic?.id, title: value, body: topic?.body };
    setTopic(newTopic as any);
  };

  const onChangeBody = (event: React.FormEvent<HTMLTextAreaElement>) => {
    const {
      currentTarget: { value },
    } = event;
    let newTopic = { ...topic };
    newTopic = { id: topic?.id, title: topic?.title, body: value };
    setTopic(newTopic as any);
  };

  return (
    <>
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <form onSubmit={onUpdateSubmit}>
          <p>
            <input
              type="text"
              placeholder={topic?.title}
              name="title"
              value={topic?.title}
              onChange={onChangeTitle}
            />
          </p>
          <p>
            <textarea
              placeholder={topic?.body}
              name="body"
              value={topic?.body}
              onChange={onChangeBody}
            />
          </p>
          <p>
            <button>Update</button>
          </p>
        </form>
      )}
    </>
  );
}
