"use client";
import TodoList from "../../components/TodoList";
import { useEffect, useState } from "react";

export default function Home() {
	const [todos, setTodos] = useState([]);
	const [newTodo, setNewTodo] = useState("");

	useEffect(() => {
		// Simulasikan pengambilan data dari server atau penyimpanan lokal
		const initialTodos = JSON.parse(localStorage.getItem("todos")) || [];
		setTodos(initialTodos);
	}, []);

	useEffect(() => {
		// Simpan perubahan pada todos ke penyimpanan lokal
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	const addTodo = () => {
		if (newTodo.trim() !== "") {
			setTodos([...todos, newTodo]);
			setNewTodo("");
		}
	};

	const deleteTodo = (index) => {
		const updatedTodos = todos.filter((_, i) => i !== index);
		setTodos(updatedTodos);
	};
	return (
		<main>
			<div className='min-h-screen bg-gray-100 p-4'>
				<div className='max-w-md mx-auto bg-white rounded p-4 shadow-lg'>
					<h1 className='text-3xl font-semibold mb-4'>ToDo List</h1>
					<div className='mb-4'>
						<input
							type='text'
							value={newTodo}
							onChange={(e) => setNewTodo(e.target.value)}
							className='w-full border rounded px-3 py-2'
							placeholder='Tambahkan tugas baru...'
						/>
					</div>
					<button
						onClick={addTodo}
						className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
						Tambah
					</button>
					<TodoList
						todos={todos}
						deleteTodo={deleteTodo}
					/>
				</div>
			</div>
		</main>
	);
}
