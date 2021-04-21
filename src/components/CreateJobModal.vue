<template>
  <div class="modal fade"
       id="new-job-form"
       tabindex="-1"
       role="dialog"
       aria-labelledby="exampleModalLabel"
       aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            New Job
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form @submit.prevent="createJob">
          <div class="modal-body">
            <div class="form-group">
              <label for="company">Company</label>
              <input type="text"
                     class="form-control"
                     id="company"
                     placeholder="Company..."
                     v-model="state.newJob.company"
                     required
              >
            </div>
            <div class="form-group">
              <label for="jobTitle">Job Title</label>
              <input type="text"
                     class="form-control"
                     id="jobTitle"
                     placeholder="Job Title..."
                     v-model="state.newJob.jobTitle"
                     required
              >
            </div>
            <div class="form-group">
              <label for="hours">Hours</label>
              <input type="text"
                     class="form-control"
                     id="hours"
                     placeholder="Hours..."
                     v-model="state.newJob.hours"
                     required
              >
            </div>
            <div class="form-group">
              <label for="rate">Rate</label>
              <input type="number"
                     class="form-control"
                     id="rate"
                     placeholder="Rate..."
                     min="15"
                     v-model="state.newJob.rate"
                     required
              >
            </div>
            <div class="form-group">
              <label for="description">Description</label>
              <input type="text"
                     class="form-control"
                     id="description"
                     placeholder="Description..."
                     minlength="3"
                     maxlength="20"
                     v-model="state.newJob.description"
                     required
              >
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">
              Close
            </button>
            <button type="submit" class="btn btn-primary">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { jobsService } from '../services/JobsService'
import $ from 'jquery'
export default {
  name: 'Component',
  setup() {
    const state = reactive({
      newJob: {}
    })
    return {
      state,
      async createJob() {
        try {
          await jobsService.createJob(state.newJob)
          state.newJob = {}
          $('#new-job-form').modal('hide')
        } catch (error) {
          console.error(error)
        }
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
