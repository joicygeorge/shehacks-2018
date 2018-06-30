
var Folate = {  
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
                5,
                4,
                4,
                1.75,
                0.5,
                0.45
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
                2,
                2,
                2,
                2,
                2,
                2
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
                 labelString: 'Folate (ng/mL)'
             }
             }
          ]
       }
    }
 }
     
var ctx1 = document.getElementById("myChart_Folate");
var myChart = new Chart(ctx1, Folate);
