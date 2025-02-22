---
date created: '<% tp.date.now("YYYY-MM-DD") %>'
---

# Weekly Journal for <% tp.date.now("YYYY-MM-DD") %>

<%*
// Make the function asynchronous using 'async'
async function extractTasks(sourceFileName, yourName) {
    // Read the content of the source file
    const scheduleContent = await tp.app.vault.read(tp.file.find_tfile(sourceFileName));

    const taskPattern = /## (?<date>\d{2}-\d{2}（[^）]+）)\n### (?<task>[\s\S]+?)\n- 时间：(?<time>[^\n]+)\n- 地点：(?<location>[^\n]+)\n- 相关人员：(?<participants>[^\n]+)\n/g;

    const tasks = [];
    let match;

    while ((match = taskPattern.exec(scheduleContent)) !== null) {
        const { date, task, time, location, participants } = match.groups;
        if (participants.includes(yourName) || participants.includes('全员')) {
            tasks.push(`| ${task.trim()} | ${date.trim()} | ${time.trim()} | ${location.trim()} |`);
        }
    }

    if (tasks.length === 0) {
        new Notice(`没有找到与${yourName}相关的任务或全员参与的任务。`);
        return '';
    }

    const header = "| Task | Date | Time | Location |\n| --- | --- | --- | --- |";
    return `${header}\n${tasks.join('\n')}`;
}

// Use Templater prompts to get the source file name and your name beforehand
const sourceFileName = await tp.system.prompt("请输入周计划文件名:");
const yourName = await tp.system.prompt("请输入你的名字:");

// Call the function with parameters
// Note: Append the result to the template output using 'tR += ...'
tR += await extractTasks(sourceFileName, yourName);
%>
<% tp.file.rename("Weekly Journal for " + tp.date.now()) %>