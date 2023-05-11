let param = new URLSearchParams(location.search);
let project = param.get('project');

/*Filter*/
document.querySelectorAll("input").forEach(e => { e.addEventListener("change", filtre) });

function filtre() {
    document.querySelector(".resultat").classList.toggle(this.name);
}
document.querySelector("title").innerText="Project • " + projects[project]["title"];

/*Filling the page of the projects with JS*/
document.querySelector(".title_proj").innerHTML = "<h2 class=\"title_project\">" + " " + projects[project]["title"] + " • " + projects[project]["title"] + " • " + projects[project]["title"] + " • </h2>";
document.querySelector(".title_proj2").innerHTML = "<h2 class=\"title_project\">" + " " + projects[project]["title"] + " • " + projects[project]["title"] + " • " + projects[project]["title"] + " • </h2>";
document.querySelector(".title_proj3").innerHTML = "<h2 class=\"txti\">" + " " + projects[project]["title"] + " • " + projects[project]["title"] + " • " + projects[project]["title"] + " • </h2>";
document.querySelector(".title_proj4").innerHTML = "<h2 class=\"txti\">" + " " + projects[project]["title"] + " • " + projects[project]["title"] + " • " + projects[project]["title"] + " • </h2>";

document.querySelector(".desc_proj").innerHTML = "<p class=\"para_proj\">" + projects[project]["desc"] + "</p>";
document.querySelector(".link").innerHTML = projects[project]["link"];
document.querySelector(".images").innerHTML = projects[project]["img"];
document.querySelector(".proj_title>h1").innerText = projects[project]["title"]
