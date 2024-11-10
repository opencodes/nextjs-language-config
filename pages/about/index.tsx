import Link from 'next/link';
import { useChangeLocale, useCurrentLocale, useI18n, useScopedI18n } from '../../locales';

export default function About() {
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
            <p>About: {t('hello')}</p>
            <Link href="/">Home</Link>
        </div>
    );
}
