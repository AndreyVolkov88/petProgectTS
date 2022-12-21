import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from 'shared/ui/Button/Button';

// Компонент для тестирования ErrorBoundary
export const BugButton = () => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();

    const onThrow = () => setError(true);

    useEffect(() => {
        if (error) throw new Error();
    }, [error]);

    return (
        <Button
            style={{ marginRight: '8px' }}
            onClick={onThrow}
        >
            {t('Бросить ошибку')}
        </Button>
    );
};
