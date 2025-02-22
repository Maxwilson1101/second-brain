---
created date: '<% await tp.date.now("YYYY-MM-DD") %>'
note type: '<% await tp.system.suggester(["ZK", "EX"], ["ZK", "EX"]) %>'
subject: '<% await tp.system.prompt("please input a subject code (e.g. EDU):") %>'
topic: <% await tp.system.prompt("please input the topic code (format: \'nnnn\'):") %>
metadata: '<% await tp.system.prompt("please input the metadata (format: number):") %>'
tags:
detail: 
---
