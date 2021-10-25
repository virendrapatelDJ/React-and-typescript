class Todo {
  id: number;
  text: string;

  constructor(text: string) {
    this.text = text;
    this.id = new Date().getTime();
  }
}

export default Todo;
