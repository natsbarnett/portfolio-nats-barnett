let param = new URLSearchParams(location.search);
let project = param.get('project');

document.querySelector(".title_proj").innerHTML = "<h2 class=\"title_project\">" + " " + projects[project]["title"] + " • "+ projects[project]["title"] + " • "+ projects[project]["title"] +" • </h2>";
document.querySelector(".title_proj2").innerHTML = "<h2 class=\"title_project\">" + " " + projects[project]["title"] + " • "+ projects[project]["title"] + " • "+ projects[project]["title"] + " • </h2>";
document.querySelector(".desc_proj").innerHTML = "<p class=\"para_proj\">" + projects[project]["desc"] + "</p>";