particlesJS('particles',
            {
                'lan' : 'list_zh',
                'list':['MOBILE','WEB','SOA','ESB','WAS','WEBLOGIC','CICS','UNIONPAY','MASTERCARD','VISA','FIX','DB2','ORACLE','MQ'],
                'list_zh':['信用卡系统','核心业务系统','第三方支付系统','大小额支付系统','POS前置系统','报盘系统','个股期权系统','柜面系统','手机银行系统','ATM前置系统','网上交易系统','融资融券系统'],
                "particles": {
                    "number": {
                        "value": 12,
                        "density": {
                            "enable": true,
                            "value_area": 70
                        }
                    },
                    "color": {
//                      "value": "#eeeeee"
                        "value": "#ffffff"
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 0,
                            "color": "#000000"
                        },
                        "polygon": {
                            "nb_sides": 5
                        }
                    },
                    "opacity": {
                        "value": 1,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 5,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 30,
                            "size_min": 0.1,
                            "sync": false,
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 110,
//                      "color": "#aaaaaa",
                        "color": "#ffffff",
//                      "opacity": 0.9,
                        "opacity": 1,
//                      "width": 1.5
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": 4,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": false,
                            "mode": "repulse"
                        },
                        "onclick": {
                            "enable": false,
                            "mode": "push"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 300,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 200
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true,
                "config_demo": {
                    "hide_card": false,
                    "background_color": "#b61924",
                    "background_image": "",
                    "background_position": "100% 100%",
                    "background_repeat": "no-repeat",
                    "background_size": "cover"
                }
            }
    
    );
    particlesJS('particles_blue',
            {
                'lan' : 'cn',
                'list':[' '],
                'list_zh':[' '],
                "particles": {
                    "number": {
                        "value": 6,
                        "density": {
                            "enable": true,
                            "value_area": 30
                        }
                    },
                    "color": {
//                      "value": "#517f99"
                        "value": "#469AD5"
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 0,
//                          "color": "#517f99"
                            "color": "#469AD5"
                        },
                        "polygon": {
                            "nb_sides": 5
                        }
                    },
                    "opacity": {
                        "value": .5,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 4,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 40,
                            "size_min": 0.1,
                            "opacity": 0.4,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 150,
//                      "color": "#517f99",
                        "color": "#469AD5",
//                      "opacity": 0.9,
                        "opacity": .5,
//                      "width": 0.9
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": 4,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": false,
                            "mode": "repulse"
                        },
                        "onclick": {
                            "enable": false,
                            "mode": "push"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 400,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 200
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true,
                "config_demo": {
                    "hide_card": false,
                    "background_color": "#b61924",
                    "background_image": "",
                    "background_position": "100% 100%",
                    "background_repeat": "no-repeat",
                    "background_size": "cover"
                }
            }
    );