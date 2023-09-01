import React from "react";

function TodoList({ todos, deleteTodo }) {
	return (
		<ul className='mt-4'>
			{todos.map((todo, index) => (
				<li
					key={index}
					className='flex justify-between items-center bg-gray-200 rounded px-4 py-2 mb-2'>
					<span>{todo}</span>
					<button
						onClick={() => deleteTodo(index)}
						className='text-red-500 hover:text-red-600'>
						Hapus
					</button>
				</li>
			))}
		</ul>
	);
}

export default TodoList;
