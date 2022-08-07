import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">ホーム</Link>
      <Link to="/createPost">記事投稿</Link>
      <Link to="/login">ログイン</Link>
    </nav>
  );
}

export default Navbar