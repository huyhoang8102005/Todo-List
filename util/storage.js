const KEY = "TODOS"

export default {
  get() {
    return JSON.parse(localStorage.getItem(KEY)) || [];
  },
  set(todos) {
    localStorage.setItem(KEY, JSON.stringify(todos));
  }
}