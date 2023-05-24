$(document).ready(function () {
    $("#searchTheKey").on('keyup', function(){
        var value = $(this).val().toLowerCase();
        $(".search-item").each(function () {
           if ($(this).text().toLowerCase().search(value) > -1) {
              $(this).show();
              $(this).parentsUntil( ".row" ).show();
           } else {
              $(this).parentsUntil( ".row" ).hide();
           }
        });
     }) 
   $('.navbar-toggler').click(function(){
    console.log("navbar-toggler clicked")
        $(".sidebar").toggle();
        $(".content").toggle();
        }
        );
    $(".avatar").click(function () {
        var wd = screen.width;
        console.log("avatar clicked")
        if (wd>635){
            $(".profil-box").children().slideToggle("slow");
            $(".sidebar").toggleClass('pt-5')
        }

    });
    $(".forms").on('click', function () {
        console.log("form clicked")
        $(".menu").animate({ hight: 'toggle' });
    })

    $(".personal-information").on("submit", function (e) {
            e.preventDefault()
            console.log("successful submit")
            $(".user-name").text($("#userName").val())
            $(".user-position").text($("#position").val())
            
    })
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
    

    $(".multible-file-uploade").on('click', '.add-file-upload', function () {
        var file_uploaded = $('#file-uploade-3').html()
        $(".multible-file-uploade").append(file_uploaded)
    });

    $(".task-form").on("submit", function (e) {
        e.preventDefault()
        if (($(".title").val() == "") && ($(".datetimepicker-input").val() == "") && ($(".people").val() == "")) {
            console.log("wrong submit")
        }
        else {
            console.log("successful submit")
            $(".time-line").append("<li class='task shadow bg-white rounded m-2 p-2 w-75'><h5 class='task-title'>" + $(".title").val() + "</h5><h6 class='date-time'>" + $(".datetimepicker-input").val() + "</h6></li>")
            $(".time-line").show();
        }


    })

    var password = $("password").val();
    var confirmPassword = $("c-password").val();
    if (password != confirmPassword) {
        $(".password-validation").append("<p>test</p>")
    }

        $('#datetimepicker1').datetimepicker(); 
        
    });

    const barChart = document.getElementById('bar-chart');
        const pieChart = document.getElementById('pie-chart');
        const lineChart = document.getElementById('line-chart');
        const doughnutChart1 = document.getElementById('doughnut-chart-1');
        const doughnutChart2 = document.getElementById('doughnut-chart-2');
        const doughnutChart3 = document.getElementById('doughnut-chart-3');
        const doughnutChart4 = document.getElementById('doughnut-chart-4');
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
                    label: 'Progress',
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
                    'March',
                    'May',
                    'July',
                    'September',
                    'November',
                    'December'
                ],
                datasets: [{
                    label: 'Progress',
                    data: [ 59, 80, 81, 56, 10, 85, 70],
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
                    label: 'Progress',
                    data: [100,10],
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
                    label: 'Progress',
                    data: [100, 90],
                    backgroundColor: [
                        'rgb(47, 131, 247)',
                        'rgb(236, 246, 254)',
                    ],
                    hoverOffset: 2
                }]
            },
        });
        new Chart(doughnutChart3, {
            type: 'doughnut',
            data: {
                // labels: [
                //     'Red',
                //     'Blue',
                // ],
                datasets: [{
                    label: 'Progress',
                    data: [100, 40],
                    backgroundColor: [
                        'rgb(47, 131, 247)',
                        'rgb(236, 246, 254)',
                    ],
                    hoverOffset: 2
                }]
            },
        });
        new Chart(doughnutChart4, {
            type: 'doughnut',
            data: {
                // labels: [
                //     'Red',
                //     'Blue',
                // ],
                datasets: [{
                    label: 'Progress',
                    data: [100, 80],
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
                    label: 'Progress',
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






