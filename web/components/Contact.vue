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
            <v-form @submit.prevent="submit" style="min-width: 100%">
              <v-container class="pt-md-8">
                <v-row justify="space-between">
                  <v-col cols="12" md="6" class="my-0 py-0">
                    <v-text-field
                      hide-details="auto"
                      label="First Name"
                      v-model="name"
                      :error-messages="nameErrors"
                      background-color="white"
                      color="white"
                      name="name"
                      required
                      @input="$v.name.$touch()"
                      @blur="$v.name.$touch()"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" class="my-0 py-0">
                    <v-text-field
                      hide-details="auto"
                      color="white"
                      label="Last Name"
                      v-model="surname"
                      :error-messages="surnameErrors"
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
                      color="white"
                      label="Email Address"
                      v-model="email"
                      :error-messages="emailErrors"
                      background-color="white"
                      name="email"
                      required
                      @input="$v.email.$touch()"
                      @blur="$v.email.$touch()"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" class="my-0 py-0">
                    <v-text-field
                      hide-details="auto"
                      color="white"
                      label="Number"
                      v-model="number"
                      background-color="white"
                      name="number"
                      @input="$v.number.$touch()"
                      @blur="$v.number.$touch()"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" class="my-0 py-0">
                    <v-textarea
                      hide-details="auto"
                      color="white"
                      label="Message"
                      :error-messages="messageErrors"
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
                    <v-btn
                      class="ma-2 white"
                      type="submit"
                      outlined
                      color="primary"
                    >
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
    <v-snackbar v-model="isSuccess" color="success" timeout="10000">
      {{ success }}

      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="isSuccess = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <v-snackbar v-model="isError" color="error" timeout="10000">
      {{ error }}
      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="isError = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <v-snackbar v-model="isValidationError" color="error" timeout="10000">
      Please fill in all required fields.
      <template v-slot:action="{ attrs }">
        <v-btn
          color="white"
          text
          v-bind="attrs"
          @click="isValidationError = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
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
const FORMSPARK_ACTION_URL = 'https://submit-form.com/xM5P4YTR'
export default {
  name: 'contact',
  props: {
    heading: String,
    text: Array,
    successMessage: String,
    errorMessage: String,
    _key: String,
  },
  data() {
    return {
      name: '',
      surname: '',
      email: '',
      number: '',
      message: '',
      isSuccess: false,
      isError: false,
      isValidationError: false,
      submitStatus: null,
      success: this.successMessage
        ? this.successMessage
        : "Thanks for getting in touch. We'll get back to you as soon as possible",
      error: this.errorMessage
        ? this.errorMessage
        : "Thanks for getting in touch. There's been a problem with your submission. Please try again",
    }
  },
  validations: {
    name: { required, maxLength: maxLength(20) },
    surname: { required, maxLength: maxLength(30) },
    email: { required, email },
    number: { numeric },
    message: { required, minLength: minLength(30) },
  },
  computed: {
    nameErrors() {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.maxLength &&
        errors.push('Name must be at most 20 characters long')
      !this.$v.name.required && errors.push('Name is required.')
      return errors
    },
    surnameErrors() {
      const errors = []
      if (!this.$v.surname.$dirty) return errors
      !this.$v.surname.maxLength &&
        errors.push('Last name must be at most 30 characters long')
      !this.$v.surname.required && errors.push('surname is required.')
      return errors
    },
    messageErrors() {
      const errors = []
      if (!this.$v.message.$dirty) return errors
      !this.$v.message.minLength &&
        errors.push('Message must be at least 30 characters long')
      !this.$v.message.required && errors.push('message is required.')
      return errors
    },
    numberErrors() {
      const errors = []
      if (!this.$v.number.$dirty) return errors
      !this.$v.number.numeric && errors.push('only numbers here')
      return errors
    },
    emailErrors() {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
  },
  methods: {
    async submit() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'error'
        this.isValidationError = true
      } else {
        this.isValidationError = false
        await fetch(FORMSPARK_ACTION_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: this.name,
            surname: this.surname,
            email: this.email,
            number: this.number,
            message: this.message,
          }),
        })
          .then((res) => {
            this.isSuccess = true
          })
          .catch((error) => {
            this.isError = true
          })
        this.clear()
      }
    },
    clear() {
      this.$v.$reset()
      this.name = ''
      this.surname = ''
      this.email = ''
      this.message = ''
      this.number = null
      this.submitStatus = null
    },
  },
}
</script>

<style lang="scss" scoped></style>
