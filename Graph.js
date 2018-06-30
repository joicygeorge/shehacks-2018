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
               20,
               41.6,
               22.5,
               30,
               11,
               55
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
            "label":"Recommended",
			"type": "line",
            "radius": 0,
            "data":[  
               15,
               15,
               15,
               15,
               15,
               15
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
                labelString: 'Ferritin (ug/L)'
            }
            }
         ]
      }
   }
}
	
var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, iron);

