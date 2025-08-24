import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
    test("renders initial todos", () => {
        render(<TodoList />);

        // Initial todos from the component
        expect(screen.getByText("Learn React Router")).toBeInTheDocument();
        expect(screen.getByText("Build a TodoList component")).toBeInTheDocument();
    });

    test("adds a new todo", () => {
        render(<TodoList />);

        const input = screen.getByPlaceholderText("Add a new todo...");
        const addButton = screen.getByText("Add");

        fireEvent.change(input, { target: { value: "Write tests" } });
        fireEvent.click(addButton);

        expect(screen.getByText("Write tests")).toBeInTheDocument();
    });

    test("toggles a todo as completed", () => {
        render(<TodoList />);

        const todo = screen.getByText("Learn React Router");

        // Initially not completed
        expect(todo).not.toHaveClass("line-through");

        // Click to toggle
        fireEvent.click(todo);

        // Now should be completed
        expect(todo).toHaveClass("line-through");
    });

    test("deletes a todo", () => {
        render(<TodoList />);

        const todo = screen.getByText("Build a TodoList component");
        const deleteButton = todo.parentElement.querySelector("button");

        fireEvent.click(deleteButton);

        expect(todo).not.toBeInTheDocument();
    });
});
