import { api } from "@/redux/api/apiSlice";

export const blogApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // GET all blogs
    getBlogs: builder.query({
      query: () => "/blog",
      providesTags: ["Blog"],
    }),

    // GET all blogs
    getStats: builder.query({
      query: () => "/blog/stats",
      providesTags: ["Blog"],
    }),

    // GET single blog
    getBlogById: builder.query({
      query: (id) => `/blog/${id}`,
    }),

    // CREATE blog
    createBlog: builder.mutation({
      query: (data) => ({
        url: "/blog",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Blog"],
    }),

    // UPDATE blog
    updateBlog: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/blog/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Blog"],
    }),

    // DELETE blog
    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `/blog/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Blog"],
    }),
  }),
});

export const {
  useGetBlogsQuery,
  useGetStatsQuery,
  useGetBlogByIdQuery,
  useCreateBlogMutation,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
} = blogApi;
