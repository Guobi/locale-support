/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import React from 'react';
// import locale from 'locale-codes';
import './App.css';

function App() {
  const date = new Date();

  const arrayLanguage = [
    {
      code: 'ar-AE',
      description: 'Arabic (U.A.E)',
    },
    {
      code: 'cs-CZ',
      description: 'Czech (Czech Republic)',
    },
    {
      code: 'da-dk',
      description: 'Danish (Denmark)',
    },
    {
      code: 'nl-NL',
      description: 'Dutch (Netherlands)',
    },
    {
      code: 'en-AU',
      description: 'English (Australia)',
    },
    {
      code: 'en-GB',
      description: 'English (UK)',
    },
    {
      code: 'en-SG',
      description: 'English (Singapore)',
    },
    {
      code: 'en-US',
      description: 'English (US)',
    },
    {
      code: 'fr-CA',
      description: 'French (Canada)',
    },
    {
      code: 'fr-FR',
      description: 'French (France)',
    },
    {
      code: 'de-DE',
      description: 'German (Germany)',
    },
    {
      code: 'de-CH',
      description: 'German (Switzerland)',
    },
    {
      code: 'es-MX',
      description: 'Spanish (Mexico)',
    },
    {
      code: 'es-ES',
      description: 'Spanish (Spain)',
    },
    {
      code: 'he-IL',
      description: 'Hebrew (Israel)',
    },
    {
      code: 'hu-HU',
      description: 'Hungarian (Hungary)',
    },
    {
      code: 'it-IT',
      description: 'Italian (Italy)',
    },
    {
      code: 'ja-JP',
      description: 'Japanese (Japan)',
    },
    {
      code: 'ko-KR',
      description: 'Korean (Korea)',
    },
    {
      code: 'nb-NO',
      description: 'Norwegian-Bokmål (Norway)',
    },
    {
      code: 'pl-PL',
      description: 'Polish (Poland)',
    },
    {
      code: 'pt-BR',
      description: 'Portuguese (Brazil)',
    },
    {
      code: 'pt-PT',
      description: 'Portuguese (Portugal)',
    },
    {
      code: 'ru-RU',
      description: 'Russian (Russia)',
    },
    {
      code: 'sv-SE',
      description: 'Swedish (Sweden)',
    },
    {
      code: 'th-TH',
      description: 'Thai (Thailand)',
    },
    {
      code: 'tr-TR',
      description: 'Turkish (Turkey)',
    },
    {
      code: 'uk-UA',
      description: 'Ukrainian (Ukraine)',
    },
    {
      code: 'vi-VN',
      description: 'Vietnamese (Vietnam)',
    },
    {
      code: 'zh-CN',
      description: 'Simplified Chinese',
    },
    {
      code: 'zh-TW',
      description: 'Traditional Chinese',
    },
  ];

  return (
    <div className="container">
      <div className="row">
        {
        arrayLanguage.map((item, index) => (
          <div className="col-md-6 col-lg-4">
            <div className="card m-2 border-0">
              <div className="card-body">
                <h5 className="card-title">
                  {item.description}
                </h5>
                <div className="card-text">
                  <div>
                    Code:
                    {' '}
                    {item.code}
                  </div>
                  <div>
                    S-Date:
                    {' '}
                    {new Intl.DateTimeFormat(item.code, { dateStyle: 'short' }).format(date)}
                    {' '}
                    {new Intl.DateTimeFormat(item.code, { timeStyle: 'short' }).format(date)}
                  </div>
                  <div>
                    M-Date:
                    {' '}
                    {new Intl.DateTimeFormat(item.code, { dateStyle: 'medium' }).format(date)}
                    {' '}
                    {new Intl.DateTimeFormat(item.code, { timeStyle: 'medium' }).format(date)}
                  </div>
                  <div>
                    Number:
                    {' '}
                    {new Intl.NumberFormat(item.code, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    }).format(Math.PI * 100000000000)}
                  </div>
                  <div>
                    Percent:
                    {' '}
                    {new Intl.NumberFormat(item.code, {
                      style: 'percent',
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    }).format(Math.PI / 10)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      }
      </div>
    </div>
  );
}

export default App;
