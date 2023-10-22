import axios from '@/axiosConfig'

const path = '/api/educations'

const educationsService = {
  async getAll() {
    return await axios.get(`${path}`)
  },
  async get(id) {
     return await axios.get(`${path}/${id}`)
  },
  async update(id, model) {
    return await axios.put(`${path}/${id}`, model)
  },
  async create(model) {
    return await axios.post(`${path}`, model)
  },
  async delete(id) {
    return await axios.delete(`${path}/${id}`)
  }
}

export default educationsService
