# My new-tab page/start-up page
## res/
In the folder public/, there should be a default-res/ folder.
Please copy that and rename it to res/, and change the courses.csv and settings.json file accordingly
### settings.json
Exactly as it sounds, a json file with setting configuration.
Currently, it only has your name.

### courses.csv
The courses.csv file contains the information of my schedule (start time, color, room number, course name, end time).
You can substitute those properties with whatever you like, just know that the room number will only show when hovering over the course name.

If you understand what's going on from the example in the default-res folder, then go right ahead.
Otherwise, here's a quick rundown.

1. The first row represents Monday, the second row represents Tuesday, etc.
2. Each "course" (of course this can be anything) takes up 5 cells.

|Start Time|Color|Location|Course Name|End Time|
| --- | --- | --- | --- | --- |
