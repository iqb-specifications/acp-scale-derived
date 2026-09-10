[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)

Assessment Content Specifications

**Scale** as ruleset for calculation performance indicators of testees. A derived scale processes values from other scales.

Read more:

* [All specifications of IQB](https://iqb-specifications.github.io/) (German only)
* [Learn about TBA](https://iqb-berlin.github.io/tba-info/) (German only)
* [Learn about StarS](https://iqb-berlin.github.io/rising-stars/) (German only)
* [Verona-Interfaces](https://verona-interfaces.github.io/)

Change log see releases.

# Erläuterung der Spezifikation

### `DERIVED`

Abgeleitete Skalen transformieren den Wert aus einer anderen Skala oder fassen Ergebnisse anderer Skalen zusammen.

* `id`, `name`, `description`: Die ID wird in allen Datenlisten verwendet. Ein Name und optional eine Beschreibung unterstützen die UI (sprachdifferenziert).
* `sources`: Hier sind die Skalen anzugeben mit ihrer ID, deren Wert in die neue Skala eingehen soll. Wenn nur eine Skalentransformation erfolgen soll, reicht die Angabe einer Skala in einem Array.
* `method`: Mathematische Methode, wie der neue Wert gebildet wird:
  * `SUM`: Die Werte der Ausgangsskalen werden summiert
  * `MEAN`: Es wird ein Mittelwert gebildet
  * `MAP`: Anhand einer Mappingtabelle (s. u.) wird der Wert der Ausgangsskala durch einen neuen Wert ersetzt
* `publicVocabularyUrl`: Wenn die Skala einer gut etablierten ordinalen Skala entspricht, ist sie eventuell als Vokabular veröffentlicht. Wenn hier ein Link auf diese Skala eingetragen wird, erhöht man die Interoperabilität: Skalen aus unterschiedlichen Testungen, die auf dieselbe öffentliche Skala verweisen, haben vergleichbare Werte.
* `mappings`:  Der erste Eintrag in dieser Liste, für den ein `true` ermittelt wurde, liefert den neuen Skalenwert. Wird kein zutreffender Eintrag gefunden, bekommt die Skala den Wert von `else` (s. u.). Folgende Eigenschaften sind für jeden Eintrag vorgesehen:
  * `method`, `methodParameters`: Für die Vergleichsmethode stehen zur Verfügung `EQUALS`, `LESS_THAN`, `MORE_THAN`, `MAX` und `MIN`. Der Operand wird in der Eigenschaft `methodParameters` übergeben. Es handelt sich um ein Array, falls spätere Methoden mehrere Parameter benötigen.
  * `newValue`: Der neue Wert, der bei Zutreffen der Methode den neuen Skalenwert bildet. Es handelt sich um ein Objekt mit den Eigenschaften `value`, `label`, `description` und `publicVocabularyEntry`. Letzteres ist ein Suffix für einen konkreten Eintrag im öffentlichen Vokabular, das unter `publicVocabularyUrl` genannt wurde
* `mappingElse`: Dieser Wert wird gesetzt, wenn kein Eintrag aus der Mapping-Liste zutrifft. Es handelt sich um ein Objekt mit den Eigenschaften `value`, `label`, `description` und `publicVocabularyEntry`. Letzteres ist ein Suffix für einen konkreten Eintrag im öffentlichen Vokabular, das unter `publicVocabularyUrl` genannt wurde.

## Beispiele

<details>
<summary>MAP Prozentrang</summary>

```json
{
  "id": "derived1.percent-ranking",
  "name": [
    {
      "lang": "de",
      "value": "Prozentrang"
    }
  ],
  "description": [
    {
      "lang": "de",
      "value": "Demo-Skala zur Ableitung eines Prozentranges."
    }
  ],
  "method": "MAP",
  "sources": [
    "base1.fcr"
  ],
  "mappings": [
    {
        "method": "MIN",
        "parameters": [
            "75"
        ],
        "newValue": {
            "value": 80
        }
    },
    {
        "method": "MIN",
        "parameters": [
            "50"
        ],
        "newValue": {
            "value": 70
        }
    },
    {
        "method": "MIN",
        "parameters": [
            "25"
        ],
        "newValue": {
            "value": 50
        }
    }
    ],
    "mappingElse": {
        "value": 0
    }
}
```

Hinweis: Eine Prozentrang-Ableitung verschiebt die Verteilung in einem gewünschtem Maße.

</details>

<details>
<summary>MAP Kompetenzstufen</summary>

```json
{
  "id": "derived2.comp-level",
  "name": [
    {
      "lang": "de",
      "value": "Kompetenzstufen Ma-P-GM"
    }
  ],
  "description": [
    {
      "lang": "de",
      "value": "Demo-Skala zur Ableitung einer Kompetenzstufe für das Fach Mathematik Primarstufe Globalmodell."
    }
  ],
  "method": "MAP",
  "sources": [
    "base2.wle"
  ],
  "publicVocabularyUrl": "https://w3id.org/iqb/v71/mp1/",
  "mappings": [
      {
        "method": "MIN",
        "parameters": [
          "600"
        ],
        "newValue": {
          "value": 5,
          "label": [
            {
              "lang": "de",
              "value": "Stufe V"
            }
          ],
          "description": [
            {
              "lang": "de",
              "value": "Modellierung komplexer Probleme unter selbstständiger Entwicklung geeigneter Strategien"
            }
          ],
          "publicVocabularyEntry": "p2p"
        }
      },
      {
        "method": "MIN",
        "parameters": [
          "530"
        ],
        "newValue": {
          "value": 4,
          "label": [
            {
              "lang": "de",
              "value": "Stufe IV"
            }
          ],
          "description": [
            {
              "lang": "de",
              "value": "sicheres und flexibles Anwenden von begrifflichem Wissen und Prozeduren im curricularen Umfang"
            }
          ],
          "publicVocabularyEntry": "c2q"
        }
      },
      {
        "method": "MIN",
        "parameters": [
          "460"
        ],
        "newValue": {
          "value": 3,
          "label": [
            {
              "lang": "de",
              "value": "Stufe III"
            }
          ],
          "description": [
            {
              "lang": "de",
              "value": "einfache Anwendungen von Grundlagenwissen (Routineprozeduren in einem klar strukturierten Kontext)"
            }
          ],
          "publicVocabularyEntry": "a5v"
        }
      },
      {
        "method": "MIN",
        "parameters": [
          "390"
        ],
        "newValue": {
          "value": 2,
          "label": [
            {
              "lang": "de",
              "value": "Stufe II"
            }
          ],
          "description": [
            {
              "lang": "de",
              "value": "einfache Anwendungen von Grundlagenwissen (Routineprozeduren in einem klar strukturierten Kontext)"
            }
          ],
          "publicVocabularyEntry": "e3y"
        }
      }
    ],
    "mappingElse": {
      "value": 1,
      "label": [
        {
          "lang": "de",
          "value": "Stufe I"
        }
      ],
      "description": [
        {
          "lang": "de",
          "value": "technische Grundlagen (Routineprozeduren auf Grundlage einfachen begrifflichen Wissens)"
        }
      ],
      "publicVocabularyEntry": "a9d"
    }
}
```

Hinweis: Hier wird der numerische Wert einer Metrik "500 100" für Bildungsstandards in eine Kompetenzstufe übersetzt. Die Stufen sind mit Bezeichnungen versehen und außerdem mit einem Online-Vokabular verlinkt.

</details>

<details>
<summary>SUM</summary>

```json
{
  "id": "aggregated.sum-global",
  "name": [
    {
      "lang": "de",
      "value": "Summieren von Subskalen"
    }
  ],
  "description": [
    {
      "lang": "de",
      "value": "Demo-Skala für das Summieren der Itemsummen aus Subskalen zu einem globalen Skalenwert."
    }
  ],
  "method": "SUM",
  "sources": [
      "fcs.subscale1",
      "fcs.subscale2",
      "fcs.subscale3"
  ]
}
```

Hinweis: In diesem Beispiel wurden für drei Subskalen die Summen der Itemscores ermittelt. Der Wert der Globalskala ergibt sich aus der Summe dieser Subskalen, da alle Items der Subskalen gleichzeitig zum Globalmodell beitragen. Eine der Subskalen wird doppelt gewichtet.

</details>