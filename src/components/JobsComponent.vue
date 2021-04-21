<template>
  <div class="job col-md-4 mb-3">
    <router-link :to="{name: 'JobDetails', params: { id: job.id }}">
      <div class="card shadow">
        <img class="card-img-top" :src="job.imgUrl" alt="">
        <div class="card-body">
          <h4 class="card-title">
            {{ job.company }} - {{ job.jobTitle }}
          </h4>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Job',
  props: {
    job: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
