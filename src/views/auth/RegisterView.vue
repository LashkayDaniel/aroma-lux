<script setup>
import AuthLayout from "@/layouts/AuthLayout.vue";
import * as yup from 'yup';
import {useForm} from "vee-validate";
import ShowAnimation from "@/components/animations/DisplayAnimation.vue";
import {ref} from "vue";
import {useAuthStore} from "@/stores/auth.js";
import {useAuthError} from "@/composables/useAuthError.js";
import {useRouter} from "vue-router";


const {errors, meta, handleSubmit, defineField} = useForm({
  validationSchema: yup.object({
    name: yup.string().min(3),
    email: yup.string().email().min(4).required(),
    password: yup.string().min(6).required(),
  }),
});

const [name, nameAttrs] = defineField('name');
const [email, emailAttrs] = defineField('email');
const [password, passwordAttrs] = defineField('password');

const authError = ref('')
const authStore = useAuthStore()
const router = useRouter()

const {parseError} = useAuthError()

const onFormSubmit = handleSubmit(async (values) => {
  try {
    await authStore.register(values.name, values.email, values.password)
    await router.push('/profile')
  } catch (err) {
    console.log(err)
    authError.value = parseError(err.code);
  }
});

const vFocus = {
  mounted: (el) => {
    el.focus();
  }
}
</script>

<template>
  <auth-layout>
    <template #title>
      <h1 class="text-2xl text-zinc-400 mt-2 font-bold">Register</h1>
    </template>

    <form @submit.prevent="onFormSubmit" class="flex flex-col my-5 mx-auto w-1/2 relative">
      <label for="name" class="text-lg font-semibold text-gray-300">Name:</label>
      <input v-focus
             v-model="name"
             v-bind="nameAttrs"
             id="name"
             :class="{'border border-red-500/60':errors.name}"
             class="bg-zinc-500/50 px-2 py-1 rounded text-amber-400 focus:ring-amber-500/50 focus:ring-1 focus:outline-none"
             type="text"
             placeholder="Mark">
      <show-animation>
        <p class="text-sm text-red-500" v-if="errors.name">{{ errors.name }}</p>
      </show-animation>

      <label for="email" class="text-lg font-semibold text-gray-300">Email:</label>
      <input v-focus
             v-model="email"
             v-bind="emailAttrs"
             id="email"
             :class="{'border border-red-500/60':errors.email}"
             class="bg-zinc-500/50 px-2 py-1 rounded text-amber-400 focus:ring-amber-500/50 focus:ring-1 focus:outline-none"
             type="text"
             placeholder="darkmark@gmail.com">
      <show-animation>
        <p class="text-sm text-red-500" v-if="errors.email">{{ errors.email }}</p>
      </show-animation>

      <label for="password" class="text-lg mt-2 font-semibold text-gray-300">Password:</label>
      <input v-model="password"
             v-bind="passwordAttrs"
             id="password"
             :class="{'border border-red-500/60':errors.password}"
             class="bg-zinc-500/50 px-2 py-1 rounded text-amber-400 focus:ring-amber-500/50 focus:ring-1 focus:outline-none"
             type="password"
             placeholder="input password">
      <show-animation>
        <p class="text-sm text-red-500" v-if="errors.password">{{ errors.password }}</p>
      </show-animation>

      <show-animation>
        <p class="text-sm text-red-400 mt-3" v-if="authError">{{ authError }}</p>
      </show-animation>

      <div class="flex items-end justify-between">
        <button type="submit"
                :disabled="!meta.valid"
                class="w-fit py-1 px-4 mt-4 rounded-lg border-b-2 border-amber-700 text-black font-semibold bg-amber-500 hover:bg-amber-600/90 transition-colors duration-400 disabled:bg-amber-500/30">
          Register
        </button>

        <router-link to="/login"
                     class="text-amber-500/80 hover:text-amber-500/60 transition-all duration-300">
          Login
        </router-link>
      </div>
    </form>
  </auth-layout>
</template>