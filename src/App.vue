<template>
  <div class="flex h-screen bg-gray-50 dark:bg-gray-900 dark:text-gray-200">
    <!-- Desktop -->
    <aside class="hidden md:block w-56 bg-white border-r border-[#ddd] dark:bg-gray-800 dark:border-gray-700">
      <nav class="p-4">
        <div class="flex justify-end pb-[20px]">
          <button @click="toggleTema"
            class="inline-flex items-center justify-center rounded-md p-2 shadow-lg cursor-pointer dark:border border-[#ddd]">
            <i :class="eDark ? 'pi pi-moon' : 'pi pi-sun'"></i>
          </button>
        </div>

        <button v-for="item in menu"
          :key="item.id"
          @click="rota(item)"
          class="flex items-center w-full p-2 rounded text-left gap-2 cursor-pointer"
          :class="itemActive(item) ? 'bg-gray-100 dark:bg-gray-700 font-medium' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'"
        >
          <i :class="item.icon"></i>
          {{ item.label }}
        </button>
      </nav>
    </aside>

      <main class="hidden md:block flex-1 p-6 bg-white cursor-pointer dark:bg-gray-800">
      <router-view />
      <DynamicDialog />
    </main>

    <!-- Mobile -->
    <div class="md:hidden flex-shrink-0 w-full">
      <div class="flex items-center justify-between p-3 border-b border-[#ddd] bg-white dark:bg-gray-800 dark:border-gray-700">
        <button @click="mobileOpen = true" aria-label="Abrir menu" class="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
          <i class="pi pi-bars"></i>
        </button>

        <div class="flex items-center">
          <button @click="toggleTema"
            class="inline-flex items-center justify-center rounded-md p-2 shadow-lg cursor-pointer dark:border border-[#ddd]">
            <i :class="eDark ? 'pi pi-moon' : 'pi pi-sun'"></i>
          </button>
        </div>
      </div>
      <div class="md:hidden bg-white p-3 dark:bg-gray-800">
        <router-view />
        <DynamicDialog />
      </div>
    </div>

    <!-- Mobile -->
    <transition name="fade">
      <div v-if="mobileOpen" class="fixed inset-0 z-50 flex">
        <div class="fixed inset-0 bg-black/50" @click="mobileOpen = false"></div>

        <aside class="relative z-60 w-full h-full bg-white dark:bg-gray-800 overflow-auto">
          <div class="flex items-center justify-between p-4 border-b border-[#ddd] dark:border-gray-700">
             <i class="pi pi-bars"></i>
            <button @click="mobileOpen = false" aria-label="Fechar menu" class="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
              <i class="pi pi-times"></i>
            </button>
          </div>

          <nav class="p-4">
            <button v-for="item in menu"
              :key="item.id"
              @click="rota(item)"
              class="flex items-center w-full p-3 rounded text-left gap-3"
              :class="itemActive(item) ? 'bg-gray-100 dark:bg-gray-700 font-medium' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'"
            >
              <i :class="item.icon"></i>
              {{ item.label }}
            </button>
          </nav>
        </aside>
      </div>
    </transition>
  </div>

 <!-- Modal sair -->
  <transition name="fade">
    <div v-if="showLogout" class="fixed inset-0 z-60 flex items-center justify-center">
      <div class="absolute inset-0 bg-black/50" @click="showLogout = false"></div>

      <div class="relative z-70 bg-white dark:bg-gray-800 p-6 rounded shadow-lg w-full max-w-md">
        <h3 class="text-lg font-medium mb-3">Tem certeza que deseja sair?</h3>

        <div class="flex justify-end gap-3">
          <button @click="showLogout = false" class="px-4 py-2 rounded border">Cancelar</button>
          <button @click="confirmLogout" class="px-4 py-2 rounded bg-red-600 text-white">Confirmar</button>
        </div>
      </div>
    </div>
  </transition>

</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import DynamicDialog from 'primevue/dynamicdialog';

const router = useRouter()
const route = useRoute()

const eDark = ref(false)
const mobileOpen = ref(false) 
const showLogout = ref(false)

const toggleTema = () => {
  eDark.value = !eDark.value
  const html = document.documentElement
  if (eDark.value) html.classList.add('dark')
  else html.classList.remove('dark')
}

const menu = [
  { id: 'privacidade', label: 'Privacidade', icon: 'pi pi-lock', path: '/settings/privacidade' },
  { id: 'status', label: 'Status da conta', icon: 'pi pi-shield', path: '/settings/status' },
  { id: 'conta', label: 'Conta', icon: 'pi pi-user', path: '/settings/conta' },
  { id: 'ajuda', label: 'Ajuda', icon: 'pi pi-info-circle', path: '/settings/ajuda' },
  { id: 'logout', label: 'Sair', icon: 'pi pi-sign-out', path: '/settings/logout' }
]

async function rota(item: { path?: string; id?: string }) {
  if (!item.path) return

  if (item.id === 'logout') {
    showLogout.value = true
    return
  }

  try {
    await router.push(item.path)
  } catch (err) {
    console.error('Navegação falhou:', item.path, err)
  } finally {
    mobileOpen.value = false
  }
}

function itemActive(item: { path?: string }) {
  if (!item.path) return false
  return route.path === item.path
}

async function confirmLogout() {
  try {
    console.log('Saiu da conta')
  } catch (err) {
    console.error('Erro ao navegar para logout:', err)
  } finally {
    showLogout.value = false
    mobileOpen.value = false
  }
}
</script>
