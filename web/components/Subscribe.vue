<template>
<!-- Begin Mailchimp Signup Form -->
<div id="mc_embed_signup" class="blue">
    <v-form @submit.prevent="submit" style="min-width: 100%" id="mc-embedded-subscribe-form"  >
        <div id="mc_embed_signup_scroll">
        <h2 class="white--text">{{this.showResult?"Subscribe":"Thanks for subscribe"}}</h2>
        <div v-if="showResult">
          <div class="indicates-required white--text"><span class="asterisk">*</span> indicates required</div>
            <div class="mc-field-group white--text">
              <label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
            </label>
              <v-text-field
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
                    class="required email"
                ></v-text-field>
            </div>
            <div id="mce-responses" class="clear foot">
              <div class="response" id="mce-error-response" style="display:none"></div>
              <div class="response" id="mce-success-response" style="display:none"></div>
            </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
            <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_1a373db10c36be6f7bf5a2316_2b568fed8a" tabindex="-1" value=""></div>
            <div class="optionalParent">
                <div class="clear foot">
                    
                    <v-btn
                          class="ma-2 white"
                          type="submit"
                          outlined
                          color="primary"
                          id="mc-embedded-subscribe"
                        >
                        Download Pdf
                      </v-btn>
                </div>
            </div>
          </div>
          <div v-else>
            <p class="white--text">Subscribe Success! Redirect pdf</p>
          </div>
      </div>
</v-form>

</div>
<!--End mc_embed_signup-->
</template>

<style type="text/css">
	#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif;  width:100%;}
	/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
	   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
       /* MailChimp Form Embed Code - Classic - 12/17/2015 v10.7 */
#mc_embed_signup form {display:block; position:relative; text-align:left; padding:10px 0 10px 3%}
#mc_embed_signup h2 {font-weight:bold; padding:0; margin:15px 0; font-size:1.4em;}
#mc_embed_signup input {border: 1px solid #ABB0B2; -webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px;}
#mc_embed_signup input[type=checkbox]{-webkit-appearance:checkbox;}
#mc_embed_signup input[type=radio]{-webkit-appearance:radio;}
#mc_embed_signup input:focus {border-color:#333;}
#mc_embed_signup .button {clear:both; background-color: #039BE5; border: 0 none; border-radius:4px; transition: all 0.23s ease-in-out 0s; color: #000; cursor: pointer; display: inline-block; font-size:15px; font-weight: normal; height: 32px; line-height: 32px; margin: 0 5px 10px 0; padding: 0 22px; text-align: center; text-decoration: none; vertical-align: top; white-space: nowrap; width: fit-content; width: -moz-fit-content;}
#mc_embed_signup .button:hover {}
#mc_embed_signup .small-meta {font-size: 11px;}
#mc_embed_signup .nowrap {white-space:nowrap;}

#mc_embed_signup .mc-field-group {clear:left; position:relative; width:96%; padding-bottom:3%; min-height:50px; display:grid;}
#mc_embed_signup .size1of2 {clear:none; float:left; display:inline-block; width:46%; margin-right:4%;}
* html #mc_embed_signup .size1of2 {margin-right:2%; /* Fix for IE6 double margins. */}
#mc_embed_signup .mc-field-group label {display:block; margin-bottom:3px;}
#mc_embed_signup .mc-field-group input {display:block; width:100%; padding:8px 0; text-indent:2%;}
#mc_embed_signup .mc-field-group select {display:inline-block; width:99%; padding:5px 0; margin-bottom:2px;}
#mc_embed_signup .mc-address-fields-group {display:flex; flex-direction:row; justify-content:space-evenly; width:96%; gap:15px;}

#mc_embed_signup .datefield, #mc_embed_signup .phonefield-us{padding:5px 0;}
#mc_embed_signup .datefield input, #mc_embed_signup .phonefield-us input{display:inline; width:60px; margin:0 2px; letter-spacing:1px; text-align:center; padding:5px 0 2px 0;}
#mc_embed_signup .phonefield-us .phonearea input, #mc_embed_signup .phonefield-us .phonedetail1 input{width:40px;}
#mc_embed_signup .datefield .monthfield input, #mc_embed_signup .datefield .dayfield input{width:30px;}
#mc_embed_signup .datefield label, #mc_embed_signup .phonefield-us label{display:none;}

#mc_embed_signup .indicates-required {text-align:right; font-size:11px; margin-right:4%;}
#mc_embed_signup .asterisk {color:#e85c41; font-size:150%; font-weight:normal; position:relative; top:5px;}     
#mc_embed_signup .clear {clear:both;}
#mc_embed_signup .foot {display:grid; grid-template-columns: 3fr 1fr; width:96%; align-items: center;}
@media screen and (max-width:400px) {#mc_embed_signup .foot {display:grid; grid-template-columns: 1fr; width:100%; align-items: center;}}

@media screen and (max-width:400px) {#mc_embed_signup .referralBadge {width:50%;}}

#mc_embed_signup .brandingLogo {justify-self:right;}
@media screen and (max-width:400px) {#mc_embed_signup .brandingLogo {justify-self:left;}}

#mc_embed_signup .mc-field-group.input-group ul {margin:0; padding:5px 0; list-style:none;}
#mc_embed_signup .mc-field-group.input-group ul li {display:block; padding:3px 0; margin:0;}
#mc_embed_signup .mc-field-group.input-group label {display:inline;}
#mc_embed_signup .mc-field-group.input-group input {display:inline; width:auto; border:none;}

#mc_embed_signup div#mce-responses {float:left; top:-1.4em; padding:0em .5em 0em .5em; overflow:hidden; width:90%; margin: 0 5%; clear: both;}
#mc_embed_signup div.response {margin:1em 0; padding:1em .5em .5em 0; font-weight:bold; float:left; top:-1.5em; z-index:1; width:80%;}
#mc_embed_signup #mce-error-response {display:none;}
#mc_embed_signup #mce-success-response {color:#529214; display:none;}
#mc_embed_signup label.error {display:block; float:none; width:auto; margin-left:1.05em; text-align:left; padding:.5em 0;}
#mc_embed_signup .helper_text {color: #8d8985; margin-top: 2px; display: inline-block; padding: 3px; background-color: rgba(255,255,255,0.85); -webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px; font-size: 14px; font-weight: normal; z-index: 1;}

#mc-embedded-subscribe {clear:both; width:auto; display:block; margin:0px !important;}
#mc_embed_signup #num-subscribers {font-size:1.1em;}
#mc_embed_signup #num-subscribers span {padding:.5em; border:1px solid #ccc; margin-right:.5em; font-weight:bold;}

#mc_embed_signup #mc-embedded-subscribe-form div.mce_inline_error {display:inline-block; margin:2px 0 1em 0; padding:3px; background-color:rgba(255,255,255,0.85); -webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px; font-size:14px; font-weight:normal; z-index:1; color:#e85c41;}
#mc_embed_signup #mc-embedded-subscribe-form input.mce_inline_error {border:2px solid #e85c41;}

</style>

<script>
import {
  required,
  email,
} from 'vuelidate/lib/validators'
import mailchimp from '@mailchimp/mailchimp_marketing'
export default {
    props: {
        downloadLink: String,
    },
    components:{
      mailchimp,
    },
  data() {
    return {
      email: '',
      isSuccess: false,
      isError: false,
      isValidationError: false,
      submitStatus: null,
      showResult: true,
      mcData:{},
      success: this.successMessage
        ? this.successMessage
        : "Thanks for getting in touch. We'll get back to you as soon as possible",
      error: this.errorMessage
        ? this.errorMessage
        : "Thanks for getting in touch. There's been a problem with your submission. Please try again",
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
    async run() {
      mailchimp.setConfig({
        apiKey: '03d2fc06b8337f8e5071b6bc3017423c-us9',
        server: 'us9',
    });
      const mcData = {
        members : [
          {
            email_address : this.email,
            status : 'subscribed',
          }
        ]
      }
      const response = await mailchimp.lists.addListMember('2b568fed8a', {
        email_address: this.email,
        status: "subscribed",
      });
      
      console.log(response);
    },
    async submit() {
    this.$v.$touch()
    if (this.$v.$invalid) {
        this.submitStatus = 'error'
        this.isValidationError = true
      }else{
         this.isValidationError = false
         await fetch('https://adeptive.us9.list-manage.com/subscribe/post-json?u=1a373db10c36be6f7bf5a2316&amp;id=2b568fed8a&amp;f_id=00d20be1f0', {
          method: 'GET',
          headers: {
            'Authorization': 'Basic 03d2fc06b8337f8e5071b6bc3017423c-us9',
            'Content-Type': 'application/json; charset=utf-8',
          },
          dataType    : 'json',
          body: JSON.stringify({
                email_address : this.email,
                status : 'subscribed',
          }),
        })
          .then((res) => {
            this.isSuccess = true
            this.showResult = !this.showResult;
            setTimeout(() => {  window.open(this.downloadLink, '_blank'); }, 1000);
            
          })
          .catch((error) => {
            this.isError = true
            this.showResult = !this.showResult;
            setTimeout(() => {  window.open(this.downloadLink, '_blank'); }, 1000);
          })
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
    async downloadFile() {
      window.open(this.downloadLink, '_blank');
      const response = await fetch(this.downloadLink, {
        method: 'GET',
        responseType: "blob",
         headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
         
      });
      const blob = new Blob([response.body], { type: "application/pdf" });
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = "downloadPdf.pdf";
      link.click();
    },
  },
}
</script>