import axios, { AxiosResponse } from "axios";
import type { CategoryArrType, CategoryType } from "./TypeCategories";

export async function getApiCategories(): Promise<CategoryArrType> {
	const {data} = await axios.get<{ categories: CategoryArrType }>('/api/categories')
	return data.categories
}

export async function createApiCategory(obj : CategoryType): Promise<CategoryType> {
	const {data} = await axios.post<{ categories: CategoryType }>('/api/categories', obj)
	return data.categories
}

// export async function deleteApiCategory(id:number): Promise<number> {
// 	const {data} = await axios.delete<{ category: CategoryType }>(`/api/categories/${id}`)
// 	return data.category
// }

