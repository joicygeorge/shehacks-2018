
var B12 = {  
    "type":"bar",
    "data":{  
       "labels":[  
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun"
       ],
       "datasets":[  
          {  
             "label":"Results",
             "data":[  
                212,
                220,
                210,
                160,
                150,
                155
             ],
             "backgroundColor":[  
                "rgba(234, 48, 70, 0.5)",
                "rgba(234, 48, 70, 0.5)",
                "rgba(234, 48, 70, 0.5)",
                "rgba(234, 48, 70, 0.5)",
                "rgba(234, 48, 70, 0.5)",
                "rgba(234, 48, 70, 0.5)"
             ],
             "borderColor":[  
                "rgba(255,99,132,1)",
                "rgba(255,99,132,1)",
                "rgba(255,99,132,1)",
                "rgba(255,99,132,1)",
                "rgba(255,99,132,1)",
                "rgba(255,99,132,1)"
             ],
             "borderWidth":1
          },
          {  
             "label":"Recommended Minimum",
             "type": "line",
             "radius": 0,
             "data":[  
                200,
                200,
                200,
                200,
                200,
                200
             ],
             "backgroundColor":[  
                "rgba(54, 162, 235, 0)",
                "rgba(54, 162, 235, 0)",
                "rgba(54, 162, 235, 0)",
                "rgba(54, 162, 235, 0)",
                "rgba(54, 162, 235, 0)",
                "rgba(54, 162, 235, 0)"
             ],
             "borderColor":[  
                "rgba(54, 162, 235, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(54, 162, 235, 1)"
             ],
             "borderWidth":1
          }
       ]
    },
    "options":{  
       "scales":{  
          "yAxes":[  
             {  
                "ticks":{  
                   "beginAtZero":true,
                   labelString: 'Timeline'
                }, 
             scaleLabel:{
                 display: true,
                 labelString: 'B12 (pg/mL)'
             }
             }
          ]
       }
    }
 }
     
var ctx1 = document.getElementById("myChart_B12");
var myChart = new Chart(ctx1, B12);
