import React from "react";

interface IHeader {
  title: string;
  setArticleId: Function;
  setIsCreate: Function;
}

export default function Header({ title, setArticleId, setIsCreate }: IHeader) {
  const onHeaderClick = (event: React.MouseEvent) => {
    event.preventDefault();
    setArticleId("");
    setIsCreate(false);
  };
  return (
    <header>
      <h1>
        <a href="/" onClick={onHeaderClick}>
          {title}
        </a>
      </h1>
    </header>
  );
}
