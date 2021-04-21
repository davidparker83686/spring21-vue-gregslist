<template>
  <div class="house-details">
    <h1>HOUSE DETAILS</h1>
    {{ route.params.id }}
    {{ state.house }}
    <button type="button" class="btn btn-danger" @click="deleteHouse">
      Delete
    </button>
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'
import { AppState } from '../AppState'
import { reactive, computed, onMounted } from 'vue'
import { housesService } from '../services/HousesService'
export default {
  name: 'HouseDetails',
  setup(){
    const route = useRoute()
    const router = useRouter()
    const state = reactive({
      house: computed(() => AppState.activeHouse)
    })
    onMounted(async() => {
      try {
        await housesService.getHouseById(route.params.id)
      } catch (error) {
        console.error(error)
      }
    })
return {
      route,
      state,
      async deleteHouse() {
        try {
          await housesService.deleteHouse(state.house.id)
          AppState.activeHouse = null
          router.push({ name: 'Houses' })
        } catch (error) {
          console.error(error)
        }
      }
    }

  },
  components:{}
}
</script>

<style lang="scss" scoped>
  
</style>