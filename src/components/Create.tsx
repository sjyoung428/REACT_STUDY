interface ICreate {
  onCreate: Function;
}

export default function Create({ onCreate }: ICreate) {
  const onCreateSubmit = (event: any) => {
    event.preventDefault();
    const {
      currentTarget: {
        title: { value: title },
        body: { value: body },
      },
    } = event;
    onCreate(title, body);
  };
  return (
    <>
      <form onSubmit={onCreateSubmit}>
        <p>
          <input type="text" placeholder="Write a title" name="title" />
        </p>
        <p>
          <textarea placeholder="Write a body" name="body" />
        </p>
        <p>
          <button>Create</button>
        </p>
      </form>
    </>
  );
}
