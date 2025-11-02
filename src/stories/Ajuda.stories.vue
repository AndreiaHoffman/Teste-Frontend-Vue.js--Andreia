<template>
  <Meta title="Settings/Ajuda" :component="Ajuda" />

  <Story name="Default">
    <template #default>
      <div style="padding:16px; max-width:900px;">
        <Ajuda />
      </div>
    </template>
  </Story>

  <Story name="Empty">
    <template #default>
      <div style="padding:16px; max-width:900px;">
        <div>
          <div class="flex items-center justify-between border-b pb-3 mb-4">
            <h2 class="text-xl font-semibold">Ajuda e Suporte</h2>
          </div>

          <div class="p-6 text-gray-600 border rounded">
            Nenhuma opção de ajuda disponível.
          </div>
        </div>
      </div>
    </template>
  </Story>

  <Story name="Mobile">
    <template #default>
      <div style="width:375px; padding:12px; border:1px solid #e5e7eb;">
        <Ajuda />
      </div>
    </template>
  </Story>

  <Story name="Dark">
    <template #default>
      <div class="dark" style="padding:16px; background:#0b1220; min-height:100vh;">
        <div style="max-width:900px;">
          <Ajuda />
        </div>
      </div>
    </template>
  </Story>
</template>

<script setup lang="ts">
import Ajuda from '../Settings/Ajuda.vue'
</script>

