function copy<T extends {name: string}, U extends keyof T>(value: T, key: U): T {
  value[key];
  return  value;
}
console.log(copy({ name: 'Quill' , age: 38}, "name")); 

class LightDatabase <T extends string | number | boolean>{
  add() {}
  remove() {}
  get() {}
}
const stringLightDatabase = new LightDatabase<string>();

interface Todo {
  title: string;
  text: string;
}
//ユーティリティタイプ
// type Todoable = Partial<Todo>
// type ReadTodo = Readonly<Todo>

