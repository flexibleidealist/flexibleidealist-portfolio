import api from "./apiConfig";

export const getProjects = async () => {
  try {
    const res = await api.get("/projects")
    return res.data
  } catch (error) {
    throw error
  }
}

export const addProject = async (projectData) => {
  try {
    const res = await api.post("/projects", {project: projectData})
    return res.data
  } catch (error) {
    throw error
  }
}

export const updateProject = async (id, projectData) => {
  try {
    const res = await api.put(`/projects/${id}`, {project: projectData})
    return res.data
  } catch (error) {
    throw error
  }
}

export const removeProject = async (id) => {
  try {
    await api.delete(`/projects/${id}`)
  } catch (error) {
    throw error
  }
}