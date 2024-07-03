$(document).ready(function() {
    "use strict";

    if ($('#chart_2').length > 0) {
        var ctx2 = document.getElementById("chart_2").getContext("2d");
        var data2 = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: "My First dataset",
                backgroundColor: "rgb(233, 30, 99)",
                borderColor: "rgb(233, 30, 99)",
                data: [10, 30, 80, 61, 26, 75, 40]
            }, {
                label: "My Second dataset",
                backgroundColor: "rgb(76, 175, 80)",
                borderColor: "rgb(76, 175, 80)",
                data: [28, 48, 40, 19, 86, 27, 90]
            }]
        };

        var hBar = new Chart(ctx2, {
            type: "horizontalBar",
            data: data2,

            options: {
                tooltips: {
                    mode: "label"
                },
                scales: {
                    yAxes: [{
                        stacked: true,
                        gridLines: {
                            color: "#eee",
                        },
                        ticks: {
                            fontFamily: "Lato",
                            fontColor: "#2f2c2c"
                        }
                    }],
                    xAxes: [{
                        stacked: true,
                        gridLines: {
                            color: "#eee",
                        },
                        ticks: {
                            fontFamily: "Lato",
                            fontColor: "#2f2c2c"
                        }
                    }],

                },
                elements: {
                    point: {
                        hitRadius: 40
                    }
                },
                animation: {
                    duration: 3000
                },
                responsive: true,
                legend: {
                    display: false,
                },
                tooltips: {
                    backgroundColor: 'rgba(47,44,44,.9)',
                    cornerRadius: 0,
                    footerFontFamily: "'Lato'"
                }

            }
        });
    }

    if ($('#chart_3').length > 0) {
        var ctx3 = document.getElementById("chart_3").getContext("2d");
        var data3 = {
            labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
            datasets: [{
                label: "My First dataset",
                backgroundColor: "rgba(233, 30, 99, 0.8)",
                borderColor: "rgba(233, 30, 99, 0.8)",
                pointBackgroundColor: "rgba(233, 30, 99, 0.8)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(233, 30, 99, 1)",
                data: [65, 59, 90, 81, 56, 55, 40]
            }, {
                label: "My Second dataset",
                backgroundColor: "rgba(86,111,201,0.8)",
                borderColor: "rgba(86,111,201,0.8)",
                pointBackgroundColor: "rgba(86,111,201,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(86,111,201,1)",
                data: [28, 48, 40, 19, 96, 27, 100]
            }]
        };
        var radarChart = new Chart(ctx3, {
            type: "radar",
            data: data3,
            options: {
                scale: {
                    ticks: {
                        beginAtZero: true,
                        fontFamily: "Lato",

                    },
                    gridLines: {
                        color: "#eee",
                    },
                    pointLabels: {
                        fontFamily: "Lato",
                        fontColor: "#2f2c2c"
                    },
                },

                animation: {
                    duration: 3000
                },
                responsive: true,
                legend: {
                    labels: {
                        fontFamily: "Lato",
                        fontColor: "#2f2c2c"
                    }
                },
                tooltips: {
                    backgroundColor: 'rgba(47,44,44,.9)',
                    cornerRadius: 0,
                    footerFontFamily: "'Lato'"
                }
            }
        });
    }

    if ($('#chart_4').length > 0) {
        var ctx4 = document.getElementById("chart_4").getContext("2d");
        var data4 = {
            datasets: [{
                data: [
                    11,
                    16,
                    7,
                    8,
                    14
                ],
                backgroundColor: [
                    "rgba(86,111,201,.8)",
                    "rgb(233, 30, 99)",
                    "rgba(241,91,38,.8)",
                    "rgb(76, 175, 80)",
                    "rgba(244, 67, 54, 0.7)"
                ],
                label: 'My dataset' // for legend
            }],
            labels: [
                "lab 1",
                "lab 2",
                "lab 3",
                "lab 4",
                "lab 5"
            ]
        };
        var polarChart = new Chart(ctx4, {
            type: "polarArea",
            data: data4,
            options: {
                elements: {
                    arc: {
                        borderColor: "#fff"
                    }
                },
                scale: {
                    ticks: {
                        beginAtZero: true,
                        fontFamily: "Lato",

                    },
                    gridLines: {
                        color: "#eee",
                    }
                },
                animation: {
                    duration: 3000
                },
                responsive: true,
                legend: {
                    labels: {
                        fontFamily: "Lato",
                        fontColor: "#2f2c2c"
                    }
                },
                tooltips: {
                    backgroundColor: 'rgba(47,44,44,.9)',
                    cornerRadius: 0,
                    footerFontFamily: "'Lato'"
                }
            }
        });
    }

    if ($('#chart_5').length > 0) {
        var ctx5 = document.getElementById("chart_5").getContext("2d");
        var data5 = {
            datasets: [{
                label: 'First Dataset',
                data: [{
                    x: 80,
                    y: 60,
                    r: 10
                }, {
                    x: 40,
                    y: 40,
                    r: 10
                }, {
                    x: 30,
                    y: 40,
                    r: 20
                }, {
                    x: 20,
                    y: 10,
                    r: 10
                }, {
                    x: 50,
                    y: 30,
                    r: 10
                }],
                backgroundColor: "rgba(126, 87, 194, 0.8)",
                hoverBackgroundColor: "rgba(126, 87, 194, 1)",
            }, {
                label: 'Second Dataset',
                data: [{
                    x: 40,
                    y: 30,
                    r: 10
                }, {
                    x: 25,
                    y: 20,
                    r: 10
                }, {
                    x: 35,
                    y: 30,
                    r: 10
                }],
                backgroundColor: "rgb(233, 30, 99)",
                hoverBackgroundColor: "rgb(233, 30, 99)",
            }]
        };

        var bubbleChart = new Chart(ctx5, {
            type: "bubble",
            data: data5,
            options: {
                elements: {
                    points: {
                        borderWidth: 1,
                        borderColor: 'rgb(0, 0, 0)'
                    }
                },
                scales: {
                    xAxes: [{
                        ticks: {
                            min: -10,
                            max: 100,
                            fontFamily: "Lato",
                            fontColor: "#2f2c2c"
                        },
                        gridLines: {
                            color: "#eee",
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            fontFamily: "Lato",
                            fontColor: "#2f2c2c"
                        },
                        gridLines: {
                            color: "#eee",
                        }
                    }]
                },
                animation: {
                    duration: 3000
                },
                responsive: true,
                legend: {
                    labels: {
                        fontFamily: "Lato",
                        fontColor: "#2f2c2c"
                    }
                },
                tooltips: {
                    backgroundColor: 'rgba(47,44,44,.9)',
                    cornerRadius: 0,
                    footerFontFamily: "'Lato'"
                }
            }
        });
    }

    if ($('#chart_6').length > 0) {
        var ctx6 = document.getElementById("chart_6").getContext("2d");
        var data6 = {
            labels: [
                "lab 1",
                "lab 2",
                "lab 3"
            ],
            datasets: [{
                data: [300, 50, 100],
                backgroundColor: [
                    "rgb(233, 30, 99)",
                    "rgba(241,91,38,.8)",
                    "rgba(76, 175, 80, 1)"
                ],
                hoverBackgroundColor: [
                    "rgb(233, 30, 99)",
                    "rgba(241,91,38,.8)",
                    "rgba(76, 175, 80, 1)"
                ]
            }]
        };

        var pieChart = new Chart(ctx6, {
            type: 'pie',
            data: data6,
            options: {
                animation: {
                    duration: 3000
                },
                responsive: true,
                legend: {
                    labels: {
                        fontFamily: "Lato",
                        fontColor: "#2f2c2c"
                    }
                },
                tooltips: {
                    backgroundColor: 'rgba(47,44,44,.9)',
                    cornerRadius: 0,
                    footerFontFamily: "'Lato'"
                }
            }
        });
    }

    if ($('#chart_7').length > 0) {
        var ctx7 = document.getElementById("chart_7").getContext("2d");
        var data7 = {
            labels: [
                "lab 1",
                "lab 2",
                "lab 3"
            ],
            datasets: [{
                data: [300, 50, 100],
                backgroundColor: [
                    "rgb(233, 30, 99)",
                    "rgba(241,91,38,.8)",
                    "rgb(76, 175, 80)"
                ],
                hoverBackgroundColor: [
                    "rgb(233, 30, 99)",
                    "rgba(241,91,38,.8)",
                    "rgb(76, 175, 80)"
                ]
            }]
        };

        var doughnutChart = new Chart(ctx7, {
            type: 'doughnut',
            data: data7,
            options: {
                animation: {
                    duration: 3000
                },
                responsive: true,
                legend: {
                    labels: {
                        fontFamily: "Lato",
                        fontColor: "#2f2c2c"
                    }
                },
                tooltips: {
                    backgroundColor: 'rgba(47,44,44,.9)',
                    cornerRadius: 0,
                    footerFontFamily: "'Lato'"
                }
            }
        });
    }


    if ($('#chart_8').length > 0) {
        var ctx1 = document.getElementById("chart_8").getContext("2d");
        var data1 = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                    label: "Expressions",
                    backgroundColor: "rgba(121, 134, 203, 0.7)",
                    borderColor: "rgba(121, 134, 203, 0.7)",
                    pointBorderColor: "rgb(60,184,120)",
                    pointHighlightStroke: "rgb(161, 161, 195)",
                    data: [0, 49, 70, 58, 20, 55, 40]
                }, {
                    label: "Visitors",
                    backgroundColor: "rgba(102, 187, 106, 0.7)",
                    borderColor: "rgba(102, 187, 106, 0.7)",
                    pointBorderColor: "rgb(147, 207, 150)",
                    pointBackgroundColor: "rgba(102, 187, 106, 0.7)",
                    data: [18, 38, 40, 19, 76, 37, 90],
                }

            ]
        };

        var areaChart = new Chart(ctx1, {
            type: "line",
            data: data1,

            options: {
                tooltips: {
                    mode: "label"
                },
                elements: {
                    point: {
                        hitRadius: 90
                    }
                },

                scales: {
                    yAxes: [{
                        stacked: true,
                        gridLines: {
                            color: "#eee",
                        },
                        ticks: {
                            fontFamily: "Lato",
                            fontColor: "#2f2c2c"
                        }
                    }],
                    xAxes: [{
                        stacked: true,
                        gridLines: {
                            color: "#eee",
                        },
                        ticks: {
                            fontFamily: "Lato",
                            fontColor: "#2f2c2c"
                        }
                    }]
                },
                animation: {
                    duration: 3000
                },
                responsive: true,
                legend: {
                    display: false,
                },
                tooltips: {
                    backgroundColor: 'rgba(47,44,44,.9)',
                    cornerRadius: 0,
                    footerFontFamily: "'Lato'"
                }

            }
        });
    }

});
