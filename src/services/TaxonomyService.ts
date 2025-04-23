import api from "./api";

export interface Taxonomy {
    id: number;
    count: number;
    description: string;
    link: string;
    name: string;
    slug: string;
    taxonomy: string;
    type?: string;
    parent: number;
    meta?: Record<string, unknown>;
    acf?: Record<string, unknown>;
}

const taxCache: Record<number, Taxonomy> = {};

export const TaxonomyService = async (id: number, type?: string): Promise<Taxonomy> => {
    if (taxCache[id]) return taxCache[id];

    try {
        const response = await api.get(`/wp/v2/${type ?? 'categories'}/${id}`);
        taxCache[id] = response.data as Taxonomy;
        return taxCache[id];
    } catch (error: unknown) {
        console.error(`Taxonomy Fetch Error (ID: ${id}):`, error);
        throw error;
    }
};
