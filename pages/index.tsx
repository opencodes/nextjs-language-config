import Link from 'next/link';
import { useChangeLocale, useCurrentLocale, useI18n, useScopedI18n } from '../locales';

export default function Home() {
  const t = useI18n();
  const changeLocale = useChangeLocale();
  const t2 = useScopedI18n('scope.more');
  const locale = useCurrentLocale();

  return (
    <div>
      <h1>CSR</h1>
      <p>
        Current locale: <span>{locale}</span>
      </p>
      <p>Hello: {t('hello')}</p>
      <Link href={`/${locale}/about`}>About</Link>
      <button type="button" onClick={() => changeLocale('en')}>
        EN
      </button>
      <button type="button" onClick={() => changeLocale('fr')}>
        FR
      </button>
    </div>
  );
}
