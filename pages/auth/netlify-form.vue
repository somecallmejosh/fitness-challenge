<template>
  <v-page-wrap>
    <div class="w-full max-w-3xl mx-auto">
      <v-page-header>Netlify Form</v-page-header>
      <form name="contact" method="POST" data-netlify="true">
        <v-field>
          <label for="name">Your Name:</label>
          <input type="text" name="name" />
        </v-field>
        <v-field>
          <label for="email">Your Name:</label>
          <input type="emauk" name="email" />
        </v-field>
        <v-field>
          <label for="role">Your Role:</label>
          <select name="role[]" multiple>
            <option value="leader">Leader</option>
            <option value="follower">Follower</option>
          </select>
        </v-field>
        <v-field>
          <label for="message">Your Message</label>
          <textarea name="message"></textarea>
        </v-field>
        <v-field>
          <button class="btn btn-default">
            Register
          </button>
        </v-field>
      </form>
    </div>
  </v-page-wrap>
</template>
