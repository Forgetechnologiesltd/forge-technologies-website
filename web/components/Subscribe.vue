<template>
<!-- Begin Mailchimp Signup Form -->
<div id="mc_embed_signup" class="custom-blue py-8 px-8 rounded-lg">
    <v-form @submit.prevent="submit" style="min-width: 100%" id="mc-embedded-subscribe-form"  class="d-flex justify-center text-center" >
        <div id="mc_embed_signup_scroll">
        <h2 class="white--text sb-top-text">{{this.showResult?"Download case study":"Success!"}}</h2>
        <p class="white--text sb-bottom-text">{{this.showResult?"Fill out your email address to download your copy.":"You can now view the case study as a PDF."}}</p>
        <div v-if="showResult">
            <div class="mc-field-group white--text mr-0 justify-center">
              <v-text-field
                    label="Email Address"
                    hide-details="auto"
                    color="white"
                    v-model="email"
                    :error-messages="emailErrors"
                    background-color="white"
                    name="EMAIL"
                    required
                    @input="$v.email.$touch()"
                    @blur="$v.email.$touch()"
                    id="mce-EMAIL"
                    class="required email sb-fixwidth"
                ></v-text-field>
            </div>
            <v-col cols="12">
                    <v-btn
                      class="ma-2 white font-weight-bold"
                      type="submit"
                      outlined
                      color="primary"
                    >
                      Submit
                    </v-btn>
                    
                  </v-col>
          </div>
          <div v-else>
            <v-col cols="12">
                    <v-btn
                      class="ma-2 white font-weight-bold"
                      type="submit"
                      outlined
                      color="primary"
                      @click="goPdfLink()"
                    >
                      View the PDF
                    </v-btn>
                    
                  </v-col>
          </div>
      </div>
</v-form>

</div>
<!--End mc_embed_signup-->
</template>


<script>
import {
  required,
  email,
} from 'vuelidate/lib/validators'
const FORMSPARK_ACTION_URL = 'https://submit-form.com/1ZI6kiRh'
export default {
    props: {
        downloadLink: String,
    },
  data() {
    return {
      email: '',
      isError: false,
      isValidationError: false,
      submitStatus: null,
      showResult: true,
    }
  },
  validations: {
    email: { required, email },
  },
  computed: {
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
      }else{
         this.isValidationError = false
         
         await fetch(FORMSPARK_ACTION_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            email: this.email,
          }),
        })
          .then((res) => {
            this.showResult = !this.showResult;
            this.clear();
          })
          .catch((error) => {
            this.isError = true
          })

      }
      
    },
    goPdfLink(){
      window.open(this.downloadLink, '_blank');
    },
    clear() {
      this.$v.$reset()
      this.email = ''
    },
  },
}
</script>

<style>
  .sb-top-text{
    font-size: 30px !important;
  }
  .sb-bottom-text{
    font-size: 20px !important;
  }
  .sb-fixwidth{
   width: 260px !important;
  }

  .custom-blue{
    background-color: #039be5 !important;
    border-color: #039be5 !important;
  }
  .custom-radius{
    border-radius: 20px !important;
    overflow: hidden !important;
  }
</style>