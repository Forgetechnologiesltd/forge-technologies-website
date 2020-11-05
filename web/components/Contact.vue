<template>
  <v-container
    class="blue-grey darken-3 my-10 my-md-16 py-n8 contact-form"
    :id="`contact-${_key}`"
    tag="section"
    fluid
    :style="$vuetify.breakpoint.mdAndUp ? 'max-height: 350px' : ''"
  >
    <v-container>
      <v-row>
        <v-col cols="12" md="6" class="pr-16 d-md-flex align-md-center">
          <v-card dark class="transparent align-self-center" flat>
            <h1 class="text-white text-h5 text-md-h4 mb-2">{{ heading }}</h1>
            <SanityContent
              class="text-white text-body-2 col-md-10 pl-0"
              :blocks="text"
            />
          </v-card>
        </v-col>
        <v-col cols="12" md="6" class="">
          <v-card
            class="primary my-md-n16 px-md-8 d-md-flex align-md-self-top"
            flat
          >
            <v-form class="">
              <v-container class="pt-md-8">
                <v-row justify="space-between">
                  <v-col cols="12" md="6" class="my-0 py-0">
                    <v-text-field
                      hide-details="auto"
                      class="blue-grey--text text--darken-3"
                      label="First Name"
                      v-model="name"
                      background-color="white"
                      :error-messages="nameErrors"
                      name="name"
                      required
                      @input="$v.name.$touch()"
                      @blur="$v.name.$touch()"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" class="my-0 py-0">
                    <v-text-field
                      hide-details="auto"
                      class="text-blue-grey text-darken-3"
                      label="Last Name"
                      v-model="surname"
                      background-color="white"
                      name="surname"
                      required
                      @input="$v.surname.$touch()"
                      @blur="$v.surname.$touch()"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row justify="space-between">
                  <v-col cols="12" md="6" class="my-0 py-0">
                    <v-text-field
                      hide-details="auto"
                      class="text-blue-grey text-darken-3"
                      label="Email Address"
                      v-model="email"
                      background-color="white"
                      :error-messages="emailErrors"
                      name="email"
                      required
                      @input="$v.email.$touch()"
                      @blur="$v.email.$touch()"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" class="my-0 py-0">
                    <v-text-field
                      hide-details="auto"
                      class="text-blue-grey text-darken-3"
                      label="number"
                      v-model="number"
                      background-color="white"
                      name="number"
                      required
                      @input="$v.number.$touch()"
                      @blur="$v.number.$touch()"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" class="my-0 py-0">
                    <v-textarea
                      hide-details="auto"
                      class="text-blue-grey text-darken-3"
                      label="Message"
                      v-model="message"
                      background-color="white"
                      name="message"
                      required
                      @input="$v.message.$touch()"
                      @blur="$v.message.$touch()"
                    ></v-textarea>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-btn class="ma-2 white" outlined color="primary">
                      Submit
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import { validationMixin } from 'vuelidate'
import {
  required,
  maxLength,
  minLength,
  email,
  numeric,
} from 'vuelidate/lib/validators'

export default {
  name: 'contact',
  props: {
    heading: String,
    text: Array,
    _key: String,
  },
  data() {
    return {
      name: '',
      surname: '',
      email: '',
      number: '',
      message: '',
    }
  },
  validations: {
    name: { required, maxLength: maxLength(20) },
    surname: { required, maxLength: maxLength(30) },
    email: { required, email },
    number: { required, numeric },
    message: { required, minLength: minLength(30) },
  },
  computed: {
    nameErrors() {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.maxLength &&
        errors.push('Name must be at most 10 characters long')
      !this.$v.name.required && errors.push('Name is required.')
      return errors
    },
    emailErrors() {
      const errors = []
      // if (!this.$v.email.$dirty) return errors
      // !this.$v.email.email && errors.push('Must be valid e-mail')
      // !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
  },

  methods: {
    submit() {
      this.$v.$touch()
    },
    clear() {
      this.$v.$reset()
      this.name = ''
      this.surname = ''
      this.email = ''
      this.message = ''
      this.number = null
    },
  },
}
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
}
</style>
