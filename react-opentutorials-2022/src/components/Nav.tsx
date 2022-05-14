export interface ITopic {
  id: number;
  title: string;
  body: string;
}

export interface ITopics {
  topics: ITopic[];
}

interface INav extends ITopics {
  onTakeId: Function;
  setIsCreate: Function;
  setIsUpdate: Function;
  setIsDelete: Function;
}

export default function Nav({
  topics,
  onTakeId,
  setIsCreate,
  setIsUpdate,
  setIsDelete,
}: INav) {
  const onNavClick = (event: React.MouseEvent) => {
    event.preventDefault();
    const {
      currentTarget: { id },
    } = event;
    onTakeId(id);
    setIsCreate(false);
    setIsUpdate(false);
    setIsDelete(true);
  };
  return (
    <nav>
      <ol>
        {topics.map((topic) => (
          <li key={topic.id}>
            <a
              id={topic.id + ""}
              href={`/read/${topic.id}`}
              onClick={onNavClick}
            >
              {topic.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
