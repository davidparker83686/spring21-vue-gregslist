<template>
  <div class="modal fade"
       id="new-house-form"
       tabindex="-1"
       role="dialog"
       aria-labelledby="exampleModalLabel"
       aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            New House
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form @submit.prevent="createHouse">
          <div class="modal-body">
            <div class="form-group">
              <label for="bedrooms">Bedrooms</label>
              <input type="text"
                     class="form-control"
                     id="bedrooms"
                     placeholder="Bedrooms..."
                     v-model="state.newHouse"
                     required
              >
            </div>

            <div class="form-group">
              <label for="bathrooms">Bathrooms</label>
              <input type="text"
                     class="form-control"
                     id="bathrooms"
                     placeholder="Bathrooms..."
              >
            </div>

            <div class="form-group">
              <label for="levels">Levels</label>
              <input type="text" class="form-control" id="levels" placeholder="Levels...">
            </div>

            <div class="form-group">
              <label for="year">Year</label>
              <input type="text"
                     class="form-control"
                     id="year"
                     min="1800"
                     placeholder="Year..."
              >
            </div>

            <div class="form-group">
              <label for="price">Price</label>
              <input type="text" class="form-control" id="price" placeholder="Price...">
            </div>

            <div class="form-group">
              <label for="description">Description</label>
              <input type="text"
                     class="form-control"
                     id="description"
                     placeholder="Description..."
              >
            </div>
            <div class="form-group">
              <label for="imgUrl">Image Url</label>
              <input type="text" class="form-control" id="imgUrl" placeholder="Url...">
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
import { housesService } from '../services/HousesService'
import $ from 'jquery'
export default {
  name: 'Component',
  setup() {
    const state = reactive({
      newHouse: {}
    })
    return {
      state,
      async createHouse() {
        try {
          await housesService.createHouse(state.newHouse)
          state.newHouse = {}
          $('#new-house-form').modal('hide')
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
