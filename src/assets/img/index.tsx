import profile from "./profile.jpg"
import html from "./html.jpg"
import css from "./css.jpg"
import git from "./git.jpg"
import bootstrap from "./bootstrap.jpg"
import jquery from "./jquery.jpg"
import js from "./js.jpg"
import laravel from "./laravel.jpg"
import mysql from "./mysql.jpg"
import next from "./next.jpg"
import node from "./node.jpg"
import php from "./php.jpg"
import react from "./react.jpg"
import tailwind from "./tailwind.jpg"

export interface IKeyValue {
  [key: string]: string
}

const images: IKeyValue = {
  profile,
  html,
  css,
  git,
  bootstrap,
  jquery,
  js,
  laravel,
  mysql,
  next,
  node,
  php,
  react,
  tailwind,
}

export default images;