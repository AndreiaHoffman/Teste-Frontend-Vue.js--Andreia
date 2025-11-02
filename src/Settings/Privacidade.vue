<template>
    <div class="flex flex-col gap-[15px]">
        <div class="flex items-center justify-between">
          <div class="flex gap-2 items-center">
            <i class="pi pi-lock"></i>
            Perfil privado
          </div>
          <!--checkbox-->
          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" class="sr-only peer">
            <div class="w-11 h-6 bg-gray-300 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300
                        peer-checked:bg-blue-600 transition-all"></div>
            <div class="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full 
                        transition-all peer-checked:translate-x-5"></div>
          </label>
        </div>
        <div class="flex items-center justify-between cursor-pointer">
          <div class="flex gap-2 items-center"> 
            <i class="pi pi-user"></i>
            Status online
          </div> 
            <i class="pi pi-angle-right text-gray-600 dark:text-gray-300"></i>
        </div>
        <div class="flex items-center justify-between cursor-pointer">
          <div class="flex gap-2 items-center"> 
            <i class="pi pi-shield"></i>
            Perfis restritos
          </div> 
            <i class="pi pi-angle-right text-gray-600 dark:text-gray-300"></i>
        </div>
        <div class="flex items-center justify-between cursor-pointer">
          <div class="flex gap-2 items-center"> 
            <i class="pi pi-times-circle"></i>
            Perfis bloqueados
          </div> 
            <i class="pi pi-angle-right text-gray-600 dark:text-gray-300"></i>
        </div>
        <div class="flex items-center justify-between cursor-pointer">
          <div class="flex gap-2 items-center"> 
            <i class="pi pi-eye-slash"></i>
            Palavras ocultas
          </div> 
            <i class="pi pi-angle-right text-gray-600 dark:text-gray-300"></i>
        </div>
         <div class="pt-4 border-t">
          <h3 class="font-semibold text-gray-600 mb-2 dark:text-gray-300">Outras configurações de privacidade</h3>
          <p class="text-sm text-gray-500">
            Algumas configurações podem ser gerenciadas no Instagram.
          </p>
        </div>
      </div>
    </template>