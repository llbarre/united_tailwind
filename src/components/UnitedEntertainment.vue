
<template>
  <div class="flex justify-center min-w-full min-h-screen bg-gray-900">
    <div
      class="flex flex-col self-center aspect-video bg-gradient-to-t from-brandPrimary to-brandSecondary min-h-screen min-w-auto"
    >
      <!-- Header  -->
      <UnitedHeader />

      <!-- Main options -->
      <main class="relative flex flex-grow flex-col justify-center px-12 py-8 text-white shadow-2xl">

        <!-- Next screen button -->
        <button
          class="flex items-center absolute right-20 top-[40%] rounded-full h-36 w-36 p-2 bg-amber-200 hover:bg-amber-500 transition hover:shadow-xl invisible xl:visible"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="iconify iconify--ion h-36 w-36 p-4 text-brandSecondary"
            width="32"
            height="32"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 512 512"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="48"
              d="M184 112l144 144l-144 144"
            />
          </svg>
        </button>

        <h2 class="font-semibold text-3xl">Customize your experience</h2>

        <!-- Language options -->
        <fieldset class="mt-8">
          <legend class="text-white text-2xl mb-4">Select your language</legend>
          <div class="flex justify-start">
            <button class="flex items-center" @click="scrollLanguages(-175)">
              <img
                class="rounded-l-lg mr-4 h-[3.75rem] w-[3.75rem] p-2 bg-white hover:bg-gray-700 transition bg-opacity-25"
                src="../assets/IonChevronBackOutline.svg"
              />
            </button>
            <div
              ref="languageMenu"
              class="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-5 max-w-3xl overflow-x-hidden scroll-smooth"
            >
              <div
                v-for="language in languageOptions"
                :key="language.id"
                class="flex items-center p-4 bg-white bg-opacity-25 rounded-lg"
              >
                <input
                  :id="language.id"
                  name="notification-method"
                  type="radio"
                  class="focus:ring-brandSecondary h-4 w-4 text-brandSecondary border-gray-300"
                />
                <label
                  :for="language.id"
                  class="ml-3 block text-xl font-light text-white pl-1 pr-8"
                >{{ language.title }}</label>
              </div>
            </div>
            <button class="flex items-center" @click="scrollLanguages(175)">
              <img
                class="rounded-r-lg ml-4 h-[3.75rem] w-[3.75rem] p-2 bg-white bg-opacity-25 hover:bg-gray-700 transition"
                src="../assets/IonChevronForward.svg"
              />
            </button>
          </div>
        </fieldset>

        <!-- Optional Features section -->
        <h4 class="mt-12 mb-4 text-2xl">Optional features</h4>
        <div class="w-full flex items-start">
          <div
            class="w-1/3 rounded p-4 m-2 group border-white hover:bg-gray-100 hover:shadow-lg border shadow flex items-center cursor-pointer transition"
          >
            <div class="shrink-0 p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="iconify iconify--fa-solid text-sky-300 group-hover:text-brandSecondary"
                width="36"
                height="32"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 576 512"
              >
                <path
                  d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144a143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79a47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div class="ml-4">
              <h6 class="font-semibold group-hover:text-brandPrimary">Accessibility</h6>
              <p class="text-sm group-hover:text-brandPrimary">Adjust vision and hearing settings</p>
            </div>
          </div>
          <div
            class="w-1/3 rounded p-4 m-2 group border-white hover:bg-gray-100 hover:shadow-lg border shadow flex items-center cursor-pointer transition"
          >
            <div class="shrink-0 p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="iconify iconify--mdi text-sky-300 group-hover:text-brandSecondary"
                width="32"
                height="32"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 17a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2m6-9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h1V6a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2h1m-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div class="ml-4 group">
              <h6 class="font-semibold group-hover:text-brandPrimary">Parental controls</h6>
              <p class="text-sm group-hover:text-brandPrimary">Only show suitable content</p>
            </div>
          </div>
        </div>
      </main>

      <!-- Footer icons -->
      <UnitedFooter />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import UnitedHeader from './UnitedHeader.vue'
import UnitedFooter from './UnitedFooter.vue'

const languageOptions = [
  { id: 'eng', title: 'English' },
  { id: 'fra', title: 'Français' },
  { id: 'deu', title: 'Deutsch' },
  { id: 'es', title: 'Español' },
  { id: 'pt', title: 'Português' },
  { id: 'ch', title: 'Chinese' },
]

export default {
  components: {
    UnitedHeader,
    UnitedFooter
  },
  setup() {

    const languageMenu = ref(null)

    // Function to enable horizontal scrolling
    const scrollLanguages = (scrollDistance) => {
      languageMenu.value.scrollLeft += scrollDistance
    }

    return {
      languageOptions,
      languageMenu,
      scrollLanguages
    }
  },
}
</script>

