import { ChangeEvent, MouseEvent, useState } from 'react';

import { ToDo } from './ToDoList.types';

export const useToDoList = () => {
  const [toDoList, setToDoList] = useState<ToDo[]>([]);
  const [toDoInput, setToDoInput] = useState<string>('');

  const totalToDo = toDoList.length;
  const completedToDo = toDoList.filter((toDo) => toDo.isCompleted).length;

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setToDoInput(event.target.value);
  };

  const handleSaveNewToDo = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    setToDoList((prevState) => [
      ...prevState,
      {
        text: toDoInput,
        isCompleted: false,
      },
    ]);
    setToDoInput('');
  };

  const handleToggleToDo = (event: ChangeEvent<HTMLInputElement>) => {
    const checkedToDoText = event.target.value;
    const newToDoList = [...toDoList];

    const checkedToDoIndex = toDoList.findIndex(
      (toDo) => toDo.text === checkedToDoText
    );

    newToDoList[checkedToDoIndex].isCompleted =
      !newToDoList[checkedToDoIndex].isCompleted;

    setToDoList(newToDoList);
  };

  const handleDeleteTodo = (toDoToDelete: string) => {
    setToDoList((prevState) =>
      prevState.filter((toDo) => toDo.text !== toDoToDelete)
    );
  };

  return {
    toDoList,
    toDoInput,
    totalToDo,
    completedToDo,
    handleChangeInput,
    handleSaveNewToDo,
    handleToggleToDo,
    handleDeleteTodo,
  };
};
