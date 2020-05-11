# Project Overview

## Project Name

Find Drinks 

## Project Description

This is an app to help people search for drinks nearby.  Drinks could be coffee, bubble tea, tea, or kombucha etc.. 

## API and Data Sample

Specify the API you are using and include a link. Show us a snippet of JSON returned by your API so we know you can access it and get the info you need

I will be using Foursquare's API.  https://api.foursquare.com/v2/venues/explore?client_id=SVJRCTWSPPNDXTKD5QUGB4Q4210QCOM1HVTZQ1XWNQX3ED0B&client_secret=5XNAIWKWODNCHLJ5EVTGSZ3EELOKDKXVNQHBOTJ1KKDCGQFJ&near=new york, NY &query=coffee&v=20200510 

{
    "meta": {
        "code": 200,
        "requestId": "5eb8609cc8cff2001c4d80d9"
    },
    "response": {
        "suggestedFilters": {
            "header": "Tap to show:",
            "filters": [
                {
                    "name": "Open now",
                    "key": "openNow"
                },
                {
                    "name": "$-$$$$",
                    "key": "price"
                }
            ]
        },
        "geocode": {
            "what": "",
            "where": "new york ny",
            "center": {
                "lat": 40.742185,
                "lng": -73.992602
            },
            "displayString": "New York, NY, United States",
            "cc": "US",
            "geometry": {
                "bounds": {
                    "ne": {
                        "lat": 40.882214,
                        "lng": -73.907
                    },
                    "sw": {
                        "lat": 40.679548,
                        "lng": -74.047285
                    }
                }
            },
            "slug": "new-york-city-new-york",
            "longId": "72057594043056517"
        },
        "headerLocation": "New York",
        "headerFullLocation": "New York",
        "headerLocationGranularity": "city",
        "query": "coffee",
        "totalResults": 158,
        "suggestedBounds": {
            "ne": {
                "lat": 40.79267583420711,
                "lng": -73.95106540766615
            },
            "sw": {
                "lat": 40.682754579323465,
                "lng": -74.01340983773018
            }
        },

## Wireframes

- The front page of the app will look like this. The user has to choose of the the 4 options. (assets/frontPage.png). 
- After the user has made a choice, the second page will look like this, which is a list of options.  (assets/secondPage.png). 
- When the user clicks on the image or anywhere that relates to a particular selection, then the third page will like this this.  It's a page that highlights the business selected with reviews, location, rating, recommeded drinks listed.  (assets/thirdPage.png)

#### MVP 

- be able to search places on the front page 
- given 4 options to the user to choose from 
- the second page will be a list of businesses with relevent information, the user can can pick one of the choices and be prompted to an extended view of the business. 

#### PostMVP  

- enables the user to to answer which business he/she chosed to keep a record 
- Use local storage to save user favorites
- recommeneds user a random place right when the user opens the app 

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|May 8| Project Prompt | Incomplete
|May 9-10| Wireframes / Priority Matrix / Timeframes | Incomplete
|May 11| Core Application Structure (HTML, CSS, etc.) | Incomplete
|May 12| Pseudocode / actual code | Incomplete
|May 13| Initial Clickable Model  | Incomplete
|May 14| MVP | Incomplete
|May 15| Present | Incomplete

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matrix.  Link this image in a similar manner to your wireframes

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
