export type TaskType = {
	id?: number,
	question: string,
	answer: string,
	image: string,
	points: number,
	categoryId: number,
}

export type TaskArrType = [TaskType]