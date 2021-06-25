// export const url = {
//   API: process.env.NODE_ENV === 'production' ? 'https://gbrian.herokuapp.com' : 'http://localhost:5000',
// };
export const url = {
  API: "https://gbrian.herokuapp.com",
};
export const api = {
  guest: {
    getBlogs: `${url.API}/guest/blogs`,
    getSkills: `${url.API}/guest/skills`,
    getProjects: `${url.API}/guest/projects`,
    getABlog: (blogId) => `${url.API}/guest/blogs/${blogId}`,
    commentOnBlog: (blogId) => `${url.API}/guest/blogs/${blogId}/comments`,
    blogViews: (blogId) => `${url.API}/guest/blogs/${blogId}/views`,
    subscribe: `${url.API}/guest/subscribe`,
    postContact: `${url.API}/guest/contact`,
  },
  admin: {
    login: `${url.API}/admin/login`,
    createBlog: `${url.API}/admin/blogs`,
    addSkill: `${url.API}/admin/skills`,
    addProject: `${url.API}/admin/projects`,
    updDelBlog: (blogId) => `${url.API}/admin/blogs/${blogId}`,
  },
};
