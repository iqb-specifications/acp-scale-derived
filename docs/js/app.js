
    const schema = {
  "asyncapi": "3.0.0",
  "id": "urn:iqb-specifications:acp-scale-derived",
  "defaultContentType": "application/json",
  "info": {
    "title": "acp-scale-derived",
    "description": "Specification for assessment content package: Derived Scale.",
    "license": {
      "name": "CC0 1.0",
      "url": "https://creativecommons.org/publicdomain/zero/1.0/"
    },
    "version": " - click on schema id to expand",
    "contact": {
      "name": "Home of iqb-specifications (German only)",
      "url": "https://iqb-specifications.github.io/"
    }
  },
  "channels": {
    "iqb_data_structures": {
      "address": "iqb_data_structures",
      "messages": {
        "select_schema": {
          "payload": {
            "$id": "acp-scale-derived@0.4",
            "$schema": "http://json-schema.org/draft-07/schema#",
            "title": "Assessment Content Package: Derived Scale",
            "description": "Specification for assessment content package scale: Derived.",
            "type": "object",
            "properties": {
              "id": {
                "description": "Identifier referred by other scales and assessment output.",
                "type": "string",
                "examples": [
                  "bs2004.ma.9.global",
                  "bs2024.ma.9.3",
                  "fcr.de.reading"
                ],
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "name": {
                "description": "Language tagged text",
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "lang": {
                      "description": "ISO-language code",
                      "type": "string",
                      "minLength": 1,
                      "pattern": "^[a-z]{2}$",
                      "x-parser-schema-id": "<anonymous-schema-4>"
                    },
                    "value": {
                      "type": "string",
                      "x-parser-schema-id": "<anonymous-schema-5>"
                    }
                  },
                  "required": [
                    "lang",
                    "value"
                  ],
                  "additionalProperties": false,
                  "x-parser-schema-id": "<anonymous-schema-3>"
                },
                "minItems": 1,
                "x-parser-schema-id": "<anonymous-schema-2>"
              },
              "description": "$ref:$.channels.iqb_data_structures.messages.select_schema.payload.properties.name",
              "sources": {
                "description": "List of all scales providing it's value to this scale",
                "type": "array",
                "items": {
                  "type": "string",
                  "x-parser-schema-id": "<anonymous-schema-7>"
                },
                "minItems": 1,
                "x-parser-schema-id": "<anonymous-schema-6>"
              },
              "method": {
                "description": "Way how to process the scale values.",
                "type": "string",
                "enum": [
                  "SUM",
                  "MEAN",
                  "MAP"
                ],
                "default": "MAP",
                "x-parser-schema-id": "<anonymous-schema-8>"
              },
              "publicVocabularyUrl": {
                "description": "Url of a public vocabulary matching this scale.",
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-9>"
              },
              "mappings": {
                "description": "Applies the method MAP to the value. The first match will go.",
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "method": {
                      "type": "string",
                      "description": "Condition for evaluation",
                      "enum": [
                        "EQUALS",
                        "LESS_THAN",
                        "MORE_THAN",
                        "MAX",
                        "MIN"
                      ],
                      "x-parser-schema-id": "<anonymous-schema-12>"
                    },
                    "parameters": {
                      "type": "array",
                      "description": "Depending on the method, additional parameter(s) is needed.",
                      "items": {
                        "type": "string",
                        "x-parser-schema-id": "<anonymous-schema-14>"
                      },
                      "x-parser-schema-id": "<anonymous-schema-13>"
                    },
                    "newValue": {
                      "description": "Properties for the new value for scaleType DERIVED",
                      "type": "object",
                      "properties": {
                        "value": {
                          "description": "Value as outcome of this scale",
                          "type": "number",
                          "x-parser-schema-id": "<anonymous-schema-16>"
                        },
                        "label": "$ref:$.channels.iqb_data_structures.messages.select_schema.payload.properties.name",
                        "description": "$ref:$.channels.iqb_data_structures.messages.select_schema.payload.properties.name",
                        "publicVocabularyEntry": {
                          "description": "Url-suffix for a specific entry of a public vocabulary.",
                          "type": "string",
                          "x-parser-schema-id": "<anonymous-schema-17>"
                        }
                      },
                      "required": [
                        "value"
                      ],
                      "additionalProperties": false,
                      "x-parser-schema-id": "<anonymous-schema-15>"
                    }
                  },
                  "required": [
                    "method",
                    "parameters",
                    "newValue"
                  ],
                  "additionalProperties": false,
                  "x-parser-schema-id": "<anonymous-schema-11>"
                },
                "x-parser-schema-id": "<anonymous-schema-10>"
              },
              "mappingsElse": "$ref:$.channels.iqb_data_structures.messages.select_schema.payload.properties.mappings.items.properties.newValue"
            },
            "required": [
              "id",
              "name",
              "sources"
            ],
            "additionalProperties": false,
            "$defs": {
              "languageTaggedText": "$ref:$.channels.iqb_data_structures.messages.select_schema.payload.properties.name",
              "newValue": "$ref:$.channels.iqb_data_structures.messages.select_schema.payload.properties.mappings.items.properties.newValue"
            },
            "x-parser-schema-id": "acp-scale-derived@0.4"
          },
          "x-parser-unique-object-id": "select_schema",
          "x-parser-message-name": "select_schema"
        }
      },
      "x-parser-unique-object-id": "iqb_data_structures"
    }
  },
  "components": {
    "schemas": {
      "acp-scale-derived": "$ref:$.channels.iqb_data_structures.messages.select_schema.payload"
    }
  },
  "x-parser-spec-parsed": true,
  "x-parser-api-version": 3,
  "x-parser-spec-stringified": true
};
    const config = {"show":{"sidebar":false},"sidebar":{"showOperations":"byDefault"},"showOperations":false};
    const appRoot = document.getElementById('root');
    AsyncApiStandalone.render(
        { schema, config, }, appRoot
    );
  