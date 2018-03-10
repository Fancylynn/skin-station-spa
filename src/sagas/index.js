import login from "./login";

export default function*() {
  yield [
    login()
  ];
}
