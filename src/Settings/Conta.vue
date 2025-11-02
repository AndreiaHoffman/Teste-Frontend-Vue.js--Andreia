<template>

<div>
  <h2 class="text-2xl font-bold mb-4">Conta</h2>

    <form @submit.prevent="handleUpdate" class="space-y-6">
      <div class="flex flex-col space-y-1">
        <label for="name" class="font-medium text-gray-700 dark:text-gray-300">Nome Completo</label>
        <InputText 
          id="name" 
          v-model="formData.name" 
          :disabled="isPending || isSuccess"
          class="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 p-2 rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div class="flex flex-col space-y-1">
        <label for="email" class="font-medium text-gray-700 dark:text-gray-300">Email</label>
        <InputText 
          id="email" 
          v-model="formData.email" 
          :disabled="isPending || isSuccess"
          class="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 p-2 rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div class="pt-4 flex justify-end">
    <Button 
      type="submit" 
      label="Salvar Alterações"
      :disabled="v$.$invalid || isSuccess"
      class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
    />
      </div>
    </form>

    <DynamicDialog />

      <div v-if="isSuccess" class="mb-4 mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-md dark:bg-green-900/30 dark:border-green-700 dark:text-green-300">
       Dados atualizados com sucesso!
    </div>
    <div v-if="isError" class="mb-4 mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md dark:bg-red-900/30 dark:border-red-700 dark:text-red-300">
       Erro ao salvar: {{ error?.message || 'Erro desconhecido.' }}
    </div>

</div>

</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useMutation, useQueryClient } from '@tanstack/vue-query';

import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import DynamicDialog from 'primevue/dynamicdialog';

import useVuelidate from '@vuelidate/core';
import { required, email, minLength } from '@vuelidate/validators';

const queryClient = useQueryClient();

const initialData = {
  name: 'Usuário de Teste',
  email: 'teste@exemplo.com',
};

const formData = reactive({
  ...initialData,
});

const rules = {
  name: { required, minLength: minLength(3) },
  email: { required, email },
};

const v$ = useVuelidate(rules, formData);

interface UserData {
  name: string;
  email: string;
}

const updateUserSettings = async (newUserData: UserData) => {
  console.log("Enviando dados para API:", newUserData);
  
  await new Promise(resolve => setTimeout(resolve, 1500)); 
  
  if (newUserData.email === 'fail@error.com') {
    throw new Error("Falha de validação no servidor.");
  }
  
  return { 
    ...newUserData, 
    id: 1, 

    updatedAt: new Date().toISOString()
  };
};

const { 
    mutate, 
    isPending, 
    isSuccess, 
    isError,   
    error,     
    reset
} = useMutation({
  mutationFn: updateUserSettings,
  onSuccess: (data) => {
    console.log("Dados bem-sucedidos. Novos dados:", data);
    
    queryClient.invalidateQueries({ queryKey: ['userProfile'] });
    
    setTimeout(() => {
        reset(); 
    }, 5000); 
  },
  onError: (err) => {
    console.error("Falhou:", err);
  }
});


const handleUpdate = async () => {
  const isFormValid = await v$.value.$validate();
  
  if (!isFormValid) {
    console.log('Formulário inválido. Exibindo erros.');
    return; 
  }

  reset(); 
  
  mutate(formData); 
};
</script>