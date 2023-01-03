import { Icon } from '@/components/icon';

import { Container, Content, Form, Header } from './ToDoList.styles';

import ToDoLogo from '@/assets/images/logo-todo.svg';

export const ToDoList: React.FC = () => {
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
          />

          <button type="submit">
            Criar
            <Icon name="plus" />
          </button>
        </Form>
      </Content>
    </Container>
  );
};
