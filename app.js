var noteR;
window.onload = (e) => {
  noteR = localStorage.getItem("note");
};

let plus = document.getElementById("add-note-block");

plus.onclick = function () {
  console.log("work");
  let note = document.getElementById("note-edit");
  let div = document.createElement("div");
  let table = document.createElement("table");
  let tr_h = document.createElement("tr");
  let th = document.createElement("th");
  let tr_b = document.createElement("tr");
  let td = document.createElement("td");

  div.className = "block-note";

  th.setAttribute("contenteditable", "true");
  td.setAttribute("contenteditable", "true");
  tr_h.appendChild(th);
  tr_b.appendChild(td);
  table.appendChild(tr_h);
  table.appendChild(tr_b);
  div.appendChild(table);

  note.appendChild(div);
};

// ==========================
// Menu bar options
// ==========================
// make bold
function makeBold() {
  let span = document.createElement("span");
  span.style.fontWeight = 700;

  if (document.getSelection) {
    let sel = document.getSelection();
    let range = sel.getRangeAt(0).cloneRange();
    range.surroundContents(span);
  }
}
// make italic
function makeItalic() {
  let span = document.createElement("span");
  span.style.fontStyle = "italic";

  if (document.getSelection) {
    let sel = document.getSelection();
    if (sel.rangeCount) {
      let range = sel.getRangeAt(0).cloneRange();
      range.surroundContents(span);
    }
  }
}

// ****************************
// text align option
// ****************************

// align left

function makeAlignLeft() {
  let span = document.createElement("span");
  span.style.textAlign = "center";

  if (document.getSelection) {
    let sel = document.getSelection();
    if (sel.rangeCount) {
      let range = sel.anchorNode;
      range.surroundContents(span);
    }
  }
}

// change font
// table version
// let table = document.querySelector("table");

// table.onclick = (e) => {
//   let font = document.getElementById("font-name");
//   font.onchange = () => {
//     console.log(e.target, "here");
//     e.target.style.fontFamily = font.value;
//   };
// };
// div version
let noteEdit = document.getElementById("note-edit");
noteEdit.onclick = (e) => {
  let font = document.getElementById("font-name");
  changeFont(font, e);
};
function changeFont(font, e) {
  font.onchange = () => {
    e.target.style.fontFamily = font.value;
  };
}
// auto save to loacal

// save
let form = document.getElementById("b-form");
let note = {};
form.onchange = (e) => {
  note[e.target.name] = e.target.value;
  // localStorage.setItem("note", JSON.stringify(note));
};

let block = document.getElementById("block-note");
block.oninput = (e) => {
  console.log(e.target.style.fontFamily);
  note["sec"] = e.target.innerText;
  // localStorage.setItem("note", JSON.stringify(note));
};
