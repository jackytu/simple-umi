import styles from './index.less';
import Navigation from '@/components/navigation/Navigation';

import Main from '@/layouts/main/main';

export default function IndexPage() {
  return (
    <div className={styles.middle}>
      <Main></Main>
    </div>
  );
}
