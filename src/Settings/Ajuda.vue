<template>
  <div>
    
    <div class="flex items-center justify-between border-b pb-3 mb-4 dark:border-gray-700">
      <h2 class="text-xl font-semibold dark:text-white">Ajuda e Suporte</h2>
    </div>

    <div class="space-y-1 border-b pb-4 mb-4 dark:border-gray-700">
        
        <div class="flex items-center justify-between p-2 -mx-2 rounded-lg cursor-pointer hover:bg-gray-100 
        dark:hover:bg-gray-700 transition duration-150 lg:flex flex-col gap-10"
        >
            <div class="flex items-center space-x-3"
            v-for="item in helpOptions" 
          :key="item.key">
                <i :class="`pi ${item.icon} text-lg`" :style="{ color: item.color }"></i>
                <span class="text-base dark:text-gray-200">{{ item.label }}</span>
            </div>
        </div>
    </div>

  </div>
</template>

<script setup lang="ts">

interface HelpItem {
    key: string;
    label: string;
    icon: string;
    color?: string;
}

const helpOptions: HelpItem[] = [
  { key: 'login_security', label: 'Login e Segurança', icon: 'pi-lock', color: '#ef4444' }, // Vermelho
  { key: 'privacy', label: 'Privacidade e Segurança', icon: 'pi-eye-slash', color: '#3b82f6' }, // Azul
  { key: 'notifications', label: 'Notificações', icon: 'pi-bell', color: '#f59e0b' }, // Âmbar
  { key: 'report_problem', label: 'Relatar um Problema', icon: 'pi-flag', color: '#f97316' }, // Laranja
];
</script>