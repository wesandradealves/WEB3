import api from "./api";

export interface Page {
    title?: {
        rendered?: string;
    };
    acf_blocks: unknown[];
    id: unknown;
    acf: unknown;
    data: {
        title: {
            rendered: string;
        };
    };

    source_url: string;
    alt_text?: string;
    caption?: {
        rendered: string;
    };
    media_type: string;
    mime_type: string;
}

interface PostServiceParams {
    slug?: string;
    id?: number | string;
    type?: string;
}

export const PostService = async ({
    slug,
    id,
    type
}: PostServiceParams): Promise<Page> => {
    if (!slug && !id) {
        throw new Error("slug or id is required");
    }

    try {
        const response = await api.get("/custom/v1/post-by", {
            params: {
                ...(id ? { id } : { slug }),
                ...(type ? { type } : {}),
            }
        });

        if (response.data && response.data.length > 0) {
            return response.data[0];
        } else {
            throw new Error(
                `No page found with${id ? ` id: ${id}` : ""}${slug ? ` slug: ${slug}` : ""}`
            );
        }
    } catch (error: unknown) {
        throw new Error(`Get Page Error: ${error}`);
    }
};