import api from "./api";

export interface Category {
    id: number;
    count: number;
    description: string;
    link: string;
    name: string;
    slug: string;
    taxonomy: string;
    parent: number;
    meta?: Record<string, unknown>;
    acf?: Record<string, unknown>;
}

const categoryCache: Record<number, Category> = {};

export const CategoryService = async (id: number): Promise<Category> => {
    if (categoryCache[id]) return categoryCache[id];

    try {
        const response = await api.get(`/wp/v2/categories/${id}`);
        categoryCache[id] = response.data as Category;
        return categoryCache[id];
    } catch (error: unknown) {
        console.error(`Category Fetch Error (ID: ${id}):`, error);
        throw error;
    }
};
