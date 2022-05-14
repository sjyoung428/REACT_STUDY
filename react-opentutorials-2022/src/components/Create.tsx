import React, { useRef } from "react";

interface ICreate {
  onCreate: Function;
}

export default function Create({ onCreate }: ICreate) {
  const titleInput = useRef<HTMLInputElement>(null);
  const bodyTextarea = useRef<HTMLTextAreaElement>(null);
  const onCreateSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // const {
    //   currentTarget: {
    //     title: { value: title },
    //     body: { value: body },
    //   },
    // } = event;
    const title = titleInput.current?.value;
    const body = bodyTextarea.current?.value;
    onCreate(title, body);
  };
  return (
    <>
      <form onSubmit={onCreateSubmit}>
        <p>
          <input
            type="text"
            placeholder="Write a title"
            name="title"
            ref={titleInput}
          />
        </p>
        <p>
          <textarea placeholder="Write a body" name="body" ref={bodyTextarea} />
        </p>
        <p>
          <button>Create</button>
        </p>
      </form>
    </>
  );
}
