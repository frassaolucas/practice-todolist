import { Icon } from '@/components/icon';
import { Checkbox } from '@/components/checkbox';

import { useToDoList } from './ToDoList.hooks';
import {
  Container,
  Content,
  DeleteTaskButton,
  Form,
  Header,
  ListCard,
  ListContainer,
  ListContent,
  ListEmptyMessage,
  ListHeader,
} from './ToDoList.styles';

import ToDoLogo from '@/assets/images/logo-todo.svg';
import ClipboardImage from '@/assets/images/clipboard.png';

export const ToDoList: React.FC = () => {
  const {
    toDoList,
    toDoInput,
    totalToDo,
    completedToDo,
    handleChangeInput,
    handleSaveNewToDo,
    handleToggleToDo,
    handleDeleteTodo,
  } = useToDoList();

  return (
    <Container>
      <Header>
        <img src={ToDoLogo} alt="Logo ToDo" />
      </Header>

      <Content>
        <Form>
          <input
            type="text"
            name="new-todo"
            id="new-todo"
            placeholder="Adicione uma nova tarefa"
            value={toDoInput}
            onChange={handleChangeInput}
          />

          <button type="submit" onClick={handleSaveNewToDo}>
            Criar
            <Icon name="plus" />
          </button>
        </Form>

        <ListContainer>
          <ListHeader>
            <div className="tasks-created">
              Tarefas criadas <span className="counter">{totalToDo}</span>
            </div>

            <div className="tasks-completed">
              Concluídas <span className="counter">{completedToDo}</span>
            </div>
          </ListHeader>

          {toDoList.length ? (
            <ListContent>
              {toDoList.map((toDo) => (
                <ListCard key={toDo.text} isCompleted={toDo.isCompleted}>
                  <Checkbox
                    value={toDo.text}
                    checked={toDo.isCompleted}
                    onChange={handleToggleToDo}
                  />

                  <p>{toDo.text}</p>

                  <DeleteTaskButton
                    type="button"
                    onClick={() => handleDeleteTodo(toDo.text)}
                  >
                    <Icon name="trash" />
                  </DeleteTaskButton>
                </ListCard>
              ))}
            </ListContent>
          ) : (
            <ListEmptyMessage>
              <img src={ClipboardImage} alt="Clipboard" />
              <p className="strong">Você ainda não tem tarefas cadastradas</p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </ListEmptyMessage>
          )}
        </ListContainer>
      </Content>
    </Container>
  );
};
