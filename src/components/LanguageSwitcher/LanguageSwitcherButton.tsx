"use client"

import { useState } from 'react';

interface LanguageSwitcherProps {
  languages: { lang: string; title: string }[];
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ languages }) => {
  const [currentLang, setCurrentLang] = useState('ru');

  const handleLangChange = (lang: string) => {
    setCurrentLang(lang);
  };

  return (
    <div className="flex gap-4">
      {languages.map((lang) => (
        <button key={lang.lang} onClick={() => handleLangChange(lang.lang)}>
          {lang.lang}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;