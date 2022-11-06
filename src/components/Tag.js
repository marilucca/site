import { tagContainer } from '../css/components/Tag.module.css';

export default function Tag({ children }) {
  return <small className={tagContainer}>{children}</small>;
}
