import { AppState } from '../AppState.js'
import router from '../router/index.js'
import { api } from './AxiosService.js'

class JobsService {
  async getJobs() {
    const res = await api.get('jobs')
    AppState.jobs = res.data
  }

  async getJobById(id) {
    const res = await api.get('jobs/' + id)
    AppState.activeJob = res.data
  }

  async createJob(newJob) {
    const res = await api.post('jobs', newJob)
    AppState.jobs.push(res.data)
    router.push({ name: 'JobDetails', params: { id: res.data.id } })
  }

  async bid(job) {
    await api.put('jobs/' + job.id, job)
  }

  async deleteJob(id) {
    await api.delete('jobs/' + id)
    AppState.jobs = AppState.jobs.filter(job => job.id !== id)
  }
}

export const jobsService = new JobsService()
