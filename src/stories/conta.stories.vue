<script lang="ts">
import { defineComponent, ref } from 'vue'
import type { Meta, StoryFn } from '@storybook/vue3'

const ContaMock = defineComponent({
  props: {
    loading: { type: Boolean, default: false },
    success: { type: Boolean, default: false },
    error: { type: String, default: '' }
  },
  setup(props) {
    const name = ref('Usuário de Teste')
    const email = ref('teste@exemplo.com')
    return { name, email, props }
  },
  template: `
    <div class="p-6 max-w-xl">
      <h2 class="text-2xl font-bold mb-4">Conta</h2>

      <form class="space-y-6">
        <div>
          <label class="block text-sm font-medium mb-1">Nome Completo</label>
          <input class="w-full p-2 border rounded" v-model="name" :disabled="props.loading || props.success" />
        </div>

        <div>
          <label class="block text-sm font-medium mb-1">Email</label>
          <input class="w-full p-2 border rounded" v-model="email" :disabled="props.loading || props.success" />
        </div>

        <div class="pt-4 flex justify-end">
          <button class="px-4 py-2 rounded bg-blue-600 text-white" :disabled="props.loading || props.success">
            <span v-if="props.loading">Salvando...</span>
            <span v-else>Salvar Alterações</span>
          </button>
        </div>
      </form>

      <div v-if="props.success" class="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
        Dados atualizados com sucesso!
      </div>

      <div v-if="props.error" class="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
        Erro ao salvar: {{ props.error }}
      </div>
    </div>
  `
})

export default {
  title: 'Settings/Conta',
  component: ContaMock,
} as Meta

const Template: StoryFn = (args) => ({
  components: { ContaMock },
  setup: () => ({ args }),
  template: '<ContaMock v-bind="args" />'
})

export const Default = Template.bind({})
Default.args = { loading: false, success: false, error: '' }

export const Loading = Template.bind({})
Loading.args = { loading: true, success: false, error: '' }

export const Success = Template.bind({})
Success.args = { loading: false, success: true, error: '' }

export const ErrorState = Template.bind({})
ErrorState.args = { loading: false, success: false, error: 'Falha de validação no servidor.' }
</script>