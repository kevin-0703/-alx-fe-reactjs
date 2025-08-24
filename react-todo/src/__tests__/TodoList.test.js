import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../TodoList';

test('renders TodoList component with initial todos', () => {
    render(<TodoList />);
    // Check if demo todos are in the document
    expect(screen.getByText(/Learn React Router/i)).toBeInTheDocument();
    expect(screen.getByText(/Build a TodoList component/i)).toBeInTheDocument();
});

test('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/add a new todo/i);
    const button = screen.getByText(/add/i);

    // Type and submit
    fireEvent.change(input, { target: { value: 'Write tests' } });
    fireEvent.click(button);

    // Check if new todo appears
    expect(screen.getByText(/Write tests/i)).toBeInTheDocument();
});

test('toggles a todo', () => {
    render(<TodoList />);
    const todoItem = screen.getByText(/Learn React Router/i);

    // First click (mark completed)
    fireEvent.click(todoItem);
    expect(todoItem).toHaveClass('completed');

    // Second click (mark not completed)
    fireEvent.click(todoItem);
    expect(todoItem).not.toHaveClass('completed');
});

test('deletes a todo', () => {
    render(<TodoList />);
    const deleteButton = screen.getAllByText(/delete/i)[0]; // first todo delete
    fireEvent.click(deleteButton);

    // Check it's removed
    expect(screen.queryByText(/Learn React Router/i)).not.toBeInTheDocument();
});
