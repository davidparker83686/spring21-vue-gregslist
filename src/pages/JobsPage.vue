<template>
  <div class="jobs container">
    <div class="row">
      <div class="col  py-3">
        <h2>Jobs</h2>
        <button title="Open Create Job Form"
                type="button"
                class="btn btn-outline-success"
                data-toggle="modal"
                data-target="#new-job-form"
        >
          <i class="fas fa-plus" aria-hidden="true"></i>
        </button>
      </div>
    </div>
    <div class="row">
      <div v-if="state.loading">
        <i class="fas fa-spinner fa-spin"></i>
      </div>
      <Job v-else v-for="job in state.jobs" :key="job.id" :job="job" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import Job from '../components/JobsComponent'
import { jobsService } from '../services/JobsService'
import { AppState } from '../AppState'

export default {
  name: 'JobsPage',
  setup() {
    const state = reactive({
      loading: true,
      jobs: computed(() => AppState.jobs)
    })

    onMounted(async() => {
      try {
        await jobsService.getJobs()
        state.loading = false
      } catch (error) {
        console.error(error)
      }
    })

    return {
      state
    }
  },
  components: {
    Job
  }
}
</script>

<style lang="scss" scoped>

</style>
