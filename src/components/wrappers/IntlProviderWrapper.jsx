import React from 'react';
import { useSelector } from 'react-redux';

import { IntlProvider } from 'react-intl';

import { russianDictionary } from '@/i18n/ru';
import { englishDictionary } from '@/i18n/en';


export default function IntlProviderWrapper({ children }) {
  const language = useSelector(state => state.global.language);

  const dictionary = {
    'ru': russianDictionary,
    'en': englishDictionary,
  };

  return (
    <IntlProvider locale={language}  messages={dictionary[language].messages}>
      {children}
    </IntlProvider>
  );
}