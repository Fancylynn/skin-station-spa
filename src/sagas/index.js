import login from "./login";
import user from "./user";

export default function*() {
  yield [
    login(),
    user()
  ];
}
