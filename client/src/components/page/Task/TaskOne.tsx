import React, { useEffect, useState } from 'react';
import { TaskArrType } from './TypeTasks';
import { getApiTasksOne } from './api';
import { useNavigate } from 'react-router-dom';
import Button from '../../ui/Button';
import './Task.css'

function TaskOne({ user, setUser }): JSX.Element {
	const [tasks, setTasks] = useState<TaskArrType | []>([]);
	const [currTaskIndex, setCurrTaskIndex] = useState(0);
	const [userAnswer, setUserAnswer] = useState('');
	const navigate = useNavigate();
	useEffect(() => {
		getApiTasksOne().then((data) => setTasks(data)).catch(console.log);
	}, []);

	const handleNext = () => {
		if (currTaskIndex < tasks.length - 1) {
			setCurrTaskIndex(currTaskIndex + 1);
			setUserAnswer('');
		} else {
			// Handle case when there are no more questions (optional)
			alert(`Гуд джоб! Твой счёт: ${user.score}`)
			navigate("/");
		}
	};

	const handleAnswer = () => {
		console.log(tasks[currTaskIndex].image);
		if (userAnswer.toLowerCase().trim() === tasks[currTaskIndex].answer.toLowerCase()) {
			alert('Правильно')


			setUser((prev) => ({
				...prev,
				score: prev.score + tasks[currTaskIndex].points,
			}));
			handleNext()
		} else {
			alert('Неправильно');
		}
	};

	return (
		<div className='container'>
			{tasks.length > 0 && currTaskIndex < tasks.length ? (
				<div>
					<img src={`/img/question/img/${tasks[currTaskIndex].image}`}></img>
					<div>{tasks[currTaskIndex].question}</div>
					<input
						type="text"
						value={userAnswer}
						onChange={(e) => setUserAnswer(e.target.value)}
						placeholder="Your answer"
					/>
					<div className='button-container'>
						<Button buttonName={'Ответить'} buttonClass={'next-button'} onClickFunc={handleAnswer} />
						<Button buttonName={'Следующий вопрос'} buttonClass={'answer-button'} onClickFunc={handleNext} />
						<div className='score-container'>
							<div>Cчёт</div>
							<div className='score'>
								<p>{user.score}</p>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div>No tasks available.</div>
			)}
		</div>
	);
}

export default TaskOne;