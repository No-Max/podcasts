<template>
  <div class="container">
    <div class="large-12 medium-12 small-12 cell">
      <label>Files
        <input type="file" id="files" ref="files" multiple v-on:change="handleFilesUpload($event)"/>
      </label>
    </div>
    <div class="large-12 medium-12 small-12 cell">
      <div
        v-for="(file, key) in files"
        :key="key"
        class="file-listing">
        {{ file.name }}
        <img :src="file.src">
        <span class="remove-file" v-on:click="removeFile( key )">Remove</span></div>
    </div>
    <br>
    <div class="large-12 medium-12 small-12 cell">
      <button v-on:click="addFiles()">Add Files</button>
    </div>
    <br>
    <div class="large-12 medium-12 small-12 cell">
      <button v-on:click="submitFiles()">Submit</button>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Createpodcast',
  data () {
    return {
      files: [],
      files2: []
    }
  },
  /* Defines the method used by the component */
  methods: {
    /* Adds a file */
    addFiles () {
      this.$refs.files.click()
    },
    /* Submits files to the server */
    submitFiles () {
      /* Initialize the form data */
      let formData = new FormData()
      /* Iteate over any file sent over appending the files to the form data. */
      for (var i = 0; i < this.files.length; i++) {
        let file = this.files[i]
        formData.append('files[' + i + ']', file)
      }
      /* Make the request to the POST /select-files URL */
      axios.post('/select-files',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      ).then(function () {
        console.log('SUCCESS!!')
      }).catch(function () {
        console.log('FAILURE!!')
      })
    },
    /* Handles the uploading of files */
    handleFilesUpload (e) {
      let uploadedFiles = this.$refs.files.files
      /* Adds the uploaded file to the files array */
      for (var i = 0; i < uploadedFiles.length; i++) {
        this.setFileData(uploadedFiles[i])
      }
    },
    /* Removes a select file the user has uploaded */
    removeFile (key) {
      this.files.splice(key, 1)
    },
    setFileData (file) {
      var reader = new FileReader()
      reader.onload = function () {
        this.files.push({
          name: file.name,
          src: reader.result
        })
      }.bind(this)
      reader.readAsDataURL(file)
    }
  }
}
</script>
<style lang="scss">
.container {
  padding: 70px;
}
</style>
