interface User {
  // name: string,
  //age: number,
  email: string;
  password: string;
}

interface Auth {
  ok: boolean;
  id: string;
  token: string;
}
export { User, Auth };
