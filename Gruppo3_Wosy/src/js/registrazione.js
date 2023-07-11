var index_home = document.getElementById("form");
var type = document.createElement("div");
type.innerHTML = "<script src='https://static.airtable.com/js/embed/embed_snippet_v1.js'></script><iframe class='airtable-embed airtable-dynamic-height' src='https://airtable.com/embed/shrxMW94QVd28heO1?backgroundColor=green' frameborder='0' onmousewheel='' width='100%' height='2294.2' style='background: transparent; border: 1px solid #ccc;'></iframe>";
index_home.replaceChildren(type);

document.getElementById("dati_personali").addEventListener("click", function () {
    type.innerHTML = "<script src='https://static.airtable.com/js/embed/embed_snippet_v1.js'></script><iframe class='airtable-embed airtable-dynamic-height' src='https://airtable.com/embed/shrxMW94QVd28heO1?backgroundColor=green' frameborder='0' onmousewheel='' width='100%' height='2294.2' style='background: transparent; border: 1px solid #ccc;'></iframe>";
    index_home.replaceChildren(type);
});

document.getElementById("esperienze").addEventListener("click", function () {
    type.innerHTML = "<script src='https://static.airtable.com/js/embed/embed_snippet_v1.js'></script><iframe class='airtable-embed airtable-dynamic-height' src='https://airtable.com/embed/shrwSFayqmdaEPbzw?backgroundColor=green' frameborder='0' onmousewheel='' width='100%' height='1273.2' style='background: transparent; border: 1px solid #ccc;'></iframe>"
    index_home.replaceChildren(type);
});

document.getElementById("istruzione").addEventListener("click", function () {
    type.innerHTML = "<script src='https://static.airtable.com/js/embed/embed_snippet_v1.js'></script><iframe class='airtable-embed airtable-dynamic-height' src='https://airtable.com/embed/shrDhvHNwWw2yG8el?backgroundColor=green' frameborder='0' onmousewheel='' width='100%' height='1072.2' style='background: transparent; border: 1px solid #ccc;'></iframe>";
    index_home.replaceChildren(type);
}
);

document.getElementById("competenze").addEventListener("click", function () {
    type.innerHTML = "<script src='https://static.airtable.com/js/embed/embed_snippet_v1.js'></script><iframe class='airtable-embed airtable-dynamic-height' src='https://airtable.com/embed/shrbbxHU3fv1wB5GP?backgroundColor=green' frameborder='0' onmousewheel='' width='100%' height='596.2' style='background: transparent; border: 1px solid #ccc;'></iframe>";
    index_home.replaceChildren(type);
}
);

document.getElementById("lingue").addEventListener("click", function () {
    type.innerHTML = "<script src='https://static.airtable.com/js/embed/embed_snippet_v1.js'></script><iframe class='airtable-embed airtable-dynamic-height' src='https://airtable.com/embed/shrSMqtwpYoQVoq3W?backgroundColor=green' frameborder='0' onmousewheel='' width='100%' height='845.2' style='background: transparent; border: 1px solid #ccc;'></iframe>";
    index_home.replaceChildren(type);
}
);

document.getElementById("progetti").addEventListener("click", function () {
    type.innerHTML = "<script src='https://static.airtable.com/js/embed/embed_snippet_v1.js'></script><iframe class='airtable-embed airtable-dynamic-height' src='https://airtable.com/embed/shrn6nmvCaV3d4RYy?backgroundColor=green' frameborder='0' onmousewheel='' width='100%' height='857.2' style='background: transparent; border: 1px solid #ccc;'></iframe>";
    index_home.replaceChildren(type);
}
);