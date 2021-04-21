<template>
  <header>
    <Navbar />
  </header>

  <main>
    <router-view />
    <CreateCarModal />
    <CreateJobModal />
    <CreateHouseModal />
  </main>

  <footer>
    <div class="bg-dark text-light text-center p-4">
      Made with 💖 by CodeWorks
    </div>
  </footer>
</template>

<script>
import CreateCarModal from './components/CreateCarModal.vue'
import CreateJobModal from './components/CreateJobModal.vue'
import CreateHouseModal from './components/CreateHouseModal.vue'
import Navbar from './components/Navbar'

export default {
  components: {
    Navbar,
    CreateCarModal,
    CreateJobModal,
    CreateHouseModal
  }
}
</script>

<style lang="scss">
@import "./assets/scss/main.scss";

</style>
