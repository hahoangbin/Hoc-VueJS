<template>
  <div 
    class="modal fade"
    @click.self="onCloseModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header" :class="{ 'bg-green' : theme === 'contact'}">
          <h2>{{ title }}</h2>
        </div>
        <div class="modal-body">
          <p>{{ content }}</p>
          <slot></slot>
        </div>
        <div class="modal-footer">
          <button 
            @click="onCloseModal"
            type="button" 
            class="btn btn-secondary" 
            data-bs-dismiss="modal" >Close</button>
          <button 
            type="button" 
            class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      default: ""
    },
    theme: {
      type: String,
      default: "example",
      validator(value) {
        return ["example", "sale","contact","left"].includes(value)
      }
    }
  },
  
  data() {
    return {
    }
  },
  methods: {
    onCloseModal() {
      this.$emit("cancel")
    }
  }

}

</script>

<style scoped lang="css">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1060;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
  background-color: rgba(0, 0, 0, 0.2);
}
.fade {
    transition: opacity .15s linear;
}

.modal-dialog {
  position: relative;
  width: auto;
  margin: 0.5em;
  pointer-events: none;
}

.modal-dialog {
    max-width: 500px;
    margin: 1.75rem auto;

}


.modal.fade .modal-dialog {
    transition: transform .3s ease-out;
    transform: translate(0, 20px);
}

.modal-content {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: 0.3rem;
    outline: 0;
}

.modal-header {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1rem;
    border-bottom: 1px solid #dee2e6;
    border-top-left-radius: calc(0.3rem - 1px);
    border-top-right-radius: calc(0.3rem - 1px);
}

.modal-header.bg-green {
  background-color: green;
}

.modal-body {
    position: relative;
    flex: 1 1 auto;
    padding: 1.5rem;
    text-align: left;
    line-height: 3em;
}

.modal-footer {
    display: flex;
    flex-wrap: wrap;
    flex-shrink: 0;
    align-items: center;
    justify-content: flex-end;
    padding: 0.5rem;
    border-top: 1px solid #dee2e6;
    border-bottom-right-radius: calc(0.3rem - 1px);
    border-bottom-left-radius: calc(0.3rem - 1px);
}

.modal-footer>* {
    margin: 0.5rem;
}
.btn-primary {
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd;
}
.btn {
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border-radius: 0.4rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}


/* :root {
    --bs-blue: #0d6efd;
    --bs-indigo: #6610f2;
    --bs-purple: #6f42c1;
    --bs-pink: #d63384;
    --bs-red: #dc3545;
    --bs-orange: #fd7e14;
    --bs-yellow: #ffc107;
    --bs-green: #198754;
    --bs-teal: #20c997;
    --bs-cyan: #0dcaf0;
    --bs-white: #fff;
    --bs-gray: #6c757d;
    --bs-gray-dark: #343a40;
    --bs-primary: #0d6efd;
    --bs-secondary: #6c757d;
    --bs-success: #198754;
    --bs-info: #0dcaf0;
    --bs-warning: #ffc107;
    --bs-danger: #dc3545;
    --bs-light: #f8f9fa;
    --bs-dark: #212529;
    --bs-font-sans-serif: system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    --bs-font-monospace: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
    --bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));
} */
</style>