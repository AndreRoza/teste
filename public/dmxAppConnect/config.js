dmx.config({
  "index": {
    "arr1": {
      "meta": [
        {
          "name": "$value",
          "type": "text"
        }
      ],
      "outputType": "array"
    },
    "cookies": [
      {
        "type": "text",
        "name": "teste"
      },
      {
        "type": "text",
        "name": "_fbp"
      }
    ],
    "localStorage": [
      {
        "type": "text",
        "name": "nome"
      },
      {
        "type": "text",
        "name": "email"
      }
    ],
    "repeat1": {
      "meta": [
        {
          "type": "text",
          "name": "nome"
        },
        {
          "type": "number",
          "name": "id"
        }
      ],
      "outputType": "array"
    },
    "repeat2": {
      "meta": [
        {
          "type": "text",
          "name": "nome"
        },
        {
          "type": "text",
          "name": "action"
        },
        {
          "type": "number",
          "name": "id"
        }
      ],
      "outputType": "array"
    },
    "var2": {
      "outputType": "text"
    },
    "data_detail1": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "nome"
        },
        {
          "type": "text",
          "name": "action"
        },
        {
          "type": "text",
          "name": "id_pagamento"
        },
        {
          "type": "text",
          "name": "boaa"
        },
        {
          "type": "text",
          "name": "dd"
        },
        {
          "type": "datetime",
          "name": "date"
        }
      ],
      "outputType": "array"
    }
  },
  "main": {
    "query": [
      {
        "type": "text",
        "name": "nome"
      }
    ]
  }
});
