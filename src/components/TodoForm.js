import React, { useState, useEffect, useRef } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 1000),  // id生成
      text: input,  
    });
    setInput(""); // 更新
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="タスクを編集してください"
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
            className="todo-input edit"
          />
          <button className="todo-button edit" onClick={handleSubmit}>編集</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="タスクを入力してください"
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
            className="todo-input"
          />
          <button className="todo-button" onClick={handleSubmit}>追加</button>
        </>
      )}
    </form>
  );
};

export default TodoForm;
