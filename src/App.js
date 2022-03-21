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
    <main className="container">
      <section className="m-5">
        <table id="date" className="table table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">Code</th>
              <th scope="col">Description</th>
              <th scope="col">Short</th>
              <th scope="col">Medium</th>
              <th scope="col">Long</th>
              <th scope="col">Full</th>
            </tr>
          </thead>
          <tbody>
            {
              arrayLanguage.map((item, index) => (
                <tr key={index}>
                  <td>{item.code}</td>
                  <td>{item.description}</td>
                  <td>
                    {new Intl.DateTimeFormat(item.code, { dateStyle: 'short' }).format(date)}
                    <br />
                    {new Intl.DateTimeFormat(item.code, { timeStyle: 'short' }).format(date)}
                  </td>
                  <td>
                    {new Intl.DateTimeFormat(item.code, { dateStyle: 'medium' }).format(date)}
                    <br />
                    {new Intl.DateTimeFormat(item.code, { timeStyle: 'medium' }).format(date)}
                  </td>
                  <td>
                    {new Intl.DateTimeFormat(item.code, { dateStyle: 'long' }).format(date)}
                    <br />
                    {new Intl.DateTimeFormat(item.code, { timeStyle: 'long' }).format(date)}
                  </td>
                  <td>
                    {new Intl.DateTimeFormat(item.code, { dateStyle: 'full' }).format(date)}
                    <br />
                    {new Intl.DateTimeFormat(item.code, { timeStyle: 'full' }).format(date)}
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </section>
      <section className="m-5">
        <table id="number" className="table table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">Code</th>
              <th scope="col">Description</th>
              <th scope="col">Number</th>
              <th scope="col">Percent</th>
            </tr>
          </thead>
          <tbody>
            {
              arrayLanguage.map((item, index) => (
                <tr key={index}>
                  <td>{item.code}</td>
                  <td>{item.description}</td>
                  <td>
                    {new Intl.NumberFormat(item.code, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    }).format(Math.PI * 100000000000)}
                  </td>
                  <td>
                    {new Intl.NumberFormat(item.code, {
                      style: 'percent',
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    }).format(Math.PI / 10)}
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </section>
      {/* <section className="m-5">
        <table id="locale" className="table table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">Code</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            {
              arrayLanguage.map((item, index) => (
                <tr key={index}>
                  <td>{item.code}</td>
                  <td>{item.description}</td>
                  <td>
                    {locale.getByTag(item.code).name}
                  </td>
                  <td>
                    {locale.getByTag(item.code).location}
                  </td>
                  <td>
                    {locale.getByTag(item.code).tag}
                  </td>
                  <td>
                    {locale.getByTag(item.code).lcid}
                  </td>
                  <td>
                    {locale.getByTag(item.code)['iso639-2']}
                  </td>
                  <td>
                    {locale.getByTag(item.code)['iso639-1']}
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </section> */}
    </main>
  );
}

export default App;
