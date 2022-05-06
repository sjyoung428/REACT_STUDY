import React, { useRef, useState } from "react";
import Article from "./components/Article";
import Create from "./components/Create";
import Delete from "./components/Delete";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Update from "./components/Update";

function App() {
  const [articleId, setArticleId] = useState("");
  const [isCreate, setIsCreate] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [topics, setTopics] = useState([
    { id: 1, title: "html", body: "html is..." },
    { id: 2, title: "css", body: "css is..." },
    { id: 3, title: "javascript", body: "javascript is..." },
  ]);
  const [nextId, setNextId] = useState(4);
  // const nextId = useRef(4);
  const onTakeId = (id: string) => {
    setArticleId(id);
  };
  const onClickCreate = (event: React.MouseEvent) => {
    event.preventDefault();
    setIsCreate(true);
    setArticleId("");
    setIsUpdate(false);
  };

  const onClickUpdate = (event: React.MouseEvent) => {
    event.preventDefault();
    setIsCreate(false);
    setIsUpdate(true);
  };

  const onCreate = (title: string, body: string) => {
    setTopics([...topics, { id: +nextId, title, body }]);
    setNextId((prevId) => prevId + 1);
    // nextId.current += 1;
    // console.log(topics);
  };

  const onUpdate = (title: string, body: string, id: number) => {
    let newTopics = [...topics];
    let updatedTopic = { id, title, body };
    for (let i = 0; i < newTopics.length; i++) {
      if (newTopics[i].id === id) {
        newTopics[i] = updatedTopic;
        break;
      }
    }
    setTopics(newTopics);
    setIsUpdate(false);
  };

  return (
    <>
      <Header
        title="Web"
        setArticleId={setArticleId}
        setIsCreate={setIsCreate}
      ></Header>
      <Nav
        onTakeId={onTakeId}
        topics={topics}
        setIsCreate={setIsCreate}
        setIsUpdate={setIsUpdate}
      ></Nav>
      <Article
        articleId={articleId}
        topics={topics}
        isCreate={isCreate}
      ></Article>
      <ul>
        <li>
          <a href="/create" onClick={onClickCreate}>
            Create
          </a>
        </li>
        {isCreate ? (
          <>
            <Create onCreate={onCreate} />
          </>
        ) : null}
        {articleId && (
          <li>
            <>
              <a href="/update" onClick={onClickUpdate}>
                Update
              </a>
              <div>
                <Delete
                  articleId={articleId}
                  topics={topics}
                  setTopics={setTopics}
                />
              </div>
            </>
          </li>
        )}
        {isUpdate && (
          <>
            <Update topics={topics} articleId={articleId} onUpdate={onUpdate} />
          </>
        )}
      </ul>
    </>
  );
}

export default App;
