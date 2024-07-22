import axios, { AxiosResponse } from "axios";
import type { TaskArrType, TaskType } from "./TypeTasks";
import { UserType } from "../../User/UserType";

export async function getApiTasksOne(): Promise<TaskArrType> {
	const {data} = await axios.get<{ tasks: TaskArrType }>('/api/tasks/1')
	return data.tasks
}

export async function getApiTasksTwo(): Promise<TaskArrType> {
	const {data} = await axios.get<{ tasks: TaskArrType }>('/api/tasks/2')
	return data.tasks
}

export async function createApiCategory(obj : TaskType): Promise<TaskType> {
	const {data} = await axios.post<{ tasks: TaskType }>('/api/category', obj)
	return data.tasks
}

export async function updateUserScore(obj: UserType): Promise<UserType> {
	const {data} = await axios.put<{ user: UserType }>('/api', obj)
	return data.user
}

// export async function deleteApiCategory(id:number): Promise<number> {
// 	const {data} = await axios.delete<{ category: CategoryType }>(`/api/categories/${id}`)
// 	return data.category
// }

