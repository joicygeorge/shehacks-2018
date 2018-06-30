var iron = {  
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
               12,
               19,
               3,
               5,
               2,
               3
            ],
            "backgroundColor":[  
               "rgba(255, 99, 132, 0.2)",
               "rgba(255, 99, 132, 0.2)",
               "rgba(255, 99, 132, 0.2)",
               "rgba(255, 99, 132, 0.2)",
               "rgba(255, 99, 132, 0.2)",
               "rgba(255, 99, 132, 0.2)"
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
            "label":"Recommended",
			"type": "line",
            "radius": 0,
            "data":[  
               7,
               7,
               7,
               7,
               7,
               7
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
                  "beginAtZero":true
               }
            }
         ]
      }
   }
}
	
var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, iron);

