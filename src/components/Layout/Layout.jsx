import AppBar from '../AppBar/AppBar';
import css from './Layout.module.css';

export default function Layuot({ children }) {
  return (
    <div className={css.container}>
      <AppBar />
      {children}
    </div>
  );
}
