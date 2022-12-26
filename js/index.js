$(document).ready(function () {
    // $('.selectpicker').selectpicker();
    // $(".navbar-toggler").click(function () {
    //     console.log("navbar-toggler clicked")
    //     $(".sidebar").animate({ width: 'toggle' });

    // });
    $(".avatar").click(function () {
        console.log("avatar clicked")
        $(".profil-box").children().slideToggle("slow");

    });
    $(".signUp-link").click(function () {
        console.log("signUp-link clicked")
        $(".login-form").hide()
        $(".registration-form").animate({ hight: 'toggle' });
    });
    $(".login-link").click(function () {
        console.log("signUp-link clicked")
        $(".registration-form").hide()
        $(".login-form").animate({ hight: 'toggle' });
    });
    $(".forms").on('click', function () {
        console.log("form clicked")
        $(".menu").animate({ hight: 'toggle' });
    })

    $(".multible-file-uploade").on('click', '.add-file-upload', function () {
        var file_uploaded = $('#file-uploade-3').html()
        $(".multible-file-uploade").append(file_uploaded)
    });

    $(".task-form").on("submit", function (e) {
        e.preventDefault()
        if (($(".title").val() == "") && ($(".date").val() == "") && ($(".time").val() == "") && ($(".people").val() == "")) {
            console.log("wrong submit")
        }
        else {
            console.log("successful submit")
            $(".time-line").append("<li class='task shadow bg-white rounded m-2 p-2'><h5 class='task-title'>" + $(".title").val() + "</h5><h6 class='date-time'>" + $(".date").val() + " " + $(".time").val() + "</h6></li>")
            $(".time-line").show();
        }


    })

    var password = $("password").val();
    var confirmPassword = $("c-password").val();
    if (password != confirmPassword) {
        $(".password-validation").append("<p>test</p>")
    }

        const barChart = document.getElementById('bar-chart');
        const pieChart = document.getElementById('pie-chart');
        const lineChart = document.getElementById('line-chart');
        const doughnutChart1 = document.getElementById('doughnut-chart-1');
        const doughnutChart2 = document.getElementById('doughnut-chart-2');
        const bubbleChart = document.getElementById('bubble-chart');


        new Chart(barChart, {
            type: 'bar',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        new Chart(pieChart, {
            type: 'pie',
            data: {
                labels: [
                    'Red',
                    'Blue',
                    'Yellow'
                ],
                datasets: [{
                    label: 'My First Dataset',
                    data: [300, 50, 100],
                    backgroundColor: [
                        'rgb(3, 30, 69)',
                        'rgb(54, 162, 235)',
                        'rgb(229, 235, 247)'
                    ],
                    hoverOffset: 4
                }]
            }
        });
        new Chart(lineChart, {
            type: 'line',
            data: {
                labels: [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September',
                    'October',
                    'November',
                    'December'
                ],
                datasets: [{
                    label: 'My First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 10, 80, 90, 85, 70, 30, 0, 10],
                    fill: false,
                    borderColor: 'rgb(47, 131, 247)',
                    tension: 0.1
                }]
            },

        });
        new Chart(doughnutChart1, {
            type: 'doughnut',
            data: {
                datasets: [{
                    label: 'My First Dataset',
                    data: [300, 100],
                    backgroundColor: [
                        'rgb(47, 131, 247)',
                        'rgb(236, 246, 254)',
                    ],
                    hoverOffset: 4
                }]
            }
        });
        new Chart(doughnutChart2, {
            type: 'doughnut',
            data: {
                // labels: [
                //     'Red',
                //     'Blue',
                // ],
                datasets: [{
                    label: 'My First Dataset',
                    data: [300, 50],
                    backgroundColor: [
                        'rgb(47, 131, 247)',
                        'rgb(236, 246, 254)',
                    ],
                    hoverOffset: 2
                }]
            },
        });
        new Chart(bubbleChart, {
            type: 'bubble',
            data: {
                datasets: [{
                    label: 'First Dataset',
                    data: [{
                        x: 20,
                        y: 30,
                        r: 7
                    }, {
                        x: 40,
                        y: 10,
                        r: 7
                    },
                    {
                        x: 30,
                        y: 17,
                        r: 7
                    },
                    {
                        x: 50,
                        y: 20,
                        r: 7
                    },
                    {
                        x: 60,
                        y: 1,
                        r: 7
                    }
                    ],
                    backgroundColor: 'rgb(47, 131, 247)'
                }],
            }
        });

        // doughnutChart2.width = 100;
        // doughnutChart2.height = 100;
        // doughnutChart2.resize();


    });





