import api from "./apiConfig";

export const getSkills = async () => {
  try {
    const res = await api.get("/skills")
    return res.data
  } catch (error) {
    throw error
  }
}

export const addSkill = async (skillData) => {
  try {
    const res = await api.post("/skills", {skill: skillData})
    return res.data
  } catch (error) {
    throw error
  }
}

export const updateSkill = async (id, skillData) => {
  try {
    const res = await api.put(`/skills/${id}`, {skill: skillData})
    return res.data
  } catch (error) {
    throw error
  }
}