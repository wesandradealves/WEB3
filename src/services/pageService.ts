import api from "./api";

export interface Page {
    title?: {
      rendered?: string;
    };
    acf_blocks: unknown[];
    id: unknown;
    acf: unknown;
    data: {
      "title": {
        "rendered": string
      }
    }
}
  
export const PageService = async (slug: string): Promise<Page> => {
    try {
      const response = await api.get('/custom/v1/post-by', {
        params: { slug },
      });
      if (response.data && response.data.length > 0) {
        return response.data[0];
      } else {
        throw new Error(`No page found with slug: ${slug}`);
      }
    } catch (error: unknown) {
      throw new Error(`Get Link by Slug Error: ${error}`);
    }
  };

// import api from "./api";

// export interface Page {
//   title?: {
//     rendered?: string;
//   };
//   acf_blocks: unknown[];
//   id: unknown;
//   acf: unknown;
//   data: {
//     title: {
//       rendered: string;
//     };
//   };
// }

// interface PageServiceParams {
//   slug?: string;
//   id?: number | string;
//   type?: string;
//   lang?: string;
// }

// export const PageService = async ({
//   slug,
//   id,
//   type = "page",
//   lang,
// }: PageServiceParams): Promise<Page> => {
//   if (!slug && !id) {
//     throw new Error("slug or id is required");
//   }

//   try {
//     const response = await api.get("/custom/v1/post-by", {
//       params: {
//         ...(id ? { id } : {}),
//         ...(slug ? { slug } : {}),
//         ...(type ? { type } : {}),
//       }
//     });

//     if (response.data && response.data.length > 0) {
//       return response.data[0];
//     } else {
//       throw new Error(
//         `No page found with${id ? ` id: ${id}` : ""}${slug ? ` slug: ${slug}` : ""}`
//       );
//     }
//   } catch (error: unknown) {
//     throw new Error(`Get Page Error: ${error}`);
//   }
// };