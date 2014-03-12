{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "template"
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "document"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "currentScript"
                  }
                },
                "property": {
                  "type": "Identifier",
                  "name": "parentNode"
                }
              },
              "property": {
                "type": "Identifier",
                "name": "querySelector"
              }
            },
            "arguments": [
              {
                "type": "Literal",
                "value": "template"
              }
            ]
          }
        }
      ],
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "start"
      },
      "params": [],
      "defaults": [],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "ThisExpression"
                },
                "property": {
                  "type": "Identifier",
                  "name": "tick"
                }
              },
              "arguments": []
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "ThisExpression"
                },
                "property": {
                  "type": "Identifier",
                  "name": "_interval"
                }
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "window"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "setInterval"
                  }
                },
                "arguments": [
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "tick"
                        }
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "bind"
                      }
                    },
                    "arguments": [
                      {
                        "type": "ThisExpression"
                      }
                    ]
                  },
                  {
                    "type": "Literal",
                    "value": 1000
                  }
                ]
              }
            }
          }
        ]
      },
      "rest": null,
      "generator": false,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "stop"
      },
      "params": [],
      "defaults": [],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "window"
                },
                "property": {
                  "type": "Identifier",
                  "name": "clearInterval"
                }
              },
              "arguments": [
                {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "ThisExpression"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "_interval"
                  }
                }
              ]
            }
          }
        ]
      },
      "rest": null,
      "generator": false,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "fmt"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "n"
        }
      ],
      "defaults": [],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "ConditionalExpression",
                "test": {
                  "type": "BinaryExpression",
                  "operator": "<",
                  "left": {
                    "type": "Identifier",
                    "name": "n"
                  },
                  "right": {
                    "type": "Literal",
                    "value": 10
                  }
                },
                "consequent": {
                  "type": "Literal",
                  "value": "0"
                },
                "alternate": {
                  "type": "Literal",
                  "value": ""
                }
              },
              "right": {
                "type": "Identifier",
                "name": "n"
              }
            }
          }
        ]
      },
      "rest": null,
      "generator": false,
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "key": {
              "type": "Identifier",
              "name": "readyCallback"
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "params": [],
              "defaults": [],
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "_root"
                        }
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "createShadowRoot"
                          }
                        },
                        "arguments": []
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "_root"
                          }
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "appendChild"
                        }
                      },
                      "arguments": [
                        {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "template"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "content"
                              }
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "cloneNode"
                            }
                          },
                          "arguments": []
                        }
                      ]
                    }
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "ThisExpression"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "parentElement"
                      }
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "start"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "call"
                              }
                            },
                            "arguments": [
                              {
                                "type": "ThisExpression"
                              }
                            ]
                          }
                        }
                      ]
                    },
                    "alternate": null
                  }
                ]
              },
              "rest": null,
              "generator": false,
              "expression": false
            },
            "kind": "init"
          },
          {
            "type": "Property",
            "key": {
              "type": "Identifier",
              "name": "insertedCallback"
            },
            "value": {
              "type": "Identifier",
              "name": "start"
            },
            "kind": "init"
          },
          {
            "type": "Property",
            "key": {
              "type": "Identifier",
              "name": "removedCallback"
            },
            "value": {
              "type": "Identifier",
              "name": "stop"
            },
            "kind": "init"
          },
          {
            "type": "Property",
            "key": {
              "type": "Identifier",
              "name": "tick"
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "params": [],
              "defaults": [],
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "now"
                        },
                        "init": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "Date"
                          },
                          "arguments": []
                        }
                      }
                    ],
                    "kind": "var"
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "ThisExpression"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "_root"
                              }
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "querySelector"
                            }
                          },
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": "hh"
                            }
                          ]
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "textContent"
                        }
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "fmt"
                        },
                        "arguments": [
                          {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "now"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "getHours"
                              }
                            },
                            "arguments": []
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "_root"
                                }
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "querySelector"
                              }
                            },
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "sep"
                              }
                            ]
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "style"
                          }
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "visibility"
                        }
                      },
                      "right": {
                        "type": "ConditionalExpression",
                        "test": {
                          "type": "BinaryExpression",
                          "operator": "%",
                          "left": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "now"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "getSeconds"
                              }
                            },
                            "arguments": []
                          },
                          "right": {
                            "type": "Literal",
                            "value": 2
                          }
                        },
                        "consequent": {
                          "type": "Literal",
                          "value": "visible"
                        },
                        "alternate": {
                          "type": "Literal",
                          "value": "hidden"
                        }
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "ThisExpression"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "_root"
                              }
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "querySelector"
                            }
                          },
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": "mm"
                            }
                          ]
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "textContent"
                        }
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "fmt"
                        },
                        "arguments": [
                          {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "now"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "getMinutes"
                              }
                            },
                            "arguments": []
                          }
                        ]
                      }
                    }
                  }
                ]
              },
              "rest": null,
              "generator": false,
              "expression": false
            },
            "kind": "init"
          },
          {
            "type": "Property",
            "key": {
              "type": "Identifier",
              "name": "chime"
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "params": [],
              "defaults": [],
              "body": {
                "type": "BlockStatement",
                "body": []
              },
              "rest": null,
              "generator": false,
              "expression": false
            },
            "kind": "init"
          }
        ]
      }
    }
  ]
}
(function () {
    var template = document.currentScript.parentNode.querySelector('template');
    function start() {
        this.tick();
        this._interval = window.setInterval(this.tick.bind(this), 1000);
    }
    function stop() {
        window.clearInterval(this._interval);
    }
    function fmt(n) {
        return (n < 10 ? '0' : '') + n;
    }
    ({
        readyCallback: function () {
            this._root = this.createShadowRoot();
            this._root.appendChild(template.content.cloneNode());
            if (this.parentElement) {
                start.call(this);
            }
        },
        insertedCallback: start,
        removedCallback: stop,
        tick: function () {
            var now = new Date();
            this._root.querySelector('hh').textContent = fmt(now.getHours());
            this._root.querySelector('sep').style.visibility = now.getSeconds() % 2 ? 'visible' : 'hidden';
            this._root.querySelector('mm').textContent = fmt(now.getMinutes());
        },
        chime: function () {
        }
    });
});
